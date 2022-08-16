import {TransactionTableHeaderColumn} from "../transaction-table-header-column";
import {TransactionTableHeaderTitle} from "../transaction-table-header-title";

function TransactionTableHeader({attributes, transactionList, transactionListSetter, orderObject, orderObjectSetter}){
    const keys = Object.keys(attributes);
    let result = [];
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const value = attributes[key];
        result.push(
           <TransactionTableHeaderColumn key={key} attribute={key} item={value} 
           transactionList={transactionList} transactionListSetter={transactionListSetter}
           orderObject={orderObject} orderObjectSetter={orderObjectSetter}></TransactionTableHeaderColumn>
        );
    }
    return (
        <>
            <div className="row text-muted fw-bold d-none d-md-flex p-3" key="transaction-table-header">{result}</div>
            <TransactionTableHeaderTitle transactionList={transactionList}></TransactionTableHeaderTitle>
        </>
    );
}

export {TransactionTableHeader};