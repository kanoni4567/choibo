import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import PostReducer from './post_reducer';
import HeaderReducer from './header_reducer';

const rootReducer = combineReducers({
	posts: PostsReducer,
	current_post: PostReducer,
	current_user: HeaderReducer
});

export default rootReducer;
