
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
    <div className="p-6 pt-24 md:pt-32 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">What is your focus?</h1>
        <p className="text-slate-400">ContextTrans adjusts your vocabulary and nuances based on your industry.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {EXPERTISE_FIELDS.map(field => (
          <div 
            key={field.id}
            onClick={() => field.premium ? onUpgrade() : onSelect(field.name)}
            className={`group relative p-6 rounded-2xl glass border-2 transition-all cursor-pointer hover:-translate-y-1 ${field.premium ? 'border-amber-500/20 hover:border-amber-500/50' : 'border-white/5 hover:border-indigo-500/50'}`}
          >
            {field.premium && (
              <div className="absolute top-4 right-4 text-amber-500 text-[10px] font-bold flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded">
                <i className="fas fa-crown"></i> PREMIUM
              </div>
            )}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-colors ${field.premium ? 'bg-amber-500/10 text-amber-500' : 'bg-indigo-500/10 text-indigo-400'}`}>
              <i className={`fas ${field.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold mb-1">{field.name}</h3>
            <p className="text-sm text-slate-400">{field.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass p-8 rounded-3xl text-center space-y-4 border border-indigo-500/20">
         <h2 className="text-xl font-bold">Custom Professional Vocabulary?</h2>
         <p className="text-sm text-slate-400 max-w-md mx-auto">Upload your own company handbook or specialized dictionary to sync your AI tutor's vocabulary perfectly.</p>
         <button className="px-6 py-2 bg-slate-800 rounded-xl text-sm font-bold border border-white/10 hover:bg-slate-700 transition-colors">
            Configure ContextSync <i className="fas fa-upload ml-2"></i>
         </button>
      </div>
    </div>
  );
};

export default ExpertiseView;
