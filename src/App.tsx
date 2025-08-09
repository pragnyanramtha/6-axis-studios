import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProcessPage } from './components/pages/ProcessPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ContactPage } from './components/pages/ContactPage';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'About':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'Process':
        return <ProcessPage onPageChange={setCurrentPage} />;
      case 'Services':
        return <ServicesPage onPageChange={setCurrentPage} />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Chatbot />
    </div>
  );
}