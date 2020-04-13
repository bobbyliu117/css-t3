const seatNodeList = document.querySelectorAll('.row .seat:not(.occupied)');
const seats = [...seatNodeList];

document.querySelector('.seats').addEventListener('click', e=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }
});