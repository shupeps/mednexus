import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';

function PublicarVagaPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Publicar Nova Vaga</CardTitle>
          <CardDescription>Preencha os detalhes da vaga para médicos</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="titulo">Título da Vaga</Label>
              <Input id="titulo" type="text" placeholder="Ex: Médico Plantonista UTI" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hospital">Nome do Hospital/Clínica</Label>
              <Input id="hospital" type="text" placeholder="Ex: Hospital São Lucas" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="localizacao">Localização</Label>
              <Input id="localizacao" type="text" placeholder="Ex: São Paulo, SP" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="salario">Salário/Remuneração</Label>
              <Input id="salario" type="text" placeholder="Ex: R$ 8.000 - R$ 12.000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tipo">Tipo de Contrato/Jornada</Label>
              <Input id="tipo" type="text" placeholder="Ex: CLT, Plantão 12h, PJ" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="especialidade">Especialidade Requerida</Label>
              <Input id="especialidade" type="text" placeholder="Ex: Cardiologia, Pediatria" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="descricao">Descrição da Vaga</Label>
              <Textarea id="descricao" placeholder="Descreva as responsabilidades e requisitos da vaga..." rows="5" />
            </div>
            <Button type="submit" className="w-full">Publicar Vaga</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default PublicarVagaPage;


