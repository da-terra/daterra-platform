import React from "react";
import ErrorPage from "../../../pages/Error";

type IError = Error & {
  code?: string;
  errors: string[];
};

type ErrorManagerState = {
  error?: IError;
  info?: any;
};

class ErrorManager extends React.Component {
  state: ErrorManagerState = {};

  componentDidCatch(error: IError, info: any) {
    console.error(error, info);

    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage code={this.state.error.code} />;
    }

    return this.props.children;
  }
}

export default ErrorManager;
