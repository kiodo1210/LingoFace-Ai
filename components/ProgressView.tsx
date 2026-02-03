
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const DATA = [
  { name: 'Mon', proficiency: 65, vocab: 2400 },
  { name: 'Tue', proficiency: 66, vocab: 2450 },
  { name: 'Wed', proficiency: 68, vocab: 2500 },
  { name: 'Thu', proficiency: 67, vocab: 2580 },
  { name: 'Fri', proficiency: 70, vocab: 2700 },
  { name: 'Sat', proficiency: 72, vocab: 2820 },
  { name: 'Sun', proficiency: 75, vocab: 3000 },
];

const ProgressView: React.FC = () => {
  return (
    <div className="p-6 pt-24 md:pt-32 max-w-7xl mx-auto space-y-12 animate-fadeIn pb-24 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400">Cognitive Metrics v4.0</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight tracking-tighter">Your <span className="gradient-text">Neural Progress.</span></h1>
        </div>
        <div className="flex p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <button className="px-6 py-2 rounded-xl bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-white/10 transition-all">Weekly</button>
          <button className="px-6 py-2 rounded-xl text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Monthly</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="futuristic-card p-8 h-[450px] group">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black tracking-tight group-hover:text-indigo-400 transition-colors">Proficiency Trajectory</h3>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                <i className="fas fa-chart-line text-indigo-400 text-sm"></i>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="75%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorProf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorVocab" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c084fc" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tick={{ dy: 10 }} />
                <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', padding: '1rem' }}
                  itemStyle={{ color: '#818cf8', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase' }}
                  labelStyle={{ color: '#ffffff', fontWeight: '900', marginBottom: '0.5rem' }}
                />
                <Area type="monotone" dataKey="proficiency" stroke="#6366f1" fillOpacity={1} fill="url(#colorProf)" strokeWidth={4} dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#0f172a' }} activeDot={{ r: 8, strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="futuristic-card p-8 space-y-6 group">
              <div className="flex justify-between items-center">
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 group-hover:text-green-400 transition-colors">
                  Syntactic Precision
                </h4>
                <i className="fas fa-list-check text-green-400 text-lg"></i>
              </div>
              <div className="flex items-end gap-3 font-mono">
                <span className="text-5xl font-black tracking-tighter">92%</span>
                <span className="text-green-400 text-[10px] font-black mb-2 flex items-center gap-1">
                  <i className="fas fa-arrow-up-right"></i> +4.2%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '92%' }}></div>
                <div className="absolute inset-x-0 h-full bg-white/10 animate-pulse"></div>
              </div>
            </div>
            <div className="futuristic-card p-8 space-y-6 group">
              <div className="flex justify-between items-center">
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-400 transition-colors">
                  Vocal Velocity
                </h4>
                <i className="fas fa-bolt text-cyan-400 text-lg"></i>
              </div>
              <div className="flex items-end gap-3 font-mono">
                <span className="text-5xl font-black tracking-tighter">78%</span>
                <span className="text-green-400 text-[10px] font-black mb-2 flex items-center gap-1">
                  <i className="fas fa-arrow-up-right"></i> +12.8%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: '78%' }}></div>
                <div className="absolute inset-x-0 h-full bg-white/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold">EduGen Weekly Quiz</h3>
            <p className="text-sm text-slate-400">Based on your pinpoint coaching from the last 7 days.</p>
            <div className="space-y-3">
              <QuizItem icon="fa-font" label="Medical Terms" score="12/15" />
              <QuizItem icon="fa-microphone" label="Intonation" score="4.2/5.0" />
              <QuizItem icon="fa-brain" label="Synonyms" score="9/10" />
            </div>
            <button className="w-full py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-all">Take New Quiz</button>
          </div>

          <div className="glass p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold">Weakness Analysis</h3>
            <div className="flex flex-wrap gap-2">
              <Tag text="Past Perfect Tense" color="bg-red-500/10 text-red-400" />
              <Tag text="Business Phrasal Verbs" color="bg-amber-500/10 text-amber-400" />
              <Tag text="Polite Rejections" color="bg-purple-500/10 text-purple-400" />
              <Tag text="Hesitation Fillers" color="bg-blue-500/10 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuizItem: React.FC<{ icon: string; label: string; score: string }> = ({ icon, label, score }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-white/5">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xs">
        <i className={`fas ${icon}`}></i>
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className="text-sm font-bold">{score}</span>
  </div>
);

const Tag: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${color}`}>
    {text}
  </span>
);

export default ProgressView;
