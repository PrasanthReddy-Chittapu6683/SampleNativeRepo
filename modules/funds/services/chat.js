import { api } from "../../../core/services/api";

export const sendChatQuery = async (fund, query) => {
  const url = `organisation/${fund.fund.organisation_id}/fund/${fund.fund.id}/ai`;
  const { payload } = await api.post({
    url: url,
    data: {
      question: query,
    },
  });

  return payload;
};
