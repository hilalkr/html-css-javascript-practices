'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(event){
  const button = event.target;
  button.classList.add('clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function(){
  const clickedButton = document.querySelector('.show-modal.clicked');
  clickedButton.classList.remove('clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnClosedModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
      // if(!modal.classList.contains('hidden'))Model gizli sınıfı içermiyorsa modeli kapat
        closeModal();
      }
});
 
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnClosedModel = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// const openModal = function(){
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }
// const closeModal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }


// for(let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);

// btnClosedModel.addEventListener('click', closeModal)
// overlay.addEventListener('click', closeModal)

