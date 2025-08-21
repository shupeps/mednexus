import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Stethoscope,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog.jsx';
import { useNavigate } from 'react-router-dom';

const vagasIniciais = [
  {
    id: 1,
    titulo: "Médico Plantonista - UTI",
    hospital: "Hospital São Lucas",
    localizacao: "São Paulo, SP",
    salario: "R$ 8.000 - R$ 12.000",
    tipo: "Plantão 24h",
    especialidade: "UTI",
    urgente: true,
    descricao: "Atuar na unidade de terapia intensiva, acompanhando pacientes críticos e realizando procedimentos.",
    emailContato: "uti.saolucas@email.com",
    telefoneContato: "(11) 98765-4321"
  },
  {
    id: 2,
    titulo: "Cardiologista",
    hospital: "Clínica CardioVida",
    localizacao: "Rio de Janeiro, RJ",
    salario: "R$ 15.000 - R$ 20.000",
    tipo: "CLT",
    especialidade: "Cardiologia",
    urgente: false,
    descricao: "Realizar consultas, exames cardiológicos e acompanhamento de pacientes com doenças do coração.",
    emailContato: "contato@cardiovida.com.br",
    telefoneContato: "(21) 99876-5432"
  },
  {
    id: 3,
    titulo: "Médico Emergencista",
    hospital: "Hospital Municipal",
    localizacao: "Belo Horizonte, MG",
    salario: "R$ 6.000 - R$ 9.000",
    tipo: "Plantão 12h",
    especialidade: "Emergência",
    urgente: true,
    descricao: "Atendimento a pacientes em situações de emergência e urgência, com foco em estabilização e diagnóstico rápido.",
    emailContato: "emergencia.hm@email.com",
    telefoneContato: "(31) 98765-1234"
  },
  {
    id: 4,
    titulo: "Pediatra",
    hospital: "Hospital Infantil",
    localizacao: "Brasília, DF",
    salario: "R$ 10.000 - R$ 14.000",
    tipo: "CLT",
    especialidade: "Pediatria",
    urgente: false,
    descricao: "Acompanhamento do desenvolvimento infantil, consultas de rotina e atendimento a doenças pediátricas.",
    emailContato: "pediatria.hi@email.com",
    telefoneContato: "(61) 99123-4567"
  },
  {
    id: 5,
    titulo: "Anestesiologista",
    hospital: "Centro Cirúrgico Avançado",
    localizacao: "Porto Alegre, RS",
    salario: "R$ 18.000 - R$ 25.000",
    tipo: "Plantão",
    especialidade: "Anestesiologia",
    urgente: true,
    descricao: "Responsável pela aplicação de anestesia em procedimentos cirúrgicos e monitoramento do paciente.",
    emailContato: "anestesia.cca@email.com",
    telefoneContato: "(51) 98765-9876"
  },
  {
    id: 6,
    titulo: "Médico do Trabalho",
    hospital: "Empresa Industrial",
    localizacao: "Curitiba, PR",
    salario: "R$ 12.000 - R$ 16.000",
    tipo: "CLT",
    especialidade: "Medicina do Trabalho",
    urgente: false,
    descricao: "Realizar exames admissionais, periódicos e demissionais, além de atuar na prevenção de doenças ocupacionais.",
    emailContato: "saude.ocupacional@email.com",
    telefoneContato: "(41) 99123-9876"
  }
];

const VagasPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [allVagas, setAllVagas] = useState([]);
  const [selectedVaga, setSelectedVaga] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!currentUser || currentUser.userType !== "medico") {
      alert("Você precisa estar logado como médico para ver as vagas.");
      navigate("/login");
    }

    const loadVagas = () => {
      const storedVagas = JSON.parse(localStorage.getItem("vagasMedNexus")) || [];
      setAllVagas([...vagasIniciais, ...storedVagas]);
    };

    loadVagas();
    window.addEventListener("storage", loadVagas);
    return () => {
      window.removeEventListener("storage", loadVagas);
    };
  }, [navigate]);

  const handleViewDetails = (vaga) => {
    setSelectedVaga(vaga);
    setIsModalOpen(true);
  };

  const filteredVagas = allVagas.filter(vaga => 
    vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(vaga => {
    if (selectedLocation === "") return true;
    return vaga.localizacao.includes(selectedLocation);
  });

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Todas as Vagas Médicas
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Encontre a oportunidade perfeita para sua carreira
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
                  <option value="">Todos os Estados</option>
                  {estados.map(estado => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
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
                <Button className="w-full mt-4" variant="outline" onClick={() => handleViewDetails(vaga)}>
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

      {/* Modal de Detalhes da Vaga */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedVaga?.titulo}</DialogTitle>
            <DialogDescription>
              {selectedVaga?.hospital} - {selectedVaga?.localizacao}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Salário: {selectedVaga?.salario}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Tipo: {selectedVaga?.tipo}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Especialidade: {selectedVaga?.especialidade}</span>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Descrição:</h4>
              <p className="text-gray-700">{selectedVaga?.descricao || "Nenhuma descrição disponível."}</p>
            </div>
            {(selectedVaga?.emailContato || selectedVaga?.telefoneContato) && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-semibold mb-2">Contato:</h4>
                {selectedVaga?.emailContato && (
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mail className="w-5 h-5" />
                    <a href={`mailto:${selectedVaga.emailContato}`} className="hover:underline">
                      {selectedVaga.emailContato}
                    </a>
                  </div>
                )}
                {selectedVaga?.telefoneContato && (
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Phone className="w-5 h-5" />
                    <a href={`tel:${selectedVaga.telefoneContato}`} className="hover:underline">
                      {selectedVaga.telefoneContato}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VagasPage;


