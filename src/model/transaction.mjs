class Transaction{
    static count = 0;

    #id;
    #name;
    #price;
    #income;
    #type;
    #date;

    constructor(name, price, income, type, date){
        this.#id = Transaction.count;
        Transaction.count++;

        this.#name = name;
        this.#price = price;
        this.#income = income;
        this.#type = type;
        this.#date = date;
    }

    getAttribute(attribute){
        if(attribute == "name"){
            return this.getName();
        }else if(attribute == "price"){
            return this.getPrice();
        }else if(attribute == "type"){
            return this.getType();
        }else{
            return this.getDate();
        }
    }

    getId(){
        return this.#id;
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    getPriceFormated(){
        const price = this.getPrice();
        const usFormated = price.toFixed(2);
        return usFormated.replace(".", ",");
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

    getDateBrazil(){
        const date = this.getDate();
        const day = date.getDate();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}

export {Transaction};