const form = document.querySelector('form');
const p = document.querySelector('p');
const students = [];

function getRandomIntInclusive(min, max) {
  const currentMin = Math.ceil(min);
  const currentMax = Math.floor(max);
  return Math.floor(Math.random() * (currentMax - currentMin + 1) + currentMin); // The maximum is inclusive and the minimum is inclusive
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});

document.querySelector('.button--jumbo').addEventListener('click', () => {
  // Get a random student object in the `students` array
  const randomName = students[getRandomIntInclusive(0, students.length - 1)];

  // Log the first and last name of the student using template literals
  p.innerText = `${randomName.fname} ${randomName.lname}`;
});
