const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement('p');
//document.getElementById('p').appendChild(copyright).innerHTML = `Chalew Degehebo ' + ' thisYear`;

copyright.innerHTML = `&copy; ${thisYear} by Chalew Deghebo. All rights reserved. `

footer.appendChild(copyright)

const skills = ['HTML', 'CSS', 'JavaScript', 'bubble.io'];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul')

for (let index = 0; index < skills.length; index++) {

    const skill = document.createElement('li');
    skill.innerText = skills[index]
    skillsList.appendChild(skill)
};
// Handle message form Submit
const messageForm = document.getElementsByName('leave_message');
console.log(messageForm);
console.log(messageForm[0]);
// const input = form.querySelector('input');

messageForm[0].addEventListener('submit', (event) => {
    event.preventDefault(); //prevent default browser refresh event
    // obtain values of the form 
    const firstName = event.target.usersFirstName.value;
    const lastName = event.target.usersLastName.value;
    const email = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    console.log(firstName, lastName, email, userMessage); /* register values in console*/
    /* console.log(input.value); */
    messageForm.reset();  /* clear the form fields */
    /* create list display message */
    const messageSection = document.geteElementById('messages');
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li');
    // newMessage.innerText = `${<a></a>}`

    onsubmit = (event) => { };

    // newMessage.innerText = `${name} (${email}): ${userMessage}`;
    messageList.appendChild(newMessage)

    const removeButton = document.createElement('Button');
    removeButton.innerText = remove;
    removeButton.addEventListener('remove', (event) => {
        const entry = document.querySelector('li');
    })
})

// Get all elements with the name "exampleName"
// const elements = document.getElementsByName("exampleName");

// Loop through the collection and add an event listener to each element
// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("click", function () {
//         // Your event handler code here
//         console.log(`Element ${i} clicked`);
//     });
// }