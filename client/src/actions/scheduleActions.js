import { TOGGLE_LOCK } from '../actions/types';

export const toggleLock = (sectionName) => dispatch => {
    dispatch({
        type: TOGGLE_LOCK,
        payload: sectionName
    })
}