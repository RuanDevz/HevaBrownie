import React from 'react';
import { Menu, MapPin, Phone, Instagram, Facebook, Clock, ExternalLink, FileText, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import logo from '../src/Assets/Logo.png'
import product1 from '../src/Assets/Produto1.jpg'
import product2 from '../src/Assets/Sanduiches.jpg'
import product3 from '../src/Assets/Doces.jpg'
import background from '../src/Assets/background.jpg'
import Brownie from '../src/Assets/Brownie.webp'
import Doces from '../src/Assets/Docesespecial.jpg'
import Bebidas from '../src/Assets/Bebidas.jpg'





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/5511987543856', '_blank');
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const products = [
    {
      title: "Brownie",
      description: "Os Brownies mais deliciosos de São Paulo!",
      img:product1
    },
    {
      title: "Sanduiches",
      description: "Experimente e nunca mais esqueça!",
      img:product2
    },
    {
      title: "Doces",
      description: "O melhor Joy de Uva do mundo!",
      img:product3
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isHeaderSticky ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className=" flex justify-center items-center gap-4  text-2xl font-black text-[#ffb704] drop-shadow-md">
            <img className='w-16 h-auto' src={logo} alt="Logo" />
            <h1>HevaBrownie</h1>
              </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="font-medium hover:text-[#ffb704] transition-colors">Home</a>
              <a href="#about" className="font-medium hover:text-[#ffb704] transition-colors">Quem Somos</a>
              <a href="#menu" className="font-medium hover:text-[#ffb704] transition-colors">Cardápio</a>
              <a href="#locations" className="font-medium hover:text-[#ffb704] transition-colors">Nossas Lojas</a>
              <a href="#contact" className="font-medium hover:text-[#ffb704] transition-colors">Contato</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#home" className="font-medium hover:text-[#ffb704] transition-colors">Home</a>
              <a href="#about" className="font-medium hover:text-[#ffb704] transition-colors">Quem Somos</a>
              <a href="#menu" className="font-medium hover:text-[#ffb704] transition-colors">Cardápio</a>
              <a href="#locations" className="font-medium hover:text-[#ffb704] transition-colors">Nossas Lojas</a>
              <a href="#contact" className="font-medium hover:text-[#ffb704] transition-colors">Contato</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-[url('https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Descubra o sabor irresistível dos nossos
                <span className="text-[#ffb704]"> Brownies</span>
              </h1>
              <p className="text-lg text-white/90 font-medium mb-8">
                Experimente a perfeita combinação de chocolate e felicidade em cada mordida.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="bg-[#ffb704] text-white px-8 py-3 rounded-full hover:bg-[#ffb704]/90 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  Peça Agora
                </button>
                <button 
                  onClick={() => openLink('https://app.cardapioweb.com/heva_brownie')}
                  className="bg-white text-[#ffb704] px-8 py-3 rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 font-bold shadow-lg flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Ver Cardápio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" data-aos="fade-up">Nossos Produtos</h2>
          <div data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
{products.map((product, index) => (
  <SwiperSlide key={index}>
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center p-4">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  </SwiperSlide>
))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" data-aos="fade-up">Quem Somos</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1" data-aos="fade-right">
              <img 
                src={background}
                alt="Nossa História"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1 space-y-4" data-aos="fade-left">
              <p className="text-lg text-gray-700">
                A HevaBrownie nasceu da paixão por criar momentos especiais através de sabores únicos. 
                Desde 2022, temos nos dedicado a aperfeiçoar nossas receitas, usando apenas ingredientes 
                selecionados para criar os brownies mais deliciosos de São Paulo.
              </p>
              <p className="text-lg text-gray-700">
                Nossa missão é levar felicidade em forma de brownie para cada cliente, 
                mantendo sempre o padrão de qualidade e sabor que nos tornou referência no mercado.
              </p>
              <button 
                onClick={() => openLink('https://docs.google.com/forms/d/e/1FAIpQLScj8uGL3IZdd8aOtWM6bZr8PNEAOyZw2jngSjSAy5KzRgENPQ/viewform')}
                className="bg-[#ffb704] text-white px-6 py-3 rounded-full hover:bg-[#ffb704]/90 transition-all transform hover:scale-105 font-bold shadow-lg mt-4 flex items-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Trabalhe Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-black text-center mb-12" data-aos="fade-up">Nosso Cardápio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Brownies Clássicos",
          image: Brownie,
          description: "Nosso brownie tradicional com chocolate belga"
        },
        {
          title: "Doces Especiais",
          image: Doces,
          description: "Variedade de doces artesanais"
        },
        {
          title: "Sanduíches Gourmet",
          image: product2,
          description: "Combinações únicas e saborosas"
        },
        {
          title: "Bebidas Especiais",
          image: Bebidas,
          description: "Cafés, chocolates e mais"
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay={index * 150} 
        >
          <img 
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          />
          <div className="p-4" data-aos="fade-in" data-aos-delay={index * 250}>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8 gap-4" data-aos="fade-up" data-aos-delay="400">
      <button 
        onClick={() => openLink('https://app.cardapioweb.com/heva_brownie')}
        className="bg-[#ffb704] text-white px-8 py-3 rounded-full hover:bg-[#ffb704]/90 transition-all transform hover:scale-105 font-bold shadow-lg flex items-center gap-2"
        data-aos="flip-left"
        data-aos-delay="500"
      >
        <FileText className="h-5 w-5" />
        Cardápio Completo
      </button>
      <button 
        onClick={() => openLink('https://www.ifood.com.br/delivery/sao-paulo-sp/heva-brownie---doces-cafe-sanduiche-vila-leopoldina/eda2612f-e457-4c34-82a0-0355a399eb3a')}
        className="bg-[#ea1d2c] text-white px-8 py-3 rounded-full hover:bg-[#ea1d2c]/90 transition-all transform hover:scale-105 font-bold shadow-lg flex items-center gap-2"
        data-aos="flip-right"
        data-aos-delay="600"
      >
        <ShoppingBag className="h-5 w-5" />
        Peça no iFood
      </button>
    </div>
  </div>
</section>


      {/* Locations Section */}
      <section id="locations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" data-aos="fade-up">Nossas Lojas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-right">
              <h3 className="text-2xl font-bold">Morro Doce</h3>
              <p className="flex items-center gap-2">
                <MapPin className="text-[#ffb704]" />
                R. Dionísio Bellante, 61 - Santa Fé, São Paulo - SP
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4761789808836!2d-46.79776617608547!3d-23.428608899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefd017f8095ed%3A0x37d99ef05e64fb99!2sHeva%20Brownie!5e0!3m2!1spt-BR!2sbr!4v1709858437346!5m2!1spt-BR!2sbr"
                className="w-full h-64 rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4" data-aos="fade-left">
              <h3 className="text-2xl font-bold">Leopoldina</h3>
              <p className="flex items-center gap-2">
                <MapPin className="text-[#ffb704]" />
                Av. Imperatriz Leopoldina, 1092 - Vila Leopoldina, São Paulo - SP
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1234567890123!2d-46.73255077608547!3d-23.531413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef9fa7e81f7a1%3A0x414d63d8004ce133!2sHeva%20Brownie%20-%20Vila%20Leopoldina!5e0!3m2!1spt-BR!2sbr!4v1709858437346!5m2!1spt-BR!2sbr"
                className="w-full h-64 rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12" data-aos="fade-up">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto text-center space-y-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xl font-medium">Faça seu pedido ou tire suas dúvidas:</p>
            <button 
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full mx-auto hover:bg-[#25D366]/90 transition-all transform hover:scale-105 font-bold shadow-lg"
            >
              <Phone className="h-5 w-5" />
              +55 11 98754-3856
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4">HevaBrownie</h3>
              <p className="text-gray-400">Transformando momentos em doces memórias.</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.instagram.com/hevabrownie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffb704]"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#ffb704]">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#ffb704]" />
                  Segunda a Sábado: 10h às 22h
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#ffb704]" />
                  Domingo: 12h às 20h
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://app.cardapioweb.com/heva_brownie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ffb704] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Cardápio Digital
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ifood.com.br/delivery/sao-paulo-sp/heva-brownie---doces-cafe-sanduiche-vila-leopoldina/eda2612f-e457-4c34-82a0-0355a399eb3a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ffb704] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    iFood
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScj8uGL3IZdd8aOtWM6bZr8PNEAOyZw2jngSjSAy5KzRgENPQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ffb704] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Trabalhe Conosco
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HevaBrownie. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;