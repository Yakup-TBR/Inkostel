const filterButton = document.querySelector('#filterButton');
const filterModal = new bootstrap.Modal(document.querySelector('#filterModal'));

filterButton.addEventListener('click', () => {
  filterModal.show();
});


const profileButton = document.querySelector('#profileButton');

profileButton.addEventListener('click', () => {
  window.location.href = '/'; 
});


