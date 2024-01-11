//BankingBalance
//BankingDepositAndWithdrawal
import React from 'react';

export function BankingBalance() {}
export function BankingDepositAndWithdrawal() {}

export default function Banking({ balance, deposit, withdraw }) {
  const inputMoney = (e) => {
    e.target.value;
  };
  return (
    <div>
      <h2>잔액:{balance}</h2>
      <input onChange={inputMoney} />
      <button onClick={deposit(balance)}>입금</button>
      <button>출금</button>
    </div>
  );
}
