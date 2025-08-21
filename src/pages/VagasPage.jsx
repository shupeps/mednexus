import React, { useState, useEffect } from 'react';
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
import { supabase } from '../supabaseClient';

function VagasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVagas = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('vagas')
        .select('*');

      if (error) {
        setError(error.message);
        setVagas([]);
      } else {
        setVagas(data);
      }
      setLoading(false);
    };

    fetchVagas();
  }, []);

  const filteredVagas = vagas.filter(vaga => 
    (vaga.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.especialidade?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.hospital?.toLowerCase().includes(searchTerm.toLowerCase()))
  ).filter(vaga => 
    selectedLocation === '' || vaga.localizacao?.includes(selectedLocation)
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16">
        <p className="text-gray-600 text-lg">Carregando vagas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16">
        <p className="text-red-500 text-lg">Erro ao carregar vagas: {error}</p>
      </div>
    );
  }

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
          {filteredVagas.length > 0 ? (
            filteredVagas.map((vaga) => (
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
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <p className="text-gray-500 text-lg">Nenhuma vaga encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VagasPage;


