"use client";

import { useEffect, useState } from "react";
import { Clock, Users, ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

export default function Packages() {
  const { t } = useLanguage();
  const { navigateToTourDetail } = useNavigation();
  const [, forceUpdate] = useState({});
  
  // Read filter from URL and force re-render when URL changes
  useEffect(() => {
    const checkURL = () => {
      forceUpdate({});
    };
    
    // Check URL periodically to catch pushState changes (since pushState doesn't trigger events)
    const interval = setInterval(checkURL, 300);
    
    // Also listen for popstate (back/forward buttons)
    window.addEventListener("popstate", checkURL);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("popstate", checkURL);
    };
  }, []);
  
  // Read filter directly from URL
  const getFilterFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("filter");
  };

  // All tours from New folder
  const allTours = [
    {
      id: 16,
      name: "Kandy & Sigiriya Tour",
      image: "/packages/Kandy.jpg",
      duration: "02 Days",
      groupSize: "50 People",
      tourId: 16,
    },
    {
      id: 17,
      name: "Kandy & Ella Tour",
      image: "/packages/Kandy-Ella.jpg",
      duration: "02 Days",
      groupSize: "50 People",
      tourId: 17,
    },
    {
      id: 19,
      name: "Gem Sri Lanka",
      image: "/packages/7days.png",
      duration: "04 Days",
      groupSize: "50 People",
      tourId: 19,
    },
    {
      id: 20,
      name: "Golden Tour",
      image: "/packages/7days.png",
      duration: "07 Days",
      groupSize: "50 People",
      tourId: 20,
    },
    {
      id: 21,
      name: "Mount of Sri Lanka",
      image: "/packages/Ella.jpg",
      duration: "03 Days",
      groupSize: "50 People",
      tourId: 21,
    },
    {
      id: 22,
      name: "Nature Tour",
      image: "/packages/7days.png",
      duration: "06 Days",
      groupSize: "50 People",
      tourId: 22,
    },
    {
      id: 23,
      name: "Kandy Tour",
      image: "/packages/Kandy.jpg",
      duration: "01 Days",
      groupSize: "50 People",
      tourId: 23,
    },
    {
      id: 24,
      name: "Dutch Colina Fort Tour",
      image: "/packages/Galle.jpg",
      duration: "01 Days",
      groupSize: "50 People",
      tourId: 24,
    },
    {
      id: 25,
      name: "Mount Hill Ella",
      image: "/packages/Ella.jpg",
      duration: "01 Days",
      groupSize: "50 People",
      tourId: 25,
    },
    {
      id: 26,
      name: "Sigiriya & Cave Temple",
      image: "/packages/Sigiriya.jpg",
      duration: "01 Days",
      groupSize: "50 People",
      tourId: 26,
    },
    {
      id: 27,
      name: "Safari Tour",
      image: "/packages/Udawala-Yala.webp",
      duration: "01 Days",
      groupSize: "50 People",
      tourId: 27,
    },
  ];

  // Filter tours based on filter parameter from URL
  const filter = getFilterFromURL();
  const tours = filter === "oneDay" 
    ? allTours.filter(tour => tour.duration === "01 Days")
    : allTours;

  // Different hero images based on filter
  const heroImage = filter === "oneDay" 
    ? "/Hero/Destination.png" 
    : "/Hero/Package.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <MapPin className="w-4 h-4 mr-2" /> {t("packages.hero.badge")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t("packages.hero.title")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            {t("packages.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  {(tour as any).discount && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {(tour as any).discount}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tour.name}
                  </h3>

                  {/* Details */}
                  <div className="flex items-center justify-between mb-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                  </div>

                  {/* Explore Now Button */}
                  <button
                    onClick={() => navigateToTourDetail(tour.tourId.toString())}
                    className="w-full flex items-center justify-center space-x-2 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group/btn"
                  >
                    <span>Explore Now</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
