const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if (height < 0 || height === "" || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    } else if (weight < 0 || height === "" || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
});