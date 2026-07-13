// nav item switching (visual only)
const navButtons = document.querySelectorAll('.pill-nav button');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// FAB opens a small quick-action menu
const fabBtn = document.getElementById('fabBtn');
const quickMenu = document.getElementById('quickMenu');

fabBtn.addEventListener('click', () => {
  fabBtn.classList.toggle('open');
  quickMenu.classList.toggle('open');
});

quickMenu.querySelectorAll('.qitem').forEach(item => {
  item.addEventListener('click', () => {
    fabBtn.classList.remove('open');
    quickMenu.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if(!e.target.closest('.fab-wrap')){
    fabBtn.classList.remove('open');
    quickMenu.classList.remove('open');
  }
});
