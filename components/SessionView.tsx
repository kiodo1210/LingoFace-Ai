
import React, { useState, useEffect, useRef } from 'react';
import { getTutorCoaching } from '../services/geminiService';
import { CoachingFeedback } from '../types';

interface SessionViewProps {
  onEndSession: () => void;
  expertise: string;
}

const SessionView: React.FC<SessionViewProps> = ({ onEndSession, expertise }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<CoachingFeedback | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate camera activation
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch(err => console.error("Camera access denied", err));
    }
  }, []);

  const handleSendInput = async () => {
    if (!userInput.trim()) return;
    setIsLoading(true);
    const result = await getTutorCoaching(userInput, expertise);
    if (result) {
      setFeedback(result);
    }
    setIsLoading(false);
    setUserInput("");
  };

  return (
    <div className="fixed inset-0 bg-black z-[60] flex flex-col md:flex-row overflow-hidden">
      {/* Main Video Stage (Tutor) */}
      <div className="relative flex-1 bg-slate-900 overflow-hidden">
        {/* Tutor Real Image (Simulated Video) */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600" 
            alt="Tutor" 
            className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        {/* Top Indicators */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
             <span className="text-xs font-bold tracking-widest uppercase">Live Session: {expertise}</span>
          </div>
          <div className="flex gap-2">
            <button className="glass p-3 rounded-full pointer-events-auto hover:bg-white/20 transition-colors">
               <i className="fas fa-gear"></i>
            </button>
          </div>
        </div>

        {/* User Mini Video */}
        <div className="absolute bottom-24 right-6 w-32 h-48 md:w-48 md:h-64 rounded-2xl overflow-hidden glass border-2 border-white/20 shadow-2xl">
          <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover grayscale-[30%]" />
          <div className="absolute bottom-2 left-2 flex items-center gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
             <span className="text-[10px] font-bold">You</span>
          </div>
        </div>

        {/* Live Subtitles / AI Reaction */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 pointer-events-none">
          {feedback && (
            <div className="glass p-4 rounded-2xl animate-slideUp text-center space-y-2 border-l-4 border-indigo-500">
               <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Emotion Sync</p>
               <p className="text-lg font-medium">"{feedback.emotionSync}"</p>
            </div>
          )}
        </div>

        {/* Control Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 shadow-2xl">
          <button className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center text-slate-300">
             <i className="fas fa-video"></i>
          </button>
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all ${isRecording ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] scale-110' : 'bg-white text-slate-900'}`}
          >
             <i className={`fas ${isRecording ? 'fa-microphone-slash' : 'fa-microphone'}`}></i>
          </button>
          <button onClick={onEndSession} className="w-12 h-12 rounded-full bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white transition-all flex items-center justify-center">
             <i className="fas fa-phone-slash"></i>
          </button>
        </div>
      </div>

      {/* Side Panel (Coaching & Input) */}
      <div className="w-full md:w-[400px] glass border-l border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <i className="fas fa-wand-magic-sparkles text-indigo-400"></i>
            Pinpoint Coaching
          </h2>
          <p className="text-xs text-slate-400">Real-time corrections and feedback</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!feedback && !isLoading && (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
               <i className="fas fa-comment-dots text-4xl"></i>
               <p className="text-sm">Speak or type something to start receiving coaching feedback.</p>
            </div>
          )}

          {isLoading && (
            <div className="space-y-4 animate-pulse">
               <div className="h-24 bg-slate-800 rounded-xl"></div>
               <div className="h-32 bg-slate-800 rounded-xl"></div>
            </div>
          )}

          {feedback && (
            <div className="animate-fadeIn space-y-6">
              {/* Nuance Filter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase">
                  <i className="fas fa-filter"></i> Nuance Filter
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl space-y-2 border border-white/5">
                  <p className="text-slate-500 text-xs line-through italic">"{feedback.original}"</p>
                  <p className="text-green-400 font-medium">"{feedback.correction}"</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{feedback.explanation}</p>
                </div>
              </div>

              {/* Coaching Point */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase">
                  <i className="fas fa-bullseye"></i> Pinpoint Tip
                </div>
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <p className="text-sm italic">"{feedback.coachingPoint}"</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 bg-slate-800 rounded-lg text-[10px] font-bold uppercase hover:bg-slate-700">Add to Quiz</button>
                <button className="py-2 bg-slate-800 rounded-lg text-[10px] font-bold uppercase hover:bg-slate-700">Save Phrase</button>
              </div>
            </div>
          )}
        </div>

        {/* Manual Input (Mock for Microphone) */}
        <div className="p-6 border-t border-white/10 space-y-4">
           <div className="relative">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendInput()}
                placeholder="Type what you want to say..." 
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
              />
              <button 
                onClick={handleSendInput}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-xs hover:bg-indigo-700 disabled:opacity-50"
              >
                <i className="fas fa-arrow-up"></i>
              </button>
           </div>
           <p className="text-[10px] text-center text-slate-500 uppercase tracking-tighter">Enter to send or use microphone for voice-to-coaching</p>
        </div>
      </div>
    </div>
  );
};

export default SessionView;
