// ============================================================
// STAYCAPE TRAVEL COMPANY — Default Data Store
// All data is managed via localStorage. Admin panel can edit.
// Brand Color: #0D7C3E (Forest Green)
// ============================================================

const STAYCAPE_DEFAULTS = {

  settings: {
    whatsapp: '917034378660',
    phone1: '+91 7034 378 660',
    phone2: '+91 9744 030 890',
    email: 'staycapes@gmail.com',
    address: 'Kondotty, Kerala',
    website: 'staycape.in',
    instagram: '',
    facebook: '',
    adminPassword: 'Staycape@2024'
  },

  packages: [
    {
      id: 1, name: 'Sri Lanka', price: 48000, nights: 3, days: 4,
      badge: 'Featured', badgeClass: 'gold', featured: true, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1580181692722-b0ced30b1970?w=600&h=400&fit=crop&q=80',
      description: 'Experience the enchanting island paradise with pristine beaches, ancient temples and lush landscapes.'
    },
    {
      id: 2, name: 'Malaysia', price: 28000, nights: 3, days: 4,
      badge: 'Popular', badgeClass: 'green', featured: true, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1596422405526-9c8a89e24b83?w=600&h=400&fit=crop&q=80',
      description: 'Discover the vibrant culture, futuristic skyline and tropical rainforests of Malaysia.'
    },
    {
      id: 3, name: 'Thailand', price: 44000, nights: 3, days: 4,
      badge: 'Trending', badgeClass: 'blue', featured: true, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&q=80',
      description: 'The land of smiles — golden temples, turquoise waters and vibrant street food culture.'
    },
    {
      id: 4, name: 'Bali', price: 49000, nights: 3, days: 4,
      badge: 'Popular', badgeClass: 'green', featured: true, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&q=80',
      description: 'The Island of Gods — terraced rice paddies, spiritual temples and stunning sunsets.'
    },
    {
      id: 5, name: 'Vietnam', price: 58000, nights: 3, days: 4,
      badge: '', badgeClass: '', featured: false, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop&q=80',
      description: 'Sail through Ha Long Bay\'s emerald waters, explore ancient towns and vibrant cities.'
    },
    {
      id: 6, name: 'Japan', price: 290000, nights: 6, days: 7,
      badge: 'Luxury', badgeClass: 'gold', featured: true, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&q=80',
      description: 'Cherry blossoms, Mount Fuji, ancient temples and ultra-modern cities — the ultimate journey.'
    },
    {
      id: 7, name: 'Kenya', price: 190000, nights: 6, days: 7,
      badge: 'Adventure', badgeClass: 'adventure', featured: false, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&q=80',
      description: 'Witness the Great Migration, vast savannas and incredible wildlife in Africa\'s gem.'
    },
    {
      id: 8, name: 'Azerbaijan', price: 88000, nights: 4, days: 5,
      badge: 'Unique', badgeClass: 'blue', featured: false, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&h=400&fit=crop&q=80',
      description: 'Where East meets West — Baku\'s flame towers, old city and mud volcanoes await.'
    },
    {
      id: 9, name: 'Lakshadweep', price: 18000, nights: 4, days: 5,
      badge: 'Popular', badgeClass: 'green', featured: true, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop&q=80',
      description: 'India\'s hidden paradise — crystal lagoons, white sand beaches and vibrant coral reefs.'
    },
    {
      id: 10, name: 'Jaisalmer', price: 25000, nights: 3, days: 4,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&h=400&fit=crop&q=80',
      description: 'The Golden City — sand dunes, desert camps and the magnificent Jaisalmer Fort.'
    },
    {
      id: 11, name: 'Agra & Delhi', price: 18000, nights: 3, days: 4,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop&q=80',
      description: 'Witness the timeless Taj Mahal and the historic grandeur of India\'s capital.'
    },
    {
      id: 12, name: 'Manali', price: 20000, nights: 3, days: 4,
      badge: 'Popular', badgeClass: 'green', featured: true, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80',
      description: 'Snow-capped peaks, roaring rivers and apple orchards in the heart of the Himalayas.'
    },
    {
      id: 13, name: 'Kashmir', price: 28000, nights: 4, days: 5,
      badge: 'Trending', badgeClass: 'blue', featured: true, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&q=80',
      description: 'Paradise on Earth — Dal Lake, Mughal gardens, verdant meadows and snow peaks.'
    },
    {
      id: 14, name: 'Spiti Valley', price: 25000, nights: 4, days: 5,
      badge: 'Adventure', badgeClass: 'adventure', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1630914441122-2a7001a9571f?w=600&h=400&fit=crop&q=80',
      description: 'The Cold Desert Mountain Valley — high altitude monasteries and surreal landscapes.'
    },
    {
      id: 15, name: 'Kasol', price: 20000, nights: 3, days: 4,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1585016495481-91613a4a6e0f?w=600&h=400&fit=crop&q=80',
      description: 'The mini Israel of India — trekking trails, riverside camps and pine forests.'
    },
    {
      id: 16, name: 'Meghalaya', price: 25000, nights: 3, days: 4,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1598429074820-5c745f5bfd00?w=600&h=400&fit=crop&q=80',
      description: 'The Abode of Clouds — living root bridges, thundering waterfalls and pristine caves.'
    },
    {
      id: 17, name: 'Pondicherry', price: 22000, nights: 3, days: 4,
      badge: '', badgeClass: '', featured: false, active: false, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1590123715937-6de7e4017b22?w=600&h=400&fit=crop&q=80',
      description: 'The French Riviera of the East — colonial architecture, beaches and tranquility.'
    },
    {
      id: 18, name: 'Hyderabad', price: 28000, nights: 4, days: 5,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1609158239682-94451e90e745?w=600&h=400&fit=crop&q=80',
      description: 'The City of Pearls — Charminar, Golconda Fort and world-famous biryani.'
    },
    {
      id: 19, name: 'Alappuzha', price: 25000, nights: 3, days: 4,
      badge: 'Kerala Special', badgeClass: 'green', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&h=400&fit=crop&q=80',
      description: 'The Venice of the East — houseboat rides, serene backwaters and village life.'
    },
    {
      id: 20, name: 'Vagamon', price: 19000, nights: 2, days: 3,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&h=400&fit=crop&q=80',
      description: 'A misty hill station with rolling meadows, pine forests and cool mountain air.'
    },
    {
      id: 21, name: 'Munnar', price: 18000, nights: 3, days: 4,
      badge: 'Kerala Special', badgeClass: 'green', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop&q=80',
      description: 'Rolling tea gardens, misty mountains and breathtaking scenic beauty in Kerala.'
    },
    {
      id: 22, name: 'Ramakkalmedu', price: 20000, nights: 2, days: 3,
      badge: '', badgeClass: '', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&h=400&fit=crop&q=80',
      description: 'Hilltop vistas, wind turbines and cool breezes — a hidden gem in Kerala.'
    },
    {
      id: 23, name: 'Hampi', price: 20000, nights: 3, days: 4,
      badge: 'Heritage', badgeClass: 'gold', featured: false, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1629220842862-f42e3b834a7b?w=600&h=400&fit=crop&q=80',
      description: 'An ancient UNESCO heritage city — boulder landscapes, ruins and magnificent temples.'
    },
    {
      id: 24, name: 'Goa', price: 25000, nights: 3, days: 4,
      badge: 'Popular', badgeClass: 'green', featured: true, active: true, type: 'domestic',
      image: 'https://images.unsplash.com/photo-1512343479164-96a54c0e5a21?w=600&h=400&fit=crop&q=80',
      description: 'Sun, sand and sea — beaches, nightlife, seafood and Portuguese heritage await.'
    },
    {
      id: 25, name: 'Africa', price: 210000, nights: 5, days: 6,
      badge: 'Safari', badgeClass: 'gold', featured: false, active: true, type: 'international',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&q=80',
      description: 'The ultimate African safari — witness the Big Five across breathtaking landscapes.'
    }
  ],

  testimonials: [
    {
      id: 1, name: 'Arjun Menon', destination: 'Kashmir Trip',
      rating: 5, review: 'Absolutely wonderful experience! Staycape planned every detail perfectly. Dal Lake in winter was breathtaking and the shikara ride at sunrise — unforgettable. Will definitely book again!',
      date: '2024-11-15', active: true, photo: '', featured: true
    },
    {
      id: 2, name: 'Priya Nair', destination: 'Bali Package',
      rating: 5, review: 'The Bali trip was a dream come true. From the rice terraces to the temples and beach clubs — everything was perfectly arranged. Thank you Staycape for a flawless experience!',
      date: '2024-10-20', active: true, photo: '', featured: false
    },
    {
      id: 3, name: 'Mohammed Rafi', destination: 'Sri Lanka Tour',
      rating: 5, review: 'Had an amazing experience with Staycape. Everything was arranged perfectly and the trip was completely hassle-free. The team was responsive and professional throughout. Highly recommended!',
      date: '2024-09-08', active: true, photo: '', featured: false
    },
    {
      id: 4, name: 'Anjali Suresh', destination: 'Munnar Weekend',
      rating: 5, review: 'The Munnar trip was absolutely refreshing. The hotel selection was excellent and the tea plantation visit was unforgettable. Great value for money and superb service!',
      date: '2024-12-02', active: true, photo: '', featured: false
    },
    {
      id: 5, name: 'Rahul Kumar', destination: 'Thailand Package',
      rating: 5, review: 'Thailand with Staycape was the best decision I made! Phi Phi Islands, Bangkok city tour, temple visits — all perfectly planned within budget. 10/10 would recommend to everyone!',
      date: '2024-08-14', active: true, photo: '', featured: false
    }
  ]
};

// ============================================================
// Data access helpers
// ============================================================
function scGetSettings() {
  try { return JSON.parse(localStorage.getItem('staycape_settings')) || STAYCAPE_DEFAULTS.settings; }
  catch { return STAYCAPE_DEFAULTS.settings; }
}
function scGetPackages() {
  try { return JSON.parse(localStorage.getItem('staycape_packages')) || STAYCAPE_DEFAULTS.packages; }
  catch { return STAYCAPE_DEFAULTS.packages; }
}
function scGetTestimonials() {
  try { return JSON.parse(localStorage.getItem('staycape_testimonials')) || STAYCAPE_DEFAULTS.testimonials; }
  catch { return STAYCAPE_DEFAULTS.testimonials; }
}
function scGetPendingReviews() {
  try { return JSON.parse(localStorage.getItem('staycape_reviews_pending')) || []; }
  catch { return []; }
}
function scFormatPrice(price) {
  return '\u20b9' + price.toLocaleString('en-IN');
}
