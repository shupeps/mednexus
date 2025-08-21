import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Stethoscope, Menu, X } from 'lucide-react';
import HomePage from './pages/Home.jsx';
import VagasPage from './pages/VagasPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CadastroPage from './pages/CadastroPage.jsx';
import PublicarVagaPage from './pages/PublicarVagaPage.jsx';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MedNexus</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                <Link to="/vagas" className="text-gray-700 hover:text-blue-600 transition-colors">Vagas</Link>
                <Link to="/publicar-vaga" className="text-gray-700 hover:text-blue-600 transition-colors">Publicar Vaga</Link>
                <Link to="/cadastro" className="text-gray-700 hover:text-blue-600 transition-colors">Cadastro</Link>
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <Link to="/login"><Button variant="ghost">Entrar</Button></Link>
                <Link to="/cadastro"><Button>Cadastrar</Button></Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t">
                <nav className="flex flex-col space-y-4">
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/vagas" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Vagas</Link>
                  <Link to="/publicar-vaga" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Publicar Vaga</Link>
                  <Link to="/cadastro" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Cadastro</Link>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Link to="/login"><Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>Entrar</Button></Link>
                    <Link to="/cadastro"><Button className="justify-start" onClick={() => setIsMenuOpen(false)}>Cadastrar</Button></Link>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vagas" element={<VagasPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/publicar-vaga" element={<PublicarVagaPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">MedNexus</h3>
                <p className="text-gray-400 text-sm">
                  Conectando médicos às melhores vagas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                <ul className="space-y-2">
                  <li><Link to="/vagas" className="text-gray-400 hover:text-white transition-colors">Vagas</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Como Funciona</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Depoimentos</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p className="text-gray-400 text-sm">Email: mednexusoficial@gmail.com</p>
                <p className="text-gray-400 text-sm">Telefone: (XX) XXXX-XXXX</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
              © 2025 MedNexus. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;


