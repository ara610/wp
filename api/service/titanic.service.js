const appRoot = require('app-root-path');
const path = appRoot.path;
const TitanicRepository = require(`${path}/repository/titanic.repository`);

class TitanicService {
    titanicRepository = new TitanicRepository();
    getAllTitanic = async () => {
        // 저장소(Repository)에게 데이터를 요청합니다.
        let data = await this.titanicRepository.findAll();
        return data;
    }
}

module.exports = TitanicService;