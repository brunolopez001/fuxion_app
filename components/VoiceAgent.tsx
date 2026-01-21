import React, { useEffect, useState, useRef } from 'react';
import { Mic, X, Volume2, MicOff, Activity } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('Hola, soy tu asistente de voz de FuXion. ¿En qué puedo ayudarte hoy?');
  const [history, setHistory] = useState<Message[]>([]);

  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'es-ES';

      recognitionRef.current.onstart = () => setStatus('listening');
      recognitionRef.current.onend = () => {
        if (status === 'listening') setStatus('idle');
      };

      recognitionRef.current.onresult = async (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        setStatus('processing');
        await handleVoiceInput(text);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setStatus('idle');
        setResponse('No te escuché bien. Por favor intenta de nuevo.');
      };
    }
  }, []);

  const speak = (text: string) => {
    if (synthesisRef.current) {
        // Cancel previous speech
      synthesisRef.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.pitch = 1;
      utterance.rate = 1.1;
      
      utterance.onstart = () => setStatus('speaking');
      utterance.onend = () => setStatus('idle');

      synthesisRef.current.speak(utterance);
    }
  };

  const handleVoiceInput = async (input: string) => {
    // Add to history
    const newHistory = [...history, { id: Date.now().toString(), role: 'user' as const, text: input, timestamp: new Date() }];
    setHistory(newHistory);

    // Call Gemini
    const aiResponse = await sendMessageToGemini(newHistory, input);
    
    // Clean markdown for speech
    const cleanResponse = aiResponse.replace(/\*/g, '').replace(/#/g, '');
    
    setResponse(cleanResponse);
    setHistory([...newHistory, { id: Date.now().toString(), role: 'model', text: aiResponse, timestamp: new Date() }]);
    
    speak(cleanResponse);
  };

  const toggleListening = () => {
    if (status === 'listening') {
      recognitionRef.current?.stop();
      setStatus('idle');
    } else {
        // If speaking, stop speaking first
      if (status === 'speaking') {
          synthesisRef.current.cancel();
      }
      recognitionRef.current?.start();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <button 
          onClick={() => {
              synthesisRef.current.cancel();
              onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X size={24} />
        </button>

        <div className="pt-10 pb-6 px-8 flex flex-col items-center text-center">
            
            {/* Visualizer Circle */}
          <div className="relative mb-8">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
              status === 'listening' ? 'bg-red-50' : 
              status === 'speaking' ? 'bg-green-50' : 'bg-blue-50'
            }`}>
              {status === 'listening' && <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse-ring"></div>}
              {status === 'speaking' && <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-pulse-ring"></div>}
              
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-colors duration-300 ${
                status === 'listening' ? 'bg-red-500 shadow-red-200' : 
                status === 'speaking' ? 'bg-green-500 shadow-green-200' : 'bg-fuxion-primary shadow-blue-200'
              } shadow-lg`}>
                {status === 'listening' ? <Mic size={40} /> : 
                 status === 'speaking' ? <Volume2 size={40} /> : 
                 status === 'processing' ? <Activity size={40} className="animate-spin" /> :
                 <MicOff size={40} /> }
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {status === 'listening' ? 'Escuchando...' : 
             status === 'processing' ? 'Pensando...' : 
             status === 'speaking' ? 'Hablando...' : 'Agente de Voz'}
          </h3>

          <p className="text-gray-500 text-sm h-16 overflow-y-auto w-full mb-6 italic">
            {status === 'listening' ? transcript : response}
          </p>

          <button
            onClick={toggleListening}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
              status === 'listening' 
                ? 'bg-red-100 text-red-600 border border-red-200 hover:bg-red-200' 
                : 'bg-fuxion-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
            }`}
          >
            {status === 'listening' ? 'Detener' : 'Presiona para Hablar'}
          </button>
          
          <p className="mt-4 text-xs text-gray-400">
             Potenciado por Gemini AI. Asegúrate de tener el micrófono habilitado.
          </p>
        </div>
      </div>
    </div>
  );
};
