import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Download,
  Crown,
  Heart,
  Eye,
  Sparkles,
  Shield,
  Zap,
  CheckCircle2,
  X,
  Plus,
  Trash2,
  Edit3,
  SlidersHorizontal,
  CreditCard,
  Layers,
  Image as ImageIcon,
  Check,
  TrendingUp,
  DollarSign,
  Users,
  Settings,
  ArrowRight,
  Filter,
  ExternalLink,
  Share2,
  AlertCircle,
  Lock,
  Compass,
  LayoutGrid
} from 'lucide-react';

const INITIAL_CATEGORIES = [
  { id: 'all', name: 'الكل', icon: 'Sparkles' },
  { id: 'wallpapers', name: 'خلفيات طبيعية', icon: 'Layers' },
  { id: 'png', name: 'صور مفرغة PNG', icon: 'ImageIcon' },
  { id: 'mockups', name: 'تصاميم وموك آب', icon: 'Layers' },
  { id: 'vectors', name: 'رمزيات وفيكتور', icon: 'Zap' },
  { id: '3d', name: 'أيقونات ثلاثية الأبعاد', icon: 'Compass' },
];

const INITIAL_ASSETS = [
  {
    id: 1,
    title: 'تدرجات لونية عصرية ثلاثية الأبعاد',
    category: '3d',
    author: 'أحمد فؤاد',
    views: 4520,
    downloads: 1240,
    isVip: true,
    resolution: '3840 x 2160',
    format: 'PNG',
    fileSize: '14.2 MB',
    tags: ['أيقونات 3D', 'تجريدي', 'ألوان', 'خلفيات'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-15',
    aspect: 'aspect-square'
  },
  {
    id: 2,
    title: 'طبيعة جبلية ساحرة مع ضباب الغروب',
    category: 'wallpapers',
    author: 'سارة المنصوري',
    views: 8940,
    downloads: 3120,
    isVip: false,
    resolution: '5120 x 2880',
    format: 'JPG',
    fileSize: '18.5 MB',
    tags: ['طبيعة', 'خلفيات طبيعية', 'جبال', 'غروب'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-20',
    aspect: 'aspect-video'
  },
  {
    id: 3,
    title: 'موك آب تغليف وهوية بصرية تجارية',
    category: 'mockups',
    author: 'ماجد العتيبي',
    views: 3200,
    downloads: 870,
    isVip: true,
    resolution: '4000 x 3000',
    format: 'PSD / JPG',
    fileSize: '34.0 MB',
    tags: ['تصاميم وموك آب', 'هوية بصرية', 'تغليف', 'براندنج'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-25',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 4,
    title: 'زخارف إسلامية هندسية ورمضانية',
    category: 'vectors',
    author: 'نور الدين علي',
    views: 12400,
    downloads: 4890,
    isVip: false,
    resolution: '3000 x 3000',
    format: 'PNG',
    fileSize: '8.4 MB',
    tags: ['تصاميم رمضانية', 'رمزيات وفيكتور', 'إسلامي', 'زخرفة'],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    date: '2026-03-28',
    aspect: 'aspect-square'
  },
  {
    id: 5,
    title: 'مكتب عمل إبداعي مع إضاءة دافئة',
    category: 'wallpapers',
    author: 'كريم يوسف',
    views: 6410,
    downloads: 1980,
    isVip: false,
    resolution: '4500 x 3000',
    format: 'JPG',
    fileSize: '11.2 MB',
    tags: ['أعمال', 'مكتب', 'خلفيات', 'إضاءة'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-01',
    aspect: 'aspect-video'
  },
  {
    id: 6,
    title: 'نباتات استوائية مفرغة بدقة متناهية',
    category: 'png',
    author: 'ريم السعيد',
    views: 5120,
    downloads: 1450,
    isVip: true,
    resolution: '3500 x 3500',
    format: 'PNG',
    fileSize: '9.8 MB',
    tags: ['صور مفرغة PNG', 'نباتات', 'تصميم دمج', 'أوراق شجر'],
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-03',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 7,
    title: 'شخصية افتراضية وميتافيرس 3D',
    category: '3d',
    author: 'طارق حمدان',
    views: 7800,
    downloads: 2310,
    isVip: true,
    resolution: '4000 x 4000',
    format: 'PNG / OBJ',
    fileSize: '22.0 MB',
    tags: ['أيقونات 3D', 'شخصيات', 'تكنولوجيا', 'فوتوريستيك'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-05',
    aspect: 'aspect-square'
  },
  {
    id: 8,
    title: 'موك آب هاتف ذكي في يد عصرية',
    category: 'mockups',
    author: 'ليلى خليل',
    views: 9400,
    downloads: 3600,
    isVip: false,
    resolution: '4200 x 2800',
    format: 'PSD',
    fileSize: '28.3 MB',
    tags: ['تصاميم وموك آب', 'هواتف', 'تقنية', 'تطبيقات'],
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=80',
    date: '2026-04-06',
    aspect: 'aspect-video'
  }
];

export default function App() {
  // Navigation & View Mode: 'explore' | 'pricing' | 'admin'
  const [currentView, setCurrentView] = useState('explore');

  // Search & Filtering States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterVip, setFilterVip] = useState('all'); // 'all', 'free', 'vip'

  // Assets Management State
  const [assets, setAssets] = useState(INITIAL_ASSETS);
  const [favorites, setFavorites] = useState([2, 4]);

  // Selected Asset for Detail Modal
  const [activeAsset, setActiveAsset] = useState(null);
  const [showWatermark, setShowWatermark] = useState(true);

  // Authentication & Membership State
  // userType: 'guest' | 'free' | 'vip'
  const [currentUser, setCurrentUser] = useState({
    name: 'عبدالله خالد',
    email: 'abdullah@example.com',
    role: 'free', // 'free' or 'vip'
    downloadsLeftToday: 4,
    maxDailyDownloads: 5
  });

  // Modals
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState('monthly');

  // Toast Notification System
  const [toast, setToast] = useState(null);

  const showToastNotification = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
      showToastNotification('تمت إزالة الصورة من المفضلة');
    } else {
      setFavorites([...favorites, id]);
      showToastNotification('تمت إضافة الصورة إلى قائمة المفضلة ❤️');
    }
  };

  const handleDownload = (asset, quality = 'HD') => {
    // Check permission for VIP assets or 4K quality
    if ((asset.isVip || quality === '4K') && currentUser.role !== 'vip') {
      showToastNotification('عفواً، هذه الميزة أو الصورة تتطلب باقة VIP النشطة!', 'error');
      setSelectedPlanForCheckout('monthly');
      setShowCheckoutModal(true);
      return;
    }

    // Check daily limits for free users
    if (currentUser.role === 'free') {
      if (currentUser.downloadsLeftToday <= 0) {
        showToastNotification('لقد استنفدت حد التنزيل اليومي المجاني (5 صور). قم بالترقية لـ VIP!', 'error');
        setShowCheckoutModal(true);
        return;
      }
      setCurrentUser(prev => ({
        ...prev,
        downloadsLeftToday: prev.downloadsLeftToday - 1
      }));
    }

    // Increment asset download count
    setAssets(prev =>
      prev.map(item =>
        item.id === asset.id ? { ...item, downloads: item.downloads + 1 } : item
      )
    );

    // Simulate genuine browser download
    const link = document.createElement('a');
    link.href = asset.image;
    link.download = `PixelDesign-${asset.title.replace(/\s+/g, '-')}-${quality}.${asset.format.toLowerCase().includes('png') ? 'png' : 'jpg'}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToastNotification(`جاري تحميل الصورة بجودة ${quality} بنجاح! 🎉`);
  };

  const filteredAssets = useMemo(() => {
    return assets.filter(item => {
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchVip =
        filterVip === 'all'
          ? true
          : filterVip === 'vip'
          ? item.isVip
          : !item.isVip;

      return matchSearch && matchCategory && matchVip;
    });
  }, [assets, searchQuery, selectedCategory, filterVip]);

  const handleAddNewAsset = (newAssetData) => {
    const newEntry = {
      id: Date.now(),
      views: 0,
      downloads: 0,
      date: new Date().toISOString().split('T')[0],
      aspect: 'aspect-[4/3]',
      ...newAssetData
    };
    setAssets([newEntry, ...assets]);
    showToastNotification('تم نشر الأصل البصري الجديد بنجاح في المنصة!');
  };

  const handleDeleteAsset = (id) => {
    setAssets(assets.filter(a => a.id !== id));
    showToastNotification('تم حذف الصورة من المنصة بنجاح!');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Toast Alert */}
      {toast && (
        <div className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md border text-sm font-medium transition-all duration-300 animate-bounce ${
          toast.type === 'error'
            ? 'bg-rose-950/90 border-rose-700/60 text-rose-200'
            : 'bg-emerald-950/90 border-emerald-600/60 text-emerald-200'
        }`}>
          {toast.type === 'error' ? <AlertCircle className="w-5 h-5 text-rose-400" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          <span>{toast.message}</span>
        </div>
      )}

      {}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <div 
              onClick={() => { setCurrentView('explore'); }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                  بيكسل <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">ديزاين</span>
                </span>
                <span className="text-[10px] block font-medium text-slate-400 -mt-1 tracking-wider">PIXEL DESIGN STOCK</span>
              </div>
            </div>

            {/* Nav Tabs */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => setCurrentView('explore')}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  currentView === 'explore'
                    ? 'text-amber-400 bg-amber-500/10 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                تصفح الأصول
              </button>
              <button
                onClick={() => setCurrentView('pricing')}
                className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors ${
                  currentView === 'pricing'
                    ? 'text-amber-400 bg-amber-500/10 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Crown className="w-4 h-4 text-amber-400" />
                الباقات و VIP
              </button>
              <button
                onClick={() => setCurrentView('admin')}
                className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors ${
                  currentView === 'admin'
                    ? 'text-amber-400 bg-amber-500/10 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                لوحة التحكم
              </button>
            </nav>
          </div>

          {/* User Status and Fast Actions */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl">
                <div className="hidden sm:block text-left px-2">
                  <div className="flex items-center gap-1.5 justify-end">
                    {currentUser.role === 'vip' ? (
                      <span className="px-2 py-0.5 text-[11px] font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 rounded-full flex items-center gap-1">
                        <Crown className="w-3 h-3 fill-slate-950" /> مشترك VIP
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-slate-800 text-slate-300 rounded-full">
                        مجاني ({currentUser.downloadsLeftToday} متبقية)
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-medium block truncate max-w-[120px]">{currentUser.name}</span>
                </div>

                {currentUser.role !== 'vip' && (
                  <button
                    onClick={() => {
                      setSelectedPlanForCheckout('monthly');
                      setShowCheckoutModal(true);
                    }}
                    className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center gap-1"
                  >
                    <Crown className="w-3.5 h-3.5" />
                    ترقية
                  </button>
                )}

                <button
                  onClick={() => setShowAuthModal(true)}
                  className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors text-xs font-bold"
                  title="تغيير الحساب"
                >
                  {currentUser.name.charAt(0)}
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
              >
                تسجيل الدخول
              </button>
            )}
          </div>
        </div>
      </header>

      {}
      <main>
        {currentView === 'explore' && (
          <>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-14 pb-16 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950 border-b border-slate-900">
              {/* Background Glows */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  أكثر من +50,000 أصل بصري بدقة 4K وصيغ جاهزة للتصميم
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
                  مكتبة الصور الاحترافية{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
                    للمصممين وصناع المحتوى
                  </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-9 font-normal">
                  حمل خلفيات فائقة الجودة، عناصر مفرغة PNG، تصاميم موك آب جاهزة وأيقونات ثلاثية الأبعاد مرخصة تجارياً لأعمالك الإبداعية.
                </p>

                {/* Big Search Bar */}
                <div className="max-w-3xl mx-auto relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative flex items-center bg-slate-900/95 border border-slate-700/80 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                    <Search className="w-6 h-6 text-slate-400 mr-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="ابحث عن: خلفيات طبيعية، تصاميم رمضانية، موك آب، صور مفرغة..."
                      className="w-full bg-transparent border-none text-white text-base px-3 focus:outline-none placeholder:text-slate-500 font-medium"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/20 whitespace-nowrap">
                      بحث سريع
                    </button>
                  </div>
                </div>

                {/* Popular Keywords suggestions */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-400">
                  <span className="text-slate-500">الأكثر بحثاً:</span>
                  {['خلفيات طبيعية', 'تصاميم رمضانية', 'أيقونات 3D', 'صور مفرغة PNG', 'موك آب هوية'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* 3 Step Quick Explainer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-4xl mx-auto pt-8 border-t border-slate-900/80">
                  <div className="flex items-center gap-3.5 bg-slate-900/40 border border-slate-800/60 p-3.5 rounded-2xl text-right">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">ابحث عن الفكرة</h4>
                      <p className="text-xs text-slate-400">تصفح آلاف الصور المنظمة بالتصنيفات</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-900/40 border border-slate-800/60 p-3.5 rounded-2xl text-right">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">اختر الدقة والصيغة</h4>
                      <p className="text-xs text-slate-400">خيارات HD أو 4K أصلية بدون ضغط</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-900/40 border border-slate-800/60 p-3.5 rounded-2xl text-right">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">حمّل واستخدم فوراً</h4>
                      <p className="text-xs text-slate-400">تنزيل مباشر مع تراخيص استخدام آمنة</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                
                {/* Categories Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                  {INITIAL_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* VIP / Free Filter toggles */}
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="text-xs text-slate-400 font-medium ml-1">نوع المحتوى:</span>
                  <button
                    onClick={() => setFilterVip('all')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      filterVip === 'all' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    الكل ({assets.length})
                  </button>
                  <button
                    onClick={() => setFilterVip('free')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      filterVip === 'free' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    مجاني
                  </button>
                  <button
                    onClick={() => setFilterVip('vip')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      filterVip === 'vip' ? 'bg-amber-950/80 text-amber-400 border border-amber-800/50 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    حصري VIP
                  </button>
                </div>
              </div>

              {}
              <div className="mt-8">
                {filteredAssets.length === 0 ? (
                  <div className="py-20 text-center bg-slate-900/30 rounded-3xl border border-slate-800/50">
                    <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-1">لم يتم العثور على أصول تطابق بحثك</h3>
                    <p className="text-sm text-slate-400">جرب كلمات مفتاحية أخرى أو قم بإلغاء الفلاتر.</p>
                    <button
                      onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setFilterVip('all'); }}
                      className="mt-4 px-4 py-2 bg-slate-800 text-sm font-semibold rounded-xl text-slate-200 hover:bg-slate-700"
                    >
                      إعادة تعيين الفلاتر
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredAssets.map(asset => (
                      <div
                        key={asset.id}
                        onClick={() => setActiveAsset(asset)}
                        className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between"
                      >
                        {/* Image Preview Box */}
                        <div className="relative overflow-hidden w-full h-64 bg-slate-950">
                          <img
                            src={asset.image}
                            alt={asset.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Top Badges */}
                          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                            {asset.isVip ? (
                              <span className="px-2.5 py-1 rounded-lg text-[11px] font-black bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 flex items-center gap-1 shadow-lg shadow-black/40">
                                <Crown className="w-3 h-3 fill-slate-950" />
                                VIP
                              </span>
                            ) : (
                              <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/90 backdrop-blur-md text-slate-950 shadow-lg">
                                مجاني
                              </span>
                            )}
                          </div>

                          {/* Format Tag */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur-md text-slate-300 border border-white/10 uppercase">
                              {asset.format}
                            </span>
                          </div>

                          {/* Hover Overlay with Action Buttons */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                            <div className="flex justify-end">
                              <button
                                onClick={(e) => toggleFavorite(asset.id, e)}
                                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                                  favorites.includes(asset.id)
                                    ? 'bg-rose-500 text-white'
                                    : 'bg-black/60 hover:bg-black text-white backdrop-blur-md'
                                }`}
                              >
                                <Heart className={`w-4 h-4 ${favorites.includes(asset.id) ? 'fill-white' : ''}`} />
                              </button>
                            </div>

                            <div>
                              <p className="text-xs text-amber-400 font-semibold mb-1">المصمم: {asset.author}</p>
                              <h4 className="text-sm font-bold text-white line-clamp-1">{asset.title}</h4>
                            </div>
                          </div>
                        </div>

                        {/* Card Info Footer */}
                        <div className="p-4 bg-slate-900 flex items-center justify-between border-t border-slate-800/60">
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Download className="w-3.5 h-3.5 text-slate-500" />
                              {asset.downloads}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5 text-slate-500" />
                              {asset.views}
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(asset, 'HD');
                            }}
                            className="p-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-colors"
                            title="تحميل مباشر سريع"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {}
        {currentView === 'pricing' && (
          <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4">
                <Crown className="w-4 h-4" />
                خطط اشتراك مرنة وعادلة
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                أطلق العنان لإبداعك بدون حدود
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                اختر الباقة المناسبة لاحتياجاتك واحصل على وصول فوري لأكثر من 50,000 أصل بصري وتصميم عالي الدقة بدون علامة مائية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Free Plan */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">الباقة المجانية</h3>
                    <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full font-medium">تجربة مجانية</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">0$</span>
                    <span className="text-slate-400 text-xs mr-2">/ مجاناً مدى الحياة</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 pb-6 border-b border-slate-800">
                    مثالية للمستخدمين الذين يحتاجون إلى أصول سريعة للتجارب الشخصية.
                  </p>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      5 تحميلات مجانية يومياً
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      جودة عادية (HD) فقط
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-500">
                      <X className="w-4 h-4 text-slate-600 shrink-0" />
                      غير شامل للأصول الحصرية VIP
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-500">
                      <X className="w-4 h-4 text-slate-600 shrink-0" />
                      يتضمن ظهور الإعلانات
                    </li>
                  </ul>
                </div>
                <button
                  disabled={currentUser.role === 'free'}
                  className="mt-8 w-full py-3 rounded-2xl bg-slate-800 text-slate-300 text-sm font-bold cursor-default opacity-80"
                >
                  {currentUser.role === 'free' ? 'باقتك الحالية' : 'مفعلة تلقائياً'}
                </button>
              </div>

              {/* Monthly VIP Plan */}
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/80 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-amber-500/10 scale-105 z-10">
                <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider">
                  الأكثر شعبية
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                      <Crown className="w-5 h-5 text-amber-400 fill-amber-400" />
                      باقة VIP الشهرية
                    </h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-amber-400">10$</span>
                    <span className="text-slate-400 text-xs mr-2">/ شهرياً (تدفع شهرياً)</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 pb-6 border-b border-slate-800">
                    الحل المثالي للمصممين المحترفين الذين يعملون على مشاريع تجارية متواصلة.
                  </p>
                  <ul className="space-y-3.5 text-xs text-slate-200">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      تحميل غير محدود لجميع الصور
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      دقة أصلية فائقة (4K & Ultra HD)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      تصفح خالٍ تماماً من الإعلانات
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      ترخيص استخدام تجاري كامل
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedPlanForCheckout('monthly');
                    setShowCheckoutModal(true);
                  }}
                  className="mt-8 w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-amber-500/25"
                >
                  {currentUser.role === 'vip' ? 'أنت مشترك بالفعل' : 'اشترك الآن بـ 10$'}
                </button>
              </div>

              {/* Annual PRO Plan */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">باقة PRO السنوية</h3>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                      وفر 25%
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">90$</span>
                    <span className="text-slate-400 text-xs mr-2">/ سنوياً (7.5$ شهرياً)</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 pb-6 border-b border-slate-800">
                    للوكالات والشركات والمصممين المستقلين الراغبين بأفضل قيمة سنوية.
                  </p>
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      جميع مزايا باقة VIP الشهرية
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      أولوية الوصول للأصول الحصرية الجديدة
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      دعم فني مباشر على مدار الساعة
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      حساب إضافي مجاني لأعضاء الفريق
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedPlanForCheckout('yearly');
                    setShowCheckoutModal(true);
                  }}
                  className="mt-8 w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors border border-slate-700"
                >
                  اشترك سنوياً بـ 90$
                </button>
              </div>
            </div>
          </section>
        )}

        {}
        {currentView === 'admin' && (
          <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-black text-white">لوحة تحكم منصة بيكسل ديزاين</h2>
                <p className="text-slate-400 text-xs sm:text-sm">إدارة الأصول البصرية، الإحصائيات، والباقات من مكان واحد.</p>
              </div>
              <button
                onClick={() => setCurrentView('explore')}
                className="self-start sm:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
              >
                العودة للمعرض العام <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">إجمالي التحميلات</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-2xl font-black text-white">
                  {assets.reduce((sum, item) => sum + item.downloads, 0).toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-400 block mt-1">+18% هذا الأسبوع</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">إجمالي الأصول</span>
                  <ImageIcon className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-2xl font-black text-white">{assets.length} صنف</span>
                <span className="text-[11px] text-slate-400 block mt-1">4 تصنيفات نشطة</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">مشتركي VIP النشطين</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-2xl font-black text-white">1,420</span>
                <span className="text-[11px] text-blue-400 block mt-1">معدل تحويل 8.4%</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">الإيرادات الشهرية</span>
                  <DollarSign className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-2xl font-black text-amber-400">$14,200</span>
                <span className="text-[11px] text-slate-400 block mt-1">بوابات الدفع نشطة</span>
              </div>
            </div>

            {/* Asset Creation Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-amber-400" />
                رفع وإضافة أصل بصري جديد
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const newAsset = {
                    title: formData.get('title'),
                    category: formData.get('category'),
                    author: formData.get('author') || 'بيكسل ديزاين',
                    format: formData.get('format'),
                    resolution: formData.get('resolution') || '4000 x 3000',
                    fileSize: '12.4 MB',
                    isVip: formData.get('isVip') === 'true',
                    image: formData.get('image') || 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
                    tags: formData.get('tags').split(',').map(t => t.trim())
                  };
                  handleAddNewAsset(newAsset);
                  e.target.reset();
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">عنوان العمل / الصورة</label>
                  <input
                    name="title"
                    required
                    placeholder="مثال: خلفية تجريدية ثلاثية الأبعاد"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">التصنيف</label>
                  <select
                    name="category"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="wallpapers">خلفيات طبيعية</option>
                    <option value="png">صور مفرغة PNG</option>
                    <option value="mockups">تصاميم وموك آب</option>
                    <option value="vectors">رمزيات وفيكتور</option>
                    <option value="3d">أيقونات 3D</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">نوع الوصول</label>
                  <select
                    name="isVip"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="false">مجاني للجميع (Free)</option>
                    <option value="true">حصري للمشتركين (VIP)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">رابط الصورة (URL)</label>
                  <input
                    name="image"
                    placeholder="https://images.unsplash.com/..."
                    defaultValue="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">صيغة الملف</label>
                  <input
                    name="format"
                    defaultValue="JPG"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">الكلمات الدلالية (مفصولة بفاصلة)</label>
                  <input
                    name="tags"
                    placeholder="خلفيات, تقنية, 4k"
                    defaultValue="تصميم, جودة عالية, خلفيات"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="md:col-span-2 lg:col-span-3 flex justify-end mt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs rounded-xl hover:opacity-90 transition-opacity"
                  >
                    نشر الصورة على المنصة
                  </button>
                </div>
              </form>
            </div>

            {/* Asset Table Management */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-white text-sm">قائمة الصور المنشورة</h3>
                <span className="text-xs text-slate-400">{assets.length} أصل متاح</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-950/60 text-slate-400">
                    <tr>
                      <th className="p-4">الصورة</th>
                      <th className="p-4">العنوان</th>
                      <th className="p-4">النوع</th>
                      <th className="p-4">الصيغة والأبعاد</th>
                      <th className="p-4">التحميلات</th>
                      <th className="p-4">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {assets.map(asset => (
                      <tr key={asset.id} className="hover:bg-slate-800/30">
                        <td className="p-4">
                          <img src={asset.image} alt="" className="w-12 h-12 object-cover rounded-lg border border-slate-700" />
                        </td>
                        <td className="p-4 font-bold text-white max-w-[200px] truncate">{asset.title}</td>
                        <td className="p-4">
                          {asset.isVip ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              VIP
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              مجاني
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-slate-400">{asset.format} • {asset.resolution}</td>
                        <td className="p-4 text-slate-300 font-semibold">{asset.downloads}</td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDeleteAsset(asset.id)}
                            className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                            title="حذف الصورة"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      {}
      {activeAsset && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveAsset(null)}
              className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-slate-300 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Preview & Watermark Canvas Area */}
              <div className="lg:col-span-7 bg-slate-950 p-6 flex flex-col justify-between relative select-none">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 group aspect-[4/3] flex items-center justify-center bg-black">
                  <img
                    src={activeAsset.image}
                    alt={activeAsset.title}
                    className="max-h-full max-w-full object-contain pointer-events-none"
                  />

                  {/* Dynamic Watermark Overlay */}
                  {showWatermark && (
                    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center gap-6 bg-black/10">
                      <div className="rotate-[-25deg] opacity-25 flex flex-col items-center select-none">
                        <Sparkles className="w-16 h-16 text-white mb-2" />
                        <span className="text-3xl font-black text-white tracking-widest">PIXEL DESIGN</span>
                        <span className="text-xs font-bold text-white tracking-widest">معاينة محمية - بيكسل ديزاين</span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-lg text-[10px] text-amber-400 font-mono tracking-wider">
                        علامة مائية للحماية
                      </div>
                    </div>
                  )}
                </div>

                {/* Watermark toggle control */}
                <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showWatermark}
                      onChange={(e) => setShowWatermark(e.target.checked)}
                      className="rounded accent-amber-500 w-4 h-4 cursor-pointer"
                    />
                    <span>إظهار العلامة المائية في المعاينة</span>
                  </label>
                  <span className="text-[11px] text-slate-500">تم التقاط العمل بواسطة: {activeAsset.author}</span>
                </div>
              </div>

              {/* Asset Details & Download Actions */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {activeAsset.isVip ? (
                      <span className="px-3 py-1 rounded-lg text-xs font-black bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 flex items-center gap-1">
                        <Crown className="w-3.5 h-3.5 fill-slate-950" />
                        محتوى حصري VIP
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        متاح مجاناً
                      </span>
                    )}
                    <span className="text-xs text-slate-400">تاريخ النشر: {activeAsset.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">{activeAsset.title}</h3>

                  {/* Metadata Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800/80 mb-6 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-0.5">الدقة والأبعاد</span>
                      <span className="font-semibold text-white">{activeAsset.resolution}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">صيغة الملف</span>
                      <span className="font-semibold text-amber-400 uppercase">{activeAsset.format}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">حجم الملف</span>
                      <span className="font-semibold text-white">{activeAsset.fileSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">التحميلات</span>
                      <span className="font-semibold text-emerald-400">{activeAsset.downloads} مرة</span>
                    </div>
                  </div>

                  {/* Interactive Tags */}
                  <div className="mb-6">
                    <span className="text-xs text-slate-400 block mb-2 font-medium">الكلمات الدلالية (انقر للبحث):</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeAsset.tags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSearchQuery(tag);
                            setActiveAsset(null);
                          }}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-800 text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Download Buttons Section */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  {/* Free HD Download */}
                  <button
                    onClick={() => handleDownload(activeAsset, 'HD')}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-400" />
                      تحميل بجودة عادية (HD 1080p)
                    </span>
                    <span className="text-[11px] text-slate-400">مجاناً</span>
                  </button>

                  {/* Ultra 4K VIP Download */}
                  <button
                    onClick={() => handleDownload(activeAsset, '4K')}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-between transition-all ${
                      currentUser.role === 'vip'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {currentUser.role === 'vip' ? (
                        <Download className="w-4 h-4 fill-slate-950 text-slate-950" />
                      ) : (
                        <Lock className="w-4 h-4 text-amber-400" />
                      )}
                      تحميل بالدقة الأصلية الفائقة (4K Ultra)
                    </span>
                    <span className="text-[11px] font-black uppercase">
                      {currentUser.role === 'vip' ? 'أصلي بدون ضغط' : 'حصري VIP'}
                    </span>
                  </button>

                  {/* Ad Banner - Hidden for VIP Users */}
                  {currentUser.role !== 'vip' && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-dashed border-slate-800 text-center relative overflow-hidden">
                      <span className="text-[9px] text-slate-600 block uppercase tracking-wider mb-1">مساحة إعلانية مخصصة</span>
                      <p className="text-xs font-semibold text-slate-300">
                        ترقية باقتك إلى VIP تزيل كافة الإعلانات وتمنحك تحميلاً فائق السرعة!
                      </p>
                      <button
                        onClick={() => {
                          setActiveAsset(null);
                          setSelectedPlanForCheckout('monthly');
                          setShowCheckoutModal(true);
                        }}
                        className="mt-1 text-[11px] text-amber-400 underline font-medium hover:text-amber-300"
                      >
                        الترقية بـ 10$ فقط الآن
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/20">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">ترقية الاشتراك إلى VIP</h3>
              <p className="text-xs text-slate-400 mt-1">
                بوابة دفع إلكترونية آمنة ومحمية بتشفير 256-bit
              </p>
            </div>

            {/* Plan selection within modal */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div
                onClick={() => setSelectedPlanForCheckout('monthly')}
                className={`p-3 rounded-2xl border cursor-pointer text-center transition-all ${
                  selectedPlanForCheckout === 'monthly'
                    ? 'border-amber-400 bg-amber-500/10 text-white'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <span className="text-xs block font-medium">شهري</span>
                <span className="text-base font-black text-amber-400">10$</span>
              </div>
              <div
                onClick={() => setSelectedPlanForCheckout('yearly')}
                className={`p-3 rounded-2xl border cursor-pointer text-center transition-all relative ${
                  selectedPlanForCheckout === 'yearly'
                    ? 'border-amber-400 bg-amber-500/10 text-white'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <span className="absolute -top-2 right-2 text-[9px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-black">خصم 25%</span>
                <span className="text-xs block font-medium">سنوي PRO</span>
                <span className="text-base font-black text-amber-400">90$</span>
              </div>
            </div>

            {/* Simulated Payment Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentUser(prev => ({ ...prev, role: 'vip' }));
                setShowCheckoutModal(false);
                showToastNotification('تم تفعيل اشتراك VIP بنجاح! استمتع بتحميل غير محدود بدقة 4K 🚀');
              }}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">اسم حامل البطاقة</label>
                <input
                  type="text"
                  required
                  defaultValue="عبدالله خالد"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">رقم بطاقة الدفع (مدى / فيزا / ماستركارد)</label>
                <input
                  type="text"
                  required
                  placeholder="4111 •••• •••• 1234"
                  defaultValue="4111 8890 2234 5678"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-amber-400 text-left"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">تاريخ الانتهاء</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    defaultValue="08/29"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white text-left font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">رمز الأمان CVC</label>
                  <input
                    type="password"
                    required
                    maxLength={3}
                    defaultValue="782"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white text-left font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                تأكيد الدفع وتفعيل الباقة فوراً
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-3xl p-6 relative shadow-2xl">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-2 text-center">
              {authMode === 'login' ? 'تسجيل الدخول إلى بيكسل ديزاين' : 'إنشاء حساب جديد'}
            </h3>
            <p className="text-xs text-slate-400 mb-6 text-center">
              تمكن من حفظ المفضلة ومتابعة تحميلاتك اليومية
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setCurrentUser({
                    name: 'عبدالله خالد (مشترك VIP)',
                    email: 'abdullah@pixel.design',
                    role: 'vip',
                    downloadsLeftToday: 9999,
                    maxDailyDownloads: 9999
                  });
                  setShowAuthModal(false);
                  showToastNotification('تم الدخول كـ مشترك VIP نشط!');
                }}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Crown className="w-4 h-4 fill-slate-950" />
                الدخول كـ مشترك VIP (للتجربة)
              </button>

              <button
                onClick={() => {
                  setCurrentUser({
                    name: 'مستخدم تجريبي مجاني',
                    email: 'free@pixel.design',
                    role: 'free',
                    downloadsLeftToday: 4,
                    maxDailyDownloads: 5
                  });
                  setShowAuthModal(false);
                  showToastNotification('تم الدخول كـ مستخدم مجاني!');
                }}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                الدخول كـ مستخدم مجاني عادي
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <footer className="mt-24 border-t border-slate-900 bg-slate-950/80 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              P
            </div>
            <div>
              <p className="text-slate-200 font-bold">منصة بيكسل ديزاين (Pixel Design)</p>
              <p className="text-[11px] text-slate-500">أكبر مكتبة أصول بصرية وصور حصرية عالية الدقة لصناع المحتوى العربي.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => setCurrentView('explore')} className="hover:text-amber-400">المعرض</button>
            <button onClick={() => setCurrentView('pricing')} className="hover:text-amber-400">الاشتراكات</button>
            <button onClick={() => setCurrentView('admin')} className="hover:text-amber-400">لوحة الإدارة</button>
            <span className="text-slate-600">|</span>
            <span>جميع الحقوق محفوظة © 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}