import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  //states
  const [data, setData] = useState([]); //state for data info
  const [loading, setLoading] = useState(true); //state for loading info
  const [errMessage, setErrMessage] = useState(null); //state for error handling

  //first operation that will be triggered when this page loads
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // func to get data from api
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false); // no more loading screen needed since data is fetched
    } catch (err) {
      setErrMessage(err.message);
      setLoading(false);
    }
  };

  return {errMessage, loading, data};
}

export default useFetch;
