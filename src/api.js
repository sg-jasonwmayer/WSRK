import 'whatwg-fetch';

const HOST =  'http://ms00015080d';
<<<<<<< HEAD
const BASE = `http://${HOST}:3000/api`;
=======
const BASE = `http://${HOST}:8080/api`;
>>>>>>> 0bcb8f251a4a8c3edada1795b35c13c4b3f47722

const request = (method, url) => {

  url = `${BASE}${url}`;

  const parsePayload = json => {
    if (json && json.code === 0 && json.message === 'success') {
      if (json.data === undefined) {
        return {};
      } else {
        return json.data;
      }
    } else if (json) {
      throw new Error({ message: json.message, code: json.code });
    } else {
      throw new Error(json);
    }
  };

  const handleResponse = (resolve, reject) => {
    return json => {
      try {
       resolve(parsePayload(json));
      } catch (e) {
       reject(e);
      }
    };
  };

  const createResponseError = error => {
    const errText = error.statusText || '';
    const errorObj = new Error(errText);
    errorObj.response = error;
    return errorObj;
  };

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        throw createResponseError(response);
      })
      .then(handleResponse(resolve, reject))
      .catch(reject);
  });
};

// HELPER FUNCTIONS
const get = (url, body) => request('GET', url, body);
const post = (url, body) => {
  return request('POST', url, body);
};


// API CALLS
export const fetchMillsList = () => get(`/userpreferences/mill/fhenao`);
export const fetchLoadPlanDetails = (loadplanid) => get(`/LoadPlanViewer/GetLoadPlanDetails/${loadplanid}`)
export const postUserPreferences = () => post(`/userpreferences/mill/`);
export const populateSearchResults = (mode, mill, searchcondition, loadplanname) => get(`Query/SearchLoadPlans/${mode}/${mill}/${searchcondition}/${loadplanname}`) 


