import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import BlogIndex from './components/BlogIndex';
import BlogView from './components/BlogView';
import reducers from './reducers';
import './style/style.css';

const store = createStore(reducers, {}, applyMiddleware(promise));
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/blog/:id" component={BlogView} />
				<Route exact path="/" component={BlogIndex} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
