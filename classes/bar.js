const Exception = require('./exception'),
    { messages } = Exception;

class Bar {
    static constant = value => value;
    static LABEL = this.constant(0);

    #threshold = 10;
    #start = 0;
    #actionsCount = -1;
    #current = 0;

    #label = '';

    #set = Array();
    #prepareSet = (constant, func) => this.#set[constant] = func;

    constructor() {
        this.self = Bar;
        const { self } = this;

        this.#prepareSet(self.LABEL, val => {
            if(typeof val === 'string')
                this.#label = val;
            else throw new Exception(messages.label)
        })
    }

    static create (label = 0) {
        const bar = new this();

        if(typeof label !== 'number')
            bar.set(this.LABEL, label);

        return bar;
    }

    set = (constant, value) => this.#set[constant](value);

    print () {
        this.self.#validityChecks(this);


    }

    invoke = () => {
        this.self.#validityChecks.apply('invoke', [this]);

        this.#current++;
        return this;
    };

    set invokeCount (count) {
        this.#actionsCount = count;
        return this;
    };

    #actionsUsed = Array();

    static #validityChecks = instance => {
        if(instance.#actionsCount < 0)
            throw new Exception(messages.actionsCount);
        if(instance.#actionsCount === instance.#current && this === 'invoke')
            throw new Exception(messages.barFull);
    }
}

module.exports = Bar;