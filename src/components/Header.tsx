"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, languages } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toursDropdownRef = useRef<HTMLDivElement>(null);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const {
    navigateToHome,
    navigateToDestinations,
    navigateToContact,
    navigateToPackages,
    navigateToCustomTours,
    navigateToTourDetail,
  } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toursDropdownRef.current && !toursDropdownRef.current.contains(event.target as Node)) {
        setIsToursOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tours list for dropdown - All 11 tours from Packages with translations
  const tours = [
    { id: 16, nameKey: "packages.tours.kandySigiriya.name" },
    { id: 17, nameKey: "packages.tours.kandyElla.name" },
    { id: 19, nameKey: "packages.tours.gemSriLanka.name" },
    { id: 20, nameKey: "packages.tours.goldenTour.name" },
    { id: 21, nameKey: "packages.tours.mountSriLanka.name" },
    { id: 22, nameKey: "packages.tours.natureTour.name" },
    { id: 23, nameKey: "packages.tours.kandyDay.name" },
    { id: 24, nameKey: "packages.tours.dutchFort.name" },
    { id: 25, nameKey: "packages.tours.mountElla.name" },
    { id: 26, nameKey: "packages.tours.sigiriyaCave.name" },
    { id: 27, nameKey: "packages.tours.safariTour.name" },
  ];

  const navItems = [
    { key: "nav.tours", onClick: () => navigateToPackages() },
    { key: "nav.oneDayTour", onClick: () => navigateToPackages("oneDay") },
    { key: "nav.destinations", onClick: navigateToDestinations },
    { key: "nav.customTours", onClick: navigateToCustomTours },
    { key: "nav.contact", onClick: navigateToContact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={navigateToHome}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-[#faf9f9] rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
                <img src="/logo.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <span
                className={`text-2xl sm:text-3xl font-bold ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Ceylon Vacations
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Tours Dropdown */}
            <div 
              className="relative" 
              ref={toursDropdownRef}
              onMouseEnter={() => setIsToursOpen(true)}
              onMouseLeave={() => setIsToursOpen(false)}
            >
              <button
                onClick={() => navigateToPackages()}
                className={`text-lg font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-emerald-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {t("nav.tours")}
              </button>

              {/* Invisible bridge to prevent gap */}
              {isToursOpen && (
                <div className="absolute top-full left-0 w-full h-2" />
              )}

              {/* Dropdown Menu */}
              {isToursOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-white shadow-lg border border-gray-200 z-50"
                >
                  {tours.map((tour, index) => (
                    <button
                      key={tour.id}
                      onClick={() => {
                        navigateToTourDetail(tour.id.toString());
                        setIsToursOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs font-medium uppercase tracking-wide text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${
                        index !== tours.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                    >
                      {t(tour.nameKey)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems.filter(item => item.key !== "nav.tours").map((item) => (
              <button
                key={item.key}
                onClick={item.onClick}
                className={`text-lg font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-emerald-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Plan My Tour Button */}
            <button
              onClick={navigateToCustomTours}
              className={`hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                isScrolled
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow"
                  : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 hover:border-white/50"
              }`}
            >
              <span>{t("packages.planCustomTour")}</span>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <Globe className="w-4 h-4" />
                {/* Label - only visible on sm and up */}
                <span className="hidden sm:inline ml-1 text-xs">
                  Select the language
                </span>
                {/* Flag - only visible on mobile (below sm) */}
                <span className="inline sm:hidden ml-1">
                  {currentLanguage.flag}
                </span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLanguage(language);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                        currentLanguage.code === language.code
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    item.onClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-200 text-left"
                >
                  {t(item.key)}
                </button>
              ))}
              {/* Plan My Tour Button for Mobile */}
              <button
                onClick={() => {
                  navigateToCustomTours();
                  setIsMenuOpen(false);
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 flex items-center justify-center space-x-1.5 mt-2"
              >
                <span>{t("packages.planCustomTour")}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
