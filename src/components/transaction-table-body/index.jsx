import {TransactionTableBodyRow} from "../transaction-table-body-row";

function TransactionTableBody({tableState}){
    const transactionList = tableState.getTransactionList();
    const tableOrder = tableState.getTableOrder();
    const transactions = transactionList.sort(tableOrder);
    let result = [];
    for(let i = 0; i < transactions.length; i++){
        const transaction = transactions[i];
        result.push(<TransactionTableBodyRow key={i} transaction={transaction}></TransactionTableBodyRow>)
    }
    return (<div>{result}</div>);
}

export {TransactionTableBody};