const url = "https://localhost:5001/api/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
    getAllCoffees()
        .then(beanVarieties, coffees => {
            console.log(beanVarieties, coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(url).then(resp => resp.json());
}
