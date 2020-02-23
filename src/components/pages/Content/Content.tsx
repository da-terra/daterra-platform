import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Context,
  StorageKey
} from "../../../components/context/StorageManager";
import BlockRenderer from "../../blocks";
import SplashScreen from "../../general/SplashScreen";

const contentQuery = loader("./content.graphql");

const ContentPage: React.FC = () => {
  const { slug = "homepage" } = useParams();
  const storage = useContext(Context);

  const target = storage.getValue(StorageKey.TargetGroup);

  const variables = useMemo(
    () => ({
      slug,
      target
    }),
    [slug, target]
  );

  const { loading, data, error } = useQuery(contentQuery, { variables });

  if (error) {
    throw error;
  }

  if (loading) {
    return <SplashScreen />;
  }

  const blocks = data.page.blocks.map(JSON.parse);

  return <BlockRenderer blocks={blocks} />;
};

export default ContentPage;
