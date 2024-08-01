const feedbackForm = document.querySelector(".feedback-form");
let emailInput = document.querySelector(".feedback-form label input");
let massageText = document.querySelector(".feedback-form label textarea");
const sendButton = document.querySelector(".feedback-form button");
let getlocalData = JSON.parse(localStorage.getItem("feedback-form-state"));



const localData = {};
const inputText = (event) => {
    const emailKey = event.target.name;
    const text = event.target.value.trim();
    localData[emailKey] = text;
    localStorage.setItem("feedback-form-state", JSON.stringify(localData));
}
feedbackForm.addEventListener("input", inputText);



