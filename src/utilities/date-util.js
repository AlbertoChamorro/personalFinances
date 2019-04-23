import moment from 'moment';

export default class DateUtil {
    // FORMATS
    static DATE_TIME_FORMAT = "DD/MM/YYYY HH:mm:ss";
    static toDate(date, format){
        return moment(date || new Date()).format(format || DateUtil.DATE_TIME_FORMAT);
    }
}