class Exception {
    constructor(message) {
        this.message = `${message}`
    }

    static messages = {
        label: 'Provided label value is not a string.',
        actionsCount: 'You need to set bar invoke count before printing.',
        barFull: 'You cant invoke the bar when it\'s at its full capacity'
    }
}

module.exports = Exception;
