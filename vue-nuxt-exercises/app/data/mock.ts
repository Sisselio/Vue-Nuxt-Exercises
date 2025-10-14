// data/mock.ts

export interface Product {
  id: number
  image: string
  title: string
  description: string
  price: number
}

export const products: Product[] = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1011/400/300',
    title: 'Auriculares Inalámbricos',
    description: 'Auriculares con cancelación de ruido y batería de larga duración.',
    price: 59.99
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1015/400/300',
    title: 'Cámara Digital',
    description: 'Cámara profesional con lente de 50mm incluida.',
    price: 329.99
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1025/400/300',
    title: 'Smartwatch Deportivo',
    description: 'Resistente al agua, monitoreo cardíaco y más de 10 modos de deporte.',
    price: 89.5
  }
]
