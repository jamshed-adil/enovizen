import Icon from './Icon';

export const serviceCategories = [
  {
    title: 'Soft Services',
    color: '#06b6d4',
    icon: 'home',
    items: ['House Keeping', 'Janitorial Services', 'Help Desk Management', 'Cafeteria & Food Services'],
  },
  {
    title: 'Support Services',
    color: '#ef4444',
    icon: 'support',
    items: ['Handymen & Staffing', 'Front Office Administration', 'Production Support', 'Mailroom Management', 'Business Support', 'Warehouse & Inventory'],
  },
  {
    title: 'Security Services',
    color: '#8b5cf6',
    icon: 'lock',
    items: ["Guarding & Patrolling", "Electronic Surveillance (CCTV)", "Visitor's Management", "Access Control", "Parking Management", "Premium Guard & Bouncers"],
  },
  {
    title: 'Hard Services',
    color: '#10b981',
    icon: 'tool',
    items: ['Electrical & Power Backup', 'Electrical Contracts', 'Firefighting Systems', 'HVAC Operations', 'Plumbing & Water Mgmt', 'Carpentry & Painting'],
  },
  {
    title: 'Remote Services',
    color: '#f59e0b',
    icon: 'cloud',
    items: ['Ground Transportation', 'Infra Structure Mgmt', 'Campus Security'],
  },
];

const ServicesStrip = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="section-tag" style={{ color: '#1a56db' }}>What We Offer</span>
        <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#0f1b3d', marginTop: '8px' }}>
          Comprehensive Facility Services
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          One trusted partner for all your facility management needs, delivered with precision and care.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {serviceCategories.map((cat, i) => (
          <div key={i} className="service-card rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="px-5 py-6 text-white text-center" style={{ background: `linear-gradient(135deg, ${cat.color}ee, ${cat.color}bb)` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <Icon name={cat.icon} cls="w-7 h-7 text-white" />
              </div>
              <h3 style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: '1rem' }}>{cat.title}</h3>
            </div>
            <div className="p-4 bg-white">
              {cat.items.map((item, j) => (
                <div key={j} className="flex items-start gap-2 py-1.5 border-b border-gray-50 last:border-0">
                  <Icon name="check" cls="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: cat.color }} />
                  <span className="text-gray-600 text-xs leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesStrip;
