import Icon from './Icon';

const contactItems = [
  { icon: 'phone', title: 'Call Us', val: '+91 9876543210', color: '#1a56db' },
  { icon: 'mail', title: 'Email Us', val: 'info@enovizen.com', color: '#10b981' },
  { icon: 'location', title: 'Regions Served', val: 'AP · Telangana · Karnataka · Tamilnadu', color: '#f59e0b' },
];

const Contact = () => (
  <section id="contact-us" className="py-16" style={{ background: '#f8faff' }}>
    <div className="max-w-7xl mx-auto px-6 text-center">
      <span className="section-tag" style={{ color: '#1a56db' }}>Get In Touch</span>
      <h2 style={{ fontFamily: 'Sora', fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#0f1b3d', marginTop: '8px', marginBottom: '40px' }}>
        We'd Love To Hear From You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contactItems.map((c, i) => (
          <div key={i} className="rounded-2xl p-7 bg-white shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${c.color}15` }}>
              <Icon name={c.icon} cls="w-7 h-7" style={{ color: c.color }} />
            </div>
            <h3 style={{ fontFamily: 'Sora', fontWeight: 700, color: '#0f1b3d' }}>{c.title}</h3>
            <p className="text-gray-500 text-sm text-center">{c.val}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
