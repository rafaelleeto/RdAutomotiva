import { ServiceItem, BeforeAfterScenario, FeedbackItem, WhyUsItem } from '../types';

export const SITE_CONFIG = {
  brandName: 'RD Studio Automotivo',
  tagline: 'Estética Automotiva Premium',
  // Configurable contact & social info:
  whatsappNumber: '+55 11 99999-8888',
  whatsappRawNumber: '5511999998888',
  whatsappDefaultMessage: 'Olá, gostaria de solicitar um orçamento para o meu veículo na RD Studio Automotivo.',
  email: 'contato@rdstudioautomotivo.com.br',
  phoneFormatted: '(11) 99999-8888',
  address: 'Rua Automotiva Premium, 1000 - Jardins, São Paulo - SP',
  mapsLink: 'https://share.google/wMh791UnRpy1DdoOu',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  openingHours: 'Segunda a Sexta: 08h às 18h | Sábado: 08h às 13h',
};

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'precisao',
    title: 'PRECISÃO',
    tag: 'Técnica & Metodologia',
    description: 'Cada detalhe importa. Utilizamos processos cuidadosamente executados para alcançar o melhor resultado.',
    iconName: 'Crosshair',
  },
  {
    id: 'qualidade',
    title: 'QUALIDADE',
    tag: 'Insumos de Alto Padrão',
    description: 'Produtos, técnicas e acabamento pensados para entregar um resultado superior.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'protecao',
    title: 'PROTEÇÃO',
    tag: 'Durabilidade Estendida',
    description: 'Mais do que brilho, buscamos preservar a pintura e o acabamento do veículo.',
    iconName: 'Sparkles',
  },
  {
    id: 'valorizacao',
    title: 'VALORIZAÇÃO',
    tag: 'Preservação de Patrimônio',
    description: 'Um veículo bem cuidado transmite conservação e mantém sua presença e valor.',
    iconName: 'TrendingUp',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'correcao',
    number: '01',
    title: 'CORREÇÃO',
    subtitle: 'Restauração profunda do verniz e recuperação óptica',
    description: 'Recuperação estética da pintura, buscando reduzir imperfeições e devolver profundidade, uniformidade e brilho ao acabamento.',
    features: [
      'Correção de pintura técnica em múltiplos estágios',
      'Polimento técnico de alta precisão milimétrica',
      'Redução de marcas circulares (swirl marks) e hologramas',
      'Recuperação da profundidade, nitidez e brilho original',
    ],
    // High-resolution automotive detailing photography with dark lighting and blue tones
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
    badge: 'Restauração Visual',
    idealFor: 'Veículos com riscos superficiais, marcas de lavagem incorreta, opacidade ou verniz desgastado.',
  },
  {
    id: 'protecao',
    number: '02',
    title: 'PROTEÇÃO',
    subtitle: 'Escudo duradouro contra intempéries e agentes externos',
    description: 'Tratamentos desenvolvidos para proteger a superfície do veículo e preservar o resultado obtido.',
    features: [
      'Proteção da pintura contra agentes climáticos e raios UV',
      'Tratamentos de longa duração com ancoragem molecular',
      'Proteção contra contaminantes, fezes de aves e seiva vegetal',
      'Facilidade de manutenção contínua e repelência de sujidade',
    ],
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Blindagem de Acabamento',
    idealFor: 'Carros novos ou recém-polidos que necessitam manter a integridade visual por longo período.',
  },
  {
    id: 'valorizacao',
    number: '03',
    title: 'VALORIZAÇÃO',
    subtitle: 'Detalhamento integral e preservação de alto impacto',
    description: 'Um veículo bem cuidado apresenta melhor conservação, aparência e percepção de valor.',
    features: [
      'Acabamento premium em rodas, plásticos, vidros e detalhes',
      'Conservação estética e proteção de superfícies nobres',
      'Melhor apresentação visual para uso exclusivo ou revenda',
      'Cuidado personalizado com inspeção ponto a ponto',
    ],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    badge: 'Alto Padrão',
    idealFor: 'Proprietários exigentes que desejam o veículo sempre com aspecto impecável de showroom.',
  },
];

export const BEFORE_AFTER_SCENARIOS: BeforeAfterScenario[] = [
  {
    id: 'capo-polimento',
    title: 'Capô de Carro Preto',
    part: 'Pintura & Verniz',
    description: 'Eliminação de micro-riscos severos causados por lavagens abrasivas e resgate do reflexo espelhado profundo.',
    beforeLabel: 'Antes: Verniz Fosco e Hologramas',
    afterLabel: 'Depois: Correção e Brilho Espelhado',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80&sat=-80&contrast=120',
    afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'farois-restauracao',
    title: 'Faróis e Óptica Frontal',
    part: 'Conjunto Óptico',
    description: 'Restauração de policarbonato com remoção de amarelado e aplicação de camada protetora.',
    beforeLabel: 'Antes: Lente Opaca e Amarelada',
    afterLabel: 'Depois: Cristalino com Nitidez Máxima',
    beforeImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80&sat=-60&brightness=-20',
    afterImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lateral-reflexo',
    title: 'Lateral e Portas',
    part: 'Reflexo de Estúdio',
    description: 'Alinhamento óptico das linhas da carroceria com contraste de iluminação e ausência de imperfeições.',
    beforeLabel: 'Antes: Contaminação e Riscos',
    afterLabel: 'Depois: Profundidade e Reflexo Perfeito',
    beforeImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80&sat=-50',
    afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
  },
];

export const FEEDBACKS_DATA: FeedbackItem[] = [
  {
    id: '1',
    name: 'Carlos Eduardo M.',
    vehicle: 'BMW M3 Competition',
    service: 'Correção de Pintura & Proteção',
    comment: 'Excelente atendimento e resultado impecável. O carro voltou com um brilho e profundidade que superou quando tirei zero km da concessionária. Padrão de técnica incomparável.',
    rating: 5,
    date: 'Fevereiro 2026',
  },
  {
    id: '2',
    name: 'Rodrigo Silveira',
    vehicle: 'Porsche 911 Carrera S',
    service: 'Proteção & Detalhamento Técnico',
    comment: 'Meu carro ficou completamente diferente. A atenção que a equipe da RD teve em cada vinco e detalhe da lataria demonstra a verdadeira paixão e precisão pelo que fazem.',
    rating: 5,
    date: 'Janeiro 2026',
  },
  {
    id: '3',
    name: 'Mariana Fontes',
    vehicle: 'Audi RS6 Avant',
    service: 'Valorização Estética Completa',
    comment: 'Transparência total desde o diagnóstico inicial até a entrega. O cuidado no pós-atendimento e a facilidade de limpeza no dia a dia comprovam a qualidade do serviço.',
    rating: 5,
    date: 'Fevereiro 2026',
  },
  {
    id: '4',
    name: 'Felipe Alencar',
    vehicle: 'Mercedes-AMG C63',
    service: 'Correção de Pintura em 3 Estágios',
    comment: 'Eliminaram 100% dos hologramas e marcas de lavagem que me incomodavam há meses. Estúdio escuro de alto padrão, pontualidade britânica e acabamento surreal.',
    rating: 5,
    date: 'Dezembro 2025',
  },
];

export const ABOUT_INDICATORS = [
  { label: 'Atendimento personalizado', desc: 'Diagnóstico exclusivo para cada veículo' },
  { label: 'Atenção aos detalhes', desc: 'Inspeção minuciosa sob iluminação técnica' },
  { label: 'Processos especializados', desc: 'Protocolos rigorosos sem atalhos' },
  { label: 'Acabamento premium', desc: 'Padrão estético de alto nível' },
];
