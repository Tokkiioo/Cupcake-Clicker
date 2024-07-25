// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const cupcake = document.querySelectorAll(".cupcake");

cupcake.forEach(function (cupcake) {
    cupcake.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("cupcake")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "limegreen";
        }
        value.textContent = count;
    });
});