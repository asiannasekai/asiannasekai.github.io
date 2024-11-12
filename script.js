// Landing Page Animations
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("title").classList.add("fade-in");
    setTimeout(() => document.querySelector(".globe").classList.add("fade-in"), 2000);
    setTimeout(() => document.getElementById("subtitle").classList.add("fade-in"), 4000);
    setTimeout(() => document.getElementById("enterButton").classList.add("fade-in"), 6000);
});

// Blog Posts Section (only if #blog-posts exists)
const blogContainer = document.getElementById("blog-posts");
if (blogContainer) {
    const blogPosts = [
        { title: "-", date: "-", content: "-" },
        { title: "-", date: "-", content: "-" },
        // Add more posts as needed
    ];

    blogPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("blog-post");
        postDiv.innerHTML = `
            <h4>${post.title}</h4>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postDiv);
    });
}

// Contact Form Submission (only if #contact-form exists)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out!");
        this.reset();
    });
}

// Toggle Blurb Visibility
let blurbTimeout;
function toggleBlurb() {
    const blurb = document.getElementById('hoverBlurb');
    blurb.style.visibility = 'visible';
    blurb.style.opacity = '1';

    if (blurbTimeout) {
        clearTimeout(blurbTimeout);
    }

    // Hide after 10 seconds
    blurbTimeout = setTimeout(() => {
        blurb.style.visibility = 'hidden';
        blurb.style.opacity = '0';
    }, 10000);
}

// Define the number of shapes and color palette
const numShapes = 20;
const colorPalette = ["#E6A157", "#D9BF77", "#B5C1D8", "#A7C957", "#D7A3B3", "#F4BFBF", "#C9D6EA", "#FFD6A5"];

// Helper function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the backdrop element
const backdrop = document.querySelector('.backdrop');

// Generate shapes with random properties
// Define the number of shapes and color palette
const numShapes = 20;
const colorPalette = ["#E6A157", "#D9BF77", "#B5C1D8", "#A7C957", "#D7A3B3", "#F4BFBF", "#C9D6EA", "#FFD6A5"];

// Helper function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the backdrop element
const backdrop = document.querySelector('.backdrop');

// Generate shapes with random properties
for (let i = 0; i < numShapes; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    
    // Set random size
    const size = getRandomInt(50, 100);
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    // Set random position across the entire screen (temporarily removing exclusion)
    shape.style.top = `${getRandomInt(0, 100)}vh`;
    shape.style.left = `${getRandomInt(0, 100)}vw`;

    // Set random color
    setRandomColor(shape);

    // Add the shape to the backdrop
    backdrop.appendChild(shape);

    // Set an interval to change the color every 3-5 seconds
    setInterval(() => {
        setRandomColor(shape);
    }, getRandomInt(3000, 5000));
}

// Function to set a random color from the palette to a shape
function setRandomColor(shape) {
    const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    shape.style.backgroundColor = randomColor;
}


