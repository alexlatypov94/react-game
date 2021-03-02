import { useCallback, useState } from "react";

export const useHttp = (): any => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-null/no-null
  const [error, setError] = useState(null);

  // eslint-disable-next-line no-null/no-null
  const request: any = useCallback(async (url: string, method = "GET", body: any = null, headers: any = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }
      const response: any = await fetch(url, { method, body, headers });
      const data: any = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(data.message || "Что-то пошло не так");
      }

      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  // eslint-disable-next-line no-null/no-null
  const clearError: any = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
