import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const FETCH_ALL = 'fetch_all';

export function fetchPost(entryId) {
	// request an entry with the specified ID from the space defined at the top, using a space-specific access token.
	const res = axios.get(`/getpost/${entryId}`);

	return {
		type: FETCH_POST,
		payload: res
	};
}

export function fetchAll() {
	// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
	const res = axios.get('/getallposts');
	// console.log('fetchall');
	return {
		type: FETCH_ALL,
		payload: res
	};
}

// export fetchPost = (entryId) => {
// 	// request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// 	async dispatch => {
// 		const res = await axios.get(`/getpost/${entryId}`);
// 		dispatch({type: FETCH_POST, payload: res.data})
// 	}

// 	return {
// 		type: FETCH_POST,
// 		payload: res
// 	};
// }
