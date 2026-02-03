
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
    <div className="p-6 pt-24 md:pt-32 max-w-6xl mx-auto space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h1 className="text-3xl font-bold">Your Progress Journey</h1>
        <div className="flex gap-2">
            <button className="px-4 py-1 rounded-full bg-indigo-600 text-xs font-bold uppercase tracking-widest">Weekly</button>
            <button className="px-4 py-1 rounded-full glass text-xs font-bold uppercase tracking-widest text-slate-400">Monthly</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-2xl h-[400px]">
            <h3 className="text-lg font-bold mb-6">Proficiency Score Progression</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorProf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                  itemStyle={{ color: '#818cf8' }}
                />
                <Area type="monotone" dataKey="proficiency" stroke="#6366f1" fillOpacity={1} fill="url(#colorProf)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
             <div className="glass p-6 rounded-2xl space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                   <i className="fas fa-list-check text-green-400"></i> Grammar Accuracy
                </h4>
                <div className="flex items-end gap-2">
                   <span className="text-4xl font-black">92%</span>
                   <span className="text-green-400 text-xs font-bold mb-1"><i className="fas fa-arrow-up"></i> 4%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-green-400" style={{ width: '92%' }}></div>
                </div>
             </div>
             <div className="glass p-6 rounded-2xl space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                   <i className="fas fa-bolt text-blue-400"></i> Speech Fluency
                </h4>
                <div className="flex items-end gap-2">
                   <span className="text-4xl font-black">78%</span>
                   <span className="text-green-400 text-xs font-bold mb-1"><i className="fas fa-arrow-up"></i> 12%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-400" style={{ width: '78%' }}></div>
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
