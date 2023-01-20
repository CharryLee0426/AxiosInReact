// function learning and test
// import the axios
const axios = require('axios');

// default fetch api for http request
fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(json => console.log(json))

// get request by using axios
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log(response.status)
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function() {
        console.log('statements in then block will be executed anyway')
    })

// you can put params into get
function getTodo(index) {
    axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            id: index
        }    
    })
    .then(function (response) {
        console.log(response.status)
        // console.log(response.data.length)
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function() {
        console.log('statements in then block will be executed anyway')
    })
}

// invoke
getTodo(4)

// you can use async to declare an async function

// post request
// axios uses json for data posting by default
function postTodo(yourTodo) {
    yourTodoJson = JSON.stringify(yourTodo)
    axios.post('https://jsonplaceholder.typicode.com/todos', yourTodo)
        .then(function (response) {
            console.log(response.status)
            console.log(response.data)
        })
}

// example todo class
class todo {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

// invoke
yourTodo = new todo(1, 2, "hello world", true)
postTodo(yourTodo)

// for more information, please go to https://axios-http.com/