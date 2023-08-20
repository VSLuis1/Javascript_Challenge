const blocks = document.querySelectorAll('.block');
const body = document.querySelector('body');

blocks.forEach((block) => {
    console.log(block);
    block.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow";
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = "green";
        }
        if (e.target.id === "pink") {
            body.style.backgroundColor = "pink";
        }
        if (e.target.id === "orange") {
            body.style.backgroundColor = "orange";
        }
        if (e.target.id === "skyblue") {
            body.style.backgroundColor = "skyblue";
        }

    })
})
