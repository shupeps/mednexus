import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function PublicarVagaPage() {
  const [titulo, setTitulo] = useState('');
  const [hospital, setHospital] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [salario, setSalario] = useState('');
  const [tipo, setTipo] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError('Você precisa estar logado para publicar uma vaga.');
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('vagas')
      .insert([
        {
          titulo,
          hospital,
          localizacao,
          salario,
          tipo,
          especialidade,
          descricao,
          user_id: user.id, // Associate the job with the logged-in user
          urgente: false, // Default to false, as discussed
        },
      ]);

    if (error) {
      setError(error.message);
    } else {
      alert('Vaga publicada com sucesso!');
      setTitulo('');
      setHospital('');
      setLocalizacao('');
      setSalario('');
      setTipo('');
      setEspecialidade('');
      setDescricao('');
      navigate('/vagas'); // Redirect to vagas page after successful submission
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Publicar Nova Vaga</CardTitle>
          <CardDescription>Preencha os detalhes da vaga para médicos</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="titulo">Título da Vaga</Label>
              <Input
                id="titulo"
                type="text"
                placeholder="Ex: Médico Plantonista UTI"
                required
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hospital">Nome do Hospital/Clínica</Label>
              <Input
                id="hospital"
                type="text"
                placeholder="Ex: Hospital São Lucas"
                required
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="localizacao">Localização</Label>
              <Input
                id="localizacao"
                type="text"
                placeholder="Ex: São Paulo, SP"
                required
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="salario">Salário/Remuneração</Label>
              <Input
                id="salario"
                type="text"
                placeholder="Ex: R$ 8.000 - R$ 12.000"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tipo">Tipo de Contrato/Jornada</Label>
              <Input
                id="tipo"
                type="text"
                placeholder="Ex: CLT, Plantão 12h, PJ"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="especialidade">Especialidade Requerida</Label>
              <Input
                id="especialidade"
                type="text"
                placeholder="Ex: Cardiologia, Pediatria"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="descricao">Descrição da Vaga</Label>
              <Textarea
                id="descricao"
                placeholder="Descreva as responsabilidades e requisitos da vaga..."
                rows="5"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Publicando...' : 'Publicar Vaga'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default PublicarVagaPage;


