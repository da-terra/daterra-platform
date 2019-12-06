import React, { Fragment } from "react";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { nl } from "date-fns/locale";

// @ts-ignore
const formateDistanceToNowOptions = {
  addSuffix: true,
  includeSeconds: true,
  locale: nl
};

type RelativeDateProps = {
  children: string;
};

const RelativeDate: React.FC<RelativeDateProps> = ({ children }) => {
  const timeDistance = formatDistanceToNow(
    fromUnixTime(parseInt(children, 10) / 1000),
    formateDistanceToNowOptions
  );

  return <Fragment>{timeDistance}</Fragment>;
};

export default RelativeDate;
