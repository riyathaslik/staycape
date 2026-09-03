// ============================================================
// STAYCAPE DATA LAYER
// Destination-specific travel images with local paths
// ============================================================

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
// DESTINATION IMAGE DATABASE
// All images are stored in /images/destinations/ folder
// ============================================================

const destinationImages = {

    // ========================================================
    // KERALA - God's Own Country
    // ========================================================

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

    "Wayanad": {
        image: "images/destinations/wayanad.jpg",
        alt: "Wayanad Kerala lush green forests",
        description: "Lush green forests, waterfalls and wildlife in Wayanad."
    },


    // ========================================================
    // HIMACHAL / NORTH INDIA
    // ========================================================

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

    "Shimla": {
        image: "images/destinations/shimla.jpg",
        alt: "Shimla Himachal Pradesh hill station",
        description: "Colonial-era architecture and pine-covered hills of Shimla."
    },


    // ========================================================
    // RAJASTHAN
    // ========================================================

    "Jaisalmer": {
        image: "images/destinations/jaisalmer.jpg",
        alt: "Jaisalmer Fort Golden City Rajasthan",
        description: "The golden Jaisalmer Fort rising above the Thar Desert."
    },

    "Jaipur": {
        image: "images/destinations/jaipur.jpg",
        alt: "Jaipur Pink City Rajasthan",
        description: "The Pink City with majestic forts and palaces."
    },

    "Udaipur": {
        image: "images/destinations/udaipur.jpg",
        alt: "Udaipur Lake City Rajasthan",
        description: "The City of Lakes with magnificent palaces and temples."
    },


    // ========================================================
    // SOUTH INDIA
    // ========================================================

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

    "Pondicherry": {
        image: "images/destinations/pondicherry.jpg",
        alt: "Pondicherry French colonial architecture",
        description: "French-colonial streets and colorful architecture."
    },

    "Hyderabad": {
        image: "images/destinations/hyderabad.jpg",
        alt: "Hyderabad Charminar Old City",
        description: "The iconic Charminar and historic Old City."
    },

    "Kodaikanal": {
        image: "images/destinations/kodaikanal.jpg",
        alt: "Kodaikanal Tamil Nadu hill station",
        description: "The Princess of Hill Stations with misty valleys."
    },


    // ========================================================
    // ISLAND DESTINATIONS
    // ========================================================

    "Lakshadweep": {
        image: "images/destinations/lakshadweep.jpg",
        alt: "Lakshadweep island turquoise lagoon",
        description: "Crystal-clear turquoise lagoon and tropical island paradise."
    },

    "Andaman": {
        image: "images/destinations/andaman.jpg",
        alt: "Andaman Islands beach palm trees",
        description: "Pristine beaches and crystal-clear waters of Andaman."
    },


    // ========================================================
    // AGRA / DELHI
    // ========================================================

    "Agra & Delhi": {
        image: "images/destinations/agra-delhi.jpg",
        alt: "Taj Mahal Agra India",
        description: "The iconic Taj Mahal and historic architectural heritage."
    },


    // ========================================================
    // MEGHALAYA
    // ========================================================

    "Meghalaya": {
        image: "images/destinations/meghalaya.jpg",
        alt: "Meghalaya living root bridge forest",
        description: "Living root bridges surrounded by lush rainforest."
    },


    // ========================================================
    // INTERNATIONAL
    // ========================================================

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
    },

    "Dubai": {
        image: "images/destinations/dubai.jpg",
        alt: "Dubai Burj Khalifa city skyline",
        description: "Modern architecture and luxury of Dubai."
    },

    "Singapore": {
        image: "images/destinations/singapore.jpg",
        alt: "Singapore Marina Bay Sands",
        description: "The futuristic skyline and gardens of Singapore."
    }
};


// ============================================================
// DESTINATION IMAGE HELPER
// ============================================================

function getDestinationImage(destination, type = 'tour') {

    if (!destination) {
        return {
            image: '',
            alt: 'Staycape travel destination',
            description: ''
        };
    }

    const data = destinationImages[destination];

    if (!data) {
        console.warn(
            `⚠️ No specific image configured for destination: ${destination}`
        );

        return {
            image: '',
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
// DATA STORE
// ============================================================

const localStore = {

    // ========================================================
    // REVIEWS
    // ========================================================

    reviews: [],


    // ========================================================
    // TESTIMONIALS
    // ========================================================

    testimonials: [
        {
            id: 1,
            name: 'Arjun Menon',
            destination: 'Kashmir Trip',
            rating: 5,
            review:
                'Absolutely wonderful experience! Staycape planned every detail perfectly. Dal Lake in winter was breathtaking and the shikara ride at sunrise — unforgettable. Will definitely book again!',
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
            review:
                'The Bali trip was a dream come true. From the rice terraces to the temples and beach clubs — everything was perfectly arranged. Thank you Staycape for a flawless experience!',
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
            review:
                'Had an amazing experience with Staycape. Everything was arranged perfectly and the trip was completely hassle-free. The team was responsive and professional throughout. Highly recommended!',
            photo: '',
            active: true,
            featured: false,
            created_at: new Date().toISOString()
        }
    ],


    // ========================================================
    // SETTINGS
    // ========================================================

    settings: {
        whatsapp: '917034378660',
        whatsapp2: '919744030890',

        phone1: '+91 7034 378 660',
        phone2: '+91 9744 030 890',

        email: 'staycapes@gmail.com',

        address: 'Kondotty, Kerala',

        website: 'staycape.in',

        instagram:
            'https://www.instagram.com/staycape_',

        facebook: '',

        adminPassword: 'Staycape@2024'
    },


    // ========================================================
    // PACKAGES - 33 Destinations
    // ========================================================

    packages: [

        // ====================================================
        // DOMESTIC PACKAGES (22)
        // ====================================================

        {
            id: 21,
            name: 'Munnar',
            type: 'domestic',
            price: 18000,
            nights: 3,
            days: 4,
            badge: 'Kerala Special',
            badge_class: 'green',
            featured: false,
            active: true,
            description:
                'Rolling tea gardens and breathtaking scenic beauty in Kerala.'
        },

        {
            id: 19,
            name: 'Alappuzha',
            type: 'domestic',
            price: 25000,
            nights: 3,
            days: 4,
            badge: 'Kerala Special',
            badge_class: 'green',
            featured: false,
            active: true,
            description:
                'The Venice of the East — houseboat rides and serene backwaters.'
        },

        {
            id: 20,
            name: 'Vagamon',
            type: 'domestic',
            price: 19000,
            nights: 2,
            days: 3,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'Misty hill station with rolling meadows and pine forests.'
        },

        {
            id: 22,
            name: 'Ramakkalmedu',
            type: 'domestic',
            price: 20000,
            nights: 2,
            days: 3,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'Hilltop vistas, wind turbines, and cool breezes — a hidden gem in Kerala.'
        },

        {
            id: 26,
            name: 'Wayanad',
            type: 'domestic',
            price: 22000,
            nights: 3,
            days: 4,
            badge: 'Kerala Special',
            badge_class: 'green',
            featured: false,
            active: true,
            description:
                'Lush forests, waterfalls and wildlife in the heart of Kerala.'
        },

        {
            id: 13,
            name: 'Kashmir',
            type: 'domestic',
            price: 28000,
            nights: 4,
            days: 5,
            badge: 'Trending',
            badge_class: 'blue',
            featured: true,
            active: true,
            description:
                'Paradise on Earth — Dal Lake, Mughal gardens, and snow-capped peaks.'
        },

        {
            id: 12,
            name: 'Manali',
            type: 'domestic',
            price: 20000,
            nights: 3,
            days: 4,
            badge: 'Popular',
            badge_class: 'green',
            featured: true,
            active: true,
            description:
                'Snow-capped peaks, roaring rivers, and apple orchards in the Himalayas.'
        },

        {
            id: 15,
            name: 'Kasol',
            type: 'domestic',
            price: 20000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The mini Israel of India — trekking trails and pine forests.'
        },

        {
            id: 14,
            name: 'Spiti Valley',
            type: 'domestic',
            price: 25000,
            nights: 4,
            days: 5,
            badge: 'Adventure',
            badge_class: 'adventure',
            featured: false,
            active: true,
            description:
                'The Cold Desert — high-altitude monasteries and surreal landscapes.'
        },

        {
            id: 27,
            name: 'Shimla',
            type: 'domestic',
            price: 22000,
            nights: 3,
            days: 4,
            badge: 'Popular',
            badge_class: 'green',
            featured: false,
            active: true,
            description:
                'The Queen of Hills — colonial charm and pine-covered mountains.'
        },

        {
            id: 10,
            name: 'Jaisalmer',
            type: 'domestic',
            price: 25000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The Golden City — desert dunes and the magnificent Jaisalmer Fort.'
        },

        {
            id: 28,
            name: 'Jaipur',
            type: 'domestic',
            price: 23000,
            nights: 3,
            days: 4,
            badge: 'Heritage',
            badge_class: 'gold',
            featured: false,
            active: true,
            description:
                'The Pink City — magnificent forts, palaces and vibrant culture.'
        },

        {
            id: 29,
            name: 'Udaipur',
            type: 'domestic',
            price: 26000,
            nights: 3,
            days: 4,
            badge: 'Heritage',
            badge_class: 'gold',
            featured: false,
            active: true,
            description:
                'The City of Lakes — romantic palaces and serene water bodies.'
        },

        {
            id: 23,
            name: 'Hampi',
            type: 'domestic',
            price: 20000,
            nights: 3,
            days: 4,
            badge: 'Heritage',
            badge_class: 'gold',
            featured: false,
            active: true,
            description:
                'Ancient UNESCO heritage — boulder landscapes and magnificent temples.'
        },

        {
            id: 24,
            name: 'Goa',
            type: 'domestic',
            price: 25000,
            nights: 3,
            days: 4,
            badge: 'Popular',
            badge_class: 'green',
            featured: true,
            active: true,
            description:
                'Sun, sand, and sea — beautiful beaches and Portuguese heritage.'
        },

        {
            id: 17,
            name: 'Pondicherry',
            type: 'domestic',
            price: 22000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The French Riviera of the East — colonial architecture and tranquility.'
        },

        {
            id: 18,
            name: 'Hyderabad',
            type: 'domestic',
            price: 28000,
            nights: 4,
            days: 5,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The City of Pearls — Charminar, Golconda Fort, and world-famous biryani.'
        },

        {
            id: 30,
            name: 'Kodaikanal',
            type: 'domestic',
            price: 21000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The Princess of Hill Stations — misty valleys and scenic lakes.'
        },

        {
            id: 9,
            name: 'Lakshadweep',
            type: 'domestic',
            price: 18000,
            nights: 4,
            days: 5,
            badge: 'Popular',
            badge_class: 'green',
            featured: true,
            active: true,
            description:
                'India\'s hidden paradise — crystal lagoons and vibrant coral reefs.'
        },

        {
            id: 31,
            name: 'Andaman',
            type: 'domestic',
            price: 35000,
            nights: 5,
            days: 6,
            badge: 'Popular',
            badge_class: 'green',
            featured: true,
            active: true,
            description:
                'Pristine beaches, crystal-clear waters and tropical island bliss.'
        },

        {
            id: 11,
            name: 'Agra & Delhi',
            type: 'domestic',
            price: 18000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The timeless Taj Mahal and the historic grandeur of India\'s capital.'
        },

        {
            id: 16,
            name: 'Meghalaya',
            type: 'domestic',
            price: 25000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'The Abode of Clouds — living root bridges and thundering waterfalls.'
        },


        // ====================================================
        // INTERNATIONAL PACKAGES (11)
        // ====================================================

        {
            id: 1,
            name: 'Sri Lanka',
            type: 'international',
            price: 48000,
            nights: 3,
            days: 4,
            badge: 'Featured',
            badge_class: 'gold',
            featured: true,
            active: true,
            description:
                'Pristine beaches, ancient temples, and lush tea plantations — the pearl of the Indian Ocean.'
        },

        {
            id: 2,
            name: 'Malaysia',
            type: 'international',
            price: 28000,
            nights: 3,
            days: 4,
            badge: 'Popular',
            badge_class: 'blue',
            featured: true,
            active: true,
            description:
                'Towering skyscrapers, tropical rainforests, and vibrant cultural fusion.'
        },

        {
            id: 3,
            name: 'Thailand',
            type: 'international',
            price: 44000,
            nights: 3,
            days: 4,
            badge: 'Trending',
            badge_class: 'blue',
            featured: true,
            active: true,
            description:
                'Golden temples, turquoise waters, and the most vibrant street food culture in Asia.'
        },

        {
            id: 4,
            name: 'Bali',
            type: 'international',
            price: 49000,
            nights: 3,
            days: 4,
            badge: 'Popular',
            badge_class: 'green',
            featured: true,
            active: true,
            description:
                'Terraced rice paddies, ancient spiritual temples, and spectacular sunsets.'
        },

        {
            id: 5,
            name: 'Vietnam',
            type: 'international',
            price: 58000,
            nights: 3,
            days: 4,
            badge: '',
            badge_class: '',
            featured: false,
            active: true,
            description:
                'Ha Long Bay\'s emerald waters, ancient towns, and vibrant city life.'
        },

        {
            id: 6,
            name: 'Japan',
            type: 'international',
            price: 290000,
            nights: 6,
            days: 7,
            badge: 'Luxury',
            badge_class: 'gold',
            featured: true,
            active: true,
            description:
                'Cherry blossoms, Mount Fuji, ancient temples and ultra-modern cities.'
        },

        {
            id: 7,
            name: 'Kenya',
            type: 'international',
            price: 190000,
            nights: 6,
            days: 7,
            badge: 'Adventure',
            badge_class: 'adventure',
            featured: false,
            active: true,
            description:
                'Vast savannas, the Great Migration, and Africa\'s most incredible wildlife.'
        },

        {
            id: 8,
            name: 'Azerbaijan',
            type: 'international',
            price: 88000,
            nights: 4,
            days: 5,
            badge: 'Unique',
            badge_class: 'blue',
            featured: false,
            active: true,
            description:
                'The Land of Fire — Baku\'s flame towers, old city, and unique mud volcanoes.'
        },

        {
            id: 25,
            name: 'Africa',
            type: 'international',
            price: 210000,
            nights: 5,
            days: 6,
            badge: 'Safari',
            badge_class: 'gold',
            featured: false,
            active: true,
            description:
                'The wild heart of Africa — majestic savannas and breathtaking landscapes.'
        },

        {
            id: 32,
            name: 'Dubai',
            type: 'international',
            price: 65000,
            nights: 4,
            days: 5,
            badge: 'Luxury',
            badge_class: 'gold',
            featured: true,
            active: true,
            description:
                'Modern architecture, luxury shopping, and desert adventures in Dubai.'
        },

        {
            id: 33,
            name: 'Singapore',
            type: 'international',
            price: 55000,
            nights: 3,
            days: 4,
            badge: 'Popular',
            badge_class: 'blue',
            featured: true,
            active: true,
            description:
                'Futuristic cityscape, lush gardens, and world-class attractions.'
        }
    ],


    // ========================================================
    // STATS
    // ========================================================

    stats: {
        happy_travellers: 131,
        destinations: 33,
        services_offered: 10,
        avg_rating: 5.0
    }
};


// ============================================================
// STORAGE
// ============================================================

function saveToStorage() {

    try {

        const dataToSave = {

            reviews:
                localStore.reviews,

            testimonials:
                localStore.testimonials,

            settings:
                localStore.settings,

            stats:
                localStore.stats
        };

        localStorage.setItem(
            'staycape_data',
            JSON.stringify(dataToSave)
        );

    } catch (error) {

        console.warn(
            '⚠️ Could not save Staycape data:',
            error
        );
    }
}


function loadFromStorage() {

    try {

        const saved =
            localStorage.getItem('staycape_data');

        if (!saved) {
            return false;
        }

        const data =
            JSON.parse(saved);


        if (Array.isArray(data.reviews)) {

            localStore.reviews =
                data.reviews;
        }


        if (Array.isArray(data.testimonials)) {

            localStore.testimonials =
                data.testimonials;
        }


        if (data.settings) {

            localStore.settings = {
                ...localStore.settings,
                ...data.settings
            };
        }


        if (data.stats) {

            localStore.stats = {
                ...localStore.stats,
                ...data.stats
            };
        }


        console.log(
            '✅ Reviews/settings/testimonials loaded'
        );

        return true;

    } catch (error) {

        console.warn(
            '⚠️ Could not load Staycape data:',
            error
        );

        return false;
    }
}


loadFromStorage();


// ============================================================
// ID HELPER
// ============================================================

function getNextId(arr) {

    if (!arr || arr.length === 0) {
        return 1;
    }

    return Math.max(
        ...arr.map(item => item.id || 0)
    ) + 1;
}


// ============================================================
// SETTINGS
// ============================================================

async function scGetSettings() {

    return localStore.settings;
}


async function scUpdateSettings(settings) {

    localStore.settings = {
        ...localStore.settings,
        ...settings
    };

    saveToStorage();

    return {
        success: true
    };
}


// ============================================================
// PACKAGES
// ============================================================

async function scGetPackages() {

    return localStore.packages.map(pkg => {

        const imageData =
            getDestinationImage(pkg.name, 'tour');


        return {

            ...pkg,

            image:
                imageData.image,

            imageAlt:
                imageData.alt,

            imageDescription:
                imageData.description,

            _imageSource:
                'destinationImages',

            _session:
                SESSION_ID
        };
    });
}


// ============================================================
// EXPLORE DESTINATIONS
// ============================================================

async function scGetExploreDestinations() {

    return localStore.packages

        .filter(pkg => pkg.active)

        .map(pkg => {

            const imageData =
                getDestinationImage(
                    pkg.name,
                    'explore'
                );


            return {

                name:
                    pkg.name,

                image:
                    imageData.image,

                alt:
                    `Explore ${imageData.alt}`,

                description:
                    imageData.description,

                _imageSource:
                    'destinationImages',

                _session:
                    SESSION_ID
            };
        });
}


// ============================================================
// TESTIMONIALS
// ============================================================

async function scGetTestimonials() {

    return localStore.testimonials;
}


async function scAddTestimonial(testimonialData) {

    const newItem = {

        ...testimonialData,

        id:
            getNextId(
                localStore.testimonials
            ),

        created_at:
            new Date().toISOString()
    };


    localStore.testimonials.push(
        newItem
    );


    saveToStorage();


    return {
        success: true,
        data: newItem
    };
}


async function scUpdateTestimonial(
    id,
    testimonialData
) {

    const idx =
        localStore.testimonials.findIndex(
            t => t.id === id
        );


    if (idx > -1) {

        localStore.testimonials[idx] = {

            ...localStore.testimonials[idx],

            ...testimonialData
        };


        saveToStorage();


        return {
            success: true,
            data:
                localStore.testimonials[idx]
        };
    }


    return {
        success: false,
        error: 'Testimonial not found'
    };
}


async function scDeleteTestimonial(id) {

    const idx =
        localStore.testimonials.findIndex(
            t => t.id === id
        );


    if (idx > -1) {

        localStore.testimonials.splice(
            idx,
            1
        );

        saveToStorage();


        return {
            success: true
        };
    }


    return {
        success: false,
        error: 'Testimonial not found'
    };
}


async function scToggleTestimonial(id) {

    const idx =
        localStore.testimonials.findIndex(
            t => t.id === id
        );


    if (idx > -1) {

        localStore.testimonials[idx].active =
            !localStore.testimonials[idx].active;


        saveToStorage();


        return {
            success: true
        };
    }


    return {
        success: false,
        error: 'Testimonial not found'
    };
}


// ============================================================
// REVIEWS
// ============================================================

async function scGetPendingReviews() {

    return localStore.reviews;
}


async function scSubmitReview(reviewData) {

    try {

        if (
            !reviewData.name ||
            !reviewData.destination ||
            !reviewData.rating ||
            !reviewData.review
        ) {

            return {
                success: false,
                error: 'Missing required fields'
            };
        }


        const newItem = {

            id:
                getNextId(
                    localStore.reviews
                ),

            name:
                reviewData.name,

            contact:
                reviewData.contact || '',

            destination:
                reviewData.destination,

            rating:
                reviewData.rating,

            review:
                reviewData.review,

            photo:
                reviewData.photo || '',

            status:
                'pending',

            created_at:
                new Date().toISOString()
        };


        localStore.reviews.push(
            newItem
        );


        saveToStorage();


        return {
            success: true,
            data: newItem
        };

    } catch (error) {

        return {
            success: false,
            error: error.message
        };
    }
}


async function scApproveReview(id) {

    const idx =
        localStore.reviews.findIndex(
            r => r.id === id
        );


    if (idx === -1) {

        return {
            success: false,
            error: 'Review not found'
        };
    }


    const review =
        localStore.reviews[idx];


    await scAddTestimonial({

        name:
            review.name,

        destination:
            review.destination,

        rating:
            review.rating,

        review:
            review.review,

        photo:
            review.photo || '',

        active:
            true,

        featured:
            false
    });


    localStore.reviews.splice(
        idx,
        1
    );


    saveToStorage();


    return {
        success: true
    };
}


async function scRejectReview(id) {

    const idx =
        localStore.reviews.findIndex(
            r => r.id === id
        );


    if (idx === -1) {

        return {
            success: false,
            error: 'Review not found'
        };
    }


    localStore.reviews.splice(
        idx,
        1
    );


    saveToStorage();


    return {
        success: true
    };
}


// ============================================================
// STATS
// ============================================================

async function scGetStats() {

    const activeTests =
        localStore.testimonials.filter(
            t => t.active
        );


    localStore.stats.happy_travellers =
        activeTests.length + 128;


    localStore.stats.avg_rating =
        activeTests.length > 0

            ? activeTests.reduce(
                (sum, t) =>
                    sum + Number(t.rating || 0),
                0
            ) / activeTests.length

            : 5.0;


    localStore.stats.destinations =
        localStore.packages.filter(
            p => p.active
        ).length;


    localStore.stats.services_offered =
        10;


    return localStore.stats;
}


async function scUpdateStats() {

    await scGetStats();

    saveToStorage();

    return {
        success: true
    };
}


// ============================================================
// PRICE FORMATTER
// ============================================================

function scFormatPrice(price) {

    return '\u20b9' +
        Number(price).toLocaleString('en-IN');
}


// ============================================================
// GLOBAL FUNCTIONS
// ============================================================

window.scGetSettings =
    scGetSettings;

window.scUpdateSettings =
    scUpdateSettings;

window.scGetPackages =
    scGetPackages;

window.scGetExploreDestinations =
    scGetExploreDestinations;

window.scGetTestimonials =
    scGetTestimonials;

window.scAddTestimonial =
    scAddTestimonial;

window.scUpdateTestimonial =
    scUpdateTestimonial;

window.scDeleteTestimonial =
    scDeleteTestimonial;

window.scToggleTestimonial =
    scToggleTestimonial;

window.scGetPendingReviews =
    scGetPendingReviews;

window.scSubmitReview =
    scSubmitReview;

window.scApproveReview =
    scApproveReview;

window.scRejectReview =
    scRejectReview;

window.scGetStats =
    scGetStats;

window.scUpdateStats =
    scUpdateStats;

window.scFormatPrice =
    scFormatPrice;

window.getDestinationImage =
    getDestinationImage;


// ============================================================
// INITIALIZATION
// ============================================================

console.log(
    '✅ STAYCAPE DATA LAYER INITIALIZED'
);

console.log(
    '🖼️ Destination-specific image system active'
);

console.log(
    '📦 Packages:',
    localStore.packages.length
);

console.log(
    '🌍 Destinations with images:',
    Object.keys(destinationImages).length
);

console.log(
    '💾 Existing LocalStorage data preserved'
);