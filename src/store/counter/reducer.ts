import { Action } from '../types/Action';
import { COUNTER_ACTION_TYPES } from './action-types';
import { initialState } from './state';

const counterReducer = (state = initialState, action?: Action) => {
	if (!action) {
		return state;
	}

	if (action.type == COUNTER_ACTION_TYPES.INCREMENT) {
		state = {...state, counter: state.counter + 1};
	}

	if (action.type == COUNTER_ACTION_TYPES.DECREMENT) {
		state = {...state, counter: state.counter - 1};
	}

	return state;
}

export { counterReducer };

