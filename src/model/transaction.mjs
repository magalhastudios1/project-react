class Transaction{
    #name;
    #price;
    #income;
    #type;
    #date;

    constructor(name, price, income, type, date){
        this.#name = name;
        this.#price = price;
        this.#income = income;
        this.#type = type;
        this.#date = date;
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    isIncome(){
        return this.#income;
    }

    getType(){
        return this.#type;
    }

    getDate(){
        return this.#date;
    }
}

export {Transaction};