export type Category = 'Frontend' | 'IA' | 'Backend'

export interface Project {
  id: number
  title: string
  shortDesc: string
  longDesc: string
  category: Category
  tags: string[]
  gradient: string
  githubUrl?: string
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Portfolio Pessoal',
    shortDesc: 'Este mesmo portfólio — React + TypeScript + Framer Motion.',
    longDesc:
      'Portfólio pessoal construído com React, TypeScript e Framer Motion. Inclui animações de scroll, ecrã de intro com dactilografia, cursor personalizado e deploy automático no GitHub Pages via gh-pages.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Framer Motion', 'CSS Modules'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
    githubUrl: 'https://github.com/VictorTavares1/portfolio',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    shortDesc: 'Dashboard interativo com gráficos em tempo real.',
    longDesc:
      'Dashboard web com visualização de dados em tempo real. Consome uma API REST, apresenta gráficos interativos com filtros por período e exportação em CSV. Construído em Angular com serviços RxJS.',
    category: 'Frontend',
    tags: ['Angular', 'RxJS', 'TypeScript', 'REST API'],
    gradient: 'linear-gradient(135deg, #3178c6 0%, #06b6d4 100%)',
  },
  {
    id: 3,
    title: 'Detetor de Objetos',
    shortDesc: 'Deteção em tempo real com YOLOv8 e OpenCV.',
    longDesc:
      'Pipeline de visão computacional para deteção de objetos em tempo real usando YOLOv8 e OpenCV. Suporta feed de câmara ao vivo e vídeos pré-gravados. Testado em contexto académico com dataset personalizado.',
    category: 'IA',
    tags: ['Python', 'OpenCV', 'YOLOv8', 'Computer Vision'],
    gradient: 'linear-gradient(135deg, #5c3ee8 0%, #a855f7 100%)',
  },
  {
    id: 4,
    title: 'API de Autenticação',
    shortDesc: 'REST API com JWT, refresh tokens e rate limiting.',
    longDesc:
      'API de autenticação construída em Node.js com Express. Implementa JWT com refresh tokens, hashing bcrypt, rate limiting por IP e documentação Swagger. Base para projetos que requerem autenticação segura.',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #539e43 0%, #06b6d4 100%)',
  },
  {
    id: 5,
    title: 'Classificador de Imagens',
    shortDesc: 'CNN treinada para classificação com TensorFlow.',
    longDesc:
      'Rede neuronal convolucional treinada para classificação de imagens em 10 categorias. Utiliza transfer learning com MobileNetV2, data augmentation e treino em Google Colab. Precisão de 94% no conjunto de teste.',
    category: 'IA',
    tags: ['Python', 'TensorFlow', 'Keras', 'Transfer Learning'],
    gradient: 'linear-gradient(135deg, #ff6f00 0%, #ec4899 100%)',
  },
  {
    id: 6,
    title: 'E-Commerce UI',
    shortDesc: 'Loja online com carrinho, filtros e checkout.',
    longDesc:
      'Interface de e-commerce com catálogo de produtos, filtros por categoria e preço, carrinho persistente via localStorage e fluxo de checkout multi-etapas. Construído em React com Context API.',
    category: 'Frontend',
    tags: ['React', 'Context API', 'CSS Modules', 'Responsive'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f5d07a 100%)',
  },
]
