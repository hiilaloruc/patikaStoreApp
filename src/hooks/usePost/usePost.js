import {useState} from 'react';
import axios from 'axios';

function usePost() {
  //states
  const [data, setData] = useState(null); //state for data info
  const [loading, setLoading] = useState(false); //state for loading info
  const [error, setError] = useState(null); //state for error handling

  //request
  const post = async (url, apiData) => {
    //apiData: if data needed to make request, ex: username, password for Login
    setError(null);
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setData(null);
      setError(err);
      setLoading(false);
    }
  };
  return {data, loading, error, post};
}
export default usePost;
