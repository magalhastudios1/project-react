import { Summary } from "../summary";
import { TransactionTable } from "../transaction-table";
import "./main.css";

function Main({tableState, tableStateSetter}){
    /* */
    return (
        <main className="container">
            <Summary tableState={tableState} tableStateSetter={tableStateSetter}></Summary> 
            <TransactionTable tableState={tableState} tableStateSetter={tableStateSetter}></TransactionTable>
        </main>)
    ;
}

export {Main};