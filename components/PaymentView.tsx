
import React from 'react';
import { PaymentPlan } from '../types';

interface PaymentViewProps {
  onBack: () => void;
}

const PLANS: PaymentPlan[] = [
  {
    id: 'free',
    name: 'Starter',
    price: '$0',
    period: '/month',
    features: ['15m Daily Session', 'General English', 'Basic Progress Stats'],
    isPremium: false
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$29',
    period: '/month',
    features: ['Unlimited Sessions', 'Full Industry Expertise', 'EduGen Weekly Quizzes', 'Nuance Pro Filter', '24/7 AI Feedback'],
    isPremium: true
  },
  {
    id: 'annual',
    name: 'Lifetime (Early Bird)',
    price: '$199',
    period: 'one-time',
    features: ['All Pro Features', 'Future ContextSync Updates', 'Private Community', 'Early Access to Beta'],
    isPremium: true
  }
];

const PaymentView: React.FC<PaymentViewProps> = ({ onBack }) => {
  return (
    <div className="p-6 pt-24 md:pt-32 max-w-7xl mx-auto animate-fadeIn relative overflow-hidden pb-24 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <i className="fas fa-crown text-[10px] text-amber-500"></i>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-400">Subscription Matrix</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Expand Your <span className="gradient-text">Cognitive Limits.</span></h1>
        </div>
        <button
          onClick={onBack}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white transition-all group"
        >
          <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
          RETURN TO HUB
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {PLANS.map(plan => (
          <div
            key={plan.id}
            className={`futuristic-card flex flex-col p-10 group ${plan.id === 'pro' ? 'border-indigo-500/40 neon-glow scale-105 z-10' : ''}`}
          >
            {plan.id === 'pro' && (
              <div className="absolute top-0 right-0 m-6 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                Recommended
              </div>
            )}

            <div className="mb-10 space-y-4">
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">{plan.name} Plan</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">{plan.period}</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5 mb-8"></div>

            <ul className="flex-1 space-y-5 mb-10">
              {plan.features.map(feat => (
                <li key={feat} className="flex items-start gap-4 text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-[8px] text-indigo-400"></i>
                  </div>
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 ${plan.isPremium ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400'}`}>
              {plan.id === 'free' ? 'Standby Model Active' : 'Initialize Protocol'}
            </button>
          </div>
        ))}
      </div>

      {/* Payment Methods and Trust */}
      <div className="futuristic-card p-12 flex flex-col lg:flex-row items-center justify-between gap-12 group">
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-3 text-emerald-400 font-black uppercase text-[10px] tracking-[0.3em]">
            <i className="fas fa-shield-halved animate-pulse"></i> Protocol Security: Verified
          </div>
          <h2 className="text-3xl font-black tracking-tight leading-tight">Global Connectivity for High-Performance Units.</h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">Join the decentralized network of professionals mastering language through LingoFace's proprietary neural tutoring.</p>
        </div>

        <div className="w-full max-w-sm space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center opacity-40 hover:opacity-100 hover:border-white/10 transition-all cursor-pointer">
              <i className="fab fa-apple-pay text-3xl"></i>
            </div>
            <div className="h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center opacity-40 hover:opacity-100 hover:border-white/10 transition-all cursor-pointer">
              <i className="fab fa-google-pay text-4xl"></i>
            </div>
            <div className="h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center opacity-40 hover:opacity-100 hover:border-white/10 transition-all cursor-pointer">
              <i className="fab fa-cc-visa text-2xl"></i>
            </div>
          </div>
          <button className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-white/10 hover:scale-105 active:scale-95 transition-all">
            <i className="fas fa-credit-card text-indigo-600"></i> Initiate Secure Transaction
          </button>
          <div className="flex justify-center gap-6 text-[8px] font-black text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-1"><i className="fas fa-check text-emerald-500"></i> 100% Secure</span>
            <span className="flex items-center gap-1"><i className="fas fa-rotate text-emerald-500"></i> Refund Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentView;
