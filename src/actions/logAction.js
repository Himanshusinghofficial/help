import {
  COM_ERROR,
  REG_COM,
  REG_SER,
  SER_ERROR,
  REG_SUGG,
  SUGG_ERROR
} from './types';

export const addcom = log => async dispatch => {
    try {
        const res = await fetch('/complaints', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: REG_COM,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: COM_ERROR,
        payload: ((err || {}).response || {}).data || 'Error unexpected'
      });
    }
  };

  export const addser = log => async dispatch => {
    try {
        const res = await fetch('/services', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: REG_SER,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: SER_ERROR,
        payload: ((err || {}).response || {}).data || 'Error unexpected'
      });
    }
  };

  export const addsugg = log => async dispatch => {
    try {
        const res = await fetch('/suggestions', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: REG_SUGG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: SUGG_ERROR,
        payload: ((err || {}).response || {}).data || 'Error unexpected'
      });
    }
  };
  