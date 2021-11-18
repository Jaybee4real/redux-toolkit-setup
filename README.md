# Javascript Redux

**Using Redux Toolkit**

### Introduction

Redux Toolkit **makes** **it easier to write good Redux applications and speeds up development**, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is beneficial to all Redux users regardless of skill level or experience.

### Installation:

to use redux toolkit for react and react-native,

using / **yarn**

> $ yarn add redux react-redux @reduxjs/toolkit

using / **npm**

> $ npm install redux react-redux @reduxjs/toolkit

### Usage:

NOTE: **get familiar with redux**. Even though redux slices are simple enough to understand, this is a "toolkit for redux" - redux is the foundation on which it is built upon. it would be better to understand at least the basics before using this toolkit

Let us see how reducers and actions look like in **traditiona**l React-Redux applications.

See below:

**Types:**

```jsx
const GET_USERS = "GET_USERS";
const CREATE_USER = "CREATE_USER";
const DELETE_USER = "DELETE_USER";
```

**Actions:**

```jsx
import {GET_USERS, CREATE_USER, DELETE_USER} from "../constant/constants";

export const GetUsers = (data) => (dispatch) => {
	dispatch({
		type: GET_USERS,
		payload: data,
	});
};
export const CreateUser = (data) => (dispatch) => {
	dispatch({
		type: CREATE_USER,
		payload: data,
	});
};
export const DeleteUser = (data) => (dispatch) => {
	dispatch({
		type: DELETE_USER,
		payload: data,
	});
};
```

**Reducers:**

```jsx
import {GET_USERS,CREATE_USER,DELETE_USER} from "../constant/constants";

const initialState = {
 errorMessage: "",
 loading: false,
 users:[]
};

const UserReducer = (state = initialState, { payload }) => {
	switch (type) {
	 case GET_USERS:
	  return { ...state, users: payload, loading: false };
	case CREATE_USER:
	  return { ...state, users: [payload,...state.users],
	 loading: false };
	case DELETE_USER:
	  return { ...state,
	  users: state.users.filter((user) => user.id !== payload.id),
	, loading: false };
	default:
	  return state;
	 }
};

export default UserReducer;
```

In most cases, you would have to manage 3 different files for the above redux structure, sometimes 4, which can be hard to manage in very large applications, but not to worry, redux-toolkit to the rescue!

Now let's see how we can simplify and achieve the same functionality by using **createSlice** from redux-toolkit**.**

```jsx
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
	},
	reducers: {
		getUsers: (state, action) => {
			state.users = action.payload;
		},
		createUser: (state, action) => {
			state.users.unshift(action.payload);
		},
		deleteUser: (state, action) => {
			state.users.filter((user) => user.id !== action.payload.id);
		},
	},
});

export const {createUser, deleteUser, getUser} = userSlice.actions;
export default userSlice.reducer;
```

As you can see now all the actions and reducers are in a simple place wherein a traditional redux application you need to manage every action and its corresponding action inside the reducer. when using **createSlice** you don’t need to use a switch to identify the action.

If you want to have other actions that might involve API calls , you would want to create a new action file, in the same folder as your index (index.js structure containing the above code)

folder structure below:

-    redux
     -    auth
          actions.js
          index.js

Example of what would be in actions.js (assuming our aim is not just manipulating store data, but making API calls too):

```jsx
// All actions for the auth store goes here
import {loginSuccess} from "./index";
import handleError from "../../api/errorHandler"; // util function for handling errors (see template)

export const createUser = (payload) => async (dispatch) => {
	try {
		const result = await axios.post("/api/users/create-user", payload);
		dispatch(loginSuccess(result.data));
		return true;
	} catch (e) {
		return handleError(e); // util function for handling errors (see template)
	}
};
```

Please refer to the template for more information

**Template**:

After this, refer to the redux template repository for the daba team:
‣: [https://github.com/dabafinance/redux-template](https://github.com/dabafinance/redux-template)
