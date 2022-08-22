function TransactionTableTitle({tableState}){
    const transactionList = tableState.getTransactionList();
    const size = transactionList.getSize();
    return (
        <div className="d-flex d-md-none justify-content-between align-items-center mb-2">
            <h2 className="text-dark">Listagem</h2>
            <h6 className="text-muted">{size} {size > 1 ? 'itens' : 'item'}</h6>
        </div>
    );
}

export {TransactionTableTitle};