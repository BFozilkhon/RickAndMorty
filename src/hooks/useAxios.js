import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

export const useAxios = () => {
  const request = async ({ method = 'get', url = '' }) => {
    return await axios({ method, url: `${REACT_APP_BASE_URL}${url}` })
      .then((res) => res?.data)
      .catch((err) => err);
  };

  return { request };
};
