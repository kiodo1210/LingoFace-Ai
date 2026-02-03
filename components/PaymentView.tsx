
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
    <div className="p-6 pt-24 md:pt-32 max-w-6xl mx-auto animate-fadeIn relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10">
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="text-3xl font-bold">Premium Membership</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {PLANS.map(plan => (
          <div 
            key={plan.id} 
            className={`relative flex flex-col p-8 rounded-3xl glass transition-all duration-500 hover:-translate-y-2 ${plan.isPremium ? 'border-2 border-indigo-500 shadow-[0_20px_50px_rgba(99,102,241,0.2)]' : 'border border-white/10 opacity-70 hover:opacity-100'}`}
          >
            {plan.id === 'pro' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-400 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-slate-500 text-sm">{plan.period}</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map(feat => (
                <li key={feat} className="flex items-start gap-3 text-sm">
                  <i className="fas fa-check-circle text-indigo-400 mt-1"></i>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95 ${plan.isPremium ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
              {plan.id === 'free' ? 'Current Plan' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {/* Payment Methods and Trust */}
      <div className="glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
        <div className="space-y-4 max-w-md">
           <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-xs">
              <i className="fas fa-shield-halved"></i> Secure Checkout
           </div>
           <h2 className="text-2xl font-bold">Trusted by 50,000+ professionals globally.</h2>
           <p className="text-sm text-slate-400">Join top executives from Google, Samsung, and Hyundai who use LingoFace to master their global presence.</p>
        </div>
        
        <div className="w-full max-w-sm space-y-4">
           <div className="grid grid-cols-3 gap-2">
              <div className="h-12 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <i className="fab fa-apple-pay text-2xl"></i>
              </div>
              <div className="h-12 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <i className="fab fa-google-pay text-3xl"></i>
              </div>
              <div className="h-12 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <i className="fab fa-cc-visa text-xl"></i>
              </div>
           </div>
           <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-slate-100 transition-colors">
              <i className="fas fa-credit-card"></i> Pay with Credit Card
           </button>
           <p className="text-[10px] text-center text-slate-500 uppercase">30-day money back guarantee • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentView;
