
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  XCircle,
  Instagram
} from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import GlassCard from './components/GlassCard';
import BackgroundVideo from './components/BackgroundVideo';
import { 
  PROBLEM_POINTS, 
  SOLUTION_CARDS, 
  INCLUSIONS, 
  COMPARISON_DATA, 
  TARGET_AUDIENCE, 
  WHATSAPP_URL, 
  INSTAGRAM_URL,
  PAYMENT_URL
} from './constants';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Removed bg-black to allow video to show through
    <div className="min-h-screen text-white selection:bg-zinc-800 selection:text-white">
      
      {/* Global Background Video Component */}
      <BackgroundVideo />

      {/* Scrollable Content Container */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section - Cleaned up (Video moved to global) */}
        <section className="relative pt-48 pb-40 px-6 overflow-hidden min-h-[90vh] flex items-center">
          
          <div className="max-w-5xl mx-auto text-center relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-zinc-300 mb-10 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Lançamento: Premium Web Service por Assinatura
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-10 text-gradient leading-[0.9]">
              Seu site profissional.<br />
              Por assinatura.<br />
              <span className="text-zinc-500">A partir de R$ 49,90.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              O UI-Z oferece design de elite, velocidade extrema e atualizações constantes. 
              Mais barato que seus streamings, muito mais potente que um site comum.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
              <a 
                href={PAYMENT_URL}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-black px-10 py-5 rounded-2xl hover:bg-zinc-200 transition-all active:scale-95 text-lg shadow-2xl shadow-white/10"
              >
                Quero meu site profissional <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={WHATSAPP_URL}
                className="w-full sm:w-auto flex items-center justify-center gap-2 glass-effect text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all text-lg"
              >
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center group">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-2 group-hover:text-white transition-colors">Assinatura Mensal</span>
                <span className="text-4xl font-black text-white">R$ 49,90</span>
              </div>
              <div className="w-12 h-px bg-zinc-800 hidden md:block opacity-50"></div>
              <div className="text-center group">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-2 group-hover:text-white transition-colors">Sem Carência</span>
                <span className="text-4xl font-black text-white">Zero Fidelidade</span>
              </div>
              <div className="w-12 h-px bg-zinc-800 hidden md:block opacity-50"></div>
              <div className="text-center group">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-2 group-hover:text-white transition-colors">Setup Inicial</span>
                <span className="text-4xl font-black text-white">R$ 99,90</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <Section id="problema" className="relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
                Seu site atual provavelmente <span className="text-zinc-600">está te atrapalhando.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-light">
                Na era digital, a primeira impressão é a única que conta. Se o seu site não gera confiança, você está literalmente dando clientes para a concorrência.
              </p>
            </div>
            <div className="grid gap-4">
              {PROBLEM_POINTS.map((point, index) => (
                <div key={index} className="flex items-center gap-5 p-6 rounded-2xl glass-effect border-white/5 hover:border-white/20 transition-all duration-500 group">
                  <XCircle className="w-6 h-6 text-zinc-700 group-hover:text-zinc-500 transition-colors flex-shrink-0" />
                  <span className="text-zinc-300 font-semibold text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Solution Section */}
        <Section id="solucao" className="relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">UI-Z resolve tudo isso.</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light">
              Não é apenas um site. É um ativo digital premium que <span className="text-white font-medium">evolui semanalmente</span> com o seu negócio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTION_CARDS.map((card, index) => (
              <GlassCard key={index} className="flex flex-col items-center text-center py-12">
                <div className="mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed">{card.description}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* Inclusions Section */}
        <Section id="incluso" className="relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {INCLUSIONS.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span className="text-zinc-400 text-lg group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">O que está incluso.</h2>
              <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8">
                Cuidamos de 100% da infraestrutura. Você só precisa escolher o que quer dizer ao mundo. 
              </p>
              <div className="p-6 rounded-2xl glass-effect border-white/5">
                <p className="text-zinc-300 italic">"Esqueça as taxas de manutenção abusivas e os desenvolvedores que somem."</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Pricing Section */}
        <Section id="preco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Investimento<br />Direto e Justo.</h2>
              <p className="text-xl text-zinc-500 font-light">A transparência que você nunca teve com agências.</p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-white/30 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#080808]/40 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-[2.5rem] flex flex-col items-center">
                <div className="px-6 py-2 rounded-full bg-white text-black text-xs font-black uppercase tracking-[0.2em] mb-12">
                  ASSINATURA PREMIUM
                </div>
                
                <div className="mb-12 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-zinc-500 text-3xl font-light">R$</span>
                    <span className="text-8xl md:text-9xl font-black tracking-tighter text-gradient">49,90</span>
                  </div>
                  <p className="text-zinc-500 text-xl font-medium mt-2">Mensal • Sem Fidelidade</p>
                </div>
                
                <div className="w-full grid md:grid-cols-2 gap-6 mb-16 max-w-2xl">
                  <div className="flex items-center gap-4 text-zinc-400 bg-white/5 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                    <span className="text-lg">Cancele quando quiser</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 bg-white/5 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                    <span className="text-lg">Atualizações inclusas</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 bg-white/5 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                    <span className="text-lg">Domínio próprio</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 bg-white/5 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                    <span className="text-lg">Setup profissional</span>
                  </div>
                </div>
                
                <a 
                  href={PAYMENT_URL}
                  className="block w-full max-w-md bg-white text-black font-black py-6 rounded-2xl text-2xl hover:bg-zinc-200 transition-all duration-300 active:scale-95 text-center shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(255,255,255,0.2)] mb-8"
                >
                  Quero meu site agora
                </a>
                
                <p className="text-zinc-500 text-base font-medium uppercase tracking-[0.1em]">
                  Ativação Única: R$ 99,90
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Comparison Section */}
        <Section className="relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-gradient">Por que o UI-Z?</h2>
            <p className="text-xl text-zinc-500 font-light">A diferença entre um gasto e um investimento.</p>
          </div>
          
          <div className="overflow-hidden rounded-[2rem] border border-white/5 glass-effect">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-8 px-8 text-zinc-500 font-bold uppercase tracking-widest text-xs">Atributo</th>
                  <th className="py-8 px-8 text-zinc-500 font-bold uppercase tracking-widest text-xs">Site Convencional</th>
                  <th className="py-8 px-8 text-white font-black uppercase tracking-widest text-xs bg-white/5">Plataforma UI-Z</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-8 px-8 font-bold text-zinc-400">{row.feature}</td>
                    <td className="py-8 px-8 text-zinc-500">{row.traditional}</td>
                    <td className="py-8 px-8 text-white font-black bg-white/5">{row.uiz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* For Whom Section */}
        <Section>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">Para quem criamos isso?</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
              O UI-Z foi feito para profissionais de elite que entendem o valor de uma imagem impecável.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {TARGET_AUDIENCE.map((item, index) => (
              <div key={index} className="px-10 py-5 rounded-2xl glass-effect border border-white/5 font-bold text-zinc-300 hover:text-white hover:border-white/20 transition-all cursor-default text-lg">
                {item}
              </div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <section className="py-40 px-6 text-center overflow-hidden relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-gradient leading-tight">
              Pronto para o<br />próximo nível?
            </h2>
            <p className="text-2xl text-zinc-400 mb-16 font-light">
              A oportunidade de ter um site de agência premium pelo preço de uma pizza mensal está a um clique.
            </p>
            <a 
              href={PAYMENT_URL}
              className="inline-flex items-center gap-3 bg-white text-black font-black px-16 py-7 rounded-[2rem] text-2xl hover:bg-zinc-200 transition-all duration-300 active:scale-95 shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] group"
            >
              Ativar meu site agora <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-8 text-zinc-600 font-bold uppercase tracking-widest text-xs">Cancele a qualquer momento • Ativação imediata</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 relative bg-black/80 backdrop-blur-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-16 items-start mb-16">
              <div className="col-span-2">
                <div className="text-3xl font-black tracking-tighter text-white mb-6">UI-Z</div>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-sm font-light">
                  Redefinindo a presença digital para o novo mercado. Design de alta fidelidade como serviço.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Conecte-se</h4>
                <div className="space-y-6">
                  <a href={WHATSAPP_URL} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all group">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10"><MessageCircle className="w-5 h-5" /></div> WhatsApp
                  </a>
                  <a href={INSTAGRAM_URL} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all group">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10"><Instagram className="w-5 h-5" /></div> Instagram
                  </a>
                </div>
              </div>
              
              <div className="text-left md:text-right">
                <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Institucional</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  © {new Date().getFullYear()} UI-Z Digital.<br />
                  Todos os direitos reservados.<br />
                  <span className="text-zinc-700">Um produto Z-Line Connect Group.</span>
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-zinc-700 text-[10px] uppercase font-bold tracking-widest">Premium Service • Zero Friction</span>
              <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-zinc-700">
                <span className="hover:text-zinc-500 cursor-pointer transition-colors">Privacidade</span>
                <span className="hover:text-zinc-500 cursor-pointer transition-colors">Termos</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
