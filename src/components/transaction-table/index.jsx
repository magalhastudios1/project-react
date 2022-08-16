import { TransactionTableBody } from "../transaction-table-body";
import { TransactionTableHeader } from "../transaction-table-header";

function TransactionTable({attributes, transactionList, transactionListSetter, orderObject, orderObjectSetter}){
    return (
        <div>
            <TransactionTableHeader attributes={attributes} 
            transactionList={transactionList} transactionListSetter={transactionListSetter}
            orderObject={orderObject} orderObjectSetter={orderObjectSetter}></TransactionTableHeader>
            <TransactionTableBody transactionList={transactionList} transactionListSetter={transactionListSetter}></TransactionTableBody>
        </div> 
    );
}

export {TransactionTable};