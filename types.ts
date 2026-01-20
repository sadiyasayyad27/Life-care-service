
// Import React to ensure React.ReactNode and other React types are available in the global scope
import React from 'react';

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

export interface LabTest {
  id: number;
  name: string;
  price: string;
  description: string;
}