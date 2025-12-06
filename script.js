document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');

  function openModal(){
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeModal();
  });

  const modalImg = document.getElementById('modalImg');

  document.querySelectorAll('.gallery-item').forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      const img = btn.querySelector('img');
      if(img && img.src){
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
      } else {
        modalImg.src = '';
        modalImg.alt = '';
      }
      openModal();
    });
  });

});
