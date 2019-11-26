import React, { useContext, useMemo } from "react";
import {
  Context as StorageContext,
  StorageKey
} from "../../../../components/context/StorageManager";
import { Context as QuickScanContext } from "../../QuickScan";
import { LoadingScreen } from "./styled";
import useGraphql from "../../../../util/hooks/useGraphql";

const graphqlQuery = `
  mutation createQuickScanResult(
    $company: QuickScanResultCompanyInput!
    $person: QuickScanResultPersonInput!
    $answers: [QuickScanResultAnswerInput!]!
    $comment: String
  ) {
    createQuickScanResult(
      company: $company,
      person: $person,
      answers: $answers,
      comment: $comment
    ) {
      uuid
    }
  }
`;

const QuickScanResult: React.FC = () => {
  const quickScan = useContext(QuickScanContext);
  const storage = useContext(StorageContext);

  const graphqlVariables = useMemo(
    () => ({
      ...quickScan.result,
      answers: Object.keys(quickScan.result.answers).map(key => ({
        questionId: key,
        value: quickScan.result.answers[key]
      }))
    }),
    [quickScan]
  );

  const [data, error] = useGraphql(graphqlQuery, graphqlVariables);

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
