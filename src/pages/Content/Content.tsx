import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context as GatewayContext } from "../../components/context/Gateway";
import { Context, StorageKey } from "../../components/context/StorageManager";
import { BlockRenderer, SplashScreen } from "./styled";

const ErrorPage = React.lazy(() => import("../Error"));

const contentPageQuery = (name: string, targetGroup: string) => `
{
  page(name: "${name}") {
    name
    blocks
  }
}
`;

const ContentPage: React.FC = () => {
  const { page } = useParams();

  const gateway = useContext(GatewayContext);
  const storage = useContext(Context);

  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const pageName = page || "homepage";
    const targetGroup = storage.getValue(StorageKey.TargetGroup);

    setError(undefined);

    gateway
      .query(contentPageQuery(pageName, targetGroup), undefined, "POST")
      .then(async response => {
        setData(await response.json());
      })
      .catch(async errorResponse =>
        setError({
          status: errorResponse.status,
          errors: await errorResponse.json()
        })
      );
  }, [gateway, storage, page]);

  if (error) {
    return <ErrorPage {...error} />;
  }

  if (data) {
    const blocks = data.data.page.blocks.map(JSON.parse);

    return <BlockRenderer blocks={blocks} />;
  }

  return <SplashScreen />;
};

export default ContentPage;
