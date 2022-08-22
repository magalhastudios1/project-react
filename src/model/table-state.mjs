class TableState{
    #transactionList;
    #tableOrder;
    #tableAttributes;

    constructor(transactionList, tableOrder, tableAttributes){
        this.#transactionList = transactionList;
        this.#tableOrder = tableOrder;
        this.#tableAttributes = tableAttributes;
    }

    getCopy(){
        const transactionList = this.getTransactionList();
        const tableOrder = this.getTableOrder();
        const tableAttributes = this.getTableAttributes();
        return new TableState(transactionList, tableOrder, tableAttributes);
    }

    getTransactionList(){
        return this.#transactionList;
    }

    getTableOrder(){
        return this.#tableOrder;
    }

    getTableAttributes(){
        return this.#tableAttributes;
    }

    setTransactionList(transactionList){
        this.#transactionList = transactionList;
        return this;
    }

    setTableOrder(tableOrder){
        this.#tableOrder = tableOrder;
        return this;
    }
}

export {TableState};