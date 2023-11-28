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
