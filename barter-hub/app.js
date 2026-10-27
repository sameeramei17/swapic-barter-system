/**
 * SWAPIC — India's #1 Barter, Rent & Trade Network
 * Core Application Engine & State Management (Light Theme & English Interface)
 * Currency: Indian Rupee (₹ INR)
 */

// Initial Sample Listings tailored for Indian Users (English Only)
const DEFAULT_LISTINGS = [
  {
    id: "item-1",
    title: "Apple iPhone 15 (128GB, Blue) — Under AppleCare Warranty",
    category: "Mobiles & Tablets",
    condition: "Like New (10/10)",
    city: "Bengaluru",
    location: "Indiranagar (Metro Safe Zone Handshake or Dunzo)",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Rohan Sharma",
      handle: "@rohan_tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.95,
      tradesCount: 34,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell"],
    barterWishlist: "OnePlus 12 (512GB), MacBook Air M2, or iPad Air M2",
    estimatedValue: 56000,
    salePrice: 52000,
    rentPricePerDay: null,
    rentDeposit: null,
    description: "Battery health 98%, bill, box, and original braided cable available. Covered under AppleCare+ until Nov 2026. Looking for direct exchange with an Android flagship or M2 Mac. Meetup preferred at Swami Vivekananda Metro Station.",
    features: ["Dynamic Island", "48MP Main Camera", "A16 Bionic Chip", "98% Battery Health", "Bill & Box Included"],
    saved: false,
    createdAt: "2 hours ago"
  },
  {
    id: "item-2",
    title: "Sony Alpha A7 III Full-Frame Camera + 28-70mm Lens Rig",
    category: "Cameras & Creator Gear",
    condition: "Excellent",
    city: "Mumbai",
    location: "Bandra West / BKC Commercial Hub",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Ananya Deshmukh",
      handle: "@ananya_films",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 4.98,
      tradesCount: 62,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["rent", "barter"],
    barterWishlist: "DJI Air 3 / Mini 4 Pro Drone or Sony 70-200mm f/4 Lens",
    estimatedValue: 110000,
    salePrice: null,
    rentPricePerDay: 1200,
    rentDeposit: 6000,
    description: "Low shutter count (<12k). Includes 2 original Sony batteries, 64GB Extreme Pro SD card, dual charger, and camera cage. Ideal for wedding shoots, short films, and reel creation. Daily rental or swap with travel drone.",
    features: ["24.2MP Exmor R BSI CMOS", "4K HDR Video", "Dual SD Slots", "Includes 2 Batteries & Cage"],
    saved: true,
    createdAt: "Today"
  },
  {
    id: "item-3",
    title: "Royal Enfield Riding Jacket (CE Level 2) + MT Blade 2 Helmet",
    category: "Two-Wheelers & Auto",
    condition: "Like New",
    city: "Bengaluru",
    location: "Koramangala 5th Block",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Vikram Reddy",
      handle: "@biker_vikram",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4.89,
      tradesCount: 19,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["rent", "barter", "sell"],
    barterWishlist: "GoPro Hero 11/12 or Action Camera Setup",
    estimatedValue: 14500,
    salePrice: 11500,
    rentPricePerDay: 350,
    rentDeposit: 1500,
    description: "All-weather riding mesh jacket with CE Level 2 shoulder, elbow, and Knox back protector (Size L). Paired with MT Blade 2 SV DOT-certified helmet with Pinlock 30 visor. Great for weekend Leh or Coorg rides.",
    features: ["CE Level 2 Armor", "DOT/ECE 22.05 Certified Helmet", "Thermal & Rain Liner", "Includes Pinlock Visor"],
    saved: false,
    createdAt: "Yesterday"
  },
  {
    id: "item-4",
    title: "Designer Sabyasachi-Style Raw Silk Bridal Lehenga & Choli Set",
    category: "Fashion & Ethnic Wear",
    condition: "Worn Once (Mint Dry Cleaned)",
    city: "Delhi NCR",
    location: "South Extension / Lajpat Nagar, Delhi",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Pooja Malhotra",
      handle: "@pooja_delhi",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5.0,
      tradesCount: 41,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["rent", "sell", "barter"],
    barterWishlist: "Designer Sherwani (Size 40/42) or Gold Plated Kundan Jewelry Set",
    estimatedValue: 35000,
    salePrice: 18500,
    rentPricePerDay: 1800,
    rentDeposit: 4000,
    description: "Exquisite crimson raw silk with intricate zardozi, gota patti hand embroidery and double organza dupatta. Professionally dry cleaned and vacuum preserved. Available for wedding rental or permanent trade.",
    features: ["Intricate Zardozi Work", "Double Net & Organza Dupatta", "Adjustable Waist (28-36)", "Dry Cleaned Ready"],
    saved: false,
    createdAt: "3 days ago"
  },
  {
    id: "item-5",
    title: "Sony PlayStation 5 (Disc Edition) + 2 Controllers + 3 Games",
    category: "Gaming & Consoles",
    condition: "Like New",
    city: "Bengaluru",
    location: "HSR Layout / Kudlu Gate",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Arjun Nambiar",
      handle: "@arjun_gaming",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 4.93,
      tradesCount: 28,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["rent", "barter"],
    barterWishlist: "Nvidia RTX 4070 GPU or Quest 3 VR Headset (512GB)",
    estimatedValue: 48000,
    salePrice: null,
    rentPricePerDay: 499,
    rentDeposit: 3000,
    description: "PS5 Disc Edition with 2 DualSense wireless controllers. Comes pre-installed with Spider-Man 2, God of War Ragnarok, and EA FC 24 disc. Perfect for weekend gaming parties or holiday gaming.",
    features: ["Ultra-High Speed 825GB SSD", "Ray Tracing Support", "2 DualSense Haptic Controllers", "3 Blockbuster Games"],
    saved: true,
    createdAt: "Today"
  },
  {
    id: "item-6",
    title: "Apple MacBook Air M2 (13.6-inch, 16GB Unified RAM, 256GB)",
    category: "Laptops & Tech",
    condition: "Like New",
    city: "Hyderabad",
    location: "Hitec City / Gachibowli",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Sneha Rao",
      handle: "@sneha_tech",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 4.96,
      tradesCount: 47,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell"],
    barterWishlist: "Lenovo Legion Gaming Laptop or iPad Pro M2 (11-inch) + Pencil",
    estimatedValue: 79000,
    salePrice: 72000,
    rentPricePerDay: null,
    rentDeposit: null,
    description: "Space Grey M2 with upgraded 16GB RAM for smooth coding, Docker, and video editing. Battery health 97% with 62 charge cycles. Comes with original 35W Dual USB-C MagSafe charger and dbrand skin applied.",
    features: ["Upgraded 16GB Unified RAM", "Liquid Retina Display", "MagSafe 3 & Dual Thunderbolt", "97% Battery Health"],
    saved: false,
    createdAt: "5 hours ago"
  },
  {
    id: "item-7",
    title: "Yamaha F310 Acoustic Guitar + Padded Gig Bag & Capo",
    category: "Musical Instruments",
    condition: "Excellent",
    city: "Pune",
    location: "Kothrud / FC Road",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Tanmay Joshi",
      handle: "@tanmay_music",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      rating: 4.88,
      tradesCount: 16,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell", "rent"],
    barterWishlist: "Casio CTX-700 / CTX-870 Keyboard or Audio-Technica M50x",
    estimatedValue: 8500,
    salePrice: 6800,
    rentPricePerDay: 180,
    rentDeposit: 1200,
    description: "Solid spruce top with natural gloss finish. Action is professionally adjusted with new D'Addario phosphor bronze strings. Includes sturdy 12mm padded gig bag, tuner, and capo.",
    features: ["Solid Spruce Top", "Rosewood Fingerboard", "D'Addario 11-52 Strings", "Includes Tuner, Capo & Bag"],
    saved: false,
    createdAt: "1 day ago"
  },
  {
    id: "item-8",
    title: "UPSC CSE Complete IAS Preparation Library (Prelims + Mains 2026)",
    category: "Books & Exam Prep",
    condition: "Very Good (No marks)",
    city: "Delhi NCR",
    location: "Old Rajinder Nagar / Mukherjee Nagar, Delhi",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Deepak Choudhary",
      handle: "@deepak_ias",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      rating: 4.91,
      tradesCount: 22,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell"],
    barterWishlist: "CAT Exam Prep (Arun Sharma/TIME) or IIT-JEE Advanced Math modules",
    estimatedValue: 7500,
    salePrice: 4200,
    rentPricePerDay: null,
    rentDeposit: null,
    description: "Complete bundle: Laxmikanth Polity (7th Ed), Spectrum Modern History, Ramesh Singh Indian Economy, GC Leong Geography, Shankar IAS Environment + 15 sets solved mains answer copies. Pristine condition.",
    features: ["Latest 2025/2026 Editions", "Highlighter-free copies", "Includes Solved PYQ Compilation", "Complete 14-Book Set"],
    saved: false,
    createdAt: "4 days ago"
  },
  {
    id: "item-9",
    title: "Bosch GSB 500W Professional Impact Drill & 100-Piece DIY Kit",
    category: "Power Tools & DIY",
    condition: "Brand New (Sealed)",
    city: "Chennai",
    location: "Anna Nagar / OMR Tech Corridor",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Karthik Subramanian",
      handle: "@karthik_diy",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      rating: 4.94,
      tradesCount: 30,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["rent", "sell", "barter"],
    barterWishlist: "Car Pressure Washer (Bosch/Karcher) or Cordless Screwdriver",
    estimatedValue: 4500,
    salePrice: 3400,
    rentPricePerDay: 199,
    rentDeposit: 1000,
    description: "500-watt reversible hammer drill kit with auxiliary handle, depth gauge, masonry/wood drill bits, screwdriver bits, hammer, pliers, and wall plugs in a hard carry case. Rent for home setup or buy.",
    features: ["500W Motor with Hammer Action", "Forward/Reverse Mode", "100-Piece Accessory Kit", "Heavy-Duty Carry Case"],
    saved: false,
    createdAt: "3 days ago"
  },
  {
    id: "item-10",
    title: "Philips HD9252/90 Digital Air Fryer (4.1L, Rapid Air Tech)",
    category: "Home & Appliances",
    condition: "Like New",
    city: "Mumbai",
    location: "Powai (Near Hiranandani Complex)",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Meera Nair",
      handle: "@meera_powai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      tradesCount: 18,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell"],
    barterWishlist: "Espresso Coffee Machine (Morphy Richards/DeLonghi) or Nutri-Bullet",
    estimatedValue: 6999,
    salePrice: 4800,
    rentPricePerDay: null,
    rentDeposit: null,
    description: "Digital touchscreen with 7 preset cooking modes. Makes snacks, grilled items, and fries with 90% less oil. Used only 4-5 times, moving out of town so looking to exchange or sell quickly.",
    features: ["4.1L Capacity", "Rapid Air Technology", "7 Touchscreen Presets", "Keep Warm Function"],
    saved: false,
    createdAt: "2 days ago"
  },
  {
    id: "item-11",
    title: "Wakefit High-Back Ergonomic Study & Work-From-Home Chair",
    category: "Furniture & Hostel Living",
    condition: "Excellent",
    city: "Bengaluru",
    location: "Whitefield / ITPL Road",
    image: "https://images.unsplash.com/photo-1580481077195-c328a37db729?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580481077195-c328a37db729?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Naveen Sundaram",
      handle: "@naveen_blr",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      rating: 4.87,
      tradesCount: 15,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell"],
    barterWishlist: "Motorized Height Adjustable Table or 27-inch 4K Monitor",
    estimatedValue: 7200,
    salePrice: 4500,
    rentPricePerDay: null,
    rentDeposit: null,
    description: "Breathable Korean mesh back, 2D adjustable lumbar support, 3D padded armrests, heavy-duty BIFMA certified gas lift. Ideal for software engineers and PG/hostel living in Bengaluru.",
    features: ["Breathable Korean Mesh", "2D Lumbar Support", "BIFMA Class-4 Gas Lift", "Smooth PU Caster Wheels"],
    saved: false,
    createdAt: "6 days ago"
  },
  {
    id: "item-12",
    title: "SS Ton Reserve Edition English Willow Grade 1 Cricket Bat",
    category: "Sports & Fitness",
    condition: "Superb (Knocked in & Ready)",
    city: "Kolkata",
    location: "Salt Lake Sector V / Park Street",
    image: "https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80"
    ],
    owner: {
      name: "Sourav Banerjee",
      handle: "@sourav_cricket",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      rating: 4.97,
      tradesCount: 29,
      verified: true,
      aadhaarVerified: true
    },
    modes: ["barter", "sell", "rent"],
    barterWishlist: "Garmin Forerunner Running Watch or Decathlon Incline Bench + Weights",
    estimatedValue: 9500,
    salePrice: 6900,
    rentPricePerDay: 250,
    rentDeposit: 1500,
    description: "Handcrafted Grade 1 English Willow with 8 straight grains. Weight is 1,170g with light pickup and thick 39mm edges. Professionally machine knocked with anti-scuff sheet applied. Super punchy ping.",
    features: ["Handcrafted English Willow", "39mm Big Edges", "Pre-knocked with Oiled Sheet", "Short Handle 1,170g"],
    saved: false,
    createdAt: "5 days ago"
  }
];

// Current Indian User Profile (English)
const CURRENT_USER = {
  name: "Aditya Verma",
  handle: "@aditya_blr",
  city: "Bengaluru",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  tradesCompleted: 31,
  trustRating: 4.96,
  barterPoints: 2450,
  upiEscrowBalance: 4500.00,
  aadhaarVerified: true,
  inventory: [
    {
      id: "my-inv-1",
      title: "Apple iPad 9th Gen (64GB WiFi, Space Grey)",
      category: "Mobiles & Tablets",
      condition: "Like New",
      estimatedValue: 21000,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "my-inv-2",
      title: "DJI Osmo Mobile 6 Smartphone Gimbal",
      category: "Cameras & Creator Gear",
      condition: "Mint in Box",
      estimatedValue: 8500,
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "my-inv-3",
      title: "Sony WH-CH720N Wireless ANC Headphones",
      category: "Mobiles & Tablets",
      condition: "Excellent",
      estimatedValue: 6900,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "my-inv-4",
      title: "JBL Flip 6 Waterproof Bluetooth Speaker (Red)",
      category: "Mobiles & Tablets",
      condition: "Like New",
      estimatedValue: 7500,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

// Initial Trade Proposals (English)
const INITIAL_PROPOSALS = [
  {
    id: "prop-101",
    itemId: "my-inv-1",
    targetItemTitle: "Your Apple iPad 9th Gen",
    proposerName: "Gaurav Sen (@gaurav_delhi)",
    proposerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    offeringItem: "Fujifilm Instax Mini Evo Hybrid Camera (Est. ₹16,500)",
    offeringImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80",
    cashSweetener: 4500,
    message: "Hello Aditya! I have a mint condition Instax Mini Evo. Offering the camera plus ₹4,500 UPI transfer via SWAPIC Escrow to match your iPad value. Let's make a deal!",
    status: "pending",
    date: "1 hour ago"
  },
  {
    id: "prop-102",
    itemId: "my-inv-3",
    targetItemTitle: "Your Sony WH-CH720N Headphones",
    proposerName: "Priya Sundaram (@priya_chennai)",
    proposerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    offeringItem: "Amazon Kindle Paperwhite 10th Gen 8GB (Est. ₹7,200)",
    offeringImage: "https://images.unsplash.com/photo-1507842229451-79b1be886a25?auto=format&fit=crop&w=300&q=80",
    cashSweetener: 0,
    message: "Would love to swap my waterproof Kindle for your Sony headphones for office travel. Equal value exchange!",
    status: "pending",
    date: "4 hours ago"
  }
];

// Active Rentals Simulation in INR
const INITIAL_RENTALS = [
  {
    id: "rent-201",
    itemTitle: "Bosch GSB 500W Impact Drill & DIY Kit",
    owner: "Karthik Subramanian (Chennai)",
    dailyRate: 199,
    daysRented: 3,
    depositHeld: 1000,
    returnDate: "Tomorrow at 7:00 PM",
    status: "Active (In Possession)",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=300&q=80"
  }
];

// SWAPIC Application Engine — Light Mode & English Only
class SwapicApp {
  constructor() {
    this.listings = this.loadListings();
    this.user = CURRENT_USER;
    this.proposals = this.loadProposals();
    this.rentals = this.loadRentals();
    this.chatHistory = this.loadChat();
    
    this.activeFilter = "all"; // 'all', 'barter', 'rent', 'sell'
    this.activeCategory = "all";
    this.activeCity = "all";
    this.activeLanguage = localStorage.getItem("swapic_lang") || "en";
    this.searchQuery = "";
    this.sortBy = "recommended";
    
    this.selectedItem = null;

    this.init();
  }

  formatINR(amount) {
    if (amount === null || amount === undefined) return "₹0";
    return "₹" + Number(amount).toLocaleString('en-IN');
  }

  loadListings() {
    const saved = localStorage.getItem("swapic_listings_en");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_LISTINGS;
  }

  saveListings() {
    localStorage.setItem("swapic_listings_en", JSON.stringify(this.listings));
  }

  loadProposals() {
    const saved = localStorage.getItem("swapic_proposals_en");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_PROPOSALS;
  }

  saveProposals() {
    localStorage.setItem("swapic_proposals_en", JSON.stringify(this.proposals));
  }

  loadRentals() {
    const saved = localStorage.getItem("swapic_rentals_en");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_RENTALS;
  }

  saveRentals() {
    localStorage.setItem("swapic_rentals_en", JSON.stringify(this.rentals));
  }

  loadChat() {
    return {
      "item-1": [
        { sender: "Rohan Sharma", text: "Hello Aditya! The iPhone 15 is in pristine condition with bill & box. Are you interested in a barter exchange or direct buy?", time: "11:30 AM" },
        { sender: "You", text: "Hi Rohan! I have an iPad 9th Gen plus a DJI Osmo 6 gimbal. Would you consider trading if I add ₹25,000 via UPI sweetener?", time: "11:34 AM" },
        { sender: "Rohan Sharma", text: "That sounds like a fair match! Can we meet at Indiranagar Metro Station for a safe inspection and exchange?", time: "11:38 AM" }
      ]
    };
  }

  init() {
    this.bindEvents();
    this.renderMetrics();
    this.renderCategoryChips();
    this.renderListings();
    this.updateUserBadge();
    this.updateActivityCounters();
  }

  bindEvents() {
    // Mode Filter Pills (All, Barter, Rent, Sell)
    document.querySelectorAll(".mode-pill").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".mode-pill").forEach(b => {
          b.classList.remove("bg-emerald-600", "text-white", "shadow-md");
          b.classList.add("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
        });
        const target = e.currentTarget;
        target.classList.remove("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
        target.classList.add("bg-emerald-600", "text-white", "shadow-md");
        
        this.activeFilter = target.dataset.mode;
        this.renderListings();
      });
    });

    // City Selector Filter
    const citySelect = document.getElementById("cityFilterSelect");
    if (citySelect) {
      citySelect.addEventListener("change", (e) => {
        this.activeCity = e.target.value;
        this.renderListings();
      });
    }

    // Language Selector Option
    const langSelect = document.getElementById("languageSelect");
    if (langSelect) {
      langSelect.value = this.activeLanguage;
      langSelect.addEventListener("change", (e) => {
        this.handleLanguageChange(e.target.value);
      });
    }

    // Search Input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderListings();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.renderListings();
      });
    }

    // Global Modal Closes
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.closeAllModals();
      });
    });

    // Post Listing Buttons
    const openPostBtn = document.getElementById("openPostListingBtn");
    if (openPostBtn) {
      openPostBtn.addEventListener("click", () => this.openPostModal());
    }
    const mobilePostBtn = document.getElementById("mobilePostBtn");
    if (mobilePostBtn) {
      mobilePostBtn.addEventListener("click", () => this.openPostModal());
    }

    // Activity Drawer
    const activityBtn = document.getElementById("openActivityBtn");
    if (activityBtn) {
      activityBtn.addEventListener("click", () => this.openActivityModal());
    }
    const mobileActivityBtn = document.getElementById("mobileActivityBtn");
    if (mobileActivityBtn) {
      mobileActivityBtn.addEventListener("click", () => this.openActivityModal());
    }

    // Post Form Mode Toggles
    const chkBarter = document.getElementById("postModeBarter");
    const chkSell = document.getElementById("postModeSell");
    const chkRent = document.getElementById("postModeRent");
    
    if (chkBarter && chkSell && chkRent) {
      const toggleFields = () => {
        const barterGroup = document.getElementById("barterFieldsGroup");
        const sellGroup = document.getElementById("sellFieldsGroup");
        const rentGroup = document.getElementById("rentFieldsGroup");
        
        if (barterGroup) barterGroup.style.display = chkBarter.checked ? "block" : "none";
        if (sellGroup) sellGroup.style.display = chkSell.checked ? "block" : "none";
        if (rentGroup) rentGroup.style.display = chkRent.checked ? "block" : "none";
      };

      chkBarter.addEventListener("change", toggleFields);
      chkSell.addEventListener("change", toggleFields);
      chkRent.addEventListener("change", toggleFields);
      toggleFields();
    }

    // Post Form Submit
    const postForm = document.getElementById("postListingForm");
    if (postForm) {
      postForm.addEventListener("submit", (e) => this.handlePostSubmit(e));
    }
  }

  handleLanguageChange(newLang) {
    this.activeLanguage = newLang;
    localStorage.setItem("swapic_lang", newLang);
    
    const langNames = {
      en: "English (Default)",
      hi: "Hindi (हिन्दी)",
      ta: "Tamil (தமிழ்)",
      te: "Telugu (తెలుగు)",
      bn: "Bengali (বাংলা)",
      mr: "Marathi (मराठी)",
      gu: "Gujarati (ગુજરાતી)",
      kn: "Kannada (ಕನ್ನಡ)"
    };

    const chosen = langNames[newLang] || newLang;
    if (newLang === "en") {
      this.showToast(`Language set to ${chosen}.`, "success");
    } else {
      this.showToast(`Language preference saved: ${chosen}. SWAPIC content is maintained in English.`, "info");
    }
  }

  showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    const bgClass = type === "success" ? "bg-emerald-600 border-emerald-500 text-white" :
                    type === "info" ? "bg-slate-900 border-slate-700 text-white" : "bg-amber-600 border-amber-500 text-white";
    
    toast.className = `animate-toast flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-xl backdrop-blur-md pointer-events-auto ${bgClass}`;
    toast.innerHTML = `
      <div class="p-1 rounded-full bg-white/20">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span class="text-sm font-medium">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px) translateX(-50%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  renderMetrics() {
    const metricsEl = document.getElementById("heroMetrics");
    if (!metricsEl) return;
    metricsEl.innerHTML = `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-6 sm:mt-8">
        <div class="bg-white p-4 rounded-2xl text-center border border-slate-200/90 shadow-sm">
          <div class="text-xl sm:text-3xl font-extrabold text-emerald-600 font-display">42,500+</div>
          <div class="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Swaps Across India</div>
        </div>
        <div class="bg-white p-4 rounded-2xl text-center border border-slate-200/90 shadow-sm">
          <div class="text-xl sm:text-3xl font-extrabold text-indigo-600 font-display">100%</div>
          <div class="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">UPI Escrow Protected</div>
        </div>
        <div class="bg-white p-4 rounded-2xl text-center border border-slate-200/90 shadow-sm">
          <div class="text-xl sm:text-3xl font-extrabold text-amber-600 font-display">₹4.8 Cr+</div>
          <div class="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Indian User Savings</div>
        </div>
        <div class="bg-white p-4 rounded-2xl text-center border border-slate-200/90 shadow-sm">
          <div class="text-xl sm:text-3xl font-extrabold text-teal-600 font-display">18 Cities</div>
          <div class="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Metro Meetup Zones</div>
        </div>
      </div>
    `;
  }

  renderCategoryChips() {
    const categories = [
      { id: "all", label: "All Items", icon: "✨" },
      { id: "Mobiles & Tablets", label: "Mobiles & Tablets", icon: "📱" },
      { id: "Laptops & Tech", label: "Laptops & Computers", icon: "💻" },
      { id: "Cameras & Creator Gear", label: "Cameras & Creator Gear", icon: "📸" },
      { id: "Two-Wheelers & Auto", label: "Two-Wheelers & Auto", icon: "🛵" },
      { id: "Fashion & Ethnic Wear", label: "Fashion & Ethnic Wear", icon: "👗" },
      { id: "Books & Exam Prep", label: "Books & UPSC Prep", icon: "📚" },
      { id: "Gaming & Consoles", label: "Gaming & Consoles", icon: "🎮" },
      { id: "Musical Instruments", label: "Musical Instruments", icon: "🎸" },
      { id: "Home & Appliances", label: "Home & Kitchen Appliances", icon: "🏠" },
      { id: "Furniture & Hostel Living", label: "Furniture & Hostel Living", icon: "🛋️" },
      { id: "Power Tools & DIY", label: "Power Tools & Hardware", icon: "🛠️" },
      { id: "Sports & Fitness", label: "Sports & Cricket", icon: "🏏" }
    ];

    const container = document.getElementById("categoryChipsContainer");
    if (!container) return;

    container.innerHTML = categories.map(cat => `
      <button 
        data-cat="${cat.id}"
        class="category-chip whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
          this.activeCategory === cat.id 
          ? "bg-slate-900 text-white border-slate-900 shadow-sm font-bold" 
          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
        }">
        <span>${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `).join("");

    container.querySelectorAll(".category-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        this.activeCategory = chip.dataset.cat;
        this.renderCategoryChips();
        this.renderListings();
      });
    });
  }

  filterListings() {
    return this.listings.filter(item => {
      if (this.activeFilter !== "all" && !item.modes.includes(this.activeFilter)) {
        return false;
      }
      if (this.activeCategory !== "all" && item.category !== this.activeCategory) {
        return false;
      }
      if (this.activeCity !== "all" && item.city !== this.activeCity) {
        return false;
      }
      if (this.searchQuery) {
        const query = this.searchQuery;
        const inTitle = item.title.toLowerCase().includes(query);
        const inDesc = item.description.toLowerCase().includes(query);
        const inWishlist = item.barterWishlist && item.barterWishlist.toLowerCase().includes(query);
        const inCat = item.category.toLowerCase().includes(query);
        const inCity = item.city.toLowerCase().includes(query);
        const inLoc = item.location.toLowerCase().includes(query);
        if (!inTitle && !inDesc && !inWishlist && !inCat && !inCity && !inLoc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (this.sortBy === "price-low") {
        const valA = a.salePrice || a.estimatedValue || 0;
        const valB = b.salePrice || b.estimatedValue || 0;
        return valA - valB;
      }
      if (this.sortBy === "price-high") {
        const valA = a.salePrice || a.estimatedValue || 0;
        const valB = b.salePrice || b.estimatedValue || 0;
        return valB - valA;
      }
      return 0;
    });
  }

  renderListings() {
    const grid = document.getElementById("listingsGrid");
    const countEl = document.getElementById("listingsCount");
    if (!grid) return;

    const filtered = this.filterListings();
    if (countEl) countEl.textContent = `${filtered.length} products available`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center text-3xl mb-4">🔍</div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">No matching products found</h3>
          <p class="text-slate-500 text-sm max-w-md mx-auto mb-6">Try selecting 'All India' or clearing your category filters to discover more items!</p>
          <button onclick="window.swapicApp.resetFilters()" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => this.createCardHTML(item)).join("");

    // Bind card interaction buttons
    grid.querySelectorAll(".view-item-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        this.openItemModal(id);
      });
    });

    grid.querySelectorAll(".quick-swap-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        this.openSwapProposalModal(id);
      });
    });

    grid.querySelectorAll(".toggle-save-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        this.toggleSaveItem(id);
      });
    });
  }

  createCardHTML(item) {
    const modeBadges = item.modes.map(mode => {
      if (mode === "barter") {
        return `<span class="badge-barter px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">🔄 Barter</span>`;
      }
      if (mode === "rent") {
        return `<span class="badge-rent px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">⏱️ Rent</span>`;
      }
      if (mode === "sell") {
        return `<span class="badge-sell px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">🏷️ Buy</span>`;
      }
      return "";
    }).join("");

    let primaryDealLine = "";
    if (item.modes.includes("barter")) {
      primaryDealLine = `
        <div class="mt-2.5 text-xs bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 text-emerald-900 truncate">
          <span class="font-bold text-emerald-700">Seeking:</span> ${item.barterWishlist}
        </div>
      `;
    }

    let pricingDetails = [];
    if (item.modes.includes("sell") && item.salePrice) {
      pricingDetails.push(`<span class="text-amber-700 font-extrabold font-display text-lg">${this.formatINR(item.salePrice)}</span>`);
    }
    if (item.modes.includes("rent") && item.rentPricePerDay) {
      pricingDetails.push(`<span class="text-indigo-700 text-sm font-bold">${this.formatINR(item.rentPricePerDay)}<span class="text-xs text-slate-500 font-normal">/day</span></span>`);
    }
    if (item.modes.includes("barter") && !item.salePrice) {
      pricingDetails.push(`<span class="text-emerald-700 text-sm font-bold">Est. ${this.formatINR(item.estimatedValue)}</span>`);
    }

    return `
      <div class="product-card rounded-2xl overflow-hidden flex flex-col group border border-slate-200">
        <!-- Image & Badges -->
        <div class="relative h-52 overflow-hidden bg-slate-100 cursor-pointer view-item-btn" data-id="${item.id}">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20"></div>
          
          <!-- Mode Badges top left -->
          <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
            ${modeBadges}
          </div>

          <!-- Save Button top right -->
          <button 
            data-id="${item.id}"
            class="toggle-save-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-red-500 hover:scale-110 transition-all border border-slate-200 z-10 ${item.saved ? 'text-red-500 font-bold' : ''}"
            title="${item.saved ? 'Saved' : 'Save Item'}">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>

          <!-- City & Metro zone tag -->
          <div class="absolute bottom-2.5 left-3 text-[11px] text-white flex items-center gap-1 font-medium drop-shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span class="truncate max-w-[190px] font-semibold text-white">${item.city} • <span class="text-slate-200 font-normal">${item.location.split('(')[0].trim()}</span></span>
          </div>

          <!-- Condition tag -->
          <div class="absolute bottom-2.5 right-3 px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-slate-800 shadow-sm border border-slate-200">
            ${item.condition.split('(')[0].trim()}
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="font-medium text-emerald-700">${item.category}</span>
              <span>${item.createdAt}</span>
            </div>

            <h3 class="font-bold text-slate-900 text-base leading-snug line-clamp-2 cursor-pointer hover:text-emerald-700 transition-colors view-item-btn" data-id="${item.id}">
              ${item.title}
            </h3>

            ${primaryDealLine}
          </div>

          <!-- Bottom: Pricing & Actions -->
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div class="flex items-baseline gap-2">
              ${pricingDetails.join("<span class='text-slate-300'>|</span>")}
            </div>

            <div class="flex items-center gap-1.5">
              ${item.modes.includes("barter") ? `
                <button 
                  data-id="${item.id}"
                  class="quick-swap-btn px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1">
                  🔄 Swap
                </button>
              ` : `
                <button 
                  data-id="${item.id}"
                  class="view-item-btn px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1">
                  View
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  resetFilters() {
    this.activeFilter = "all";
    this.activeCategory = "all";
    this.activeCity = "all";
    this.searchQuery = "";
    this.sortBy = "recommended";
    
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    const citySelect = document.getElementById("cityFilterSelect");
    if (citySelect) citySelect.value = "all";
    
    document.querySelectorAll(".mode-pill").forEach(b => {
      b.classList.remove("bg-emerald-600", "text-white", "shadow-md");
      b.classList.add("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
      if (b.dataset.mode === "all") {
        b.classList.remove("bg-slate-100", "text-slate-700");
        b.classList.add("bg-emerald-600", "text-white", "shadow-md");
      }
    });

    this.renderCategoryChips();
    this.renderListings();
  }

  toggleSaveItem(id) {
    const item = this.listings.find(i => i.id === id);
    if (!item) return;
    item.saved = !item.saved;
    this.saveListings();
    this.renderListings();
    this.showToast(item.saved ? `Added "${item.title.substring(0, 24)}..." to Wishlist` : "Removed from Wishlist", "info");
  }

  openItemModal(id) {
    const item = this.listings.find(i => i.id === id);
    if (!item) return;
    this.selectedItem = item;

    const modal = document.getElementById("itemDetailModal");
    if (!modal) return;

    document.getElementById("modalItemTitle").textContent = item.title;
    document.getElementById("modalItemCategory").textContent = item.category;
    document.getElementById("modalItemLocation").textContent = `${item.city} — ${item.location}`;
    document.getElementById("modalItemCondition").textContent = item.condition;
    document.getElementById("modalItemDescription").textContent = item.description;

    const imgContainer = document.getElementById("modalImageGallery");
    if (imgContainer) {
      imgContainer.innerHTML = `
        <div class="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            ${item.modes.map(m => {
              if (m === "barter") return `<span class="badge-barter px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">🔄 Direct Barter Available</span>`;
              if (m === "rent") return `<span class="badge-rent px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">⏱️ Available on Rent</span>`;
              if (m === "sell") return `<span class="badge-sell px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">🏷️ Direct Buy Available</span>`;
              return "";
            }).join("")}
          </div>
        </div>
      `;
    }

    const ownerEl = document.getElementById("modalOwnerCard");
    if (ownerEl) {
      ownerEl.innerHTML = `
        <div class="flex items-center gap-3">
          <img src="${item.owner.avatar}" alt="${item.owner.name}" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500">
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-bold text-slate-900 text-sm sm:text-base">${item.owner.name}</span>
              ${item.owner.aadhaarVerified ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">✓ Aadhaar Verified</span>` : ""}
            </div>
            <div class="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
              <span class="text-amber-500 font-bold">★ ${item.owner.rating}</span>
              <span>•</span>
              <span>${item.owner.tradesCount} verified swaps in ${item.city}</span>
            </div>
          </div>
        </div>
        <button onclick="window.swapicApp.openChatWithItem('${item.id}')" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 whitespace-nowrap shadow-sm">
          💬 Chat & Negotiate
        </button>
      `;
    }

    const featEl = document.getElementById("modalFeaturesList");
    if (featEl) {
      featEl.innerHTML = (item.features || []).map(f => `
        <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>${f}</span>
        </li>
      `).join("");
    }

    this.renderModalActionPanels(item);

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  renderModalActionPanels(item) {
    const panelsContainer = document.getElementById("modalActionPanels");
    if (!panelsContainer) return;

    const hasBarter = item.modes.includes("barter");
    const hasRent = item.modes.includes("rent");
    const hasSell = item.modes.includes("sell");

    const tabsHTML = `
      <div class="flex border-b border-slate-200 mb-5">
        ${hasBarter ? `<button class="action-tab flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 text-emerald-700 border-emerald-600" data-target="tab-barter">🔄 Propose Barter</button>` : ""}
        ${hasRent ? `<button class="action-tab flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 ${!hasBarter ? 'text-indigo-700 border-indigo-600' : 'text-slate-500 border-transparent hover:text-slate-800'}" data-target="tab-rent">⏱️ Rent Item</button>` : ""}
        ${hasSell ? `<button class="action-tab flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 ${!hasBarter && !hasRent ? 'text-amber-700 border-amber-600' : 'text-slate-500 border-transparent hover:text-slate-800'}" data-target="tab-sell">🏷️ Buy with Escrow</button>` : ""}
      </div>
    `;

    // Barter Panel
    const barterContent = hasBarter ? `
      <div id="tab-barter" class="tab-panel space-y-4">
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <div class="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">Owner's Swap Wishlist</div>
          <p class="text-slate-900 font-semibold text-sm mt-1">${item.barterWishlist}</p>
          <div class="mt-2 text-xs text-slate-600 flex items-center justify-between">
            <span>Estimated Item Value:</span>
            <span class="font-bold text-slate-900 font-display text-sm">${this.formatINR(item.estimatedValue)}</span>
          </div>
        </div>

        <button 
          onclick="window.swapicApp.openSwapProposalModal('${item.id}')"
          class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <span>🔄 Propose Swap From Your Inventory</span>
        </button>
        <div class="text-[11px] text-center text-slate-500">Protected by SWAPIC Safe Handshake & Verification</div>
      </div>
    ` : "";

    // Rent Panel
    const rentContent = hasRent ? `
      <div id="tab-rent" class="tab-panel space-y-4 ${hasBarter ? 'hidden' : ''}">
        <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 space-y-3">
          <div class="flex justify-between items-baseline">
            <span class="text-xs uppercase font-extrabold text-indigo-800 tracking-wider">Daily Rental Rate</span>
            <span class="text-xl font-bold font-display text-slate-900">${this.formatINR(item.rentPricePerDay)}<span class="text-xs text-slate-500 font-normal"> / day</span></span>
          </div>
          
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1.5">Rental Duration (Days)</label>
            <div class="flex items-center gap-3">
              <input type="range" id="rentalDaysSlider" min="1" max="14" value="3" class="w-full accent-indigo-600 cursor-pointer">
              <span id="rentalDaysCount" class="font-bold font-display text-indigo-700 text-sm whitespace-nowrap">3 Days</span>
            </div>
          </div>

          <div class="pt-2 border-t border-indigo-100 space-y-1.5 text-xs">
            <div class="flex justify-between text-slate-600">
              <span>Rental Fee (<span id="calcDays">3</span> days × ${this.formatINR(item.rentPricePerDay)}):</span>
              <span id="calcSubtotal" class="font-semibold text-slate-900">${this.formatINR(item.rentPricePerDay * 3)}</span>
            </div>
            <div class="flex justify-between text-slate-600">
              <span>SWAPIC Damage Waiver & Protection:</span>
              <span class="font-semibold text-slate-900">₹99</span>
            </div>
            <div class="flex justify-between text-slate-600">
              <span>Refundable Security Deposit (Held in UPI Escrow):</span>
              <span class="font-semibold text-indigo-700">${this.formatINR(item.rentDeposit || 1000)}</span>
            </div>
            <div class="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-indigo-200">
              <span>Total Payable Now via UPI / Card:</span>
              <span id="calcTotal" class="text-indigo-700 font-display text-base">${this.formatINR((item.rentPricePerDay * 3) + 99 + (item.rentDeposit || 1000))}</span>
            </div>
          </div>
        </div>

        <button 
          onclick="window.swapicApp.bookRental('${item.id}')"
          class="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <span>⏱️ Lock Rental via UPI Escrow (GPay / PhonePe)</span>
        </button>
      </div>
    ` : "";

    // Sell Panel
    const sellContent = hasSell ? `
      <div id="tab-sell" class="tab-panel space-y-4 ${hasBarter || hasRent ? 'hidden' : ''}">
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
          <div class="flex justify-between items-baseline">
            <span class="text-xs uppercase font-extrabold text-amber-800 tracking-wider">Direct Purchase</span>
            <span class="text-2xl font-extrabold font-display text-amber-800">${this.formatINR(item.salePrice)}</span>
          </div>
          <p class="text-xs text-slate-600">Instant purchase protected by SWAPIC 100% Escrow Guarantee. Safe local handover or Dunzo / Porter delivery.</p>
          <div class="text-xs text-emerald-700 font-medium flex items-center gap-1">
            <span>🛡️ Funds held securely until you inspect the item</span>
          </div>
        </div>

        <button 
          onclick="window.swapicApp.checkoutBuyNow('${item.id}')"
          class="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <span>🏷️ Buy Now with UPI Escrow Protection</span>
        </button>
      </div>
    ` : "";

    panelsContainer.innerHTML = tabsHTML + barterContent + rentContent + sellContent;

    // Tab switching logic
    panelsContainer.querySelectorAll(".action-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        panelsContainer.querySelectorAll(".action-tab").forEach(t => {
          t.classList.remove("text-emerald-700", "border-emerald-600", "text-indigo-700", "border-indigo-600", "text-amber-700", "border-amber-600");
          t.classList.add("text-slate-500", "border-transparent");
        });
        panelsContainer.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));

        const targetId = tab.dataset.target;
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.remove("hidden");

        if (targetId === "tab-barter") {
          tab.classList.add("text-emerald-700", "border-emerald-600");
        } else if (targetId === "tab-rent") {
          tab.classList.add("text-indigo-700", "border-indigo-600");
        } else if (targetId === "tab-sell") {
          tab.classList.add("text-amber-700", "border-amber-600");
        }
        tab.classList.remove("text-slate-500", "border-transparent");
      });
    });

    const slider = document.getElementById("rentalDaysSlider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        const days = parseInt(e.target.value, 10);
        const dayCountEl = document.getElementById("rentalDaysCount");
        const calcDaysEl = document.getElementById("calcDays");
        const subtotalEl = document.getElementById("calcSubtotal");
        const totalEl = document.getElementById("calcTotal");

        if (dayCountEl) dayCountEl.textContent = `${days} ${days === 1 ? 'Day' : 'Days'}`;
        if (calcDaysEl) calcDaysEl.textContent = days;
        
        const rate = item.rentPricePerDay || 500;
        const deposit = item.rentDeposit || 1000;
        const sub = rate * days;
        const total = sub + 99 + deposit;

        if (subtotalEl) subtotalEl.textContent = this.formatINR(sub);
        if (totalEl) totalEl.textContent = this.formatINR(total);
      });
    }
  }

  openSwapProposalModal(targetItemId) {
    const targetItem = this.listings.find(i => i.id === targetItemId);
    if (!targetItem) return;

    this.selectedItem = targetItem;
    const modal = document.getElementById("swapProposalModal");
    if (!modal) return;

    document.getElementById("swapTargetTitle").textContent = targetItem.title;
    document.getElementById("swapTargetValue").textContent = `~${this.formatINR(targetItem.estimatedValue || targetItem.salePrice || 5000)}`;
    document.getElementById("swapTargetOwner").textContent = `${targetItem.owner.name} (${targetItem.city})`;

    const invContainer = document.getElementById("userInventoryPicker");
    if (invContainer) {
      invContainer.innerHTML = this.user.inventory.map((inv, idx) => `
        <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all">
          <input type="radio" name="selectedUserItem" value="${inv.id}" ${idx === 0 ? 'checked' : ''} class="accent-emerald-600 w-4 h-4">
          <img src="${inv.image}" class="w-12 h-12 rounded-lg object-cover border border-slate-200">
          <div class="flex-1 min-w-0">
            <div class="text-xs sm:text-sm font-semibold text-slate-900 truncate">${inv.title}</div>
            <div class="text-xs text-slate-500 flex items-center justify-between">
              <span>${inv.condition}</span>
              <span class="text-emerald-700 font-bold">Est. ${this.formatINR(inv.estimatedValue)}</span>
            </div>
          </div>
        </label>
      `).join("");
    }

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  submitSwapProposal() {
    const radio = document.querySelector("input[name='selectedUserItem']:checked");
    if (!radio) {
      alert("Please select an item from your inventory to offer in barter.");
      return;
    }

    const offeredInv = this.user.inventory.find(i => i.id === radio.value);
    const sweetenerInput = document.getElementById("cashSweetenerInput");
    const sweetenerVal = sweetenerInput ? parseInt(sweetenerInput.value || 0, 10) : 0;
    const noteInput = document.getElementById("swapProposalNote");
    const noteVal = noteInput ? noteInput.value.trim() : "";

    const newProposal = {
      id: "prop-" + Date.now(),
      itemId: this.selectedItem.id,
      targetItemTitle: this.selectedItem.title,
      proposerName: "You (@aditya_blr)",
      proposerAvatar: this.user.avatar,
      offeringItem: `${offeredInv.title} (Est. ${this.formatINR(offeredInv.estimatedValue)})`,
      offeringImage: offeredInv.image,
      cashSweetener: sweetenerVal,
      message: noteVal || `Hello! I am offering my ${offeredInv.title} for your ${this.selectedItem.title}. Open for Metro station meetup or Dunzo courier.`,
      status: "pending",
      date: "Just now"
    };

    this.proposals.unshift(newProposal);
    this.saveProposals();
    this.updateActivityCounters();
    this.closeAllModals();

    this.showToast(`Swap proposal sent to ${this.selectedItem.owner.name}! Track in My Trades.`, "success");
  }

  bookRental(itemId) {
    const item = this.listings.find(i => i.id === itemId);
    if (!item) return;

    const slider = document.getElementById("rentalDaysSlider");
    const days = slider ? parseInt(slider.value, 10) : 3;

    const newRental = {
      id: "rent-" + Date.now(),
      itemTitle: item.title,
      owner: `${item.owner.name} (${item.city})`,
      dailyRate: item.rentPricePerDay,
      daysRented: days,
      depositHeld: item.rentDeposit || 1000,
      returnDate: `In ${days} days`,
      status: "Active (UPI Escrow Locked)",
      image: item.image
    };

    this.rentals.unshift(newRental);
    this.saveRentals();
    this.updateActivityCounters();
    this.closeAllModals();

    this.showToast(`Rental locked for ${days} days! ${this.formatINR(item.rentDeposit || 1000)} deposit held in UPI Escrow.`, "success");
  }

  checkoutBuyNow(itemId) {
    const item = this.listings.find(i => i.id === itemId);
    if (!item) return;

    this.closeAllModals();
    this.showToast(`Order placed for ${this.formatINR(item.salePrice)} via UPI Escrow! Inspect on handover before release.`, "success");
  }

  openPostModal() {
    const modal = document.getElementById("postListingModal");
    if (!modal) return;
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  handlePostSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const category = document.getElementById("postCategory").value;
    const condition = document.getElementById("postCondition").value;
    const city = document.getElementById("postCity").value;
    const location = document.getElementById("postLocation").value.trim() || `${city} (Local Handshake & Dunzo/Porter)`;
    const description = document.getElementById("postDescription").value.trim();
    const imageInput = document.getElementById("postImageUrl").value.trim();

    const modes = [];
    if (document.getElementById("postModeBarter").checked) modes.push("barter");
    if (document.getElementById("postModeRent").checked) modes.push("rent");
    if (document.getElementById("postModeSell").checked) modes.push("sell");

    if (modes.length === 0) {
      alert("Please select at least one mode: Barter, Rent, or Sell.");
      return;
    }

    const barterWishlist = document.getElementById("postWishlist").value.trim();
    const estVal = parseInt(document.getElementById("postEstimatedValue").value || 0, 10);
    const salePrice = parseInt(document.getElementById("postSalePrice").value || 0, 10);
    const rentPerDay = parseInt(document.getElementById("postRentDaily").value || 0, 10);
    const rentDeposit = parseInt(document.getElementById("postRentDeposit").value || 0, 10);

    const fallbackImages = [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    ];

    const newItem = {
      id: "item-" + Date.now(),
      title,
      category,
      condition,
      city,
      location,
      description,
      image: imageInput || fallbackImages[Math.floor(Math.random() * fallbackImages.length)],
      owner: {
        name: this.user.name,
        handle: this.user.handle,
        avatar: this.user.avatar,
        rating: this.user.trustRating,
        tradesCount: this.user.tradesCompleted,
        verified: true,
        aadhaarVerified: true
      },
      modes,
      barterWishlist: barterWishlist || "Open to fair electronic or useful item trades",
      estimatedValue: estVal || 5000,
      salePrice: modes.includes("sell") ? (salePrice || 4500) : null,
      rentPricePerDay: modes.includes("rent") ? (rentPerDay || 300) : null,
      rentDeposit: modes.includes("rent") ? (rentDeposit || 1000) : null,
      features: ["Aadhaar Verified Seller", "SWAPIC Escrow Protected", "Metro Handshake Zone Ready"],
      saved: false,
      createdAt: "Just now"
    };

    this.listings.unshift(newItem);
    this.saveListings();
    this.renderListings();
    this.closeAllModals();
    e.target.reset();

    this.showToast(`Product "${newItem.title.substring(0, 26)}..." listed on SWAPIC!`, "success");
  }

  openActivityModal() {
    const modal = document.getElementById("activityModal");
    if (!modal) return;

    this.renderActivityTabs();
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  renderActivityTabs() {
    const container = document.getElementById("activityContentContainer");
    if (!container) return;

    const proposals = this.proposals;
    const rentals = this.rentals;

    container.innerHTML = `
      <div class="space-y-6">
        <div>
          <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-2">
            <span>🔄 Trade & Swap Proposals</span>
            <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">${proposals.length}</span>
          </h4>
          
          <div class="space-y-3">
            ${proposals.length === 0 ? `<div class="p-4 rounded-xl bg-slate-50 text-slate-500 text-sm text-center border border-slate-200">No active trade proposals right now</div>` : 
              proposals.map(p => `
                <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-2.5">
                      <img src="${p.proposerAvatar}" class="w-9 h-9 rounded-full object-cover border border-slate-200">
                      <div>
                        <div class="text-sm font-bold text-slate-900">${p.proposerName}</div>
                        <div class="text-xs text-slate-500">${p.date} • for <span class="text-slate-800 font-semibold">${p.targetItemTitle}</span></div>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${p.status === 'accepted' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                      ${p.status.toUpperCase()}
                    </span>
                  </div>

                  <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <img src="${p.offeringImage}" class="w-14 h-14 rounded-lg object-cover border border-slate-200">
                    <div class="flex-1 min-w-0">
                      <div class="text-xs text-slate-500">Offering in Barter:</div>
                      <div class="text-sm font-bold text-slate-900 truncate">${p.offeringItem}</div>
                      ${p.cashSweetener !== 0 ? `
                        <div class="text-xs font-semibold ${p.cashSweetener > 0 ? 'text-emerald-700' : 'text-amber-700'}">
                          ${p.cashSweetener > 0 ? `+ ${this.formatINR(p.cashSweetener)} UPI cash sweetener offered` : `Requests ${this.formatINR(Math.abs(p.cashSweetener))} cash top-up`}
                        </div>
                      ` : ''}
                    </div>
                  </div>

                  <p class="text-xs text-slate-600 italic">"${p.message}"</p>

                  ${p.status === 'pending' ? `
                    <div class="flex items-center gap-2 pt-1 flex-wrap sm:flex-nowrap">
                      <button onclick="window.swapicApp.acceptProposal('${p.id}')" class="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm">
                        ✓ Accept Barter Deal
                      </button>
                      <button onclick="window.swapicApp.openChatWithDeal('${p.id}')" class="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200">
                        💬 Counter & Chat
                      </button>
                      <button onclick="window.swapicApp.declineProposal('${p.id}')" class="px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 text-xs font-bold">
                        Decline
                      </button>
                    </div>
                  ` : ''}
                </div>
              `).join("")
            }
          </div>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 mb-3 flex items-center gap-2">
            <span>⏱️ Active Rented Gear</span>
            <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">${rentals.length}</span>
          </h4>

          <div class="space-y-3">
            ${rentals.length === 0 ? `<div class="p-4 rounded-xl bg-slate-50 text-slate-500 text-sm text-center border border-slate-200">No active rentals right now</div>` :
              rentals.map(r => `
                <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <img src="${r.image}" class="w-14 h-14 rounded-lg object-cover border border-slate-200">
                    <div>
                      <div class="text-sm font-bold text-slate-900">${r.itemTitle}</div>
                      <div class="text-xs text-slate-500">Owner: ${r.owner} • Rate: ${this.formatINR(r.dailyRate)}/day</div>
                      <div class="text-xs text-indigo-700 font-semibold mt-0.5">Due: ${r.returnDate} • Deposit: ${this.formatINR(r.depositHeld)}</div>
                    </div>
                  </div>
                  <button onclick="window.swapicApp.returnRental('${r.id}')" class="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold whitespace-nowrap shadow-sm">
                    Return Item
                  </button>
                </div>
              `).join("")
            }
          </div>
        </div>
      </div>
    `;
  }

  acceptProposal(proposalId) {
    const prop = this.proposals.find(p => p.id === proposalId);
    if (!prop) return;
    prop.status = "accepted";
    this.saveProposals();
    this.renderActivityTabs();
    this.updateActivityCounters();
    this.showToast(`Deal locked! Metro station meeting pass & Dunzo/Porter booking code generated.`, "success");
  }

  declineProposal(proposalId) {
    this.proposals = this.proposals.filter(p => p.id !== proposalId);
    this.saveProposals();
    this.renderActivityTabs();
    this.updateActivityCounters();
    this.showToast("Proposal declined and archived.", "info");
  }

  returnRental(rentalId) {
    this.rentals = this.rentals.filter(r => r.id !== rentalId);
    this.saveRentals();
    this.renderActivityTabs();
    this.updateActivityCounters();
    this.showToast("Item returned! Security deposit refunded instantly to your UPI account.", "success");
  }

  openChatWithItem(itemId) {
    const item = this.listings.find(i => i.id === itemId);
    if (!item) return;
    this.closeAllModals();

    const chatModal = document.getElementById("chatModal");
    if (!chatModal) return;

    document.getElementById("chatPartnerName").textContent = `${item.owner.name} (${item.city})`;
    document.getElementById("chatPartnerStatus").textContent = "Online • Aadhaar Verified (4.9 ★)";
    document.getElementById("chatItemThumb").src = item.image;
    document.getElementById("chatItemTitle").textContent = item.title;
    document.getElementById("chatItemModes").textContent = item.modes.map(m => m.toUpperCase()).join(" / ");

    this.renderChatMessages(itemId);
    chatModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  openChatWithDeal(proposalId) {
    const prop = this.proposals.find(p => p.id === proposalId);
    if (!prop) return;
    this.openChatWithItem(prop.itemId);
  }

  renderChatMessages(itemId) {
    const container = document.getElementById("chatMessagesContainer");
    if (!container) return;

    const messages = this.chatHistory[itemId] || [
      { sender: "System", text: "You initiated negotiation. All SWAPIC exchanges are protected by Aadhaar verification and UPI Escrow.", time: "Just now" }
    ];

    container.innerHTML = messages.map(m => {
      const isMe = m.sender === "You";
      const isSystem = m.sender === "System";

      if (isSystem) {
        return `
          <div class="text-center my-2">
            <span class="px-3 py-1 rounded-full bg-slate-100 text-[11px] text-slate-500 font-medium border border-slate-200">${m.text}</span>
          </div>
        `;
      }

      return `
        <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'} mb-3">
          <div class="max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm ${isMe ? 'bg-emerald-600 text-white rounded-br-none shadow-sm' : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'}">
            ${m.text}
          </div>
          <span class="text-[10px] text-slate-400 mt-1 px-1">${m.time}</span>
        </div>
      `;
    }).join("");

    container.scrollTop = container.scrollHeight;
  }

  sendChatMessage() {
    const input = document.getElementById("chatMessageInput");
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    const itemId = this.selectedItem ? this.selectedItem.id : "item-1";

    if (!this.chatHistory[itemId]) {
      this.chatHistory[itemId] = [];
    }

    this.chatHistory[itemId].push({
      sender: "You",
      text,
      time: "Just now"
    });

    input.value = "";
    this.renderChatMessages(itemId);

    setTimeout(() => {
      this.chatHistory[itemId].push({
        sender: this.selectedItem ? this.selectedItem.owner.name : "Trader",
        text: "That sounds good! We can do a direct handover at the Metro Station or arrange a Dunzo/Porter pickup with SWAPIC Escrow.",
        time: "Just now"
      });
      this.renderChatMessages(itemId);
    }, 1200);
  }

  updateUserBadge() {
    const walletEl = document.getElementById("headerWalletDisplay");
    if (walletEl) {
      walletEl.innerHTML = `
        <div class="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold">
          <span class="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-display shadow-sm">
            ✨ ${this.user.barterPoints} pts
          </span>
          <span class="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 hidden sm:inline-block font-display">
            ${this.formatINR(this.user.upiEscrowBalance)} UPI Escrow
          </span>
        </div>
      `;
    }
  }

  updateActivityCounters() {
    const pendingCount = this.proposals.filter(p => p.status === 'pending').length;
    const badge = document.getElementById("activityBadge");
    if (badge) {
      if (pendingCount > 0) {
        badge.textContent = pendingCount;
        badge.classList.remove("hidden");
      } else {
        badge.classList.add("hidden");
      }
    }
  }

  closeAllModals() {
    document.querySelectorAll(".app-modal").forEach(modal => {
      modal.classList.add("hidden");
    });
    document.body.classList.remove("overflow-hidden");
  }
}

// Global bootstrap
document.addEventListener("DOMContentLoaded", () => {
  window.swapicApp = new SwapicApp();
});
