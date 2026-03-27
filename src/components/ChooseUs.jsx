import Icon from './Icon';

const chooseReasons = [
  { icon: 'shield', title: '100% Statutory Compliance', desc: 'Fully compliant operations with trained and skilled workforce across all branches.', color: '#1a56db' },
  { icon: 'clock', title: '24×7 Helpdesk Available', desc: 'Round-the-clock support always available to serve your needs promptly.', color: '#10b981' },
  { icon: 'globe', title: 'Transparency & Technical', desc: 'Oriented towards technical excellence and full operational transparency.', color: '#06b6d4' },
  { icon: 'tool', title: 'One Stop Expert Solutions', desc: 'Comprehensive solutions for all facility management needs under one roof.', color: '#f59e0b' },
  { icon: 'users', title: 'Committed to Satisfaction', desc: 'Every service delivered with the promise of complete customer satisfaction.', color: '#ef4444' },
];

const ChooseUs = () => (
  <section id="why-us" className="py-24" style={{ background: 'linear-gradient(135deg,#0f1b3d,#1a2f6b)' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="section-tag text-cyan-400">Why To</span>
        <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#fff', marginTop: '8px' }}>
          Choose Us?
        </h2>
        <p className="text-white/60 mt-3 max-w-lg mx-auto">
          Reasons why 500+ clients trust Enovizen as their facility management partner.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {chooseReasons.map((r, i) => (
          <div key={i} className="choose-card rounded-2xl p-6 text-center"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${r.color}25`, border: `1px solid ${r.color}44` }}>
              <Icon name={r.icon} cls="w-8 h-8" style={{ color: r.color }} />
            </div>
            <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.9rem', color: '#fff', lineHeight: 1.3, marginBottom: '8px' }}>
              {r.title}
            </h3>
            <p className="text-white/55 text-xs leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChooseUs;
