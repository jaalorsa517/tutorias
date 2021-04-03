let users = [];
fetch("http://localhost:5000/users", {
  mode: "cors",
  method: "GET",
  headers: {
    "Content-type": "application/json",
    Origin: "http://localhost:8080"
  }
})
  .then((response) => response.json())
  .then((data) => (users = data))
  .catch((error) => console.log(error));
