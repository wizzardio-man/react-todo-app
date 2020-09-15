import axios from 'axios';

const SERVER_URI = 'http://localhost:5000/server/todoitem';

export function getServerItems() {
    return axios.get(SERVER_URI);
}

export function deleteServerItem(id) {
    return axios.delete(`${SERVER_URI}/${id}`);
}

export function doneServerItem(id) {
    return axios.put(`${SERVER_URI}/${id}`, { isDone: true })
}

export function addServerItem(title) {
    return axios.post('http://localhost:5000/server/todoitem',
        { title, isDone: false, isDeleted: false });
}