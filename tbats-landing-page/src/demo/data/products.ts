export interface BaseItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface Product extends BaseItem {
  price: number;
  variants: string[];
}

export const products: readonly Product[] = [
  {
    id: 'p1',
    name: 'Oak Lounge Chair',
    price: 32500,
    category: 'furniture',
    description:
      'A classic Scandinavian lounge chair constructed from premium solid oak wood with hand-woven paper cord seat.',
    variants: ['Natural Oak', 'Smoked Oak'],
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p2',
    name: 'Minimalist Side Table',
    price: 12000,
    category: 'furniture',
    description: 'Slender structural profile with high durability. Perfect for placing next to a lounge chair or bed.',
    variants: ['White Ash', 'Black Coal'],
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p3',
    name: 'Floating Wall Shelf',
    price: 6000,
    category: 'furniture',
    description: 'A floating shelf that anchors seamlessly into drywalls to hold small art pieces or books.',
    variants: ['30cm', '60cm', '90cm'],
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p4',
    name: 'Wool Lounge Pouf',
    price: 16000,
    category: 'furniture',
    description: 'Composed of 100% natural wool fiber filling, offering a firm and comfortable auxiliary footrest.',
    variants: ['Oatmeal', 'Charcoal'],
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p5',
    name: 'Brass Pendant Light',
    price: 9000,
    category: 'lighting',
    description: 'A minimal ceiling pendant crafted from heavy brushed brass. Radiates warm spotlighting downwards.',
    variants: ['Brushed Brass', 'Matte Black'],
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p6',
    name: 'Ceramic Table Lamp',
    price: 11000,
    category: 'lighting',
    description:
      'A stoneware base thrown by hand, paired with a natural linen lampshade for gentle ambient light dispersion.',
    variants: ['Sandstone', 'Terracotta'],
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p7',
    name: 'LED Desk Light',
    price: 7500,
    category: 'lighting',
    description: 'Slender architectural arm with touch-dimming technology and high energy efficiency.',
    variants: ['Silver Aluminum', 'Slate Gray'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p8',
    name: 'Woven Reed Floor Lamp',
    price: 19000,
    category: 'lighting',
    description: 'Tall floor lamp constructed of steel frames enveloped in detailed hand-woven natural reed fibers.',
    variants: ['Standard Size'],
    image: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p9',
    name: 'Cast Iron Teapot',
    price: 4750,
    category: 'kitchenware',
    description:
      'Traditional Japanese-style cast iron kettle designed to distribute heat evenly and keep tea warm.',
    variants: ['Black Forest', 'Sage Green'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p10',
    name: 'Hand-blown Glass Carafe',
    price: 3000,
    category: 'kitchenware',
    description:
      'Thin-profile borosilicate glass carafe for serving water or wine, complete with a natural oak ball stopper.',
    variants: ['Clear Glass', 'Smoked Gray'],
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p11',
    name: 'Ceramic Coffee Dripper',
    price: 2250,
    category: 'kitchenware',
    description: 'Conical porcelain pour-over dripper designed to optimize extraction flow rate.',
    variants: ['White Matte', 'Black Matte'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p12',
    name: 'Maple Cutting Board',
    price: 4250,
    category: 'kitchenware',
    description: 'A heavy end-grain cutting block made of hard rock maple wood, treated with food-grade mineral oils.',
    variants: ['Medium', 'Large'],
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707caff?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p13',
    name: 'Linen Throw Blanket',
    price: 7000,
    category: 'textiles',
    description: 'Woven from 100% pure French flax linen, pre-washed for exceptional softness and structural drape.',
    variants: ['Flax Natural', 'Warm Olive', 'Dusty Rose'],
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p14',
    name: 'Organic Cotton Towel Set',
    price: 3750,
    category: 'textiles',
    description: 'Set of three highly absorbent, long-staple organic Turkish cotton towels (bath, hand, face).',
    variants: ['Sand beige', 'Slate Gray'],
    image: 'https://images.unsplash.com/photo-1616627434852-099e436852bb?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p15',
    name: 'Waffle Knit Bath Robe',
    price: 5500,
    category: 'textiles',
    description: 'Unisex waffle-weave robe made of organic cotton, featuring side patch pockets and a tie waist belt.',
    variants: ['S/M Size', 'L/XL Size'],
    image: 'https://images.unsplash.com/photo-1563163447-10510619dbf2?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p16',
    name: 'Merino Wool Cushion Cover',
    price: 3250,
    category: 'textiles',
    description: 'Knitted cushion cover made from extra-fine Merino wool, bringing textured comfort to sofas.',
    variants: ['Cream White', 'Forest Green'],
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p17',
    name: 'Leather Tote Bag',
    price: 14000,
    category: 'accessories',
    description:
      'A minimal full-grain leather tote bag with interior pockets, hand-stitched details, and solid brass rivets.',
    variants: ['Cognac Tan', 'Midnight Black'],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p18',
    name: 'Solid Brass Key Ring',
    price: 1750,
    category: 'accessories',
    description:
      'A secure geometric key clasp machined from solid raw brass, which will develop a rich patina over time.',
    variants: ['Natural Brass'],
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p19',
    name: 'Wool Felt Laptop Sleeve',
    price: 2750,
    category: 'accessories',
    description:
      'Dense merino wool felt sleeve with premium leather closures, providing shock absorption and scratch resistance.',
    variants: ['13-inch', '15-inch', '16-inch'],
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p20',
    name: 'Hardcover Sketchbook',
    price: 1600,
    category: 'stationery',
    description:
      'Hardcover sketch diary with lay-flat binding and 160 pages of ink-proof, acid-free heavy cotton paper.',
    variants: ['Dotted grid', 'Blank white'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p21',
    name: 'Aluminum Fountain Pen',
    price: 3750,
    category: 'stationery',
    description: 'A precision-milled aluminum pen barrel with an anodized finish and a stainless steel medium nib.',
    variants: ['Black Ink', 'Blue Ink'],
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'p22',
    name: 'Desk Organizer Set',
    price: 5750,
    category: 'stationery',
    description:
      'Three-piece modular wooden tray set (pen tray, phone stand, paperclip tray) with slip-proof bottom pads.',
    variants: ['Oak Wood', 'Walnut Wood'],
    image: 'https://images.unsplash.com/photo-1591123720164-de1348028a82?auto=format&fit=crop&w=400&h=500&q=80',
  },
] as const;

export default products;