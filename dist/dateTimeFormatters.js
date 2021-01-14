"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedDate = exports.getLocalDate = exports.getLocalDatetime = void 0;
const moment_1 = require("moment");
const constants_1 = require("./constants");
/**
 * getLocalDatetime : Get the ISO 8601 date and time
 * convert depending on lang
 *
 * @param  {*} `date`
 * @param  {string} `lang`
 * @return {string}
 */
exports.getLocalDatetime = (date, lang = constants_1.enUS) => {
    let localDatetime = '';
    if (lang === constants_1.enUS) {
        localDatetime = moment_1.default.utc(date).local().format(constants_1.formatDatetimeUS);
    }
    else {
        localDatetime = moment_1.default.utc(date).local().format(constants_1.formatDatetimeES);
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
exports.getLocalDate = (date, lang = constants_1.enUS) => {
    let localDate = '';
    if (lang === constants_1.enUS) {
        localDate = moment_1.default.utc(date).local().format(constants_1.formatDateUS);
    }
    else {
        localDate = moment_1.default.utc(date).local().format(constants_1.formatDateES);
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
exports.getFormattedDate = (date, lang = constants_1.enUS) => {
    let formattedDate = '';
    if (lang === constants_1.enUS) {
        formattedDate = moment_1.default(date).format(constants_1.formatDateUS);
    }
    else {
        formattedDate = moment_1.default(date).format(constants_1.formatDateES);
    }
    return formattedDate;
};
