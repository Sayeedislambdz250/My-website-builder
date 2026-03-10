// EmailJS কনফিগারেশন (আপনার দেওয়া ID দিয়ে)
emailjs.init("0l-t2ScBqKHC3sY93"); // Public Key

document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const formSection = document.getElementById("formSection");
    const siteForm = document.getElementById("siteForm");
    const resultDiv = document.getElementById("result");

    startBtn.addEventListener("click", function() {
        startBtn.style.display = "none";
        formSection.style.display = "block";
    });

    // আপনার আগের সব কোড (social links, projects, skills ইত্যাদি) এখানে থাকবে
    // শুধু submit অংশটা চেঞ্জ করা হলো

    siteForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        // আপনার আগের সব ডাটা কালেক্ট করুন (userName, siteType, siteTitle, primaryColor ইত্যাদি)
        const userName = document.getElementById("userName").value.trim() || "Guest";
        const siteType = document.getElementById("siteType").value;
        const siteTitle = document.getElementById("siteTitle").value.trim() || "My Site";
        // ... বাকি ডাটা কালেক্ট করুন (galleryHTML, projectsHTML, skillsHTML ইত্যাদি)

        // generatedHTML এবং fullPageHTML তৈরি করুন (আপনার আগের কোডের মতো)

        // লগইন পেজ দেখানো
        resultDiv.innerHTML = `
            <div class="login-box">
                <h2 style="color: #2c3e50;">Access Restricted</h2>
                <p style="color: #555; margin: 20px 0;">Enter your email to request access code</p>
                
                <input type="email" id="accessEmail" placeholder="Your email address" required style="width: 100%; padding: 14px; font-size: 18px; border: 1px solid #bdc3c7; border-radius: 8px; margin-bottom: 20px;">
                <button id="sendCodeBtn" style="background: #3498db; color: white; width: 100%; padding: 14px; font-size: 18px; border: none; border-radius: 8px; cursor: pointer;">
                    Send Access Code
                </button>
                
                <p style="margin-top: 25px; color: #777;">
                    After sending, message me on WhatsApp with your details. I'll send you the code.
                    <br><br>
                    <a href="https://wa.me/88017xxxxxxxx?text=Hi%20Sayeed%2C%20I%20requested%20access%20code%20for%20your%20website.%20My%20email%3A%20" target="_blank" style="color: #25D366; font-weight: bold; text-decoration: none;">
                        Contact me on WhatsApp
                    </a>
                </p>
            </div>
        `;

        // Send Code বাটন
        document.getElementById("sendCodeBtn").addEventListener("click", async function() {
            const email = document.getElementById("accessEmail").value.trim();
            if (!email || !email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            // ৬ ডিজিট র‍্যান্ডম কোড জেনারেট
            const accessCode = Math.floor(100000 + Math.random() * 900000).toString();

            // EmailJS দিয়ে আপনার ইমেইলে কোড পাঠানো
            try {
                await emailjs.send(
                    "service_ogvuzqn",          // Service ID
                    "template_n3lsl1k",         // Template ID
                    {
                        site_title: siteTitle,
                        access_code: accessCode,
                        email: email,
                        name: "User" // ক্লায়েন্টের নাম যদি থাকে তাহলে পরে যোগ করুন
                    }
                );

                alert("Access code sent to your email! Check your inbox (and spam folder). Reply to the user with the code after verification.");
            } catch (error) {
                alert("Failed to send code. Please check your EmailJS setup.");
                console.error("EmailJS error:", error);
            }
        });

        // এখানে আপনি ম্যানুয়ালি কোড চেকের অপশন যোগ করতে পারেন (ঐচ্ছিক)
        // উদাহরণ: একটা ইনপুট + "Verify Code" বাটন যোগ করে নিচে
    });
});