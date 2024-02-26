document.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");
  
    function updateColor() {
      const red = parseInt(redInput.value);
      const green = parseInt(greenInput.value);
      const blue = parseInt(blueInput.value);
      const hex = rgbToHex(red, green, blue);
      
      colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      hexCode.innerText = `Código Hexadecimal: ${hex}`;
    }
  
    function componentToHex(c) {
      const hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
  
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    redInput.addEventListener("input", function() {
      redRange.value = redInput.value;
      updateColor();
    });
    greenInput.addEventListener("input", function() {
      greenRange.value = greenInput.value;
      updateColor();
    });
    blueInput.addEventListener("input", function() {
      blueRange.value = blueInput.value;
      updateColor();
    });
  
    redRange.addEventListener("input", function() {
      redInput.value = redRange.value;
      updateColor();
    });
    greenRange.addEventListener("input", function() {
      greenInput.value = greenRange.value;
      updateColor();
    });
    blueRange.addEventListener("input", function() {
      blueInput.value = blueRange.value;
      updateColor();
    });
  
    // Inicializar el color
    updateColor();
  });
  
  
  