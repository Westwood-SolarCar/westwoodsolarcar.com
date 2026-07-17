<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a href="/" class="footer-logo">Westwood <em>Solar Car</em></a>
      <p class="footer-mission">
        A student-led engineering team designing, building, and racing solar-powered vehicles in
        the national Solar Car Challenge.
      </p>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        class="social-link"
        aria-label="Westwood Solar Car on Instagram"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
        Instagram
      </a>
    </div>

    <nav class="footer-col" aria-label="Footer">
      <h3>Explore</h3>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/car">The Car</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
      </ul>
    </nav>

    <div class="footer-col">
      <h3>Get in touch</h3>
      <ul>
        <li><a href="mailto:contact@westwoodracing.com">contact@westwoodracing.com</a></li>
        <li><a href="/sponsors">Become a sponsor</a></li>
        <li><a href="/contact">Join the team</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container bottom-row">
      <p>&copy; {new Date().getFullYear()} Westwood Solar Car. All rights reserved.</p>
      <p>Austin, Texas</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--bg-alt);
    border-top: 1px solid var(--border);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--space-xl);
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }

  .footer-logo {
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text);
  }

  .footer-logo em {
    font-style: normal;
    color: var(--accent-text);
  }

  .footer-mission {
    margin: var(--space-sm) 0 var(--space-md);
    max-width: 34em;
    font-size: 0.9375rem;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-muted);
    min-height: 44px;
  }

  .social-link:hover {
    color: var(--accent-text);
  }

  .footer-col h3 {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-faint);
    margin-bottom: var(--space-sm);
  }

  .footer-col ul {
    list-style: none;
  }

  .footer-col li {
    margin-bottom: 0.25rem;
  }

  .footer-col a {
    display: inline-block;
    padding: 0.375rem 0;
    font-size: 0.9375rem;
    color: var(--text-muted);
  }

  .footer-col a:hover {
    color: var(--text);
  }

  .footer-bottom {
    border-top: 1px solid var(--border);
    padding: var(--space-sm) 0;
  }

  .bottom-row {
    display: flex;
    justify-content: space-between;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  .bottom-row p {
    font-size: 0.8125rem;
    color: var(--text-faint);
    margin: 0;
  }
</style>
