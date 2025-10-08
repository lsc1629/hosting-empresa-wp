import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import './i18n/config'
import { initializeHostingGlobalOptimizations } from './utils/hostingGlobalOptimizations'

// 🚀 Inicialización de optimizaciones globales de hosting
const initializeApp = async () => {
  try {
    console.log('🌍 Initializing Hosting Global Optimizations...');
    await initializeHostingGlobalOptimizations();
    console.log('✅ All hosting systems initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize hosting systems:', error);
  }
};

// Inicializar sistemas antes de renderizar la app
initializeApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
