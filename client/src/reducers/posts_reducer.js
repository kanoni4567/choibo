import { FETCH_ALL } from '../actions';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_ALL:
			// console.log(action);
			return { ...state, all: action.payload.data.items };
		default:
			return state;
	}
}
