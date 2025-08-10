
const keyMap = {
    "ArrowUp": 38,
    "ArrowDown": 40,
    "ArrowLeft": 37,
    "ArrowRight": 39,
    "a": 65, "A": 65,
    "d": 68, "D": 68,
    "w": 87, "W": 87,
    "s": 83, "S": 83,
    " ": 32, // Space
    "Enter": 13
};

document.onkeydown = function(e) {
    let keyName = e.key; 
    let keyCode = keyMap[keyName] || 0; 
    console.log(`Key pressed: ${keyName}`);
    console.log(`Key code is: ${keyCode}`);
};


