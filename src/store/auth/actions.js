// All actions for the auth store goes here
import { loginSuccess } from "./index";
import handleError from '../../api/errorHandler'; // general error handler for all api requests

export const login = payload => async dispatch => {
    try {
      const result = await api.post('/api/users/token/obtain/', payload);
      // save the user data to the store
      await dispatch(loginSuccess({userData: result.data}));
      return true;
    } catch (e) {
      return handleError(e);
    }
  };
  