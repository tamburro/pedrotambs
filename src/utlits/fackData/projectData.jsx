// src/utlits/fackData/projectData.js

export const projectsData = [
    {
        id: 1,
        slug: "listaai-gerador-de-descricoes",
        src: "/images/projects/listaai/listaai_full.jpg",
        category: "Product & AI Engineering",
        title: "ListaAI SaaS MVP",
        tagline: "Títulos e descrições para marketplace gerados por IA em segundos.",
        tagline_en: "AI-generated marketplace titles and descriptions in seconds.",
        description: "Gerador de títulos e descrições otimizadas para Mercado Livre e Shopee, movido por IA. Vendedores colam o nome do produto e as especificações técnicas, e o app entrega título com palavras-chave de alto volume e descrição completa pronta para publicar, em segundos.",
        description_en: "AI-powered title and description generator for Mercado Livre and Shopee. Sellers paste the product name and technical specs, and the app delivers a keyword-optimized title and a complete, publish-ready description in seconds.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "2 dias",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Claude API", "Next.js", "Prisma", "Vercel"],
        liveDemoLink: "https://listaai.vercel.app/",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil tem mais de 12 milhões de vendedores ativos em marketplaces, a maioria microempreendedores e pequenos lojistas que publicam produtos manualmente. Escrever um título e uma descrição eficaz para marketplace não é trivial: envolve conhecer os algoritmos de busca de cada plataforma, usar as palavras-chave certas e estruturar a informação em um formato que converta. A realidade da maioria dos vendedores: descrições genéricas copiadas do fornecedor, títulos mal otimizados e horas perdidas por semana em conteúdo de produto. O custo de uma descrição ruim é direto: menos visibilidade, menos conversão, menos vendas.",
                content_en: "Brazil has over 12 million active marketplace sellers, most of them micro-entrepreneurs and small shop owners who list products manually. Writing an effective marketplace title and description isn't trivial: it requires knowing each platform's search algorithms, using the right keywords, and structuring information in a format that converts. The reality for most sellers: generic descriptions copied from suppliers, poorly optimized titles, and hours wasted every week on product content. The cost of a bad description is direct: less visibility, less conversion, fewer sales."
            },
            {
                title: "Pesquisa de Mercado",
                title_en: "Market Research",
                type: "research",
                methods: ["Análise de comportamento em fóruns de vendedores", "Benchmark de ferramentas existentes", "Mapeamento de dores via comunidades (Facebook, Reddit, WhatsApp)"],
                methods_en: ["Seller forum behavior analysis", "Benchmark of existing tools", "Pain point mapping via communities (Facebook, Reddit, WhatsApp)"],
                content: "A demanda por ferramentas de copywriting para marketplace no Brasil é alta e subatendida. Ferramentas genéricas como ChatGPT exigem que o vendedor monte prompts, interprete saídas e adapte o tom, criando uma barreira para quem não tem familiaridade com IA. Soluções específicas para Mercado Livre são escassas e, quando existem, focam em precificação ou gestão de estoque, não em conteúdo. O ponto de entrada ideal identificado: um fluxo de 3 campos (nome, especificações, plataforma) → resultado em <10 segundos.",
                content_en: "Demand for marketplace copywriting tools in Brazil is high and underserved. Generic tools like ChatGPT require sellers to craft prompts, interpret outputs, and adapt tone, creating a barrier for those unfamiliar with AI. Mercado Livre-specific solutions are scarce, and when they exist, they focus on pricing or inventory, not content. The ideal entry point: a 3-field flow (name, specs, platform) → result in under 10 seconds.",
                highlights: [
                    "Vendedores perdem de 30 a 60 minutos por dia só escrevendo descrições de produtos",
                    "Títulos mal escritos são a principal causa de baixo ranqueamento orgânico em marketplaces",
                    "A maioria dos vendedores não sabe quais palavras-chave usar, e muitas vezes não tem tempo para pesquisar",
                    "ChatGPT já é usado por parte dos vendedores, mas o atrito do prompt livre é uma barreira real",
                    "Mercado Livre e Shopee têm regras e formatos distintos, o que confere vantagem clara a uma ferramenta dedicada"
                ],
                highlights_en: [
                    "Sellers lose 30 to 60 minutes per day just writing product descriptions",
                    "Poorly written titles are the main cause of low organic ranking in marketplaces",
                    "Most sellers don't know which keywords to use and don't have time to research",
                    "ChatGPT is already used by some sellers, but the free-form prompt friction is a real barrier",
                    "Mercado Livre and Shopee have distinct rules and formats, so a tool that understands this has a clear advantage"
                ],
                images: [
                    {
                        src: "/images/projects/listaai/landing-hero.png",
                        caption: "Landing page com a proposta de valor para vendedores brasileiros",
                        fullWidth: true,
                        width: 1350,
                        height: 734
                    }
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O ListaAI foi construído com um fluxo de uso minimalista: o vendedor informa nome do produto, especificações técnicas, plataforma alvo (Mercado Livre ou Shopee) e tom de voz preferido. A IA gera título otimizado com palavras-chave de alto volume e uma descrição completa formatada para a plataforma escolhida. O resultado pode ser regenerado com um clique, copiado diretamente e fica salvo no histórico. Cada detalhe do produto foi pensado para reduzir o atrito ao máximo, para que o vendedor não precise entender de IA para usar.",
                content_en: "ListaAI was built with a minimalist usage flow: the seller provides the product name, technical specs, target platform (Mercado Livre or Shopee), and preferred tone of voice. The AI generates an optimized title with high-volume keywords and a complete description formatted for the chosen platform. The result can be regenerated with one click, copied directly, and is saved in history. Every detail was designed to minimize friction, so the seller doesn't need to understand AI to use it.",
                images: [
                    {
                        src: "/images/projects/listaai/features.png",
                        caption: "Funcionalidades: geração por plataforma, tom de voz, SEO embutido e mais",
                        fullWidth: true,
                        width: 1343,
                        height: 704
                    },
                    {
                        src: "/images/projects/listaai/como-funciona.png",
                        caption: "Como funciona: 3 passos entre specs, plataforma/tom e publicar",
                        fullWidth: true,
                        width: 1338,
                        height: 441
                    }
                ]
            },
            {
                title: "Funcionalidades",
                title_en: "Features",
                type: "research",
                methods: ["Geração por plataforma", "Seleção de tom de voz", "SEO embutido", "Regeneração inteligente", "Histórico completo"],
                methods_en: ["Platform-specific generation", "Voice tone selection", "Built-in SEO", "Smart regeneration", "Full history"],
                content: "Cada funcionalidade foi priorizada com base em uma pergunta: isso reduz o tempo do vendedor ou aumenta a qualidade do resultado? Geração separada por plataforma garante que o output respeite as regras e formatos do Mercado Livre e da Shopee. Tom de voz ajusta a descrição de formal a descontraído. O SEO embutido, sem configuração extra, analisa as especificações e escolhe termos com melhor potencial de ranqueamento. Regeneração inteligente permite variar o resultado sem redigitar os dados. O histórico completo devolve ao vendedor o controle sobre o que foi gerado.",
                content_en: "Each feature was prioritized based on one question: does this reduce seller time or increase output quality? Platform-specific generation ensures the output respects Mercado Livre's and Shopee's rules and formats. Voice tone adjusts the description from formal to casual. Built-in SEO, with no extra setup, analyzes specs and picks terms with the best ranking potential. Smart regeneration produces a new result without re-entering data. Full history gives sellers control over everything that's been generated.",
                highlights: [
                    "Geração por plataforma, com o output adaptado às regras de cada marketplace",
                    "Tom de voz configurável, entre formal, técnico, descontraído ou persuasivo",
                    "SEO embutido, com palavras-chave de alto volume inseridas automaticamente no título",
                    "Regeneração inteligente, para obter um novo resultado com um clique, sem reescrever os dados",
                    "Histórico completo, com todas as descrições salvas e acessíveis no dashboard"
                ],
                highlights_en: [
                    "Platform generation, with output adapted to each marketplace's rules",
                    "Configurable tone of voice, including formal, technical, casual, or persuasive",
                    "Built-in SEO, with high-volume keywords automatically embedded in the title",
                    "Smart regeneration, providing a new result with one click, no need to rewrite data",
                    "Full history, where all descriptions are saved and accessible in the dashboard"
                ],
                images: [
                    {
                        src: "/images/projects/listaai/dashboard.png",
                        caption: "Dashboard com plano, descrições do mês e histórico recente",
                        width: 1400,
                        height: 745
                    },
                    {
                        src: "/images/projects/listaai/nova-descricao.png",
                        caption: "Nova descrição com nome, specs, plataforma e tom de voz",
                        width: 1100,
                        height: 760
                    },
                    {
                        src: "/images/projects/listaai/historico.png",
                        caption: "Histórico com todas as descrições geradas com badges de plataforma",
                        width: 1100,
                        height: 760
                    },
                    {
                        src: "/images/projects/listaai/perfil.png",
                        caption: "Perfil com informações da conta e plano atual",
                        width: 1100,
                        height: 760
                    },
                    {
                        src: "/images/projects/listaai/assinatura.png",
                        caption: "Assinatura: upgrade para PRO direto pelo app",
                        width: 495,
                        height: 849
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Arquitetura & Tecnologia",
                title_en: "Architecture & Technology",
                type: "text",
                content: "O produto foi inteiramente construído com AI coding, usando o Claude como pair programmer em todas as etapas, do scaffolding ao deploy. Stack: Next.js 14 (App Router) no frontend, API Routes para o backend, Prisma + PostgreSQL para persistência de dados e histórico, Claude API (claude-sonnet) para geração de conteúdo, e Vercel para deploy contínuo. O prompt de geração foi o artefato mais iterado: cada versão foi testada com produtos reais de diferentes categorias, como eletrônicos, moda e casa, até atingir consistência na qualidade do output.",
                content_en: "The product was entirely built with AI coding, with Claude as pair programmer at every stage, from scaffolding to deployment. Stack: Next.js 14 (App Router) on the frontend, API Routes for the backend, Prisma + PostgreSQL for data persistence and history, Claude API (claude-sonnet) for content generation, and Vercel for continuous deployment. The generation prompt was the most iterated artifact: each version was tested with real products across different categories, including electronics, fashion, and home, until output quality became consistent.",
                images: [
                    {
                        src: "/images/projects/listaai/pricing.png",
                        caption: "Modelo freemium: Free R$0 com 5 descrições/mês, e PRO R$39/mês ilimitado",
                        fullWidth: true,
                        width: 1340,
                        height: 559
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "2", label: "dias do zero ao deploy" },
                    { value: "3", label: "plataformas suportadas (ML, Shopee, genérico)" },
                    { value: "R$0", label: "plano gratuito com 5 descrições/mês" }
                ],
                metrics_en: [
                    { value: "2", label: "days from zero to deploy" },
                    { value: "3", label: "supported platforms (ML, Shopee, generic)" },
                    { value: "R$0", label: "free plan with 5 descriptions/month" }
                ],
                content: "O principal aprendizado foi sobre a relação entre simplicidade de interface e qualidade de prompt. Quanto mais simples o formulário para o usuário, mais trabalho o prompt precisa fazer para compensar a falta de contexto. A solução foi um sistema de instruções em camadas: o prompt base define o comportamento geral da IA, e variáveis dinâmicas injetam o contexto específico de cada geração. O modelo freemium foi escolhido para maximizar adoção, pois o produto se vende pelo primeiro uso.",
                content_en: "The key learning was about the relationship between interface simplicity and prompt quality. The simpler the form for the user, the more work the prompt needs to do to compensate for missing context. The solution was a layered instruction system: the base prompt defines the AI's general behavior, while dynamic variables inject the specific context for each generation. The freemium model was chosen to maximize adoption, as the product sells itself on the first use."
            }
        ]
    },
    {
        id: 2,
        slug: "sigil-design-system-builder",
        src: "/images/projects/sigil/sigil_full.jpg",
        category: "Product & AI Engineering",
        title: "Sigil SaaS MVP",
        tagline: "De uma cor seed a um design system completo, pronto para exportar.",
        tagline_en: "From a seed color to a complete design system, ready to export.",
        description: "Gerador de sistemas visuais para founders, devs e criadores independentes. Cole uma cor seed para o Sigil gerar paleta, tokens de design e um guia de estilo pronto para exportação. Identidade visual coerente sem abrir o Figma.",
        description_en: "Visual system generator for founders, devs, and independent creators. Paste a seed color and Sigil generates a palette, design tokens, and style guides ready for export. Cohesive visual identity without opening Figma.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "2 dias",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Claude API", "Next.js", "Prisma", "Vercel"],
        liveDemoLink: "https://sigil-eight.vercel.app/",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Founders, desenvolvedores e criadores independentes constroem produtos sem designer, e sentem isso a cada tela inconsistente, botão fora do padrão ou paleta improvisada. Ferramentas como Figma, Tokens Studio e Brand.ai foram criadas para designers. Quem constrói sozinho não tem tempo para aprender esses fluxos, nem budget para terceirizar. O resultado prático: projetos com identidade visual fragmentada, ausência de design tokens e incapacidade de escalar o sistema sem retrabalho. O mercado de ferramentas de design system é grande, mas todas as soluções assumem que existe um designer no processo.",
                content_en: "Founders, developers, and independent creators build products without a designer, and feel it in every inconsistent screen, off-pattern button, or improvised palette. Tools like Figma, Tokens Studio, and Brand.ai were built for designers. Solo builders don't have time to learn these workflows, nor the budget to outsource. The practical result: projects with fragmented visual identity, absent design tokens, and no way to scale the system without rework. The design system tooling market is large, but every solution assumes there is a designer in the loop."
            },
            {
                title: "Pesquisa de Mercado",
                title_en: "Market Research",
                type: "research",
                methods: ["Análise de comunidades indie hackers e devs solos", "Benchmark de ferramentas (Tokens Studio, Style Dictionary, Coolors, Realtime Colors)", "Mapeamento de dores em fóruns (Reddit, Product Hunt, Twitter/X)"],
                methods_en: ["Indie hacker and solo dev community analysis", "Tool benchmark (Tokens Studio, Style Dictionary, Coolors, Realtime Colors)", "Pain point mapping in forums (Reddit, Product Hunt, Twitter/X)"],
                content: "O crescimento de ferramentas no-code e do movimento indie hacker criou uma demanda clara: construtores solo que precisam de coerência visual mas rejeitam fluxos complexos. Tokens Studio e Style Dictionary são poderosos, mas têm curva de aprendizado íngreme e assumem familiaridade com design systems. Coolors e Realtime Colors resolvem paleta, mas não conectam com código. Nenhuma ferramenta fecha o ciclo completo, da cor seed ao arquivo de configuração pronto para uso no projeto.",
                content_en: "The growth of no-code tools and the indie hacker movement created a clear demand: solo builders who need visual consistency but reject complex workflows. Tokens Studio and Style Dictionary are powerful, but have steep learning curves and assume design system familiarity. Coolors and Realtime Colors solve palette, but don't connect to code. No tool closes the full cycle, from seed color to config file ready for use in the project.",
                highlights: [
                    "Devs solos gastam horas consistindo cores manualmente entre CSS, Tailwind e componentes",
                    "A maioria dos indie hackers usa 'achismo' visual: escolhem cores sem sistema de tokens",
                    "A barreira não é conceitual, é operacional: ninguém quer aprender mais uma ferramenta complexa",
                    "Product Hunt e Reddit mostram demanda alta por 'Tailwind palette generator' e 'brand kit for devs'"
                ],
                highlights_en: [
                    "Solo devs spend hours manually syncing colors between CSS, Tailwind, and components",
                    "Most indie hackers rely on guesswork: they choose colors without a token system",
                    "The barrier isn't conceptual, it's operational: no one wants to learn another complex tool",
                    "Product Hunt and Reddit show high demand for 'Tailwind palette generator' and 'brand kit for devs'"
                ],
                images: [
                    {
                        src: "/images/projects/sigil/landing-hero.png",
                        caption: "Landing page com a proposta de valor para quem constrói sozinho",
                        fullWidth: true,
                        width: 1898,
                        height: 712
                    }
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O Sigil fecha o ciclo em um fluxo de três passos: escolha uma cor primária, nomeie sua marca, exporte. Internamente, o app gera paleta harmônica com modos claro/escuro, cria um Brand Brief com logo, cores, tipografia e tom de voz, e disponibiliza todos os tokens no Export Hub em múltiplos formatos. O Component Preview exibe os tokens aplicados em botões, cards e inputs reais, permitindo que o usuário veja o sistema funcionando antes de escrever uma linha de código.",
                content_en: "Sigil closes the loop in a three-step flow: pick a primary color, name your brand, export. Internally, the app generates a harmonic palette with light/dark modes, creates a Brand Brief with logo, colors, typography, and tone of voice, and makes all tokens available in the Export Hub in multiple formats. The Component Preview shows tokens applied to real buttons, cards, and inputs, so the user can see the system working before writing a line of code.",
                images: [
                    {
                        src: "/images/projects/sigil/features.png",
                        caption: "Features: Token Studio, Palette Generator, Brand Brief, Component Preview e Export Hub",
                        fullWidth: true,
                        width: 1895,
                        height: 702
                    }
                ]
            },
            {
                title: "Funcionalidades",
                title_en: "Features",
                type: "research",
                methods: ["Token Studio", "Palette Generator", "Brand Brief", "Component Preview", "Export Hub"],
                methods_en: ["Token Studio", "Palette Generator", "Brand Brief", "Component Preview", "Export Hub"],
                content: "Cada feature foi desenhada para eliminar uma etapa manual do fluxo de criação de identidade visual. Token Studio cria e exporta design tokens em JSON, CSS e Tailwind config. Palette Generator gera paletas harmônicas a partir de uma cor seed com modo claro/escuro automático. Brand Brief é um documento vivo com logo, cores, fontes e tom de voz. Component Preview aplica os tokens em componentes reais antes de codar. Export Hub centraliza todos os formatos de exportação, incluindo Tailwind, vars CSS e Figma Variables JSON, ou gera uma página pública compartilhável da marca.",
                content_en: "Each feature was designed to eliminate a manual step from the visual identity creation flow. Token Studio creates and exports design tokens in JSON, CSS, and Tailwind config. Palette Generator generates harmonic palettes from a seed color with automatic light/dark modes. Brand Brief is a living document with logo, colors, typography, and tone of voice. Component Preview applies tokens to real components before coding. Export Hub centralizes all export formats, such as Tailwind, CSS vars, and Figma Variables JSON, or generates a public shareable brand page.",
                highlights: [
                    "Token Studio: exporta JSON, CSS vars e Tailwind config prontos para usar",
                    "Palette Generator: paleta harmônica com escala de tons light/dark a partir de uma cor seed",
                    "Brand Brief: documento vivo com logo, cores, tipografia, tom de voz e exemplos de uso",
                    "Component Preview: botões, cards e inputs renderizados com os tokens da marca em tempo real",
                    "Export Hub: Tailwind config, CSS vars, Figma Variables JSON ou página pública da marca"
                ],
                highlights_en: [
                    "Token Studio: exports JSON, CSS vars, and Tailwind config ready to use",
                    "Palette Generator: harmonic palette with light/dark tone scale from a seed color",
                    "Brand Brief: living document with logo, colors, typography, tone of voice and usage examples",
                    "Component Preview: buttons, cards and inputs rendered with brand tokens in real time",
                    "Export Hub: Tailwind config, CSS vars, Figma Variables JSON or public brand page"
                ]
            },
            {
                title: "Modelo de Negócio & Arquitetura",
                title_en: "Business Model & Architecture",
                type: "text",
                content: "Construído inteiramente com AI coding (Claude como pair programmer do scaffolding ao deploy). Stack: Next.js 14 (App Router), Prisma + PostgreSQL para persistência de BrandSystems, Palettes, ExportLogs e SharedPages, Claude API para geração de sugestões de tokens e Brand Brief, Vercel para deploy contínuo. O modelo freemium limita o Free a 1 brand system e 3 paletas sem export, o que é suficiente para experimentar, mas insuficiente para escalar. O PRO (R$39/mês) libera tudo: brand systems ilimitados, Export Hub completo e SharedPages públicas.",
                content_en: "Built entirely with AI coding (Claude as pair programmer from scaffolding to deployment). Stack: Next.js 14 (App Router), Prisma + PostgreSQL for BrandSystems, Palettes, ExportLogs, and SharedPages persistence, Claude API for token suggestions and Brand Brief generation, Vercel for continuous deployment. The freemium model limits Free to 1 brand system and 3 palettes without export, which is enough to experiment, not enough to scale. PRO (R$39/month) unlocks everything: unlimited brand systems, full Export Hub, and public SharedPages.",
                images: [
                    {
                        src: "/images/projects/sigil/pricing.png",
                        caption: "Modelo de preços: Free R$0 com limites, PRO R$39/mês com trial de 14 dias",
                        fullWidth: true,
                        width: 1135,
                        height: 595
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "2", label: "dias do zero ao deploy" },
                    { value: "5", label: "features no lançamento" },
                    { value: "R$0", label: "plano gratuito com brand system completo" }
                ],
                metrics_en: [
                    { value: "2", label: "days from zero to deploy" },
                    { value: "5", label: "features at launch" },
                    { value: "R$0", label: "free plan with complete brand system" }
                ],
                content: "O principal aprendizado foi sobre o valor de fechar o ciclo. Ferramentas de paleta existem aos montes, mas o diferencial do Sigil é conectar cor seed → tokens → exportação em código em um fluxo único. A decisão de incluir Component Preview foi a mais importante: ver os tokens funcionando em componentes reais, antes de exportar, reduziu drasticamente a fricção de adoção. O modelo de 14 dias de trial ilimitado foi escolhido para garantir que o usuário chegue ao 'aha moment', que só acontece quando ele exporta e vê o Tailwind config funcionando no projeto dele.",
                content_en: "The key learning was about the value of closing the loop. Palette tools are a dime a dozen, but Sigil's differentiator is connecting seed color, tokens, and code export in a single flow. The decision to include Component Preview was the most important one: seeing tokens working in real components, before exporting, dramatically reduced adoption friction. The 14-day unlimited trial model was chosen to ensure users reach the 'aha moment', which only happens when they export and see the Tailwind config working in their own project."
            }
        ]
    },
    {
        id: 3,
        slug: "sustenta-plus-app-ux-design",
        src: "/images/projects/sustentamais_full2.jpg",
        category: "UX/UI Design",
        title: "Sustenta+",
        tagline: "App mobile com IA para reduzir desperdício e planejar a alimentação.",
        tagline_en: "AI-powered mobile app to reduce food waste and plan meals smarter.",
        description: "Aplicativo mobile com IA para gerenciamento inteligente de compras e consumo de alimentos. O app prevê necessidades, reduz o desperdício e promove uma alimentação mais saudável e econômica, conectando tecnologia ao dia a dia da cozinha.",
        description_en: "AI-powered mobile app for intelligent food shopping and consumption management. The app predicts needs, reduces waste, and promotes healthier, more economical eating, connecting technology to everyday kitchen routines.",
        year: "2023",
        role: "UX Designer & Researcher",
        timeline: "3 meses",
        team: "7 integrantes",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Miro"],
        prototypeLink: "https://www.figma.com/proto/IEQMzJVFMRJ5gMPQ7lAsX2/Prot%C3%B3tipo?node-id=62-1369&starting-point-node-id=62%3A1369&t=N0QqFqUBLfg7T0Y9-1",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil está entre os 10 países que mais desperdiçam alimentos no mundo. No dia a dia, o problema é ainda mais concreto: geladeiras cheias de itens esquecidos, compras impulsivas sem planejamento e dificuldade em manter uma dieta equilibrada em rotinas corridas. A falta de uma ferramenta que centralizasse o controle do que se compra, consome e descarta tornava o gerenciamento da alimentação algo invisível e caro.",
                content_en: "Brazil is among the top 10 food-wasting countries in the world. In daily life, the problem is even more concrete: fridges full of forgotten items, impulse purchases without planning, and difficulty maintaining a balanced diet in busy routines. The lack of a tool to centralize what is bought, consumed, and discarded made food management invisible and costly."
            },
            {
                title: "Pesquisa & Descoberta",
                title_en: "Research & Discovery",
                type: "research",
                methods: ["Entrevistas com usuários", "Benchmark competitivo", "Mapa de empatia", "Proto-persona"],
                methods_en: ["User interviews", "Competitive benchmark", "Empathy map", "Proto-persona"],
                content: "Realizamos pesquisa qualitativa com usuários de diferentes perfis para entender os padrões de compra e consumo de alimentos. O benchmark mapeou apps como Kitchee It, No Waste, Mealime e Nosh, identificando lacunas no mercado brasileiro. A partir das entrevistas, construímos uma proto-persona (Ana, dona de casa, 40 anos, São Paulo) e um mapa de empatia que revelou o gap entre intenção e comportamento real na cozinha.",
                content_en: "We conducted qualitative research with users of different profiles to understand food buying and consumption patterns. The benchmark mapped apps like Kitchee It, No Waste, Mealime, and Nosh, identifying gaps in the Brazilian market. From the interviews, we built a proto-persona (Ana, housewife, 40, São Paulo) and an empathy map that revealed the gap between intention and real behavior in the kitchen.",
                highlights: [
                    "Usuários não sabem o que têm na geladeira ao fazer a lista de compras",
                    "Datas de validade são ignoradas até o alimento estragar",
                    "Dietas fracassam por falta de planejamento prático, não de vontade",
                    "A barreira de entrada (registrar compras) precisa ser mínima para o app ser adotado"
                ],
                highlights_en: [
                    "Users don't know what's in the fridge when making the shopping list",
                    "Expiration dates are ignored until food goes bad",
                    "Diets fail due to lack of practical planning, not willpower",
                    "The entry barrier (registering purchases) must be minimal for the app to be adopted"
                ],
                images: [
                    {
                        src: "/images/projects/sustenta/benchmark.png",
                        caption: "Benchmark competitivo: Kitchee It, No Waste, Mealime e Nosh",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Processo de Design",
                title_en: "Design Process",
                type: "text",
                content: "Partimos das descobertas de pesquisa para construir a proto-persona e o mapa de empatia que guiaram todas as decisões de design. O mapa revelou que Ana precisa de organização, não de motivação, pois ela já quer evitar desperdício e só falta uma ferramenta que reduza o atrito do planejamento. O fluxo principal foi definido priorizando o menor atrito no registro de itens: câmera para ler nota fiscal, listas pré-populadas e sugestões inteligentes.",
                content_en: "We moved from research findings to build the proto-persona and empathy map that guided all design decisions. The map revealed that Ana needs organization, not motivation, since she already wants to avoid waste and just lacks a tool that reduces planning friction. The main flow was defined prioritizing the lowest friction in item registration: camera to read fiscal receipts, pre-populated lists, and smart suggestions.",
                images: [
                    {
                        src: "/images/projects/sustenta/persona.png",
                        caption: "Proto-persona: Ana, Dona de Casa, 40 anos",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    },
                    {
                        src: "/images/projects/sustenta/mapa-empatia.png",
                        caption: "Mapa de empatia: dores, ganhos, comportamentos e necessidades",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Solução",
                title_en: "Solution",
                type: "text",
                content: "O Sustenta+ atua como um assistente de alimentação que aprende com o usuário ao longo do tempo. O app permite registrar compras por leitura de nota fiscal, monitora o estoque em casa, alerta sobre vencimentos, sugere receitas com o que já está disponível e gera listas de compra personalizadas baseadas no histórico e na dieta do usuário.",
                content_en: "Sustenta+ acts as a food assistant that learns from the user over time. The app allows registering purchases by reading fiscal receipts, monitors home inventory, alerts on expiration dates, suggests recipes from available items, and generates personalized shopping lists based on the user's history and diet.",
                images: [
                    {
                        src: "/images/projects/sustenta/telas-dark.png",
                        caption: "Telas do protótipo: lista de alimentos, adição por nota fiscal e detalhes de item",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "4", label: "integrantes na equipe" },
                    { value: "2", label: "rodadas de refinamento" },
                    { value: "1", label: "protótipo navegável validado" }
                ],
                metrics_en: [
                    { value: "4", label: "team members" },
                    { value: "2", label: "refinement rounds" },
                    { value: "1", label: "validated navigable prototype" }
                ],
                content: "O protótipo foi validado com usuários e apresentado para banca avaliadora. O principal aprendizado foi sobre o trade-off entre riqueza de dados e facilidade de onboarding: quanto mais o app sabe sobre o usuário, mais inteligente ele fica, mas isso exige um esforço inicial de cadastro. A solução foi dividir o onboarding em etapas progressivas, com valor entregue desde o primeiro acesso.",
                content_en: "The prototype was validated with users and presented to an evaluation panel. The key learning was about the trade-off between data richness and onboarding ease: the more the app knows about the user, the smarter it becomes, but it requires an initial registration effort. The solution was to split onboarding into progressive steps, delivering value from the first access."
            }
        ]
    },
    {
        id: 4,
        slug: "website-makeup-design",
        src: "/images/projects/estiloia_full.jpg",
        category: "UX/UI Design",
        title: "Estilo.ia",
        tagline: "Consultoria de moda personalizada por IA, testada em A/B com usuários reais.",
        tagline_en: "AI-powered fashion consulting, A/B tested with real users.",
        description: "App de consultoria de moda personalizada guiada por inteligência artificial. O projeto explorou como capturar o estilo pessoal de forma envolvente e não-intrusiva, testando dois modelos de questionário visual em formato A/B com usuários reais.",
        description_en: "AI-guided personalized fashion consulting app. The project explored how to capture personal style in an engaging and non-intrusive way, testing two visual questionnaire models in A/B format with real users.",
        year: "2023",
        role: "UX Designer & Researcher",
        timeline: "3 meses",
        team: "6 integrantes",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Miro"],
        prototypeLinks: [
            {
                label: "Modelo A: Moodboard",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=0%3A1&type=design&node-id=244-2467"
            },
            {
                label: "Modelo B: Escolha Binária",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=52%3A2&type=design&node-id=244-3324"
            }
        ],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Muitas pessoas têm dificuldade com seu estilo pessoal e gostariam de orientação para se vestir melhor, mas consultoria de moda profissional é muitas vezes cara e inacessível. Em pesquisa com potenciais usuários: 69% gostariam de ajuda para se vestir, 69% valorizariam uma avaliação personalizada e 61% veem consultoria como boa ideia. O desafio de design era outro: como uma IA aprende o estilo de alguém de forma natural, visual e sem fricção?",
                content_en: "Many people struggle with their personal style and would like guidance on dressing better, but professional fashion consulting is often expensive and inaccessible. In research with potential users: 69% would like help with dressing, 69% would value a personalized evaluation, and 61% see consulting as a good idea. The design challenge was different: how does an AI learn someone's style in a natural, visual, frictionless way?"
            },
            {
                title: "Escopo & Hipóteses",
                title_en: "Scope & Hypotheses",
                type: "research",
                methods: ["Benchmarking (Pinterest, Stitch Fix, Zalando)", "Análise de padrões de onboarding com IA"],
                methods_en: ["Benchmarking (Pinterest, Stitch Fix, Zalando)", "AI onboarding pattern analysis"],
                content: "A jornada completa do app envolve: questionário → cadastro de roupas → sugestões de looks → provador virtual → compra externa. Nosso foco foi exclusivamente o questionário inicial, que é a etapa que alimenta toda a personalização da IA. Para coletar dados de qualidade (intenção, estilo pessoal, medidas), precisávamos que o usuário não percebesse isso como coleta de dados, mas como autodescoberta de estilo.",
                content_en: "The complete app journey involves: questionnaire → wardrobe registration → look suggestions → virtual fitting room → external purchase. Our focus was exclusively on the initial questionnaire, the step that feeds all AI personalization. To collect quality data (intent, personal style, measurements), we needed the user to experience it not as data collection, but as style self-discovery.",
                highlights: [
                    "Imagens funcionam melhor que texto para transmitir a ideia de um estilo",
                    "Respostas não binárias (grau de compatibilidade) dão mais segurança ao usuário",
                    "Entender a intenção de uso (trabalho, festa, autoconhecimento) é tão importante quanto as preferências estéticas"
                ],
                highlights_en: [
                    "Images work better than text to convey the idea of a style",
                    "Non-binary responses (compatibility degree) give the user more confidence",
                    "Understanding usage intent (work, party, self-knowledge) is as important as aesthetic preferences"
                ]
            },
            {
                title: "Teste A/B com Usuários Reais",
                title_en: "A/B Test with Real Users",
                type: "research",
                methods: ["Testes moderados gravados", "5 participantes por modelo", "Análise qualitativa pós-teste"],
                methods_en: ["Recorded moderated tests", "5 participants per model", "Post-test qualitative analysis"],
                content: "Desenvolvemos dois protótipos navegáveis. Modelo A: moodboard interativo, onde o usuário arrasta peças que vão sendo sugeridas de acordo com suas escolhas. Modelo B: escolha binária estilo Tinder, curtindo ou descartando looks, com novos modelos sendo sugeridos adaptativamente. 10 usuários testaram os protótipos, 5 por modelo.",
                content_en: "We developed two navigable prototypes. Modelo B foi mais intuitivo, pois o mecanismo de swipe já é um padrão mental estabelecido. A variedade de categorias, que inclui paletas, estampas e objetos, deu segurança ao usuário de que seu estilo seria compreendido. Visualizar o resumo de todas as escolhas ao final foi valorizado em ambos os modelos. Usuários do Modelo A relataram dificuldade em entender o funcionamento, já que a curva de aprendizado foi um obstáculo.",
                highlights: [
                    "Modelo B foi mais intuitivo, pois o mecanismo de swipe já é um padrão mental estabelecido",
                    "Imagens grandes (Modelo B) foram mais valorizadas do que peças em miniatura (Modelo A)",
                    "A variedade de categorias, que inclui paletas, estampas e objetos, deu segurança ao usuário de que seu estilo seria compreendido",
                    "Visualizar o resumo de todas as escolhas ao final foi valorizado em ambos os modelos",
                    "Usuários do Modelo A relataram dificuldade em entender o funcionamento, já que a curva de aprendizado foi um obstáculo"
                ],
                highlights_en: [
                    "Model B was more intuitive, as the swipe mechanism is already an established mental model",
                    "Large images (Model B) were more valued than miniature pieces (Model A)",
                    "The variety of categories, including palettes, patterns, and objects, gave users confidence that their style would be understood",
                    "Seeing a summary of all choices at the end was valued in both models",
                    "Model A users reported difficulty understanding how it worked, as the learning curve was an obstacle"
                ],
                images: [
                    {
                        src: "/images/projects/estiloia/comparacao-ab.png",
                        caption: "Modelo A (moodboard) × Modelo B (escolha binária), um comparativo dos protótipos testados",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Fluxo Recomendado",
                title_en: "Recommended Flow",
                type: "text",
                content: "O fluxo validado combina o melhor dos dois modelos: onboarding com perguntas de intenção (buscar referências, autoconhecimento, me sentir mais confiante, destaque profissional), seguido de escolha binária visual para estilo (paleta de cores, estampas, peças específicas, objetos associados ao estilo) e coleta progressiva de medidas corporais. A jornada transforma coleta de dados em autodescoberta, onde o usuário não apenas responde a perguntas, mas constrói seu perfil de estilo.",
                content_en: "The validated flow combines the best of both models: onboarding with intent questions (find references, self-knowledge, feel more confident, professional standout), followed by visual binary style choice (color palette, patterns, specific pieces, style-associated objects), and progressive body measurement collection. The journey transforms data collection into self-discovery, so the user doesn't just answer questions, they build their style profile.",
                images: [
                    {
                        src: "/images/projects/estiloia/fluxo-tinder.png",
                        caption: "Fluxo recomendado com splash, intenção, objetivo, paleta de cor e estampa",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    },
                    {
                        src: "/images/projects/estiloia/fluxo-medidas.png",
                        caption: "Continuação do fluxo com a seleção de peças, moodboard final e coleta de medidas",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "10", label: "usuários testados" },
                    { value: "2", label: "modelos A/B comparados" },
                    { value: "69%", label: "dos usuários querem ajuda com estilo" }
                ],
                metrics_en: [
                    { value: "10", label: "users tested" },
                    { value: "2", label: "A/B models compared" },
                    { value: "69%", label: "of users want style help" }
                ],
                content: "O projeto demonstrou que o design do processo de coleta de dados é, ele mesmo, um produto. A principal recomendação resultante: usar imagens em vez de palavras para entender preferências; possibilitar ao usuário ver todas as suas escolhas juntas; usar grande variedade de categorias além de roupas; questionar sobre intenção antes de estilo; e permitir ao usuário colocar suas medidas para sugestões mais precisas.",
                content_en: "The project demonstrated that the design of the data collection process is itself a product. The main resulting recommendation: use images instead of words to understand preferences; let users see all their choices together; use a wide variety of categories beyond clothing; ask about intent before style; and allow users to input their measurements for more precise suggestions."
            }
        ]
    },
    {
        id: 5,
        slug: "roteiro-de-viagens-colaborativo",
        src: "/images/projects/roteiro_viagens_full.jpg",
        category: "UX/UI Design",
        title: "Rotera",
        tagline: "Planejamento colaborativo de viagens em grupo, do wireframe ao protótipo.",
        tagline_en: "Collaborative group trip planning, from wireframe to navigable prototype.",
        description: "Aplicativo mobile para planejamento colaborativo de viagens em grupo. O projeto explorou como tornar a co-criação de roteiros algo fluido e social, desde a ideação em sketches até o protótipo navegável, passando por arquitetura da informação, wireframes e testes.",
        description_en: "Mobile app for collaborative group trip planning. The project explored how to make co-creating itineraries fluid and social, from ideation sketches to a navigable prototype, through information architecture, wireframes, and testing.",
        year: "2024",
        role: "UX Designer & Researcher",
        timeline: "4 meses",
        team: "Solo",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Whimsical"],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Planejar uma viagem em grupo é caótico. As decisões se perdem em grupos de WhatsApp, planilhas compartilhadas e threads intermináveis de mensagens. Aplicativos de viagem existentes foram projetados para usuários individuais, nenhum resolve bem o desafio da colaboração real: múltiplas pessoas contribuindo, com permissões diferentes, visualizando e editando o mesmo roteiro em tempo real.",
                content_en: "Planning a group trip is chaotic. Decisions get lost in WhatsApp groups, shared spreadsheets, and endless message threads. Existing travel apps were designed for individual users, none solve the real collaboration challenge well: multiple people contributing, with different permissions, viewing and editing the same itinerary in real time."
            },
            {
                title: "Pesquisa & Descoberta",
                title_en: "Research & Discovery",
                type: "research",
                methods: ["Mapa conceitual de domínio", "Benchmarking de apps", "Tabela Problema-Solução", "Análise de padrões de design"],
                methods_en: ["Domain concept map", "App benchmarking", "Problem-Solution table", "Design pattern analysis"],
                content: "Mapeei o domínio completo do problema, desde o planejamento pré-viagem até o compartilhamento pós-viagem. O benchmark incluiu TripAdvisor, Google Trips, Roadtrippers e Wanderlog, identificando que nenhum resolve colaboração com controle de permissões.",
                content_en: "I mapped the complete problem domain, from pre-trip planning to post-trip sharing. The benchmark included TripAdvisor, Google Trips, Roadtrippers, and Wanderlog, identifying that none solve collaboration with permission control.",
                highlights: [
                    "Usuários usam WhatsApp + planilha + app de mapas simultaneamente para planejar",
                    "O 'dono' do roteiro vira gargalo: qualquer mudança passa por ele",
                    "Visualização em mapa é essencial para entender a sequência do itinerário",
                    "Pós-viagem é frequentemente ignorado pelos apps, no qual memórias e fotos se perdem"
                ],
                highlights_en: [
                    "Users simultaneously use WhatsApp + spreadsheet + maps app to plan",
                    "The itinerary 'owner' becomes a bottleneck: any change goes through them",
                    "Pós-viagem é frequentemente ignorado pelos apps, fazendo com que memórias e fotos se percam",
                    "Post-trip is often ignored by apps, causing memories and photos to get lost"
                ]
            },
            {
                title: "Arquitetura da Informação",
                title_en: "Information Architecture",
                type: "text",
                content: "Construí o sitegrama partindo dos fluxos críticos: criação do roteiro, colaboração em tempo real e pós-viagem. A home centraliza acesso ao roteiro atual e a viagens passadas, uma decisão diferente da maioria dos apps que abrem no perfil do usuário. O controle de permissões (editor, visualizador) foi desenhado como funcionalidade de primeira classe, não um menu escondido.",
                content_en: "I built the sitemap starting from critical flows: itinerary creation, real-time collaboration, and post-trip. The home centralizes access to the current itinerary and past trips, a different decision from most apps that open on the user profile. Permission control (editor, viewer) was designed as a first-class feature, not a hidden menu.",
                images: [
                    {
                        src: "/images/projects/roteiro/sitegrama.png",
                        caption: "Arquitetura da informação via sitegrama com fluxos principais",
                        fullWidth: true,
                        width: 1400,
                        height: 1000
                    }
                ]
            },
            {
                title: "Jornada & Ideação",
                title_en: "Journey & Ideation",
                type: "text",
                content: "A jornada do usuário revelou os momentos de maior fricção no planejamento colaborativo, especialmente na transição entre 'decidir o destino' e 'montar o itinerário detalhado'. Os sketches exploraram diferentes abordagens para o cadastro do roteiro e para a tela de convite de colaboradores.",
                content_en: "The user journey revealed the highest-friction moments in collaborative planning, especially in the transition from 'deciding on the destination' to 'building the detailed itinerary'. Sketches explored different approaches to itinerary registration and the collaborator invite screen.",
                images: [
                    {
                        src: "/images/projects/roteiro/jornada.png",
                        caption: "Jornada do usuário",
                        fullWidth: true,
                        width: 1400,
                        height: 500
                    },
                    {
                        src: "/images/projects/roteiro/sketches-1.png",
                        caption: "Primeiros sketches com telas de home e seleção de atividades",
                        width: 800,
                        height: 500
                    },
                    {
                        src: "/images/projects/roteiro/sketches-2.png",
                        caption: "Sketches: criação de roteiro e categorias",
                        width: 800,
                        height: 500
                    }
                ]
            },
            {
                title: "Wireframes",
                title_en: "Wireframes",
                type: "text",
                content: "Os wireframes foram desenvolvidos com foco nas telas de maior complexidade: home com múltiplos itinerários, fluxo de criação de roteiro em etapas, gerenciamento de colaboradores com níveis de permissão e visualização do itinerário por dia. Cada tela passou por revisão com base nos feedbacks da arquitetura.",
                content_en: "Wireframes were developed focusing on the most complex screens: home with multiple itineraries, step-by-step itinerary creation flow, collaborator management with permission levels, and day-by-day itinerary view. Each screen went through revision based on architecture feedback.",
                images: [
                    {
                        src: "/images/projects/roteiro/tela-01.png",
                        caption: "Home com itinerários e descoberta",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-02.png",
                        caption: "Seleção de atividades",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-03.png",
                        caption: "Criação do roteiro",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-04.png",
                        caption: "Convidar colaboradores",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-05.png",
                        caption: "Permissões de acesso",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-06.png",
                        caption: "Detalhes da viagem",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-07.png",
                        caption: "Itinerário em tempo real",
                        width: 390,
                        height: 700
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Design Visual & Protótipo",
                title_en: "Visual Design & Prototype",
                type: "text",
                content: "O design visual adotou uma identidade limpa com foco em conteúdo: cards de destino com imagens de alta qualidade, hierarquia tipográfica clara e uma paleta que não compete com as fotos das viagens. O fluxo de criação de roteiro foi comprimido em duas telas (seleção de preferências e detalhes da viagem), reduzindo a fricção de entrada para o primeiro uso.",
                content_en: "The visual design adopted a clean identity focused on content: destination cards with high-quality images, clear typographic hierarchy, and a palette that doesn't compete with travel photos. The itinerary creation flow was compressed into two screens (preference selection and trip details), reducing first-use entry friction.",
                images: [
                    {
                        src: "/images/projects/rotera/hifi-home.png",
                        caption: "Home com seus roteiros e destinos populares",
                        width: 393,
                        height: 852
                    },
                    {
                        src: "/images/projects/rotera/hifi-preferencias.png",
                        caption: "Novo roteiro com a seleção de preferências",
                        width: 393,
                        height: 852
                    },
                    {
                        src: "/images/projects/rotera/hifi-detalhes.png",
                        caption: "Detalhes da viagem com os destinos e datas",
                        width: 393,
                        height: 852
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "4", label: "meses de projeto" },
                    { value: "7", label: "wireframes detalhados" },
                    { value: "3", label: "rodadas de revisão" }
                ],
                metrics_en: [
                    { value: "4", label: "months of project" },
                    { value: "7", label: "detailed wireframes" },
                    { value: "3", label: "revision rounds" }
                ],
                content: "O projeto resultou em uma solução coesa com navegação fluida e colaboração como feature central, não apenas como uma adição. O principal aprendizado foi sobre nomenclatura e arquitetura: o uso dos termos 'itinerário' e 'roteiro' de forma intercambiável causava confusão no fluxo. A decisão de simplificar para apenas 'roteiro' e 'viagem' clarificou toda a hierarquia de informação do app.",
                content_en: "The project resulted in a cohesive solution with fluid navigation and collaboration as a central feature, rather than a simple addition. The key learning was about naming and architecture: using 'itinerary' and 'route' interchangeably caused confusion in the flow. The decision to simplify to just 'route' and 'trip' clarified the entire information hierarchy of the app."
            }
        ]
    },
    {
        id: 6,
        externalLink: "https://bentos-next-1cvne4g5k-tamburros-projects.vercel.app/pix-tudo-ux.html",
        src: "/images/projects/pixtudo_full.jpg",
        category: "UX Research",
        title: "PixTudo",
        tagline: "Pesquisa de mercado, personas, jornadas e arquitetura de UX para o Alipay do Brasil.",
        tagline_en: "Market research, personas, journeys and UX architecture for Brazil's Alipay.",
        year: "2025",
        role: "UX Researcher",
    },
    {
        id: 7,
        externalLink: "https://bentos-next-1cvne4g5k-tamburros-projects.vercel.app/zap-ux-research.html",
        src: "/images/projects/zapvida_full.jpg",
        category: "UX Research",
        title: "ZapVida",
        tagline: "Pesquisa e design de um super-app nacional com Pix nativo, gov digital e mini-apps.",
        tagline_en: "Research and design of a national super-app with native Pix, digital gov and mini-apps.",
        year: "2025",
        role: "UX Researcher",
    },
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};
