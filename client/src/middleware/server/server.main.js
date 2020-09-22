import axios from 'axios';

class Server {
    constructor(uriSuffix) {
        this.serverURIroot = `http://localhost:5000/server/${uriSuffix}`;
    }

    fetchObjects(id) {
        return axios.get(`${this.serverURIroot}/${id || ''}`);
    }

    deleteObject(id) {
        return axios.delete(`${this.serverURIroot}/${id}`);
    }

    updateObject(id, body) {
        return axios.put(`${this.serverURIroot}/${id}`, body);
    }

    addObject(body) {
        return axios.post(this.serverURIroot, body);
    }
}

export default Server;