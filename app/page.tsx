export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube Copyright Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop False Copyright Claims
          <span className="text-[#58a6ff]"> Before They Kill Your Channel</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ClaimGuard monitors your YouTube videos 24/7, detects bogus copyright strikes using audio fingerprinting, and auto-generates legal dispute letters — so you can focus on creating.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Protecting My Channel — $15/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '🔍', title: '24/7 Monitoring', desc: 'Webhook-based scanning detects new claims within minutes of filing.' },
          { icon: '🎵', title: 'Audio Fingerprinting', desc: 'Validates whether claimed audio actually matches your original content.' },
          { icon: '📄', title: 'Auto Dispute Letters', desc: 'Legally-sound templates generated instantly, ready to submit.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Creator Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor up to 50 videos',
              'Real-time claim alerts via email',
              'Audio fingerprint analysis',
              'Unlimited dispute letter generation',
              'Claim history dashboard',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does ClaimGuard detect false copyright claims?',
              a: 'We connect to the YouTube Data API to monitor your channel continuously. When a claim appears, our audio fingerprinting engine compares the flagged segment against your original upload to determine if the claim is legitimate or fraudulent.',
            },
            {
              q: 'Are the dispute letters legally valid?',
              a: 'Yes. Our templates are based on DMCA counter-notification requirements and fair use doctrine. They are reviewed by copyright attorneys and ready to submit directly through YouTube\'s dispute portal.',
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'You can cancel anytime with no penalty. Monitoring stops at the end of your billing period, but you keep access to all previously generated dispute letters and claim history.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} ClaimGuard. All rights reserved.</p>
      </footer>
    </main>
  )
}
