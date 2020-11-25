import axios from 'axios';

export const useFetch = ({ url, method, body, onSuccess }) => {
  const doFetch = async () => {
    try {
      const response = await axios[method](url, body);
      console.log('useFetch response log: ', response.data);

      if (onSuccess) {
        console.log('entered onSuccess');
        onSuccess(response.data);
      }
    } catch (err) {
      console.log('useFetch err log: ', err);
    }
  };

  return doFetch;
};
