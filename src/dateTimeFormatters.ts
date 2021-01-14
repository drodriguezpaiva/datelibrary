import moment from 'moment';

/**
 * getLocalDate : Get the ISO 8601 date
 * convert depending on lang
 *
 * @param  {Object} `date`
 * @param  {string} `lang`
 * @return {string}
 */

export const getLocalDate = (date, lang: string) => {
  let localTime = '';

  if (lang === 'ESes') {
    localTime = moment.utc(date).local().format('MM/DD/YYYY HH:mm A');
  } else {
    localTime = moment.utc(date).local().format('DD/MM/YYYY HH:mm A');
  }

  return localTime;
};
//console.log(getLocalDate('2021-01-14T13:03:33Z', 'ESes'));

/**
 * getFormatDate : Get the string date
 * convert depending on lang
 *
 * @param  {Object} `date`
 * @param  {string} `lang`
 * @return {string}
 */

export const getFormatDate = (date, lang: string) => {
  let localTime: any = '';

  if (lang === 'ESes') {
    localTime = moment('2020-10-10', 'YYYY-MM-DD');
  } else {
    localTime = moment('2020-10-10', 'YYYY-MM-DD');
  }

  return localTime;
};
