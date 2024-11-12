// Landing page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("title").classList.add("fade-in");
    setTimeout(() => document.querySelector(".globe").classList.add("fade-in"), 2000);
    setTimeout(() => document.getElementById("subtitle").classList.add("fade-in"), 4000);
    setTimeout(() => document.getElementById("enterButton").classList.add("fade-in"), 6000);
});

const blogPosts = [
    { title: "-", date: "-", content: "-" },
    { title: "-", date: "-", content: "-" },
    // Add more posts as needed
];

const blogContainer = document.getElementById("blog-posts");

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

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
    this.reset();
});


let blurbTimeout;

function toggleBlurb() {
    const blurb = document.getElementById('hoverBlurb');
    
    // Show the blurb
    blurb.style.visibility = 'visible';
    blurb.style.opacity = '1';

    // Clear any existing timeout to reset the 10-second timer
    if (blurbTimeout) {
        clearTimeout(blurbTimeout);
    }

    // Hide the blurb after 10 seconds
    blurbTimeout = setTimeout(() => {
        blurb.style.visibility = 'hidden';
        blurb.style.opacity = '0';
    }, 10000); // 10,000 milliseconds = 10 seconds
}


