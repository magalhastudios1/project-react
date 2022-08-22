class TableOrder{
    #attribute;
    #order;

    constructor(attribute, order) {
        this.#attribute = attribute;
        this.#order = order;
    }

    getAttribute(){
        return this.#attribute;
    }

    getOrder(){
        return this.#order;
    }
}

export {TableOrder};