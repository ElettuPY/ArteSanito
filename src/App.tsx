/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Star, 
  ChevronRight,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_URL = "https://wa.me/595971598553?text=Hola,%20quiero%20hacer%20un%20pedido%20de%20chorizos.%20Me%20interesan%20los%20siguientes%20productos:";

const products = [
  {
   name: "Chorizo de Pollo",
    description: "Ligero, sabroso y perfecto para cualquier asado",
    price: "35.000 Gs/Kg",
    options: "Con o sin picante",
    image: "/images/pollo.jpeg"
  },
  {
    name: "Chorizo de Chancho",
    description: "Sabor intenso y jugoso, el favorito de muchos",
    price: "40.000 Gs/Kg",
    options: "Con o sin picante",
    image: "/images/chancho.jpeg"
  },
  {
    name: "Chorizo de Vaca",
    description: "Perfil más firme y tradicional, ideal para parrilla",
    price: "45.000 Gs/Kg",
    options: "Con o sin picante",
    image: "/images/vaca.jpeg"
  },
  {
    name: "Panceta Cocida",
    description: "Lista para cocinar, sabor profundo y casero",
    price: "Consultar precio",
    options: "Piezas enteras o trozos",
    image: "/images/panceta-cocida.jpeg"
  },
  {
    name: "Panceta Ahumada",
    description: "Ahumado artesanal que realza cualquier comida",
    price: "Consultar precio",
    options: "Ahumado natural",
    image: "/images/panceta-ahumada.jpeg"
  }
];

const testimonials = [
  { name: "Laura", text: "Muy buen sabor, se nota que es casero", rating: 5 },
  { name: "Rosa", text: "Ya probé varias veces y siempre sale igual de bien", rating: 5 },
  { name: "Enrique", text: "De los mejores chorizos que compré en la zona", rating: 5 }
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-red selection:text-white">
      {/* Sticky WhatsApp Button (Mobile) */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>

      {/* Header / Nav */}
      <header className="py-4 px-6 border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white">
              <Flame size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-brand-brown leading-none">ArteSanito</h1>
              <p className="text-[10px] uppercase tracking-widest text-brand-red font-bold">El arte de estar sanito</p>
            </div>
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-red text-white px-5 py-2 rounded-full font-bold hover:bg-brand-brown transition-colors text-sm"
          >
            <MessageCircle size={18} />
            Hacer Pedido
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              Producción Diaria Limitada
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-brown leading-[1.1] mb-6">
              Chorizos artesanales con <span className="text-brand-red italic">sabor casero</span> que se nota en cada bocado
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-lg">
              Hechos con receta única, condimentos especiales y producción diaria limitada. Desde Lambaré para todo Asunción y alrededores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-brown transition-all transform hover:scale-105 shadow-xl shadow-brand-red/20"
              >
                Pedir por WhatsApp ahora
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-4 text-stone-500 text-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-cream bg-stone-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p>Clientes frecuentes que vuelven por el sabor</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1551135020-39e4ca508d9b?q=80&w=1200&auto=format&fit=crop" 
                alt="Chorizos en la parrilla" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">"Sabor que une a la familia"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scarcity Triggers */}
      <section className="bg-brand-brown py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-white/90">
          <div className="flex items-center gap-3">
            <Clock className="text-brand-red" />
            <span className="font-medium">Producción limitada diaria</span>
          </div>
          <div className="flex items-center gap-3">
            <Flame className="text-brand-red" />
            <span className="font-medium">Preparación 100% artesanal</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-brand-red" />
            <span className="font-medium">Sujeto a disponibilidad</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-texture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-4">¿Por qué elegir ArteSanito?</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sabor Casero Real",
                desc: "Nada de procesos industriales. Sentí el gusto de lo hecho a mano con amor.",
                icon: <Flame className="w-8 h-8 text-brand-red" />
              },
              {
                title: "Receta Única",
                desc: "Condimentos especiales seleccionados para un perfil de sabor superior.",
                icon: <Star className="w-8 h-8 text-brand-red" />
              },
              {
                title: "Calidad Consistente",
                desc: "Producto confiable. El mismo sabor delicioso en cada bocado, siempre.",
                icon: <CheckCircle2 className="w-8 h-8 text-brand-red" />
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-brand-brown mb-2">{benefit.title}</h3>
                <p className="text-stone-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-2">Nuestros Productos</h2>
              <p className="text-stone-500">Seleccioná lo que más te guste y pedilo por WhatsApp</p>
            </div>
            <div className="bg-brand-red/5 px-4 py-2 rounded-lg border border-brand-red/10 text-brand-red font-bold text-sm">
              Envíos en Asunción y Área Metropolitana
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-brand-brown mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 flex-grow">{product.description}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-tighter mb-6">
                    <CheckCircle2 size={14} />
                    {product.options}
                  </div>
                  <a 
                    href={`${WHATSAPP_URL}%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-brown text-white py-3 rounded-xl font-bold hover:bg-brand-red transition-colors"
                  >
                    <MessageCircle size={18} />
                    Pedir por WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section className="py-20 px-6 bg-brand-brown text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Tradición que se siente</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              ArteSanito nace de una tradición familiar donde el sabor y la calidad siempre fueron prioridad. Inspirado en recetas heredadas y trabajado de forma artesanal, cada producto busca mantener ese estándar que se siente al probarlo.
            </p>
            <div className="space-y-4">
              {[
                "Producción manual y cuidadosa",
                "Ingredientes frescos de alta calidad",
                "Sin químicos artificiales (usamos sal de cura)",
                "Opciones con y sin conservantes"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-brand-red" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop" 
              alt="Parrilla" 
              className="rounded-2xl shadow-xl aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=600&auto=format&fit=crop" 
              alt="Carne" 
              className="rounded-2xl shadow-xl aspect-square object-cover mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-brown mb-2">Lo que dicen nuestros clientes</h2>
            <div className="flex justify-center gap-1 text-brand-red mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm italic text-stone-700 relative">
                <div className="absolute -top-4 left-8 text-brand-red/20 text-6xl font-serif">“</div>
                <p className="mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-brand-brown">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-brand-brown not-italic">— {t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-brown mb-4">¿Cómo comprar?</h2>
            <p className="text-stone-500">Rápido, directo y sin complicaciones</p>
          </div>
          
          <div className="space-y-12">
            {[
              { step: "01", title: "Elegís tus productos", desc: "Revisá nuestra lista de chorizos y pancetas." },
              { step: "02", title: "Tocás el botón de WhatsApp", desc: "Se abrirá un chat directo con nosotros." },
              { step: "03", title: "Confirmás tu pedido", desc: "Te confirmamos disponibilidad y coordinamos la entrega." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-4xl font-serif font-bold text-brand-red/20">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-brown mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl font-bold text-brand-brown mb-6">¿Listo para probar algo diferente?</p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-brown transition-all shadow-xl shadow-brand-red/20"
            >
              Hacer pedido por WhatsApp
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-brand-red text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop" 
            alt="Fuego" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">No te quedes sin los tuyos</h2>
          <p className="text-xl text-white/90 mb-10">Producción limitada – pedidos sujetos a disponibilidad diaria.</p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-brand-red px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-brand-cream transition-all transform hover:scale-105 shadow-2xl"
          >
            Pedir ahora por WhatsApp
            <MessageCircle size={28} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-brown py-16 px-6 text-white/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Flame size={32} className="text-brand-red" />
              <h2 className="text-2xl font-bold">ArteSanito</h2>
            </div>
            <p className="max-w-sm mb-6">
              El arte de estar sanito. Chorizos artesanales hechos con tradición y calidad superior en Lambaré.
            </p>
            <div className="flex items-center gap-4 text-white">
              <MapPin size={20} className="text-brand-red" />
              <span>Lambaré – Barrio Santo Domingo</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Información</h4>
            <ul className="space-y-4 text-sm">
              <li>Entregas en Asunción y Área Metropolitana</li>
              <li>WhatsApp: 0971 598 553</li>
              <li>Días de atención: Lunes a Viernes</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Pagos</h4>
            <ul className="space-y-4 text-sm">
              <li>Efectivo</li>
              <li>Transferencia Bancaria</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ArteSanito. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
