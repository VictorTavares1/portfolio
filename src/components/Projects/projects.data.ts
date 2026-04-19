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
    title: 'Roomly — Gestão de Salas',
    shortDesc: 'Aplicação web completa de gestão de reservas e manutenção de salas escolares.',
    longDesc:
      'Projeto de fim de curso (PAP) — aplicação web full-stack para gestão de reservas, horários e manutenção de salas em ambiente escolar. Dashboard com gráficos e calendário interativo, sistema de tickets de manutenção e autenticação com múltiplos roles (Admin, Funcionário, Professores). Em desenvolvimento activo.',
    category: 'Frontend',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'PHP', 'MySQL', 'REST API'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
    githubUrl: 'https://github.com/VictorTavares1/roomly',
  },
  {
    id: 2,
    title: 'Portfólio Pessoal',
    shortDesc: 'Este portfólio — React + TypeScript + Framer Motion + CSS Modules.',
    longDesc:
      'Portfólio pessoal construído com React, TypeScript e Framer Motion. Inclui ecrã de intro com dactilografia, cursor luminoso personalizado, orbs atmosféricos, secções animadas ao scroll (Skills em hexágonos, linha temporal de experiência, modal de projetos) e deploy automático no GitHub Pages.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Framer Motion', 'CSS Modules'],
    gradient: 'linear-gradient(135deg, #3178c6 0%, #06b6d4 100%)',
    githubUrl: 'https://github.com/VictorTavares1/portfolio',
  },
  {
    id: 3,
    title: 'Near Partner — Sistema Interno',
    shortDesc: 'Nova funcionalidade desenvolvida em contexto de estágio empresarial.',
    longDesc:
      'Durante o estágio na Near Partner (Jun–Jul 2025), desenvolvi uma funcionalidade nova num sistema interno já existente. Trabalhei em contexto de equipa real com Git/GitHub no fluxo diário, participei em tarefas de desenvolvimento e testes de software e adquiri experiência prática em metodologias empresariais.',
    category: 'Backend',
    tags: ['Git', 'GitHub', 'Trabalho em Equipa'],
    gradient: 'linear-gradient(135deg, #539e43 0%, #06b6d4 100%)',
  },
]
