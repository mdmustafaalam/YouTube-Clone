import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, Menu, User, Bell, Upload, Play, Pause, Volume2, VolumeX, 
  Maximize, Settings, ThumbsUp, ThumbsDown, Share, Download, Flag,
  Heart, MessageCircle, Eye, Clock, Home, Flame, Music, Gamepad2,
  Trophy, Lightbulb, Shirt, Podcast, Filter, ChevronDown, MoreVertical
} from 'lucide-react';

const YouTubeClone = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [subscriptions, setSubscriptions] = useState(new Set());
  const videoRef = useRef(null);

  // Mock data
  const mockVideos = [
    {
      id: 1, title: 'Build a Complete YouTube Clone', 
      channel: 'CodeMaster', views: '1.2M', time: '2 days ago', 
      duration: '45:20', thumbnail: 'https://picsum.photos/320/180?random=1',
      description: 'Learn how to build a complete YouTube clone using React and modern web technologies...',
      likes: 25000, dislikes: 500, subscribers: '850K'
    },
    {
      id: 2, title: 'React Tutorial for Beginners', 
      channel: 'WebDev Pro', views: '890K', time: '1 week ago', 
      duration: '32:15', thumbnail: 'https://picsum.photos/320/180?random=2',
      description: 'Complete React tutorial covering all the basics and advanced concepts...',
      likes: 18000, dislikes: 200, subscribers: '650K'
    },
    {
      id: 3, title: 'JavaScript ES6 Features', 
      channel: 'JS Academy', views: '650K', time: '3 days ago', 
      duration: '28:45', thumbnail: 'https://picsum.photos/320/180?random=3',
      description: 'Explore the latest JavaScript ES6 features with practical examples...',
      likes: 12000, dislikes: 150, subscribers: '420K'
    },
    {
      id: 4, title: 'CSS Grid Layout Masterclass', 
      channel: 'Design Hub', views: '420K', time: '5 days ago', 
      duration: '1:15:30', thumbnail: 'https://picsum.photos/320/180?random=4',
      description: 'Master CSS Grid Layout with this comprehensive tutorial...',
      likes: 8500, dislikes: 100, subscribers: '320K'
    },
    {
      id: 5, title: 'Node.js Backend Development', 
      channel: 'Backend Beast', views: '780K', time: '1 day ago', 
      duration: '52:10', thumbnail: 'https://picsum.photos/320/180?random=5',
      description: 'Build scalable backend applications with Node.js and Express...',
      likes: 15000, dislikes: 250, subscribers: '590K'
    },
    {
      id: 6, title: 'Database Design Fundamentals', 
      channel: 'Data Science Pro', views: '340K', time: '6 days ago', 
      duration: '38:25', thumbnail: 'https://picsum.photos/320/180?random=6',
      description: 'Learn database design principles and best practices...',
      likes: 7200, dislikes: 80, subscribers: '280K'
    }
  ];

  const mockComments = [
    { id: 1, user: 'TechEnthusiast', text: 'Amazing tutorial! Really helped me understand the concepts.', likes: 24, time: '2 hours ago' },
    { id: 2, user: 'WebDevNewbie', text: 'Could you make a follow-up video about deployment?', likes: 12, time: '5 hours ago' },
    { id: 3, user: 'CodeReviewer', text: 'Great explanation of the architecture. Very clear and detailed.', likes: 18, time: '1 day ago' }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Home', page: 'home' },
    { icon: Flame, label: 'Trending', page: 'trending' },
    { icon: Music, label: 'Music', page: 'music' },
    { icon: Gamepad2, label: 'Gaming', page: 'gaming' },
    { icon: Trophy, label: 'Sports', page: 'sports' },
    { icon: Lightbulb, label: 'Learning', page: 'learning' }
  ];

  const Header = () => (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-full">
          <Menu size={20} />
        </button>
        <div className="flex items-center space-x-1 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <Play fill="white" size={16} />
          </div>
          <span className="text-xl font-bold">YouTube</span>
        </div>
      </div>
      
      <div className="flex-1 max-w-2xl mx-8">
        <div className="flex items-center">
          <div className="flex-1 flex items-center border rounded-l-full px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none"
            />
          </div>
          <button className="px-6 py-2 bg-gray-50 border border-l-0 rounded-r-full hover:bg-gray-100">
            <Search size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setShowUploadModal(true)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Upload size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button 
          onClick={() => setUser(user ? null : { name: 'John Doe', avatar: 'https://picsum.photos/32/32?random=user' })}
          className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
        >
          <User size={16} color="white" />
        </button>
      </div>
    </header>
  );

  const Sidebar = () => (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white border-r transition-all duration-300 fixed left-0 top-16 bottom-0 z-40 overflow-y-auto`}>
      <div className="p-2">
        {sidebarItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className={`w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 ${currentPage === item.page ? 'bg-gray-100' : ''}`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span>{item.label}</span>}
          </button>
        ))}
        
        {sidebarOpen && (
          <>
            <hr className="my-4" />
            <div className="px-3 py-2">
              <h3 className="font-semibold text-sm text-gray-600 mb-2">SUBSCRIPTIONS</h3>
              <div className="space-y-2">
                {['CodeMaster', 'WebDev Pro', 'JS Academy'].map((channel) => (
                  <div key={channel} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">{channel[0]}</span>
                    </div>
                    <span className="text-sm">{channel}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );

  const VideoCard = ({ video, isLarge = false }) => (
    <div 
      className={`cursor-pointer group ${isLarge ? 'mb-6' : ''}`}
      onClick={() => setSelectedVideo(video)}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className={`w-full ${isLarge ? 'aspect-video' : 'aspect-video'} object-cover rounded-lg`}
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity rounded-lg"></div>
      </div>
      <div className="mt-3 flex space-x-3">
        <div className="w-9 h-9 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm text-white font-bold">{video.channel[0]}</span>
        </div>
        <div className="flex-1">
          <h3 className={`font-medium line-clamp-2 ${isLarge ? 'text-lg' : 'text-sm'}`}>{video.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{video.channel}</p>
          <p className="text-gray-600 text-sm">{video.views} views • {video.time}</p>
        </div>
      </div>
    </div>
  );

  const VideoPlayer = () => (
    <div className="bg-black aspect-video rounded-lg overflow-hidden relative">
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </div>
          <p className="text-xl font-semibold mb-2">{selectedVideo?.title}</p>
          <p className="text-gray-300">Click to play video</p>
        </div>
      </div>
      
      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="w-16 bg-white bg-opacity-20 h-1 rounded">
              <div className="w-8 bg-white h-1 rounded"></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm">2:45 / {selectedVideo?.duration}</span>
            <button className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full">
              <Settings size={20} />
            </button>
            <button className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const VideoDetails = () => (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">{selectedVideo?.title}</h1>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">{selectedVideo?.channel[0]}</span>
          </div>
          <div>
            <h3 className="font-semibold">{selectedVideo?.channel}</h3>
            <p className="text-gray-600 text-sm">{selectedVideo?.subscribers} subscribers</p>
          </div>
          <button 
            onClick={() => setSubscriptions(prev => 
              prev.has(selectedVideo?.channel) 
                ? new Set([...prev].filter(c => c !== selectedVideo?.channel))
                : new Set([...prev, selectedVideo?.channel])
            )}
            className={`px-4 py-2 rounded-full font-medium ${
              subscriptions.has(selectedVideo?.channel) 
                ? 'bg-gray-200 text-gray-700' 
                : 'bg-black text-white'
            }`}
          >
            {subscriptions.has(selectedVideo?.channel) ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-gray-100 rounded-full">
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-l-full">
              <ThumbsUp size={16} />
              <span>{selectedVideo?.likes.toLocaleString()}</span>
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-r-full">
              <ThumbsDown size={16} />
              <span>{selectedVideo?.dislikes}</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Share size={16} />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
          <span>{selectedVideo?.views} views</span>
          <span>{selectedVideo?.time}</span>
        </div>
        <p className="text-sm">{selectedVideo?.description}</p>
      </div>
    </div>
  );

  const Comments = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <h3 className="text-lg font-semibold">{mockComments.length} Comments</h3>
        <button className="flex items-center space-x-2 text-sm">
          <Filter size={16} />
          <span>Sort by</span>
        </button>
      </div>
      
      <div className="flex space-x-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <User size={16} color="white" />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full border-b border-gray-300 pb-2 outline-none focus:border-gray-600"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {mockComments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{comment.user[0]}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm">{comment.user}</span>
                <span className="text-gray-500 text-xs">{comment.time}</span>
              </div>
              <p className="text-sm mt-1">{comment.text}</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-black">
                  <ThumbsUp size={14} />
                  <span className="text-xs">{comment.likes}</span>
                </button>
                <button className="text-gray-600 hover:text-black">
                  <ThumbsDown size={14} />
                </button>
                <button className="text-sm text-gray-600 hover:text-black">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const UploadModal = () => (
    showUploadModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Upload Video</h2>
            <button 
              onClick={() => setShowUploadModal(false)}
              className="text-gray-500 hover:text-black"
            >
              ×
            </button>
          </div>
          
          <div className="p-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <Upload size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium mb-2">Drag and drop video files to upload</p>
              <p className="text-gray-500 mb-4">Your videos will be private until you publish them.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                SELECT FILES
              </button>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Add a title that describes your video" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea className="w-full border rounded-lg px-3 py-2 h-24" placeholder="Tell viewers about your video"></textarea>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Upload</button>
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const HomePage = () => (
    <div className={`${sidebarOpen ? 'ml-64' : 'ml-16'} p-6 transition-all duration-300`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );

  const VideoPage = () => (
    <div className={`${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <VideoPlayer />
            <VideoDetails />
            <Comments />
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Up next</h3>
            {mockVideos.filter(v => v.id !== selectedVideo?.id).slice(0, 10).map((video) => (
              <div key={video.id} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="relative flex-shrink-0">
                  <img src={video.thumbnail} alt={video.title} className="w-40 aspect-video object-cover rounded" />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h4>
                  <p className="text-gray-600 text-xs">{video.channel}</p>
                  <p className="text-gray-600 text-xs">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />
      <main className="pt-16">
        {selectedVideo ? <VideoPage /> : <HomePage />}
      </main>
      <UploadModal />
    </div>
  );
};

export default YouTubeClone;