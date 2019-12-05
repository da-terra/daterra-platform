import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {
  Context as StorageContext,
  StorageKey
} from "../../../../components/context/StorageManager";
import { Context as QuickScanContext } from "../../QuickScan";
import { LoadingScreen } from "./styled";

const query = loader("./createQuickScanResult.graphql");

const QuickScanResult: React.FC = () => {
  const quickScan = useContext(QuickScanContext);
  const storage = useContext(StorageContext);

  const answers = Object.keys(quickScan.result.answers).map(key => ({
    questionId: key,
    value: quickScan.result.answers[key]
  }));

  const variables: any = {
    ...quickScan.result,
    target: storage.getValue(StorageKey.TargetGroup),
    answers
  };

  const { data, error } = useQuery(query, { variables });

  if (data) {
    storage.setValue(
      StorageKey.QuickScanResultUuid,
      data.createQuickScanResult.uuid,
      true
    );
  }

  if (error) {
    throw error;
  }

  return <LoadingScreen />;
};

export default QuickScanResult;
