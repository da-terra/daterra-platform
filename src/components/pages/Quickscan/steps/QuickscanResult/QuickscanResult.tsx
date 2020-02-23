import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import React, { useContext, useEffect } from "react";
import {
  Context as StorageContext,
  StorageKey
} from "../../../../../components/context/StorageManager";
import SplashScreen from "../../../../general/SplashScreen";
import { Context as QuickscanContext } from "../../Quickscan";

const query = loader("./createQuickscanResult.graphql");

const QuickscanResult: React.FC = () => {
  const quickscan = useContext(QuickscanContext);
  const storage = useContext(StorageContext);

  const [sendResult, { data, error }] = useMutation(query);

  useEffect(() => {
    const answers = Object.keys(quickscan.result.answers).map(key => ({
      questionId: key,
      value: quickscan.result.answers[key]
    }));

    const variables: any = {
      ...quickscan.result,
      target: storage.getValue(StorageKey.TargetGroup),
      answers
    };

    sendResult({ variables });
  }, [storage, quickscan, sendResult]);

  if (data) {
    storage.setValue(
      StorageKey.QuickscanResultUuid,
      data.createQuickscanResult.uuid,
      true
    );
  }

  if (error) {
    throw error;
  }

  return <SplashScreen />;
};

export default QuickscanResult;
