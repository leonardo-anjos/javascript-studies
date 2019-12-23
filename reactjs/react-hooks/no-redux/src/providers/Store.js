import React from 'react';

export const Store = React.createContext();

const initialState = {
	episodes: [],
	favourites: []
};

function reducer(state, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			return { ...state, episodes: action.payload };
		case 'ADD_FAVOURITE':
			return { ...state, favourites: [...state.favourites, action.payload]};
		case 'REMOVE_FAVOURITE':
			return { ...state, favourites: [...state, action.payload]};
		default:
			return state;
	}
}

export function StoreProvider(props) {
	const [state, dispath] = React.useReducer(reducer, initialState);
	
	const value = {
		state: state, 
		dispath: dispath
	};

	return <Store.Provider value={value}>{props.children}</Store.Provider>
}