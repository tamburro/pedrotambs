// src/utlits/fackData/projectData.js

export const projectsData = [
    {
        id: 1,
        slug: "sustenta-plus-app-ux-design",
        src: "/images/projects/sustentamais_full2.jpg", // Imagem do card
        category: "UX/UI Design",
        title: "Sustenta+",
        description: "Este projeto envolveu o design de um aplicativo móvel com base em inteligência artificial para o gerenciamento de compras de alimentos. O objetivo principal é ajudar o usuário a registrar itens comprados, gerar listas de compras e controlar o desperdício de alimentos. Através da análise de dados do usuário, o app prevê a quantidade necessária de alimentos, sugere o que comprar (considerando safra, valor, dieta e restrições alimentares) e pode até se conectar a outros aparelhos IoT. A iniciativa visa não só evitar o desperdício de comida e facilitar o planejamento de compras, mas também promover uma dieta mais saudável e alinhada ao estilo de vida do usuário.",
        challenge: "O principal desafio abordado foi a falta de praticidade no preparo de refeições e o desperdício de alimentos e dinheiro, resultantes da desorganização e falta de planejamento. Além disso, foram identificados problemas como esquecimento de alimentos na geladeira, falta de informações sobre prazos de validade, dificuldade em manter uma dieta equilibrada e a falta de tempo para gerenciar a alimentação em rotinas corridas.",
        solution: "A solução proposta é um aplicativo inteligente que atua como um assistente completo para o controle de compras e consumo de alimentos. Ele permite o registro detalhado do que é comprado e usado, identifica o que foi desperdiçado e, com base nesses dados, oferece previsões e sugestões personalizadas de compra. O app também inclui funcionalidades como dicas de preservação de alimentos, sugestões de receitas para aproveitar partes menos utilizadas, integração com outros apps de compra e avisos sobre datas de vencimento, otimizando o planejamento e a alimentação do usuário.",
        results: "O projeto buscou oferecer uma ferramenta que atendesse às necessidades de usuários preocupados com economia, que desejam planejar e preparar alimentos com facilidade e precisão, evitar desperdícios e economizar tempo na cozinha. O resultado esperado é um sistema que ajude o usuário a manter uma alimentação saudável e equilibrada através de compras mais eficientes e conscientes.",
        fullImages: [ // Imagens para a galeria na página do projeto
            "/images/projects/single-project1.jpg",
            "/images/projects/single-project2.jpg",
            "/images/projects/single-project3.jpg",
            "/images/projects/single-project4.jpg"
        ],
        year: "2023",
        client: "Projeto Acadêmico (Pós-graduação)",
        services: "UX Research, UI Design, Prototipagem, Arquitetura da Informação, Testes de Usabilidade",
        projectType: "Produto Digital",
        tools: ["Figma", "Miro", "Ferramentas de Pesquisa de Usuário"],
        prototypeLink: "https://www.figma.com/proto/IEQMzJVFMRJ5gMPQ7lAsX2/Prot%C3%B3tipo?node-id=62-1369&starting-point-node-id=62%3A1369&t=N0QqFqUBLfg7T0Y9-1",
        // liveDemoLink: "LINK_PARA_DEMO_AO_VIVO_SE_HOUVER",
        // behanceLink: "LINK_PARA_BEHANCE_SE_HOUVER",
        // dribbbleLink: "LINK_PARA_DRIBBBLE_SE_HOUVER",
    },
    {
        id: 2,
        slug: "website-makeup-design",
        src: "/images/projects/estiloia_full.jpg",
        category: "UX/UI Design",
        title: "Estilo.ia",
        description:
            "Estilo.ia é um app de consultoria de moda guiado por inteligência artificial. Criado para ajudar pessoas a descobrirem e aprimorarem seu estilo pessoal, o projeto foca em uma experiência visual, personalizada e intuitiva para coletar dados e sugerir looks com base em intenção, medidas e preferências.",
        challenge:
            "Nosso principal desafio foi criar uma experiência simples e envolvente para capturar o estilo pessoal dos usuários sem usar formulários tradicionais. Precisávamos de uma interface leve, visualmente atraente e que facilitasse a coleta de dados para alimentar a IA com informações relevantes sobre preferências, medidas e objetivos pessoais.",
        solution:
            "Desenvolvemos dois modelos de questionário interativo para testes A/B: um baseado em moodboards e outro em escolha binária estilo Tinder. Os testes mostraram que imagens maiores e a possibilidade de ver todas as escolhas anteriores aumentaram a confiança dos usuários. O protótipo validado oferece uma jornada que alia praticidade, personalização e design centrado no usuário.",
        results:
            "O Modelo B (estilo Tinder) foi mais intuitivo e teve melhor aceitação. Os usuários valorizaram a abordagem visual, a variedade de categorias e a fluidez na interação. O projeto provou que é possível captar o estilo pessoal com precisão e empatia usando boas práticas de UX combinadas com IA.",
        fullImages: [
            "/images/projects/single-project1.jpg",
            "/images/projects/single-project2.jpg",
            "/images/projects/single-project3.jpg",
            "/images/projects/single-project4.jpg"
        ],
        year: "2023",
        client: "Projeto Acadêmico (Pós-graduação Infnet)",
        services: "UX Research, UI Design, Teste A/B, Prototipagem, Design Visual",
        projectType: "Aplicativo de Moda com IA",
        tools: ["Figma", "Miro", "Google Forms", "User Testing"],
        prototypeLinks: [
            {
                label: "Modelo A",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=0%3A1&type=design&node-id=244-2467"
            },
            {
                label: " Modelo B",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=52%3A2&type=design&node-id=244-3324"
            }
        ]
    },

    {
        id: 3,
        slug: "roteiro-de-viagens-colaborativo",
        src: "/images/projects/roteiro_viagens_full.jpg", // Altere para o path da thumbnail do projeto
        category: "UX/UI Design",
        title: "Roteiro de Viagens Colaborativo",
        description:
            "Aplicativo mobile para planejamento colaborativo de viagens, que permite aos usuários criar roteiros personalizados, convidar amigos, definir permissões de colaboração e compartilhar experiências. O foco do projeto foi transformar o processo de planejar viagens em algo mais social, integrado e intuitivo.",
        challenge:
            "Identificamos que, apesar da abundância de apps de viagem, poucos oferecem uma experiência fluida para colaboração em grupo. O desafio era criar uma interface que centralizasse planejamento, personalização e compartilhamento, com controle de permissões e visualização intuitiva do roteiro.",
        solution:
            "Projetamos uma jornada completa com foco em co-criação: seleção de atividades, criação de roteiros personalizados, convites a amigos, controle de permissões de acesso, visualização em mapa interativo e compartilhamento nas redes sociais. Aplicamos padrões de design e feedback de usuários em sketches, sitegrama, wireframes e protótipo navegável.",
        results:
            "A experiência resultou em uma solução coesa e centrada no usuário, com navegação fluida e interação social relevante. As funcionalidades de compartilhamento e visualização em tempo real aumentam o engajamento entre viajantes e facilitam o planejamento em grupo.",
        fullImages: [
            "/images/projects/single-project1.jpg",
            "/images/projects/single-project2.jpg",
            "/images/projects/single-project3.jpg",
            "/images/projects/single-project4.jpg"
        ],
        year: "2024",
        client: "Projeto Acadêmico (Pós-graduação Infnet)",
        services: "Arquitetura da Informação, UX Research, UI Design, Wireframes, Prototipagem",
        projectType: "Aplicativo Mobile",
        tools: ["Figma", "Whimsical", "User Feedback"],
        prototypeLink: "https://www.figma.com/proto/IEQMzJVFMRJ5gMPQ7lAsX2/Prot%C3%B3tipo?node-id=62-1369&starting-point-node-id=62%3A1369&t=N0QqFqUBLfg7T0Y9-1",
    },

    {
        id: 4,
        slug: "mobile-application-design-2",
        src: "/images/projects/work4.jpg",
        category: "Marketing", // Um segundo projeto de app, focado em marketing
        title: "Mobile Application Design (Marketing App)",
        description: "Projeto de um aplicativo móvel focado em campanhas de marketing digital. A interface foi desenhada para ser altamente interativa e permitir que usuários gerenciem suas campanhas de forma eficiente, com dashboards intuitivos e ferramentas de análise de dados. A experiência do usuário foi otimizada para facilitar a criação e o monitoramento de estratégias de marketing em tempo real.",
        fullImages: [
            "/images/projects/single-project1.jpg",
            "/images/projects/single-project2.jpg",
            "/images/projects/single-project3.jpg",
            "/images/projects/single-project4.jpg"
        ],
        year: "2024",
        client: "Marketing Pro Ltda.",
        services: "UX Research, UI Design, Dashboard Design",
        projectType: "Ferramenta de Marketing",
    },
    {
        id: 5,
        slug: "brand-identity-and-motion-design-2",
        src: "/images/projects/work3.jpg", // Reutilizando a imagem do card, talvez queira mudar
        category: "Design",
        title: "Brand Identity and Motion Design (Agency)",
        description: "Trabalho de branding e motion design para uma agência criativa, visando renovar sua presença online. Desenvolvemos um novo conjunto de elementos gráficos e animações para uso em apresentações, website e mídias sociais. A ideia era transmitir dinamismo e criatividade, refletindo a essência da agência.",
        fullImages: [
            "/images/projects/single-project1.jpg",
            "/images/projects/single-project2.jpg",
            "/images/projects/single-project3.jpg",
            "/images/projects/single-project4.jpg"
        ],
        year: "2023",
        client: "Creative Hub Agency",
        services: "Branding, Animação de Logotipo, Design Editorial",
        projectType: "Marketing Digital",
    },
    {
        id: 6,
        slug: "brand-identity-and-motion-design-3",
        src: "/images/projects/work4.jpg", // Reutilizando a imagem do card, talvez queira mudar
        category: "Marketing",
        title: "Brand Identity and Motion Design (Event)",
        description: "Criação de identidade visual e peças de motion design para um grande evento anual. Isso incluiu a concepção de um tema visual, elementos gráficos para divulgação online e offline, e vídeos animados para teasers e aberturas do evento. O objetivo principal era atrair o público e criar uma atmosfera vibrante para o evento.",
        fullImages: [
            "/images/projects/single-project1.jpg",
            "/images/projects/single-project2.jpg",
            "/images/projects/single-project3.jpg",
            "/images/projects/single-project4.jpg"
        ],
        year: "2024",
        client: "Eventos & Cia.",
        services: "Design de Eventos, Motion Graphics, Publicidade",
        projectType: "Evento",
    },
];

// Função auxiliar para encontrar um projeto pelo slug
export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};