import {useEffect, useState} from 'react';

const BASE_URL =
  'https://itunes.apple.com/search?media=musicVideo&explicit=yes&term=';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setLoading(false);
        setData(json.results);
        setError('');
      } catch (e) {
        setError(`${e} Could not Fetch Data `);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const search = (term: string) => {
    setUrl(BASE_URL + term);
  };

  return {data, loading, error, search};
};
