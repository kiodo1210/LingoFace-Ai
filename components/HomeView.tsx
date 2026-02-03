
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
    <div className="p-6 pt-24 md:pt-32 max-w-6xl mx-auto space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white shadow-2xl">
        <div className="relative z-10 space-y-4">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest">Premium Member</span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Master English with<br/>Real Native Tutors.</h1>
          <p className="text-white/80 max-w-md">Your personalized AI coaching is ready. Start a session today and experience 1:1 human-like interaction.</p>
          <button 
            onClick={onStartSession}
            className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-bold hover:bg-indigo-50 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg"
          >
            Start Session Now <i className="fas fa-play ml-2"></i>
          </button>
        </div>
        <div className="absolute right-[-10%] top-[-20%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon="fa-clock" label="Study Time" value="12.5 hrs" color="text-blue-400" />
        <StatCard icon="fa-fire" label="Streak" value="14 Days" color="text-orange-400" />
        <StatCard icon="fa-brain" label="Exp" value="1,240 pt" color="text-purple-400" />
        <StatCard icon="fa-award" label="Proficiency" value="B2 Upper" color="text-green-400" />
      </div>

      {/* Tutors Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold">Your Professional Tutors</h2>
          <button className="text-indigo-400 text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TUTORS.map(tutor => (
            <div key={tutor.id} className="glass rounded-2xl overflow-hidden flex flex-col sm:flex-row group transition-all hover:border-indigo-500/50">
              <div className="sm:w-48 h-48 overflow-hidden relative">
                <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{tutor.name}</h3>
                    <p className="text-slate-400 text-sm">{tutor.role}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded text-xs font-bold">
                    <i className="fas fa-star"></i> {tutor.rating}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutor.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
                <button 
                  onClick={onStartSession}
                  className="w-full py-2 bg-indigo-600/20 text-indigo-400 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  Start Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade Callout */}
      <section className="p-6 rounded-2xl glass border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <i className="fas fa-gem text-xl"></i>
            </div>
            <div>
                <h3 className="font-bold">Unlock ContextTrans Pro</h3>
                <p className="text-sm text-slate-400">Advanced nuances for Legal, Medical, and Tech industries.</p>
            </div>
        </div>
        <button onClick={onUpgrade} className="px-6 py-2 bg-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors whitespace-nowrap">
            Upgrade Now
        </button>
      </section>
    </div>
  );
};

const StatCard: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="glass p-4 rounded-2xl border border-white/5 space-y-2">
    <div className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center ${color}`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <div>
      <p className="text-[10px] text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default HomeView;
