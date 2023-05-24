import axios from "axios";

const apiCall = (endpoint, method, parameters, data, verb) =>
  axios({
    method: verb,
    url: `${endpoint}/${method}${parameters !== null ? parameters : ""}`,
    data: data !== null ? data : "",
    headers: {
      Accept: "application/json",
    },
  });
export default apiCall;
