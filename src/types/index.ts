export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}