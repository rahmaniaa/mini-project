import moment from 'moment';

export function dateFormatter(date) {
  return moment(date).utc().format('ddd, MMM D @ hh:mm A z');
}
