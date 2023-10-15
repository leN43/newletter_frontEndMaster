const button = document.getElementById("suscribe_btn");
const form_page = document.querySelector('.form_page');
const succes_msg = document.querySelector('.succes_msg');
const main_img = document.getElementById('main_img');
const mainCard = document.querySelector('.main_card');
const dismissButton = document.getElementById("dismiss_btn");
const emailInput = document.getElementById("userMail"); // Get the email input
const sucess_msg_p =document.getElementById("sucess_msg_p");
const error_mail =document.getElementById("error_mail");

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
    return true;
else
    return false;
}
button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (ValidateEmail(emailInput.value))
    {
    form_page.style.display = "none"; 
    succes_msg.style.display = "block";
    mainCard.style.width = "40%";
    mainCard.style.paddingTop = "3%";
    sucess_msg_p.innerText = `A confirmation email has been sent to 
    ${emailInput.value}.Please open it and click the button inside to confirm your subscription.`;
    }
    else
    {
        emailInput.style.backgroundColor = '#ffe8e6';
        emailInput.style.color = 'red';
        error_mail.innerText = 'valid email required'
    }
});

dismissButton.addEventListener("click", () => {
    // Hide the success message
    mainCard.style.width = "80%";
    succes_msg.style.display = "none";
    
    // Show the form elements
    form_page.style.display = "block";
   

    
});
