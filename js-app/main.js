const url = "https://localhost:5001/api/Coffee";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    // getAllBeanVarieties()
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

// function getAllBeanVarieties() {
//     return fetch(url).then(resp => resp.json());
// }

function getAllCoffees() {
    return fetch(url).then(resp => resp.json());
}
