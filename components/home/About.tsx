"use client";

import { smoothScrollTo } from "@/lib/utils";

const About = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 80); // 80px é a altura da navbar
  };
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Nós
            </h2>
            <div className="space-y-4 font-body text-lg text-foreground/80">
              <p>
                Somos uma igreja batista fundamental tradicional, comprometida com a pregação fiel 
                da Palavra de Deus, a comunhão dos santos e a edificação do corpo de Cristo.
              </p>
              <p>
                Nossa igreja foi fundada com o propósito de ser uma comunidade onde famílias possam 
                crescer na graça e no conhecimento do Senhor Jesus Cristo, mantendo firmes os 
                princípios bíblicos e a sã doutrina.
              </p>
              <p>
                Aqui, você e sua família são bem-vindos para adorar, aprender e servir juntos, 
                enquanto buscamos honrar a Deus em tudo o que fazemos.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#programacao"
                onClick={(e) => handleSmoothScroll(e, "#programacao")}
                className="inline-block font-body font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Veja nossa programação →
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={"/assets/church-building.jpg"} 
                alt="Fachada da Igreja Batista Fundamental"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-primary rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
