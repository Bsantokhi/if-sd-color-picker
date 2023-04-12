console.log("main.js loaded");

// Variables
const bgColor = {
    r: 12,
    g: 50,
    b: 100,

    toCSS: function () {
        let result = `rgb(${this.r},${this.g}, ${this.b})`;

        return result;
    },

    toHex: function () {
        let result = "";
        // bewerk hier het resultaat naar een hexadecimaal getal. 

        return result;
    }
}

const background = document.querySelector("body");

const redSlider = document.querySelector("input.red");
const greenSlider = document.querySelector("input.green");
const blueSlider = document.querySelector("input.blue");

const rValue = document.querySelector(".r-value");
const gValue = document.querySelector(".g-value");
const bValue = document.querySelector(".b-value");

//Event listeners
redSlider.addEventListener("change", (event) => {
    bgColor.r = event.target.value;
    console.log("changing red: " + bgColor.r)

    changeCircleColor();
    rValue.textContent = bgColor.r
});

greenSlider.addEventListener("change", (event) => {
    bgColor.g = event.target.value;
    console.log("changing green: " + bgColor.g)

    changeCircleColor();
    gValue.textContent = bgColor.g

});

blueSlider.addEventListener("change", (event) => {
    bgColor.b = event.target.value;
    console.log("changing blue: " + bgColor.b)

    changeCircleColor();
    bValue.textContent = bgColor.b

});


//Functions
function changeCircleColor() {
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = bgColor.toCSS();
    background.style.backgroundColor = bgColor.toCSS();
}