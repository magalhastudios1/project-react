import {TransactionTableHeaderColumn} from "../transaction-table-header-column";

function TransactionTableHeader({tableState, tableStateSetter}){
    const tableAttributes = tableState.getTableAttributes();
    const keys = Object.keys(tableAttributes);
    let result = [];
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const value = tableAttributes[key];
        result.push(
           <TransactionTableHeaderColumn key={key} attribute={key} item={value} tableState={tableState} tableStateSetter={tableStateSetter}></TransactionTableHeaderColumn>
        );
    }
    return (<div className="row text-muted fw-bold d-none d-md-flex p-3" key="transaction-table-header">{result}</div>);
}

export {TransactionTableHeader};