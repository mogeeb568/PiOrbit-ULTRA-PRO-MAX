Pi.init({ version: "2.0", sandbox: true }); // ضع false عند النشر

async function login() {
    try {
        const scopes = ['username','payments'];
        const auth = await Pi.authenticate(scopes, onIncompletePaymentFound);
        document.getElementById("user").innerHTML =
            "مرحبًا " + auth.user.username;
    } catch(e) {
        console.error(e);
    }
}

function onIncompletePaymentFound(payment) {
    console.log(payment);
}

async function showWallet() {
    try {
        const balance = await Pi.getBalance();
        document.getElementById("wallet").innerHTML =
            "رصيد Pi: " + balance + " π";
    } catch(e) {
        console.error(e);
    }
}