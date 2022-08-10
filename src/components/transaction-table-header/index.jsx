function TransactionTableHeader(attributes){
    const keys = Object.keys(attributes);
    let result = [];
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const value = attributes[key];
        result.push((<div key={"transaction-table-header-" + key} className={"col-" + value.size}>{value.name}</div>));
    }
    return(<div className="row">{result}</div>);
}

export {TransactionTableHeader};