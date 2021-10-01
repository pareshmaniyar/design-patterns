// cache to save space
// So close to singleton

class Policy {
    name: string;
    hundredsOfDetails: any = {
        termsAndConditions: "All rights and lefts reserved!"
    }
    constructor(policy: string) {
        this.name = policy;
    }
}

class getMetaData {
    cache: any = {};
    getData(policy: string): Policy {
        if(policy in this.cache)
            return this.cache[policy];
        const newPolicyInstance = new Policy(policy);
        console.log(`newPolicyInstance created: ${newPolicyInstance}`);
        return this.cache[policy] = newPolicyInstance;
    }
}
const meta = new getMetaData();
class getFullDetails {
    user: any = null;
    metadata: any = {};
    constructor(user: User) {
        this.user = user;
        this.metadata = meta.getData(user.policy);
    }
}

class User {
    name: string = "";
    age: number = 0;
    policy: string = "policy1";
    constructor(name: string, age: number, policy: string) {
        this.name = name;
        this.age = age;
        this.policy = policy;
    }
    load() {
        let bigObject = new getFullDetails(this);
        thirdPartyAPI(bigObject);
    }
}

class DefaultUser extends User {
    constructor(name: string, age: number, policy: string) {
        super(name, age, policy);
    }
    load(){}
}

function thirdPartyAPI(obj: any) {
    console.log(obj);
}

const user1 = new User("Paresh", 26, "policy1");
const user2 = new User("hseraP", 62, "policy2");
const user3 = new User("Lalaland", 62, "policy1");

user1.load();
user2.load();
user3.load();