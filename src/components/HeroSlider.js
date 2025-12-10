'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: "rs-1",
    title1: "BRILLION DIGITAL",
    title2: "",
    subtitle: "Technological backbone and innovation hub for the entire Brillion Group",
    description: "BRILLION Digital serves as the technological backbone and innovation hub for the entire Brillion Group, providing essential support and driving digital transformation across all its diverse entities.",
    services: [
      "Digital Solutions",
      "Cloud Services", 
      "Software Dev",
      "Cybersecurity",
      "Data Analytics",
      "IT Consulting"
    ],
    buttonText: "Explore IT Solutions",
    buttonLink: "/digital-services",
    backgroundImage: "/software-house-adalah.webp"
  },
  {
    id: "rs-2", 
    title1: "BRILLION INCORPORATION CENTERS",
    title2: "",
    subtitle: "Business Entity Establishment & Management Solutions",
    description: "BRILLION Digital facilitates the establishment and management of business entities through its incorporation centers, providing crucial support for legal and operational setup.",
    services: [
      "Company Registration",
      "Compliance Management", 
      "Virtual Office",
      "Legal Support",
      "Apostille Service",
      "International Business"
    ],
    buttonText: "Start Incorporation",
    buttonLink: "/incorporation-services",
    backgroundImage: "/why-incorporation.webp"
  },
  {
    id: "rs-3",
    title1: "BRILLION BUSINESS BROKERAGE",
    title2: "",
    subtitle: "Strategic Business Transactions & Advisory Services",
    description: "Facilitating strategic buying and selling of businesses, providing expert valuation, negotiation, and transaction support.",
    services: [
      "Valuation",
      "Transaction Support",
      "Negotiation",
      "Real Estate",
      "Construction",
      "Strategic Planning"
    ],
    buttonText: "Explore Services",
    buttonLink: "/business-brokerage",
    backgroundImage: "/business.webp"
  },
  {
    id: "rs-4",
    title1: "BRILLION TAX & ACCOUNTING",
    title2: "",
    subtitle: "Comprehensive Financial Management & Tax Solutions",
    description: "Comprehensive financial record-keeping, reporting, and analysis to maintain fiscal clarity and compliance.",
    services: [
      "Record-keeping",
      "Financial Reports",
      "Financial Analysis",
      "Tax Planning",
      "Tax Preparation",
      "Tax Advisory"
    ],
    buttonText: "Get Started", 
    buttonLink: "/tax-services",
    backgroundImage: "/Tax%20and%20accounting%20.jpg"
  },
  {
    id: "rs-5",
    title1: "HAPPY GOAT COFFEE",
    title2: "",
    subtitle: "Premium Artisanal Coffee Experience",
    description: "Experience the finest coffee crafted with passion and precision. Our premium coffee beans are sourced from the world's best coffee regions, roasted to perfection to deliver an exceptional taste experience.",
    services: [
      "Artisanal Coffee",
      "Premium Beans",
      "Expert Roasting",
      "Rich Flavors",
      "Coffee Culture",
      "Quality Sourced"
    ],
    buttonText: "Explore Coffee",
    buttonLink: "https://www.happygoatcoffee.com/",
    backgroundImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rs-6",
    title1: "HONEYLAND ORGANICS",
    title2: "",
    subtitle: "Natural Organic Wellness Products",
    description: "Discover pure, natural wellness products that nurture your health and well-being. Our organic collection features carefully selected ingredients that bring authentic quality and natural goodness to your lifestyle.",
    services: [
      "Organic Products",
      "Natural Wellness",
      "Pure Ingredients",
      "Health Focused",
      "Sustainable",
      "Premium Quality"
    ],
    buttonText: "Explore Wellness",
    buttonLink: "/consumer-brands",
    backgroundImage: "/benefits-raw-white-honey.jpg"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home_banner">
      <div id="rev_slider_1_1_wrapper">
        <div id="rev_slider_1_1">
          
          {/* Navigation Bullets */}
          <div className="tp-bullets">
            {slides.map((_, index) => (
              <div 
                key={index}
                className={`tp-bullet ${currentSlide === index ? 'selected' : ''}`} 
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="rs-progress">
            <div className="rs-progress-bar"></div>
          </div>
          
          <div className="rs-slides">
            {slides.map((slide, index) => (
              <div key={slide.id} className={`slide-container ${currentSlide === index ? 'active' : ''}`}>
                <div 
                  className="slide-background" 
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Background Overlay */}
                <div className="slide-overlay"></div>
                
                {/* Slide Content */}
                <div className="slide-content">
                  <div className="w-full">
                    <div className="hero-content-wrapper">
                      <div className="hero-text-content">
                        <h1 className="hero-title">
                          {slide.title1}
                          {slide.title2 && <br />}
                          {slide.title2}
                        </h1>
                        <p className="hero-subtitle">{slide.subtitle}</p>
                        
                        <div className="hero-services-grid">
                          {slide.services?.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="hero-service-tag">
                              {service}
                            </div>
                          ))}
                        </div>
                        
                        <div className="hero-cta">
                          <a href={slide.buttonLink} className="hero-button">
                            {slide.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
