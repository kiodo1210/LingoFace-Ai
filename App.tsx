
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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 pb-20 md:pb-0">
      <main className="flex-1 overflow-auto">
        {renderView()}
      </main>

      {/* Persistent Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 px-6 py-3 flex justify-between items-center z-50 md:top-0 md:bottom-auto md:border-b md:border-t-0 md:bg-slate-900/90">
        <div className="hidden md:flex items-center gap-2 mr-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-face-smile text-white"></i>
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">LingoFace</span>
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
    className={`flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'text-indigo-400 scale-110' : 'text-slate-500 hover:text-slate-300'}`}
  >
    <i className={`fas ${icon} text-lg`}></i>
    <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
    {active && <div className="w-1 h-1 bg-indigo-400 rounded-full mt-1"></div>}
  </button>
);

export default App;
