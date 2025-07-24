// Cloudflare Pages Worker for Du Jun Profile
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve the main HTML file for all routes
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>杜均 - 新火科技 | 区块链传奇</title>
    <meta name="description" content="杜均 - 从450元月收入到亿万富豪的区块链传奇之路，火币创始人、新火科技CEO、ABCDE Capital合伙人">
    <meta name="keywords" content="杜均, 火币, 区块链, 新火科技, ABCDE Capital, 加密货币, 投资人">
    <meta name="author" content="Du Jun Profile">
    
    <!-- Open Graph -->
    <meta property="og:title" content="杜均 - 区块链传奇人物">
    <meta property="og:description" content="从450元月收入到亿万富豪的蜕变之路">
    <meta property="og:image" content="https://chainwhy.com/upload/default/20180711/98fab55de67f9358fdf15ef2f642eab6.jpg">
    <meta property="og:url" content="https://dujun-profile.pages.dev">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="杜均 - 区块链传奇">
    <meta name="twitter:description" content="从草根到亿万富豪的传奇之路">
    <meta name="twitter:image" content="https://chainwhy.com/upload/default/20180711/98fab55de67f9358fdf15ef2f642eab6.jpg">
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/framer-motion@11.0.3/dist/framer-motion.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+SC:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary-blue: #1E40AF;
            --primary-blue-dark: #1E3A8A;
            --primary-blue-light: #3B82F6;
            --secondary-blue: #60A5FA;
            --accent-blue: #93C5FD;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', 'Noto Sans SC', sans-serif;
            background: #000000;
            color: #ffffff;
            overflow-x: hidden;
            position: relative;
            line-height: 1.6;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('https://chainwhy.com/upload/default/20180711/98fab55de67f9358fdf15ef2f642eab6.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.1;
            z-index: -1;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
            z-index: 1;
        }
        
        .hero-content {
            text-align: center;
            z-index: 2;
            position: relative;
        }
        
        .avatar {
            width: 150px;
            height: 150px;
            margin: 0 auto 2rem;
            border-radius: 50%;
            border: 4px solid var(--primary-blue-light);
            overflow: hidden;
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
        
        .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .hero-title {
            font-size: clamp(3rem, 8vw, 5rem);
            font-weight: 900;
            background: linear-gradient(135deg, #ffffff 0%, var(--primary-blue-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        
        .hero-subtitle {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 300;
            color: #d1d5db;
            margin-bottom: 1rem;
        }
        
        .hero-description {
            font-size: clamp(1rem, 2vw, 1.5rem);
            color: #9ca3af;
            margin-bottom: 2rem;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark));
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
            border-color: var(--primary-blue-light);
        }
        
        .section {
            padding: 5rem 0;
        }
        
        .section-title {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 3rem;
            background: linear-gradient(135deg, var(--primary-blue-light), #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .grid {
            display: grid;
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .grid-2 {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        
        .grid-3 {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        .grid-4 {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        
        .card {
            background: rgba(30, 64, 175, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 20px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        
        .card:hover {
            border-color: var(--primary-blue-light);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }
        
        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-blue-light);
            margin-bottom: 1rem;
        }
        
        .stat {
            text-align: center;
            padding: 2rem;
        }
        
        .stat-number {
            font-size: clamp(2rem, 6vw, 4rem);
            font-weight: 900;
            color: var(--primary-blue-light);
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            font-size: 1.2rem;
            color: #9ca3af;
        }
        
        .timeline {
            position: relative;
            padding-left: 2rem;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 0.5rem;
            top: 0;
            width: 2px;
            height: 100%;
            background: var(--primary-blue-light);
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 2rem;
            padding-left: 2rem;
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -0.5rem;
            top: 0.5rem;
            width: 1rem;
            height: 1rem;
            background: var(--primary-blue-light);
            border-radius: 50%;
        }
        
        .timeline-year {
            color: #ef4444;
            font-weight: 700;
            font-size: 1.2rem;
        }
        
        .timeline-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin: 0.5rem 0;
        }
        
        .timeline-description {
            color: #d1d5db;
        }
        
        .achievement {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .achievement-icon {
            color: var(--primary-blue-light);
            font-size: 1.5rem;
        }
        
        .footer {
            background: rgba(0, 0, 0, 0.5);
            padding: 3rem 0;
            text-align: center;
            border-top: 1px solid rgba(59, 130, 246, 0.3);
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .social-link {
            color: #9ca3af;
            font-size: 2rem;
            transition: color 0.3s ease;
        }
        
        .social-link:hover {
            color: var(--primary-blue-light);
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            .section {
                padding: 3rem 0;
            }
            
            .grid {
                grid-template-columns: 1fr;
            }
        }
        
        /* Floating animation */
        .floating {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(59, 130, 246, 0.2);
            z-index: 1000;
        }
        
        .scroll-progress {
            height: 100%;
            background: var(--primary-blue-light);
            width: 0%;
            transition: width 0.1s ease;
        }
    </style>
</head>
<body>
    <!-- Scroll Progress -->
    <div class="scroll-indicator">
        <div class="scroll-progress" id="scrollProgress"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content container">
            <div class="avatar">
                <img src="https://chainwhy.com/upload/default/20180711/98fab55de67f9358fdf15ef2f642eab6.jpg" 
                     alt="杜均头像" 
                     loading="lazy">
            </div>
            <h1 class="hero-title">杜均</h1>
            <p class="hero-subtitle">区块链传奇 · 火币创始人</p>
            <p class="hero-description">新火科技CEO | ABCDE Capital合伙人</p>
            <div style="display: flex; justify-content: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
                <span style="color: var(--primary-blue-light);"><i class="fas fa-map-marker-alt"></i> 新加坡</span>
                <span style="color: var(--primary-blue-light);"><i class="fas fa-graduation-cap"></i> NUS EMBA</span>
                <span style="color: var(--primary-blue-light);"><i class="fas fa-briefcase"></i> Web3投资人</span>
            </div>
            <a href="#about" class="cta-button">
                <i class="fas fa-chevron-down"></i> 探索传奇之路
            </a>
        </div>
    </section>

    <!-- Key Stats -->
    <section class="section" id="about">
        <div class="container">
            <h2 class="section-title">关键数据</h2>
            <div class="grid grid-4">
                <div class="stat">
                    <div class="stat-number">$10B</div>
                    <div class="stat-label">个人财富峰值</div>
                </div>
                <div class="stat">
                    <div class="stat-number">30K</div>
                    <div class="stat-label">BTC持有量</div>
                </div>
                <div class="stat">
                    <div class="stat-number">2013</div>
                    <div class="stat-label">火币创立年份</div>
                </div>
                <div class="stat">
                    <div class="stat-number">$800M</div>
                    <div class="stat-label">ABCDE基金规模</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Timeline -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">传奇历程</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-year">2008</div>
                    <div class="timeline-title">电脑维修学徒</div>
                    <div class="timeline-description">月薪450元的深圳电脑维修工，开启传奇之路</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2009</div>
                    <div class="timeline-title">域名投资起家</div>
                    <div class="timeline-description">通过短域名交易赚到第一桶金30万元</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2010-2012</div>
                    <div class="timeline-title">乐游平台创业</div>
                    <div class="timeline-description">创立页游平台，年收入过千万，首次创业成功</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2013</div>
                    <div class="timeline-title">火币诞生</div>
                    <div class="timeline-description">与李林共同创立火币网，开启区块链帝国</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2017</div>
                    <div class="timeline-title">巅峰时刻</div>
                    <div class="timeline-description">火币成为全球前三交易所，个人财富暴涨</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-year">2022</div>
                    <div class="timeline-title">ABCDE Capital</div>
                    <div class="timeline-description">创立8亿美元基金，转型机构化投资</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Companies -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">旗下企业</h2>
            <div class="grid grid-2">
                <div class="card">
                    <div class="card-title"><i class="fas fa-fire" style="color: #ef4444; margin-right: 0.5rem;"></i>火币网</div>
                    <p>全球前三加密货币交易所</p>
                </div>
                <div class="card">
                    <div class="card-title"><i class="fas fa-rocket" style="color: #ef4444; margin-right: 0.5rem;"></i>新火科技</div>
                    <p>数字资产服务商</p>
                </div>
                <div class="card">
                    <div class="card-title"><i class="fas fa-chart-line" style="color: #ef4444; margin-right: 0.5rem;"></i>ABCDE Capital</div>
                    <p>8亿美元基金</p>
                </div>
                <div class="card">
                    <div class="card-title"><i class="fas fa-newspaper" style="color: #ef4444; margin-right: 0.5rem;"></i>金色财经</div>
                    <p>顶级加密媒体</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Investment Portfolio -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">投资战绩</h2>
            <div class="grid grid-3">
                <div class="card" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.5);">
                    <div class="stat-number" style="color: #ef4444;">240×</div>
                    <div class="stat-label">FTX投资</div>
                    <p style="color: #9ca3af; margin-top: 0.5rem;">50万美元 → 1.2亿美元</p>
                </div>
                <div class="card" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.5);">
                    <div class="stat-number" style="color: #ef4444;">90×</div>
                    <div class="stat-label">Solana投资</div>
                    <p style="color: #9ca3af; margin-top: 0.5rem;">200万美元 → 1.8亿美元</p>
                </div>
                <div class="card" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.5);">
                    <div class="stat-number" style="color: #ef4444;">150×</div>
                    <div class="stat-label">STEPN投资</div>
                    <p style="color: #9ca3af; margin-top: 0.5rem;">30万美元 → 4500万美元</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Philosophy -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">投资哲学</h2>
            <div class="grid grid-2">
                <div class="card">
                    <div class="card-title" style="color: #ef4444;">根叶投资理论</div>
                    <p>投资要像树根一样深入基础设施，像树叶一样覆盖应用场景。只有根扎得深，叶才能长得茂。</p>
                </div>
                <div class="card">
                    <div class="card-title" style="color: #ef4444;">周期穿越</div>
                    <p>熊市建仓，牛市收获。真正的价值投资者要在别人恐惧时贪婪，在别人贪婪时恐惧。</p>
                </div>
            </div>
            <div class="card" style="margin-top: 2rem; background: rgba(59, 130, 246, 0.1);">
                <div class="card-title" style="color: var(--primary-blue-light);">2024年最新观点</div>
                <p>"美元稳定币将重塑金融秩序，比特币进入可编程元年。亚洲RWA（现实世界资产）将迎来2.0时代。"</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <h3 style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-blue-light);">杜均</h3>
            <p style="color: #9ca3af; margin-bottom: 2rem;">从草根到亿万富豪的传奇之路</p>
            
            <div class="social-links">
                <a href="#" class="social-link" title="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link" title="Telegram">
                    <i class="fab fa-telegram"></i>
                </a>
                <a href="#" class="social-link" title="Website">
                    <i class="fas fa-link"></i>
                </a>
            </div>
            
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 2rem;">
                Data compiled from public sources • Last updated: July 2025
            </p>
        </div>
    </footer>

    <script>
        // Scroll progress
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            document.getElementById('scrollProgress').style.width = scrollPercent + '%';
        });

        // Smooth scrolling for anchor links
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

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Animate elements on scroll
        document.querySelectorAll('.card, .stat').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });

        // Add hover effects to stats
        document.querySelectorAll('.stat-number').forEach(number => {
            number.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.textShadow = '0 0 30px rgba(59, 130, 246, 0.8)';
            });
            
            number.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.textShadow = '0 0 10px rgba(59, 130, 246, 0.3)';
            });
        });
    </script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
      },
    });
  },
};