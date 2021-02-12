import {useRef, useState, useEffect} from 'react';
import {API} from '../axios';

export const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!url) return;
    (async function () {
      setStatus('fetching');
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus('fetched');
      } else {
        const {data, status} = await API.get(url);
        cache.current[url] = status === 200 ? data : [];
        setData(status === 200 ? data : []);
        setStatus('fetched');
      }
    })();
  }, [url]);
  return {status, data};
};
