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

// Generate Random Shapes
// Define the number of shapes and color palette
const numShapes = 20; // Adjust the number of shapes as desired
const colorPalette = ["#E6A157", "#D9BF77", "#B5C1D8", "#A7C957", "#D7A3B3", "#F4BFBF", "#C9D6EA", "#FFD6A5"];

// Helper function to generate a random integer between min and max, excluding a specific range
function getRandomIntExcluding(min, max, excludeMin, excludeMax) {
    let random;
    do {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (random >= excludeMin && random <= excludeMax);
    return random;
}

// Get the backdrop element
const backdrop = document.querySelector('.backdrop');

// Generate shapes with random properties
for (let i = 0; i < numShapes; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    
    // Set random size
    const size = getRandomInt(30, 100);
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    // Set random position outside the central area
    shape.style.top = `${getRandomIntExcluding(0, 100, 40, 60)}vh`; // Avoid middle 40%-60% of height
    shape.style.left = `${getRandomIntExcluding(0, 100, 40, 60)}vw`; // Avoid middle 40%-60% of width

    // Set random shape (circle or square)
    shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    
    // Initially set a random color
    setRandomColor(shape);
    
    // Add the shape to the backdrop
    backdrop.appendChild(shape);

    // Set an interval to change the color every 3-5 seconds
    setInterval(() => {
        setRandomColor(shape);
    }, getRandomInt(3000, 5000)); // Random interval between 3 and 5 seconds
}

// Function to set a random color from the palette to a shape
function setRandomColor(shape) {
    const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    shape.style.backgroundColor = randomColor;
}

