import axios from 'axios'

const URL = 'https://run.mocky.io/v3/7d7f67a4-8248-4270-bbee-9d4c91bce9d9'

export const findAll = (params: any) => {
  return axios
    .get(URL, { params })
    .then(function (response) {
      console.log(response)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      // always executed
    })
}

export const findOne = (accountId: string) => {
  return axios.get(`${URL}/${accountId}`)
}
