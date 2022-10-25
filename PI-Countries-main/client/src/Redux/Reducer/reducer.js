import {filterRegion, filterActivity, sortAZ, sortPopulation} from './reducerLogic.js';

let initialState = {
  countries: [],
  modifiedCountries: [],
  formCountries: [],
  activities: [],
  countryDetail: {},
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      }
    case 'SEARCH_COUNTRIES':
      return {
        ...state,
        modifiedCountries: action.payload
      }
    case 'GET_COUNTRY_DETAIL':
      return {
        ...state,
        countryDetail: action.payload
      }
    case 'GET_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
      }
    case 'FILTER_BY_REGION':
      return {
        ...state,
        modifiedCountries: state.modifiedCountries.length ? filterRegion(state.modifiedCountries, action.payload) 
        : filterRegion(state.countries, action.payload),
      }
    case 'FILTER_BY_ACTIVITY':
      return {
        ...state,
        modifiedCountries: state.modifiedCountries.length ? filterActivity(state.modifiedCountries, action.payload) 
        : filterActivity(state.countries, action.payload),
      }
    case 'SORT_BY_AZ':
      return {
        ...state,
        modifiedCountries: state.modifiedCountries.length ? sortAZ(state.modifiedCountries, action.payload) 
        : sortAZ(state.countries, action.payload),
      }
    case 'SORT_BY_POPULATION': 
      return {
        ...state,
        modifiedCountries: state.modifiedCountries.length ? sortPopulation(state.modifiedCountries, action.payload)
        : sortPopulation(state.countries, action.payload)
      }
    case 'GET_FORM_COUNTRIES':
      return {
        ...state,
        formCountries : sortAZ(state.countries, "A-Z")
      }
    case 'RESET_MODIFIED_COUNTRIES':
      return {
        ...state,
        modifiedCountries: action.payload,
      }
    case 'RESET_DETAIL':
      return {
        ...state,
        countryDetail: action.payload
      }
    case 'POST_ACTIVITY':
      return {
        ...state
      }
    default:
      return state
  }
}

