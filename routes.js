import LoginScreen from "./modules/login/components/LoginScreen";
import DashboardScreen from "./modules/dashboard/components/DashboardScreen";
import VerifyScreen from "./modules/login/components/VerifyScreen";
import DetailsScreen from "./modules/login/components/DetailsScreen";
import { FundsProvider } from "./modules/funds/contexts/FundsContext";
import FundScreen from "./modules/funds/components/FundScreen";
import { FundProvider } from "./modules/funds/contexts/FundContext";
import InvestScreen from "./modules/funds/components/InvestScreen";
import { InvestProvider } from "./modules/funds/contexts/InvestContext";
import FundsScreen from "./modules/funds/components/FundsScreen";
import CoInvestmentsScreen from "./modules/co-invest/components/CoInvestmentsScreen";
import PortfolioScreen from "./modules/portfolio/components/PortfolioScreen";
import { CoInvestProvider } from "./modules/co-invest/contexts/CoInvestContext";
import { CoInvestmentsProvider } from "./modules/co-invest/contexts/CoInvestmentsContext";
import CoInvestmentScreen from "./modules/co-invest/components/CoInvestmentScreen";
import { CoInvestmentProvider } from "./modules/co-invest/contexts/CoInvestmentContext";
import InvestAmount from "./modules/funds/components/InvestAmount";
import InvestmentsScreen from "./modules/investments/components/InvestmentsScreen";
import ResourcesScreen from "./modules/resources/components/ResourcesScreen";
import HelpScreen from "./modules/help/components/HelpScreen";
import DashboardPortfolioModal from "./modules/dashboard/components/DashboardPortfolioModal";
import FundModal from "./modules/funds/components/FundModal";
import MainScreen from "./core/components/MainScreen";
import FundChat from "./modules/funds/components/FundChat";
import { SubscriptionsProvider } from "./modules/funds/contexts/SubscriptionsContext";
import FundVideo from "./modules/funds/components/FundVideo";
import NotificationsModal from "./modules/notfications/components/NotificationsModal";
import { NotificationsProvider } from "./modules/notfications/contexts/NotificationsContext";
import AgreementsScreen from "./modules/agreements/components/AgreementsScreen";
import InvestChooseLeverage from "./modules/funds/components/InvestChooseLeverage";
import InvestDelegateInput from "./modules/funds/components/InvestDelegateInput";
import InvestDelegateComplete from "./modules/funds/components/InvestDelegateComplete";
import ProfileModal from "./modules/profile/components/ProfileModal";
import { InvestmentsProvider } from "./modules/investments/contexts/InvestmentsContext";
import InvestmentInvestorReportingScreen from "./modules/investments/components/InvestmentInvestorReportingScreen";
import FundCommitmentOverviewScreen from "./modules/funds/components/FundCommitmentOverviewScreen";
import FundInvestmentForecasterScreen from "./modules/funds/components/FundInvestmentForecasterScreen";
import LoadingScreen from "./core/components/LoadingScreen";
import InvestmentDetailsScreen from "./modules/investments/components/InvestmentDetailsScreen";
import { InvestmentProvider } from "./modules/investments/contexts/InvestmentContext";
import InvestmentMoicTrackerScreen from "./modules/investments/components/InvestmentMoicTrackerScreen";
import WelcomeSliderScreen from "./modules/home/components/WelcomeSliderScreen";
import LandingpageScreen from "./modules/landingPage/LandingpageScreen";
import EmailPageScreen from "./modules/emailPage/EmailPageScreen";

export const routes = {
  loading: {
    name: "Loading",
    route: "",
    component: LoadingScreen,
    options: {
      headerShown: false,
    },
  },
  landingPage: {
    name: "LandingPage",
    route: "landingPage",
    component: LandingpageScreen,
    options: {
      headerShown: false,
    },
  },
  emailPage: {
    name: "EmailPage",
    route: "emailPage",
    component: EmailPageScreen,
    options: {
      headerShown: false,
    },
  },
  home: {
    name: "Home",
    route: "welcome",
    component: WelcomeSliderScreen,
    options: {
      headerShown: false,
    },
  },
  welcome: {
    name: "Welcome",
    route: "welcome-slides",
    component: WelcomeSliderScreen,
    options: {
      headerShown: false,
    },
  },
  login: {
    name: "Login",
    route: "login",
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  verify: {
    name: "Verify",
    route: "verify",
    component: VerifyScreen,
    options: {
      headerShown: false,
    },
  },
  details: {
    name: "Details",
    route: "details",
    component: DetailsScreen,
    options: {
      headerShown: false,
    },
  },
  agreements: {
    name: "Agreements",
    route: "agreements",
    component: AgreementsScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  main: {
    name: "Main",
    route: "home",
    component: MainScreen,
    options: {
      headerShown: false,
    },
  },
  dashboard: {
    name: "Dashboard",
    route: "dashboard",
    component: DashboardScreen,
    providers: [FundsProvider, SubscriptionsProvider, InvestmentsProvider],
    options: {
      headerShown: false,
    },
  },
  dashboardPortfolioModal: {
    name: "DashboardPortfolioModal",
    route: "portfolio-modal",
    component: DashboardPortfolioModal,
    providers: [SubscriptionsProvider],
    options: {
      headerShown: false,
      presentation: "modal",
    },
  },
  fund: {
    name: "Fund",
    route: "fund/:fundId",
    component: FundScreen,
    providers: [FundProvider],
    options: {
      headerShown: false,
    },
  },
  fundModal: {
    name: "FundModal",
    route: "fund/:fundId/details",
    component: FundModal,
    providers: [FundProvider],
    options: {
      headerShown: false,
      presentation: "modal",
    },
  },
  fundChat: {
    name: "FundChat",
    route: "fund/:fundId/chat",
    component: FundChat,
    providers: [FundProvider],
    options: {
      headerShown: false,
      presentation: "modal",
    },
  },
  fundVideo: {
    name: "FundVideo",
    route: "fund/:fundId/video",
    component: FundVideo,
    providers: [FundProvider],
    options: {
      headerShown: false,
      presentation: "modal",
    },
  },

  fundCommitmentOverview: {
    name: "FundCommitmentOverview",
    route: "fund/:fundId/commitment",
    component: FundCommitmentOverviewScreen,
    providers: [FundProvider],
    options: {
      headerShown: false,
    },
  },
  fundInvestmentForecaster: {
    name: "FundInvestmentForecaster",
    route: "fund/:fundId/forecaster",
    component: FundInvestmentForecasterScreen,
    providers: [FundProvider],
    options: {
      headerShown: false,
    },
  },
  investAmount: {
    name: "InvestAmount",
    route: "invest/:fundId/amount",
    component: InvestAmount,
    providers: [FundProvider],
    options: {
      headerShown: false,
    },
  },
  investChooseLeverage: {
    name: "InvestChooseLeverage",
    route: "invest/:fundId/leverage",
    component: InvestChooseLeverage,
    providers: [FundProvider],
    options: {
      headerShown: false,
    },
  },
  invest: {
    name: "Invest",
    route: "invest/:fundId",
    component: InvestScreen,
    providers: [FundProvider, InvestProvider],
    options: {
      headerShown: false,
    },
  },
  investDelegateInput: {
    name: "InvestDelegateInput",
    route: "invest/:fundId/delegate",
    component: InvestDelegateInput,
    providers: [FundProvider, InvestProvider],
    options: {
      headerShown: false,
    },
  },
  investDelegateComplete: {
    name: "InvestDelegateComplete",
    route: "invest/:fundId/delegate-complete",
    component: InvestDelegateComplete,
    providers: [FundProvider],
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  funds: {
    name: "Funds",
    route: "funds",
    component: FundsScreen,
    providers: [FundsProvider],
    options: {
      headerShown: false,
    },
  },
  // todo: remove as don't think it's needed
  coInvest: {
    name: "Co-Investments",
    route: "co-investments",
    component: CoInvestmentsScreen,
    providers: [CoInvestmentsProvider],
    options: {
      headerShown: false,
    },
  },
  // todo: remove as don't think it's needed

  coInvestment: {
    name: "Co-Investment",
    route: "co-investment",
    component: CoInvestmentScreen,
    providers: [CoInvestmentProvider, CoInvestProvider],
    options: {
      headerShown: false,
    },
  },
  // todo: remove as don't think it's needed

  portfolio: {
    name: "Portfolio",
    route: "portfolio",
    component: PortfolioScreen,
    options: {
      headerShown: false,
    },
  },
  finance: {
    name: "Investments",
    route: "my-investments",
    component: InvestmentsScreen,
    options: {
      headerShown: false,
    },
  },
  investmentDetails: {
    name: "InvestmentDetails",
    route: "investment/:investmentId",
    component: InvestmentDetailsScreen,
    providers: [InvestmentProvider],
    options: {
      headerShown: false,
    },
  },
  investorReporting: {
    name: "InvestmentInvestorReporting",
    route: "investment/:investmentId/investor-reporting",
    component: InvestmentInvestorReportingScreen,
    providers: [InvestmentProvider],
    options: {
      headerShown: false,
    },
  },
  investmentMoicTracker: {
    name: "InvestmentMoicTracker",
    route: "investment/:investmentId/moic-tracker",
    component: InvestmentMoicTrackerScreen,
    providers: [InvestmentProvider],
    options: {
      headerShown: false,
    },
  },
  resources: {
    name: "Resources",
    route: "resources",
    component: ResourcesScreen,
    options: {
      headerShown: false,
    },
  },
  help: {
    name: "Help",
    route: "help",
    component: HelpScreen,
    options: {
      headerShown: false,
    },
  },
  notifications: {
    name: "Notifications",
    route: "notifications",
    component: NotificationsModal,
    providers: [NotificationsProvider],
    options: {
      headerShown: false,
      presentation: "modal",
    },
  },
  profile: {
    name: "Profile",
    route: "profile",
    component: ProfileModal,
    options: {
      headerShown: false,
      presentation: "modal",
    },
  },
};

export const useRoutes = () => {
  const routesToUse = [
    routes.loading,
    routes.landingPage,
    routes.home,
    routes.emailPage,
    routes.welcome,
    routes.login,
    routes.verify,
    routes.details,
    routes.main,
    routes.agreements,
    routes.dashboardPortfolioModal,
    routes.fund,
    routes.fundModal,
    routes.fundChat,
    routes.fundVideo,
    routes.fundCommitmentOverview,
    routes.fundInvestmentForecaster,
    routes.investAmount,
    routes.investChooseLeverage,
    routes.invest,
    routes.investDelegateInput,
    routes.investDelegateComplete,
    routes.coInvest,
    routes.coInvestment,
    routes.portfolio,
    routes.notifications,
    routes.profile,
    routes.investmentDetails,
    routes.investorReporting,
    routes.investmentMoicTracker,
  ];

  return routesToUse;
};
export const useMenuRoutes = () => {
  const routesToUse = [
    routes.dashboard,
    routes.funds,
    routes.finance,
    routes.resources,
    routes.help,
  ];

  return routesToUse;
};
