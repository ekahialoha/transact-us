import validator from 'validator';

class FormValidations {
    constructor(rules) {
        this.rules = [];
        rules.forEach(rule => {
            if (rule.validations !== undefined && Array.isArray(rule.validations)) {
                rule.validations.forEach(chainedRule => {
                    this.rules.push({
                        name: rule.name,
                        ...chainedRule
                    });
                });
            } else {
                this.rules.push(rule);
            }
        });
    }

    defaultValidations() {
        const defaultVals = {};
        this.rules.forEach(rule => {
            defaultVals[rule.name] = {
                valid: true,
                error: ''
            };
        });
        return {
            valid: true,
            ...defaultVals
        };
    }

    runValidations(input) {
        const validations = this.defaultValidations();

        this.rules.forEach(rule => {
            if (validations[rule.name].valid) {
                const validatorCheck = typeof rule.type === 'string' ? validator[rule.type] : rule.type;
                const validatorArgs = rule.args !== undefined ? rule.args : [];
                const validatorInput = input[rule.name];
                const validOn = rule.validOn !== undefined ? rule.validOn : true;

                if (validatorCheck(validatorInput, ...validatorArgs) !== validOn) {
                    validations[rule.name] = {
                        valid: false,
                        error: rule.error
                    };
                    validations.valid = false;
                }
             }
        });
        return validations;
    }
}

export default FormValidations;
