import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Center, Divider, Flex, Heading, Spinner } from "native-base";
import { UserContext } from "../../../core/contexts/UserContext";
import { FundsContext } from "../../funds/contexts/FundsContext";
import { SubscriptionsContext } from "../../funds/contexts/SubscriptionsContext";
import { ApiState } from "../../../core/services/api";
import { useNavigation } from "@react-navigation/native";
import InProgressSubscriptions from "../../funds/components/InProgressSubscriptions";
import { InvestmentsContext } from "../../investments/contexts/InvestmentsContext";
import InvestmentsSummaryTease from "../../investments/components/InvestmentsSummaryTease";
import FundsSection from "../../funds/components/FundsSection";

const DashboardScreen = () => {
  const navigation = useNavigation();
  // const { user } = useContext(UserContext); TODO:: PRCV
  const { user } = {
    user: {
      first_name: "Grace",
      last_name: ""
    }
  };
  // const { subscriptions, subscriptionsLoading } =  TODO:: PRCV
  //   useContext(SubscriptionsContext);
  const { subscriptions, subscriptionsLoading } = {
    subscriptions: [], subscriptionsLoading: "success"
  }
  const { investmentsLoading } = useContext(InvestmentsContext);
  // const { availableFunds, availableFundsLoading } = useContext(FundsContext); TODO:: PRCV
  const { availableFunds, availableFundsLoading } = {
    availableFundsLoading: "success",
    availableFunds: [
      {
        "id": "3e45d9b2-6f0f-42ea-b2a5-17eb80085cc3",
        "name": "Motive Opportunity",
        "description": "Test Opportunity",
        "open_date": "2023-08-31T00:00:00.000Z",
        "close_date": "2023-09-30T00:00:00.000Z",
        "minimum_investment_amount": "10000",
        "maximum_investment_amount": "100000",
        "active": true,
        "subscription_provider_id": null,
        "leverage_provider_id": null,
        "fund": {
          "name": "Motive Capital Fund III",
          "id": "e7ee57f2-fab5-4fe0-8f64-db2d6d6eff4c",
          "organisation_id": "d108997e-d7c8-4152-8c87-176df56382c5",
          "description": null,
          "data": {
            "id": "c39cca43-bb5d-4e14-a676-26ccc80b79cb",
            "name": "Motive Capital Fund III",
            "tags": "equity",
            "stage": "Fundraising",
            "gp_name": "Motive Capital Management, LLC",
            "hardcap": {
              "amount": 2500000000,
              "currency": "USD"
            },
            "industry": {
              "0": "Financial services",
              "1": "Technology"
            },
            "provider": {
              "id": "b308536e-2082-46ec-b0ea-7aba28fb0872",
              "name": "Fund Provider - Spoke",
              "provider": "spoke"
            },
            "vehicles": {
              "0": {
                "name": "Motive Capital Fund III-A, LP ",
                "catch_up": 20,
                "structure": "Limited partnership",
                "description": "This limited partnership is partnership formed to facilitate investment by certain non-U.S. investors. The terms of any Parallel Investment Vehicle shall be substantively consistent in all material respects with the terms of this Agreement but may include such differences as are required by the legal, tax, regulatory or similar considerations referred to in the preceding sentence",
                "hurdle_rate": 8,
                "jurisdiction": "Cayman Islands",
                "investor_types": {
                  "0": "Qualified purchaser",
                  "1": "Accredited investor",
                  "2": "Knowledgeable employee"
                },
                "default_vehicle": true,
                "management_fees": {
                  "0": {
                    "rate": 2,
                    "fee_type": "Tiered rate",
                    "payment_frequency": "Semi-annually in advance"
                  }
                },
                "minimum_investment": {
                  "amount": 50000,
                  "currency": "USD"
                },
                "carried_interest_rate": 20,
                "investor_tax_eligibility": "Non-US",
                "tax_reporting_documentation": {
                  "0": "1099"
                }
              },
              "1": {
                "name": "Motive Capital Fund III-B, LP ",
                "structure": "Limited partnership",
                "description": "This limited partnership is formed to facilitate investment by non-U.S. governmental investors that are described in section 892 of the U.S. Internal Revenue Code of 1986",
                "jurisdiction": "Luxembourg",
                "investor_types": {
                  "0": "Qualified purchaser",
                  "1": "Accredited investor"
                },
                "default_vehicle": false,
                "management_fees": {
                  "0": {
                    "rate": 1.5,
                    "fee_type": "Tiered rate",
                    "payment_frequency": "Annually in arrears",
                    "additional_information": "1.50% of Commitments (until Step down Date)"
                  }
                },
                "minimum_investment": {
                  "amount": 50000,
                  "currency": "USD"
                },
                "investor_tax_eligibility": "Non-US",
                "tax_reporting_documentation": {
                  "0": "K1"
                }
              }
            },
            "item_code": "test2",
            "image_urls": {
              "0": {
                "image_url": "https://s3-eu-west-1.amazonaws.com/xyz.jigsaw.mkt-sandbox-v2.document-storage/public/a83f9057-a862-4e24-9850-486b5b851b1b/Motive-logo.png",
                "order_index": 0
              }
            },
            "description": "Motive Partners’ focused investment strategy leverages the strengths of the Motive Partners team and integrated model of bringing deep investing, operating and innovating capabilities to capitalize on the complexities within the financial technology sector and, in doing so, seek to deliver attractive absolute and relative returns on a risk-adjusted basis.\n\nThe Fund will primarily target growth equity and buyout investments in technology-enabled financial and business services companies, headquartered generally in North America and Europe, focused on five sub-sectors: Banking & Payments, Capital Markets, Data & Services, Wealth & Asset Management, and Insurance. Similar to MCF1 and MCF2, Motive Partners expects the Fund’s portfolio to largely result from proprietary or advantaged processes. Motive Partners intends to leverage its extensive industry network, as well as its deep sector experience across investing, operating and innovating in financial technology.",
            "target_i_r_r": {
              "net_max": 22,
              "net_min": 20,
              "gross_max": 25,
              "gross_min": 24
            },
            "target_raise": {
              "amount": 3250000000,
              "currency": "USD"
            },
            "vintage_year": 2023,
            "current_raise": {
              "amount": 1000000,
              "currency": "USD"
            },
            "inception_date": "2022-06-29",
            "target_m_o_i_c": {
              "net_max": 3.5,
              "net_min": 3,
              "gross_max": 5,
              "gross_min": 4
            },
            "term_extension": "1+1 subject to approval",
            "waterfall_type": "American",
            "product_tagline": "Motive has established Fund III to make growth equity and buyout investments in software and information services companies serving the financial and business services sectors. This fund is focused on high growth and high returns",
            "closing_schedule": {
              "0": {
                "closing_date": "2023-12-29",
                "opening_date": "2023-09-22",
                "closing_amount": {
                  "amount": 550000,
                  "currency": "USD"
                },
                "closing_description": "Employee close"
              }
            },
            "open_for_funding": false,
            "expected_holdings": {
              "maximum": 20,
              "minimum": 30
            },
            "fund_manager_team": {
              "0": {
                "name": "Rob Hayvaert",
                "role": "Managing Partner"
              },
              "1": {
                "name": "Scott Kauffman",
                "role": "Founding Partner"
              },
              "2": {
                "name": "James O'Neill",
                "role": "Founding Partner"
              },
              "3": {
                "name": "Blythe Masters",
                "role": "Founding Partner, Investment Team "
              },
              "4": {
                "name": "Andrew Tarver ",
                "role": "Head of Motive Create"
              },
              "5": {
                "name": "Kristy Trieste",
                "role": "Founding Partner, CFO "
              }
            },
            "geographical_focus": {
              "0": "North America",
              "1": "Europe"
            },
            "product_term_years": 12,
            "performance_to_date": {
              "end_date": "2022-11-14",
              "start_date": "2022-11-08"
            },
            "estimated_close_date": "2023-09-29",
            "gp_commitment_amount": {
              "amount": 10000000,
              "currency": "USD"
            },
            "product_strategy_type": "Growth equity",
            "product_support_contact": "info@motive.com",
            "gp_commitment_percentage": 2,
            "product_sub_strategy_type": {
              "0": "Buyouts",
              "1": "Growth equity"
            },
            "target_return_description": "12-16%"
          }
        },
        "style": {},
        "organisation": {
          "name": "testapollo",
          "id": "d108997e-d7c8-4152-8c87-176df56382c5",
          "style": {}
        },
        "total_user_subscription_amount": null
      }
    ]
  }
  const date = new Date();
  const hasSubscriptions = subscriptions?.length > 0;
  const subscriptionsLoaded = subscriptionsLoading === ApiState.Success;
  const subscriptionsExist = hasSubscriptions && subscriptionsLoaded;
  const investmentsLoaded = investmentsLoading === ApiState.Success;
  const hasFunds = availableFunds?.length > 0;
  const fundsLoaded = availableFundsLoading === ApiState.Success;
  const fundsExist = hasFunds && fundsLoaded;

  const isLoading = () => {
    if (fundsExist || subscriptionsExist) return false;
    if (subscriptionsExist || fundsExist) return false;
    return !subscriptionsLoaded || !fundsLoaded || !investmentsLoaded;
  };
  const getSalutation = () => {
    const hour = date.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <Layout
      justifyContent={"flex-start"}
      showMenu
      offsetSides={0}
      offsetBottom={"40px"}
      title={
        <Flex flexDirection={"row"}>
          <Heading
            fontFamily={"light"}
            fontSize={"title"}
            textTransform={"none"}
            letterSpacing={"0.1px"}
          >
            {getSalutation()},{" "}
          </Heading>
          <Heading
            fontSize={"title"}
            textTransform={"none"}
            letterSpacing={"0.1px"}
          >
            {user?.first_name}
          </Heading>
        </Flex>
      }
    >
      <Box>
        {investmentsLoaded && (
          <>
            <InvestmentsSummaryTease maxW={"400px"} />
            <Divider mb={7} mt={8} />
          </>
        )}
        {hasSubscriptions && <InProgressSubscriptions />}
        {hasFunds && (
          <FundsSection
            funds={availableFunds}
            title={"Available Funds"}
            subTitle={"To get started, select a fund to invest in"}
            cta={"See all"}
            onCtaPress={() => {
              navigation.setParams({
                currentTab: "Funds",
              });
            }}
          />
        )}
        {isLoading() && (
          <Center my={6}>
            <Spinner size={"lg"} />
          </Center>
        )}
      </Box>
    </Layout>
  );
};

export default DashboardScreen;
