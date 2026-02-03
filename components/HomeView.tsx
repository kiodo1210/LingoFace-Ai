
import React from 'react';
import { Tutor } from '../types';

interface HomeViewProps {
  onStartSession: () => void;
  onUpgrade: () => void;
}

const TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    role: 'Business English Expert',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    tags: ['Negotiation', 'Presentations', 'Tech']
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Daily Conversation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    tags: ['Slang', 'Culture', 'Travel']
  }
];

const HomeView: React.FC<HomeViewProps> = ({ onStartSession, onUpgrade }) => {
  return (
    <div className="p-6 pt-24 md:pt-32 max-w-6xl mx-auto space-y-12 animate-fadeIn">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/10 p-8 md:p-12 text-white shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent"></div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">Premium Neural Access</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
              Level up Your <br />
              <span className="gradient-text">Neural Fluency.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Experience the next generation of language acquisition. 1:1 immersive sessions with AI tutors that feel truly native.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onStartSession}
                className="group relative px-8 py-4 bg-white text-slate-950 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  INITIATE SESSION <i className="fas fa-bolt-lightning text-indigo-600"></i>
                </span>
              </button>
              <button
                onClick={onUpgrade}
                className="glass-button px-8 py-4 text-white font-bold"
              >
                VIEW PLANS
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-center relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 animate-float shadow-[0_0_50px_rgba(99,102,241,0.3)]">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover opacity-60"
                  alt="AI Avatar"
                />
                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
              <i className="fas fa-brain text-indigo-400"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
              <i className="fas fa-wave-square text-purple-400"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon="fa-clock" label="Study Time" value="12.5 hrs" color="text-blue-400" />
        <StatCard icon="fa-fire" label="Streak" value="14 Days" color="text-orange-400" />
        <StatCard icon="fa-brain" label="Exp" value="1,240 pt" color="text-purple-400" />
        <StatCard icon="fa-award" label="Proficiency" value="B2 Upper" color="text-green-400" />
      </div>

      {/* Tutors Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Expert Neural Nodes</h2>
            <p className="text-slate-500 text-sm font-medium">Select your preferred cognitive interaction model.</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold hover:bg-white/10 transition-colors">
            EXPAND ALL <i className="fas fa-chevron-right ml-1"></i>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {TUTORS.map(tutor => (
            <div key={tutor.id} className="futuristic-card group flex flex-col sm:flex-row h-full">
              <div className="sm:w-56 h-56 sm:h-full overflow-hidden relative">
                <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight group-hover:text-indigo-400 transition-colors">{tutor.name}</h3>
                      <p className="text-indigo-400/80 text-[10px] font-black uppercase tracking-[0.2em]">{tutor.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-full text-xs font-black border border-indigo-500/20">
                      <i className="fas fa-star text-[10px]"></i> {tutor.rating}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tutor.tags.map(tag => (
                      <span key={tag} className="text-[9px] bg-white/5 text-slate-400 border border-white/5 px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={onStartSession}
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500"
                >
                  Initiate Link
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade Callout */}
      <section className="relative p-10 rounded-[2.5rem] bg-indigo-600 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
          <i className="fas fa-crown text-[120px] -rotate-12"></i>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-xl shadow-indigo-700/50">
              <i className="fas fa-gem text-2xl"></i>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white leading-tight">Augment your Cognitive Core</h3>
              <p className="text-indigo-100/70 font-medium">Unlock context-aware translation and expert neural models.</p>
            </div>
          </div>
          <button
            onClick={onUpgrade}
            className="px-10 py-4 bg-white text-indigo-600 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-900/50"
          >
            UPGRADE MODULE
          </button>
        </div>
      </section>
    </div>
  );
};

const StatCard: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="futuristic-card p-6 space-y-4 group">
    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 ${color}`}>
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <div className="space-y-1">
      <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] group-hover:text-indigo-400 transition-colors">{label}</p>
      <p className="text-2xl font-black tracking-tight">{value}</p>
    </div>
    <div className="h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
  </div>
);

export default HomeView;
