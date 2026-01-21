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

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.PRODUCTS:
        return <Products onNavigate={setCurrentPage} />;
      case Page.BOOKING:
        return <Booking />;
      case Page.CONTACT:
        // Reusing Booking for Contact for this demo, or scroll to footer
        return <Booking />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;