import React, { useState } from 'react';
import {
  Sun,
  Battery,
  Home,
  TrendingUp,
  ClipboardCheck,
  Wrench,
  MonitorCheck,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

function App() {
  const [monthlyBill, setMonthlyBill] = useState<string>('');
  const [savings, setSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill);
    if (!isNaN(bill)) {
      setSavings(bill * 0.95 * 12); // 95% savings annually
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-2xl font-bold text-white">Cinética Solar</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#benefits" className="text-white hover:text-yellow-400">Benefícios</a>
              <a href="#how-it-works" className="text-white hover:text-yellow-400">Como Funciona</a>
              <a href="#testimonials" className="text-white hover:text-yellow-400">Depoimentos</a>
              <a href="#contact" className="text-white hover:text-yellow-400">Contato</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Energia Solar Inteligente para sua Casa e Empresa
            </h1>
            <p className="text-xl text-white mb-8">
              Economize até 95% na sua conta de luz com energia limpa e renovável.
            </p>
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition duration-300"
            >
              Solicite um Orçamento Grátis
            </a>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Benefícios da Energia Solar</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Economia na Conta</h3>
              <p>Reduza drasticamente seus gastos com energia elétrica</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
              <p>Contribua para um futuro mais limpo e sustentável</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Valorização</h3>
              <p>Aumente o valor do seu imóvel</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Independência</h3>
              <p>Tenha autonomia energética</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Como Funciona?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Orçamento</h3>
              <p>Análise técnica personalizada</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Projeto</h3>
              <p>Desenvolvimento e aprovação</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonitorCheck className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Instalação</h3>
              <p>Montagem e monitoramento</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Economia</h3>
              <p>Aproveite os benefícios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Calculadora de Economia
          </h2>
          <p className="text-center text-xl mb-12">
            Veja quanto você pode economizar com energia solar!
          </p>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Valor médio da sua conta de luz (R$)
              </label>
              <input
                type="number"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="500"
              />
            </div>
            <button
              onClick={calculateSavings}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Calcular Economia
            </button>
            {savings !== null && (
              <div className="mt-6 text-center">
                <p className="text-lg">Economia anual estimada:</p>
                <p className="text-3xl font-bold text-green-600">
                  R$ {savings.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Fale Conosco</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Valor médio da conta de luz
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="R$ 500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Fale com um Especialista Agora
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-yellow-400" />
                <span className="ml-2 text-2xl font-bold">Cinética Solar</span>
              </div>
              <p className="text-gray-400">
                Transformando energia solar em economia para você.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Políticas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>(62) 99494-0108</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>karlosjr.eng.mat@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Aparecida de Goiânia, GO</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cinética Solar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;