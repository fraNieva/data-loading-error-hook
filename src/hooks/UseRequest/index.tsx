import { useState, useEffect } from "react";

function useRequest<D>(url: string) {
  const [data, setData] = useState<D | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>({});

  useEffect(() => {
    let ignore = false;

    const fetchUrl = () => {
      try {
        setError({});
        fetch(url)
          .then((res) => res.json())
          .then((response) => {
            if (!ignore) setData(response);
          });
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUrl();

    return () => {
      ignore = true;
    };
  }, [url]);

  return [data, loading, error];
}

export default useRequest;
