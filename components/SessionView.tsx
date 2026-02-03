
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
      <div className="relative flex-1 bg-[#020617] overflow-hidden group">
        {/* HUD Overlay Elements */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-indigo-500/30 m-6 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-indigo-500/30 m-6 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-indigo-500/30 m-6 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-indigo-500/30 m-6 rounded-br-3xl"></div>

          {/* Scanning Line */}
          <div className="absolute inset-x-0 h-[1px] bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-scan"></div>
        </div>

        {/* Tutor Real Image (Simulated Video) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600"
            alt="Tutor"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
          <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay"></div>
        </div>

        {/* Top Indicators */}
        <div className="absolute top-10 left-10 right-10 flex justify-between items-start z-30 pointer-events-none">
          <div className="flex flex-col gap-2">
            <div className="glass px-5 py-2.5 rounded-2xl flex items-center gap-3 border-indigo-500/30">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">NEURAL LINK ACTIVE</span>
            </div>
            <div className="px-5 text-indigo-400/80 text-[9px] font-black uppercase tracking-[0.3em]">{expertise} MODULE</div>
          </div>
          <div className="flex gap-3">
            <button className="glass w-12 h-12 rounded-2xl pointer-events-auto hover:bg-white/10 transition-all border-white/5 flex items-center justify-center">
              <i className="fas fa-expand text-slate-300"></i>
            </button>
          </div>
        </div>

        {/* User Mini Video */}
        <div className="absolute bottom-10 left-10 w-40 h-56 md:w-56 md:h-72 rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl z-30 group/user">
          <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover/user:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-white">SUBJECT: YOU</span>
          </div>
        </div>

        {/* Live Subtitles / AI Reaction */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 pointer-events-none z-30">
          {feedback && (
            <div className="glass p-6 rounded-[2rem] animate-slideUp text-center space-y-3 border-b-4 border-indigo-500 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-center gap-2 text-indigo-400 text-[9px] font-black uppercase tracking-[0.3em]">
                <i className="fas fa-brain animate-pulse"></i> Emotion Sync Result
              </div>
              <p className="text-xl font-black italic tracking-tight text-white">"{feedback.emotionSync}"</p>
            </div>
          )}
        </div>

        {/* Control Bar */}
        <div className="absolute bottom-10 right-10 flex flex-col md:flex-row items-center gap-4 z-40">
          <div className="flex items-center gap-4 bg-slate-900/40 backdrop-blur-3xl px-6 py-4 rounded-[2rem] border border-white/10 shadow-2xl">
            <button className="w-12 h-12 rounded-2xl glass hover:bg-white/10 flex items-center justify-center text-slate-300 transition-all">
              <i className="fas fa-video-slash"></i>
            </button>
            <div className="w-[1px] h-8 bg-white/10 mx-2"></div>
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-2xl transition-all duration-500 ${isRecording ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)] scale-110' : 'bg-white text-slate-950 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'}`}
            >
              <i className={`fas ${isRecording ? 'fa-stop' : 'fa-microphone'}`}></i>
            </button>
            <div className="w-[1px] h-8 bg-white/10 mx-2"></div>
            <button onClick={onEndSession} className="w-14 h-14 rounded-2xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all flex items-center justify-center border border-red-500/20">
              <i className="fas fa-phone-slash text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Side Panel (Coaching & Input) */}
      <div className="w-full md:w-[450px] glass border-l border-white/10 flex flex-col z-50 overflow-hidden">
        <div className="p-8 border-b border-white/10 bg-white/5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
              <i className="fas fa-wand-magic-sparkles text-indigo-400 animate-pulse"></i>
              Cognitive Feed
            </h2>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <i className="fas fa-database text-indigo-500 text-xs"></i>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Neural processing engine v2.4</p>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {!feedback && !isLoading && (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 space-y-6">
              <div className="w-20 h-20 rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center">
                <i className="fas fa-comment-dots text-4xl"></i>
              </div>
              <p className="text-sm font-medium leading-relaxed">System standby.<br />Initiate vocal input for cognitive mapping.</p>
            </div>
          )}

          {isLoading && (
            <div className="space-y-6 animate-pulse">
              <div className="h-32 bg-white/5 rounded-3xl border border-white/5"></div>
              <div className="h-40 bg-white/5 rounded-3xl border border-white/5"></div>
            </div>
          )}

          {feedback && (
            <div className="animate-fadeIn space-y-8">
              {/* Nuance Filter */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  Correction Matrix
                </div>
                <div className="p-6 bg-slate-900/50 rounded-3xl space-y-4 border border-white/10 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <i className="fas fa-check-circle text-6xl"></i>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-500 text-xs line-through italic font-medium opacity-60">"{feedback.original}"</p>
                    <p className="text-indigo-300 text-lg font-black tracking-tight">"{feedback.correction}"</p>
                  </div>
                  <div className="h-[1px] w-full bg-white/5"></div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{feedback.explanation}</p>
                </div>
              </div>

              {/* Coaching Point */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-black uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  Neural Optimization
                </div>
                <div className="p-6 bg-purple-500/5 rounded-3xl border border-purple-500/20 shadow-lg relative overflow-hidden">
                  <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
                  <p className="text-sm italic font-medium text-purple-100 leading-relaxed relative z-10">"{feedback.coachingPoint}"</p>
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
