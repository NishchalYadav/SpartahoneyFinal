// Custom Cursor
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX - 4 + 'px';
    cursorDot.style.top = e.clientY - 4 + 'px';
    cursorRing.style.left = e.clientX - 20 + 'px';
    cursorRing.style.top = e.clientY - 20 + 'px';
});

// Cursor hover effect for interactive elements
document.querySelectorAll('a, button, .service-card, input, textarea, select').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
});

// Mobile Menu
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('hidden');
    document.getElementById('mobileMenu').classList.add('flex');
});

document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('hidden');
    document.getElementById('mobileMenu').classList.remove('flex');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
        document.getElementById('mobileMenu').classList.remove('flex');
    });
});

// Reveal Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Prism Scroll Effect
const prism = document.getElementById('prismElement');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const rotation = scrollY * 0.1;
            const scale = 1 + (scrollY * 0.0005);
            prism.style.transform = `rotate(${rotation}deg) scale(${Math.min(scale, 1.5)})`;
            ticking = false;
        });
        ticking = true;
    }
});

// Magnetic Buttons
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// Modal Content
const modalContent = {
    apex: `
        <span class="text-xs uppercase tracking-widest text-amber-500 font-mono">APEX Composition</span>
        <h2 class="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-6">The Architecture of Atmospheric Sound</h2>
        <p class="text-neutral-400 mb-8">This service focuses on creating original musical scores and signatures that define artists and elevate brands.</p>
        
        <div class="space-y-8">
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">Artist Production (Sync-Ready)</h3>
                <p class="text-xs text-neutral-500 mb-4">For independent artists seeking an elite sound</p>
                <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                        <span class="text-neutral-400">Non-Exclusive License (Lease)</span>
                        <span style="color: #C9A227;">₹15,000</span>
                    </div>
                    <p class="text-xs text-neutral-600">Shared ownership; usage limits apply (up to 100k streams)</p>
                    <div class="flex justify-between text-sm">
                        <span class="text-neutral-400">Exclusive License (Full Buyout)</span>
                        <span style="color: #C9A227;">₹65,000+</span>
                    </div>
                </div>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">Ghost Composition</h3>
                <p class="text-xs text-neutral-500 mb-4">Anonymous excellence for high-profile influencers or labels</p>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span style="color: #C9A227;">Starting at ₹85,000</span>
                </div>
                <ul class="space-y-2 text-xs text-neutral-500">
                    <li>• Strictly enforced NDA. No public credit to Spartahoney</li>
                    <li>• 100% ownership transfer. Track removed from archive</li>
                    <li>• Delivery: High-res WAV Master + Tracked Stems</li>
                </ul>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">Sync Licensing (Media & Ads)</h3>
                <p class="text-xs text-neutral-500 mb-4">Tailored scores for Films, Documentaries, and Ad Campaigns</p>
                <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                        <span class="text-neutral-400">Standard Sync (Regional)</span>
                        <span style="color: #C9A227;">₹45,000</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-neutral-400">Master Sync (Global/Perpetual)</span>
                        <span style="color: #C9A227;">Custom Quote</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    aura: `
        <span class="text-xs uppercase tracking-widest text-purple-400 font-mono">AURA Engineering</span>
        <h2 class="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-6">The Surgical Refinement of Audio</h2>
        <p class="text-neutral-400 mb-8">Mixing is where a track becomes a Masterpiece. Precision engineering for professional-grade output.</p>
        
        <div class="space-y-8">
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">AURA Stereo Master</h3>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span class="text-purple-400">₹6,000</span>
                </div>
                <p class="text-xs text-neutral-500">The final "polish" for a track that is already mixed.</p>
                <p class="text-xs text-neutral-600 mt-2">Protocol: Analog-modeled limiting, LUFS optimization (-14.0 for Spotify, -16.0 for Podcasts), True Peak ceiling at -1.0 dBTP</p>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">AURA Stem Master</h3>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span class="text-purple-400">₹12,000</span>
                </div>
                <p class="text-xs text-neutral-500">Mastering from 4-8 grouped tracks (Vocals, Drums, Instruments).</p>
                <p class="text-xs text-neutral-600 mt-2">Allows for much better clarity and depth than a single stereo file.</p>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">AURA Full Mix & Master</h3>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span class="text-purple-400">₹25,000</span>
                </div>
                <p class="text-xs text-neutral-500">Surgical Processing: Vocal tuning, time-alignment, and harmonic saturation.</p>
                <p class="text-xs text-neutral-600 mt-2">Result: A radio-ready asset that carries Global Authority.</p>
            </div>
        </div>
    `,
    core: `
        <span class="text-xs uppercase tracking-widest text-cyan-400 font-mono">CORE Architecture</span>
        <h2 class="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-6">High-Velocity Digital Structures</h2>
        <p class="text-neutral-400 mb-8">We don't build "websites"; we build Digital Fortresses. Using Next.js 15 and Framer Motion, we create sites that move with the fluid physics of a premium OS.</p>
        
        <div class="space-y-8">
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">CORE Portfolio</h3>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span class="text-cyan-400">₹65,000</span>
                </div>
                <p class="text-xs text-neutral-500 mb-2">Target: Models, Artists, and Founders</p>
                <ul class="space-y-1 text-xs text-neutral-600">
                    <li>• Single-page high-end layout</li>
                    <li>• Physics-informed animations</li>
                    <li>• Mobile-first responsiveness</li>
                </ul>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">CORE Agency Ecosystem</h3>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span class="text-cyan-400">₹1,50,000+</span>
                </div>
                <p class="text-xs text-neutral-500 mb-2">Target: High-ticket agencies and businesses</p>
                <ul class="space-y-1 text-xs text-neutral-600">
                    <li>• Custom Lead Management (SpartaOS integration)</li>
                    <li>• SEO dominance architecture</li>
                    <li>• Multi-page architectural depth</li>
                </ul>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-2">Performance Audit & Overhaul</h3>
                <div class="flex justify-between text-sm mb-4">
                    <span class="text-neutral-400">Investment</span>
                    <span class="text-cyan-400">₹25,000</span>
                </div>
                <p class="text-xs text-neutral-500">We take your existing slow website and optimize it for a 100/100 Google PageSpeed score.</p>
            </div>
        </div>
    `,
    privacy: `
        <span class="text-xs uppercase tracking-widest text-amber-500 font-mono">Privacy Protocol</span>
        <h2 class="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-6">Data Protection Standards</h2>
        
        <div class="space-y-6 text-neutral-400 text-sm leading-relaxed">
            <p>We operate on a "Need-to-Know" basis. All client data, unreleased stems, and project briefs are stored in encrypted environments.</p>
            <p>We do not use third-party tracking or sell intelligence.</p>
            <p>For Ghost Production clients, NDAs are signed before a single frequency is shared.</p>
        </div>
    `,
    licensing: `
        <span class="text-xs uppercase tracking-widest text-amber-500 font-mono">Usage Licensing</span>
        <h2 class="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-6">Rights & Ownership</h2>
        
        <div class="space-y-6">
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-3">Non-Exclusive (Lease)</h3>
                <ul class="space-y-2 text-xs text-neutral-500">
                    <li>• Shared ownership. Track remains in archive</li>
                    <li>• Usage limited to 100,000 streams</li>
                    <li>• "Prod. by Spartahoney" credit mandatory</li>
                </ul>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-3">Exclusive (Buyout)</h3>
                <ul class="space-y-2 text-xs text-neutral-500">
                    <li>• 100% intellectual property transfer</li>
                    <li>• Permanently removed from public archive</li>
                    <li>• Public credit optional</li>
                </ul>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-3">Ghost Production</h3>
                <ul class="space-y-2 text-xs text-neutral-500">
                    <li>• Full buyout with strictly enforced NDA</li>
                    <li>• Licensee is sole owner and face of work</li>
                    <li>• Public credit to Spartahoney is forbidden</li>
                </ul>
            </div>
            
            <div class="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover-glow">
                <h3 class="font-medium mb-3">Sync Rights</h3>
                <p class="text-xs text-neutral-500">Permits synchronization of audio with visual media across digital and broadcast platforms as specified in the SH-APEX Certificate.</p>
            </div>
        </div>
    `
};

// Modal Functions
function openModal(type) {
    document.getElementById('modalBody').innerHTML = modalContent[type];
    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('modalBackdrop').classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalBackdrop').classList.add('hidden');
    document.getElementById('modalBackdrop').classList.remove('flex');
    document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('modalBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalBackdrop')) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('modalBackdrop').classList.contains('hidden')) {
        closeModal();
    }
});

// Web3Forms Contact Form Handler
const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

// Client-side validation for hCaptcha
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if hCaptcha is filled
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]');
    if (!hCaptcha || !hCaptcha.value) {
        showAlert('Please complete the captcha verification.', 'error');
        return;
    }
    
    // Prepare form data
    const formData = new FormData(form);
    formData.append("access_key", "f81a861f-e96e-4c5c-be19-9b3557aee2af");
    
    // Store original button text
    const originalText = submitBtn.innerHTML;
    
    // Update button to loading state
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    submitBtn.classList.add('btn-loading');
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showAlert('Success! Your message has been sent. We\'ll respond within 24-48 hours.', 'success');
            form.reset();
            
            // Reset hCaptcha
            if (window.hcaptcha) {
                window.hcaptcha.reset();
            }
        } else {
            showAlert('Error: ' + (data.message || 'Something went wrong. Please try again.'), 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showAlert('Network error. Please check your connection and try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
    }
});

// Alert function
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = form.querySelector('.alert-success, .alert-error');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = type === 'success' ? 'alert-success' : 'alert-error';
    alert.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="iconify" data-icon="${type === 'success' ? 'lucide:check-circle' : 'lucide:alert-circle'}" data-width="20"></span>
            <span>${message}</span>
        </div>
    `;
    
    // Insert alert before form
    form.parentNode.insertBefore(alert, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-10px)';
        setTimeout(() => alert.remove(), 300);
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to mercury blobs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.mercury-blob');
    blobs.forEach((blob, index) => {
        const speed = 0.5 + (index * 0.1);
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Navbar background on scroll
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.85)';
    }
});
