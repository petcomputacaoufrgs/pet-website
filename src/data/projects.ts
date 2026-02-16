import { ProjectType, CourseType } from '@/types/projectsType'
// Ao final de cada namespace é providenciado um modelo para a criação de novos projetos e cursos.
// Para criar um novo projeto ou curso, basta copiar o modelo e preencher os campos com as informações necessárias.
// Para organização, por favor, mantenha os projetos e cursos em seus respectivos namespaces.
// Axis é case sensitive: 'Ensino' não funcionará. Deve ser 'ensino'.
//Caso não seja possível pegar uma imagem pelo link do flaticon, é possível através do link da imagem no discord.

/* Modelo de Projeto

export const NomeDoProjeto: ProjectType = {
  type: 'projeto',
  href: '/projects/nome-do-projeto',
  status: 'ativo',
  card_banner:
    '', // Link retirado do site https://www.pexels.com/pt-br/ clicando com o botão direito na imagem e copiando o link da imagem
  page_icon: '', // Link retirado do site https://www.flaticon.com/ clicando com o botão direito na imagem pequena na lista de imagens e copiando o link da imagem
  name: 'Nome do Projeto',
  description:
    'Descrição do projeto',
  axis: ['desenvolvimento', 'ensino', 'pesquisa', 'interação'],
  text: [
    'Texto do projeto',
    'Segundo parágrafo',
  ],
  active_members: [
    'Nome',
    'dos',
    'petianes',
    'ativos',
    'no',
    'projeto',
  ],
  inactive_members: [
    'Nome',
    'dos',
    'petianes',
    'que',
    'já',
    'participaram',
    'do',
    'projeto',
  ],
  tools: ['Ferramentas', 'utilizadas', 'no', 'projeto',],
  cta: [ // Não obrigatório
    {
      label: 'Texto do botão 1',
      href: 'Link do botão 1',
    },
    {
      label: 'Texto do botão 2',
      href: 'Link do botão 2',
    },
  ],
}

*/

namespace Projetos {
  export const Andorinha: ProjectType = {
    type: 'projeto',
    href: '/projects/andorinha',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/34091048/pexels-photo-34091048.jpeg',
    page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472346068535480380/swallow.png?ex=69923ca1&is=6990eb21&hm=a78987467b8df0bc41fdca9152eaaf650c45d799a7379200b1bdbb60922bd39c&',
    name: 'Andorinha',
    description:
      'Rodas de conversa em inglês e oportunidades de intercâmbio',
    axis: ['interação','ensino'],
    text: ['O projeto Andorinha surgiu em 2025/01 em parceria com o professor Nicolas Maillard a fim de estimular nos estudantes o interesse pelo intercâmbio e pelas línguas estrangeiras, por meio de rodas de conversa e palestras sobre oportunidades de mobilidade acadêmica.',
        'O projeto conta com professores convidados e propõe um espaço para troca de ideias e descontração misturado com aprendizado e prática da língua inglesa para discentes de todas as etapas dos cursos de computação.',
    ],
    active_members: [
      'Eduardo Fonseca da Silva', 
      'Eduarda Post Michels', 
      'Isadora Santiago Müller',
      'João Walter Backes Nunes',
    ],
    inactive_members: [
      'Vicente Tolentino Isatto', 
      'Eduardo Veiga Ferreira',
    ],
    tools: ['-'],
  }

  export const Cerberus: ProjectType = {
  type: 'projeto',
  href: '/projects/cerberus',
  status: 'ativo',
  card_banner: 'https://images.pexels.com/photos/17802177/pexels-photo-17802177.jpeg',
  page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472716891494682655/cerberus.png?ex=699395fc&is=6992447c&hm=d0aa4f4461a0fb5bbea616f809d110a5fefa027dacd9482a17ba38422f7f16ce&',
  name: 'Cerberus',
  description:
    'Simulador de RISC-V',
  axis: ['desenvolvimento', 'ensino'],
  text: [
    'O projeto Cerberus foi criado no final de 2025 com o objetivo de desenvolver ferramentas de apoio ao ensino da arquitetura RISC-V. Visto que o RISC-V tem se tornado um padrão importante tanto na indústria quanto na academia - inclusive com a arquitetura sendo incluída no novo currículo - o projeto busca criar simuladores visuais e interativos para auxiliar os estudantes na disciplina de Arquitetura de Computadores.',
    'A ideia central é facilitar a compreensão de conceitos centrais da disciplina, como a execução em tempo real de instruções, memória de dados e programação em linguagem assembly, permitindo uma visualização prática do fluxo de dados no processador.',
  ],
  active_members: [
    'Eduardo Altmann de Bem',
    'Isadora Santiago Müller',
    'Joel Soares Gonzalez',
    'Leonardo Leal Linhares Dias',
    'Luiza Helwig da Silva',
  ],
  tools: ['-'],
}

  export const PetAdopt: ProjectType = {
  type: 'projeto',
  href: '/projects/petadopt',
  status: 'ativo',
  card_banner: 'https://images.pexels.com/photos/16652376/pexels-photo-16652376.jpeg',
  page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472746727021871145/pet-care.png?ex=6993b1c6&is=69926046&hm=1e17691a39fd43ed84b0651dbf63acedc383bb8297eca899eec6e85cbbeb09e4&',
  name: 'Pet Adopt',
  description:
    'Site para adoção de animais',
  axis: ['desenvolvimento', 'extensão'],
  text: [
    'O Pet-Adopt foi criado em 2024 a partir de uma parceria com o grupo PET Veterinária da UNIPAMPA. Seu objetivo é a criação de um site para organizar e divulgar a adoção de animais de maneira responsável, além de conectar ONGs envolvidas nesse processo com os usuários.',
  ],
  active_members: [
    'Eduardo Fonseca da Silva',
    'Eduarda Post Michels',
  ],
  inactive_members: [
    'Guilherme D\'Avila Pinheiro',
    'Kamille Pimentel',
    'Eduarda Tessari Pereira',
    'Maximus Borges da Rosa',
    'Vicente Tolentino Isatto',
    'João Luis Scheffel Koller',
    'Vic Duarte',
    'Andrew Borges',
    'Carolina Silva',
  ],
  tools: ['Docker','Cloudflare','ReactJS','Nest'],
}

export const Polvo: ProjectType = {
  type: 'projeto',
  href: '/projects/polvo',
  status: 'ativo',
  card_banner: 'https://images.pexels.com/photos/31329010/pexels-photo-31329010.jpeg',
  page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472745192183435417/polvo2.png?ex=6993b058&is=69925ed8&hm=0087bf5f2d38fd9ae9cd90c1916f5256557caa12e55ae616eb2f4b12ffae0ac9&',
  name: 'Polvo',
  description:
    'Trocas de conhecimento entre petianes',
  axis: ['pesquisa', 'ensino'],
  text: [
    'O projeto Polvo surge no final de 2025 como uma proposta de compartilhar e discutir temas na área da computação de interesse dos petianos. Para isso, uma vez por mês são realizadas apresentações internas, conduzidas pelos próprios bolsistas, onde os ministrantes da vez mostram o que andaram estudando durante o mês, promovendo um momento de descontração e troca de ideias.',
  ],
  active_members: [
    'Todos os Integrantes'
  ],
  tools: ['-'],
}

  export const Borboleta: ProjectType = {
    type: 'projeto',
    href: '/projects/borboleta',
    status: 'concluído',
    card_banner:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?_gl=1*nx2vbb*_ga*NjY2NjAxMTc1LjE3NTcwMDg5MDU.*_ga_8JE65Q40S6*czE3NTcwMDg5MDQkbzEkZzEkdDE3NTcwMDg5NTQkajEwJGwwJGgw",
    //page_icon: "https://images.icon-icons.com/339/PNG/128/Morpho_Menelaus_35662.png",
    page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472327098159988907/butterfly.png?ex=69922af6&is=6990d976&hm=8e49699525d03f4e1535544394a421852aee0dd376a5dfc3b0ad61214c0ed0de&',
    name: "Borboleta",
    description: "Um site para conversão de históricos do currículo antigo para o novo (2026/1)",
    axis: ['desenvolvimento'],
    text: ["Como parte das ações que acompanham a mudança do currículo do curso de Ciência da Computação da UFRGS, o grupo PET Computação desenvolveu, em parceria com o professor Henrique Becker, uma ferramenta educacional para auxiliar estudantes na visualização das mudanças do currículo antigo para o novo.",
           "O projeto teve como objetivo facilitar a compreensão das mudanças curriculares e apoiar a tomada de decisão dos estudantes que ingressaram no curso sob o currículo anterior.",
            "A iniciativa integrou um esforço mais amplo de fomentar a participação discente nas discussões e decisões relacionadas à reformulação curricular."],
    tools: ['FastAPI', 'ReactJS', 'Typescript', 'HTML', 'CSS', 'Python', 'Docker'],
    active_members: [
      'Eduardo Fonseca da Silva', 
      'Eduarda Post Michels', 
      'Gabriel Kenji Kuta',
      'Guilherme D\'Avila Pinheiro',
      'João Luis Scheffel Koller'
    ],
    cta: [
      {
        label: 'Acesse o site',
        href: 'https://borboleta.inf.ufrgs.br/'
      },
      {
        label: 'Acesse o github do projeto',
        href: 'https://github.com/petcomputacaoufrgs/novo-curriculo-website'
      }
    ],

    }

  export const Hidra: ProjectType = {
    type: 'projeto',
    href: '/projects/hidra',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/612964/pexels-photo-612964.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/477/477167.png',
    name: 'Hidra',
    description:
      'Simulador para as máquinas teóricas utilizadas nas cadeiras de Arquitetura de Computadores',
    axis: ['desenvolvimento', 'ensino'],
    text: [
      'O projeto Hidra foi desenvolvido pelo PET Computação há alguns anos e retomado em 2020 para manutenção. Seu objetivo é auxiliar os alunos no aprendizado de máquinas hipotéticas que são estudadas nas disciplinas de Arquitetura de Computadores.',
      'Nessa disciplina, os alunos partem de processadores fictícios simples como o Neander e chegam em até o processador Intel. Sendo uma alternativa para diversas dessas máquinas teóricas estudadas pelas disciplinas, o Hidra é um editor de assembly integrado à interface de execução das máquinas.',
      'A última manutenção do PET incluiu algumas funcionalidades novas, como: conversor de bases (entre 2 e 36) e representação de inteiro (positivo, sinal magnitude, complemento de B e complemento de B-1); conversor de ponto (notação humana, ponto fixo e ponto flutuante) de diferentes tamanhos; e menu de localizar e substituir.',
    ],
    inactive_members: [
      'Alice Carra',
      'Bruno Zimmermann',
      'Galeano Domingues',
      'João Vítor de Souza',
      'José Henrique Lima',
      'Marcos Reckers',
      'Pedro Poli Miola',
    ],
    tools: ['C++', 'Qt',],
    cta: [
      {
        label: 'acesse o release mais recente',
        href: 'https://github.com/petcomputacaoufrgs/hidracpp/releases/tag/v1.2.0',
      },
    ],
  }

  export const Dino: ProjectType = {
    type: 'projeto',
    href: '/projects/dino',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/1319591/pexels-photo-1319591.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/2206/2206593.png',
    name: 'Dino',
    description:
      'Uma PWA para auxiliar no acompanhamento tratamento de pacientes com câncer',
    axis: ['desenvolvimento'],
    text: [
      'Dino, como é carinhosamente chamado, é um aplicativo feito em parceria com o Hospital de Clínicas de Porto Alegre e tem como principal objetivo incentivar crianças em tratamento de câncer infantil a seguirem sua rotina médica.',
      'O aplicativo possui ferramentas e informações úteis para a organização dos pais e diversos jogos educativos voltados às crianças.',
      'O DinoApp é uma PWA, um aplicativo web que se comporta como um aplicativo nativo quando pode ser instalado e como uma página web quando não pode.',
    ],
    inactive_members: [
      'Bernardo Borba',
      'Eduarda Waechter',
      'Heric Rodrigues',
      'João Pedro Silva',
      'Léo de Vasconcelos',
      'Mayra Cademartori',
      'Vic Duarte',
    ],
    tools: ['Figma', 'Canva', 'Typescript', 'HTML', 'CSS', 'ReactJS', 'Java', 'Spring', 'PostgreSQL',],
    cta: [
      {
        label: 'veja o github do nosso projeto',
        href: 'https://github.com/petcomputacaoufrgs/DinoApp',
      },
    ],
    customContent: 'LittleDino',
  }

  export const Lobo: ProjectType = {
    type: 'projeto',
    href: '/projects/lobo',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/1573134/pexels-photo-1573134.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/616/616457.png',
    name: 'LoBo Brain',
    description:
      'Uma IA que utiliza Reinforcement Learning para jogar jogos de tabuleiro',
    axis: ['pesquisa'],
    text: [
      'O Projeto LoBo Brain nasceu em 2019 através de uma sugestão do professor Renato Ribas: ampliar seu projeto Lobo Games para o meio digital.',
      'O produto desenvolvido implementa um centro de tomada de decisões para os jogos de tabuleiros já presentes no Lobo Games, permitindo que um jogador pudesse jogar mesmo sem outro jogador disponível.',
      'O Lobo utiliza métodos de Inteligência Artificial voltados para a teoria dos jogos, como Reinforcement Learning e o algoritmo Minimax.',
    ],
    inactive_members: ['Eduardo Fantini', 'Thiago Lermen'],
    tools: ['C++', 'Python',],
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/lobo-brain',
      },
    ],
  }

  export const CafeComPet: ProjectType = {
    type: 'projeto',
    href: '/projects/cafe-com-pet',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/9968610/pexels-photo-9968610.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/763/763695.png',
    name: 'Café com PET',
    description:
      'Foco em aproximar o PET da comunidade, trazendo assuntos de relevância',
    axis: ['interação'],
    text: [
      'Criado em 2020 pelos petianos Jordi e Ricardo, o projeto tem o desejo de trazer discussões mais próximas à comunidade acadêmica sobre assuntos que vão além da faculdade.',
      'Originalmente, o Café com PET foi pensado como uma roda de conversa, onde seria possível beber café e debater. No entanto, com a chegada da pandemia, foi necessário adaptá-lo para o meio digital.',
      'Durante o período de ERE (Ensino Remoto Emergencial), foram organizadas lives no YouTube, trazendo convidados que com conhecimento nos assuntos debatidos para, assim, enriquecer as discussões.',
    ],
    inactive_members: [
      'Bernardo Beneduzi',
      'Eduarda Waechter',
      'Heloísa Marques',
      'Heric Rodrigues',
      'Jordi Pujol',
      'Léo de Vasconcelos',
      'Matheus Almeida',
      'Nathan Alonso',
      'Nicolle Favero',
      'Vic Duarte',
    ],
    tools: ['StreamYard', 'YouTube',],
    cta: [
      {
        label: 'acesse nossa playlist no YouTube',
        href: 'https://youtube.com/playlist?list=PL4GEvoptYkwnwL9yurnI2oxhKHyBbEInY',
      },
    ],
  }

  export const Dragao: ProjectType = {
    type: 'projeto',
    href: '/projects/dragao',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/7715003/pexels-photo-7715003.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/477/477161.png',
    name: 'Dragão',
    description:
      'Gerência das redes sociais, promovendo interação e divulgação das atividades do PET',
    axis: ['interação'],
    text: [
      'Com a pandemia, as redes sociais tornaram-se veículos de divulgação e comunicação ainda mais importantes para as organizações.',
      'O PET valoriza muito o contato com a comunidade, então manter as redes sociais atualizadas e alimentá-las com o desenvolvimento do grupo tornou-se fundamental.',
      'O Projeto Dragão foi criado no final de 2020 pelas petianas Graciela e Victória com o objetivo de reviver as redes sociais do PET Computação.',
      'Hoje o projeto mantém-se ativo e seus participantes atuam na manutenção das redes sociais e na criação de novas séries de postagem.',
    ],
    active_members: [
      'Todos os integrantes',
    ],
    inactive_members: [
      'Beatriz Aline Arend',
      'Eduarda Tessari Pereira',
      'Ian Kersz',
      'Isabella Teixeira Chiodelli',
      'Matheus Almeida',
      'Heloísa Marques',
      'Heric Rodrigues',
      'Léo de Vasconcelos',
      'Bernardo Beneduzi',
      'Vic Duarte',
      'Pedro Miola',
      'Henrique Carniel',
      'João Vítor de Souza',
    ],
    tools: ['Canva', 'Photoshop',],
  }

  export const Papagaio: ProjectType = {
    type: 'projeto',
    href: '/projects/papagaio',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/11932512/pexels-photo-11932512.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/697/697064.png',
    name: 'Papagaio',
    description: 'Uma IA que utiliza PLN para explorar o universo da música',
    axis: ['pesquisa'],
    text: [
      'A música reconstitui a linguagem como uma sequência temporal de sons articulados. Elas dizem algo, geralmente algo humano.',
      'Embora, existam diferenças cruciais entre linguagem e música. Ainda podemos descrevê-la como uma sequência de símbolos na forma mais simples de compreensão. Traduzindo algo complexo em algo mais simples, mas utilizável por modelos computacionais.',
      'Assim, o objetivo deste projeto era estabelecer uma comunicação entre o humano, que entende a música da forma mais intensa que o cérebro pode interpretar através da informação, e a máquina.',
      'Buscamos criar um modelo que pode gerar música com base nas informações de entrada, ou seja, gerar uma sequência de sons que estão relacionados de alguma forma com os sons passados ​​como entrada.',
      'Usamos métodos de Processamento de Linguagem Natural (PLN), observando a música como se fosse uma linguagem, abstraindo-a. Fazendo isso, a máquina pode reconhecer e processar dados semelhantes.',
      'Na primeira etapa, usamos técnicas de geração de texto, utilizando Redes Neurais Recorrentes (RNNs) e Memórias de Longo Prazo (LSTMs). Com a eficácia do treinamento, mesmo que seja razoável, a implementação seria feita usando modelos específicos como Transformers.',
    ],
    inactive_members: [
      'Eduardo Fantini',
      'José Henrique Lima',
      'Nathan Alonso',
      'Pedro Miola',
      'Thiago Lermen',
      'Vitor Caruso',
    ],
    tools: ['Python', 'PyTorch', 'Music21', 'Pandas'],
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/papagaio',
      },
      /*{
        label: 'confira o nosso site',
        href: 'https://papagaio.petcompufrgs.com.br/',
      }*/
    ],
  }

  export const Pinguim: ProjectType = {
    type: 'projeto',
    href: '/projects/pinguim',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    //page_icon: 'https://cdn-icons-png.flaticon.com/512/1864/1864694.png',
    page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472343704093327360/penguin.png?ex=69923a6d&is=6990e8ed&hm=8c17c50c2bb5bc1f439ba98d90447179283f8c4c6b959468ed3d99d312efa353&',    
    name: 'Pinguim',
    description:
      'Uma reformulação das máquinas teóricas utilizadas na cadeira de Teoria da Computação',
    axis: ['desenvolvimento', 'ensino'],
    text: [
      'O projeto Pinguim foi criado em 2021 e tem como propósito reformular os simuladores de máquinas teóricas utilizadas na disciplina de Teoria da Computação.',
      'A disciplina estuda os limites da computabilidade. Sendo utilizadas máquinas teóricas, com capacidade de realizar o mesmo que um computador atual, porém de forma mais simplificada. Tais máquinas teóricas rementem aos primeiros modelos de computação, que mais se aproximavam da arquitetura de computadores digitais. Atualmente o projeto desenvolve a Máquina de Turing, o Cálculo Lambda e a Máquina Norma.',
      'Portanto, os simuladores se inserem como importantes ferramentas de auxílio na disciplina para os alunos testarem e validarem seus conhecimentos na elaboração e implementação dos seus algoritmos.',
      'O time que desenvolve o projeto mantém contato com o professor que ministra a disciplina no Instituto de Informática e, com isso, sempre verifica se os objetivos do time e do professor estão alinhados.',
      'O projeto tem como objetivo final entregar uma interface mais amigável, com uma melhor performance, além de trazer funcionalidades que facilitem o desenvolvimento e programação dentro desses simuladores.',
    ],
    active_members: [
      'Beatriz Aline Arend',
      'Gabriel Kenji Ikuta',
      'Isabella Teixeira Chiodelli',
      'Kamille Pimentel',
    ],
    inactive_members: [
      'Bruno Zimmermann',
      'Felipe Gallois',
      'Heric Rodrigues',
      'João Pedro Silva',
      'Jordi Pujol',
      'Luccas Lima',
      'Nicolle Favero',
      'Matheus Almeida',
      'Vic Duarte',
    ],
    tools: ['Javascript', 'HTML', 'CSS', 'WebAssembly', 'Rust',],
    cta: [
      {
        label: 'teste nossa máquina Norma',
        href: 'https://www.inf.ufrgs.br/pet/pinguim/norma',
      },
      {
        label: 'wiki da máquina Norma',
        href: 'https://github.com/petcomputacaoufrgs/pinguim-norma/wiki',
      },
      {
        label: 'wiki da máquina de Turing',
        href: 'https://github.com/petcomputacaoufrgs/pinguim-turing/wiki',
      },
    ],
  }

  export const Raposa: ProjectType = {
    type: 'projeto',
    href: '/projects/raposa',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/271905/pexels-photo-271905.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/2612/2612051.png',
    name: 'Raposa',
    description:
      'Desenvolver conteúdos educacionais de computação direcionados ao ensino médio e fundamental',
    axis: ['ensino', 'extensão'],
    text: [
      'O projeto Raposa foi concebido em 2021 com o objetivo de criar um jogo envolvente, com uma estética simples em 2D e arte em PixelArt.',
      'A intenção era aplicar os conhecimentos adquiridos no projeto para desenvolver conteúdo educacional, beneficiando tanto a comunidade interna da UFRGS quanto a comunidade externa. Atualmente, o foco do projeto está mais voltado para a vertente educacional.',
      'Buscamos introduzir o mundo da computação e suas vastas possibilidades por meio de cursos, adotando uma abordagem lúdica que estimula o interesse por essa área, especialmente entre os estudantes do ensino fundamental e médio.',
      'Para alcançar esse objetivo, o Raposa utiliza a demonstração do jogo para ilustrar as capacidades da computação e emprega a gamificação como ferramenta de ensino de programação. Nesse sentido, fazemos uso da plataforma CodeCombat.',
    ],
    active_members: [
      'Eduarda Tessari Pereira',
      'Isabella Teixeira Chiodelli',
      'Tomás Mitsuo Dias Ueda',
    ],
    inactive_members: [
      'Guilherme D\'Avila Pinheiro',
      'Ian Kersz',
      'Matheus Almeida',
      'Vitor Caruso',
      'Juan Lucca Costa Homem',
      'Laura Reis da Silveira',
      'Léo de Vasconcelos',
      'Luccas Lima',
      'Vic Duarte',
      'Henrique Carniel',
      'Sofia Maciel',
    ],
    tools: ['C#', 'Unity', 'Aseprite', 'Canva', 'C', 'CodeCombat',],
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/raposa',
      },
      {
        label: 'confira a demo do projeto',
        href: 'https://www.inf.ufrgs.br/pet/raposa-demo/',
      },
    ],
  }

  export const Castor: ProjectType = {
    type: 'projeto',
    href: '/projects/castor',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/12899887/pexels-photo-12899887.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/2611/2611984.png',
    name: 'Castor',
    description:
      'Ferramentas que possam auxiliar alunos com tarefas de desenvolvimento ao longo do curso',
    axis: ['desenvolvimento', 'ensino'],
    text: [
      'O Projeto Castor tem como objetivo disponibilizar aos alunos da UFRGS diversas ferramentas que auxiliem os alunos com tarefas de desenvolvimento, em principal tarefas de build.',
      'Em especial, o projeto foca na disponibilização dessas ferramentas para uso nas cadeiras iniciais dos cursos de Ciência e Engenharia da Computação, de forma a compensar uma possível falta de familiaridade dos alunos com plataformas de desenvolvimento de software; porém, no escopo geral, é esperado cobrir o máximo de linguagens utilizadas nas cadeiras do instituto de informática.',
      'Por fim, o projeto foca também na melhoria da qualidade de vida dos estudantes, oferecendo maiores facilidades para o desenvolvimento de código, e no aprendizado, com tutoriais de utilização e/ou criação das ferramentas disponibilizadas.',
      'O projeto tem o objetivo de possibilitar aos alunos usarem diferentes ambientes de desenvolvimento com diferentes linguagens utilizadas nas disciplinas, aumentando a produtividade, reduzindo o tempo gasto com configurações mais avançadas e promovendo o aprendizado de tais ferramentas.',
    ],
    inactive_members: [
      'Ian Kersz',
      'José Henrique Lima',
      'Marcos Reckers',
    ],
    tools: ['Makefile', 'CMake',],
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/castor',
      },
    ],
  }

  export const MicoLeao: ProjectType = {
    type: 'projeto',
    href: '/projects/mico-leao',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=3053&h=4733&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/2417/2417577.png',
    name: 'Mico Leão',
    description:
      'Materiais de introdução ao tema de IA, tópico muito em alta nos últimos anos',
    axis: ['pesquisa'],
    text: [
      'O Mico Leão é historicamente o projeto de Inteligência Artificial do PET Computação. Foi iniciado em 2023, e desde então passou por diversas modificações até chegar no modelo atual: uma união entre algoritmos de aprendizado e robótica. Atualmente, os objetivos da iniciativa são montar um robô que deve sair de um labirinto utilizando algoritmos de aprendizado. As peças de hardware utilizadas são Raspberry Pi, sensores ultrassônicos, motores e bateria. Todos esses itens serão controlados por scripts Python, inclusive o código para sair do labirinto, o flood-fill.',
    ],
    active_members: [
      'Eduardo Fonseca da Silva', 
      'Eduardo Altmann de Bem',
      'Luiza Helwig da Silva',
      'Leonardo Leal Linhares Dias',
    ],
    inactive_members: [
      'João Antônio Barata',
      'Tomás Mitsuo Dias Ueda',
      'Felipe Gallois',
      'Guilherme D\'Avila Pinheiro',
      'Marcelo Cardoso Oliveira Gulart',
      'Galeano Domingues',
      'Henrique Carniel',
      'Ian Kersz',
      'João Vítor de Souza',
      'José Henrique Lima',
      'Laura Reis da Silveira',
      'Marcos Reckers',
      'Pedro Poli Miola',
      'Beatriz Aline Arend',
    ],
    tools: ['Python', 'Jupyter',],
  }

  export const Baleia: ProjectType = {
    type: 'projeto',
    href: '/projects/baleia',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/4971/4971976.png',
    name: 'Baleia',
    description:
      'Manutenção do Servidor que hospeda serviços e sites do PET',
    axis: ['desenvolvimento'],
    text: [
      'O projeto Baleia foi criado em 2022 com o objetivo de criar um servidor para o PET Computação.',
      'A ideia é que o servidor seja utilizado para armazenar arquivos e informações do grupo, além de ser um meio de hospedar os serviços e sites necessários pelo grupo.',
    ],
    active_members: [
      'Eduardo Fonseca da Silva', 
      'Eduardo Altmann de Bem', 
      'Eduarda Post Michels', 
      'Isadora Santiago Muller', 
      'Luiza Helwig da Silva', 
      'Thayssa Leão Francisco' 
    ],
    inactive_members: [
     'Felipe Gallois', 
     'Ian Kersz e Marcos Recker', 
     'Eric Peracchi Pisoni', 
     'Gabriel Kenji Ikuta', 
     'João Luis Scheffel Koller', 
     'Eduardo Veiga Ferreira'
    ],
    tools: ['Proxmox', 'Docker',],
  }

  export const Hardware: ProjectType = {
    type: 'projeto',
    href: '/projects/hardware',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/3868/3868033.png',
    name: 'Hardware',
    description:
      'Desbravando o mundo do Hardware de forma interativa',
    axis: ['ensino'],
    text: [
      'O projeto do que busca tornar a experiência com Hardware mais amigável para iniciantes.',
      'No Portas Abertas, compartilhamos nossa matriz de LED, onde os participantes puderam mergulhar em jogos como a cobrinha e cabo de guerra!',
    ],
    inactive_members: [
      'Galeano Domingues',
      'Pedro Miola',
      'Marcos Reckers',
    ],
    tools: ['Arduino',],
  }

  export const BemTeVi: ProjectType = {
    type: 'projeto',
    href: '/projects/bem-te-vi',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/6135762/pexels-photo-6135762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // page_icon: 'https://cdn.discordapp.com/attachments/1108909326271266870/1143706029574602812/3338380.png',
    page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472055162242863337/bemtevi2.png?ex=6991d674&is=699084f4&hm=c5ca098db4db7072cbbdd36694a799d339ae9814de3fd53f6405221fe994a357&',
    name: 'Bem-Te-Vi',
    description:
      'Promovendo o bem-estar dos estudantes do Instituto de Informática',
    axis: ['interação', 'pesquisa'],
    text: [
      'O projeto Bem-Te-Vi tem como objetivo fundamental melhorar aspectos relacionados ao bem-estar psicológico dos alunos. Através de pesquisas entre o corpo estudantil identificamos a falta de oportunidades de interação como um dos maiores problemas no Instituto de Informática, por isso, ao longo de 3 anos organizamos diversos eventos e palestras para motivar os alunos, criando um senso de pertencimento e comunidade no espaço estudantil.',
      'Promovemos uma dúzia de palestras relacionadas a oportunidades de carreira, intercâmbio, pesquisa científica e muito mais, buscando também propiciar a troca de conhecimentos entre estudantes. Organizamos também diversos eventos, competições de desenvolvimento de jogos, sessões de cinema, oficinas de arte, entre outros. Pretendemos continuar fortalecendo e unindo os estudantes para que tenham uma vivência mais saudável e proveitosa na Universidade.',
    ],
    active_members: [
      'Eduarda Post Michels',
      'Luiza Helwig da Silva', 
      'Thayssa Leão Francisco', 
      'Joel Soares Gonzalez'
    ],
    inactive_members: [
      'Beatriz Aline Arend', 
      'Eduarda Tessari Pereira', 
      'Gabriel Kenji Ikuta', 
      'Guilherme D\'Avila Pinheiro', 
      'Isabella Teixeira Chiodelli', 
      'Maximus Borges da Rosa', 
      'Heloísa Marques', 
      'João Vítor de Souza', 
      'Juan Lucca Costa Homem',
      'Pedro Miola'
    ],
    tools: ['-'],
  }

  export const CafeComPesquisa: ProjectType = {
    type: 'projeto',
    href: '/projects/cafe-com-pesquisa',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/3019/3019891.png',
    name: 'Café com Pesquisa',
    description:
      'Apresentação das linhas de pesquisa do PPGC para a comunidade',
    axis: ['interação'],
    text: [
      'Você já teve interesse em adentrar no mundo da pesquisa do INF? Pois o Café com Pesquisa vai te apresentar as linhas de pesquisa do PPGC (Programa de Pós-Graduação em Computação)! Os encontros costumam ocorrer no ZSpace (prédio do CEI - 43424), durante o intervalo de almoço. A divulgação das datas e linhas de pesquisa a serem apresentadas em cada evento é feita pelas redes sociais do PET e do INF, então fique ligado nesses canais para vir tomar um cafézinho e aprender mais sobre as linhas de pesquisa dos nossos professores!',
    ],
    active_members: [
      'Joel Soares Gonzalez',
      'Leonardo Leal Linhares Dias',
      'Pedro Arthur Pereira Rocha',
    ],
    inactive_members: [
      'João Luis Scheffel Koller',
      'João Antônio Barata',
      'Eduarda Tessari Pereira',
      'Beatriz Aline Arend',
      'Tomás Mitsuo Dias Ueda',
      'Galeano Domingues',
      'Pedro Miola',
    ],
    tools: ['Canva',],
  }

  export const Acervo: ProjectType = {
    type: 'projeto',
    href: '/projects/acervo',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/7598913/pexels-photo-7598913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/977/977246.png',
    name: 'Acervo',
    description:
      'Acervo histórico do Instituto de Informática',
    axis: ['interação'],
    text: [
      'Tem a missão de separar e catalogar os itens presentes no Acervo do Instituto de Informática, com o intuito de facilitar o acesso a eles.',
    ],
    active_members: [
      'Isabella Teixeira Chiodelli',
    ],
    inactive_members: [
      'Heloísa Marques',
      'Vic Duarte',
      'Sofia Maciel',
      'Marcos Reckers',
    ],
    tools: ['-'],
  }

  export const Manual: ProjectType = {
    type: 'projeto',
    href: '/projects/manual-dos-bixos',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/848/848698.png',
    name: 'Girafa',
    description:
      'Manual para os calouros dos cursos de Ciência da Computação e Engenharia da Computação',
    axis: ['interação'],
    text: [
      'O Girafa é o projeto do PET Computação criado para abranger todas as atividades referentes aos calouros da área da computação. O projeto atualmente se divide em duas frentes: a primeira é o Manual dos Bixos, que foi feito para sanar desde dúvidas triviais até questões fundamentais para os alunos de graduação. Seu objetivo é facilitar o acesso à informação, sendo um guia para matrícula, transporte e localização com dicas de estudo e sugestões de ferramentas, além de servir como local de consulta de informações gerais sobre a graduação em si. Já a segunda é a frente da interação, em que, em conjunto com o bem-te-vi, promovemos atividades de integração e apresentamos a universidade aos novos alunos.',
    ],
    active_members: [
      'Luiza Helwig da Silva',
      'Leonardo Leal Linhares Dias',
      'João Walter Backes Nunes'
    ],
    inactive_members: [
      'Eduarda Tessari Pereira',
      'Isabella Teixeira Chiodelli',
      'Gabriel Kenji Ikuta',
      'Kamille Pimentel',
      'Maximus Borges da Rosa',
    ],
    tools: ['Notion',],
    cta: [
      {
        label: 'confira o manual dos bixos',
        href: 'https://foggy-antler-b88.notion.site/Boas-vindas-69aee2be56cd46599e43636c19f16433',
      },
    ],
  }

  export const Harpia: ProjectType = {
    type: 'projeto',
    href: '/projects/harpia',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/802115/pexels-photo-802115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //page_icon: 'https://cdn-icons-png.flaticon.com/128/4413/4413229.png',
    page_icon: 'https://cdn.discordapp.com/attachments/1449146302335029492/1472330236220932096/harpy-eagle.png?ex=69922de2&is=6990dc62&hm=f0551389ba25686fde653a1917d411028ed6dc675ea63f17af35368ac83cb094&',    
    name: 'Harpia',
    description:
      'Projeto de construção de um computador NEANDER físico',
    axis: ['desenvolvimento'],
    text: [
        'O computador NEANDER é um modelo teórico criado pelos ex-professores da UFRGS Raul Fernando Weber e Taisy Silva Weber para servir como objeto de estudo nas disciplinas de arquitetura de computadores.',
        'Neste sentido, o PET se propôs a implementar esse computador fisicamente utilizando circuitos integrados TTL. Atualmente estamos na fase de montagem dos protótipos baseados em esquemáticos feitos em softwares de simulação em circuitos eletrônicos como o Proteus.'
    ],
    active_members: [
      'Eduarda Post Michels',
      'Isadora Santiago Müller',
      'Eduardo Altmann de Bem',
      'Leonardo Leal Linhares Dias',
      'Joel Soares Gonzalez',
    ],
    inactive_members: [
      'Eric Peracchi Pisoni',
      'Marcelo Cardoso Oliveira Gulart',
      'João Antônio Barata',
    ],
    tools: ['Arduino', 'Osciloscópio', 'Circuitos Integrados', 'Quartus II', 'Proteus'],
    cta: [
      {
        label: 'informações sobre o computador NEANDER',
        href: 'https://www.inf.ufrgs.br/arq/wiki/doku.php?id=neander',
      },
    ],
  }

  export const Rato: ProjectType = {
    type: 'projeto',
    href: '/projects/rato',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/2280794/pexels-photo-2280794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/616/616453.png',
    name: 'Rato',
    description:
      'Experimentação da nova disciplina de Projeto Integrador',
    axis: ['interação'],
    text: [
     'A participação dos membros do PET, em colaboração com outros estudantes, resultou na produção de dois artigos científicos distintos: um focado na classificação de emoções por meio de eletroencefalogramas (EEG) via Random Forest, e outro dedicado à análise da evasão estudantil sob a influência do Prouni. Ambos os trabalhos cumpriram os requisitos acadêmicos, gerando feedbacks para a cadeira.',
    'Com a conclusão desta experiência piloto, destacamos a necessidade de delimitar o escopo de metodologias e bases de dados disponíveis. A liberdade total de temas apresentou obstáculos práticos, como a escassez de dados ou complexidades técnicas que dificultaram o apoio dos docentes e o progresso consistente dos projetos ao longo do semestre. Entre outras mudanças, sugerimos que futuras edições forneçam uma fundamentação prévia mais completa, com preparação de dados, referências e temas de pesquisa.',
    ],
    active_members: [
        'Beatriz Aline Arend',
        'Eduarda Tessari Pereira',
        'Maximus Borges da Rosa',
        'Gabriel Kenji Ikuta',
        'Guilherma D\'Ávila Pinheiro', 
    ],
    tools: ['-'],
  }

  export const Morcego: ProjectType = {
    type: 'projeto',
    href: '/projects/morcego',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/15915605/pexels-photo-15915605/free-photo-of-natureza-flor-animais-selvagens-vida-selvagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/1841/1841041.png',
    name: 'Morcego',
    description:
      'Projeto de fotogrametria do Instituto de Informática da UFRGS',
    axis: ['desenvolvimento'],
    text: [
      'Neste projeto, o PET utilizava um drone para sobrevoar o Instituto de Informática da UFRGS e realizar um mapeamento 3D dos principais prédios e estruturas.',
      'O objetivo era facilitar a localização de estudantes e visitantes dentro do Instituto.',
    ],
    active_members: [
      'Eric Peracchi Pisoni',
      'Marcelo Cardoso Oliveira Gulart',
    ],
    inactive_members: [
      'Isabella Teixeira Chiodelli',
      'Beatriz Aline Arend',
    ],
    tools: ['Drone', 'Mission Planner'],
  }
}

/*Modelo de Curso

export const NomeDoCurso: CourseType = {
  type: 'curso',
  card_banner:
    '', // Link retirado do site https://www.pexels.com/pt-br/ clicando com o botão direito na imagem e copiando o link da imagem
  name: 'Nome do Curso',
  description: 'Descrição do Curso',
  href: 'Link para o curso',
}

*/

namespace Cursos {
  export const Git: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Git',
    description: 'Uma introdução ao Git',
    href: 'https://petcomputacaoufrgs.github.io/intro-ao-git',
  }

  export const Latex: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/8085937/pexels-photo-8085937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'LaTEX',
    description: 'Uma introdução ao Latex',
    href: 'https://petcomputacaoufrgs.github.io/intro-ao-latex',
  }

  export const CV: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Currículo',
    description: 'Um passo a passo para export construir seu primeiro currículo',
    href: 'https://petcomputacaoufrgs.github.io/cv-guide',
  }

  export const Arduino: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Arduino',
    description: 'Uma introdução ao arduíno',
    href: 'https://petcomputacaoufrgs.github.io/intro-ao-arduino',
  }

  export const WebDev: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Desenvolvimento Web',
    description: 'Uma introdução ao desenvolvimento Web',
    href: 'https://breezy-moonflower-d72.notion.site/O-mini-guia-de-web-para-iniciantes-668009c833624c0c83a782ac9d13216d',
  }

  export const ML: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Machine Learning',
    description: 'Uma introdução ao aprendizado de máquina',
    href: 'https://petcomputacaoufrgs.github.io/ml-course',
  }

  export const PyTorch: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'PyTorch',
    description: 'Uma introdução ao PyTorch',
    href: 'https://petcomputacaoufrgs.github.io/ml-guide',
  }

  export const SDR: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/7388500/pexels-photo-7388500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'SDR',
    description: 'Uma introdução a Software Defined Radio',
    href: 'https://petcomputacaoufrgs.github.io/minic_sdr',
  }

  export const SelfHosting: CourseType = {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Self-Hosting',
    description: 'Uma introdução ao Self Hosting',
    href: 'https://drive.google.com/file/d/1tXDUKwYaJeOA9flx2ob1LWsBtafwIFLH/view',
  }
}


// Se um erro aparecer aqui, voce provavelmente esqueceu de adicionar chaves em algum lugar na criação de um novo item.
const projectNotSorted: (ProjectType | CourseType)[] = [
  ...Object.values(Projetos),
  ...Object.values(Cursos),
]

export const projects: (ProjectType | CourseType)[] = projectNotSorted.sort((a, b) => a.name.localeCompare(b.name))
