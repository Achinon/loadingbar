class Bar {
    static constant = value => value;

    static LABEL = this.constant(0);
    //private class data
    #threshold = 10;
    #start = 0;
    #actionsCount = 1;
    #current = 0;

    //array of set functions for constants
    #set = Array();
    #prepareSet = (constant, func) => this.#set[constant] = func;

    static create (label = 0) {
        const bar = new this();

        if(typeof label !== 'number')
            bar.set(this.LABEL);

        return bar;
    }


    constructor() {
        this.self = Bar;
        const { self } = this;

        this.#prepareSet(self.LABEL, () => {console.log('label')})
    }

    set = (constant, value) => this.#set[constant](value);

    print () {

    }
}

const bar = Bar.create();

// bar.set(Bar.LABEL, 'test');