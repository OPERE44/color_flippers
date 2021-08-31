  
const colors = ['red', 'blue', 'green', 'yellow','orange','purple','cyan','white','pink'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {

  // btn.addEventListener('click', function (e) {
  //   e.preventDefault();

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
