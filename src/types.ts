export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
  idealFor: string;
}

export interface BeforeAfterScenario {
  id: string;
  title: string;
  part: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
}

export interface FeedbackItem {
  id: string;
  name: string;
  vehicle: string;
  comment: string;
  rating: number;
  date: string;
  service: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface QuoteFormData {
  name: string;
  whatsapp: string;
  email: string;
  vehicle: string;
  service: 'Correção' | 'Proteção' | 'Valorização' | 'Ainda não sei';
  message: string;
}
