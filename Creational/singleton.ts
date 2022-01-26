/* 
- only one instance
- private constructor
- returns the instance of object

*/

class Database {
    private static instance: Database;
    private constructor() {
        // connect with DB
    }
    static getInstance() {
        if(!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
    query(sql: string) {
        console.log(`DB query calls with SQL query: ${sql}`);
    }
}

let db = Database.getInstance();
db.query('SELECT name from Customers');
