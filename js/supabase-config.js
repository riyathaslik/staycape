// ============================================================
// STAYCAPE DATA LAYER - No External Dependencies
// All data stored in memory with localStorage backup
// ============================================================

// ============================================================
// DATA STORE
// ============================================================
const localStore = {
    reviews: [],
    testimonials: [
        {
            id: 1, name: 'Arjun Menon', destination: 'Kashmir Trip',
            rating: 5, review: 'Absolutely wonderful experience! Staycape planned every detail perfectly. Dal Lake in winter was breathtaking and the shikara ride at sunrise — unforgettable. Will definitely book again!',
            photo: '', active: true, featured: true, created_at: new Date().toISOString()
        },
        {
            id: 2, name: 'Priya Nair', destination: 'Bali Package',
            rating: 5, review: 'The Bali trip was a dream come true. From the rice terraces to the temples and beach clubs — everything was perfectly arranged. Thank you Staycape for a flawless experience!',
            photo: '', active: true, featured: false, created_at: new Date().toISOString()
        },
        {
            id: 3, name: 'Mohammed Rafi', destination: 'Sri Lanka Tour',
            rating: 5, review: 'Had an amazing experience with Staycape. Everything was arranged perfectly and the trip was completely hassle-free. The team was responsive and professional throughout. Highly recommended!',
            photo: '', active: true, featured: false, created_at: new Date().toISOString()
        }
    ],
    settings: {
        whatsapp: '917034378660',
        whatsapp2: '919744030890',
        phone1: '+91 7034 378 660',
        phone2: '+91 9744 030 890',
        email: 'staycapes@gmail.com',
        address: 'Kondotty, Kerala',
        website: 'staycape.in',
        instagram: 'https://www.instagram.com/staycape_',
        facebook: '',
        adminPassword: 'Staycape@2024'
    },
    packages: [
        { id: 1, name: 'Sri Lanka', type: 'international', price: 48000, nights: 3, days: 4, badge: 'Featured', badge_class: 'gold', image: 'https://images.unsplash.com/photo-1580181692722-b0ced30b1970?w=600&h=400&fit=crop&q=80', description: 'Experience the enchanting island paradise.', featured: true, active: true },
        { id: 2, name: 'Malaysia', type: 'international', price: 28000, nights: 3, days: 4, badge: 'Popular', badge_class: 'blue', image: 'https://images.unsplash.com/photo-1596422405526-9c8a89e24b83?w=600&h=400&fit=crop&q=80', description: 'Discover the vibrant culture.', featured: true, active: true },
        { id: 3, name: 'Thailand', type: 'international', price: 44000, nights: 3, days: 4, badge: 'Trending', badge_class: 'blue', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&q=80', description: 'The land of smiles.', featured: true, active: true },
        { id: 4, name: 'Bali', type: 'international', price: 49000, nights: 3, days: 4, badge: 'Popular', badge_class: 'green', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&q=80', description: 'The Island of Gods.', featured: true, active: true },
        { id: 5, name: 'Kashmir', type: 'domestic', price: 28000, nights: 4, days: 5, badge: 'Trending', badge_class: 'blue', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&q=80', description: 'Paradise on Earth.', featured: true, active: true },
        { id: 6, name: 'Goa', type: 'domestic', price: 25000, nights: 3, days: 4, badge: 'Popular', badge_class: 'green', image: 'https://images.unsplash.com/photo-1512343479164-96a54c0e5a21?w=600&h=400&fit=crop&q=80', description: 'Sun, sand and sea.', featured: true, active: true },
        { id: 7, name: 'Munnar', type: 'domestic', price: 18000, nights: 3, days: 4, badge: 'Kerala Special', badge_class: 'green', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop&q=80', description: 'Rolling tea gardens, misty mountains.', featured: false, active: true },
        { id: 8, name: 'Manali', type: 'domestic', price: 20000, nights: 3, days: 4, badge: 'Popular', badge_class: 'green', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80', description: 'Snow-capped peaks and apple orchards.', featured: true, active: true },
        { id: 9, name: 'Vietnam', type: 'international', price: 58000, nights: 3, days: 4, badge: '', badge_class: '', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop&q=80', description: 'Ha Long Bay and ancient towns.', featured: false, active: true },
        { id: 10, name: 'Japan', type: 'international', price: 290000, nights: 6, days: 7, badge: 'Luxury', badge_class: 'gold', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&q=80', description: 'Cherry blossoms and Mount Fuji.', featured: true, active: true }
    ],
    stats: {
        happy_travellers: 131,
        destinations: 10,
        services_offered: 10,
        avg_rating: 5.0
    }
};

// Load saved data from localStorage
function loadFromStorage() {
    try {
        const saved = localStorage.getItem('staycape_data');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.reviews) localStore.reviews = data.reviews;
            if (data.testimonials) localStore.testimonials = data.testimonials;
            if (data.settings) localStore.settings = data.settings;
            if (data.stats) localStore.stats = data.stats;
            console.log('✅ Data loaded from localStorage');
        }
    } catch (e) {
        console.warn('⚠️ Could not load from localStorage:', e);
    }
}

// Save data to localStorage
function saveToStorage() {
    try {
        localStorage.setItem('staycape_data', JSON.stringify({
            reviews: localStore.reviews,
            testimonials: localStore.testimonials,
            settings: localStore.settings,
            stats: localStore.stats
        }));
        console.log('✅ Data saved to localStorage');
    } catch (e) {
        console.warn('⚠️ Could not save to localStorage:', e);
    }
}

// Load existing data
loadFromStorage();

// Helper to get next ID
function getNextId(arr) {
    if (!arr || arr.length === 0) return 1;
    return Math.max(...arr.map(item => item.id || 0)) + 1;
}

// ============================================================
// DATA FUNCTIONS
// ============================================================

// ---------- Settings ----------
async function scGetSettings() {
    return localStore.settings;
}

async function scUpdateSettings(settings) {
    localStore.settings = { ...localStore.settings, ...settings };
    saveToStorage();
    return { success: true };
}

// ---------- Packages ----------
async function scGetPackages() {
    return localStore.packages;
}

// ---------- Testimonials ----------
async function scGetTestimonials() {
    return localStore.testimonials;
}

async function scAddTestimonial(testimonialData) {
    const newItem = {
        ...testimonialData,
        id: getNextId(localStore.testimonials),
        created_at: new Date().toISOString()
    };
    localStore.testimonials.push(newItem);
    saveToStorage();
    return { success: true, data: newItem };
}

async function scUpdateTestimonial(id, testimonialData) {
    const idx = localStore.testimonials.findIndex(t => t.id === id);
    if (idx > -1) {
        localStore.testimonials[idx] = { ...localStore.testimonials[idx], ...testimonialData };
        saveToStorage();
        return { success: true, data: localStore.testimonials[idx] };
    }
    return { success: false, error: 'Testimonial not found' };
}

async function scDeleteTestimonial(id) {
    const idx = localStore.testimonials.findIndex(t => t.id === id);
    if (idx > -1) {
        localStore.testimonials.splice(idx, 1);
        saveToStorage();
        return { success: true };
    }
    return { success: false, error: 'Testimonial not found' };
}

async function scToggleTestimonial(id) {
    const idx = localStore.testimonials.findIndex(t => t.id === id);
    if (idx > -1) {
        localStore.testimonials[idx].active = !localStore.testimonials[idx].active;
        saveToStorage();
        return { success: true };
    }
    return { success: false, error: 'Testimonial not found' };
}

// ---------- Reviews ----------
async function scGetPendingReviews() {
    return localStore.reviews;
}

async function scSubmitReview(reviewData) {
    console.log('📝 Submitting review:', reviewData);
    
    try {
        // Validate
        if (!reviewData.name || !reviewData.destination || !reviewData.rating || !reviewData.review) {
            return { success: false, error: 'Missing required fields' };
        }

        const newItem = {
            id: getNextId(localStore.reviews),
            name: reviewData.name,
            contact: reviewData.contact || '',
            destination: reviewData.destination,
            rating: reviewData.rating,
            review: reviewData.review,
            photo: reviewData.photo || '',
            status: 'pending',
            created_at: new Date().toISOString()
        };
        
        localStore.reviews.push(newItem);
        saveToStorage();
        console.log('✅ Review stored successfully:', newItem);
        
        return { success: true, data: newItem };

    } catch (error) {
        console.error('❌ Error submitting review:', error);
        return { success: false, error: error.message };
    }
}

async function scApproveReview(id) {
    const idx = localStore.reviews.findIndex(r => r.id === id);
    if (idx === -1) {
        return { success: false, error: 'Review not found' };
    }
    
    const review = localStore.reviews[idx];
    
    // Add to testimonials
    await scAddTestimonial({
        name: review.name,
        destination: review.destination,
        rating: review.rating,
        review: review.review,
        photo: review.photo || '',
        active: true,
        featured: false
    });
    
    // Remove from reviews
    localStore.reviews.splice(idx, 1);
    saveToStorage();
    
    return { success: true };
}

async function scRejectReview(id) {
    const idx = localStore.reviews.findIndex(r => r.id === id);
    if (idx === -1) {
        return { success: false, error: 'Review not found' };
    }
    
    localStore.reviews.splice(idx, 1);
    saveToStorage();
    
    return { success: true };
}

// ---------- Stats ----------
async function scGetStats() {
    // Update stats based on current data
    const activeTests = localStore.testimonials.filter(t => t.active);
    localStore.stats.happy_travellers = activeTests.length + 128;
    localStore.stats.avg_rating = activeTests.length > 0 
        ? activeTests.reduce((sum, t) => sum + t.rating, 0) / activeTests.length 
        : 5.0;
    localStore.stats.destinations = localStore.packages.filter(p => p.active).length;
    localStore.stats.services_offered = 10;
    
    return localStore.stats;
}

async function scUpdateStats() {
    // Just call scGetStats to update
    await scGetStats();
    saveToStorage();
    return { success: true };
}

// ---------- Utility ----------
function scFormatPrice(price) {
    return '\u20b9' + price.toLocaleString('en-IN');
}

// ============================================================
// EXPOSE ALL FUNCTIONS TO GLOBAL SCOPE
// ============================================================
window.scGetSettings = scGetSettings;
window.scUpdateSettings = scUpdateSettings;
window.scGetPackages = scGetPackages;
window.scGetTestimonials = scGetTestimonials;
window.scAddTestimonial = scAddTestimonial;
window.scUpdateTestimonial = scUpdateTestimonial;
window.scDeleteTestimonial = scDeleteTestimonial;
window.scToggleTestimonial = scToggleTestimonial;
window.scGetPendingReviews = scGetPendingReviews;
window.scSubmitReview = scSubmitReview;
window.scApproveReview = scApproveReview;
window.scRejectReview = scRejectReview;
window.scGetStats = scGetStats;
window.scUpdateStats = scUpdateStats;
window.scFormatPrice = scFormatPrice;

console.log('✅ Staycape data layer initialized successfully!');
console.log('📝 Reviews:', localStore.reviews.length, 'pending');
console.log('📝 Testimonials:', localStore.testimonials.length, 'total');
console.log('📝 Packages:', localStore.packages.length, 'total');
console.log('💾 Data is saved to localStorage automatically');
console.log('✅ Review submission is ready!');