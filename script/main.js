window.onblur = function() { document.title = 'come back!'; }
window.onfocus = function() { document.title = 'IRP Cleanup'; }

function oC() {
  document.getElementById('mNV').classList.toggle('h');
  document.getElementById('mNV').classList.toggle('s');
}

function stt() {
  document.getElementById('mH').scrollIntoView({
    behavior: 'smooth'
  });
}

function bti() {
  window.location.href='../index.html';
}

function olp() {
  window.location.href='pages/projects.html';
}

function btp() {
  window.location.href='../pages/projects.html';
}

let i = 0;
let txt = "> WELCOME"
let speed = 200;

function typeW() {
  document.getElementById('t').innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeW, speed);
  //console.log(i);
  if (i === 60) {
    i = 0;
    document.getElementById('t').innerHTML = '';
  }
}
typeW();
