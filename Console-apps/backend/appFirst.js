let fetchSettings = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default",
};



const fetchData = fetch("http://localhost:3000/users", fetchSettings);
fetchData.then(
    data => data.json(),
    err => console.log(err)).then(
    data => document.getElementById('results').innerHTML = [data[0].name, data[1].name, data[2].name]
);

const postPromise = fetch("http://localhost:3000/users");
postPromise
    .then(data => data.json())
    .then(data => {
        let Object = data;
        console.log(Object);

    })
    .catch(err => {
        console.log(err);
    });