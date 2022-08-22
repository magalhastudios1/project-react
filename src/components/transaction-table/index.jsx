import { TransactionTableTitle } from "../transaction-table-title";
import { TransactionTableHeader } from "../transaction-table-header";
import { TransactionTableBody } from "../transaction-table-body";

function TransactionTable({tableState, tableStateSetter}){
    return (
        <div>
            <TransactionTableTitle tableState={tableState}></TransactionTableTitle>
            <TransactionTableHeader tableState={tableState} tableStateSetter={tableStateSetter}></TransactionTableHeader>
            <TransactionTableBody tableState={tableState}></TransactionTableBody>
        </div> 
    );
}

export {TransactionTable};