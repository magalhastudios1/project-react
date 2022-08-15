function TransactionTableBodyRow({transaction}){
    const name = transaction.getName();
    const price = transaction.getPriceFormated();
    const income = transaction.isIncome();
    const type = transaction.getType();
    const dateBrazil = transaction.getDateBrazil();

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row text-muted">
                    <div className="col-6 text-dark">{name}</div>
                    <div className={"col-2 text-" + (income ? "success" : "danger")}>
                        {(income ? "" : "-")} R$ {price}
                    </div>
                    <div className="col-2">{type}</div>
                    <div className="col-2">{dateBrazil}</div>
                </div>
            </div>
        </div>
    )
}

export { TransactionTableBodyRow };