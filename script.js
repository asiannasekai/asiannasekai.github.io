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

