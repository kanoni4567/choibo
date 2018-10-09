import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import PostReducer from './post_reducer';

const rootReducer = combineReducers({
	posts: PostsReducer,
	current_post: PostReducer
});

export default rootReducer;
