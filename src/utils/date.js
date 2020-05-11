import moment from "moment";
import dateConfig from "../config/date";

export const formatDateAndTime = date => moment(date).format(dateConfig.dateTimeFormat);
