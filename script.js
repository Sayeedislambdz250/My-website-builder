document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const formSection = document.getElementById("formSection");
    const siteForm = document.getElementById("siteForm");
    const resultDiv = document.getElementById("result");

    startBtn.addEventListener("click", function() {
        startBtn.style.display = "none";
        formSection.style.display = "block";
    });

    // Social Links
    const socialContainer = document.getElementById("socialLinksContainer");
    const addSocialBtn = document.getElementById("addSocialLinkBtn");

    const platforms = [
        { value: "email", label: "Email", placeholder: "example@gmail.com", icon: "✉️" },
        { value: "whatsapp", label: "WhatsApp", placeholder: "+88017xxxxxxxx", icon: "📱" },
        { value: "phone", label: "Phone", placeholder: "+88017xxxxxxxx", icon: "☎️" },
        { value: "facebook", label: "Facebook", placeholder: "https://facebook.com/yourprofile", icon: "📘" },
        { value: "youtube", label: "YouTube", placeholder: "https://youtube.com/@yourchannel", icon: "▶️" },
        { value: "twitter", label: "Twitter / X", placeholder: "https://twitter.com/yourhandle", icon: "🐦" },
        { value: "instagram", label: "Instagram", placeholder: "https://instagram.com/yourusername", icon: "📸" },
        { value: "github", label: "GitHub", placeholder: "https://github.com/yourusername", icon: "🐙" },
        { value: "others", label: "Others", placeholder: "https://your-link.com", icon: "🔗" }
    ];

    addSocialBtn.addEventListener("click", function() {
        const linkDiv = document.createElement("div");
        linkDiv.style.margin = "15px 0";
        linkDiv.style.display = "flex";
        linkDiv.style.gap = "10px";
        linkDiv.style.alignItems = "center";
        linkDiv.style.flexWrap = "wrap";

        const select = document.createElement("select");
        select.style.padding = "10px";
        select.style.borderRadius = "8px";
        select.style.border = "1px solid #bdc3c7";
        select.style.flex = "1";
        select.style.minWidth = "180px";

        platforms.forEach(p => {
            const option = document.createElement("option");
            option.value = p.value;
            option.textContent = `${p.icon} ${p.label}`;
            select.appendChild(option);
        });

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter link or number";
        input.style.padding = "10px";
        input.style.borderRadius = "8px";
        input.style.border = "1px solid #bdc3c7";
        input.style.flex = "2";
        input.style.minWidth = "200px";

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "X";
        removeBtn.style.background = "#e74c3c";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.padding = "8px 12px";
        removeBtn.style.borderRadius = "8px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.minWidth = "40px";

        removeBtn.onclick = () => linkDiv.remove();

        linkDiv.appendChild(select);
        linkDiv.appendChild(input);
        linkDiv.appendChild(removeBtn);

        socialContainer.appendChild(linkDiv);
    });

    // Skills যোগ করার লজিক (নতুন যোগ করা)
    const skillsContainer = document.getElementById("skillsContainer");
    const addSkillBtn = document.getElementById("addSkillBtn");

    addSkillBtn.addEventListener("click", function() {
        const skillDiv = document.createElement("div");
        skillDiv.className = "skill-item";

        const skillInput = document.createElement("input");
        skillInput.type = "text";
        skillInput.placeholder = "e.g. React.js, UI Design, SEO";
        skillInput.style.flex = "1";
        skillInput.style.padding = "10px";
        skillInput.style.borderRadius = "8px";
        skillInput.style.border = "1px solid #bdc3c7";

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "X";
        removeBtn.style.background = "#e74c3c";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.padding = "8px 12px";
        removeBtn.style.borderRadius = "8px";
        removeBtn.style.cursor = "pointer";

        removeBtn.onclick = () => skillDiv.remove();

        skillDiv.appendChild(skillInput);
        skillDiv.appendChild(removeBtn);

        skillsContainer.appendChild(skillDiv);
    });

    // Projects / Gigs (আগের মতো রাখা)
    const projectsContainer = document.getElementById("projectsContainer");
    const addProjectBtn = document.getElementById("addProjectBtn");

    addProjectBtn.addEventListener("click", function() {
        const projectDiv = document.createElement("div");
        projectDiv.style.margin = "20px 0";
        projectDiv.style.padding = "20px";
        projectDiv.style.border = "2px dashed #f39c12";
        projectDiv.style.borderRadius = "12px";
        projectDiv.style.background = "#fffef5";

        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Project / Gig Name:";
        titleLabel.style.display = "block";
        titleLabel.style.marginBottom = "8px";

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.placeholder = "e.g. E-commerce Website";
        titleInput.style.width = "100%";
        titleInput.style.padding = "10px";
        titleInput.style.marginBottom = "15px";
        titleInput.style.borderRadius = "8px";
        titleInput.style.border = "1px solid #bdc3c7";

        const descLabel = document.createElement("label");
        descLabel.textContent = "Short Description:";
        descLabel.style.display = "block";
        descLabel.style.marginBottom = "8px";

        const descTextarea = document.createElement("textarea");
        descTextarea.rows = 3;
        descTextarea.placeholder = "What was done in this project...";
        descTextarea.style.width = "100%";
        descTextarea.style.padding = "10px";
        descTextarea.style.marginBottom = "15px";
        descTextarea.style.borderRadius = "8px";
        descTextarea.style.border = "1px solid #bdc3c7";

        const imgLabel = document.createElement("label");
        imgLabel.textContent = "Project Images (one or multiple):";
        imgLabel.style.display = "block";
        imgLabel.style.marginBottom = "8px";

        const imgInput = document.createElement("input");
        imgInput.type = "file";
        imgInput.accept = "image/*";
        imgInput.multiple = true;
        imgInput.style.marginBottom = "15px";

        const linkLabel = document.createElement("label");
        linkLabel.textContent = "Live Link / Gig Link (optional):";
        linkLabel.style.display = "block";
        linkLabel.style.marginBottom = "8px";

        const linkInput = document.createElement("input");
        linkInput.type = "url";
        linkInput.placeholder = "https://your-project.com";
        linkInput.style.width = "100%";
        linkInput.style.padding = "10px";
        linkInput.style.marginBottom = "15px";
        linkInput.style.borderRadius = "8px";
        linkInput.style.border = "1px solid #bdc3c7";

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "Remove this project";
        removeBtn.style.background = "#e74c3c";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.padding = "10px 20px";
        removeBtn.style.borderRadius = "8px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.marginTop = "10px";

        removeBtn.onclick = () => projectDiv.remove();

        projectDiv.appendChild(titleLabel);
        projectDiv.appendChild(titleInput);
        projectDiv.appendChild(descLabel);
        projectDiv.appendChild(descTextarea);
        projectDiv.appendChild(imgLabel);
        projectDiv.appendChild(imgInput);
        projectDiv.appendChild(linkLabel);
        projectDiv.appendChild(linkInput);
        projectDiv.appendChild(removeBtn);

        projectsContainer.appendChild(projectDiv);
    });

    // Submit Form
    siteForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value.trim() || "Guest";
        const siteType = document.getElementById("siteType").value;
        const siteTitle = document.getElementById("siteTitle").value.trim() || "My Site";

        const primaryColor = document.getElementById("primaryColor").value || "#3498db";
        const fontFamily = document.getElementById("fontFamily").value || "Arial, sans-serif";
        const siteDescription = document.getElementById("siteDescription")?.value.trim() || "This is a beautiful website built with love.";
        const aboutText = document.getElementById("aboutText")?.value.trim() || "I am a passionate web developer. Explore my work here.";
        const contactEmail = document.getElementById("contactEmail")?.value.trim() || "your@email.com";

        const metaKeywords = document.getElementById("metaKeywords")?.value.trim() || "";
        const metaAuthor = document.getElementById("metaAuthor")?.value.trim() || userName;
        let ogImageBase64 = "";
        const ogImageInput = document.getElementById("ogImage");
        if (ogImageInput?.files && ogImageInput.files[0]) {
            ogImageBase64 = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(ogImageInput.files[0]);
            });
        }

        let faviconBase64 = "";
        const faviconInput = document.getElementById("faviconImage");
        if (faviconInput?.files && faviconInput.files[0]) {
            faviconBase64 = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(faviconInput.files[0]);
            });
        }

        const isDarkMode = document.getElementById("darkMode")?.checked || false;

        // গ্যালারি
        let galleryHTML = "";
        const galleryInput = document.getElementById("galleryImages");
        if (galleryInput?.files && galleryInput.files.length > 0) {
            for (let file of galleryInput.files) {
                const base64 = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.readAsDataURL(file);
                });
                galleryHTML += `
                    <div style="margin: 15px; text-align: center; flex: 1 1 300px;">
                        <img src="${base64}" alt="Gallery Image" style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    </div>
                `;
            }
        } else {
            galleryHTML = "<p style='color: #777; text-align: center;'>No images uploaded.</p>";
        }

        // সোশ্যাল লিঙ্ক
        let socialLinksHTML = "";
        const linkDivs = socialContainer.querySelectorAll("div");
        linkDivs.forEach(div => {
            const select = div.querySelector("select");
            const input = div.querySelector("input");
            if (select && input && input.value.trim()) {
                const platform = select.value;
                const link = input.value.trim();
                let href = link;

                if (platform === "email") href = `mailto:${link}`;
                else if (platform === "whatsapp") href = `https://wa.me/${link.replace(/\D/g,'')}`;
                else if (platform === "phone") href = `tel:${link.replace(/\D/g,'')}`;
                else href = link;

                socialLinksHTML += `
                    <div style="margin: 12px 0; font-size: 16px;">
                        <strong>${select.options[select.selectedIndex].textContent.split(" ")[1]}:</strong> 
                        <a href="${href}" target="_blank" style="color: ${primaryColor}; text-decoration: none;">${link}</a>
                    </div>
                `;
            }
        });

        // Skills কালেক্ট করা (নতুন)
        let skillsHTML = "";
        const skillInputs = skillsContainer.querySelectorAll("input");
        skillInputs.forEach(input => {
            const skill = input.value.trim();
            if (skill) {
                skillsHTML += `<li>${skill}</li>`;
            }
        });

        if (!skillsHTML) {
            skillsHTML = "<p style='color: #777; text-align: center;'>No skills added yet.</p>";
        } else {
            skillsHTML = `<ul style="list-style: none; padding: 0; font-size: 1.1em;">${skillsHTML}</ul>`;
        }

        // Projects / Gigs
        let projectsHTML = "";
        const projectDivs = projectsContainer.querySelectorAll("div");
        for (const div of projectDivs) {
            const title = div.querySelector("input[type='text']").value.trim();
            const desc = div.querySelector("textarea").value.trim();
            const imgInput = div.querySelector("input[type='file']");
            const link = div.querySelector("input[type='url']").value.trim();

            if (title || desc) {
                let projectImages = "";
                if (imgInput.files && imgInput.files.length > 0) {
                    for (let file of imgInput.files) {
                        const base64 = await new Promise((resolve) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result);
                            reader.readAsDataURL(file);
                        });
                        projectImages += `<img src="${base64}" alt="${title}" style="max-width: 100%; border-radius: 10px; margin: 10px 0;">`;
                    }
                }

                projectsHTML += `
                    <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); margin: 20px; flex: 1 1 300px; max-width: 400px;">
                        <h3 style="color: ${primaryColor}; margin-bottom: 10px;">${title}</h3>
                        <p>${desc}</p>
                        ${projectImages}
                        ${link ? `<a href="${link}" target="_blank" style="color: ${primaryColor}; display: block; margin-top: 10px;">View Live →</a>` : ""}
                    </div>
                `;
            }
        }

        if (!projectsHTML) {
            projectsHTML = "<p style='color: #777; text-align: center;'>No projects added yet.</p>";
        }

        // কন্টাক্ট ফর্ম
        const contactForm = `
            <section style="max-width: 800px; margin: 60px auto; padding: 30px; background: #fff; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h2 style="text-align: center; color: ${primaryColor};">Get in Touch</h2>
                <form action="https://formspree.io/f/mpqywjyg" method="POST">
                    <input type="hidden" name="_subject" value="New Message from ${siteTitle}">
                    <input type="text" name="name" placeholder="Your Name" required style="width: 100%; padding: 12px; margin-bottom: 10px; border-radius: 8px; border: 1px solid #bdc3c7;">
                    <input type="email" name="email" placeholder="Your Email" required style="width: 100%; padding: 12px; margin-bottom: 10px; border-radius: 8px; border: 1px solid #bdc3c7;">
                    <textarea name="message" rows="5" placeholder="Your Message" required style="width: 100%; padding: 12px; margin-bottom: 10px; border-radius: 8px; border: 1px solid #bdc3c7;"></textarea>
                    <button type="submit" style="background: ${primaryColor}; color: white; width: 100%; padding: 15px; border: none; border-radius: 8px; cursor: pointer;">Send Message</button>
                </form>
                <p style="text-align: center; margin-top: 15px; color: #777;">Messages will be sent to: ${contactEmail}</p>
            </section>
        `;

        resultDiv.innerHTML = "";  // Clear previous content

        const navbar = `
            <nav style="background: ${primaryColor}; padding: 15px 0; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;">
                    <a href="#" style="color: white; font-size: 28px; font-weight: bold; text-decoration: none;">${siteTitle}</a>
                    <ul style="list-style: none; display: flex; gap: 30px; margin: 0; padding: 0;">
                        <li><a href="#" style="color: white; text-decoration: none; font-size: 18px;">Home</a></li>
                        <li><a href="#" style="color: white; text-decoration: none; font-size: 18px;">About</a></li>
                        <li><a href="#" style="color: white; text-decoration: none; font-size: 18px;">Contact</a></li>
                    </ul>
                </div>
            </nav>
        `;

        const footer = `
            <footer style="background: #2c3e50; color: white; text-align: center; padding: 40px 20px; margin-top: 60px;">
                <p>© ${new Date().getFullYear()} ${siteTitle}. All rights reserved.</p>
                <p>Built by ${userName}</p>
                ${socialLinksHTML ? `<div style="margin-top: 20px;">${socialLinksHTML}</div>` : ""}
            </footer>
        `;

        let generatedHTML = "";

        if (siteType === "portfolio") {
            generatedHTML = `
                ${navbar}
                <h1 style="color: ${primaryColor}; text-align: center; margin-top: 60px;">${siteTitle}</h1>
                <p style="text-align: center; font-size: 1.3em;">Welcome! I am ${userName}</p>
                <section style="max-width: 800px; margin: 40px auto; padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <h2>About Me</h2>
                    <p>${aboutText}</p>
                    <h2>Skills</h2>
                    ${skillsHTML}
                    <h2>Contact</h2>
                    <p>Email: example@${userName.toLowerCase().replace(" ", "")}.com</p>
                </section>

                <section style="max-width: 1200px; margin: 40px auto; padding: 20px;">
                    <h2 style="text-align: center; color: ${primaryColor};">My Gallery / Projects</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        ${galleryHTML}
                    </div>
                </section>

                <section style="max-width: 1200px; margin: 60px auto; padding: 20px;">
                    <h2 style="text-align: center; color: ${primaryColor};">My Work Samples / Gigs</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        ${projectsHTML}
                    </div>
                </section>

                ${contactForm}

                ${footer}
            `;
        } else if (siteType === "blog") {
            generatedHTML = `
                ${navbar}
                <h1 style="color: ${primaryColor}; text-align: center; margin-top: 60px;">${siteTitle}</h1>
                <p style="text-align: center;">${userName}'s Blog – Thoughts, Stories & Experiences</p>
                <div style="max-width: 900px; margin: 30px auto;">
                    <article style="background: white; padding: 25px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                        <h2>First Post: The Beginning</h2>
                        <p>Today I start sharing my thoughts. ${userName} will write here...</p>
                        <small>Date: Today</small>
                    </article>
                    <article style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                        <h2>Second Post: Today's Feelings</h2>
                        <p>Feeling good today. Hope you feel the same.</p>
                    </article>
                </div>

                <section style="max-width: 1200px; margin: 40px auto; padding: 20px;">
                    <h2 style="text-align: center; color: ${primaryColor};">Gallery</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        ${galleryHTML}
                    </div>
                </section>

                <section style="max-width: 1200px; margin: 60px auto; padding: 20px;">
                    <h2 style="text-align: center; color: ${primaryColor};">My Work Samples / Gigs</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        ${projectsHTML}
                    </div>
                </section>

                ${contactForm}

                ${footer}
            `;
        } else if (siteType === "ecommerce") {
            generatedHTML = `
                ${navbar}
                <header style="background: ${primaryColor}; color: white; padding: 60px 20px; text-align: center;">
                    <h1>${siteTitle}</h1>
                    <p>${userName}'s Shop – Best Products Here!</p>
                </header>
                <div style="max-width: 1000px; margin: 40px auto; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                    <div style="background: white; width: 300px; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center;">
                        <h3>Product 1</h3>
                        <p>Price: $15</p>
                        <button style="background: #e74c3c; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Buy Now</button>
                    </div>
                    <div style="background: white; width: 300px; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center;">
                        <h3>Product 2</h3>
                        <p>Price: $20</p>
                        <button style="background: #e74c3c; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Buy Now</button>
                    </div>
                </div>

                <section style="max-width: 1200px; margin: 40px auto; padding: 20px;">
                    <h2 style="text-align: center; color: ${primaryColor};">Product Gallery</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        ${galleryHTML}
                    </div>
                </section>

                <section style="max-width: 1200px; margin: 60px auto; padding: 20px;">
                    <h2 style="text-align: center; color: ${primaryColor};">My Work Samples / Gigs</h2>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        ${projectsHTML}
                    </div>
                </section>

                ${contactForm}

                ${footer}
            `;
        } else {
            generatedHTML = "<p style='color: red;'>Please select a website type!</p>";
        }

        // সম্পূর্ণ HTML ফাইল
        const fullPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${siteTitle}</title>
    <meta name="description" content="${siteDescription}">
    <meta name="keywords" content="${metaKeywords}">
    <meta name="author" content="${metaAuthor}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${siteTitle}">
    <meta property="og:description" content="${siteDescription}">
    ${ogImageBase64 ? `<meta property="og:image" content="${ogImageBase64}">` : ""}
    <meta property="og:type" content="website">

    <!-- Favicon -->
    ${faviconBase64 ? `<link rel="icon" href="${faviconBase64}">` : ""}

    <style>
        body { 
            font-family: ${fontFamily}; 
            margin: 0; 
            padding: 0; 
            background: ${isDarkMode ? '#121212' : '#f9f9f9'}; 
            color: ${isDarkMode ? '#e0e0e0' : '#333'}; 
            line-height: 1.6; 
        }
        h1, h2, h3 { color: ${primaryColor}; }
        section { background: ${isDarkMode ? '#1e1e1e' : 'white'}; }
        a { color: ${primaryColor}; }
        button { background: ${primaryColor}; color: white; }
        @media (max-width: 768px) {
            body { padding: 10px; }
            nav { padding: 10px 0; }
            nav div { flex-direction: column; text-align: center; }
            nav ul { flex-direction: column; gap: 15px; margin-top: 15px; }
            h1 { font-size: 2em; }
            h2 { font-size: 1.5em; }
            button { width: 100%; padding: 12px; }
        }
    </style>
</head>
<body>
    ${generatedHTML}
</body>
</html>`;

        // প্রিভিউ দেখাও
        resultDiv.innerHTML = `
            <h2 style="color: #27ae60; margin-bottom: 20px;">Your website is ready!</h2>
            <div style="margin-bottom: 15px; text-align: center;">
                <button id="desktopViewBtn" style="background: #2ecc71; color: white; padding: 10px 20px; border: none; border-radius: 8px; margin-right: 10px;">Desktop View</button>
                <button id="mobileViewBtn" style="background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 8px;">Mobile View</button>
            </div>
            <div id="previewContainer" style="border: 2px dashed #3498db; padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px; overflow: auto; transition: width 0.4s ease;">
                ${generatedHTML}
            </div>
            <button id="downloadBtn" style="background: #e67e22; color: white; padding: 15px 30px; border: none; border-radius: 8px;">Download HTML File</button>
        `;

        // মোবাইল/ডেস্কটপ সুইচ
        const previewContainer = document.getElementById("previewContainer");
        document.getElementById("desktopViewBtn").onclick = () => {
            previewContainer.style.width = "100%";
        };
        document.getElementById("mobileViewBtn").onclick = () => {
            previewContainer.style.width = "375px";
            previewContainer.style.margin = "0 auto";
        };

        // ডাউনলোড
        document.getElementById("downloadBtn").onclick = () => {
            const blob = new Blob([fullPageHTML], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${siteTitle.replace(/ /g, "_")}.html`;
            a.click();
            URL.revokeObjectURL(url);
        };
    });
});