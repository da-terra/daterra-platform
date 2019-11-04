import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context as GatewayContext } from "../../components/Gateway";
import { BlockRenderer } from "./styled";

const contentPageQuery = (name: string) => `
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
  const [response, setResponse] = useState<any>(undefined);

  useEffect(() => {
    gateway.query(contentPageQuery(page || 'homepage'), undefined, "POST").then(setResponse);
  }, [gateway, page]);

  if (!response) {
    return null;
  }

  const blocks = response.data.page.blocks.map(JSON.parse);

  return <BlockRenderer blocks={blocks} />;
};

export default ContentPage;
