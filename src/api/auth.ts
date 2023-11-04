import axios from "axios";

import { BASE_URL } from ".";

export const signin = async (payload: {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signin`, payload);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
