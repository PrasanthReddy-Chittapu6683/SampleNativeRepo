import { createContext, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { UserContext } from "../../../core/contexts/UserContext";
import {
  getLeverageFields,
  getSubscriptionDocumentation,
  subscribeToFund,
} from "../services/funds";
import { FundContext } from "./FundContext";
import { API_URL } from "@env";
import { InvestPaymentMethod, investSteps } from "../constants/invest";
import { AppContext, useAppState } from "../../../core/contexts/AppContext";
import { useColorMode } from "native-base";
import { errorHandler } from "../../../core/services/errors";
import { goBack } from "../../../core/services/navigation";

export const InvestContext = createContext({
  paymentMethod: null,
  step: null,
  steps: [],
  nextStep: () => {},
  previousStep: () => {},
  setStep: () => {},
  fields: [],
  fieldValues: {},
  setFieldValue: () => {},
  setFieldValues: () => {},
  leverageOffers: [],
  selectedLeverageOffer: null,
  setSelectedLeverageOffer: () => {},
  getLeverageOffers: () => {},

  subscribe: () => {},
  subscription: null,
  cashPaymentUrl: "",
});

export const InvestProvider = ({ children }) => {
  const { colorMode } = useColorMode();
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const { fund } = useContext(FundContext);
  const route = useRoute();
  const paymentMethod = route.params?.paymentMethod;
  const investAmount = route.params?.investAmount;
  const { setState: setAppState } = useContext(AppContext);
  const [subscription, setSubscription] = useAppState(
    "invest.subscription",
    null
  );
  const [fields, setFields] = useAppState("invest.fields", []);
  const [fieldValues, setFieldValues] = useAppState("invest.fieldValues", {});
  const [leverageOffers, setLeverageOffers] = useAppState(
    "invest.leverageOffers",
    null
  );
  const [selectedLeverageOffer, setSelectedLeverageOffer] = useAppState(
    "invest.selectedLeverageOffer",
    null
  );
  const [paymentUrl, setPaymentUrl] = useAppState("invest.paymentUrl", "");
  const steps = investSteps[paymentMethod];
  const step = route?.params?.step || steps[0].name;

  const handleSetStep = (newStep) => {
    navigation.push("Invest", {
      step: newStep,
      fundId: route.params?.fundId,
      paymentMethod,
      investAmount,
    });
  };

  const handleNextStep = (method = "push") => {
    const currentStep = route.params?.step || steps[0].name;
    const currentIndex = steps.findIndex((step) => step.name === currentStep);
    const nextIndex = Math.min(steps.length - 1, currentIndex + 1);
    const nextStep = steps[nextIndex];

    navigation[method]("Invest", {
      step: nextStep.name,
      fundId: route?.params?.fundId,
      paymentMethod,
      investAmount,
    });
  };

  const handlePreviousStep = () => {
    goBack();
  };

  const handleGetLeverageOffers = async () => {
    setLeverageOffers(null);
    setSelectedLeverageOffer(null);
    // todo: need to get this from the API
    // const offers = await getLeverageOffers({
    //   fund,
    //   values: fieldValues,
    //   amount: investAmount,
    // });
    const offers = [
      {
        id: "1",
        config: {
          credit_provider: "First Republic Bank",
          facility_interest_rate: 8,
          facility_limit: 10000,
        },
      },
    ];
    setLeverageOffers(offers || []);
  };

  const handleSubscribe = async () => {
    return errorHandler(async () => {
      if (!paymentMethod) {
        alert("No payment method specified");
      }

      if (!investAmount) {
        alert("Incorrect amount specified");
      }

      // todo: move to different place
      // if (paymentMethod === InvestPaymentMethod.Leverage) {
      //   if (!selectedLeverageOffer) {
      //     alert("No leverage offer selected");
      //     return;
      //   }
      //
      //   await confirmLeverageOffer(selectedLeverageOffer);
      // }

      const subscription = await subscribeToFund(
        fund,
        investAmount,
        paymentMethod
      );
      const newAppState = {
        "invest.subscription": subscription,
      };
      // todo: currently uses passthrough but will probably need to expand to use other providers. Suggestion: use the api to construct the url instead of hardcoding it

      if (paymentMethod === InvestPaymentMethod.Cash) {
        const documentation = await getSubscriptionDocumentation(
          fund,
          subscription
        );
        if (!documentation) {
          alert(
            "No documentation found for subscription. Please contact support for more information"
          );
          return;
        }

        const newPaymentUrl = `${API_URL}/provider/passthrough/embed?token=${documentation.token}&organisation_id=${fund.fund.organisation_id}&colorMode=${colorMode}`;
        newAppState["invest.paymentUrl"] = newPaymentUrl;

        // WebBrowser.openBrowserAsync(newPaymentUrl);
      }

      if (paymentMethod === InvestPaymentMethod.Leverage) {
        const fieldsToUse = await getLeverageFields(fund, subscription);

        newAppState["invest.fields"] = fieldsToUse;
      }

      // todo: move leverage offer logic to a separate place
      // if (paymentMethod === InvestPaymentMethod.Leverage) {
      //   await sendLeverageForSubscription(selectedLeverageOffer, subscription);
      // }
      setAppState(newAppState);
      handleNextStep();
    });
  };

  return (
    <InvestContext.Provider
      value={{
        paymentMethod,
        step,
        steps,
        setStep: handleSetStep,
        nextStep: handleNextStep,
        previousStep: handlePreviousStep,
        fields,
        fieldValues,
        setFieldValue: (field, value) => {
          setFieldValues({
            ...fieldValues,
            [field]: value,
          });
        },
        setFieldValues: (values) => setFieldValues(values),
        leverageOffers,
        selectedLeverageOffer,
        setSelectedLeverageOffer,
        getLeverageOffers: handleGetLeverageOffers,
        subscribe: handleSubscribe,
        subscription,
        cashPaymentUrl: paymentUrl,
      }}
    >
      {children}
    </InvestContext.Provider>
  );
};
