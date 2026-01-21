export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  benefits: string[];
  image: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  comments: string;
}

export enum Page {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  BOOKING = 'BOOKING',
  CONTACT = 'CONTACT'
}

export interface VoiceConfig {
  lang: string;
  pitch: number;
  rate: number;
}