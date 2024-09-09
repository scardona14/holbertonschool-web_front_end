function changeMode(size, weight, transform, background, color) {
    // Return a function (closure) that changes the style of the page
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

// Define the function main
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add paragraph to the body
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    //Create a button for "Spooky" mode
    const spookyButton = document.createElement('button');
        spookyButton.textContent = 'Spooky';
        spookyButton.onclick = spooky; // Set onclik event to change to spooky mode

    document.body.appendChild(spookyButton);

    // Create a function for darkmode
    const darkModeButton = document.createElement('button');
        darkModeButton.textContent = 'Dark mode';
        darkModeButton.onclick = darkMode; // Set onclick event to change to dark mode
    
    document.body.appendChild(darkModeButton);

    // Create a button for " Scream mode"
    const screamModeButton = document.createElement('button');
        screamModeButton.textContent = 'Scream mode';
        screamModeButton.onclick = screamMode; // Set onclick event to change to scream mode

    document.body.appendChild(screamModeButton);
}

// Call the main function
main();