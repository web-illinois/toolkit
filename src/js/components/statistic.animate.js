
window.addEventListener("load", (event) => {
    const elements = document.querySelectorAll('il-statistic[startAnimation]');
    const observer = new IntersectionObserver(handleIntersection);
    elements.forEach(obs => {
        observer.observe(obs);
      });
}, false);

function handleIntersection(entries, observer){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.setAttribute('animate', true);
      observer.unobserve(entry.target);
    }
  });
}
