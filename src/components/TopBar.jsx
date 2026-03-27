import Icon from './Icon';

const TopBar = () => (
  <div className="hidden md:flex items-center justify-between px-8 py-2 text-xs text-white/80" style={{background:'#070e24'}}>
    <div className="flex items-center gap-6">
      {['Facebook','Twitter','Instagram'].map(s => (
        <a key={s} href="#" className="hover:text-amber-400 transition-colors">{s}</a>
      ))}
    </div>
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-1">
        <Icon name="mail" cls="w-3.5 h-3.5 text-amber-400"/>
        info@enovizen.com
      </span>
      <span className="flex items-center gap-1">
        <Icon name="location" cls="w-3.5 h-3.5 text-amber-400"/>
        AP · Telangana · Karnataka · Tamilnadu
      </span>
    </div>
  </div>
);

export default TopBar;
