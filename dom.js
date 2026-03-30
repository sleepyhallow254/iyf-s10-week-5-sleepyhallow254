// 1. SELECT ELEMENTS
const title = document.querySelector(".title");
const paragraphs = document.querySelectorAll(".content");
const navLinks = document.querySelectorAll(".nav-link");
const form = document.getElementById("contact-form");

// 2. MODIFY TEXT CONTENT
title.textContent = "Updated Article Title";

// 3. LOOP THROUGH ELEMENTS
paragraphs.forEach(p => {
    p.style.color = "blue";
});

// 4. EVENT LISTENER
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        alert("You clicked a nav link!");
    });
});

// 5. ADD ELEMENT
const newPara = document.createElement("p");
newPara.textContent = "Added with JavaScript!";
document.querySelector("article").appendChild(newPara);

// 6. FORM
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
});

// 7. CLASS TOGGLE
title.addEventListener("click", () => {
    title.classList.toggle("highlight");
});