import { useDispatch, useSelector } from 'react-redux';
// import { Box1, Box2, Box3, Box4 } from '../App4';
import Banking from '../components/Banking';

// import { plus, minus } from '../store/counterReducer';
import {} from '../store/bankingReducer';

export const balance = () => {
  // return <Balance />;
};
export const deposit = (balance, money) => {
  return balance + money;
  // return <DepositAndWithdraw />;
};
export const withdraw = (balance, money) => {
  return balance - money;
  // return <DepositAndWithdraw />;
};

export const userMoney = ()

export const BankingContainer = () => {
  const balance = useSelector((state) => state.banking.balance);
  const dispatch = useDispatch();

  return (
    // <Box4 number={number} onPlus={() => dispatch(plus())} onMinus={() => dispatch(minus())} />
    <Banking balance={balance} deposit={deposit} withdraw={withdraw} />
  );
};
