/* script.js */
document.getElementById("buy-token").addEventListener("click", function() {
    alert("Redirecting to purchase page...");
    window.location.href = "https://yourpaymentgateway.com"; // Replace with actual payment URL
});

// CRT Flicker Effect
setInterval(() => {
    document.querySelector(".crt-screen").style.opacity = (Math.random() * 0.2 + 0.8).toString();
}, Math.random() * (30000 - 15000) + 15000);
