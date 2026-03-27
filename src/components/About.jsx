import Icon from './Icon';

const values = [
  { label: 'Integrity', icon: 'shield', color: '#06b6d4' },
  { label: 'Innovation', icon: 'star', color: '#f59e0b' },
  { label: 'Reliability', icon: 'clock', color: '#10b981' },
  { label: 'Excellence', icon: 'globe', color: '#8b5cf6' },
];

const About = () => (
  <section id="about-us" className="py-24" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #eef2ff 100%)' }}>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      {/* Illustration side */}
      <div className="relative">
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg,#0f1b3d,#1a2f6b)' }}>
          <div className="p-10 text-white">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((v, i) => (
                <div key={i} className="rounded-xl p-4 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${v.color}22` }}>
                    <Icon name={v.icon} cls="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <span style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.85rem' }}>{v.label}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['#06b6d4', '#f59e0b', '#10b981', '#8b5cf6'].map((c, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1.1rem' }}>200+ Professionals</p>
                <p className="text-white/60 text-xs">Across South India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />
      </div>

      {/* Text side */}
      <div>
        <span className="section-tag" style={{ color: '#1a56db' }}>We Are An</span>
        <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.8rem,3.2vw,2.5rem)', color: '#0f1b3d', marginTop: '8px', lineHeight: 1.2 }}>
          Integrated Facility<br />Management Domain
        </h2>
        <div className="w-14 h-1 rounded-full mt-5 mb-6" style={{ background: 'linear-gradient(90deg,#1a56db,#06b6d4)' }} />
        <p className="text-gray-600 leading-relaxed mb-4">
          At Enovizen Integrated Facility Management Services Pvt Ltd, we strongly believe in Integrity &amp; Passion along with team work which drives us and gives a solution with a systematic approach to the customer needs.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Enovizen is a client-focused company with a strong ability in problem-solving skills &amp; consistently strives hard to excel through expertise in fulfilling the customer requirements.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { num: '100%', label: 'Compliance' },
            { num: '24/7', label: 'Support' },
            { num: '4+', label: 'States' },
          ].map((s, i) => (
            <div key={i} className="text-center rounded-xl py-4 px-3" style={{ background: '#fff', boxShadow: '0 4px 16px rgba(26,86,219,0.08)' }}>
              <div style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: '1.4rem', color: '#1a56db' }}>{s.num}</div>
              <div className="text-gray-500 text-xs font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <button className="btn-cta px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
          Read More About Us <Icon name="arrow" cls="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

export default About;
