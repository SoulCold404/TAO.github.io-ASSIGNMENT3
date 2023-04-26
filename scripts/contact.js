// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function() {
    const contactPage = document.getElementById("contact-page");
    const messageElement = document.createElement("p");
    messageElement.textContent = "Thank you for your message";
    messageElement.style.fontSize = "24px";
    contactPage.innerHTML = "";
    contactPage.appendChild(messageElement);
});
