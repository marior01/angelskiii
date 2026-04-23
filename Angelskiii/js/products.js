// Product database
const PRODUCTS = [
  {
    id: 'longsleeve-white',
    name: 'LONGSLEEVE 777ANGELSKIII',
    price: 1500,
    oldPrice: null,
    category: 'longsleeves',
    images: [
      'images/longsleeve-white-1.jpg',
      'images/longsleeve-white-2.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Лонгслів 777Angelskiii — білий з чорним написом. Щільна 100% бавовна, оверсайз крій.',
    details: [
      { label: 'Матеріал', value: '100% бавовна' },
      { label: 'Крій', value: 'Оверсайз' },
      { label: 'Колір', value: 'Білий / чорний напис' },
      { label: 'Догляд', value: 'Прання 30°C' },
      { label: 'Виробництво', value: 'Україна' },
    ],
  },
  {
    id: 'longsleeve-black',
    name: 'LONGSLEEVE 777ANGELSKIII',
    price: 1500,
    oldPrice: null,
    category: 'longsleeves',
    images: [
      'images/longsleeve-black-1.jpg',
      'images/longsleeve-black-2.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Лонгслів 777Angelskiii — чорний з рожевим написом. Щільна 100% бавовна, оверсайз крій.',
    details: [
      { label: 'Матеріал', value: '100% бавовна' },
      { label: 'Крій', value: 'Оверсайз' },
      { label: 'Колір', value: 'Чорний / рожевий напис' },
      { label: 'Догляд', value: 'Прання 30°C' },
      { label: 'Виробництво', value: 'Україна' },
    ],
  },
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}

