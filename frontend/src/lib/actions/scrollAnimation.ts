export function fadeUp(node: HTMLElement) {
  // Add the base class for the animation
  node.classList.add('fade-up-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.classList.add('in-view');
        // Optional: stop observing once it has animated in
        observer.unobserve(node);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px'
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
