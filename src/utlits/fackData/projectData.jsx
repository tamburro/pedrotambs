// src/utlits/fackData/projectData.js

export const projectsData = [
    {
        id: 1,
        slug: "listaai-gerador-de-descricoes",
        src: "/images/projects/listaai/landing-hero.png",
        category: "Product & AI Engineering",
        title: "ListaAI",
        description: "Gerador de títulos e descrições otimizadas para Mercado Livre e Shopee, movido por IA. Vendedores colam o nome do produto e as especificações técnicas — o app entrega título com palavras-chave de alto volume e descrição completa pronta para publicar, em segundos.",
        year: "2025",
        role: "Product Designer & AI Engineer",
        timeline: "2 dias",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Claude API", "Next.js", "Prisma", "Vercel"],
        liveDemoLink: "https://listaai.vercel.app/",
        sections: [
            {
                title: "O Problema",
                type: "text",
                content: "O Brasil tem mais de 12 milhões de vendedores ativos em marketplaces — a maioria microempreendedores e pequenos lojistas que publicam produtos manualmente. Escrever um título e uma descrição eficaz para marketplace não é trivial: envolve conhecer os algoritmos de busca de cada plataforma, usar as palavras-chave certas e estruturar a informação em um formato que converta. A realidade da maioria dos vendedores: descrições genéricas copiadas do fornecedor, títulos mal otimizados e horas perdidas por semana em conteúdo de produto. O custo de uma descrição ruim é direto — menos visibilidade, menos conversão, menos vendas."
            },
            {
                title: "Pesquisa de Mercado",
                type: "research",
                methods: ["Análise de comportamento em fóruns de vendedores", "Benchmark de ferramentas existentes", "Mapeamento de dores via comunidades (Facebook, Reddit, WhatsApp)"],
                content: "A demanda por ferramentas de copywriting para marketplace no Brasil é alta e subatendida. Ferramentas genéricas como ChatGPT exigem que o vendedor monte prompts, interprete saídas e adapte o tom — uma barreira para quem não tem familiaridade com IA. Soluções específicas para Mercado Livre são escassas e, quando existem, focam em precificação ou gestão de estoque, não em conteúdo. O ponto de entrada ideal identificado: um fluxo de 3 campos (nome, especificações, plataforma) → resultado em <10 segundos.",
                highlights: [
                    "Vendedores perdem de 30 a 60 minutos por dia só escrevendo descrições de produtos",
                    "Títulos mal escritos são a principal causa de baixo ranqueamento orgânico em marketplaces",
                    "A maioria dos vendedores não sabe quais palavras-chave usar — e não tem tempo para pesquisar",
                    "ChatGPT já é usado por parte dos vendedores, mas o atrito do prompt livre é uma barreira real",
                    "Mercado Livre e Shopee têm regras e formatos distintos — uma ferramenta que entende isso tem vantagem clara"
                ],
                images: [
                    {
                        src: "/images/projects/listaai/landing-hero.png",
                        caption: "Landing page — proposta de valor para vendedores brasileiros",
                        fullWidth: true,
                        width: 1350,
                        height: 734
                    }
                ]
            },
            {
                title: "Solução & Produto",
                type: "text",
                content: "O ListaAI foi construído com um fluxo de uso minimalista: o vendedor informa nome do produto, especificações técnicas, plataforma alvo (Mercado Livre ou Shopee) e tom de voz preferido. A IA gera título otimizado com palavras-chave de alto volume e uma descrição completa formatada para a plataforma escolhida. O resultado pode ser regenerado com um clique, copiado diretamente e fica salvo no histórico. Cada detalhe do produto foi pensado para reduzir o atrito ao máximo — o vendedor não precisa entender de IA para usar.",
                images: [
                    {
                        src: "/images/projects/listaai/features.png",
                        caption: "Funcionalidades — geração por plataforma, tom de voz, SEO embutido e mais",
                        fullWidth: true,
                        width: 1343,
                        height: 704
                    },
                    {
                        src: "/images/projects/listaai/como-funciona.png",
                        caption: "Como funciona — 3 passos: specs, plataforma/tom, copiar e publicar",
                        fullWidth: true,
                        width: 1338,
                        height: 441
                    }
                ]
            },
            {
                title: "Funcionalidades",
                type: "research",
                methods: ["Geração por plataforma", "Seleção de tom de voz", "SEO embutido", "Regeneração inteligente", "Histórico completo"],
                content: "Cada funcionalidade foi priorizada com base em uma pergunta: isso reduz o tempo do vendedor ou aumenta a qualidade do resultado? Geração separada por plataforma garante que o output respeite as regras e formatos do Mercado Livre e da Shopee. Tom de voz ajusta a descrição de formal a descontraído. SEO embutido — sem configuração extra — analisa as especificações e escolhe termos com melhor potencial de ranqueamento. Regeneração inteligente permite variar o resultado sem redigitar os dados. O histórico completo devolve ao vendedor o controle sobre o que foi gerado.",
                highlights: [
                    "Geração por plataforma — output adaptado às regras de cada marketplace",
                    "Tom de voz configurável — formal, técnico, descontraído ou persuasivo",
                    "SEO embutido — palavras-chave de alto volume inseridas automaticamente no título",
                    "Regeneração inteligente — novo resultado com um clique, sem reescrever os dados",
                    "Histórico completo — todas as descrições salvas e acessíveis no dashboard"
                ],
                images: [
                    {
                        src: "/images/projects/listaai/dashboard.png",
                        caption: "Dashboard — plano, descrições do mês e histórico recente",
                        width: 489,
                        height: 846
                    },
                    {
                        src: "/images/projects/listaai/nova-descricao.png",
                        caption: "Nova descrição — nome, specs, plataforma e tom de voz",
                        width: 484,
                        height: 864
                    },
                    {
                        src: "/images/projects/listaai/historico.png",
                        caption: "Histórico — todas as descrições geradas com badges de plataforma",
                        width: 486,
                        height: 856
                    },
                    {
                        src: "/images/projects/listaai/perfil.png",
                        caption: "Perfil — informações da conta e plano atual",
                        width: 494,
                        height: 839
                    },
                    {
                        src: "/images/projects/listaai/assinatura.png",
                        caption: "Assinatura — upgrade para PRO direto pelo app",
                        width: 495,
                        height: 849
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Arquitetura & Tecnologia",
                type: "text",
                content: "O produto foi inteiramente construído com AI coding — Claude como pair programmer em todas as etapas, do scaffolding ao deploy. Stack: Next.js 14 (App Router) no frontend, API Routes para o backend, Prisma + PostgreSQL para persistência de dados e histórico, Claude API (claude-sonnet) para geração de conteúdo, e Vercel para deploy contínuo. O prompt de geração foi o artefato mais iterado: cada versão foi testada com produtos reais de diferentes categorias — eletrônicos, moda, casa — até atingir consistência na qualidade do output.",
                images: [
                    {
                        src: "/images/projects/listaai/pricing.png",
                        caption: "Modelo freemium — Free R$0 com 5 descrições/mês · PRO R$39/mês ilimitado",
                        fullWidth: true,
                        width: 1340,
                        height: 559
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                type: "outcomes",
                metrics: [
                    { value: "2", label: "dias do zero ao deploy" },
                    { value: "3", label: "plataformas suportadas (ML, Shopee, genérico)" },
                    { value: "R$0", label: "plano gratuito com 5 descrições/mês" }
                ],
                content: "O principal aprendizado foi sobre a relação entre simplicidade de interface e qualidade de prompt. Quanto mais simples o formulário para o usuário, mais trabalho o prompt precisa fazer para compensar a falta de contexto. A solução foi um sistema de instruções em camadas: o prompt base define o comportamento geral da IA, e variáveis dinâmicas (plataforma, tom, especificações) injetam o contexto específico de cada geração. O modelo freemium (R$0 free / R$39 PRO) foi escolhido para maximizar adoção — o produto se vende pelo primeiro uso."
            }
        ]
    },
    {
        id: 2,
        slug: "sigil-design-system-builder",
        src: "/images/projects/sigil/landing-hero.png",
        category: "Product & AI Engineering",
        title: "Sigil",
        description: "Gerador de sistemas visuais para founders, devs e criadores independentes. Cole uma cor seed — o Sigil gera paleta, tokens de design, guia de estilo e exporta tudo para Tailwind, CSS vars ou Figma Variables. Identidade visual coerente sem abrir o Figma.",
        year: "2025",
        role: "Product Designer & AI Engineer",
        timeline: "2 dias",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Claude API", "Next.js", "Prisma", "Vercel"],
        liveDemoLink: "https://sigil-eight.vercel.app/",
        sections: [
            {
                title: "O Problema",
                type: "text",
                content: "Founders, desenvolvedores e criadores independentes constroem produtos sem designer — e sentem isso a cada tela inconsistente, botão fora do padrão ou paleta improvisada. Ferramentas como Figma, Tokens Studio e Brand.ai foram criadas para designers. Quem constrói sozinho não tem tempo para aprender esses fluxos, nem budget para terceirizar. O resultado prático: projetos com identidade visual fragmentada, ausência de design tokens e incapacidade de escalar o sistema sem retrabalho. O mercado de ferramentas de design system é grande — mas todas assumem um designer no loop."
            },
            {
                title: "Pesquisa de Mercado",
                type: "research",
                methods: ["Análise de comunidades indie hackers e devs solos", "Benchmark de ferramentas (Tokens Studio, Style Dictionary, Coolors, Realtime Colors)", "Mapeamento de dores em fóruns (Reddit, Product Hunt, Twitter/X)"],
                content: "O crescimento de ferramentas no-code e do movimento indie hacker criou uma demanda clara: construtores solo que precisam de coerência visual mas rejeitam fluxos complexos. Tokens Studio e Style Dictionary são poderosos, mas têm curva de aprendizado íngreme e assumem familiaridade com design systems. Coolors e Realtime Colors resolvem paleta, mas não conectam com código. Nenhuma ferramenta fecha o ciclo completo — da cor seed ao arquivo de configuração pronto para uso no projeto.",
                highlights: [
                    "Devs solos gastam horas consistindo cores manualmente entre CSS, Tailwind e componentes",
                    "A maioria dos indie hackers usa 'achismo' visual — escolhem cores sem sistema de tokens",
                    "Design tokens são conhecidos mas raramente implementados por quem não tem designer",
                    "A barreira não é conceitual — é operacional: ninguém quer aprender mais uma ferramenta complexa",
                    "Product Hunt e Reddit mostram demanda alta por 'Tailwind palette generator' e 'brand kit for devs'"
                ],
                images: [
                    {
                        src: "/images/projects/sigil/landing-hero.png",
                        caption: "Landing page — proposta de valor para quem constrói sozinho",
                        fullWidth: true,
                        width: 1898,
                        height: 712
                    }
                ]
            },
            {
                title: "Solução & Produto",
                type: "text",
                content: "O Sigil fecha o ciclo em um fluxo de três passos: escolha uma cor primária, nomeie sua marca, exporte. Internamente, o app gera paleta harmônica com modos claro/escuro, cria um Brand Brief com logo, cores, tipografia e tom de voz, e disponibiliza todos os tokens no Export Hub em múltiplos formatos. O Component Preview exibe os tokens aplicados em botões, cards e inputs reais — para o usuário ver o sistema funcionando antes de escrever uma linha de código.",
                images: [
                    {
                        src: "/images/projects/sigil/features.png",
                        caption: "Features — Token Studio, Palette Generator, Brand Brief, Component Preview e Export Hub",
                        fullWidth: true,
                        width: 1895,
                        height: 702
                    }
                ]
            },
            {
                title: "Funcionalidades",
                type: "research",
                methods: ["Token Studio", "Palette Generator", "Brand Brief", "Component Preview", "Export Hub"],
                content: "Cada feature foi desenhada para eliminar uma etapa manual do fluxo de criação de identidade visual. Token Studio cria e exporta design tokens em JSON, CSS e Tailwind config. Palette Generator gera paletas harmônicas a partir de uma cor seed com modo claro/escuro automático. Brand Brief é um documento vivo com logo, cores, fontes e tom de voz. Component Preview aplica os tokens em componentes reais antes de codar. Export Hub centraliza todos os formatos de exportação — Tailwind, CSS vars, Figma Variables JSON — ou gera uma página pública compartilhável da marca.",
                highlights: [
                    "Token Studio — exporta JSON, CSS vars e Tailwind config prontos para usar",
                    "Palette Generator — paleta harmônica com escala de tons light/dark a partir de uma cor seed",
                    "Brand Brief — documento vivo: logo, cores, tipografia, tom de voz e exemplos de uso",
                    "Component Preview — botões, cards e inputs renderizados com os tokens da marca em tempo real",
                    "Export Hub — Tailwind config, CSS vars, Figma Variables JSON ou página pública da marca"
                ]
            },
            {
                title: "Modelo de Negócio & Arquitetura",
                type: "text",
                content: "Construído inteiramente com AI coding — Claude como pair programmer do scaffolding ao deploy. Stack: Next.js 14 (App Router), Prisma + PostgreSQL para persistência de BrandSystems, Palettes, ExportLogs e SharedPages, Claude API para geração de sugestões de tokens e Brand Brief, Vercel para deploy contínuo. O modelo freemium limita o Free a 1 brand system e 3 paletas sem export — suficiente para experimentar, insuficiente para escalar. O PRO (R$39/mês) libera tudo: brand systems ilimitados, Export Hub completo e SharedPages públicas.",
                images: [
                    {
                        src: "/images/projects/sigil/pricing.png",
                        caption: "Modelo de preços — Free R$0 com limites · PRO R$39/mês com trial de 14 dias",
                        fullWidth: true,
                        width: 1135,
                        height: 595
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                type: "outcomes",
                metrics: [
                    { value: "2", label: "dias do zero ao deploy" },
                    { value: "5", label: "features no lançamento" },
                    { value: "R$0", label: "plano gratuito com brand system completo" }
                ],
                content: "O principal aprendizado foi sobre o valor de fechar o ciclo. Ferramentas de paleta existem aos montes — o diferencial do Sigil é conectar cor seed → tokens → exportação em código em um fluxo único. A decisão de incluir Component Preview foi a mais importante: ver os tokens funcionando em componentes reais, antes de exportar, reduziu drasticamente a fricção de adoção. O modelo de 14 dias de trial ilimitado foi escolhido para garantir que o usuário chegue ao 'aha moment' — que só acontece quando ele exporta e vê o Tailwind config funcionando no projeto dele."
            }
        ]
    },
    {
        id: 3,
        slug: "sustenta-plus-app-ux-design",
        src: "/images/projects/sustentamais_full2.jpg",
        category: "UX/UI Design",
        title: "Sustenta+",
        description: "Aplicativo mobile com IA para gerenciamento inteligente de compras e consumo de alimentos. O app prevê necessidades, reduz o desperdício e promove uma alimentação mais saudável e econômica — conectando tecnologia ao dia a dia da cozinha.",
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
                type: "text",
                content: "O Brasil está entre os 10 países que mais desperdiçam alimentos no mundo. No dia a dia, o problema é ainda mais concreto: geladeiras cheias de itens esquecidos, compras impulsivas sem planejamento e dificuldade em manter uma dieta equilibrada em rotinas corridas. A falta de uma ferramenta que centralizasse o controle do que se compra, consome e descarta tornava o gerenciamento da alimentação algo invisível — e caro."
            },
            {
                title: "Pesquisa & Descoberta",
                type: "research",
                methods: ["Entrevistas com usuários", "Benchmark competitivo", "Mapa de empatia", "Proto-persona"],
                content: "Realizamos pesquisa qualitativa com usuários de diferentes perfis para entender os padrões de compra e consumo de alimentos. O benchmark mapeou apps como Kitchee It, No Waste, Mealime e Nosh, identificando lacunas no mercado brasileiro. A partir das entrevistas, construímos uma proto-persona (Ana, dona de casa, 40 anos, São Paulo) e um mapa de empatia que revelou o gap entre intenção e comportamento real na cozinha.",
                highlights: [
                    "Usuários não sabem o que têm na geladeira ao fazer a lista de compras",
                    "Datas de validade são ignoradas até o alimento estragar",
                    "Dietas fracassam por falta de planejamento prático, não de vontade",
                    "A barreira de entrada (registrar compras) precisa ser mínima para o app ser adotado"
                ],
                images: [
                    {
                        src: "/images/projects/sustenta/benchmark.png",
                        caption: "Benchmark competitivo — Kitchee It, No Waste, Mealime e Nosh",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Processo de Design",
                type: "text",
                content: "Partimos das descobertas de pesquisa para construir a proto-persona e o mapa de empatia que guiaram todas as decisões de design. O mapa revelou que Ana precisa de organização, não de motivação — ela já quer evitar desperdício, só falta uma ferramenta que reduza o atrito do planejamento. O fluxo principal foi definido priorizando o menor atrito no registro de itens: câmera para ler nota fiscal, listas pré-populadas e sugestões inteligentes.",
                images: [
                    {
                        src: "/images/projects/sustenta/persona.png",
                        caption: "Proto-persona — Ana, Dona de Casa, 40 anos",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    },
                    {
                        src: "/images/projects/sustenta/mapa-empatia.png",
                        caption: "Mapa de empatia — dores, ganhos, comportamentos e necessidades",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Solução",
                type: "text",
                content: "O Sustenta+ atua como um assistente de alimentação que aprende com o usuário ao longo do tempo. O app permite registrar compras por leitura de nota fiscal, monitora o estoque em casa, alerta sobre vencimentos, sugere receitas com o que já está disponível e gera listas de compra personalizadas baseadas no histórico e na dieta do usuário.",
                images: [
                    {
                        src: "/images/projects/sustenta/telas-dark.png",
                        caption: "Telas do protótipo — lista de alimentos, adição por nota fiscal e detalhes de item",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                type: "outcomes",
                metrics: [
                    { value: "4", label: "integrantes na equipe" },
                    { value: "2", label: "rodadas de refinamento" },
                    { value: "1", label: "protótipo navegável validado" }
                ],
                content: "O protótipo foi validado com usuários e apresentado para banca avaliadora. O principal aprendizado foi sobre o trade-off entre riqueza de dados e facilidade de onboarding: quanto mais o app sabe sobre o usuário, mais inteligente ele fica — mas exige um esforço inicial de cadastro. A solução foi dividir o onboarding em etapas progressivas, com valor entregue desde o primeiro acesso."
            }
        ]
    },
    {
        id: 4,
        slug: "website-makeup-design",
        src: "/images/projects/estiloia_full.jpg",
        category: "UX/UI Design",
        title: "Estilo.ia",
        description: "App de consultoria de moda personalizada guiada por inteligência artificial. O projeto explorou como capturar o estilo pessoal de forma envolvente e não-intrusiva — testando dois modelos de questionário visual em formato A/B com usuários reais.",
        year: "2023",
        role: "UX Designer & Researcher",
        timeline: "3 meses",
        team: "6 integrantes",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Miro"],
        prototypeLinks: [
            {
                label: "Modelo A — Moodboard",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=0%3A1&type=design&node-id=244-2467"
            },
            {
                label: "Modelo B — Escolha Binária",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=52%3A2&type=design&node-id=244-3324"
            }
        ],
        sections: [
            {
                title: "O Problema",
                type: "text",
                content: "Muitas pessoas têm dificuldade com seu estilo pessoal e gostariam de orientação para se vestir melhor — mas consultoria de moda profissional é cara e inacessível. Em pesquisa com potenciais usuários: 69% gostariam de ajuda para se vestir, 69% valorizariam uma avaliação personalizada e 61% veem consultoria como boa ideia. O desafio de design era outro: como uma IA aprende o estilo de alguém de forma natural, visual e sem fricção?"
            },
            {
                title: "Escopo & Hipóteses",
                type: "research",
                methods: ["Benchmarking (Pinterest, Stitch Fix, Zalando)", "Análise de padrões de onboarding com IA"],
                content: "A jornada completa do app envolve: questionário → cadastro de roupas → sugestões de looks → provador virtual → compra externa. Nosso foco foi exclusivamente o questionário inicial — a etapa que alimenta toda a personalização da IA. Para coletar dados de qualidade (intenção, estilo pessoal, medidas), precisávamos que o usuário não percebesse isso como coleta de dados, mas como autodescoberta de estilo.",
                highlights: [
                    "Imagens funcionam melhor que texto para transmitir a ideia de um estilo",
                    "Respostas não binárias (grau de compatibilidade) dão mais segurança ao usuário",
                    "Entender a intenção de uso (trabalho, festa, autoconhecimento) é tão importante quanto as preferências estéticas"
                ]
            },
            {
                title: "Teste A/B com Usuários Reais",
                type: "research",
                methods: ["Testes moderados gravados", "5 participantes por modelo", "Análise qualitativa pós-teste"],
                content: "Desenvolvemos dois protótipos navegáveis. Modelo A: moodboard interativo — o usuário arrasta peças que vão sendo sugeridas de acordo com suas escolhas. Modelo B: escolha binária estilo Tinder — curtir ou descartar looks, com novos modelos sendo sugeridos adaptativamente. 10 usuários testaram os protótipos, 5 por modelo.",
                highlights: [
                    "Modelo B foi mais intuitivo — o mecanismo de swipe já é um padrão mental estabelecido",
                    "Imagens grandes (Modelo B) foram mais valorizadas do que peças em miniatura (Modelo A)",
                    "A variedade de categorias — paletas, estampas, objetos, não só roupas — deu segurança ao usuário de que seu estilo seria compreendido",
                    "Ver um resumo de todas as escolhas ao final foi valorizado em ambos os modelos",
                    "Usuários do Modelo A relataram dificuldade em entender o funcionamento — a curva de aprendizado foi um obstáculo"
                ],
                images: [
                    {
                        src: "/images/projects/estiloia/comparacao-ab.png",
                        caption: "Modelo A (moodboard) × Modelo B (escolha binária) — comparativo dos protótipos testados",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Fluxo Recomendado",
                type: "text",
                content: "O fluxo validado combina o melhor dos dois modelos: onboarding com perguntas de intenção (buscar referências, autoconhecimento, me sentir mais confiante, destaque profissional), seguido de escolha binária visual para estilo (paleta de cores, estampas, peças específicas, objetos associados ao estilo) e coleta progressiva de medidas corporais. A jornada transforma coleta de dados em autodescoberta — o usuário não responde perguntas, constrói seu perfil de estilo.",
                images: [
                    {
                        src: "/images/projects/estiloia/fluxo-tinder.png",
                        caption: "Fluxo recomendado — splash, intenção, objetivo, paleta de cor, estampa",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    },
                    {
                        src: "/images/projects/estiloia/fluxo-medidas.png",
                        caption: "Continuação do fluxo — seleção de peças, moodboard final e coleta de medidas",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                type: "outcomes",
                metrics: [
                    { value: "10", label: "usuários testados" },
                    { value: "2", label: "modelos A/B comparados" },
                    { value: "69%", label: "dos usuários querem ajuda com estilo" }
                ],
                content: "O projeto demonstrou que o design do processo de coleta de dados é, ele mesmo, um produto. A principal recomendação resultante: usar imagens em vez de palavras para entender preferências; possibilitar ao usuário ver todas as suas escolhas juntas; usar grande variedade de categorias além de roupas; questionar sobre intenção antes de estilo; e permitir ao usuário colocar suas medidas para sugestões mais precisas."
            }
        ]
    },
    {
        id: 5,
        slug: "roteiro-de-viagens-colaborativo",
        src: "/images/projects/roteiro_viagens_full.jpg",
        category: "UX/UI Design",
        title: "Rotera",
        description: "Aplicativo mobile para planejamento colaborativo de viagens em grupo. O projeto explorou como tornar a co-criação de roteiros algo fluido e social — desde a ideação em sketches até o protótipo navegável, passando por arquitetura da informação, wireframes e testes.",
        year: "2024",
        role: "UX Designer & Researcher",
        timeline: "4 meses",
        team: "Solo",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Whimsical"],
        sections: [
            {
                title: "O Problema",
                type: "text",
                content: "Planejar uma viagem em grupo é caótico. As decisões se perdem em grupos de WhatsApp, planilhas compartilhadas e threads interminávies de mensagens. Aplicativos de viagem existentes foram projetados para usuários individuais — nenhum resolve bem o desafio da colaboração real: múltiplas pessoas contribuindo, com permissões diferentes, visualizando e editando o mesmo roteiro em tempo real."
            },
            {
                title: "Pesquisa & Descoberta",
                type: "research",
                methods: ["Mapa conceitual de domínio", "Benchmarking de apps", "Tabela Problema-Solução", "Análise de padrões de design"],
                content: "Mapeei o domínio completo do problema — desde o planejamento pré-viagem até o compartilhamento pós-viagem. O benchmark incluiu TripAdvisor, Google Trips, Roadtrippers e Wanderlog, identificando que nenhum resolve colaboração com controle de permissões.",
                highlights: [
                    "Usuários usam WhatsApp + planilha + app de mapas simultaneamente para planejar",
                    "O 'dono' do roteiro vira gargalo: qualquer mudança passa por ele",
                    "Visualização em mapa é essencial para entender a sequência do itinerário",
                    "Pós-viagem é completamente ignorado pelos apps — memórias e fotos se perdem"
                ]
            },
            {
                title: "Arquitetura da Informação",
                type: "text",
                content: "Construí o sitegrama partindo dos fluxos críticos: criação do roteiro, colaboração em tempo real e pós-viagem. A home centraliza acesso ao roteiro atual e a viagens passadas — decisão diferente da maioria dos apps que abrem no perfil do usuário. O controle de permissões (editor, visualizador) foi desenhado como funcionalidade de primeira classe, não um menu escondido.",
                images: [
                    {
                        src: "/images/projects/roteiro/sitegrama.png",
                        caption: "Arquitetura da informação — sitegrama com fluxos principais",
                        fullWidth: true,
                        width: 1400,
                        height: 1000
                    }
                ]
            },
            {
                title: "Jornada & Ideação",
                type: "text",
                content: "A jornada do usuário revelou os momentos de maior fricção no planejamento colaborativo — especialmente na transição entre 'decidir o destino' e 'montar o itinerário detalhado'. Os sketches exploraram diferentes abordagens para o cadastro do roteiro e para a tela de convite de colaboradores.",
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
                        caption: "Primeiros sketches — telas de home e seleção de atividades",
                        width: 800,
                        height: 500
                    },
                    {
                        src: "/images/projects/roteiro/sketches-2.png",
                        caption: "Sketches — criação de roteiro e categorias",
                        width: 800,
                        height: 500
                    }
                ]
            },
            {
                title: "Wireframes",
                type: "text",
                content: "Os wireframes foram desenvolvidos com foco nas telas de maior complexidade: home com múltiplos itinerários, fluxo de criação de roteiro em etapas, gerenciamento de colaboradores com níveis de permissão e visualização do itinerário por dia. Cada tela passou por revisão com base nos feedbacks da arquitetura.",
                images: [
                    {
                        src: "/images/projects/roteiro/tela-01.png",
                        caption: "Home — itinerários e descoberta",
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
                type: "text",
                content: "O design visual adotou uma identidade limpa com foco em conteúdo: cards de destino com imagens de alta qualidade, hierarquia tipográfica clara e uma paleta que não compete com as fotos das viagens. O fluxo de criação de roteiro foi comprimido em duas telas — seleção de preferências e detalhes da viagem — reduzindo a fricção de entrada para o primeiro uso.",
                images: [
                    {
                        src: "/images/projects/rotera/hifi-home.png",
                        caption: "Home — seus roteiros e destinos populares",
                        width: 393,
                        height: 852
                    },
                    {
                        src: "/images/projects/rotera/hifi-preferencias.png",
                        caption: "Novo roteiro — seleção de preferências",
                        width: 393,
                        height: 852
                    },
                    {
                        src: "/images/projects/rotera/hifi-detalhes.png",
                        caption: "Detalhes da viagem — destinos e datas",
                        width: 393,
                        height: 852
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Resultados & Aprendizados",
                type: "outcomes",
                metrics: [
                    { value: "4", label: "meses de projeto" },
                    { value: "7", label: "wireframes detalhados" },
                    { value: "3", label: "rodadas de revisão" }
                ],
                content: "O projeto resultou em uma solução coesa com navegação fluida e colaboração como feature central — não como adição. O principal aprendizado foi sobre nomenclatura e arquitetura: o uso dos termos 'itinerário' e 'roteiro' de forma intercambiável causava confusão no fluxo. A decisão de simplificar para apenas 'roteiro' e 'viagem' clarificou toda a hierarquia de informação do app."
            }
        ]
    },
    {
        id: 6,
        slug: "mobile-application-design-2",
        src: "/images/projects/work4.jpg",
        category: "Marketing",
        title: "Mobile Application Design",
        description: "Projeto de um aplicativo móvel focado em campanhas de marketing digital, com dashboards intuitivos e ferramentas de análise de dados.",
        challenge: "Criar uma interface que permitisse gerenciar campanhas de marketing de forma eficiente em dispositivos móveis.",
        solution: "Dashboard com visualização de métricas em tempo real e fluxo simplificado para criação e monitoramento de campanhas.",
        year: "2024",
        client: "Marketing Pro Ltda.",
        tools: ["Figma", "Adobe XD"],
    },
    {
        id: 7,
        slug: "brand-identity-and-motion-design-2",
        src: "/images/projects/work3.jpg",
        category: "Design",
        title: "Brand Identity & Motion Design",
        description: "Trabalho de branding e motion design para uma agência criativa, renovando sua presença online com novos elementos gráficos e animações.",
        challenge: "Transmitir dinamismo e criatividade em todos os pontos de contato da marca.",
        solution: "Novo conjunto de elementos gráficos e animações para apresentações, website e mídias sociais.",
        year: "2023",
        client: "Creative Hub Agency",
        tools: ["After Effects", "Illustrator"],
    },
    {
        id: 8,
        slug: "brand-identity-and-motion-design-3",
        src: "/images/projects/work4.jpg",
        category: "Marketing",
        title: "Brand Identity & Motion Design (Evento)",
        description: "Identidade visual e motion design para um grande evento anual, com tema visual, elementos para divulgação e vídeos animados.",
        challenge: "Criar uma identidade que funcionasse tanto online quanto offline, atraindo o público e criando uma atmosfera vibrante.",
        solution: "Sistema visual completo com teasers animados, peças para redes sociais e material impresso.",
        year: "2024",
        client: "Eventos & Cia.",
        tools: ["After Effects", "Figma"],
    },
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};
