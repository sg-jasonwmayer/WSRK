import pickBy from 'lodash/pickBy';
import queryString from 'query-string';


export function isLanguageSupported(langCode) {
  const supportedLanguages = [
    'en-US',
    'en-GB',
    'fr-CA',
    'zh-Hans',
    'zh-Hant',
    'en-CA',
    'es-MX',
  ];

  const langPosition = supportedLanguages.indexOf(langCode);

  return langPosition > -1;
}

export default {

  isLanguageSupported,

};

export function getQueryStringParameterByName(name, url) {
  const urlToParse = url || window.location.href;
  const encodedName = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line
  const regex = new RegExp(`[?&]${encodedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(urlToParse);
  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function buildQueryStringFromObject(objectToStringify) {
  return queryString.stringify(objectToStringify);
}

export function filterRequestPayloadObject(objectToFilter, allowedKeys) {
  return pickBy(objectToFilter, (value, key) => {
    return allowedKeys.includes(key);
  });
}

export function filterRequestPayloadArray(arrayToFilter, allowedKeys) {
  return arrayToFilter.map((item) => {
    return filterRequestPayloadObject(item, allowedKeys);
  });
}

export function onSuccessWithHeaders(response) {
  let result;
  if (response.status !== 204) {
    result = {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  } else {
    result = 'Success';
  }
  return result;
}

export function onSuccess(response) {
  let result;
  const data = response.data ? 'data' : 'content';
  if (response.status !== 204) {
    // eslint-disable-next-line no-param-reassign
    result = response[data] ? (response[data]) : (response = { [data]: 'Success' });
  } else {
    result = 'Success';
  }
  return result;
}

export function onNotificationSuccess(response) {
  let result;
  if (response.status !== 204) {
    result = response;
  } else {
    result = 'Success';
  }
  return result;
}
