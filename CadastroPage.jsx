import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Link, useNavigate } from 'react-router-dom';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [userType, setUserType] = useState(''); // 'medico' ou 'instituicao'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    if (!userType) {
      alert('Por favor, selecione o tipo de usuário (Médico ou Instituição).');
      return;
    }

    // Simulação de registro
    // Em um cenário real, você faria uma chamada a uma API aqui para registrar o usuário
    // E armazenaria o usuário em um banco de dados
    const newUser = { nome, email, userType };
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));

    alert(`Cadastro realizado com sucesso como ${userType}!`);
    navigate('/'); // Redireciona para a página inicial após o cadastro
    window.location.reload(); // Recarrega a página para atualizar o estado de login
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Cadastre-se no MedNexus
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Crie sua conta e encontre as melhores vagas médicas
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Criar Nova Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
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
              <div>
                <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                <Input
                  id="confirmarSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="userType">Você é:</Label>
                <select
                  id="userType"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="medico">Médico</option>
                  <option value="instituicao">Instituição</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Cadastrar
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Já tem uma conta? <Link to="/login" className="text-blue-600 hover:underline">Entrar</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CadastroPage;


