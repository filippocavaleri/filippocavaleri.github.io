// Abstract toggle
document.querySelectorAll('.abstract-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.classList.toggle('open');
    btn.querySelector('.arrow').textContent = isOpen ? '−' : '+';
    const body = btn.nextElementSibling;
    if (body && body.classList.contains('abstract-body')) {
      body.classList.toggle('open');
    }
  });
});
