import Server from './server.main';

class Items extends Server {
    constructor() {
        super('todoitem');
    }

    addNewServerItem(title, listId) {
        return this.addObject({ title, isDone: false, isDeleted: false, listId });
    }

    doneServerItem(id) {
        return this.updateObject(id, { isDone: true });
    }
}

export default Items;