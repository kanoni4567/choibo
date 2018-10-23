import { FETCH_USER } from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_USER:
			// console.log(action.payload);
			return { ...state, current_user: action.payload.data };
		default:
			return state;
	}
}
