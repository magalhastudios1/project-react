import { TableOrder } from "../../model/table-order.mjs";
import { TransactionTableHeaderColumnOrderIcon } from "../transaction-table-header-column-order-icon";

function TransactionTableHeaderColumn({item, attribute, tableState, tableStateSetter}){
    function updateTransactionTableOrder(event){
        const target = event.target;
        const attribute = target.getAttribute("attribute")

        const tableOrder = tableState.getTableOrder();
        const currentAttribute = tableOrder.getAttribute();

        if(attribute == currentAttribute){
            var order = tableOrder.getOrder();
        }else{
            var order = true;
        }

        const newTableState = tableState.setTableOrder(new TableOrder(attribute, !order));
        tableStateSetter(newTableState.getCopy());
    }

    const {size, name} = item;
    const tableOrder = tableState.getTableOrder();

    const currentAttribute = tableOrder.getAttribute();
    const currentOrder = tableOrder.getOrder();

    return (
        <div className={"col-" + size} attribute={attribute} onClick={updateTransactionTableOrder}>
            {name}
            <TransactionTableHeaderColumnOrderIcon attribute={attribute} currentAttribute={currentAttribute} currentOrder={currentOrder}>
            </TransactionTableHeaderColumnOrderIcon>
        </div>
    );
}

export { TransactionTableHeaderColumn };