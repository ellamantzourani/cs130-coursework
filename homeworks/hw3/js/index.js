/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();
//Part 1:


// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    //console.log(elem.style.backgroundImage);
    currentIndex = parseInt(elem.dataset.index);
    //console.log("currentIndex:", currentIndex);
    const image = images[currentIndex];


    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.
    //destinationElement.style.backgroundImage = sourceElement.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;

};

// attach event handler to all of the image tags 
// (after initScreen() has been invoked).

// first get all of the image elements from the DOM:
const imageElements = document.querySelectorAll('.image');

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}

//Part 2:

let currentIndex = 0;


const showNext = (ev) => {
    currentIndex += 1;
    //console.log("currentIndex:", currentIndex);
    // update .featured_image
    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    const img = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${img}')`;

};

const showPrev = (ev) => {
    currentIndex -= 1;
    //console.log("currentIndex:", currentIndex);
    // update .featured_image
    if (currentIndex < 0){
        currentIndex = (images.length - 1);
    }
    const img = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${img}')`;

};



document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;