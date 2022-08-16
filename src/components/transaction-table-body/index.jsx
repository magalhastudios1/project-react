import {TransactionTableBodyRow} from "../transaction-table-body-row";

function TransactionTableBody({transactionList}){
    const transactions = transactionList.getTransactions();
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        const transaction = transactions[i];
        result.push(<TransactionTableBodyRow key={i} transaction={transaction}></TransactionTableBodyRow>)
    }
    return (
        <div>{result}</div>
    )
}

export {TransactionTableBody};