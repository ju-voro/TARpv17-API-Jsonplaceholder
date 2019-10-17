const http = new myHTTP;

const users = http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log("DATA Received:", data))
.catch(error => console.log(error));