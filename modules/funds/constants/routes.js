import { InvestCashStep, InvestLeverageStep } from "./invest";
import InvestPassthrough from "../components/InvestPassthrough";
import InvestDetails from "../components/InvestDetails";
import InvestSummary from "../components/InvestSummary";
import InvestLeverageOffers from "../components/InvestLeverageOffers";
import InvestLeverageLanding from "../components/InvestLeverageLanding";
import InvestLeverageDocuments from "../components/InvestLeverageDocuments";
import InvestCashLanding from "../components/InvestCashLanding";
import InvestDelegate from "../components/InvestDelegate";

export const investScreens = {
  [InvestCashStep.Landing]: InvestCashLanding,
  [InvestCashStep.Delegate]: InvestDelegate,
  [InvestCashStep.Pay]: InvestPassthrough,
  [InvestCashStep.Summary]: InvestSummary,

  [InvestLeverageStep.Landing]: InvestLeverageLanding,
  [InvestLeverageStep.Details]: InvestDetails,
  [InvestLeverageStep.Documents]: InvestLeverageDocuments,
  [InvestLeverageStep.Offers]: InvestLeverageOffers,
  [InvestLeverageStep.Summary]: InvestSummary,
};
