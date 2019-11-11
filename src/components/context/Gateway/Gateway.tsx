import React from "react";

type GatewayProps = {
  fetchUrl: string;
  fetchOptions: RequestInit;
  graphQlUrl: string;
  children: React.ReactNode;
};

type Method = "GET" | "HEAD" | "POST" | "PUT" | "UPDATE" | "DELETE";

type GraphQlResponse = {
  data: object;
};

export const Context = React.createContext({
  fetch: (path: string, options: RequestInit): Promise<object> =>
    Promise.reject(),
  query: (
    query: string,
    variables?: object,
    method?: Method
  ): Promise<GraphQlResponse> => Promise.reject()
});

class Gateway extends React.Component<GatewayProps> {
  private readonly baseUrl: URL;
  private readonly baseOptions: RequestInit;

  private readonly graphQlUrl: URL;

  constructor(props: GatewayProps) {
    super(props);

    this.baseUrl = new URL(props.fetchUrl);
    this.baseOptions = props.fetchOptions;

    this.graphQlUrl = new URL(props.graphQlUrl);
  }

  private fetch = async (
    path: string,
    options: RequestInit
  ): Promise<Response> => {
    const url = new URL(path, this.baseUrl);

    const response = await fetch(url.href, {
      ...options,
      ...this.baseOptions
    });

    return response;
  };

  private query = async (
    query: string,
    variables: object | undefined | null,
    method: Method = "GET"
  ): Promise<GraphQlResponse> => {
    const url = new URL(this.graphQlUrl.href);

    const requestConfig = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    switch (method) {
      /**
       * Add query and variables to url search parameters if request method is GET or HEAD
       */
      case "GET":
      case "HEAD":
        url.searchParams.append("query", encodeURI(query));

        if (variables) {
          url.searchParams.append(
            "variables",
            encodeURI(JSON.stringify(variables))
          );
        }
        break;

      /**
       * Add query and variables to request body if request method is GET or HEAD
       */
      default:
        const body = JSON.stringify({ query: query, variables });

        // Add body property to requestConfig
        Object.assign(requestConfig, { body });
        break;
    }

    const response = await fetch(url.href, requestConfig);

    return await response.json();
  };

  render() {
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          fetch: this.fetch,
          query: this.query
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default Gateway;
