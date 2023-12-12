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
const messageForm = document.getElementById('leave_message');
console.log(messageForm);
// const input = form.querySelector('input');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent default browser refresh event
    // obtain values of the form 
    const userName = event.target.querySelector('[name="usersName"]').value;
    const email = event.target.querySelector('[name="usersEmail"]').value;
    const userMessage = event.target.querySelector('[name="usersEmail"]').value;
    console.log(userName); /* register values in console*/
    console.log(email);
    console.log(userMessage);
    /* console.log(input.value); */

    /* create list display message */
    const messageSection = document.geteElementsById('messages');
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${userName}</a>${usersEmail}`

    const removeButton = document.createElement('Button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);

    event.target.reset();  /* clear the form fields */
})

