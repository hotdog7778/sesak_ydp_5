// const PLUS = 'counter/PLUS';
// const MINUS = 'counter/MINUS';

// export const plus = () => ({ type: PLUS });
// export const minus = () => ({ type: MINUS });

const initialState = {
  balance: 6000,
};

// reducer
const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + 1 };
    case 'WITHDRAW':
      return { balance: state.balance - 1 };
    default:
      return state;
  }
};

export default bankingReducer;
