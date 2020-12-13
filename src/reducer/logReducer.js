import {
    REG_COM,
    COM_ERROR,
    REG_SER,
    SER_ERROR,
    REG_SUGG,
    SUGG_ERROR
  } from '../actions/types';
  
  const initialState = {
    logs: null,
    error: null
  };
  
export default (state = initialState, action) => {
    switch (action.type) {
      case REG_COM:
        return {
          ...state,
          logs: [...state.logs, action.payload],
        };
      case COM_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload
        };
        case REG_SER:
          return {
            ...state,
            logs: [...state.logs, action.payload],
          };
        case SER_ERROR:
          console.error(action.payload);
          return {
            ...state,
            error: action.payload
          };
        case REG_SUGG:
          return {
            ...state,
            logs: [...state.logs, action.payload],
          };
        case SUGG_ERROR:
          console.error(action.payload);
          return {
            ...state,
            error: action.payload
          };
      default:
        return state;
    }
  };
