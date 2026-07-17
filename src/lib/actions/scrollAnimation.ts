interface FadeUpOptions {
  /** Stagger delay in milliseconds. */
  delay?: number;
}

export function fadeUp(node: HTMLElement, options: FadeUpOptions = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {};
  }

  node.classList.add('fade-up-element');

  if (options.delay) {
    node.style.setProperty('--reveal-delay', `${options.delay}ms`);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('in-view');
          observer.unobserve(node);
        }
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
