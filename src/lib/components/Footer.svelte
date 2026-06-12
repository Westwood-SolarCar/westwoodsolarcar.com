<footer class="footer">
  <div class="container footer-container">
    <div class="footer-brand">
      <h2 class="logo"><span class="logo-w">W</span>ESTWOOD <span class="logo-accent">Solar Car</span></h2>
      <p class="mission">Engineering Excellence.<br>Pushing the boundaries of solar technology.</p>
      <div class="social-links">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="social-link">Instagram</a>
      </div>
    </div>
    
    <div class="footer-links-group">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/team">The Team</a></li>
        <li><a href="/car">The Car</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
      </ul>
    </div>
    
    <div class="footer-links-group">
      <h3>Contact</h3>
      <ul>
        <li><a href="mailto:contact@westwoodracing.com">contact@westwoodracing.com</a></li>
        <li>Westwood Engineering Center</li>
        <li>123 Solar Way</li>
        <li>Austin, TX 78759</li>
      </ul>
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="container bottom-container">
      <p>&copy; {new Date().getFullYear()} Westwood Solar Car Racing. All rights reserved.</p>
      <div class="legal-links">
        <a href="mailto:contact@westwoodracing.com">Contact</a>
        <a href="/sponsors">Sponsor Us</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--bg-section-alt);
    border-top: 1px solid var(--border-subtle);
    padding-top: var(--spacing-lg);
  }

  .footer-container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
  }

  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }
  }

  .logo {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
  }

  .logo-w { font-size: 1.5rem; font-weight: 600; font-family: var(--font-main); }
  .logo-accent { color: var(--accent-orange); text-transform: uppercase; }

  .mission {
    color: var(--text-tertiary);
    margin-bottom: var(--spacing-md);
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .social-link:hover {
    color: var(--accent-orange);
  }

  .footer-links-group h3 {
    font-size: 1.125rem;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
  }

  .footer-links-group ul {
    list-style: none;
  }

  .footer-links-group li {
    margin-bottom: 0.5rem;
  }

  .footer-links-group a,
  .footer-links-group li {
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: color var(--transition-fast);
  }

  .footer-links-group a:hover {
    color: var(--accent-orange);
  }

  .footer-bottom {
    background-color: var(--bg-main);
    border-top: 1px solid var(--border-subtle);
    padding: var(--spacing-sm) 0;
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    .bottom-container {
      flex-direction: column;
      gap: var(--spacing-xs);
      text-align: center;
    }
  }

  .footer-bottom p {
    font-size: 0.8rem;
    color: var(--text-tertiary);
    margin: 0;
  }

  .legal-links {
    display: flex;
    gap: 1rem;
  }

  .legal-links a {
    font-size: 0.8rem;
    color: var(--text-tertiary);
  }

  .legal-links a:hover {
    color: var(--text-primary);
  }
</style>
