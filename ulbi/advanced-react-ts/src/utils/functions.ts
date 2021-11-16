import moment, {Moment} from "moment";

export const getFormattedDate = (date: Moment | string): string => {
    return String(moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY'));
};
