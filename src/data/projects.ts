export type ProjectType = {
  type: 'projeto'
  href: string
  status: 'concluído' | 'ativo'
  card_banner: string
  page_icon: string
  name: string
  description: string
  axis: ('interação' | 'ensino' | 'pesquisa' | 'desenvolvimento')[]
  text: string[]
  members: string
  tools: string
  cta?: { label: string; href: string }[]
}

export type CourseType = {
  type: 'curso'
  card_banner: string
  name: string
  description: string
  href: string
}

export const projects: (ProjectType | CourseType)[] = [
  {
    type: 'projeto',
    href: '/projects/dino',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Dino App',
    description: '',
    axis: ['desenvolvimento'],
    text: [
      'Dino, como é carinhosamente chamado, é um aplicativo feito em parceria com o Hospital de Clínicas de Porto Alegre e tem como principal objetivo incentivar crianças em tratamento de câncer infantil a seguirem sua rotina médica.',
      'O aplicativo possui ferramentas e informações úteis para a organização dos pais e diversos jogos educativos voltados às crianças.',
      'O DinoApp é uma PWA, um aplicativo web que se comporta como um aplicativo nativo quando pode ser instalado e como uma página web quando não pode.',
    ],
    members:
      'Bernardo Borba, Eduarda Waechter, Heric Rodrigues, João Pedro Silva, Léo de Vasconcelos, Mayra Cademartori e Vic Duarte',
    tools:
      'Figma, Canva, Photoshop, Typescript, HTML, CSS, ReactJS, Java, Spring e PostgreSQL',
  },
  {
    type: 'projeto',
    href: '/projects/lobo',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'LoBo Brain',
    description: '',
    axis: ['pesquisa'],
    text: [
      'O Projeto LoBo Brain nasceu em 2019 através de uma sugestão do professor Renato Ribas: ampliar seu projeto Lobo Games para o meio digital.',
      'O produto desenvolvido implementa um centro de tomada de decisões para os jogos de tabuleiros já presentes no Lobo Games, permitindo que um jogador pudesse jogar mesmo sem outro jogador disponível.',
      'O Lobo utiliza métodos de Inteligência Artificial voltados para a teoria dos jogos, como Reinforcement Learning e o algoritmo Minimax.',
    ],
    members: 'Eduardo Fantini e Thiago Lermen',
    tools: 'C++ e Python',
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/lobo-brain',
      },
    ],
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Git',
    description: 'Uma introdução ao Git',
    href: 'https://petcomputacaoufrgs.github.io/intro-ao-git',
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'LaTEX',
    description: 'Uma introdução ao Latex',
    href: 'https://petcomputacaoufrgs.github.io/intro-ao-latex',
  },
  {
    type: 'projeto',
    href: '/projects/cafe-com-pet',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Café com PET',
    description: '',
    axis: ['interação'],
    text: [
      'Criado em 2020 pelos petianos Jordi e Ricardo, o projeto tem o desejo de trazer discussões mais próximas à comunidade acadêmica sobre assuntos que vão além da faculdade.',
      'Originalmente, o Café com PET foi pensado como uma roda de conversa, onde seria possível beber café e debater. No entanto, com a chegada da pandemia, foi necessário adaptá-lo para o meio digital.',
      'Durante o período de ERE (Ensino Remoto Emergencial), foram organizadas lives no YouTube, trazendo convidados que com conhecimento nos assuntos debatidos para, assim, enriquecer as discussões.',
    ],
    members:
      'Bernardo Beneduzi, Eduarda Waechter, Heloísa de Carvalho, Heric Rodrigues, Jordi Pujol, Léo de Vasconcelos, Matheus Almeida, Nathan Alonso, Nicolle Favero e Vic Duarte',
    tools: 'StreamYard, YouTube',
  },
  {
    type: 'projeto',
    href: '/projects/dragao',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Dragão',
    description: '',
    axis: ['interação'],
    text: [
      'Com a pandemia, as redes sociais tornaram-se veículos de divulgação e comunicação ainda mais importantes para as organizações.',
      'O PET valoriza muito o contato com a comunidade, então manter as redes sociais atualizadas e alimentá-las com o desenvolvimento do grupo tornou-se fundamental.',
      'O Projeto Dração foi criado no final de 2020 pelas petianas Graciela e Victória com o objetivo de reviver as redes sociais do PET Computação.',
      'Hoje o projeto mantém-se ativo e seus participantes atuam na manutenção das redes sociais e na criação de novas séries de postagem.',
    ],
    members:
      'Bernardo Beneduzi, Heloísa de Carvalho, Heric Rodrigues, Ian Kersz, Léo de Vasconcelos, Matheus Almeida, Pedro Miola e Vic Duarte',
    tools: 'Canva, Photoshop',
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Currículo',
    description: 'Um passo a passo para construir seu primeiro currículo',
    href: 'https://petcomputacaoufrgs.github.io/cv-guide',
  },
  {
    type: 'projeto',
    href: '/projects/papagaio',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Papagaio',
    description: '',
    axis: ['pesquisa'],
    text: [
      'A música reconstitui a linguagem como uma sequência temporal de sons articulados. Elas dizem algo, geralmente algo humano.',
      'Embora, existam diferenças cruciais entre linguagem e música. Ainda podemos descrevê-la como uma sequência de símbolos na forma mais simples de compreensão. Traduzindo algo complexo em algo mais simples, mas utilizável por modelos computacionais.',
      'Assim, o objetivo deste projeto é estabelecer uma comunicação entre o humano, que entende a música da forma mais intensa que o cérebro pode interpretar através da informação, e a máquina.',
      'Vamos criar um modelo que pode gerar música com base nas informações de entrada, ou seja, gerar uma sequência de sons que estão relacionados de alguma forma com os sons passados ​​como entrada.',
      'Usaremos métodos de Processamento de Linguagem Natural (PLN), observando a música como se fosse uma linguagem, abstraindo-a. Fazendo isso, a máquina pode reconhecer e processar dados semelhantes.',
      'Na primeira etapa, usaremos técnicas de geração de texto, utilizando Redes Neurais Recorrentes (RNNs) e Memórias de Longo Prazo (LSTMs). Com a eficácia do treinamento, mesmo que seja razoável, faremos a mesma implementação usando modelos específicos como Transformers.',
    ],
    members:
      'Eduardo Fantini, José Henrique Lima, Nathan Alonso, Pedro Miola, Thiago Lermen e Vitor Caruso',
    tools: 'Python, PyTorch, Music21 e Pandas',
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/papagaio',
      },
    ],
  },
  {
    type: 'projeto',
    href: '/projects/pinguim',
    status: 'concluído',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Pinguim',
    description: '',
    axis: ['desenvolvimento', 'ensino'],
    text: [
      'O projeto Pinguim foi criado em 2021 e tem como propósito reformular os simuladores de máquinas teóricas utilizadas na disciplina de Teoria da Computação.',
      'A disciplina estuda os limites da computabilidade. Sendo utilizadas máquinas teóricas, com capacidade de realizar o mesmo que um computador atual, porém de forma mais simplificada. Tais máquinas teóricas rementem aos primeiros modelos de computação, que mais se aproximavam da arquitetura de computadores digitais. Atualmente o projeto desenvolve a Máquina de Turing, o Cálculo Lambda e a Máquina Norma.',
      'Portanto, os simuladores se inserem como importantes ferramentas de auxílio na disciplina para os alunos testarem e validarem seus conhecimentos na elaboração e implementação dos seus algoritmos.',
      'O time que desenvolve o projeto mantém contato com o professor que ministra a disciplina no Instituto de Informática e, com isso, sempre verifica se os objetivos do time e do professor estão alinhados.',
      'O projeto tem como objetivo final entregar uma interface mais amigável, com uma melhor performance, além de trazer funcionalidades que facilitem o desenvolvimento e programação dentro desses simuladores.',
    ],
    members:
      'Bruno Zimmermann, Heric Rodrigues, João Pedro Silva, Jordi Pujol, Luccas Lima, Nicolle Favero, Matheus Almeida e Vic Duarte',
    tools: 'Javascript, HTML, CSS, WebAssembly e Rust',
    cta: [
      {
        label: 'Teste nossa máquina Norma',
        href: 'https://www.inf.ufrgs.br/pet/pinguim/norma',
      },
      {
        label: 'Wiki da Máquina Norma',
        href: 'https://github.com/petcomputacaoufrgs/pinguim-norma/wiki',
      },
      {
        label: 'Wiki da Máquina de Turing',
        href: 'https://github.com/petcomputacaoufrgs/pinguim-turing/wiki',
      },
    ],
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Arduino',
    description: 'Uma introdução ao arduíno',
    href: 'https://petcomputacaoufrgs.github.io/intro-ao-arduino',
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Desenvolvimento Web',
    description: 'Uma introdução ao desenvolvimento Web',
    href: 'https://breezy-moonflower-d72.notion.site/O-mini-guia-de-web-para-iniciantes-668009c833624c0c83a782ac9d13216d',
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Machine Learning',
    description: 'Uma introdução ao aprendizado de máquina',
    href: 'https://petcomputacaoufrgs.github.io/ml-course',
  },
  {
    type: 'projeto',
    href: '/projects/raposa',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Raposa',
    description: '',
    axis: ['desenvolvimento', 'ensino'],
    text: [
      'O projeto Raposa foi idealizado no final de 2021 e desde então está em intenso desenvolvimento, com uma grande e talentosa equipe!',
      'O projeto visa o desenvolvimento de um jogo divertido com uma estética simples, feito em 2D e em PixelArt. O foco será em mecânicas simples e divertidas de manejamento de uma cafeteria e no desenvolvimento profundo da história da cidade e dos personagens que o jogo apresenta.',
      'A equipe organiza-se por meio do método SCRUM, dividindo suas tarefas - tanto do setor de arte quanto do setor de programação - em Sprints quinzenais.',
      'Além disso, no setor de interção e ensino, busca-se converter os conhecimentos adquiridos no projeto em cursos, oficinas e palestras tanto para a comunidade interna da UFRGS quanto para a comunidade externa.',
      'Nesse contexto, um dos objetivos centrais do projeto consiste na interação com alunos do ensino fundamental e médio levando a temática da computação e suas possibilidades de maneira lúdica, estimulando o interesse pela área.',
    ],
    members:
      'Henrique Carniel, Ian Kersz, Léo Vasconcelos, Luccas Lima, Matheus Almeida, Sofia Maciel, Vitor Caruso e Vic Duarte',
    tools: 'C#, Unity, Aseprite',
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'PyTorch',
    description: 'Uma introdução ao PyTorch',
    href: 'https://petcomputacaoufrgs.github.io/ml-guide',
  },
  {
    type: 'curso',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'SDR',
    description: 'Uma introdução a Software Defined Radio',
    href: 'https://petcomputacaoufrgs.github.io/minic_sdr',
  },
  {
    type: 'projeto',
    href: '/projects/castor',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Castor',
    description: '',
    axis: ['desenvolvimento', 'ensino'],
    text: [
      'O Projeto Castor tem como objetivo disponibilizar aos alunos da UFRGS diversas ferramentas que auxiliem os alunos com tarefas de desenvolvimento, em principal tarefas de build.',
      'Em especial, o projeto foca na disponibilização dessas ferramentas para uso nas cadeiras iniciais dos cursos de Ciência e Engenharia da Computação, de forma a compensar uma possível falta de familiaridade dos alunos com plataformas de desenvolvimento de software; porém, no escopo geral, é esperado cobrir o máximo de linguagens utilizadas nas cadeiras do instituto de informática.',
      'Por fim, o projeto foca também na melhoria da qualidade de vida dos estudantes, oferecendo maiores facilidades para o desenvolvimento de código, e no aprendizado, com tutoriais de utilização e/ou criação das ferramentas disponibilizadas.',
      'O projeto tem o objetivo de possibilitar aos alunos usarem diferentes ambientes de desenvolvimento com diferentes linguagens utilizadas nas disciplinas, aumentando a produtividade, reduzindo o tempo gasto com configurações mais avançadas e promovendo o aprendizado de tais ferramentas.',
    ],
    members: 'Ian Kersz, José Henrique Lima e Marcos Reckers',
    tools: 'Makefile, CMake',
    cta: [
      {
        label: 'veja o github desse projeto',
        href: 'https://github.com/petcomputacaoufrgs/castor',
      },
    ],
  },
  {
    type: 'projeto',
    href: '/projects/mico-leao',
    status: 'ativo',
    card_banner:
      'https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    page_icon: '',
    name: 'Mico Leão',
    description: '',
    axis: ['pesquisa'],
    text: [
      'Os tópicos de Inteligência Artificial e, em especial, Machine Learning (ML) têm atualmente crescido em popularidade tanto no ambiente acadêmico quanto do mercado, com uma gama de novas tecnologias surgindo nos últimos anos.',
      'O PET Computação tem tido interesse nessas áreas e criado projetos relacionados nos últimos anos, com o mais recente tendo sido o projeto Papagaio.',
      'Atualmente, o grupo novamente demonstra interesse na criação de materiais e programas que exploram o tópico de Machine Learning.',
      'Como resultado de projetos anteriores o grupo possui um material introdutório sobre o assunto, porém sente que há ainda bastante espaço para evolução deste material para permitir um aprendizado mais autônomo e interessante.',
    ],
    members:
      'Galeano Domingues, Henrique Carniel, Ian Kersz, João Vítor Schimuneck de Souza, José Henrique Lima, Marcos Reckers e Pedro Poli Miola',
    tools: 'Python e Jupyter',
  },
]