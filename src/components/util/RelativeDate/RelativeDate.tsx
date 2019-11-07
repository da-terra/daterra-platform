import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
  parseISO
} from "date-fns";
import {} from "date-fns/esm";

// @ts-ignore
const relativeTimeFormat = new Intl.RelativeTimeFormat("nl");

enum TimeFormatUnit {
  Days = "days",
  Months = "months",
  Years = "years"
}

type RelativeDateProps = {
  children: string;
};

const RelativeDate: React.FC<RelativeDateProps> = ({ children }) => {
  const parsedDate = parseISO(children);
  const now = new Date();

  const years = differenceInYears(parsedDate, now);
  const months = !years && differenceInMonths(parsedDate, now);
  const days = !months && differenceInDays(parsedDate, now);
  const minutes = !days && differenceInMinutes(parsedDate, now);
  const seconds = !minutes && differenceInSeconds(parsedDate, now);

  const value = years || months || days || minutes || seconds;

  const unit = years
    ? TimeFormatUnit.Years
    : months
    ? TimeFormatUnit.Months
    : TimeFormatUnit.Days;

  return relativeTimeFormat.format(value, unit);
};

export default RelativeDate;
