// Very much like middleware

class APICall {
    constructor(...args) {
        this.args = args;
        console.log(this.args);
    }
    call() {
        return validation.response(this.args);
    }
}

class Validation {
    nextChain;
    setNextChain(chain) {
        this.nextChain = chain;
    }
    response(args) {
        if(Object.keys(args).length != 2) {
            return "400 Bad request";
        } else if(typeof args[0] !== 'string') {
            return 'URL string not found';
        }
        return this.nextChain.response(args);
    }
}

class Parse {
    nextChain;
    setNextChain(chain) {
        this.nextChain = chain;
    }
    response(args) {
        if(!args[0].includes('users')) {
            return "No URL endpoint found";
        }
        return this.nextChain.response(args);
    }
}

class Authorize {
    nextChain;
    setNextChain(chain) {
        this.nextChain = chain;
    }
    response(args) {
        if(!args[1].admin) {
            return "Not authorized";
        }
        return this.nextChain.response(args);
    }
}

class Result {
    setNextChain(chain) {
        this.nextChain = chain;
    }
    response() {
        return "Witness me!!! I have reached to Valhalla!";
    }
}

const validation = new Validation();
const parse = new Parse();
const authorize = new Authorize();
const result = new Result();

validation.setNextChain(parse);
parse.setNextChain(authorize);
authorize.setNextChain(result);

const request = new APICall('/users', { admin: true });
const apiResult = request.call();
console.log("apiResult: ", apiResult);
