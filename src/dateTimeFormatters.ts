import moment from 'moment';
import { enUS, formatDateUS, formatDateES, formatDatetimeUS, formatDatetimeES } from './constants';

/**
 * getLocalDatetime : Get the ISO 8601 date and time
 * convert depending on lang
 *
 * @param  {*} `date`
 * @param  {string} `lang`
 * @return {string}
 */

export const getLocalDatetime = (date: any, lang: string = enUS) => {
  let localDatetime = '';

  if (lang === enUS) {
    localDatetime = moment.utc(date).local().format(formatDatetimeUS);
  } else {
    localDatetime = moment.utc(date).local().format(formatDatetimeES);
  }

  return localDatetime;
};


/**
 * getLocalDate : Get the ISO 8601 date
 * convert depending on lang
 *
 * @param  {*} `date`
 * @param  {string} `lang`
 * @return {string}
 */

export const getLocalDate = (date: any, lang: string = enUS) => {
  let localDate = '';

  if (lang === enUS) {
    localDate = moment.utc(date).local().format(formatDateUS);
  } else {
    localDate = moment.utc(date).local().format(formatDateES);
  }

  return localDate;
};

/**
 * getFormattedDate : Get the string date
 * convert depending on lang
 *
 * @param  {*} `date`
 * @param  {string} `lang`
 * @return {string}
 */
export const getFormattedDate = (date: any, lang: string = enUS) => {
  let formattedDate = '';

  if (lang === enUS) {
    formattedDate = moment(date).format(formatDateUS);
  } else {
    formattedDate = moment(date).format(formatDateES);
  }

  return formattedDate;
};
