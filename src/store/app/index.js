import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
	name: 'app', // name of reducer
	initialState: {
		isInitialising: true, // boolean to be toggled when making api calls to get data about current user
		appTheme: 'light',
		loading: {},
	},
	reducers: {
		initialisingStart: (state, action) => {
			state.isInitialising = true;
		},
		initialisingDone: (state, action) => {
			state.isInitialising = false;
		},
		updateLoading: (state, action) => {
			state.loading = {
				...state.loading,
				[action.payload.event]: action.payload.value,
			};
		},
		loadingStart: (state, action) => {
			state.loading = {
				...state.loading,
				[action.payload.event]: true,
			};
		},
		loadingEnd: (state, action) => {
			state.loading = {
				...state.loading,
				[action.payload.event]: false,
			};
		},
	},
});

export default slice.reducer;

export const {
	initialisingStart,
	initialisingDone,
	loadingStart,
	loadingEnd
} = slice.actions;
