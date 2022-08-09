class TransactionList{
    #transactions;

    constructor(transactions){
        this.#transactions = transactions;
    }

    getTransactions(){
        return this.#transactions;
    }

    addTransaction(transaction){
        this.#transactions.push(transaction);
    }

    orderBy(attribute, inverse){
        const sortFunction = (a, b) => {
            const result = a[attribute] < b[attribute];
            if(inverse){
                return result;
            }else{
                return !result;
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
        return incomes.reduce((aDate, b)=> {
            const bDate = b.getDate();
            if(aDate < bDate){
                return bDate;
            }else{
                return aDate;
            }
        })
    }

    getLastOutcome(){
        const outcomes = this.getOutcomes();
        return outcomes.reduce((aDate, b)=> {
            const bDate = b.getDate();
            if(aDate < bDate){
                return bDate;
            }else{
                return aDate;
            }
        })
    }
}

export {TransactionList};