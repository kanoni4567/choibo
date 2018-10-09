import { FETCH_POST } from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POST:
			return { ...state, current_post: action.payload.data.fields };
		default:
			return state;
	}
}
