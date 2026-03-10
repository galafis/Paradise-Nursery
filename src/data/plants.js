const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45.99,
    category: "Indoor",
    description: "Iconic split-leaf tropical plant that adds a jungle feel to any room.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 29.99,
    category: "Indoor",
    description: "Low-maintenance air-purifying plant, perfect for beginners.",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 34.99,
    category: "Indoor",
    description: "Elegant white blooms with dark green foliage, thrives in low light.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400"
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 65.99,
    category: "Indoor",
    description: "Statement plant with large, violin-shaped leaves for modern interiors.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  },
  {
    id: 5,
    name: "Pothos Golden",
    price: 18.99,
    category: "Indoor",
    description: "Trailing vine with heart-shaped variegated leaves, very easy to grow.",
    image: "https://images.unsplash.com/photo-1572688484438-313a56e6dc34?w=400"
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 22.99,
    category: "Succulent",
    description: "Medicinal succulent with soothing gel inside thick, fleshy leaves.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 7,
    name: "Echeveria Elegans",
    price: 14.99,
    category: "Succulent",
    description: "Rosette-shaped succulent with pale blue-green leaves, drought tolerant.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 24.99,
    category: "Succulent",
    description: "Lucky money tree with thick, oval-shaped leaves on woody stems.",
    image: "https://images.unsplash.com/photo-1509937528035-ad76f8df97a1?w=400"
  },
  {
    id: 9,
    name: "Lavender",
    price: 19.99,
    category: "Aromatic",
    description: "Fragrant purple flowers loved by pollinators, calming aroma.",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400"
  },
  {
    id: 10,
    name: "Rosemary",
    price: 15.99,
    category: "Aromatic",
    description: "Aromatic herb used in cooking, with needle-like evergreen leaves.",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400"
  },
  {
    id: 11,
    name: "Basil",
    price: 9.99,
    category: "Aromatic",
    description: "Essential culinary herb with sweet, peppery flavor for fresh cooking.",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400"
  },
  {
    id: 12,
    name: "Rose Bush",
    price: 39.99,
    category: "Outdoor",
    description: "Classic flowering shrub producing fragrant blooms throughout the season.",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400"
  },
  {
    id: 13,
    name: "Sunflower",
    price: 12.99,
    category: "Outdoor",
    description: "Tall, cheerful flower that follows the sun with bright yellow petals.",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400"
  },
  {
    id: 14,
    name: "Hibiscus",
    price: 32.99,
    category: "Outdoor",
    description: "Tropical beauty with large, colorful trumpet-shaped flowers.",
    image: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=400"
  },
  {
    id: 15,
    name: "Boston Fern",
    price: 27.99,
    category: "Indoor",
    description: "Lush, feathery fronds cascading from hanging baskets or shelves.",
    image: "https://images.unsplash.com/photo-1597055181300-b7e328e1bdae?w=400"
  },
  {
    id: 16,
    name: "Rubber Plant",
    price: 38.99,
    category: "Indoor",
    description: "Bold, glossy dark leaves that make a dramatic interior statement.",
    image: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=400"
  },
  {
    id: 17,
    name: "String of Pearls",
    price: 21.99,
    category: "Succulent",
    description: "Delicate trailing succulent with bead-like spherical leaves.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  },
  {
    id: 18,
    name: "ZZ Plant",
    price: 33.99,
    category: "Indoor",
    description: "Nearly indestructible plant with waxy, dark green compound leaves.",
    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400"
  },
  {
    id: 19,
    name: "Mint",
    price: 8.99,
    category: "Aromatic",
    description: "Fast-growing herb with refreshing flavor for teas and culinary use.",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400"
  },
  {
    id: 20,
    name: "Bird of Paradise",
    price: 75.99,
    category: "Indoor",
    description: "Dramatic tropical plant with banana-like leaves that commands attention.",
    image: "https://images.unsplash.com/photo-1616690002178-4a680869c8ff?w=400"
  },
  {
    id: 21,
    name: "Orchid Phalaenopsis",
    price: 42.99,
    category: "Indoor",
    description: "Elegant flowering plant with long-lasting blooms in various colors.",
    image: "https://images.unsplash.com/photo-1566873535350-a3f5503d856a?w=400"
  },
  {
    id: 22,
    name: "Cactus Mix",
    price: 16.99,
    category: "Succulent",
    description: "Assorted desert cacti in various shapes and sizes, minimal care needed.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  }
];

export default plants;
