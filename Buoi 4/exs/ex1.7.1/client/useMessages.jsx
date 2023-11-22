// useMessages.js
import { useState, useEffect } from "react";

const useMessages = (forum) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let didCancel = false;
    setError(null);

    const fetchData = async () => {
      if (forum) {
        try {
          setLoading(true);
          const response = await fetch(
            `http://localhost:5000/messages/${forum}`
          );
          if (!response.ok) {
            throw new Error(`Unable to fetch messages for ${forum}`);
          }
          const body = await response.json();
          if (!didCancel) {
            setData(body);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      } else {
        setData([]);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [forum]);

  return { data, loading, error };
};

export default useMessages;
