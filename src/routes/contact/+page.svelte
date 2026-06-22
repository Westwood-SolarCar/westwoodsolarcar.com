<svelte:head>
	<title>Contact | Westwood Solar Car</title>
</svelte:head>

<section class="contact-page">
	<div class="container contact-grid">
		<div>
			<p class="eyebrow">Get in Touch</p>
			<h1>Contact <span class="text-accent">Westwood Solar Car</span></h1>
			<p class="lead">
				If you'd like to support the team, ask about sponsorships, or reach out about the
				program, send us an email and we’ll get back to you.
			</p>
		</div>

		<div class="contact-card">
			<h2>Email</h2>
			<a class="email" href="mailto:contact@westwoodracing.com">contact@westwoodracing.com</a>
			<p>
				For sponsorships, include your company name and the best contact person in the message.
			</p>
			<a class="cta" href="mailto:contact@westwoodracing.com">Send Email</a>
		</div>
	</div>
</section>

<style>
	.contact-page {
		padding: var(--spacing-xl) 0;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
		gap: var(--spacing-lg);
		align-items: start;
	}

	.eyebrow {
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--text-secondary);
		margin-bottom: var(--spacing-xs);
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 4.5rem);
		line-height: 1;
		margin-bottom: var(--spacing-md);
	}

	.lead {
		font-size: 1.125rem;
		max-width: 40rem;
		color: var(--text-secondary);
	}

	.contact-card {
		padding: var(--spacing-lg);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-lg);
		background: var(--bg-surface);
	}

	.contact-card h2 {
		margin-bottom: var(--spacing-sm);
	}

	.email {
		display: inline-block;
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: var(--spacing-sm);
	}

	.contact-card p {
		color: var(--text-secondary);
		margin-bottom: var(--spacing-md);
	}

	.cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 1.4rem;
		border-radius: var(--radius-md);
		background: var(--accent-orange);
		color: #111;
		font-weight: 700;
	}

	@media (max-width: 800px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>