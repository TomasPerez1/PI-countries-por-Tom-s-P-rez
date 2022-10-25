import axios from "axios";

export function getCountries() {
  return async function(dispatch) {
    const allCountries = await axios.get('http://localhost:3001/countries');
    return dispatch({type: 'GET_COUNTRIES', payload: allCountries.data})
  }
};

export function getActivities() {
  return async function(dispatch) {
    const allActivities = await axios.get('http://localhost:3001/activities');
    return dispatch({type: 'GET_ACTIVITIES', payload: allActivities.data})
  }
};

export function searchCountries(input) {
  return async function(dispatch) {
    try {
      const countries = await axios.get(`http://localhost:3001/countries?name=${input}`);
      return dispatch({type: 'SEARCH_COUNTRIES', payload: countries.data})
    }
    catch(e) {
      return dispatch({type: 'SEARCH_COUNTRIES', payload: e.response.data})
    }
  } 
};

export function getCountryDetail(id) {
  return async function(dispatch) {
    const country = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({type: 'GET_COUNTRY_DETAIL', payload: country.data})
  } 
}

export function postActivity(formData) {
  return async function(dispatch) {
    await axios.post('http://localhost:3001/activities', formData);
    return dispatch({type: 'POST_ACTIVITY', payload: null})
  }
};


export function resetModified() {
  return {type: 'RESET_MODIFIED_COUNTRIES', payload: []}
};

export function resetDetail() {
  return {type: 'RESET_DETAIL', payload: {}}
};

export function filterByRegion(region) {
  return {type: 'FILTER_BY_REGION', payload: region}
};

export function filterByActivity(activity) {
  return {type: 'FILTER_BY_ACTIVITY', payload: activity}
};

export function sortByAz(order) {
  return {type: 'SORT_BY_AZ', payload: order}
};

export function sortByPopulation(order) {
  return {type: 'SORT_BY_POPULATION', payload: order}
};

export function getFormCountries() {
  return {type: 'GET_FORM_COUNTRIES', payload : null}
};


