import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { useNavigate } from 'react-router-dom';

const PublicarVagaPage = () => {
  const [titulo, setTitulo] = useState('');
  const [hospital, setHospital] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [salario, setSalario] = useState('');
  const [tipo, setTipo] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [telefoneContato, setTelefoneContato] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser || currentUser.userType !== 'instituicao') {
      alert('Você precisa estar logado como instituição para publicar vagas.');
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaVaga = {
      id: Date.now(), // ID único para a vaga
      titulo,
      hospital,
      localizacao,
      salario,
      tipo,
      especialidade,
      descricao,
      emailContato,
      telefoneContato,
      urgente: false // Novas vagas não são urgentes por padrão
    };

    // Recupera vagas existentes do localStorage ou inicializa um array vazio
    const vagasExistentes = JSON.parse(localStorage.getItem('vagasMedNexus')) || [];
    // Adiciona a nova vaga
    const vagasAtualizadas = [...vagasExistentes, novaVaga];
    // Salva as vagas atualizadas no localStorage
    localStorage.setItem('vagasMedNexus', JSON.stringify(vagasAtualizadas));

    alert('Vaga publicada com sucesso! Ela aparecerá na página de vagas.');

    // Resetar formulário
    setTitulo('');
    setHospital('');
    setLocalizacao('');
    setSalario('');
    setTipo('');
    setEspecialidade('');
    setDescricao('');
    setEmailContato('');
    setTelefoneContato('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Publicar Nova Vaga
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Preencha os detalhes da vaga para encontrar o médico ideal
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Detalhes da Vaga</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="titulo">Título da Vaga</Label>
                <Input
                  id="titulo"
                  type="text"
                  placeholder="Ex: Médico Plantonista UTI"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="hospital">Hospital/Clínica</Label>
                <Input
                  id="hospital"
                  type="text"
                  placeholder="Ex: Hospital São Lucas"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="localizacao">Localização</Label>
                <Input
                  id="localizacao"
                  type="text"
                  placeholder="Ex: São Paulo, SP"
                  value={localizacao}
                  onChange={(e) => setLocalizacao(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="salario">Salário (Estimado)</Label>
                <Input
                  id="salario"
                  type="text"
                  placeholder="Ex: R$ 8.000 - R$ 12.000"
                  value={salario}
                  onChange={(e) => setSalario(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="tipo">Tipo de Contrato</Label>
                <select
                  id="tipo"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="CLT">CLT</option>
                  <option value="Plantão">Plantão</option>
                  <option value="PJ">PJ</option>
                  <option value="Temporário">Temporário</option>
                </select>
              </div>
              <div>
                <Label htmlFor="especialidade">Especialidade</Label>
                <Input
                  id="especialidade"
                  type="text"
                  placeholder="Ex: Cardiologia, Pediatria"
                  value={especialidade}
                  onChange={(e) => setEspecialidade(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="descricao">Descrição da Vaga</Label>
                <Textarea
                  id="descricao"
                  placeholder="Descreva as responsabilidades e requisitos da vaga..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <div>
                <Label htmlFor="emailContato">E-mail para Contato</Label>
                <Input
                  id="emailContato"
                  type="email"
                  placeholder="contato@hospital.com"
                  value={emailContato}
                  onChange={(e) => setEmailContato(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="telefoneContato">Telefone para Contato</Label>
                <Input
                  id="telefoneContato"
                  type="tel"
                  placeholder="(XX) XXXX-XXXX"
                  value={telefoneContato}
                  onChange={(e) => setTelefoneContato(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Publicar Vaga
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PublicarVagaPage;


