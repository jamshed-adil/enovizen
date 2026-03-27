import { serviceCategories } from './ServicesStrip';

const Footer = () => (
  <footer className="footer-bg text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.8rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            En<span style={{ color: '#06b6d4' }}>o</span>viz<span style={{ color: '#f59e0b' }}>en</span>
          </div>
          <p className="text-white/50 text-xs mb-1">Integrated Facility Management Services Pvt. Ltd.</p>
          <p className="text-white/40 text-xs leading-relaxed max-w-xs mt-3">
            Delivering comprehensive facility solutions with integrity, passion and technical excellence across South India.
          </p>
          <div className="flex gap-3 mt-6">
            {['F', 'T', 'In'].map(s => (
              <div key={s} className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-cyan-500 transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
            Quick Links
          </h4>
          {['Home', 'About Us', 'Services', 'Careers', 'Get Quote', 'Contact Us'].map(l => (
            <a key={l} href="#" className="block text-white/50 text-sm mb-2.5 hover:text-amber-400 transition-colors">{l}</a>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
            Our Services
          </h4>
          {serviceCategories.map(s => (
            <a key={s.title} href="#" className="block text-white/50 text-sm mb-2.5 hover:text-amber-400 transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">© 2026 Enovizen. All rights reserved.</p>
        <p className="text-white/30 text-xs">Powered by React & Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default Footer;
