const appRoot = require('app-root-path');
const path = appRoot.path;

const Titanic = require(`${path}/entity/titanic.entity`);

class TitanicRepository {
    titanic = new Titanic();
    findAll = async () => {
        let data = await this.titanic.findAll();
        return data;
    }
}

module.exports = TitanicRepository;