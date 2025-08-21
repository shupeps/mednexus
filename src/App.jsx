import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Stethoscope, 
  Heart, 
  Users, 
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import equipeMedica from './assets/equipe-medica.jpeg'
import medicosDiversos from './assets/medicos-diversos.jpg'
import estetoscopio from './assets/estetoscopio.jpg'
import hospitalModerno from './assets/hospital-moderno.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

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
  ]

  const depoimentos = [
    {
      nome: "Dr. Carlos Silva",
      especialidade: "Cardiologista",
      texto: "Encontrei minha vaga ideal em menos de uma semana. A plataforma é muito intuitiva e as oportunidades são de qualidade.",
      rating: 5
    },
    {
      nome: "Dra. Ana Santos",
      especialidade: "Pediatra",
      texto: "Excelente ferramenta para médicos que buscam novas oportunidades. Recomendo para todos os colegas.",
      rating: 5
    },
    {
      nome: "Dr. Roberto Lima",
      especialidade: "Emergencista",
      texto: "Consegui vários plantões através da plataforma. O processo é rápido e eficiente.",
      rating: 4
    }
  ]

  const filteredVagas = vagas.filter(vaga => 
    vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(vaga => 
    selectedLocation === '' || vaga.localizacao.includes(selectedLocation)
  )

  return (
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
              <a href="#vagas" className="text-gray-700 hover:text-blue-600 transition-colors">Vagas</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Entrar</Button>
              <Button>Cadastrar</Button>
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
                <a href="#vagas" className="text-gray-700 hover:text-blue-600 transition-colors">Vagas</a>
                <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" className="justify-start">Entrar</Button>
                  <Button className="justify-start">Cadastrar</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Encontre a vaga médica
                <span className="text-blue-600"> ideal</span> para você
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Conectamos médicos talentosos com as melhores oportunidades em hospitais e clínicas de todo o Brasil.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Buscar Vagas
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Sou Estabelecimento
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={equipeMedica} 
                alt="Equipe médica profissional" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+1.200</p>
                    <p className="text-sm text-gray-600">Médicos cadastrados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white" id="vagas">
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
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Processo simples em 3 passos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Cadastre-se</h3>
              <p className="text-gray-600">
                Crie seu perfil profissional com suas especialidades e experiências
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Busque vagas</h3>
              <p className="text-gray-600">
                Use nossos filtros para encontrar oportunidades que combinam com seu perfil
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Candidate-se</h3>
              <p className="text-gray-600">
                Aplique para as vagas de interesse e conecte-se diretamente com os empregadores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              O que dizem nossos médicos
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Depoimentos de profissionais que encontraram suas vagas ideais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < depoimento.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{depoimento.texto}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{depoimento.nome}</p>
                    <p className="text-sm text-gray-500">{depoimento.especialidade}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para encontrar sua próxima oportunidade?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a mais de 1.200 médicos que já encontraram suas vagas ideais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Cadastrar como Médico
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Sou Estabelecimento
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contato">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MedNexus</span>
              </div>
              <p className="text-gray-400">
                Conectando médicos com as melhores oportunidades do mercado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Para Médicos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Buscar Vagas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Criar Perfil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dicas de Carreira</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Para Estabelecimentos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Publicar Vaga</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buscar Médicos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Planos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@medjobs.com.br</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedJobs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

