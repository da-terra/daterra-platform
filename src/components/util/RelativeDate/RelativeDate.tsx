import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
  fromUnixTime
} from "date-fns";

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
  const parsedDate = fromUnixTime(parseInt(children, 10) / 1000);
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
