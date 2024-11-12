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
// Define the number of shapes
// Define the number of shapes
const numShapes = 15; // Adjust the number of shapes as desired

// Array to store all shapes and their properties
const shapes = [];

// Helper function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the backdrop element
const backdrop = document.querySelector('.backdrop');

// Function to create a shape with random properties
function createShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    
    // Set random size between 50px and 100px
    const size = getRandomInt(50, 100);
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    
    // Set initial random position
    const x = getRandomInt(0, window.innerWidth - size);
    const y = getRandomInt(0, window.innerHeight - size);

    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;

    // Set random velocity for movement
    const velocityX = getRandomInt(-2, 2) || 1; // Avoid zero velocity
    const velocityY = getRandomInt(-2, 2) || 1;

    // Add shape to backdrop
    backdrop.appendChild(shape);

    // Store shape details
    shapes.push({ element: shape, x, y, size, velocityX, velocityY });
}

// Function to update positions and detect collisions
function updateShapes() {
    shapes.forEach((shape, index) => {
        // Update position
        shape.x += shape.velocityX;
        shape.y += shape.velocityY;

        // Check for collision with screen edges
        if (shape.x <= 0 || shape.x + shape.size >= window.innerWidth) {
            shape.velocityX *= -1; // Reverse direction on X-axis
        }
        if (shape.y <= 0 || shape.y + shape.size >= window.innerHeight) {
            shape.velocityY *= -1; // Reverse direction on Y-axis
        }

        // Detect collision with other shapes
        for (let j = index + 1; j < shapes.length; j++) {
            const other = shapes[j];
            const dx = other.x - shape.x;
            const dy = other.y - shape.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If shapes are touching, adjust velocities to simulate a bounce
            if (distance < (shape.size + other.size) / 2) {
                // Swap velocities
                const tempX = shape.velocityX;
                const tempY = shape.velocityY;
                shape.velocityX = other.velocityX;
                shape.velocityY = other.velocityY;
                other.velocityX = tempX;
                other.velocityY = tempY;
            }
        }

        // Apply updated positions
        shape.element.style.left = `${shape.x}px`;
        shape.element.style.top = `${shape.y}px`;
    });

    // Request the next animation frame
    requestAnimationFrame(updateShapes);
}

// Initialize shapes and start animation
for (let i = 0; i < numShapes; i++) {
    createShape();
}

// Start updating shapes
requestAnimationFrame(updateShapes);





