import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { StoreProvider } from './providers/Store';
import { HomePage } from './components/Home';
import { Router } from '@reach/router';

ReactDOM.render(
	<StoreProvider>
		<Router>
			<App path='/'>
				<HomePage path='/'/>
			</App>
		</Router>
	</StoreProvider>, 
	document.getElementById('root')
);
