import { useState, useEffect, useContext } from "react";
import { Context as GatewayContext } from "../../components/context/Gateway";

type GraphQlErrorType = {
  status: number;
  errors: string[];
};

const useGraphql = <T>(
  query: any,
  variables?: any,
  method?: IMethod
): [T | undefined, GraphQlErrorType] => {
  const [error, setError] = useState();
  const [response, setResponse] = useState<T>();

  const gateway = useContext(GatewayContext);

  useEffect(() => {
    setError(undefined);

    gateway
      .query(query, variables, method)
      .then(async response => {
        const data = await response.json();

        setResponse(data.data as T);
      })
      .catch(async errorResponse => {
        const errors = await errorResponse.json();

        setError({
          status: errorResponse.status,
          errors
        });
      });
  }, [gateway, method, query, variables]);

  return [response, error];
};

export default useGraphql;
