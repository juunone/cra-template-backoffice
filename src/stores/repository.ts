import axios from "axios";

const URL = "https://run.mocky.io/v3/df439671-1f1b-431a-ac8b-7dccaf9ecd16";

export const findAll = (params: any) => {
  return axios
    .get(URL, { params })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export const findOne = (accountId: string) => {
  return axios.get(`${URL}/${accountId}`);
};
