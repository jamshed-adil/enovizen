const sectors = [
  { title: 'Hospital (Health)', color: '#ef4444', items: ['Daily and timely cleaning and mopping', 'Dining and common utility area cleaning', 'Illumination level observation', 'Maintenance management of premises'] },
  { title: 'Commercial', color: '#1a56db', items: ['Unique requirements per client', 'Fresh ideas keeping future in mind', 'Quality and accountability', 'Minimize costing'] },
  { title: 'Industrial (Manufacturing)', color: '#f97316', items: ['Perfect combination of manpower & equipment', 'Safety at most priority', 'Highest quality materials', 'People and product process safety'] },
  { title: 'Retail', color: '#10b981', items: ['Cost effective solutions', 'Optimising user experience', 'Continuous improvements', 'Tailored service delivery'] },
  { title: 'Education', color: '#8b5cf6', items: ['Partner with schools, colleges, universities', 'Best-in-class facilities', 'Support services for tomorrow', 'Creating way for a better future'] },
  { title: 'Restaurant & Guest House', color: '#06b6d4', items: ['Zero delays delivery', 'Rapid and flawless service', 'Daily raising standards', 'Daily cleaning regimes'] },
  { title: 'Residentials', color: '#f59e0b', items: ['Housekeeping services', 'Day log book management', 'Cleaning & maintaining pavilions', 'Many other residential services'] },
];

const ServiceSectors = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="section-tag" style={{ color: '#1a56db' }}>Our Best</span>
        <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#0f1b3d', marginTop: '8px' }}>
          Service Sectors
        </h2>
        <p className="text-gray-500 mt-3 max-w-lg mx-auto">Specialized facility solutions tailored for every industry vertical.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sectors.map((s, i) => (
          <div key={i} className="sector-card rounded-2xl p-6 border border-gray-100 bg-white shadow-sm cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}18` }}>
                <div className="w-4 h-4 rounded-full" style={{ background: s.color }} />
              </div>
              <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '0.95rem', color: '#0f1b3d' }}>{s.title}</h3>
            </div>
            <ul className="space-y-1.5">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSectors;
