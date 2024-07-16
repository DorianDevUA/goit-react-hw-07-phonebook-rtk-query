import STATUS from 'services/state-machine';

export const handlePending = state => {
  return {
    ...state,
    status: STATUS.PENDING,
  };
};

export const handleRejected = (state, { payload }) => {
  return {
    ...state,
    error: payload,
    status: STATUS.REJECTED,
  };
};

export const handleFulfilled = state => {
  return {
    ...state,
    status: STATUS.FULFILLD,
  };
};

export const handleFulfilledFetchAll = (state, { payload }) => {
  return {
    ...state,
    items: payload,
  };
};

export const handleFulfilledAddContact = (state, { payload }) => {
  return {
    ...state,
    items: [...state.items, payload],
  };
};

export const handleFulfilledDeleteContact = (state, { payload }) => {
  return {
    ...state,
    items: state.items.filter(item => item.id !== payload.id),
  };
};
