function TransactionTableHeaderColumnOrderIcon({attribute, currentAttribute, currentOrder}){
    return <span></span>;

    if(attribute != currentAttribute){
        return (<span></span>);
    }

    if(currentOrder){
        return (<span className="ms-2"><i className="fa-solid fa-caret-up"></i></span>);
    }else{
        return (<span className="ms-2"><i className="fa-solid fa-caret-down"></i></span>);
    }
}

export {TransactionTableHeaderColumnOrderIcon};