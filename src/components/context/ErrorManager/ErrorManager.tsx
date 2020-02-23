import React from "react";
import ErrorPage from "../../pages/Error";
import { ApolloError } from "apollo-boost";
import { GraphQLError } from "graphql";
import { withRouter, RouteComponentProps } from "react-router-dom";

type ErrorManagerState = {
  code?: string;
  message?: string;
  route?: string;
};

type ErrorManagerProps = RouteComponentProps;

class ErrorManager extends React.Component<
  ErrorManagerProps,
  ErrorManagerState
> {
  state: ErrorManagerState = {};

  componentDidMount() {
    const { history } = this.props;
    history.listen(this.onHistoryChange);
  }

  private onHistoryChange = () => {
    this.setState({
      code: undefined,
      message: undefined
    });
  };

  static getDerivedStateFromError(error: Error | ApolloError) {
    if (error instanceof ApolloError) {
      const [firstGraphQlError] = error.graphQLErrors;
      const [firstNetworkError] = (error.networkError as any)?.result?.errors;

      const firstError =
        firstGraphQlError || (firstNetworkError as GraphQLError);

      return {
        code: firstError?.extensions?.code,
        message: firstError?.message
      };
    }

    return {
      name: error.name,
      message: error.message
    };
  }

  render() {
    if (this.state.code || this.state.message) {
      return <ErrorPage code={this.state.code} message={this.state.message} />;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorManager);
