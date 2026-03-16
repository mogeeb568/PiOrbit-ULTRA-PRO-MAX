// Global variables
let points = parseInt(localStorage.getItem('userPoints')) || 0;
let userData = null;

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    updatePointsDisplay();
    await initializePi();
    checkConnection();
});

// Check connection status
function checkConnection() {
    const statusEl = document.getElementById('connection-status');
    if (typeof Pi !== 'undefined') {
        statusEl.innerHTML = '✅ Connected to Pi Network';
        statusEl.style.color = '#4ade80';
    } else {
        statusEl.innerHTML = '⚠️ Demo Mode - No Pi Connection';
        statusEl.style.color = '#fbbf24';
    }
}

// Initialize Pi SDK
async function initializePi() {
    try {
        if (typeof Pi === 'undefined') {
            console.log('Pi SDK not loaded - running in demo mode');
            document.getElementById("username").innerHTML = '👤 Demo User';
            return;
        }

        Pi.init({ version: "2.0", sandbox: true });
        
        // Try to authenticate
        const scopes = ['username', 'payments'];
        const auth = await Pi.authenticate(scopes, (payment) => {
            console.log('Payment ready:', payment);
        });
        
        userData = auth.user;
        document.getElementById("username").innerHTML = `👤 ${userData.username}`;
        
        // Save user data
        localStorage.setItem('piUser', JSON.stringify(userData));
        
    } catch (error) {
        console.error('Pi initialization failed:', error);
        document.getElementById("username").innerHTML = '👤 Demo Mode';
    }
}

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Points management
function addPoints(amount) {
    points += amount;
    updatePointsDisplay();
    savePoints();
    checkLevelUp();
}

function updatePointsDisplay() {
    document.getElementById("points").innerText = points;
    document.getElementById("refEarn").innerText = points;
}

function savePoints() {
    localStorage.setItem('userPoints', points);
}

// Level system
function checkLevelUp() {
    const level = Math.floor(points / 100) + 1;
    document.getElementById("level").innerText = level;
    
    const nextLevelPoints = level * 100;
    const progress = (points % 100) / 100 * 100;
    document.getElementById("level-progress").style.width = progress + '%';
    document.getElementById("next-level").innerText = level + 1;
}

// Export functions to global scope
window.showPage = showPage;
window.addPoints = addPoints;