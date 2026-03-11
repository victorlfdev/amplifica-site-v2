🌟 Amplifica — Marketing, Audiovisual e Estratégias Digitais

Este é o repositório oficial do site da Amplifica, um estúdio especializado em marketing digital, produção audiovisual, fotografia profissional e campanhas digitais.

O projeto foi reconstruído utilizando Next.js e React, adotando uma arquitetura moderna baseada em componentes reutilizáveis, animações avançadas e otimizações de performance.

O objetivo é criar uma landing page visualmente impactante, rápida e responsiva, destacando os serviços e o portfólio da Amplifica.

🚀 Tecnologias Utilizadas
Framework

Next.js (App Router) → Framework React para aplicações modernas, com otimização automática de performance e SEO.

Linguagem

JavaScript (React) → Estrutura baseada em componentes reutilizáveis.

Estilização

TailwindCSS → Framework utilitário para criação rápida de interfaces responsivas.

Animações

Framer Motion → Biblioteca de animações modernas para React.

Tipografia

next/font → Carregamento otimizado de fontes.

Inter (Google Fonts) → Fonte principal do site.

Salvatore (Local Font) → Fonte utilizada nos títulos.

Recursos Visuais

Background em vídeo (.webm + .mp4)

Glassmorphism UI

Glow effects

Scroll animations

✨ Funcionalidades
🎥 Background em vídeo

O site possui um vídeo em background otimizado, carregado apenas em desktop para melhorar a performance mobile.

Suporte a:

.webm

.mp4

fallback com imagem (poster)

🎬 Animações modernas

Utilizando Framer Motion, o site possui:

animações ao entrar na viewport

animações em cascata (stagger)

efeitos hover premium

micro-interações suaves

🖱 Cursor personalizado

Um cursor customizado animado substitui o cursor padrão no desktop, criando uma experiência visual mais imersiva.

⏳ Loading Screen

Tela de carregamento com animação da marca Amplifica antes da exibição do site.

🎨 Interface moderna

O design utiliza:

Glassmorphism

Blur effects

Glow effects

Gradientes suaves

📱 Layout responsivo

Totalmente otimizado para:

Desktop

Tablet

Mobile

📂 Estrutura do Projeto
src
│
├── app
│   ├── layout.js        # Layout global da aplicação
│   ├── page.js          # Página principal
│   └── globals.css      # Estilos globais
│
├── components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Servicos.js
│   ├── Carrossel.js
│   ├── Sobre.js
│   ├── Contato.js
│   ├── Footer.js
│   ├── Cursor.js
│   ├── Loader.js
│   └── ClientEffects.js
│
├── lib
│   └── animations.js    # Configurações de animação reutilizáveis
│
public
│
├── background.webm
├── background.mp4
├── fonts
│   └── Salvatore.ttf
│
└── imagens
🛠 Como rodar o projeto localmente
1️⃣ Clone o repositório
git clone https://github.com/victorlfdev/landingpage-amplifica.git
2️⃣ Acesse a pasta do projeto
cd landingpage-amplifica
3️⃣ Instale as dependências
npm install
4️⃣ Inicie o servidor de desenvolvimento
npm run dev

O site estará disponível em:

http://localhost:3000
🧩 Scripts disponíveis
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run start    # inicia versão de produção
npm run lint     # verifica problemas no código
⚡ Otimizações implementadas

O projeto utiliza diversas otimizações modernas do Next.js:

carregamento otimizado de fontes

lazy loading automático

otimização de assets

server components

divisão automática de código

📬 Contato

💼 Amplifica — Amplificando ideias, criando conexões

📷 Instagram
https://instagram.com/amplifica.estudio

✉️ E-mail
amplifica@usd21.org

👨‍💻 Desenvolvedor

Projeto desenvolvido por Victor Lima.

GitHub:
https://github.com/victorlfdev

📜 Licença

Este projeto utiliza:

Next.js

React

TailwindCSS

Todos licenciados sob MIT License.

💡 Amplifica — Amplificando ideias, criando conexões.
