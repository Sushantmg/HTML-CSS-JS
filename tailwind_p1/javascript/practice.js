
const menuIcon = document.getElementById('menuIcon');
const mobileSidebar = document.getElementById('mobileSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
  mobileSidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
});

closeSidebar.addEventListener('click', () => {
  mobileSidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  mobileSidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});
