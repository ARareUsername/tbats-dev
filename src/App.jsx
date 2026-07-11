import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientTimeline from './components/ClientTimeline';
import InteractiveEstimator from './components/InteractiveEstimator';
import Testimonials from './components/Testimonials';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Header />
        <Hero />
        <ClientTimeline />
        <InteractiveEstimator />
        <Testimonials />
        <ConsultationForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
