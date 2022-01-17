
//Botones
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-btn');



modalBtn.addEventListener('click', ()=>{
    modalOverlay.classList.add('open-modal')
})

closeModal.addEventListener('click',()=>{
    modalOverlay.classList.remove('open-modal')
})
