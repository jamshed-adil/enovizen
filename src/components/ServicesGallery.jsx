const galleryItems = [
  { label: 'Facility Cleaning', color: '#06b6d4', emoji: '🧹' },
  { label: 'Technical Maintenance', color: '#1a56db', emoji: '🔧' },
  { label: 'Warehouse Management', color: '#f59e0b', emoji: '🏭' },
  { label: 'Corporate Services', color: '#10b981', emoji: '🏢' },
  { label: 'Electrical Systems', color: '#ef4444', emoji: '⚡' },
  { label: 'Logistics & Transport', color: '#8b5cf6', emoji: '🚛' },
  { label: 'Cafeteria Services', color: '#f97316', emoji: '🍽️' },
  { label: 'Multi-Skilled Workers', color: '#06b6d4', emoji: '👷' },
];

const ServicesGallery = () => (
  <section className="py-24" style={{ background: 'linear-gradient(180deg,#f8faff,#fff)' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="section-tag" style={{ color: '#1a56db' }}>Beautiful View Of</span>
        <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#0f1b3d', marginTop: '8px' }}>
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map((g, i) => (
          <div key={i} className="img-tile aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer"
            style={{ background: `linear-gradient(135deg,${g.color}22,${g.color}44)`, border: `1px solid ${g.color}33` }}>
            <div className="text-5xl mb-3">{g.emoji}</div>
            <div style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: '0.85rem', color: '#0f1b3d', textAlign: 'center', padding: '0 12px' }}>
              {g.label}
            </div>
            <div className="overlay" style={{ background: `linear-gradient(to top,${g.color}cc,transparent)` }}>
              <span>{g.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGallery;
