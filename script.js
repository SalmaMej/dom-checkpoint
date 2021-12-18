const titles = document.querySelectorAll('h1');
// console.log(titles);

// for (let i = 0; i < titles.length; i++) {
//   //   titles[i].style.color = 'red';
//   titles[i].addEventListener('click', function () {
//     titles[i].style.color = 'red';
//   });
// }

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function () {
    titles[i].classList.toggle('rouge');
  });
}

const par = document.querySelector('#par');
// console.log(par);

const btn = document.querySelector('button');
// console.log(btn);

const par2 = document.getElementById('par2');
// console.log(par2);

// btn.addEventListener('click', function () {
//   par2.remove();
// });

// sectionner ol
const OL = document.querySelector('ol');

btn.addEventListener('click', function () {
  // creation li
  const LI = document.createElement('li');

  // creation text
  const text = document.createTextNode('I am a new item');

  // put text inside li
  LI.appendChild(text);

  // put li inside ol
  OL.appendChild(LI);
});
