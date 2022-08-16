function TransactionTableBodyRow({transaction}){
    const name = transaction.getName();
    const price = transaction.getPriceFormated();
    const income = transaction.isIncome();
    const type = transaction.getType();
    const dateBrazil = transaction.getDateBrazil();

    return (
        <>
            <div className="card d-none d-md-block border-0 mb-3">
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
            <div className="card d-md-none border-0 mb-1">
                <div className="card-body">
                    <h6 className="text-dark">{name}</h6>
                    <h5 className={"mb-3 text-" + (income ? "success" : "danger")}>
                            {(income ? "" : "-")} R$ {price}
                    </h5>
                    <h6 className="d-flex text-muted justify-content-between align-items-center mb-0">
                        <div>{type}</div>
                        <div>{dateBrazil}</div>
                    </h6>
                </div>
            </div>
        </>
    )
}

export { TransactionTableBodyRow };