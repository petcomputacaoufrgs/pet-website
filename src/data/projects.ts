import { ProjectType, CourseType } from '@/types/projectsType'
// Ao final de cada namespace é providenciado um modelo para a criação de novos projetos e cursos.
// Para criar um novo projeto ou curso, basta copiar o modelo e preencher os campos com as informações necessárias.
// Para organização, por favor, mantenha os projetos e cursos em seus respectivos namespaces.

namespace Projetos {
  export const Hidra: ProjectType = {
    type: 'projeto',
    href: '/projects/hidra',
    status: 'ativo',
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
    active_members: [
      'João Vítor Schimuneck de Souza',
    ],
    inactive_members: [
      'Alice Carra',
      'Bruno Zimmermann',
      'Galeano Domingues',
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
      'Heloísa Marques',
      'Beatriz Aline Arend',
      'Eduarda Tessari Pereira',
    ],
    inactive_members: [
      'Ian Kersz',
      'Matheus Almeida',
      'Heric Rodrigues',
      'Léo de Vasconcelos',
      'Bernardo Beneduzi',
      'Vic Duarte',
      'Pedro Miola',
      'Henrique Carniel',
      'João Vítor Schimuneck de Souza',
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
      'Assim, o objetivo deste projeto é estabelecer uma comunicação entre o humano, que entende a música da forma mais intensa que o cérebro pode interpretar através da informação, e a máquina.',
      'Vamos criar um modelo que pode gerar música com base nas informações de entrada, ou seja, gerar uma sequência de sons que estão relacionados de alguma forma com os sons passados ​​como entrada.',
      'Usaremos métodos de Processamento de Linguagem Natural (PLN), observando a música como se fosse uma linguagem, abstraindo-a. Fazendo isso, a máquina pode reconhecer e processar dados semelhantes.',
      'Na primeira etapa, usaremos técnicas de geração de texto, utilizando Redes Neurais Recorrentes (RNNs) e Memórias de Longo Prazo (LSTMs). Com a eficácia do treinamento, mesmo que seja razoável, faremos a mesma implementação usando modelos específicos como Transformers.',
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
      {
        label: 'confira o nosso site',
        href: 'https://papagaio.petcompufrgs.com.br/',
      }
    ],
  }

  export const Pinguim: ProjectType = {
    type: 'projeto',
    href: '/projects/pinguim',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/512/1864/1864694.png',
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
    inactive_members: [
      'Bruno Zimmermann',
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
    axis: ['ensino',],
    text: [
      'O projeto Raposa foi concebido em 2021 com o objetivo de criar um jogo envolvente, com uma estética simples em 2D e arte em PixelArt.',
      'A intenção era aplicar os conhecimentos adquiridos no projeto para desenvolver conteúdo educacional, beneficiando tanto a comunidade interna da UFRGS quanto a comunidade externa. Atualmente, o foco do projeto está mais voltado para a vertente educacional.',
      'Buscamos introduzir o mundo da computação e suas vastas possibilidades por meio de cursos, adotando uma abordagem lúdica que estimula o interesse por essa área, especialmente entre os estudantes do ensino fundamental e médio.',
      'Para alcançar esse objetivo, o Raposa utiliza a demonstração do jogo para ilustrar as capacidades da computação e emprega a gamificação como ferramenta de ensino de programação. Nesse sentido, fazemos uso da plataforma CodeCombat.',
    ],
    active_members: [
      'Eduarda Tessari Pereira',
      'Laura Reis da Silveira',
      'Tomás Mitsuo Dias Ueda',
    ],
    inactive_members: [
      'Ian Kersz',
      'Matheus Almeida',
      'Vitor Caruso',
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
    status: 'ativo',
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
    active_members: [
      'Marcos Reckers',
    ],
    inactive_members: [
      'Ian Kersz',
      'José Henrique Lima',
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
      'Os tópicos de Inteligência Artificial e, em especial, Machine Learning (ML), têm atualmente crescido em popularidade tanto no ambiente acadêmico quanto do mercado, com uma gama de novas tecnologias surgindo nos últimos anos.',
      'O PET Computação tem tido interesse nessas áreas e criado projetos relacionados nos últimos anos, com o mais recente tendo sido o projeto Papagaio.',
      'Atualmente, o grupo novamente demonstra interesse na criação de materiais e programas que exploram o tópico de Machine Learning.',
      'Como resultado de projetos anteriores o grupo possui um material introdutório sobre o assunto, porém sente que há ainda bastante espaço para evolução deste material para permitir um aprendizado mais autônomo e interessante.',
    ],
    active_members: [
      'Tomás Mitsuo Dias Ueda',
      'João Vítor Schimuneck de Souza',
      'Laura Reis da Silveira',
      'Felipe Gallois',
    ],
    inactive_members: [
      'Galeano Domingues',
      'Henrique Carniel',
      'Ian Kersz',
      'José Henrique Lima',
      'Marcos Reckers',
      'Pedro Poli Miola',
      'Beatriz Aline Arend',
    ],
    tools: ['Python', 'Jupyter',],
  }

  //TODO Update the projects above

  export const Baleia: ProjectType = {
    type: 'projeto',
    href: '/projects/baleia',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: 'https://cdn-icons-png.flaticon.com/128/4971/4971976.png',
    name: 'Baleia',
    description:
      'Ferramenta para auxiliar no dia-a-dia do PET Computação, através da criação de um Servidor',
    axis: ['desenvolvimento'],
    text: [
      'O projeto Baleia foi criado em 2022 com o objetivo de criar um servidor para o PET Computação.',
      'A ideia é que o servidor seja utilizado para armazenar arquivos e informações do grupo, além de ser um meio de hospedar os serviços e sites necessários pelo grupo.',
    ],
    active_members: [
      'Marcos Reckers',
    ],
    inactive_members: [
      'Ian Kersz',
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
    page_icon: 'https://cdn.discordapp.com/attachments/1108909326271266870/1143706029574602812/3338380.png',
    name: 'Bem-Te-Vi',
    description:
      'Promovendo o bem-estar dos estudantes do Instituto de Informática',
    axis: ['interação', 'pesquisa'],
    text: [
      'O projeto Bem-Te-Vi tem como objetivo fundamental oferecer apoio e espaço para questões relacionadas à saúde mental dos estudantes do INF, buscando não apenas promover a integração entre eles, mas também mapear e trazer à tona discussões importantes sobre o bem-estar psicológico.',
      'No decorrer do primeiro semestre de 2023, o Bem-Te-Vi já realizou pesquisas colaborativas com estudantes de psicologia da UFCSPA, com o intuito de compreender as demandas específicas dos alunos durante o desenvolvimento de seus projetos. Além disso, levamos os resultados da pesquisa aos setores administrativos, ampliando a voz dos estudantes e abordando esse tópico tão relevante.',
      'Assim, o Bem-Te-Vi se empenha em ampliar o diálogo sobre saúde mental dentro da comunidade, impulsionando o bem-estar de todos. Acreditamos que esse enfoque é fundamental para possibilitar que os alunos possam se dedicar aos estudos de forma proveitosa ao longo do curso.',
    ],
    active_members: [
      'Beatriz Aline Arend',
      'Eduarda Tessari Pereira',
      'Heloísa Marques',
      'João Vítor Schimuneck de Souza',
    ],
    inactive_members: [
      'Pedro Miola',
    ],
    tools: [],
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
      'Você já teve interesse de adentrar no mundo da pesquisa do INF? Pois “O Café com Pesquisa” vai te apresentar as linhas de pesquisa do PPGC (Programa de Pós-Graduação em Computação)',
    ],
    active_members: [
      'Beatriz Aline Arend',
      'Tomás Mitsuo Dias Ueda',
    ],
    inactive_members: [
      'Galeano Domingues',
      'Pedro Miola',
    ],
    tools: ['Canva',],
  }

  export const Acervo: ProjectType = {
    type: 'projeto',
    href: '/projects/acervo',
    status: 'ativo',
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
      'Heloísa Marques',
    ],
    inactive_members: [
      'Vic Duarte',
      'Sofia Maciel',
      'Marcos Reckers',
    ],
    tools: [],
  }
}

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


// Se um erro aparecer aqui, voce provavelmente esqueceu de adicionar chaves em algum lugar na criação de um novo item.
const projectNotSorted: (ProjectType | CourseType)[] = [
  ...Object.values(Projetos),
  ...Object.values(Cursos),
]

export const projects: (ProjectType | CourseType)[] = projectNotSorted.sort((a, b) => a.name.localeCompare(b.name))