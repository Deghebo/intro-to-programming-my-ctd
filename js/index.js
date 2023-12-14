const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement('p');
const contact = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} by Chalew Deghebo. All rights reserved.`
footer.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript', 'bubble.io'];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul')

for (let index = 0; index < skills.length; index++) {
    const skill = document.createElement('li');
    skill.innerText = skills[index];
    skillsList.appendChild(skill);
};
// Handle message form Submit
const messageForm = document.getElementById('leave_message');
// console.log(messageForm);
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent default browser refresh event
    // obtain values of the form 
    const userName = event.target.querySelector('[name="usersName"]').value;
    const userEmail = event.target.querySelector('[name="usersEmail"]').value;
    const userMessage = event.target.querySelector('[name="usersMessage"]').value;
    messageForm.style.backgroundColor = "#3F000F";
    messageForm.style.rowGap = "10px";
    /* register values in console*/
    console.log(userName);
    console.log(userEmail);
    console.log(userMessage);
    // console.log(input.value);

    /* create list display message */
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a><span>${userMessage}</span>`;
    // messageSection.style.rowGap = "30px";
    if (document.getElementById("messages").value == "") {
        document.querySelector("ul").style.display = "none";
    }
    messageSection.style.justifyContent = "space-around";

    // messageSection.style.paddingInline = "20px"
    const removeButton = document.createElement('Button');
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.style.backgroundColor = "red";
    removeButton.style.borderStyle = "solid";
    removeButton.style.padding = "5px 5px";
    removeButton.style.alignItems = "stretch";
    removeButton.style.alignContent = "space-around";
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);

    const editButton = document.createElement('Button');//edit button allows the user to input a new/modified message
    editButton.innerText = "Edit";
    editButton.type = "button";
    editButton.style.backgroundColor = "orange";
    editButton.style.width = "80px";
    editButton.style.borderColor = "green";
    editButton.style.borderStyle = "solid";
    editButton.style.borderRadius = "35% 10%";
    editButton.style.borderWidth = "5px"
    editButton.style.padding = "5px 5px";
    editButton.addEventListener('click', (e) => {
        // const entry = event.target.parentNode;
        entry.edit();
        newMessage.contentEditable = true;
    })
    newMessage.appendChild(editButton);
    messageList.append(newMessage);

    event.target.reset();  /* clear the form fields */
})
