// ============================================================
// STAYCAPE DATA LAYER
// Supabase for: Testimonials, Reviews, Stats, Settings
// Local for: Packages, Images
// ============================================================

// ============================================================
// SUPABASE CONFIGURATION
// ============================================================

const SUPABASE_URL = 'https://npsjhardarhtzgnkghmi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wc2poYXJkYXJodHpnbmtnaG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMzQ5MTgsImV4cCI6MjEwMzkxMDkxOH0.1l-bc46t7G0AQ5AV2xycTcTsSEiB5UwInxf2Hysi-hg';

// Initialize Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// SESSION / CACHE CONTROL
// ============================================================

const SESSION_ID =
    Date.now() + Math.random().toString(36).substring(2, 8);

function addCacheBust(url) {
    if (!url) return '';

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}_t=${Date.now()}&_sid=${SESSION_ID}`;
}

// ============================================================
// DESTINATION IMAGE DATABASE (LOCAL)
// All images are stored in /images/destinations/ folder
// ============================================================

const destinationImages = {
    "Munnar": {
        image: "images/destinations/munnar.jpg",
        alt: "Munnar Kerala tea plantations misty hills",
        description: "Endless tea gardens and mist-covered mountains in Munnar."
    },
    "Alappuzha": {
        image: "images/destinations/alappuzha.jpg",
        alt: "Alappuzha Kerala houseboat backwaters",
        description: "Traditional houseboats cruising through peaceful backwaters."
    },
    "Vagamon": {
        image: "images/destinations/vagamon.jpg",
        alt: "Vagamon Kerala rolling green hills",
        description: "Rolling green meadows and pine forests of Vagamon."
    },
    "Ramakkalmedu": {
        image: "images/destinations/ramakkalmedu.jpg",
        alt: "Ramakkalmedu Kerala hill station wind turbines",
        description: "Hilltop views with wind turbines and cool mountain breezes."
    },
    "Kashmir": {
        image: "images/destinations/kashmir.jpg",
        alt: "Kashmir Dal Lake shikaras mountains",
        description: "Dal Lake with traditional shikaras and Himalayan mountains."
    },
    "Manali": {
        image: "images/destinations/manali.jpg",
        alt: "Manali Himachal Pradesh snow mountains",
        description: "Snow-capped Himalayan peaks and pine forests of Manali."
    },
    "Kasol": {
        image: "images/destinations/kasol.jpg",
        alt: "Kasol Parvati Valley Himachal",
        description: "The beautiful Parvati River valley with pine forests."
    },
    "Spiti Valley": {
        image: "images/destinations/spiti-valley.jpg",
        alt: "Spiti Valley Himalayas desert landscape",
        description: "High-altitude desert landscape and ancient monasteries."
    },
    "Jaisalmer": {
        image: "images/destinations/jaisalmer.jpg",
        alt: "Jaisalmer Fort Golden City Rajasthan",
        description: "The golden Jaisalmer Fort rising above the Thar Desert."
    },
    "Hampi": {
        image: "images/destinations/hampi.jpg",
        alt: "Hampi Karnataka ruins temples",
        description: "Ancient ruins and giant granite boulders of Hampi."
    },
    "Goa": {
        image: "images/destinations/goa.jpg",
        alt: "Goa beach palm trees Arabian Sea",
        description: "Tropical beaches with palm trees and golden sand."
    },
    "Hyderabad": {
        image: "images/destinations/hyderabad.jpg",
        alt: "Hyderabad Charminar Old City",
        description: "The iconic Charminar and historic Old City."
    },
    "Lakshadweep": {
        image: "images/destinations/lakshadweep.jpg",
        alt: "Lakshadweep island turquoise lagoon",
        description: "Crystal-clear turquoise lagoon and tropical island paradise."
    },
    "Agra & Delhi": {
        image: "images/destinations/agra-delhi.jpg",
        alt: "Taj Mahal Agra India",
        description: "The iconic Taj Mahal and historic architectural heritage."
    },
    "Meghalaya": {
        image: "images/destinations/meghalaya.jpg",
        alt: "Meghalaya living root bridge forest",
        description: "Living root bridges surrounded by lush rainforest."
    },
    "Sri Lanka": {
        image: "images/destinations/sri-lanka.jpg",
        alt: "Sri Lanka tropical landscape beach",
        description: "Tropical landscapes and ancient heritage of Sri Lanka."
    },
    "Malaysia": {
        image: "images/destinations/malaysia.jpg",
        alt: "Kuala Lumpur Petronas Towers Malaysia",
        description: "Modern skyline and cultural fusion of Malaysia."
    },
    "Thailand": {
        image: "images/destinations/thailand.jpg",
        alt: "Thailand temple beach tropical",
        description: "Golden temples and turquoise waters of Thailand."
    },
    "Bali": {
        image: "images/destinations/bali.jpg",
        alt: "Bali rice terraces Indonesia",
        description: "Lush rice terraces and distinctive tropical landscape."
    },
    "Vietnam": {
        image: "images/destinations/vietnam.jpg",
        alt: "Ha Long Bay Vietnam limestone islands",
        description: "Ha Long Bay's limestone islands rising from emerald waters."
    },
    "Japan": {
        image: "images/destinations/japan.jpg",
        alt: "Japan Mount Fuji temple",
        description: "Classic Japanese scenery with temples and mountains."
    },
    "Kenya": {
        image: "images/destinations/kenya.jpg",
        alt: "Kenya Maasai Mara savanna",
        description: "Vast African savanna with acacia trees and wildlife."
    },
    "Azerbaijan": {
        image: "images/destinations/azerbaijan.jpg",
        alt: "Baku Azerbaijan Flame Towers",
        description: "Baku's iconic Flame Towers and Caspian city skyline."
    },
    "Africa": {
        image: "images/destinations/africa.jpg",
        alt: "African savanna sunset wildlife",
        description: "The iconic African savanna with wildlife and acacia trees."
    }
};

// ============================================================
// DESTINATION IMAGE HELPER (LOCAL)
// ============================================================

function getDestinationImage(destination, type = 'tour') {

    if (!destination) {
        return {
            image: 'images/destinations/placeholder.jpg',
            alt: 'Staycape travel destination',
            description: ''
        };
    }

    const data = destinationImages[destination];

    if (!data) {
        console.warn(
            `⚠️ No specific image configured for destination: ${destination}. Using placeholder.`
        );

        return {
            image: 'images/destinations/placeholder.jpg',
            alt: `${destination} destination`,
            description: ''
        };
    }

    return {
        image: addCacheBust(data.image),
        alt: data.alt,
        description: data.description
    };
}

// ============================================================
// LOCAL DATA STORE (Fallback)
// ============================================================

const localStore = {

    reviews: [],

    testimonials: [
        {
            id: 1,
            name: 'Arjun Menon',
            destination: 'Kashmir Trip',
            rating: 5,
            review: 'Absolutely wonderful experience! Staycape planned every detail perfectly. Dal Lake in winter was breathtaking and the shikara ride at sunrise — unforgettable. Will definitely book again!',
            photo: '',
            active: true,
            featured: true,
            created_at: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Priya Nair',
            destination: 'Bali Package',
            rating: 5,
            review: 'The Bali trip was a dream come true. From the rice terraces to the temples and beach clubs — everything was perfectly arranged. Thank you Staycape for a flawless experience!',
            photo: '',
            active: true,
            featured: false,
            created_at: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Mohammed Rafi',
            destination: 'Sri Lanka Tour',
            rating: 5,
            review: 'Had an amazing experience with Staycape. Everything was arranged perfectly and the trip was completely hassle-free. The team was responsive and professional throughout. Highly recommended!',
            photo: '',
            active: true,
            featured: false,
            created_at: new Date().toISOString()
        }
    ],

    // FALLBACK SETTINGS IF SUPABASE IS DOWN
settings: {
    whatsapp: '919744030890',
    whatsapp2: '919744403045',
    phone1: '+91 9744 030 890',
    phone2: '+91 9744 403 045',
    email: 'staycapes@gmail.com',
    address: 'Kondotty, Kerala',
    website: 'staycape.in',
    instagram: 'https://www.instagram.com/staycape_',
    facebook: '',
    adminPassword: 'Staycape@2024'
},

    packages: [
        { id: 21, name: 'Munnar', type: 'domestic', price: 18000, nights: 3, days: 4, badge: 'Kerala Special', badge_class: 'green', featured: false, active: true, description: 'Rolling tea gardens and breathtaking scenic beauty in Kerala.' },
        { id: 19, name: 'Alappuzha', type: 'domestic', price: 25000, nights: 3, days: 4, badge: 'Kerala Special', badge_class: 'green', featured: false, active: true, description: 'The Venice of the East — houseboat rides and serene backwaters.' },
        { id: 20, name: 'Vagamon', type: 'domestic', price: 19000, nights: 2, days: 3, badge: '', badge_class: '', featured: false, active: true, description: 'Misty hill station with rolling meadows and pine forests.' },
        { id: 22, name: 'Ramakkalmedu', type: 'domestic', price: 20000, nights: 2, days: 3, badge: '', badge_class: '', featured: false, active: true, description: 'Hilltop vistas, wind turbines, and cool breezes — a hidden gem in Kerala.' },
        { id: 13, name: 'Kashmir', type: 'domestic', price: 28000, nights: 4, days: 5, badge: 'Trending', badge_class: 'blue', featured: true, active: true, description: 'Paradise on Earth — Dal Lake, Mughal gardens, and snow-capped peaks.' },
        { id: 12, name: 'Manali', type: 'domestic', price: 20000, nights: 3, days: 4, badge: 'Popular', badge_class: 'green', featured: true, active: true, description: 'Snow-capped peaks, roaring rivers, and apple orchards in the Himalayas.' },
        { id: 15, name: 'Kasol', type: 'domestic', price: 20000, nights: 3, days: 4, badge: '', badge_class: '', featured: false, active: true, description: 'The mini Israel of India — trekking trails and pine forests.' },
        { id: 14, name: 'Spiti Valley', type: 'domestic', price: 25000, nights: 4, days: 5, badge: 'Adventure', badge_class: 'adventure', featured: false, active: true, description: 'The Cold Desert — high-altitude monasteries and surreal landscapes.' },
        { id: 10, name: 'Jaisalmer', type: 'domestic', price: 25000, nights: 3, days: 4, badge: '', badge_class: '', featured: false, active: true, description: 'The Golden City — desert dunes and the magnificent Jaisalmer Fort.' },
        { id: 23, name: 'Hampi', type: 'domestic', price: 20000, nights: 3, days: 4, badge: 'Heritage', badge_class: 'gold', featured: false, active: true, description: 'Ancient UNESCO heritage — boulder landscapes and magnificent temples.' },
        { id: 24, name: 'Goa', type: 'domestic', price: 25000, nights: 3, days: 4, badge: 'Popular', badge_class: 'green', featured: true, active: true, description: 'Sun, sand, and sea — beautiful beaches and Portuguese heritage.' },
        { id: 18, name: 'Hyderabad', type: 'domestic', price: 28000, nights: 4, days: 5, badge: '', badge_class: '', featured: false, active: true, description: 'The City of Pearls — Charminar, Golconda Fort, and world-famous biryani.' },
        { id: 9, name: 'Lakshadweep', type: 'domestic', price: 18000, nights: 4, days: 5, badge: 'Popular', badge_class: 'green', featured: true, active: true, description: 'India\'s hidden paradise — crystal lagoons and vibrant coral reefs.' },
        { id: 11, name: 'Agra & Delhi', type: 'domestic', price: 18000, nights: 3, days: 4, badge: '', badge_class: '', featured: false, active: true, description: 'The timeless Taj Mahal and the historic grandeur of India\'s capital.' },
        { id: 16, name: 'Meghalaya', type: 'domestic', price: 25000, nights: 3, days: 4, badge: '', badge_class: '', featured: false, active: true, description: 'The Abode of Clouds — living root bridges and thundering waterfalls.' },

        { id: 1, name: 'Sri Lanka', type: 'international', price: 48000, nights: 3, days: 4, badge: 'Featured', badge_class: 'gold', featured: true, active: true, description: 'Pristine beaches, ancient temples, and lush tea plantations — the pearl of the Indian Ocean.' },
        { id: 2, name: 'Malaysia', type: 'international', price: 28000, nights: 3, days: 4, badge: 'Popular', badge_class: 'blue', featured: true, active: true, description: 'Towering skyscrapers, tropical rainforests, and vibrant cultural fusion.' },
        { id: 3, name: 'Thailand', type: 'international', price: 44000, nights: 3, days: 4, badge: 'Trending', badge_class: 'blue', featured: true, active: true, description: 'Golden temples, turquoise waters, and the most vibrant street food culture in Asia.' },
        { id: 4, name: 'Bali', type: 'international', price: 49000, nights: 3, days: 4, badge: 'Popular', badge_class: 'green', featured: true, active: true, description: 'Terraced rice paddies, ancient spiritual temples, and spectacular sunsets.' },
        { id: 5, name: 'Vietnam', type: 'international', price: 58000, nights: 3, days: 4, badge: '', badge_class: '', featured: false, active: true, description: 'Ha Long Bay\'s emerald waters, ancient towns, and vibrant city life.' },
        { id: 6, name: 'Japan', type: 'international', price: 290000, nights: 6, days: 7, badge: 'Luxury', badge_class: 'gold', featured: true, active: true, description: 'Cherry blossoms, Mount Fuji, ancient temples and ultra-modern cities.' },
        { id: 7, name: 'Kenya', type: 'international', price: 190000, nights: 6, days: 7, badge: 'Adventure', badge_class: 'adventure', featured: false, active: true, description: 'Vast savannas, the Great Migration, and Africa\'s most incredible wildlife.' },
        { id: 8, name: 'Azerbaijan', type: 'international', price: 88000, nights: 4, days: 5, badge: 'Unique', badge_class: 'blue', featured: false, active: true, description: 'The Land of Fire — Baku\'s flame towers, old city, and unique mud volcanoes.' },
        { id: 25, name: 'Africa', type: 'international', price: 210000, nights: 5, days: 6, badge: 'Safari', badge_class: 'gold', featured: false, active: true, description: 'The wild heart of Africa — majestic savannas and breathtaking landscapes.' }
    ],

    stats: {
        happy_travellers: 131,
        destinations: 24,
        services_offered: 10,
        avg_rating: 5.0
    }
};

// ============================================================
// LOCAL STORAGE FUNCTIONS (Fallback)
// ============================================================

function saveToStorage() {
    try {
        const dataToSave = {
            reviews: localStore.reviews,
            testimonials: localStore.testimonials,
            settings: localStore.settings,
            stats: localStore.stats
        };
        localStorage.setItem('staycape_data', JSON.stringify(dataToSave));
    } catch (error) {
        console.warn('⚠️ Could not save Staycape data:', error);
    }
}

function loadFromStorage() {
    try {
        const saved = localStorage.getItem('staycape_data');
        if (!saved) return false;

        const data = JSON.parse(saved);

        if (Array.isArray(data.reviews)) localStore.reviews = data.reviews;
        if (Array.isArray(data.testimonials)) localStore.testimonials = data.testimonials;
        if (data.settings) localStore.settings = { ...localStore.settings, ...data.settings };
        if (data.stats) localStore.stats = { ...localStore.stats, ...data.stats };

        console.log('✅ Reviews/settings/testimonials loaded from localStorage');
        return true;
    } catch (error) {
        console.warn('⚠️ Could not load Staycape data:', error);
        return false;
    }
}

loadFromStorage();

// ============================================================
// ID HELPER
// ============================================================

function getNextId(arr) {
    if (!arr || arr.length === 0) return 1;
    return Math.max(...arr.map(item => item.id || 0)) + 1;
}

// ============================================================
// SETTINGS (SUPABASE + LOCAL FALLBACK) 
// ============================================================

async function scGetSettings() {
    try {
        const { data, error } = await supabaseClient
            .from('settings')
            .select('*')
            .eq('id', 1)
            .single();

        if (error) throw error;

        if (data) {
            // Map Supabase lowercase 'adminpassword' back to JS camelCase
            if (data.adminpassword) {
                data.adminPassword = data.adminpassword; 
                delete data.adminpassword;
            }

            localStore.settings = { ...localStore.settings, ...data };
            return localStore.settings;
        }

        return localStore.settings;

    } catch (error) {
        console.warn('⚠️ Supabase error fetching settings, using local fallback:', error);
        return localStore.settings;
    }
}

async function scUpdateSettings(settings) {
    try {
        // Map JS camelCase 'adminPassword' to Supabase lowercase 'adminpassword'
        if (settings.adminPassword) {
            settings.adminpassword = settings.adminPassword;
            delete settings.adminPassword;
        }

        const { data, error } = await supabaseClient
            .from('settings')
            .update(settings)
            .eq('id', 1)
            .select();

        if (error) throw error;

        // Map it back for local storage
        if (data && data[0] && data[0].adminpassword) {
            data[0].adminPassword = data[0].adminpassword;
            delete data[0].adminpassword;
        }

        localStore.settings = { ...localStore.settings, ...settings };
        saveToStorage();

        return { success: true, data: data ? data[0] : null };
    } catch (error) {
        console.error('❌ Supabase error updating settings:', error);
        localStore.settings = { ...localStore.settings, ...settings };
        saveToStorage();
        return { success: true };
    }
}

// ============================================================
// PACKAGES (Local)
// ============================================================

async function scGetPackages() {
    return localStore.packages.map(pkg => {
        const imageData = getDestinationImage(pkg.name, 'tour');
        return {
            ...pkg,
            image: imageData.image,
            imageAlt: imageData.alt,
            imageDescription: imageData.description,
            _imageSource: 'destinationImages',
            _session: SESSION_ID
        };
    });
}

// ============================================================
// EXPLORE DESTINATIONS (Local)
// ============================================================

async function scGetExploreDestinations() {
    return localStore.packages
        .filter(pkg => pkg.active)
        .map(pkg => {
            const imageData = getDestinationImage(pkg.name, 'explore');
            return {
                name: pkg.name,
                image: imageData.image,
                alt: `Explore ${imageData.alt}`,
                description: imageData.description,
                _imageSource: 'destinationImages',
                _session: SESSION_ID
            };
        });
}

// ============================================================
// TESTIMONIALS (Supabase + Local Fallback)
// ============================================================

async function scGetTestimonials() {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) return data;

        return localStore.testimonials;
    } catch (error) {
        console.warn('⚠️ Supabase error, using local testimonials:', error);
        return localStore.testimonials;
    }
}

async function scAddTestimonial(testimonialData) {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .insert([testimonialData])
            .select();

        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const newItem = { ...testimonialData, id: getNextId(localStore.testimonials), created_at: new Date().toISOString() };
        localStore.testimonials.push(newItem);
        saveToStorage();
        return { success: true, data: newItem };
    }
}

async function scUpdateTestimonial(id, testimonialData) {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .update(testimonialData)
            .eq('id', id)
            .select();

        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const idx = localStore.testimonials.findIndex(t => t.id === id);
        if (idx > -1) {
            localStore.testimonials[idx] = { ...localStore.testimonials[idx], ...testimonialData };
            saveToStorage();
            return { success: true, data: localStore.testimonials[idx] };
        }
        return { success: false, error: 'Testimonial not found' };
    }
}

async function scDeleteTestimonial(id) {
    try {
        const { error } = await supabaseClient
            .from('testimonials')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const idx = localStore.testimonials.findIndex(t => t.id === id);
        if (idx > -1) {
            localStore.testimonials.splice(idx, 1);
            saveToStorage();
            return { success: true };
        }
        return { success: false, error: 'Testimonial not found' };
    }
}

async function scToggleTestimonial(id) {
    try {
        const { data: current, error: fetchError } = await supabaseClient
            .from('testimonials')
            .select('active')
            .eq('id', id)
            .single();

        if (fetchError) throw fetchError;
        const { data, error } = await supabaseClient
            .from('testimonials')
            .update({ active: !current.active })
            .eq('id', id)
            .select();

        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const idx = localStore.testimonials.findIndex(t => t.id === id);
        if (idx > -1) {
            localStore.testimonials[idx].active = !localStore.testimonials[idx].active;
            saveToStorage();
            return { success: true };
        }
        return { success: false, error: 'Testimonial not found' };
    }
}

// ============================================================
// REVIEWS (Supabase + Local Fallback)
// ============================================================

async function scGetPendingReviews() {
    try {
        const { data, error } = await supabaseClient
            .from('reviews')
            .select('*')
            .eq('status', 'pending')
            .order('created_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) return data;

        return localStore.reviews;
    } catch (error) {
        console.warn('⚠️ Supabase error, using local reviews:', error);
        return localStore.reviews;
    }
}

async function scSubmitReview(reviewData) {
    try {
        if (!reviewData.name || !reviewData.destination || !reviewData.rating || !reviewData.review) {
            return { success: false, error: 'Missing required fields' };
        }

        const { data, error } = await supabaseClient
            .from('reviews')
            .insert([{ ...reviewData, status: 'pending' }])
            .select();

        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const newItem = { ...reviewData, id: getNextId(localStore.reviews), status: 'pending', created_at: new Date().toISOString() };
        localStore.reviews.push(newItem);
        saveToStorage();
        return { success: true, data: newItem };
    }
}

async function scApproveReview(id) {
    try {
        const { data: review, error: fetchError } = await supabaseClient
            .from('reviews')
            .select('*')
            .eq('id', id)
            .single();

        if (fetchError) throw fetchError;
        const testimonialData = {
            name: review.name,
            destination: review.destination,
            rating: review.rating,
            review: review.review,
            photo: review.photo || '',
            active: true,
            featured: false
        };

        const { error: testimonialError } = await supabaseClient
            .from('testimonials')
            .insert([testimonialData]);

        if (testimonialError) throw testimonialError;

        const { error: deleteError } = await supabaseClient
            .from('reviews')
            .delete()
            .eq('id', id);

        if (deleteError) throw deleteError;
        return { success: true };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const idx = localStore.reviews.findIndex(r => r.id === id);
        if (idx === -1) return { success: false, error: 'Review not found' };

        const review = localStore.reviews[idx];
        await scAddTestimonial({ name: review.name, destination: review.destination, rating: review.rating, review: review.review, photo: review.photo || '', active: true, featured: false });
        localStore.reviews.splice(idx, 1);
        saveToStorage();
        return { success: true };
    }
}

async function scRejectReview(id) {
    try {
        const { error } = await supabaseClient
            .from('reviews')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        const idx = localStore.reviews.findIndex(r => r.id === id);
        if (idx === -1) return { success: false, error: 'Review not found' };
        localStore.reviews.splice(idx, 1);
        saveToStorage();
        return { success: true };
    }
}

// ============================================================
// STATS (Supabase + Local Fallback)
// ============================================================

async function scGetStats() {
    try {
        const { data, error } = await supabaseClient
            .from('stats')
            .select('*')
            .limit(1)
            .single();

        if (error) throw error;
        if (data) return data;

        return calculateLocalStats();
    } catch (error) {
        console.warn('⚠️ Supabase error, using local stats:', error);
        return calculateLocalStats();
    }
}

function calculateLocalStats() {
    const activeTests = localStore.testimonials.filter(t => t.active);
    localStore.stats.happy_travellers = activeTests.length + 128;
    localStore.stats.avg_rating = activeTests.length > 0
        ? activeTests.reduce((sum, t) => sum + Number(t.rating || 0), 0) / activeTests.length
        : 5.0;
    localStore.stats.destinations = localStore.packages.filter(p => p.active).length;
    localStore.stats.services_offered = 10;
    return localStore.stats;
}

async function scUpdateStats() {
    try {
        const stats = calculateLocalStats();
        const { error } = await supabaseClient
            .from('stats')
            .update(stats)
            .eq('id', 1);

        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.warn('⚠️ Supabase error, using local fallback:', error);
        localStore.stats = calculateLocalStats();
        saveToStorage();
        return { success: true };
    }
}

// ============================================================
// PRICE FORMATTER
// ============================================================

function scFormatPrice(price) {
    return '\u20b9' + Number(price).toLocaleString('en-IN');
}

// ============================================================
// GLOBAL FUNCTIONS
// ============================================================

window.scGetSettings = scGetSettings;
window.scUpdateSettings = scUpdateSettings;
window.scGetPackages = scGetPackages;
window.scGetExploreDestinations = scGetExploreDestinations;
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
window.getDestinationImage = getDestinationImage;

// ============================================================
// INITIALIZATION
// ============================================================

console.log('✅ STAYCAPE DATA LAYER INITIALIZED');
console.log('🖼️ Destination-specific image system active');
console.log('📦 Packages:', localStore.packages.length);
console.log('🌍 Destinations with images:', Object.keys(destinationImages).length);
console.log('💾 Supabase enabled for: Settings, Testimonials, Reviews, Stats');
console.log('📁 Local for: Packages, Images');