
import React from 'react';

interface ExpertiseViewProps {
  onSelect: (exp: string) => void;
  onUpgrade: () => void;
}

const EXPERTISE_FIELDS = [
  { id: 'gen', name: 'General Conversation', desc: 'Daily life, travel, and hobbies.', icon: 'fa-comments', premium: false },
  { id: 'biz', name: 'Business English', desc: 'Meetings, emails, and calls.', icon: 'fa-briefcase', premium: false },
  { id: 'tech', name: 'Tech & Engineering', desc: 'Sprints, architecture, and code.', icon: 'fa-code', premium: true },
  { id: 'med', name: 'Medical & Healthcare', desc: 'Diagnostics and patient care.', icon: 'fa-stethoscope', premium: true },
  { id: 'leg', name: 'Legal Professional', desc: 'Contracts and court nuances.', icon: 'fa-scale-balanced', premium: true },
  { id: 'mar', name: 'Marketing & Sales', desc: 'Pitching and persuasion.', icon: 'fa-bullhorn', premium: true },
];

const ExpertiseView: React.FC<ExpertiseViewProps> = ({ onSelect, onUpgrade }) => {
  return (
    <div className="p-6 pt-24 md:pt-32 max-w-5xl mx-auto space-y-12 animate-fadeIn pb-24 md:pb-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-2">
          <i className="fas fa-microchip text-[10px] text-indigo-400"></i>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400">Contextual Processor v2.0</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Select Your <span className="gradient-text">Cognitive Focus.</span></h1>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto">Calibrate your AI tutor's neural network to master specialized industry nuances and vocabulary.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERTISE_FIELDS.map(field => (
          <div
            key={field.id}
            onClick={() => field.premium ? onUpgrade() : onSelect(field.name)}
            className={`futuristic-card group p-8 cursor-pointer flex flex-col justify-between min-h-[220px] ${field.premium ? 'hover:border-amber-500/50' : ''}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 shadow-lg ${field.premium ? 'bg-amber-500/10 text-amber-500 shadow-amber-500/10' : 'bg-indigo-500/10 text-indigo-400 shadow-indigo-500/10'}`}>
                <i className={`fas ${field.icon}`}></i>
              </div>
              {field.premium && (
                <div className="text-amber-500 text-[9px] font-black flex items-center gap-2 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 tracking-widest">
                  <i className="fas fa-crown"></i> PRO
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black tracking-tight group-hover:text-indigo-400 transition-colors">{field.name}</h3>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{field.desc}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-500">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Initiate Link</span>
              <i className="fas fa-arrow-right text-[10px] text-indigo-400"></i>
            </div>
          </div>
        ))}
      </div>

      <div className="futuristic-card p-10 text-center space-y-6 border-indigo-500/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl font-black tracking-tight tracking-tighter">Looking for <span className="text-indigo-400">Custom Integration?</span></h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">Securely upload your proprietary corpus or specialized dictionary to calibrate your tutor for internal team communication.</p>
          <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all shadow-xl">
            CONFIGURE CONTEXTSYNC <i className="fas fa-upload ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseView;
