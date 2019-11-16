import axios from 'axios'

export const getList = () => {
    return axios
        .get('api/tasks', {
            headers: { "Content-type": "application/json" }
        })
        .then(res => {
            return res.data
        })
    }

export const addItem = title => {
    return axios
        .post('/api/task',
        {
            title: title
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }

        )
        .then(res => {
            console.log(res)
        })
}

export const deleteItem = id => {
    axios.delete(`api/task/${id}`, {
            headers: { 'Content-type': 'application/json' }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const updateItem = (title, id) => {
    return axios
    .put(`api/task/${id}`, {
        
            title: title
        }, {
            headers: { 'Content-type': 'application/json' }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
