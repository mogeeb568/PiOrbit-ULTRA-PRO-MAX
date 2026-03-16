// Pi Network Configuration
const PI_CONFIG = {
    APP_ID: "piorbit-ultra-pro-max",
    VERSION: "2.0",
    SANDBOX: true,
    API_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api'
        : 'https://piorbit-ultra-pro-max.vercel.app/api' // غير الرابط حسب استضافتك
};

// App Configuration
const APP_CONFIG = {
    NAME: "PiOrbit ULTRA PRO MAX",
    VERSION: "1.0.0",
    POINTS_PER_TASK: 5,
    REFERRAL_BONUS: 10,
    LEVEL_UP_POINTS: 100
};