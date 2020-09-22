import Server from './server.main';

class Lists extends Server {

    constructor() {
        super('todolist');
    }

    addNewServerList(title) {
        return this.addObject({ title });
    }
}

export default Lists;