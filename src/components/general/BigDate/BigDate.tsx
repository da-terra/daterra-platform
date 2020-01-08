import React from "react";
import { FontWeight } from "../../../data/style/variables";
import { Month, Day } from "./styled";

import { parseISO, format } from "date-fns";
import { nl } from "date-fns/locale";

const BigDate: React.FC<any> = ({ className, date }) => {
  const parsedDate = parseISO(date);

  const month = format(parsedDate, "MMMM", { locale: nl });
  const day = format(parsedDate, "dd", { locale: nl });

  return (
    <time className={className} dateTime={date}>
      <Month fontWeight={FontWeight.Bold}>{month}</Month>
      <Day fontWeight={FontWeight.Black}>{day}</Day>
    </time>
  );
};

export default BigDate;
