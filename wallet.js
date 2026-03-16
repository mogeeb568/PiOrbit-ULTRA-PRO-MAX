// Wallet management
let balance = 0;

// Initialize wallet
document.addEventListener('DOMContentLoaded', () => {
    updateBalance();
});

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function withdraw() {
    if (balance <= 0) {
        alert('❌ Insufficient balance!');
        return;
    }
    
    if (typeof Pi !== 'undefined' && Pi.createPayment) {
        // Real Pi payment
        const paymentData = {
            amount: balance,
            memo: "Withdraw from PiOrbit",
            metadata: { userId: userData?.uid }
        };
        
        Pi.createPayment(paymentData, {
            onReadyForServerApproval: (paymentId) => {
                console.log('Payment ready:', paymentId);
            },
            onReadyForServerCompletion: (paymentId) => {
                console.log('Payment completed:', paymentId);
                balance = 0;
                updateBalance();
                alert('✅ Withdrawal successful!');
            },
            onCancel: () => {
                alert('❌ Withdrawal cancelled');
            },
            onError: (error) => {
                console.error('Payment error:', error);
                alert('❌ Payment failed');
            }
        });
    } else {
        // Demo mode
        alert('💰 Demo: Withdrawal request sent for ' + balance + ' Pi');
        balance = 0;
        updateBalance();
    }
}

// Export
window.withdraw = withdraw;