// src/utlits/fackData/projectData.js

export const projectsData = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
