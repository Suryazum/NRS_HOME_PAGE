import React, { useState, useEffect } from 'react';

// Using placeholder images that should display correctly for a product page.
const heroImages = [
  // Using reliable placeholder images. Replace these with your own high-quality hero image URLs.
  "/images/front_carousel_img/front_img_1.jpg",
  "/images/front_carousel_img/front_img_2.jpg",
  "/images/front_carousel_img/front_img_3.jpg",
];

// Product data array with variations, now with more life jackets for demonstration
const allProducts = [
  {
    category: "Dry Bags",
    name: "110L Outfitter",
    description: `Durable 110L dry bag built for rafting—keeps your gear safe, dry, and secure on multi-day adventures.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/bag/110L Outfitter.jpg",
  },
  {
    category: "Dry Bags",
    name: "NRS Heavyduty Bills Bag black",
    description: `Tough and spacious dry bag designed for demanding river use—keeps your 
    essentials protected from water, sand, and rough handling.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/bag/NRS Heavyduty Bills Bag black.jpg"
  },
  {
    category: "Dry Bags",
    name: "NRS Heavyduty Bills Bag",
    description: `Rugged and reliable, the NRS Heavy-Duty Bills Bag protects your essentials from water and rough river conditions.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/bag/NRS Heavyduty Bills Bag.jpg"
  },
  {
    category: "Life Jackets",
    name: "Chinook OS Fishing PFD",
    description: `Comfortable and durable fishing PFD with multiple pockets, designed for safety and convenience on the water.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/lifeJacket/40016_03_Yellow_na_Front_062920_500x500.jpg"
  },
  {
    category: "Life Jackets",
    name: "Ninja Pro (Blue)",
    description: `High-performance PFD combining lightweight comfort with reliable buoyancy for all your water adventures.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/lifeJacket/Ninja Pro.jpg"
  },
  {
    category: "Life Jackets",
    name: "Ninja Pro (Black)",
    description: `Sleek and durable PFD offering lightweight comfort and dependable buoyancy for active water sports.`,
    image: "/images/lifeJacket/Ninja Pro1.jpg"
  },
  {
    category: "Life Jackets",
    name: "NRS Big Water V PFD",
    description: `Heavy-duty PFD designed for big water adventures, offering maximum buoyancy, durability, and comfort.`,
    image: "/images/lifeJacket/NRS Big Water V PFD.jpg"
  },
  {
    category: "Life Jackets",
    name: "Rapid Rescuer",
    description: `Durable rescue PFD built for swift water safety, providing secure buoyancy and quick-access features for emergencies.`,
    image: "/images/lifeJacket/Rapid Rescuer.jpg"
  },
  {
    category: "Helmets",
    name: "Current pro",
    description: `Durable and lightweight helmet designed for whitewater rafting and kayaking, providing maximum protection and comfort.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/Current pro.jpg"
  },
  {
    category: "Helmets",
    name: "Havoc Livery Helmets Black",
    description: `Sleek, durable helmet offering reliable protection and comfort for whitewater rafting and other water sports.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/Havoc Livery Helmets Black.jpg"
  },
  {
    category: "Helmets",
    name: "Havoc Livery Helmets Blue",
    description: "Durable and comfortable helmet designed for whitewater rafting, providing reliable protection in every adventure.",
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/Havoc Livery Helmets Blue.jpg"
  },
  {
    category: "Helmets",
    name: "Havoc Livery Helmets White",
    description: `Lightweight and durable helmet offering dependable protection and comfort for whitewater rafting and water sports.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/Havoc Livery Helmets White.jpg"
  },
  {
    category: "Helmets",
    name: "Havoc Livery Helmets Yellow",
    description: `Bright, durable helmet designed for whitewater rafting, combining reliable protection with all-day comfort.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/Havoc Livery Helmets Yellow.jpg"
  },
  {
    category: "Helmets",
    name: "NRS Havoc Livery Helmet",
    description: `Durable and lightweight helmet built for whitewater adventures, providing maximum protection and comfort.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/NRS Havoc Livery Helmet.jpg"
  },
  {
    category: "Helmets",
    name: "WRSI Current Pro Helmet",
    description: `High-performance helmet designed for whitewater rafting and kayaking, offering superior protection, comfort, and durability.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/WRSI Current Pro Helmet.jpg"
  },
  {
    category: "Helmets",
    name: "WRSI PRO B",
    description: `Professional-grade helmet designed for whitewater sports, combining maximum protection, durability, and comfort.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/WRSI PRO B.jpg"
  },
  {
    category: "Helmets",
    name: "WRSI PRO BL",
    description: `Durable and comfortable helmet built for whitewater adventures, providing reliable protection and a secure fit.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/WRSI PRO BL.jpg"
  },
  {
    category: "Helmets",
    name: "WRSI PRO WHITE",
    description: `Professional whitewater helmet offering maximum protection, durability, and comfort for all river conditions.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/helmets/WRSI PRO WHITE.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "10mm rope",
    description: `Strong and durable 10mm rope, ideal for rafting, rescue operations, and general river use.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/10mm rope.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "12mm rope",
    description: `Heavy-duty 12mm rope designed for rafting, rescue, and demanding river applications, offering strength and reliability.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/12mm rope.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "Carlisle Standard Paddle",
    description: `Durable and lightweight paddle designed for rafting and kayaking, offering excellent control and performance on the water.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/Carlisle Standard Paddle.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "Carlisle standard",
    description: `Reliable and lightweight paddle, ideal for rafting and kayaking, providing excellent control and efficiency on the water.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/Carlisle standerd.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "NRS PT Guide Paddle",
    description: `High-performance guide paddle designed for precision and durability, perfect for rafting and professional river navigation.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/NRS PT Guide Paddle.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "NRS PTE Economy Paddle",
    description: `Lightweight and durable paddle designed for recreational rafting, offering reliable performance at an economical price.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/NRS PTE Economy Paddle.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "PTE Paddle Client",
    description: `Durable and lightweight paddle designed for casual rafting and client use, providing ease of handling and reliable performance.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/PTE Paddle Client.jpg"
  },
  {
    category: "Paddles & Ropes",
    name: "Standard Paddle",
    description: `Reliable and lightweight paddle suitable for rafting and kayaking, offering consistent performance and control on the water.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/paddleAndRope/Standard Paddle.jpg"
  },
  {
    category: "Pumps",
    name: "Carlson 6 Hand Pump",
    description: `Heavy-duty hand pump designed for quickly inflating rafts and watercraft, built for efficiency and durability.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/pumps/Carlson 6 Hand Pump.jpg"
  },
  {
    category: "Pumps",
    name: "Carlson 4",
    description: `Compact and durable hand pump designed for inflating rafts and watercraft quickly and efficiently.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/pumps/Carlson 4.jpg"
  },
  {
    category: "Rafts",
    name: "NRS E142 Raft (Blue)",
    description: `Durable and versatile raft designed for whitewater adventures, offering stability, performance, and comfort for all river conditions.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/raft/E142.jpg"
  },
  {
    category: "Rafts",
    name: "NRS E161 Raft (Blue)",
    description: `Sturdy and spacious whitewater raft built for performance and safety, perfect for multi-person adventures on rivers.`,
    // Using a reliable placeholder image. Replace this with your own product image URL.
    image: "/images/raft/E161.jpg"
  },
];

// Header Component
interface HeaderProps {
  activeSection: string | null;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  // New prop to reset the view
  resetView: () => void;
}

const Header = ({ activeSection, isMenuOpen, toggleMenu, resetView }: HeaderProps) => {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-30 bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 text-white p-4 shadow-2xl border-b-4 border-yellow-400 transform transition-all duration-300 rounded-b-[3rem]"
      style={{
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(2px)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center font-inter cursor-pointer" onClick={resetView}>
          <img src="/images/logo/official_logo.jpg" alt="Logo" className="h-10 w-10 rounded-full mr-3 shadow-lg" />
        <div>
          <div className="text-3xl font-extrabold tracking-wide drop-shadow-lg">Rokka Brothers</div>
          <div className="text-xs font-medium text-yellow-200 mt-1 tracking-wider">An official NRS Distributor</div>
        </div>
      </div>
        <nav className="hidden md:flex space-x-6 text-lg font-inter">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-yellow-300 hover:underline transition-all duration-200 ${activeSection === item.id ? 'text-yellow-300 underline' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* SVG for a hamburger icon */}
            <svg 
              className="w-8 h-8 text-white transition-transform duration-300 transform"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // Close icon
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Container (for smaller screens) */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} bg-gradient-to-b from-purple-800 via-indigo-900 to-blue-900 shadow-lg`}>
        <nav className="flex flex-col items-center py-4 space-y-4 text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={toggleMenu} // Close the menu when a link is clicked
              className={`w-full text-center py-2 hover:bg-blue-700 transition-colors duration-200 ${activeSection === item.id ? 'bg-blue-700 font-bold' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  // Footer Component
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Rokka Brothers. All Rights Reserved.</p>
        <p>Proudly distributing NRS gear for your next adventure.</p>
        </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // selectedCategory now controls the view: null for all categories summary, a string for a single category view
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [inquiredProducts, setInquiredProducts] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [showProductError, setShowProductError] = useState(false); // State for the product validation pop-up
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  // Get unique categories for filtering
  const productCategories = [...new Set(allProducts.map(p => p.category))];
  
  // This is now used only for the single-category view
  const filteredProducts = selectedCategory
    ? allProducts.filter(p => p.category === selectedCategory)
    : allProducts;
  
  // Custom effect to handle the image transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, [heroImages.length]);

  // Effect to handle inquiry button click and pre-fill form
  useEffect(() => {
    if (inquiredProducts.length > 0) {
      const productList = inquiredProducts.map(p => `- ${p}`).join('\n');
      setFormData(prevData => ({
        ...prevData,
        message: `I am interested in the following products:\n\n${productList}\n\nPlease send me more information.`,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        message: "Ask us anything about our NRS products!",
      }));
    }
  }, [inquiredProducts]);

  // Effect to handle highlighting of the active section in the header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0% -50% 0%', // Highlights section when it's in the middle of the viewport
        threshold: 0,
      }
    );

    // Get all sections to observe
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

const handleInquireClick = (productName: string) => {
  setInquiredProducts(prevList => {
    // Check if the product is already in the list
    if (prevList.includes(productName)) {
      // If it is, remove it by filtering
      return prevList.filter(item => item !== productName);
    } else {
      // If it's not, add it to the list
      // Scroll to the contact form for better user experience
      // const contactForm = document.getElementById('contact');
      // if (contactForm) {
      //   contactForm.scrollIntoView({ behavior: 'smooth' });
      // }
      return [...prevList, productName];
    }
  });
};

  const handleClearInquiry = () => {
    setInquiredProducts([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error for the field being typed in
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errors: { name: string; email: string } = { name: '', email: '' };
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    }
    
    // Check for validation errors
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      setFormErrors(errors);
      setSubmissionMessage('');
      return;
    }
    
    // Show the product error pop-up if no products are selected
    if (inquiredProducts.length === 0) {
      setShowProductError(true);
      return; // Stop the submission
    }
    
    // If validation passes, proceed with the form submission
    const url = 'https://formspree.io/f/mgvzdbqj';
    
    // Create the subject for the email dynamically
    const dynamicSubject = `New Inquiry from ${formData.name}`;

    const submissionPayload = {
      ...formData,
      _subject: dynamicSubject, // Add the dynamic subject field
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionPayload),
      });

      if (response.ok) {
        setSubmissionMessage("Thank you for your inquiry! We'll get back to you shortly.");
        setFormData({ name: '', email: '', message: '' });
        setInquiredProducts([]);
        setFormErrors({ name: '', email: '' }); // Clear any remaining errors
      } else {
        const errorData = await response.json();
        setSubmissionMessage(errorData.errors ? errorData.errors.map((error: { message: string }) => error.message).join(", ") : "Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setSubmissionMessage("Oops! There was a problem submitting your form");
      console.error("Form submission failed:", error);
    }
  };

  const closeProductErrorPopup = () => {
    setShowProductError(false);
  };

  const resetView = () => {
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      {/* Render the Header component and pass the activeSection state */}
      <Header activeSection={activeSection} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} resetView={resetView} />

      {/* This empty div is a spacer to prevent content from being hidden by the fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section with Custom Image Slider */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden -mt-16 md:-mt-20">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt="NRS Bill's Bag Dry Bag"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">About Our Partnership with NRS</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                // Using a reliable placeholder image. Replace this with your own image URL.
                src="/images/logo/rokkaBrothers_Logo.jpg"
                alt="Rokka Brothers as an NRS distributor" 
                className="rounded-xl shadow-lg w-full"
                loading="lazy" // Added lazy loading
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                Rokka Brothers is proud to be an authorized distributor of NRS, the leading brand in watersports gear. Our partnership is built on a shared passion for the outdoors and a commitment to providing the highest quality, most reliable equipment on the market.
              </p>
              <p>
                We believe that every adventurer deserves gear they can trust. By distributing NRS products, we ensure you have access to the best in durability, safety, and performance for all your river and outdoor explorations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Our Full Line of NRS Gear</h2>
          
          {selectedCategory === null ? (
            // Display a summary of all categories
            productCategories.map((category, catIndex) => {
              const categoryProducts = allProducts.filter(p => p.category === category);
              return (
                <div key={category} className="mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-semibold text-gray-800">{category}</h3>
                    {categoryProducts.length > 3 && (
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="py-2 px-4 rounded-full text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-all duration-300"
                      >
                        View All {category} &rarr;
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts
                      .slice(0, 3) // Show only the first 3 products as a preview
                      .map((product, prodIndex) => {
                        const isInquired = inquiredProducts.includes(product.name);
                        return (
                          <div key={prodIndex} className="group bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col justify-between items-center text-center transform transition-transform duration-300 hover:scale-105">
                            <div className="w-full h-64 flex justify-center items-center mb-4">
                              <img 
                                src={product.image}
                                alt={product.name} 
                                className="max-h-full max-w-full object-contain rounded-lg"
                                loading="lazy" 
                              />
                            </div>
                            <div className="flex-grow flex flex-col justify-end">
                              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{product.name}</h3>
                              <p className="text-gray-600 mb-4">
                                {product.description}
                              </p>
                              <button
                                  onClick={() => handleInquireClick(product.name)}
                                  className={`font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300 ${
                                    isInquired ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
                                  }`}
                                >
                                  {isInquired ? "Remove from List" : "Add to Inquiry List"}
                                </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })
          ) : (
            // Display all products for the selected category
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-semibold text-gray-800">{selectedCategory}</h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="py-2 px-4 rounded-full text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-all duration-300"
                >
                  &larr; Back to All Categories
                </button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => {
                  const isInquired = inquiredProducts.includes(product.name);
                  return (
                    <div key={index} className="group bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col justify-between items-center text-center transform transition-transform duration-300 hover:scale-105">
                      <div className="w-full h-64 flex justify-center items-center mb-4">
                        <img 
                          src={product.image}
                          alt={product.name} 
                          className="max-h-full max-w-full object-contain rounded-lg"
                          loading="lazy" 
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-end">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                        <button
                          onClick={() => handleInquireClick(product.name)}
                          className={`font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300 ${
                            isInquired ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
                          }`}
                        >
                          {isInquired ? "Remove from List" : "Add to Inquiry List"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">NRS Gear in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-64 flex justify-center items-center mb-4">
                <img 
                  // Using a reliable placeholder image. Replace this with your own image URL.
                  src="/images/gallery_img/nrs_bag.jpg"
                  alt="NRS gear on a raft" 
                  className="max-h-full max-w-full object-contain rounded-lg"
                  loading="lazy" // Added lazy loading
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Built for Expeditions</h3>
                <p className="text-gray-700">A full kit of NRS gear ready for a multi-day trip.</p>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-64 flex justify-center items-center mb-4">
                <img 
                  // Using a reliable placeholder image. Replace this with your own image URL.
                  src="/images/gallery_img/bag.jpg"
                  alt="NRS gear while kayaking" 
                  className="max-h-full max-w-full object-contain rounded-lg"
                  loading="lazy" // Added lazy loading
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Safety and Comfort</h3>
                <p className="text-gray-700">Showcasing the comfort of NRS life jackets and helmets.</p>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-64 flex justify-center items-center mb-4">
                <img 
                  // Using a reliable placeholder image. Replace this with your own image URL.
                  src="/images/gallery_img/carlson_pump.jpg"
                  alt="NRS gear on a hike" 
                  className="max-h-full max-w-full object-contain rounded-lg"
                  loading="lazy" // Added lazy loading
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reliable Tools</h3>
                <p className="text-gray-700">The Carlson pump in action, ensuring a quick and easy setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Have a Question?</h2>
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submissionMessage && (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                  {submissionMessage}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border-2 ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border-2 ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {inquiredProducts.length > 0 && (
                <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg relative">
                  <strong className="font-bold">Products in your Inquiry:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {inquiredProducts.map((product, index) => (
                      <li key={index} className="text-sm">{product}</li>
                    ))}
                  </ul>
                  <button type="button" onClick={handleClearInquiry} className="absolute top-2 right-2 text-blue-700 hover:text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
              
              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Product Not Selected Pop-up */}
      {showProductError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm mx-4 text-center transform transition-transform duration-300 scale-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">No Products Selected</h3>
            <p className="text-gray-600 mb-6">Please add at least one product to your inquiry list before submitting the form.</p>
            <button 
              onClick={closeProductErrorPopup}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Render the Footer component */}
      <Footer />
    </>
  );
}

export default App;
