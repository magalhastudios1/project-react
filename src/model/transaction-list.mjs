class TransactionList{
    #transactions;

    constructor(transactions){
        this.#transactions = transactions;
    }

    getTransactions(){
        return this.#transactions;
    }

    getSize(){
        const transactions = this.getTransactions();
        return transactions.length;
    }

    addTransaction(transaction){
        this.#transactions.push(transaction);
    }

    sort(tableOrder){
        const attribute = tableOrder.getAttribute();
        if(attribute == "default"){
            return this.getTransactions();
        }

        const inverse = tableOrder.getOrder();
        return this.orderBy(attribute, inverse);
    }

    orderBy(attribute, inverse){
        const sortFunction = (a, b) => {
            const order = a.getAttribute(attribute) < b.getAttribute(attribute);
            let result;
            if(order){
                result = 1;
            }else{
                result = -1;
            }
            if(inverse == false){
                return result;
            }else{
                return result * -1;
            }
        };

        const transactions = this.getTransactions();
        return transactions.sort(sortFunction);
    }

    getIncomes(){
        const transactions = this.getTransactions();
        return transactions.filter((transaction) => transaction.isIncome());
    }

    getOutcomes(){
        const transactions = this.getTransactions();
        return transactions.filter((transaction) => !transaction.isIncome());
    }

    getTotalIncome(){
        const incomes = this.getIncomes();
        return incomes.reduce((sum, transaction)=>{
            const price = transaction.getPrice();
            return sum + price;
        }, 0);
    }

    getTotalOutcome(){
        const outcomes = this.getOutcomes();
        return outcomes.reduce((sum, transaction)=>{
            const price = transaction.getPrice();
            return sum + price;
        }, 0);
    }

    getLastIncome(){
        const incomes = this.getIncomes();
        const dates = incomes.map((el)=>el.getDate());
        return new Date(Math.max.apply(null, dates));
    }

    getLastOutcome(){
        const outcomes = this.getOutcomes();
        const dates = outcomes.map((el)=>el.getDate());
        return new Date(Math.max.apply(null, dates));
    }
}

export {TransactionList};