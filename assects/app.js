// Application State
const AppState = {
    sidebar: {
        isOpen: window.innerWidth >= 992,
        isMobile: window.innerWidth < 992
    },
    currentPage: 'home',
    selectedVideo: null,
    player: {
        isPlaying: false,
        isMuted: false,
        volume: 0.6
    },
    user: {
        subscriptions: new Set(),
        likedVideos: new Set(),
        dislikedVideos: new Set()
    }
};

// Mock Video Data
const videoDatabase = [
    {
        id: 1,
        title: 'Divine Music - The Year Mix Vol.5 [Chill & Ethnic Deep 2024]',
        channel: 'Devine Music',
        channelId: 'devineMusic',
        views: 1234567,
        uploadTime: '2 days ago',
        duration: '2:00:00',
        youtubeId: 'Ai4PQ9iSzQI',
        description: '✨ Divine Music - The Year Mix Vol.5 [Chill & Ethnic Deep 2024] ✨\n\nImmerse yourself in the soulful sounds of Chill & Ethnic Deep House 2024. This Year Mix brings together the most uplifting, relaxing, and rhythmic tracks of the year – carefully curated to take you on a musical journey across cultures and emotions. 🌍🎶\n\nWhether you’re studying, working, traveling, or just unwinding, this mix will set the perfect vibe.\n\n🔥 Tracklist Highlights\n(Use timestamps if you want to add later)\n\n🎧 Best enjoyed with headphones for full deep sound experience.\n\n✅ Don’t forget to Like, Comment, and Subscribe for more mixes!\n🔔 Turn on notifications to stay updated with the latest releases.\n\n📌 Follow Divine Music:\n- Instagram: [Your Link]\n- SoundCloud: [Your Link]\n- Spotify: [Your Link]\n\n🌟 Thank you for supporting the channel and spreading the vibes of Chill & Ethnic Deep Music worldwide!\n\n#ChillDeepHouse #EthnicDeep #YearMix2024 #DivineMusic',
        likes: 25420,
        dislikes: 543,
        subscribers: '850K',
        tags: ['Chill Deep House', 'Ethnic Deep House', 'Year Mix 2024', 'Relaxing Music', 'Study Music', 'Travel Vibes', 'Chillout Mix', 'Deep House 2024', 'Meditation Music', 'Divine Music']
    },
    {
        id: 2,
        title: 'Javascript in 1 shot in Hindi | part 1',
        channel: 'Chai aur Code',
        channelId: 'chaiaurCode',
        views: 892456,
        uploadTime: '1 week ago',
        duration: '9:02:20',
        youtubeId: 'sscX432bMZo',
        description: 'Master JavaScript in one shot with this comprehensive Hindi tutorial! This video covers everything from the fundamentals to advanced concepts, making it perfect for beginners and those looking to strengthen their programming skills. Learn about variables, data types, operators, loops, functions, objects, arrays, and events. Dive into DOM manipulation, ES6 features, asynchronous programming, promises, and much more. By the end of this tutorial, you will have a solid foundation in JavaScript and be ready to build dynamic, interactive web applications. Whether you are preparing for web development or enhancing your coding skills, this video provides clear explanations, practical examples, and hands-on exercises to help you understand JavaScript thoroughly.',
        likes: 18234,
        dislikes: 234,
        subscribers: '650K',
        tags: ['JavaScript Tutorial Hindi', 'JavaScript Full Course', 'Learn JavaScript in One Video', 'JavaScript for Beginners', 'JavaScript Hindi', 'Web Development Hindi', 'Chai aur Code', 'Frontend Development', 'JavaScript ES6', 'DOM Manipulation', 'Async JavaScript'],
    },
    {
        id: 3,
        title: 'Ek Deewane Ki Deewaniyat | Kunaal | Harshvardhan Sonam | Vishal ',
        channel: 'Play DMF',
        channelId: 'playDMF',
        views: 423567,
        uploadTime: '5 days ago',
        duration: '4:00',
        youtubeId: 'Qo4IOTAbGAM',
        description: '🎵 DEEWANIYAT Title Track – Ek Deewane Ki Deewaniyat! 💖 Enjoy this soulful and mesmerizing song featuring Harshvardhan Sonam, Vishal, Kaushik Guddu, and Kunaal. Immerse yourself in the heartfelt lyrics and enchanting music that perfectly capture the essence of love, passion, and devotion. ❤️✨ This track brings together amazing vocals, stunning composition, and a melody that stays with you long after the song ends. Perfect for all music lovers 🎶, romantics 💌, and fans of soulful tunes. Don’t forget to like 👍, share 📤, and subscribe 🔔 for more beautiful music!',
        likes: 8567,
        dislikes: 123,
        subscribers: '320K',
        tags: ['Ek Deewane Ki Deewaniyat', 'Deewaniyat Song', 'Harshvardhan Sonam', 'Kunaal Song', 'Vishal Music', 'Romantic Song 2025', 'Soulful Hindi Song', 'New Hindi Songs', 'Love Song Hindi', 'Play DMF']
    },
    {
        id: 4,
        title: 'Web Developer Roadmap (2025) - Everything is Changing',
        channel: 'Code with Carry',
        channelId: 'codeWithHarry',
        views: 654321,
        uploadTime: '3 days ago',
        duration: '21:47',
        youtubeId: 'X8BYu3dMKf0',
        description: '🌐 Web Developer Roadmap 2025 – The Ultimate Guide! 🚀 Everything in web development is evolving, and this video breaks down the latest tools, technologies, and skills you need to stay ahead. Learn about HTML, CSS, JavaScript, modern frameworks like React, Vue, and Angular ⚛️, backend technologies like Node.js, databases 🗄️, DevOps tools ⚙️, version control with Git 🖇️, and much more. Whether you are a beginner starting your coding journey or an experienced developer wanting to upskill, this roadmap will guide you step-by-step. Stay updated, build amazing projects 💻, and prepare yourself for the ever-changing world of web development in 2025! ✨💡',
        likes: 12456,
        dislikes: 167,
        subscribers: '420K',
        tags: ['Web Developer Roadmap 2025', 'Full Stack Developer 2025', 'Frontend Developer 2025', 'Backend Developer 2025', 'Learn Web Development', 'HTML CSS JavaScript', 'React Roadmap 2025', 'Node.js Roadmap', 'Modern Web Development', 'Code with Carry']
    },
    {
        id: 5,
        title: 'Amazon 4k : The Journey Into Amazon Rainforest | Nature’s Green Paradise',
        channel: 'Whats Your Priority',
        channelId: 'WhatsYourPriority',
        views: 7891232,
        uploadTime: '1 day ago',
        duration: '19:56',
        youtubeId: 'Wa9wv5qV1Uk',
        description: '🌿 Step into the heart of the Amazon Rainforest with our awe-inspiring 4K ULTRA HD documentary! Experience a vivid exploration of one of the planet’s most extraordinary ecosystems. 🐆 Discover the mesmerizing sights and soothing sounds of the jungle as you encounter its incredible inhabitants in their natural splendor. 🌳\n\nFrom the elusive Jaguar 🐆 and playful Golden Lion Tamarin 🐒 to the gentle Sloth 🦥 and mighty Capybara 🐾, this film immerses you in the vibrant diversity of the rainforest. Marvel at the stealth of the Caiman 🐊, the charm of the Emperor Tamarin 👑🐒, the brilliance of the Toucan 🐦, and the agility of the Squirrel Monkey 🐒. You’ll also meet other fascinating creatures like the Peccary 🐗, Coati 🦝, Tapir 🐘, Armadillo 🦔, and Capuchin Monkey 🐵.\n\nLet the tranquil melodies 🎶 and authentic jungle ambiance wash over you. Whether you are seeking relaxation 😌, inspiration ✨, or a deeper connection to nature 🌎, this film offers a perfect escape. 🌺🌿',
        likes: 15678,
        dislikes: 289,
        subscribers: '590K',
        tags: ['Amazon Rainforest 4K', 'Nature Documentary 4K', 'Amazon Wildlife', 'Rainforest Animals', 'Relaxing Nature Video', 'Amazon Jungle 4K', 'Wildlife Documentary', 'Amazon Rainforest Documentary', '4K Nature Relaxation', 'Whats Your Priority']
    },
    {
        id: 6,
        title: 'Sabse Bada Yodhaa | KGF Chapter 1 | Yash | Srinidhi Shetty | Prashanth Neel',
        channel: 'KGF Shorts',
        channelId: 'kgfShorts',
        views: 34567885,
        uploadTime: '6 days ago',
        duration: '4:08',
        youtubeId: 'l4rry6wKeCM',
        description: '🔥 Sabse Bada Yodhaa | KGF Chapter 1 starring Yash & Srinidhi Shetty, directed by Prashanth Neel – an epic journey of power, revenge, and breathtaking action! 💥🎬🔥',
        likes: 72534,
        dislikes: 89,
        subscribers: '280K',
        tags: ['Sabse Bada Yodhaa', 'KGF Chapter 1 Song', 'Yash KGF', 'Srinidhi Shetty', 'Prashanth Neel', 'KGF Movie Song', 'KGF BGM', 'Kannada Movie Songs', 'South Indian Songs', 'KGF Shorts']
    },
    {
        id: 7,
        title: 'Divine Music - Ethnic & Deep House Mix 2024 [Vol.49]',
        channel: 'Divine Music',
        channelId: 'divineMusic',
        views: 5626566,
        uploadTime: '1 days ago',
        duration: '58:57',
        youtubeId: 'kMrRQB4XD-U',
        description: 'Dive into the mesmerizing vibes of Divine Music - Ethnic & Deep House Mix 2024 [Vol.49] 🎶✨ Experience soulful beats, relaxing rhythms, and melodic journeys that transport you to another world 🌌🎧 Listen on Spotify: https://bit.ly/3FFmOzr 💿 Discover the full discography: https://divine-music.bandcamp.com/ 🎵 All music by Nonstop Deep: https://linktr.ee/NonstopDeep',
        likes: 56894,
        dislikes: 178,
        subscribers: '2.8M',
        tags: ['Chill Deep House 2024', 'Ethnic Deep House', 'Divine Music Mix', 'Relaxing Music 2024', 'Study Music', 'Focus Music', 'Meditation Music', 'Mood Booster', 'Background Music', 'Deep House Mix Vol.49']
    },
    {
        id: 8,
        title: 'Honest Advice for Aspiring Software Engineers | by Shradha Maam',
        channel: 'Shradha Didi',
        channelId: 'shradhaDidi',
        views: 689452,
        uploadTime: '1 days ago',
        duration: '16:13',
        youtubeId: 'LRaU4rEna8s',
        description: 'Get *honest advice* for aspiring software engineers from Shradha Ma\'am 👩‍💻✨ Learn the essential tips, strategies, and mindset to kickstart your coding journey 🚀💡 From learning programming languages to building real projects, this video covers everything you need to level up your career in tech 🎯🎓 #SoftwareEngineering #CodingTips #CareerAdvice',
        likes: 45126,
        dislikes: 112,
        subscribers: '10.8M',
        tags: ['Software Engineering Tips', 'Aspiring Software Engineers', 'Coding Advice', 'Career Guidance for Programmers', 'Learn Programming', 'Tech Career Tips', 'Shradha Maam', 'Software Developer Journey', 'Programming Mindset', 'Coding Career 2025']
    },
    {
        id: 9,
        title: 'The Greatest Survival Story in Human History | Dhruv Rathee',
        channel: 'Dhruv Rathee',
        channelId: 'dhruvRathee',
        views: 59668,
        uploadTime: '31 Aug 2025',
        duration: '38:52',
        youtubeId: 'VUoa94WUtWA',
        description: 'This is the jaw-dropping true story of Sir Ernest Shackleton\'s Endurance expedition ❄️🌊 — where 28 men were trapped in Antarctica for over 500 days 🥶. No food 🍞. No rescue 🚁. No hope 😱. Or so the world thought. Watch this insane survival story that even death couldn’t conquer 💪🧊. You won’t believe how it ends! 🌟 #Shackleton #SurvivalStory #Antarctica',
        likes: 4756,
        dislikes: 120,
        subscribers: '3.88K',
        tags: ['Ernest Shackleton', 'Endurance Expedition', 'Antarctica Survival Story', 'True Survival Stories', 'Historical Expeditions', 'Dhruv Rathee', 'Survival in Antarctica', '500 Days at Sea', 'Epic Survival Story', 'Adventure Documentary']
    },
    {
        id: 10,
        title: 'TOP 20 Craziest Actions by Volleyball Team Brazil',
        channel: 'Power Volleyball',
        channelId: 'powerVolleyball',
        views: 1100000,
        uploadTime: '4 months ago',
        duration: '10:08',
        youtubeId: 'rWzX9fAjFBA',
        description: 'TOP 20 Craziest Actions by Volleyball Team Brazil 🏐🇧🇷. The Brazil men\'s national volleyball team is governed by the Confederação Brasileira de Voleibol (Brazilian Volleyball Confederation) and takes part in international volleyball competitions 🌍. Brazil has won three gold medals at the Olympic Games 🥇, three World Championships 🏆, and nine World League titles 🏐✨. Known as volleyball\'s "Dream Team" during coach Bernardo Rezende\'s winning streak 💪, they are currently ranked 7️⃣th on the FIVB World Rankings. Like, Share, Subscribe for more volleyball content 🔔📢',
        likes: 13000,
        dislikes: 78,
        subscribers: '420K',
        tags: ['Brazil Volleyball Team', 'Top Volleyball Actions', 'Volleyball Highlights', 'Brazil Men’s Volleyball', 'Olympic Volleyball', 'Volleyball Skills', 'FIVB Volleyball', 'Sports Highlights', 'Power Volleyball', 'Volleyball Top 20']
    },
    {
        id: 11,
        title: 'ONLY REAL OLED | 16K Video ULTRA HD | Dolby Vision 16K HDR',
        channel: 'Video Ultra Hd',
        channelId: 'videoUltraHd',
        views: 1100000,
        uploadTime: '4 months ago',
        duration: '17:01',
        youtubeId: '1Y_QObxSwQ0',
        description: 'The Best of 16K, 12K & 8K Dolby Vision Demo 4K Video ULTRA HD HDR 240 FPS Nature Film 🌿🎥 | 60FPS, 120FPS high FPS resolution with Dolby Atmos music 🎶 | Relax and immerse yourself in stunning visuals and amazing soundscapes 🌄 | For the best experience, enjoy this video on your 4K, 8K, 12K TV, Samsung TV, LG HDR TV, Sony HDR TV, Hisense TV, Philips TV, Apple XDR TV, iPhone Pro Max, Xiaomi, POCO, Samsung Galaxy, Huawei, and other devices 📺✨.',
        likes: 13000,
        dislikes: 78,
        subscribers: '420K',
        tags: ['16K Video ULTRA HD', 'Dolby Vision 16K HDR', '8K 12K 16K Demo', 'High FPS Video', 'Dolby Atmos Music', 'Nature Film 16K', 'Ultra HD Demo Video', '4K 8K 12K 16K', 'Video Ultra HD', 'HDR Video Demo']
    },
    {
        id: 12,
        title: 'India vs Oman | Match Highlights | DP World Asia Cup 2025',
        channel: 'Sports Club',
        channelId: 'sportsClub',
        views: 93988189,
        uploadTime: '29 April 2025',
        duration: '25:32',
        youtubeId: 'njt_pUIKceg',
        description: 'India 🇮🇳 vs Oman 🇴🇲 | Match Highlights ⚡ | DP World Asia Cup 2025 🏏 | Watch all the thrilling moments, amazing wickets, and incredible shots from this high-intensity cricket clash 🔥🏏. Relive the action, excitement, and nail-biting finishes in this official highlight reel 🎥.',
        likes: 450560,
        dislikes: 112,
        subscribers: '304',
        tags: ['India vs Oman 2025', 'DP World Asia Cup Highlights', 'Cricket Highlights', 'India Cricket Team', 'Oman Cricket Team', 'Asia Cup 2025', 'Cricket Match Recap', 'Top Wickets and Shots', 'Indian Cricket Highlights', 'Sports Club Cricket']
    }
];

// Mock Comments Data
const commentsDatabase = [
    {
        id: 1,
        videoId: 1,
        author: 'TechEnthusiast',
        authorId: 'techenthusiast',
        text: 'Amazing tutorial! Really helped me understand the concepts better. The step-by-step explanation is fantastic.',
        likes: 24,
        timestamp: '2 hours ago',
        replies: []
    },
    {
        id: 2,
        videoId: 1,
        author: 'WebDevNewbie',
        authorId: 'webdevnewbie',
        text: 'Could you make a follow-up video about deployment strategies? This was incredibly helpful!',
        likes: 12,
        timestamp: '5 hours ago',
        replies: []
    },
    {
        id: 3,
        videoId: 1,
        author: 'CodeReviewer',
        authorId: 'codereviewer',
        text: 'Great explanation of the architecture. Very clear and detailed. Looking forward to more content like this.',
        likes: 18,
        timestamp: '1 day ago',
        replies: []
    }
];

// Utility Functions
const Utils = {
    formatViewCount: (count) => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        } else if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    },

    formatLikeCount: (count) => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    },

    getChannelGradient: (channelId) => {
        const gradients = {
            'devineMusic': 'linear-gradient(45deg, #667eea, #764ba2)',
            'chaiaurCode': 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
            'playDMF': 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            'codeWithHarry': 'linear-gradient(45deg, #a8edea, #fed6e3)',
            'WhatsYourPriority': 'linear-gradient(45deg, #ff9a9e, #fecfef)',
            'kgfShorts': 'linear-gradient(45deg, #a18cd1, #fbc2eb)',
            'divineMusic': 'linear-gradient(45deg, #667eea, #764ba2)',
            'shradhaDidi': 'linear-gradient(45deg, #8c8ed1ff, #c2fbf2ff)',
            'dhruvRathee': 'linear-gradient(45deg, #d1af8cff, #fbc2ccff)',
            'powerVolleyball': 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
            'videoUltraHd': 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            'sportsClub': 'linear-gradient(45deg, #a8edea, #fed6e3)'
        };
        return gradients[channelId] || gradients['codemaster'];
    },

    getCommentGradient: (authorId) => {
        const gradients = [
            'linear-gradient(45deg, #4CAF50, #45a049)',
            'linear-gradient(45deg, #2196F3, #1976D2)',
            'linear-gradient(45deg, #FF9800, #F57C00)',
            'linear-gradient(45deg, #9C27B0, #7B1FA2)',
            'linear-gradient(45deg, #F44336, #D32F2F)'
        ];
        const hash = authorId.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return gradients[hash % gradients.length];
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// DOM Manipulation Functions
const DOMHelpers = {
    createElement: (tag, className = '', innerHTML = '') => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    },

    toggleClass: (element, className, condition) => {
        if (condition) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    },

    animateElement: (element, animationClass, delay = 0) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, delay);
    }
};

// Sidebar Management
const SidebarManager = {
    toggle() {
        AppState.sidebar.isOpen = !AppState.sidebar.isOpen;
        this.updateSidebarState();
        this.animateMenuIcon();
    },

    updateSidebarState() {
        const sidebar = document.getElementById('navigationSidebar');
        const mainContainer = document.getElementById('mainContainer');
        const overlay = document.getElementById('sidebarOverlay');

        if (AppState.sidebar.isMobile) {
            // Mobile behavior
            DOMHelpers.toggleClass(sidebar, 'mobile-show', AppState.sidebar.isOpen);
            DOMHelpers.toggleClass(overlay, 'show', AppState.sidebar.isOpen);
        } else {
            // Desktop behavior
            DOMHelpers.toggleClass(sidebar, 'collapsed', !AppState.sidebar.isOpen);
            DOMHelpers.toggleClass(mainContainer, 'sidebar-collapsed', !AppState.sidebar.isOpen);
        }
    },

    animateMenuIcon() {
        const menuIcon = document.querySelector('#menuToggle i');
        menuIcon.style.transform = AppState.sidebar.isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    },

    handleResize() {
        AppState.sidebar.isMobile = window.innerWidth < 992;

        if (!AppState.sidebar.isMobile) {
            // Desktop mode
            const sidebar = document.getElementById('navigationSidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const mainContainer = document.getElementById('mainContainer');

            sidebar.classList.remove('mobile-show');
            overlay.classList.remove('show');

            DOMHelpers.toggleClass(sidebar, 'collapsed', !AppState.sidebar.isOpen);
            DOMHelpers.toggleClass(mainContainer, 'sidebar-collapsed', !AppState.sidebar.isOpen);
        } else {
            // Mobile mode
            const mainContainer = document.getElementById('mainContainer');
            mainContainer.classList.remove('sidebar-collapsed');

            if (!AppState.sidebar.isOpen) {
                const sidebar = document.getElementById('navigationSidebar');
                sidebar.classList.remove('mobile-show');
            }
        }
    },

    setActiveNavItem(page) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Set active based on page
        const navItems = document.querySelectorAll('.nav-item');
        if (page === 'home' && navItems[0]) {
            navItems[0].classList.add('active');
        } else if (page === 'trending' && navItems[1]) {
            navItems[1].classList.add('active');
        }
    }
};

// Video Management
// Complete VideoManager - Replace your existing VideoManager object with this
const VideoManager = {
    currentVideoId: null,
    playerLoading: false,

    loadHomeVideos() {
        const container = document.getElementById('videosGrid');
        if (!container) {
            console.error('Videos grid container not found');
            return;
        }

        container.innerHTML = '';

        videoDatabase.forEach((video, index) => {
            const videoCard = this.createVideoCard(video, index);
            container.appendChild(videoCard);
        });
    },

    createVideoCard(video, index) {
        const card = document.createElement('div');
        card.className = 'video-card fade-in';
        card.style.animationDelay = `${index * 100}ms`;
        card.onclick = () => this.selectVideo(video.id);

        const thumbnailUrl = video.youtubeId
            ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
            : video.thumbnail;

        card.innerHTML = `
            <div class="video-thumbnail-container">
                <img src="${thumbnailUrl}" alt="${video.title}" class="video-thumbnail" 
                     onerror="this.src='${video.thumbnail}'">
                <div class="video-duration-badge">${video.duration}</div>
                <div class="thumbnail-overlay">
                    <div class="play-icon-overlay">
                        <i class="bi bi-play-fill fs-4"></i>
                    </div>
                </div>
            </div>
            <div class="video-info-section">
                <div class="creator-avatar" style="background: ${Utils.getChannelGradient(video.channelId)}">
                    ${video.channel[0]}
                </div>
                <div class="video-details">
                <h3 class="video-title">${video.title}</h3>
                    <div class="video-metadata">
                        <div>${video.channel}</div>
                        <div>${Utils.formatViewCount(video.views)} views • ${video.uploadTime}</div>
                    </div>
                </div>
            </div>
        `;

        return card;
    },

    selectVideo(videoId) {
        const video = videoDatabase.find(v => v.id === videoId);
        if (!video) {
            console.error('Video not found:', videoId);
            return;
        }

        // Prevent duplicate selections
        if (this.currentVideoId === videoId && AppState.currentPage === 'video') {
            console.log('Same video already loaded');
            return;
        }

        console.log('Selecting video:', video.title);

        AppState.selectedVideo = video;
        AppState.currentPage = 'video';
        this.currentVideoId = videoId;

        // Show video page first
        this.showVideoPage();

        // Update content
        this.updateVideoPlayerContent(video);
        this.loadRelatedVideos(videoId);
        this.loadComments(videoId);

        // Close mobile sidebar
        if (AppState.sidebar && AppState.sidebar.isMobile && AppState.sidebar.isOpen) {
            SidebarManager.toggle();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    updateVideoPlayerContent(video) {
        console.log('Updating video player content for:', video.title);

        // Update all text elements
        this.updateVideoInfo(video);

        // Create/update video player
        if (video.youtubeId) {
            this.createYouTubePlayer(video.youtubeId);
        } else {
            this.showVideoUnavailable();
        }

        // Update interactive elements
        this.updateSubscribeButton(video.channelId);
        this.updateLikeDislikeButtons(video.id);
    },

    updateVideoInfo(video) {
        const elements = {
            'playerVideoTitle': video.title,
            'videoMainTitle': video.title,
            'videoChannelName': video.channel,
            'videoSubscriberCount': `${video.subscribers} subscribers`,
            'likeCount': Utils.formatLikeCount(video.likes),
            'dislikeCount': Utils.formatLikeCount(video.dislikes),
            'videoViewCount': `${Utils.formatViewCount(video.views)} views`,
            'videoUploadDate': video.uploadTime,
            'videoDescriptionText': video.description,
            'totalDuration': video.duration
        };

        Object.entries(elements).forEach(([id, text]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
            } else {
                console.warn(`Element not found: ${id}`);
            }
        });

        // Update channel avatar
        const channelAvatar = document.getElementById('videoChannelAvatar');
        if (channelAvatar) {
            channelAvatar.textContent = video.channel[0];
            channelAvatar.style.background = Utils.getChannelGradient(video.channelId);
        }
    },

    createYouTubePlayer(youtubeId) {
        console.log('Creating YouTube player for:', youtubeId);

        const playerContainer = document.querySelector('.video-player-container');
        if (!playerContainer) {
            console.error('Video player container not found in DOM');
            return;
        }

        // Prevent multiple simultaneous loads
        if (this.playerLoading) {
            console.log('Player already loading, skipping...');
            return;
        }

        // Check if same video is already loaded
        const existingIframe = playerContainer.querySelector('iframe');
        if (existingIframe && existingIframe.src.includes(youtubeId)) {
            console.log('Same video already loaded');
            return;
        }

        this.playerLoading = true;

        // Clear container
        playerContainer.innerHTML = '';
        playerContainer.onclick = null;

        // Create loading state
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'video-loading-state';
        loadingDiv.innerHTML = `
            <div class="loading-spinner"></div>
            <span>Loading video...</span>
        `;
        playerContainer.appendChild(loadingDiv);

        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.style.cssText = 'border: none; border-radius: 8px; background: #000;';

        // Set up event handlers before setting src
        iframe.onload = () => {
            console.log('YouTube iframe loaded successfully');
            this.playerLoading = false;

            // Replace loading with iframe
            if (playerContainer.querySelector('.video-loading-state')) {
                playerContainer.innerHTML = '';
                playerContainer.appendChild(iframe);
            }
        };

        iframe.onerror = (error) => {
            console.error('YouTube iframe failed to load:', error);
            this.playerLoading = false;
            this.showVideoUnavailable();
        };

        // Set source after handlers are attached
        iframe.src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&fs=1&enablejsapi=1`;

        // Fallback timeout
        setTimeout(() => {
            if (this.playerLoading) {
                console.log('Loading timeout, showing iframe anyway');
                this.playerLoading = false;

                if (playerContainer.querySelector('.video-loading-state')) {
                    playerContainer.innerHTML = '';
                    playerContainer.appendChild(iframe);
                }
            }
        }, 5000);
    },

    showVideoUnavailable() {
        console.log('Showing video unavailable state');

        const playerContainer = document.querySelector('.video-player-container');
        if (!playerContainer) return;

        this.playerLoading = false;

        playerContainer.innerHTML = `
            <div class="video-unavailable-state">
                <i class="bi bi-exclamation-triangle-fill"></i>
                <h5>Video unavailable</h5>
                <p>This video cannot be played right now.</p>
                <button class="btn btn-outline-light btn-sm" onclick="location.reload()">
                    <i class="bi bi-arrow-clockwise"></i>
                    Refresh
                </button>
            </div>
        `;
    },

    showVideoPage() {
        const homePage = document.getElementById('homePage');
        const videoPage = document.getElementById('videoPlayerPage');

        if (homePage && videoPage) {
            homePage.classList.add('d-none');
            videoPage.classList.remove('d-none');
            console.log('Switched to video page');
        } else {
            console.error('Page elements not found');
        }
    },

    showHomePage() {
        const homePage = document.getElementById('homePage');
        const videoPage = document.getElementById('videoPlayerPage');

        if (homePage && videoPage) {
            videoPage.classList.add('d-none');
            homePage.classList.remove('d-none');
            console.log('Switched to home page');
        }

        AppState.selectedVideo = null;
        AppState.currentPage = 'home';
        this.currentVideoId = null;
        this.playerLoading = false;
    },

    // Fixed loadRelatedVideos method - Replace this method in your VideoManager

    loadRelatedVideos(currentVideoId) {
        console.log('Loading related videos for video ID:', currentVideoId);

        const container = document.getElementById('relatedVideosContainer');
        if (!container) {
            console.error('Related videos container not found');
            // Try alternative container names
            const altContainer = document.querySelector('[id*="related"]') ||
                document.querySelector('.related-videos') ||
                document.querySelector('#videoPlayerPage .col-xl-4 > div');

            if (altContainer) {
                console.log('Found alternative container:', altContainer);
            } else {
                console.error('No related videos container found at all');
                return;
            }
        }

        // Get related videos (all except current)
        const relatedVideos = videoDatabase.filter(v => v.id !== currentVideoId);
        console.log(`Found ${relatedVideos.length} related videos`);

        if (relatedVideos.length === 0) {
            console.warn('No related videos found');
            container.innerHTML = '<p class="text-muted">No related videos available</p>';
            return;
        }

        // Clear container
        container.innerHTML = '';

        // Create "Up next" header if it doesn't exist
        const existingHeader = container.previousElementSibling;
        if (!existingHeader || !existingHeader.textContent.includes('Up next')) {
            const header = document.createElement('h6');
            header.className = 'fw-bold mb-3 text-white';
            header.textContent = 'Up next';
            container.parentNode.insertBefore(header, container);
        }

        // Add related videos
        relatedVideos.slice(0, 10).forEach((video, index) => {
            const relatedItem = this.createRelatedVideoItem(video, index);
            container.appendChild(relatedItem);
            console.log(`Added related video: ${video.title}`);
        });

        console.log('Related videos loaded successfully');
    },

    createRelatedVideoItem(video, index) {
        const item = document.createElement('div');
        item.className = 'related-video-item mb-3';
        item.style.cursor = 'pointer';
        item.style.animationDelay = `${index * 50}ms`;

        // Add click handler
        item.onclick = () => {
            console.log('Clicking related video:', video.title);
            this.selectVideo(video.id);
        };

        const thumbnailUrl = video.youtubeId
            ? `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`
            : video.thumbnail;

        item.innerHTML = `
        <div class="d-flex gap-2">
            <div class="related-thumbnail-wrapper position-relative flex-shrink-0">
                <img src="${thumbnailUrl}" 
                     alt="${video.title}" 
                     class="related-thumbnail rounded"
                     style="width: 160px; height: 90px; object-fit: cover; background: #333;"
                     onerror="this.src='${video.thumbnail}'">
                <div class="related-duration position-absolute bottom-0 end-0 bg-dark text-white px-1 rounded" 
                     style="font-size: 12px; margin: 4px;">
                    ${video.duration}
                </div>
            </div>
            <div class="related-info flex-grow-1">
                <h6 class="related-title text-white mb-1" 
                    style="font-size: 14px; line-height: 1.3; font-weight: 500;">
                    ${video.title}
                </h6>
                <div class="related-meta">
                    <div class="related-channel text-muted mb-1" style="font-size: 13px;">
                        ${video.channel}
                    </div>
                    <div class="related-stats text-muted" style="font-size: 12px;">
                        ${Utils.formatViewCount(video.views)} views • ${video.uploadTime}
                    </div>
                </div>
            </div>
        </div>
    `;

        // Add hover effect
        item.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'transparent';
        });

        return item;
    },

    updateSubscribeButton(channelId) {
        const button = document.getElementById('subscribeButton');
        if (!button) return;

        const isSubscribed = AppState.user && AppState.user.subscriptions.has(channelId);
        button.classList.toggle('subscribed', isSubscribed);
        button.textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
    },

    updateLikeDislikeButtons(videoId) {
        const likeButton = document.getElementById('likeButton');
        const dislikeButton = document.getElementById('dislikeButton');

        if (likeButton && dislikeButton) {
            likeButton.classList.remove('active');
            dislikeButton.classList.remove('active');

            if (AppState.user && AppState.user.likedVideos.has(videoId)) {
                likeButton.classList.add('active');
            }
            if (AppState.user && AppState.user.dislikedVideos.has(videoId)) {
                dislikeButton.classList.add('active');
            }
        }
    }
};

// Make sure to call this when the page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing VideoManager');

    // Load initial videos
    if (typeof VideoManager !== 'undefined') {
        VideoManager.loadHomeVideos();
    }
});

// Comments Management
const CommentsManager = {
    loadComments(videoId) {
        const comments = commentsDatabase.filter(c => c.videoId === videoId);

        // Update comments count
        document.getElementById('commentsCount').textContent = `${comments.length} Comments`;

        // Load to both desktop and mobile containers
        this.renderComments('commentsContainer', comments);
        this.renderComments('mobileCommentsContainer', comments);
    },

    renderComments(containerId, comments) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        comments.forEach((comment, index) => {
            const commentElement = this.createCommentElement(comment, index);
            container.appendChild(commentElement);
        });
    },

    createCommentElement(comment, index) {
        const commentDiv = DOMHelpers.createElement('div', 'comment-item fade-in');
        commentDiv.style.animationDelay = `${index * 100}ms`;

        const gradient = Utils.getCommentGradient(comment.authorId);

        commentDiv.innerHTML = `
                    <div class="comment-avatar" style="background: ${gradient}">
                        ${comment.author[0]}
                    </div>
                    <div class="comment-content">
                        <div class="comment-header">
                            <span class="comment-author">${comment.author}</span>
                            <span class="comment-timestamp">${comment.timestamp}</span>
                        </div>
                        <p class="comment-text">${comment.text}</p>
                        <div class="comment-actions">
                            <button class="comment-action" onclick="toggleCommentLike(${comment.id})">
                                <i class="bi bi-hand-thumbs-up"></i>
                                <span>${comment.likes}</span>
                            </button>
                            <button class="comment-action">
                                <i class="bi bi-hand-thumbs-down"></i>
                            </button>
                            <button class="comment-action">
                                Reply
                            </button>
                        </div>
                    </div>
                `;

        return commentDiv;
    }
};

// Player Management
const PlayerManager = {
    togglePlayback(event) {
        if (event) event.stopPropagation();

        AppState.player.isPlaying = !AppState.player.isPlaying;
        this.updatePlayIcons();
    },

    updatePlayIcons() {
        const mainPlayIcon = document.getElementById('mainPlayIcon');
        const controlsPlayIcon = document.getElementById('controlsPlayIcon');

        const iconClass = AppState.player.isPlaying ? 'bi-pause-fill' : 'bi-play-fill';

        mainPlayIcon.className = `bi ${iconClass}`;
        controlsPlayIcon.className = `bi ${iconClass}`;
    },

    toggleMute(event) {
        if (event) event.stopPropagation();

        AppState.player.isMuted = !AppState.player.isMuted;
        this.updateMuteIcon();
    },

    updateMuteIcon() {
        const muteIcon = document.getElementById('muteIcon');
        muteIcon.className = AppState.player.isMuted ? 'bi bi-volume-mute' : 'bi bi-volume-up';
    }
};

// User Interaction Management
const UserManager = {
    toggleSubscription() {
        if (!AppState.selectedVideo) return;

        const channelId = AppState.selectedVideo.channelId;

        if (AppState.user.subscriptions.has(channelId)) {
            AppState.user.subscriptions.delete(channelId);
        } else {
            AppState.user.subscriptions.add(channelId);
        }

        VideoManager.updateSubscribeButton(channelId);
        this.showToast(AppState.user.subscriptions.has(channelId) ? 'Subscribed!' : 'Unsubscribed');
    },

    toggleLike() {
        if (!AppState.selectedVideo) return;

        const videoId = AppState.selectedVideo.id;

        if (AppState.user.likedVideos.has(videoId)) {
            AppState.user.likedVideos.delete(videoId);
        } else {
            AppState.user.likedVideos.add(videoId);
            AppState.user.dislikedVideos.delete(videoId); // Remove dislike if exists
        }

        VideoManager.updateLikeDislikeButtons(videoId);
        this.showToast('Thanks for your feedback!');
    },

    toggleDislike() {
        if (!AppState.selectedVideo) return;

        const videoId = AppState.selectedVideo.id;

        if (AppState.user.dislikedVideos.has(videoId)) {
            AppState.user.dislikedVideos.delete(videoId);
        } else {
            AppState.user.dislikedVideos.add(videoId);
            AppState.user.likedVideos.delete(videoId); // Remove like if exists
        }

        VideoManager.updateLikeDislikeButtons(videoId);
        this.showToast('Thanks for your feedback!');
    },

    toggleCommentLike(commentId) {
        // Simple comment like toggle - could be expanded
        this.showToast('Comment liked!');
    },

    showToast(message) {
        // Create and show a simple toast notification
        const toast = DOMHelpers.createElement('div', 'position-fixed bottom-0 start-50 translate-middle-x mb-3 alert alert-success alert-dismissible fade show');
        toast.innerHTML = `
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
        toast.style.zIndex = '9999';
        document.body.appendChild(toast);

        // Auto-dismiss after 3 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 3000);
    }
};

// Search Management
const SearchManager = {
    performSearch() {
        const searchInput = document.getElementById('searchInput');
        const query = searchInput.value.trim().toLowerCase();

        if (!query) return;

        // Filter videos based on search query
        const filteredVideos = videoDatabase.filter(video =>
            video.title.toLowerCase().includes(query) ||
            video.channel.toLowerCase().includes(query) ||
            video.tags.some(tag => tag.toLowerCase().includes(query))
        );

        this.displaySearchResults(filteredVideos, query);
    },

    displaySearchResults(videos, query) {
        // Show home page
        VideoManager.showHomePage();

        // Update the video grid with filtered results
        const container = document.getElementById('videosGrid');
        container.innerHTML = '';

        if (videos.length === 0) {
            container.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <i class="bi bi-search display-1 text-muted mb-3"></i>
                            <h4 class="text-muted">No results found for "${query}"</h4>
                            <p class="text-muted">Try different keywords or browse our trending videos</p>
                        </div>
                    `;
            return;
        }


        // Add filtered videos
        videos.forEach((video, index) => {
            const videoCard = VideoManager.createVideoCard(video, index);
            container.appendChild(videoCard);
        });
    }
};

// Modal Management
const ModalManager = {
    openUploadModal() {
        const uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'));
        uploadModal.show();
    },

    uploadVideo() {
        const title = document.getElementById('videoTitle').value;
        const description = document.getElementById('videoDescription').value;
        const visibility = document.getElementById('videoVisibility').value;

        if (!title.trim()) {
            alert('Please enter a video title');
            return;
        }

        // Simulate upload process
        UserManager.showToast('Video upload started! You will be notified when it\'s complete.');

        // Close modal
        const uploadModal = bootstrap.Modal.getInstance(document.getElementById('uploadModal'));
        uploadModal.hide();

        // Reset form
        document.getElementById('videoTitle').value = '';
        document.getElementById('videoDescription').value = '';
        document.getElementById('videoVisibility').value = 'private';
    }
};

// Navigation Functions
function navigateToHome() {
    AppState.currentPage = 'home';
    VideoManager.showHomePage();
    VideoManager.loadHomeVideos();
    SidebarManager.setActiveNavItem('home');
}

function navigateToTrending() {
    AppState.currentPage = 'trending';
    // Sort videos by views for trending
    const trendingVideos = [...videoDatabase].sort((a, b) => b.views - a.views);

    VideoManager.showHomePage();

    const container = document.getElementById('videosGrid');
    container.innerHTML = '';


    // Add trending videos
    trendingVideos.forEach((video, index) => {
        const videoCard = VideoManager.createVideoCard(video, index);
        container.appendChild(videoCard);
    });

    SidebarManager.setActiveNavItem('trending');
}

// Global Functions (called from HTML)
function toggleSidebar() {
    SidebarManager.toggle();
}

function toggleVideoPlayback(event) {
    PlayerManager.togglePlayback(event);
}

function toggleMute(event) {
    PlayerManager.toggleMute(event);
}

function toggleSubscription() {
    UserManager.toggleSubscription();
}

function toggleLike() {
    UserManager.toggleLike();
}

function toggleDislike() {
    UserManager.toggleDislike();
}

function toggleCommentLike(commentId) {
    UserManager.toggleCommentLike(commentId);
}

function performSearch() {
    SearchManager.performSearch();
}

function openUploadModal() {
    ModalManager.openUploadModal();
}

function uploadVideo() {
    ModalManager.uploadVideo();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the application
    VideoManager.loadHomeVideos();
    SidebarManager.updateSidebarState();

    // Handle window resize
    const debouncedResize = Utils.debounce(() => {
        SidebarManager.handleResize();
    }, 250);

    window.addEventListener('resize', debouncedResize);

    // Handle search on Enter key
    document.getElementById('searchInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            SearchManager.performSearch();
        }
    });

    // Handle escape key to close mobile sidebar
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && AppState.sidebar.isMobile && AppState.sidebar.isOpen) {
            SidebarManager.toggle();
        }
    });

    // Prevent video controls from triggering video selection
    document.addEventListener('click', function (e) {
        if (e.target.closest('.player-controls') || e.target.closest('.control-btn')) {
            e.stopPropagation();
        }
    });

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize tooltips if needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add focus management for accessibility
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Add keyboard navigation styles
const keyboardStyles = document.createElement('style');
keyboardStyles.textContent = `
            body.keyboard-navigation *:focus {
                outline: 2px solid #1976d2 !important;
                outline-offset: 2px !important;
            }
        `;
document.head.appendChild(keyboardStyles);

// Service Worker Registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Performance monitoring
window.addEventListener('load', function () {
    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});