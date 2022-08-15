import { TransactionList } from "../../model/transaction-list.mjs";

function TransactionTableHeaderColumn({item, attribute, transactionList, transactionListSetter, orderObject, orderObjectSetter}){
    function updateTransactionTableOrder(event){
        const target = event.target;
        const attribute = target.getAttribute("attribute")

        if(attribute == orderObject.attribute){
            var order = orderObject.order;
        }else{
            var order = true;
        }

        const transactions = transactionList.orderBy(attribute, order);
        
        transactionListSetter(new TransactionList(transactions));
        orderObjectSetter({attribute, order: !order})
    }

    function TransactionTableHeaderColumnOrderIcon({attribute}){
        if(attribute != orderObject.attribute){
            return (<span></span>);
        }

        if(!orderObject.order){
            return (<span className="ms-2"><i className="fa-solid fa-caret-down"></i></span>);
        }else{
            return (<span className="ms-2"><i className="fa-solid fa-caret-up"></i></span>);
        }
    }

    const {size, name} = item;
    return (
        <div className={"col-" + size} attribute={attribute} onClick={updateTransactionTableOrder}>
            {name}
            <TransactionTableHeaderColumnOrderIcon attribute={attribute}></TransactionTableHeaderColumnOrderIcon>
        </div>
    );
}

export { TransactionTableHeaderColumn };