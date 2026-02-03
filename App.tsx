
import React, { useState } from 'react';
import { ViewState } from './types';
import HomeView from './components/HomeView';
import SessionView from './components/SessionView';
import ExpertiseView from './components/ExpertiseView';
import ProgressView from './components/ProgressView';
import PaymentView from './components/PaymentView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedExpertise, setSelectedExpertise] = useState<string>('General English');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onStartSession={() => setCurrentView('session')} onUpgrade={() => setCurrentView('payment')} />;
      case 'session':
        return <SessionView onEndSession={() => setCurrentView('home')} expertise={selectedExpertise} />;
      case 'expertise':
        return <ExpertiseView onSelect={(exp) => { setSelectedExpertise(exp); setCurrentView('home'); }} onUpgrade={() => setCurrentView('payment')} />;
      case 'progress':
        return <ProgressView />;
      case 'payment':
        return <PaymentView onBack={() => setCurrentView('home')} />;
      default:
        return <HomeView onStartSession={() => setCurrentView('session')} onUpgrade={() => setCurrentView('payment')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-slate-100 pb-20 md:pb-0 relative">
      <div className="mesh-background"></div>
      
      <main className="flex-1 overflow-auto z-10">
        {renderView()}
      </main>

      {/* Persistent Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 px-6 py-4 flex justify-between items-center z-50 md:top-0 md:bottom-auto md:border-b md:border-t-0 md:bg-slate-900/80 md:backdrop-blur-xl">
        <div className="hidden md:flex items-center gap-3 mr-8 cursor-pointer group" onClick={() => setCurrentView('home')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                <i className="fas fa-face-smile text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-400">LINGOFACE</span>
              <span className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] -mt-1 uppercase">AI Native Tutoring</span>
            </div>
        </div>
        
        <div className="flex flex-1 justify-around max-w-lg mx-auto md:justify-end md:gap-8 md:mx-0">
          <NavItem 
            icon="fa-house" 
            label="Home" 
            active={currentView === 'home'} 
            onClick={() => setCurrentView('home')} 
          />
          <NavItem 
            icon="fa-briefcase" 
            label="Expertise" 
            active={currentView === 'expertise'} 
            onClick={() => setCurrentView('expertise')} 
          />
          <NavItem 
            icon="fa-chart-line" 
            label="Progress" 
            active={currentView === 'progress'} 
            onClick={() => setCurrentView('progress')} 
          />
          <NavItem 
            icon="fa-crown" 
            label="Premium" 
            active={currentView === 'payment'} 
            onClick={() => setCurrentView('payment')} 
          />
        </div>
      </nav>
    </div>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 transition-all duration-500 group relative ${active ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'}`}
  >
    <div className={`p-2 rounded-xl transition-all duration-500 ${active ? 'bg-indigo-500/10' : 'group-hover:bg-white/5'}`}>
      <i className={`fas ${icon} text-xl transition-transform duration-500 ${active ? 'scale-110 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]' : 'group-hover:scale-110'}`}></i>
    </div>
    <span className="text-[9px] font-bold uppercase tracking-[0.15em]">{label}</span>
    {active && (
      <div className="absolute -bottom-1 w-12 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"></div>
    )}
  </button>
);

export default App;
