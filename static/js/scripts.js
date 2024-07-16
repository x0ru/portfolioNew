const scrollProgress = document.getElementById('menu');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.transform = `rotate(${(scrollTop / height) * 500}deg)`;
});