import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context as GatewayContext } from "../../components/context/Gateway";
import {
  StorageManagerContext,
  StorageKey
} from "../../components/context/StorageManager";
import { BlockRenderer } from "./styled";

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
  // const { targetGroup, setGroup } = useContext(LocalStorageContext);

  const gateway = useContext(GatewayContext);
  const storage = useContext(StorageManagerContext);

  const [response, setResponse] = useState<any>(undefined);

  useEffect(() => {
    const pageName = page || "homepage";
    const targetGroup = storage.getValue(StorageKey.TargetAudience);

    console.log(targetGroup);

    gateway
      .query(contentPageQuery(pageName, targetGroup), undefined, "POST")
      .then(setResponse);
  }, [gateway, storage, page]);

  if (!response) {
    return null;
  }

  const blocks = response.data.page.blocks.map(JSON.parse);

  return <BlockRenderer blocks={blocks} />;
};

export default ContentPage;
