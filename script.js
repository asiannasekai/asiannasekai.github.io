
const blogPosts = [
    { title: "Analysis 1", date: "October 1, 2024", content: "Brief summary of analysis 1." },
    { title: "Analysis 2", date: "October 15, 2024", content: "Brief summary of analysis 2." },
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

// Contact form submission (optional)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
    this.reset();
});
