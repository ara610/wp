const appRoot = require('app-root-path');
const path = appRoot.path;
const wp = require(`${path}/db/wp.db`);

class Titanic {
    constructor(PassengerId, Survived, Pclass, Name, Gender,
        Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked) {
        this.PassengerId = PassengerId;
        this.Survived = Survived;
        this.Pclass = Pclass;
        this.Name = Name;
        this.Gender = Gender;
        this.Age = Age;
        this.SibSp = SibSp;
        this.Parch = Parch;
        this.Ticket = Ticket;
        this.Fare = Fare;
        this.Cabin = Cabin;
        this.Embarked = Embarked;
    }

    findAll = async() => {
        let [rows, fields] = await wp.query(`
            SELECT * 
            FROM Titanic        
        `);

        return rows;
    }
}
module.exports = Titanic;