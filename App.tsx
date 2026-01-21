import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Booking } from './pages/Booking';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} onOpenVoice={() => setIsVoiceOpen(true)} />;
      case Page.PRODUCTS:
        return <Products onNavigate={setCurrentPage} />;
      case Page.BOOKING:
        return <Booking />;
      case Page.CONTACT:
        return <Booking />;
      default:
        return <Home onNavigate={setCurrentPage} onOpenVoice={() => setIsVoiceOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      <Chatbot isVoiceOpen={isVoiceOpen} onToggleVoice={setIsVoiceOpen} />
    </div>
  );
}

export default App;