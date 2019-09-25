import React from "react";

type GatewayProps = {
  url: string;
  options: RequestInit;
  children: JSX.Element;
};

export const Context = React.createContext({
  fetch: (path: string, options: RequestInit): object => Promise.resolve()
});

class Gateway extends React.Component<GatewayProps> {
  private readonly baseUrl: URL;
  private readonly baseOptions: RequestInit;

  constructor(props: GatewayProps) {
    super(props);

    this.baseUrl = new URL(props.url);
    this.baseOptions = props.options;
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

  render() {
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          fetch: this.fetch
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export default Gateway;
