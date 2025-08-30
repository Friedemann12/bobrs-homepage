'use client';

import Link from "next/link";
import Image from "next/image";

// Component imports entfernt - verwenden eigenes Design für St. Pauli Bobrs

// Sanity imports entfernt - verwenden statischen Content für St. Pauli Bobrs

import { useState } from 'react';

// St. Pauli Bobrs Homepage Component
function StPauliBobrsHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="relative min-h-screen">
      {/* Header/Navigation - NO BACKGROUND */}
      <header className="header-rugged header-torn-bottom py-4 px-6 relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="logo-container">
            <Image src="/logo.png" alt="St. Pauli Bobrs Logo" width={50} height={50} />
            <div className="text-white text-xl md:text-2xl font-bold">ST. Pauli Bóbrs</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#home" className="text-white hover:text-red-500 transition-colors">HOME</a>
            <a href="#about" className="text-white hover:text-red-500 transition-colors">Über uns</a>
            <a href="#blog" className="text-white hover:text-red-500 transition-colors">News</a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors">Kontakt</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
        <a href="#blog" onClick={() => setMobileMenuOpen(false)}>News</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
      </div>

      {/* Fixed Background Image for entire page */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Fixed Overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-black bg-opacity-20" />

      {/* Main Content with Parallax Effect */}
      <main className="relative z-10">
        {/* Hero Section - Collage Style like the image */}
        <section id="home" className="py-16 px-6 relative">
          <div className="container mx-auto">
                        {/* Main ST. PAULI Title */}
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-red-600 mb-4 md:mb-8 strokeme glitch-hover" data-text="ST. PAULI">
                ST. PAULI BÓBRS
              </h1>
            </div>
            
            {/* Hero Description */}
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 px-4">
              <div className="rough-box p-6 md:p-8 text-black">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  <span className="text-red-600 font-bold">HERZ, BLUT UND LEIDENSCHAFT</span> - Das ist der Geist von St. Pauli! 
                  Wir sind mehr als nur ein Fußballverein, wir sind eine Bewegung für Solidarität, 
                  Antifaschismus und die Liebe zum schönsten Spiel der Welt.
                </p>
                <p className="text-sm md:text-base opacity-90">
                  Von den Straßen Hamburgs bis zu den Tribünen des Millerntors - 
                  unsere Geschichte ist geprägt von Widerstand, Gemeinschaft und der 
                  unerschütterlichen Überzeugung, dass Fußball für alle da ist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 px-4 md:px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4 md:mb-6 strokeme-medium scribble-underline" data-text="ABOUT US">
                WER WIR SIND
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Left Side - Description */}
              <div className="space-y-6">
                <div className="rough-box p-6 md:p-8 text-black">
                  <h3 className="text-2xl md:text-3xl text-red-600 mb-4 font-bold">ST. PAULI SPIRIT</h3>
                  <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-4">
                    Wir sind der leidenschaftlichste Fanclub Hamburgs, der den Geist von St. Pauli 
                    mit Herz, Blut und unendlicher Hingabe feiert. Von Spieltagen bis zu Community-Events 
                    halten wir die Tradition lebendig und unterstützen unseren geliebten Verein durch dick und dünn.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Unsere Community basiert auf den Werten der Solidarität, des Antifaschismus und der 
                    Liebe zum Fußball, die Menschen unabhängig von ihrem Hintergrund zusammenbringt.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Values */}
              <div className="rough-box p-6 md:p-8 text-black">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl mb-4 md:mb-6">⚽</div>
                  <h4 className="text-xl md:text-2xl mb-4 md:mb-6 font-bold">UNSERE WERTE</h4>
                  <ul className="text-left space-y-2 md:space-y-3 text-base md:text-lg">
                    <li className="flex items-center">
                      <span className="text-red-300 mr-3">•</span>
                      Solidarität & Gemeinschaft
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-300 mr-3">•</span>
                      Antifaschismus
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-300 mr-3">•</span>
                      Fußball-Leidenschaft
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-300 mr-3">•</span>
                      St. Pauli Identität
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-12 md:py-24 px-4 md:px-6 relative text-white">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-4 md:mb-6 strokeme-medium scribble-underline" data-text="LATEST NEWS">
                LATEST NEWS
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Blog Post 1 */}
              <div className="rough-box p-6 md:p-8 text-black hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">📰</div>
                  <h3 className="text-lg md:text-xl mb-3 font-bold">MATCH REPORT</h3>
                  <p className="text-xs md:text-sm mb-4">
                    Das letzte Heimspiel war ein echter Kracher! Die Atmosphäre auf dem Millerntor war 
                    wieder einmal legendär. Unsere Jungs haben alles gegeben und die Fans haben sie 
                    lautstark unterstützt.
                  </p>
                  <button className="btn-grunge text-xs md:text-sm px-3 md:px-4 py-2">MEHR LESEN</button>
                </div>
              </div>
              
              {/* Blog Post 2 */}
              <div className="rough-box p-6 md:p-8 text-black hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎉</div>
                  <h3 className="text-lg md:text-xl mb-3 font-bold">FAN EVENTS</h3>
                  <p className="text-xs md:text-sm mb-4">
                    Kommenden Samstag treffen wir uns wieder vor dem Stadion für unser traditionelles 
                    Pre-Game. Bratwurst, Bier und beste Stimmung sind garantiert! Alle Bóbrs sind 
                    herzlich willkommen.
                  </p>
                  <button className="btn-grunge text-xs md:text-sm px-3 md:px-4 py-2">DETAILS</button>
                </div>
              </div>
              
              {/* Blog Post 3 */}
              <div className="rough-box p-6 md:p-8 text-black hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🏆</div>
                  <h3 className="text-lg md:text-xl mb-3 font-bold">CLUB HISTORY</h3>
                  <p className="text-xs md:text-sm mb-4">
                    Wusstet ihr, dass St. Pauli schon in den 80ern für seine rebellische Art bekannt war? 
                    Unsere Vereinsgeschichte ist geprägt von Widerstand, Solidarität und der Liebe zum 
                    schönen Spiel.
                  </p>
                  <button className="btn-grunge text-xs md:text-sm px-3 md:px-4 py-2">GESCHICHTE</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 px-4 md:px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 strokeme-medium scribble-underline" data-text="GET IN TOUCH">
                Kontakt
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {/* Left Side - Contact Info */}
              <div className="space-y-6">
                <div className="rough-box p-6 md:p-8 text-black hover:transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl text-red-600 mb-4 font-bold">WERDE TEIL DER FAMILIE</h3>
                  <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                    Bereit, Teil der leidenschaftlichsten Fan-Community Hamburgs zu werden? 
                    Nimm Kontakt mit uns auf und werde Teil der St. Pauli Bobrs Familie!
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                    Egal ob du schon lange Fan bist oder gerade erst die Liebe zu St. Pauli entdeckt hast - 
                    bei uns ist jeder willkommen, der die Werte von Solidarität und Antifaschismus teilt.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm md:text-base">📧</span>
                      </div>
                      <div>
                        <p className="font-bold text-red-600 text-sm md:text-base">Email</p>
                        <p className="text-gray-800 text-sm md:text-base break-all">info@stpaulibobrs.de</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm md:text-base">📍</span>
                      </div>
                      <div>
                        <p className="font-bold text-red-600 text-sm md:text-base">Location</p>
                        <p className="text-gray-800 text-sm md:text-base">Hamburg, Germany</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Join CTA */}
              <div className="rough-box p-6 md:p-8 text-black hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl mb-4 md:mb-6">💀⚽</div>
                  <h4 className="text-xl md:text-2xl mb-4 font-bold">BEREIT BEIZUTRETEN?</h4>
                  <p className="mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    Werde Mitglied der St. Pauli Bobrs!
                    Gemeinsam stehen wir für die Werte unseres Vereins ein und feiern jeden Sieg 
                    und überstehen jede Niederlage.
                  </p>
                  <p className="mb-6 md:mb-8 text-xs md:text-sm opacity-90">
                    Von Auswärtsfahrten bis zu gesellschaftlichen Aktionen - als Bóbr bist du 
                    immer mittendrin statt nur dabei!
                  </p>
                  <button className="btn-grunge bg-white text-red-600 border-white px-6 md:px-8 text-base md:text-lg">
                    JETZT BEITRETEN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}



export default function Page() {
  // Für die St. Pauli Bobrs Homepage brauchen wir kein CMS-Content
  // Die Seite ist statisch und verwendet keine dynamischen Inhalte aus Sanity
  return <StPauliBobrsHomepage/>;
}
