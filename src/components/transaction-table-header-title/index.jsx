function TransactionTableHeaderTitle({transactionList}){
    const size = transactionList.getSize();
    return (
    <div className="d-flex d-md-none justify-content-between align-items-center mb-2">
        <h2 className="text-dark">Listagem</h2>
        <h6 className="text-muted">{size} item{size > 1 ? 's' : ''}</h6>
    </div>
    );
}

export {TransactionTableHeaderTitle};