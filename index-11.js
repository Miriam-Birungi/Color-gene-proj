const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorEl = document.createElement("div");

    colorEl.classList.add("color-container");
    containerEl.appendChild(colorEl);   
}
const colorEls = document.querySelectorAll(".color-container");

function generateColors(){
    colorEls.forEach(
        (colorEl)=>{
            const newColorCode = randomColor();
            colorEl.style.backgroundColor = "#" + newColorCode;
            colorEl.innerText = "#" + newColorCode;
        });
}

function randomColor(){
    const chars = "012345679abcdef"
    const colorCodeLength = 6;
    let color = ""

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()* chars.length);
        color += chars.substring(randomNum, randomNum + 1);
        
    }
    return colorCode; 
}