import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de autenticação
    // Em um cenário real, você faria uma chamada a uma API aqui
    if (email === 'medico@teste.com' && senha === '123' || email === 'instituicao@teste.com' && senha === '123') {
      const userType = email.includes('medico') ? 'medico' : 'instituicao';
      sessionStorage.setItem('currentUser', JSON.stringify({ email, userType }));
      alert('Login realizado com sucesso!');
      navigate('/'); // Redireciona para a página inicial após o login
      window.location.reload(); // Recarrega a página para atualizar o estado de login
    } else {
      alert('E-mail ou senha incorretos.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Entrar no MedNexus
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Acesse sua conta para buscar ou publicar vagas
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Fazer Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Entrar
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Não tem uma conta? <Link to="/cadastro" className="text-blue-600 hover:underline">Cadastre-se</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;


