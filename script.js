document.body.classList.add("hide-bg");

document.querySelector(".add").addEventListener("click", () => {
    document.body.classList.remove("show-bg");
    document.body.classList.add("hide-bg");
});

document.querySelector(".buy").addEventListener("click", () => {
    document.body.classList.remove("hide-bg");
    document.body.classList.add("show-bg");
});