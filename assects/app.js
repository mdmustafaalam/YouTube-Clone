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
        title: 'Build a Complete YouTube Clone',
        channel: 'CodeMaster',
        channelId: 'codemaster',
        views: 1234567,
        uploadTime: '2 days ago',
        duration: '45:20',
        thumbnail: 'https://picsum.photos/640/360?random=1',
        description: 'Learn how to build a complete YouTube clone using React and modern web technologies. This comprehensive tutorial covers frontend development, backend APIs, database design, and deployment strategies. Perfect for developers who want to create their own video platform.',
        likes: 25420,
        dislikes: 543,
        subscribers: '850K',
        tags: ['programming', 'react', 'tutorial', 'web development']
    },
    {
        id: 2,
        title: 'React Tutorial for Beginners - Complete Course',
        channel: 'WebDev Pro',
        channelId: 'webdevpro',
        views: 892456,
        uploadTime: '1 week ago',
        duration: '32:15',
        thumbnail: 'https://picsum.photos/640/360?random=2',
        description: 'Complete React tutorial covering all the basics and advanced concepts you need to become a React developer. Includes hooks, context, routing, and more.',
        likes: 18234,
        dislikes: 234,
        subscribers: '650K',
        tags: ['react', 'javascript', 'frontend', 'tutorial']
    },
    {
        id: 3,
        title: 'JavaScript ES6+ Features You Must Know',
        channel: 'JS Academy',
        channelId: 'jsacademy',
        views: 654321,
        uploadTime: '3 days ago',
        duration: '28:45',
        thumbnail: 'https://picsum.photos/640/360?random=3',
        description: 'Explore the latest JavaScript ES6+ features with practical examples and use cases. Master modern JavaScript syntax and concepts.',
        likes: 12456,
        dislikes: 167,
        subscribers: '420K',
        tags: ['javascript', 'es6', 'programming', 'tutorial']
    },
    {
        id: 4,
        title: 'CSS Grid Layout Masterclass',
        channel: 'Design Hub',
        channelId: 'designhub',
        views: 423567,
        uploadTime: '5 days ago',
        duration: '1:15:30',
        thumbnail: 'https://picsum.photos/640/360?random=4',
        description: 'Master CSS Grid Layout with this comprehensive tutorial covering all aspects of modern web layout techniques.',
        likes: 8567,
        dislikes: 123,
        subscribers: '320K',
        tags: ['css', 'grid', 'layout', 'design']
    },
    {
        id: 5,
        title: 'Node.js Backend Development Complete Guide',
        channel: 'Backend Beast',
        channelId: 'backendbeast',
        views: 789123,
        uploadTime: '1 day ago',
        duration: '52:10',
        thumbnail: 'https://picsum.photos/640/360?random=5',
        description: 'Build scalable backend applications with Node.js and Express. Learn best practices, authentication, database integration, and deployment.',
        likes: 15678,
        dislikes: 289,
        subscribers: '590K',
        tags: ['nodejs', 'backend', 'express', 'api']
    },
    {
        id: 6,
        title: 'Database Design Fundamentals',
        channel: 'Data Science Pro',
        channelId: 'datasciencepro',
        views: 345678,
        uploadTime: '6 days ago',
        duration: '38:25',
        thumbnail: 'https://picsum.photos/640/360?random=6',
        description: 'Learn database design principles and best practices for creating efficient and scalable database systems.',
        likes: 7234,
        dislikes: 89,
        subscribers: '280K',
        tags: ['database', 'sql', 'design', 'data']
    },
    {
        id: 7,
        title: '2-Hour Study with me',
        channel: 'Carrot Td',
        channelId: 'carrotId',
        views: 5626566,
        uploadTime: '1 days ago',
        duration: '1:52:25',
        thumbnail: 'https://picsum.photos/640/360?random=7',
        description: 'The links included in this description might be affiliate links. I may receive a small commission if you purchase a product with this link. There is non-additional charge to you. Thank you very much!',
        likes: 56894,
        dislikes: 178,
        subscribers: '2.8M',
        tags: ['study', 'relax', 'mind fresh', 'mood']
    },
    {
        id: 8,
        title: 'Amazon Rainforest - History of Amazon Forest - Amazon Jungle is Called Lungs of the Earth',
        channel: 'Amazon Forest',
        channelId: 'amazonForest',
        views: 689452,
        uploadTime: '1 days ago',
        duration: '7:20',
        thumbnail: 'https://picsum.photos/640/360?random=8',
        description: 'The Amazon Rainforest is the largest tropical rainforest in the world, spanning over 5.5 million square kilometers (2.1 million square miles) and covering parts of nine countries in South America, with the majority located in Brazil. It plays a critical role in global environmental systems and is often referred to as the "lungs of the Earth" because it produces approximately 20% of the worlds oxygen through photosynthesis.',
        likes: 45126,
        dislikes: 112,
        subscribers: '10.8M',
        tags: ['amazon', 'rainforest', 'forest', 'jungle']
    },
    {
        id: 9,
        title: 'Chillout Productivity Music | Relaxing Beats for Deep Work & Study Flow in a Cozy Den',
        channel: 'Mindful Deep Work',
        channelId: 'mindfulDeepWork',
        views: 59668,
        uploadTime: '31 Aug 2025',
        duration: '2:10:59',
        thumbnail: 'https://picsum.photos/640/360?random=9',
        description: 'Struggling to silence distractions and dive into serious work? 🎧 You have found your ultimate focus companion! Welcome to "Productivity Power," your new go-to for deep work music that truly transforms your workspace. This is not just background noise; its a meticulously crafted soundscape designed to elevate your concentration, reduce distractions, and help you achieve your most ambitious goals.',
        likes: 4756,
        dislikes: 120,
        subscribers: '3.88K',
        tags: ['work', 'deep work', 'relaxation', 'listing']
    },
    {
        id: 10,
        title: 'Magia - Ultra Beats (Long Version)',
        channel: 'Ultra Beats Chill Music',
        channelId: 'ultraBeatsChillMusic',
        views: 2000000,
        uploadTime: '3 years ago',
        duration: '30:00',
        thumbnail: 'https://picsum.photos/640/360?random=10',
        description: 'This is second official channel of Ultra Beats, here we will publish long version beats. Make sure to subscribe and activate notification bell ➜ ',
        likes: 22000,
        dislikes: 819,
        subscribers: '280K',
        tags: ['music', 'beats', 'ultra sound', 'sound']
    },
    {
        id: 11,
        title: 'Divine Music - Ethnic & Deep House Mix 2025',
        channel: 'Divine Music',
        channelId: 'divineMusic',
        views: 1100000,
        uploadTime: '4 months ago',
        duration: '54:01',
        thumbnail: 'https://picsum.photos/640/360?random=11',
        description: 'If you’re taking the time to read this, I wish you an inspiring life where you achieve all your hopes and dreams starting from this moment.',
        likes: 13000,
        dislikes: 78,
        subscribers: '420K',
        tags: ['divine', 'devinemusic', 'mix', 'mood change']
    },
    {
        id: 12,
        title: 'Galaxy Beats - ELLA (Official Beat Music)',
        channel: 'Galaxy Beats',
        channelId: 'galaxyBeats',
        views: 9399,
        uploadTime: '29 April 2024',
        duration: '3:23',
        thumbnail: 'https://picsum.photos/640/360?random=12',
        description: 'Here you’ll find the best relaxing and catchy beats and instrumental music, perfect for studying, working, or just unwinding. All tracks are instrumental, designed to create an amazing musical atmosphere for you. ✨ Subscribe to our channel so you never miss a new video!',
        likes: 4500,
        dislikes: 112,
        subscribers: '304',
        tags: ['galaxy', 'ella', 'beats', 'song']
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
            'codemaster': 'linear-gradient(45deg, #667eea, #764ba2)',
            'webdevpro': 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
            'jsacademy': 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            'designhub': 'linear-gradient(45deg, #a8edea, #fed6e3)',
            'backendbeast': 'linear-gradient(45deg, #ff9a9e, #fecfef)',
            'datasciencepro': 'linear-gradient(45deg, #a18cd1, #fbc2eb)',
            'carrotId': 'linear-gradient(45deg, #d1af8cff, #fbc2ccff)',
            'amazonForest': 'linear-gradient(45deg, #8c8ed1ff, #c2fbf2ff)',
            'mindfulDeepWork': 'linear-gradient(45deg, #667eea, #764ba2)',
            'divineMusic': 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
            'ultraBeatsChillMusic': 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            'galaxyBeats': 'linear-gradient(45deg, #a8edea, #fed6e3)'
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
const VideoManager = {
    loadHomeVideos() {
        const container = document.getElementById('videosGrid');
        container.innerHTML = '';

        videoDatabase.forEach((video, index) => {
            const videoCard = this.createVideoCard(video, index);
            container.appendChild(videoCard);
        });
    },

    createVideoCard(video, index) {
        const card = DOMHelpers.createElement('div', 'video-card fade-in');
        card.style.animationDelay = `${index * 100}ms`;
        card.onclick = () => this.selectVideo(video.id);

        card.innerHTML = `
                    <div class="video-thumbnail-container">
                        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
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
                            <h3 class="video-title text-truncate-2">${video.title}</h3>
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
        if (!video) return;

        AppState.selectedVideo = video;
        AppState.currentPage = 'video';

        this.updateVideoPlayerContent(video);
        this.showVideoPage();
        this.loadRelatedVideos(videoId);
        this.loadComments(videoId);

        // Close mobile sidebar
        if (AppState.sidebar.isMobile && AppState.sidebar.isOpen) {
            SidebarManager.toggle();
        }

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    updateVideoPlayerContent(video) {
        // Update video player elements
        document.getElementById('playerVideoTitle').textContent = video.title;
        document.getElementById('videoMainTitle').textContent = video.title;
        document.getElementById('videoChannelName').textContent = video.channel;
        document.getElementById('videoSubscriberCount').textContent = `${video.subscribers} subscribers`;
        document.getElementById('likeCount').textContent = Utils.formatLikeCount(video.likes);
        document.getElementById('dislikeCount').textContent = Utils.formatLikeCount(video.dislikes);
        document.getElementById('videoViewCount').textContent = `${Utils.formatViewCount(video.views)} views`;
        document.getElementById('videoUploadDate').textContent = video.uploadTime;
        document.getElementById('videoDescriptionText').textContent = video.description;
        document.getElementById('totalDuration').textContent = video.duration;

        // Update channel avatar
        const channelAvatar = document.getElementById('videoChannelAvatar');
        channelAvatar.textContent = video.channel[0];
        channelAvatar.style.background = Utils.getChannelGradient(video.channelId);

        // Update subscribe button
        this.updateSubscribeButton(video.channelId);

        // Update like/dislike buttons
        this.updateLikeDislikeButtons(video.id);
    },

    showVideoPage() {
        document.getElementById('homePage').classList.add('d-none');
        document.getElementById('videoPlayerPage').classList.remove('d-none');
    },

    showHomePage() {
        document.getElementById('videoPlayerPage').classList.add('d-none');
        document.getElementById('homePage').classList.remove('d-none');
        AppState.selectedVideo = null;
        AppState.currentPage = 'home';
    },

    loadRelatedVideos(currentVideoId) {
        const container = document.getElementById('relatedVideosContainer');
        const relatedVideos = videoDatabase.filter(v => v.id !== currentVideoId);

        container.innerHTML = '';

        relatedVideos.forEach((video, index) => {
            const relatedItem = this.createRelatedVideoItem(video, index);
            container.appendChild(relatedItem);
        });
    },

    createRelatedVideoItem(video, index) {
        const item = DOMHelpers.createElement('div', 'related-video-item slide-in');
        item.style.animationDelay = `${index * 50}ms`;
        item.onclick = () => this.selectVideo(video.id);

        item.innerHTML = `
                    <img src="${video.thumbnail}" alt="${video.title}" class="related-thumbnail">
                    <div class="related-info">
                        <h6 class="related-title text-truncate-2">${video.title}</h6>
                        <div class="related-meta">
                            <div>${video.channel}</div>
                            <div>${Utils.formatViewCount(video.views)} views • ${video.uploadTime}</div>
                        </div>
                    </div>
                `;

        return item;
    },

    updateSubscribeButton(channelId) {
        const button = document.getElementById('subscribeButton');
        const isSubscribed = AppState.user.subscriptions.has(channelId);

        DOMHelpers.toggleClass(button, 'subscribed', isSubscribed);
        button.textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
    },

    updateLikeDislikeButtons(videoId) {
        const likeButton = document.getElementById('likeButton');
        const dislikeButton = document.getElementById('dislikeButton');

        // Reset styles
        likeButton.classList.remove('active');
        dislikeButton.classList.remove('active');

        // Apply active styles
        if (AppState.user.likedVideos.has(videoId)) {
            likeButton.classList.add('active');
        }
        if (AppState.user.dislikedVideos.has(videoId)) {
            dislikeButton.classList.add('active');
        }
    }
};

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