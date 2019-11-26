import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context, StorageKey } from "../../components/context/StorageManager";
import { BlockRenderer, SplashScreen } from "./styled";
import useGraphql from "../../util/hooks/useGraphql";

const ErrorPage = React.lazy(() => import("../Error"));

const graphqlQuery = (name: string, targetGroup: string) => `
{
  page(name: "${name}") {
    name
    blocks
  }
}
`;

const ContentPage: React.FC = () => {
  const { page = "homepage" } = useParams();
  const storage = useContext(Context);

  const targetGroup = storage.getValue(StorageKey.TargetGroup);
  const query = graphqlQuery(page, targetGroup);

  const [data, error] = useGraphql(query);

  if (error) {
    return <ErrorPage {...error} />;
  }

  if (data) {
    const blocks = data.page.blocks.map(JSON.parse);

    return <BlockRenderer blocks={blocks} />;
  }

  return <SplashScreen />;
};

export default ContentPage;
