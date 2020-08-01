function openClose() {
  document.getElementById('menuNav').classList.toggle('hidden');
  document.getElementById('menuNav').classList.toggle('show');
}

function scrollToLatest() {
  document.getElementById('latest').scrollIntoView({
    behavior: 'smooth'
  });
}

function toTheTop() {
  document.getElementById('intro').scrollIntoView({
    behavior: 'smooth'
  });
}

let i = 0;
let txt = "> WELCOME"
let speed = 200;

function typeW() {
  document.getElementById('type').innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeW, speed);
  //console.log(i);
  if (i === 60) {
    i = 0;
    document.getElementById('type').innerHTML = '';
  }
}
typeW();
