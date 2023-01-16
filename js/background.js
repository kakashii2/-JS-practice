// const images = ["0.jpg", "1.jpg", "2.jpg"];
const images = ["1", "2", "3"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgimage = document.createElement("img");

// bgimage.src = `img/${chosenImage}`;

// document.body.append(bgimage);

// const bgimge = document.body.className;
// bgimge = `body_background_${chosenImage}`;

document.body.className = `body_background_${chosenImage}`;
