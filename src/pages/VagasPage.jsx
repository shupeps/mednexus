import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
} from 'lucide-react';

function VagasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const vagas = [
    {
      id: 1,
      titulo: "Médico Plantonista - UTI",
      hospital: "Hospital São Lucas",
      localizacao: "São Paulo, SP",
      salario: "R$ 8.000 - R$ 12.000",
      tipo: "Plantão 24h",
      especialidade: "UTI",
      urgente: true
    },
    {
      id: 2,
      titulo: "Cardiologista",
      hospital: "Clínica CardioVida",
      localizacao: "Rio de Janeiro, RJ",
      salario: "R$ 15.000 - R$ 20.000",
      tipo: "CLT",
      especialidade: "Cardiologia",
      urgente: false
    },
    {
      id: 3,
      titulo: "Médico Emergencista",
      hospital: "Hospital Municipal",
      localizacao: "Belo Horizonte, MG",
      salario: "R$ 6.000 - R$ 9.000",
      tipo: "Plantão 12h",
      especialidade: "Emergência",
      urgente: true
    },
    {
      id: 4,
      titulo: "Pediatra",
      hospital: "Hospital Infantil",
      localizacao: "Brasília, DF",
      salario: "R$ 10.000 - R$ 14.000",
      tipo: "CLT",
      especialidade: "Pediatria",
      urgente: false
    },
    {
      id: 5,
      titulo: "Anestesiologista",
      hospital: "Centro Cirúrgico Avançado",
      localizacao: "Porto Alegre, RS",
      salario: "R$ 18.000 - R$ 25.000",
      tipo: "Plantão",
      especialidade: "Anestesiologia",
      urgente: true
    },
    {
      id: 6,
      titulo: "Médico do Trabalho",
      hospital: "Empresa Industrial",
      localizacao: "Curitiba, PR",
      salario: "R$ 12.000 - R$ 16.000",
      tipo: "CLT",
      especialidade: "Medicina do Trabalho",
      urgente: false
    }
  ];

  const filteredVagas = vagas.filter(vaga => 
    vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(vaga => 
    selectedLocation === '' || vaga.localizacao.includes(selectedLocation)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Busque por vagas
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Use os filtros para encontrar a oportunidade perfeita
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Especialidade, hospital ou cargo..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Todas as cidades</option>
                  <option value="São Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Belo Horizonte">Belo Horizonte</option>
                  <option value="Brasília">Brasília</option>
                  <option value="Porto Alegre">Porto Alegre</option>
                  <option value="Curitiba">Curitiba</option>
                </select>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVagas.map((vaga) => (
            <Card key={vaga.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{vaga.titulo}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {vaga.hospital}
                    </CardDescription>
                  </div>
                  {vaga.urgente && (
                    <Badge variant="destructive" className="text-xs">
                      Urgente
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vaga.localizacao}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vaga.salario}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vaga.tipo}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary">{vaga.especialidade}</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVagas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhuma vaga encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VagasPage;


