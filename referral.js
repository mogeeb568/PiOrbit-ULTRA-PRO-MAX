// Referral system
let referralCode = localStorage.getItem('referralCode') || generateReferralCode();

function generateReferralCode() {
    const code = 'PIORBIT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    localStorage.setItem('referralCode', code);
    return code;
}

// Initialize referral
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("refCode").innerText = referralCode;
});

function copyRefCode() {
    navigator.clipboard.writeText(referralCode).then(() => {
        alert('✅ Referral code copied!');
    }).catch(() => {
        alert('❌ Please copy manually: ' + referralCode);
    });
}

// Export
window.copyRefCode = copyRefCode;