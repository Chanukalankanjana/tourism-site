"use client";

import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavigationProvider } from "./contexts/NavigationContext";

// Import all pages
import HomePage from "./app/page";
import Destinations from "./pages/Distinations";
import DestinationDetail from "./pages/DestinationDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";
import Adventure from "./pages/Adventure";
import CustomTours from "./pages/CustomTours";
import TourDetail from "./pages/TourDetail";

type Route =
  | "home"
  | "destinations"
  | "destination-detail"
  | "about"
  | "contact"
  | "gallery"
  | "packages"
  | "adventure"
  | "custom-tours"
  | "tour-detail";

function App() {
  const [currentPage, setCurrentPage] = useState<Route>("home");
  const [destinationId, setDestinationId] = useState<string | null>(null);
  const [tourId, setTourId] = useState<string | null>(null);

  useEffect(() => {
    // Handle URL changes
    const handleRouteChange = () => {
      const path = window.location.pathname;

      if (path.startsWith("/destination/")) {
        const slug = path.split("/destination/")[1];
        setDestinationId(slug);
        setCurrentPage("destination-detail");
        setTourId(null);
      } else if (path.startsWith("/tour/")) {
        const id = path.split("/tour/")[1];
        setTourId(id);
        setCurrentPage("tour-detail");
        setDestinationId(null);
      } else if (path.startsWith("/packages")) {
        // Handle /packages with or without query parameters
        setCurrentPage("packages");
        setDestinationId(null);
        setTourId(null);
      } else {
        // Reset IDs for all other routes
        setDestinationId(null);
        setTourId(null);

        // Set page based on path
        switch (path) {
          case "/":
          case "/home":
            setCurrentPage("home");
            break;
          case "/destinations":
            setCurrentPage("destinations");
            break;
          case "/about":
            setCurrentPage("about");
            break;
          case "/contact":
            setCurrentPage("contact");
            break;
          case "/gallery":
            setCurrentPage("gallery");
            break;
          case "/adventure":
            setCurrentPage("adventure");
            break;
          case "/custom-tours":
            setCurrentPage("custom-tours");
            break;
          default:
            setCurrentPage("home");
        }
      }
    };

    // Initial route check
    handleRouteChange();

    // Listen for browser back/forward
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Navigation functions
  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPage("home");
    setDestinationId(null);
  };

  const navigateToDestinations = () => {
    window.history.pushState({}, "", "/destinations");
    setCurrentPage("destinations");
    setDestinationId(null);
  };

  const navigateToDestination = (idOrSlug: string) => {
    // If it's already a slug (contains hyphens), use it directly
    // If it's an ID (numeric), we'll let the DestinationDetail component handle the conversion
    window.history.pushState({}, "", `/destination/${idOrSlug}`);
    setDestinationId(idOrSlug);
    setCurrentPage("destination-detail");
  };

  const navigateToAbout = () => {
    window.history.pushState({}, "", "/about");
    setCurrentPage("about");
    setDestinationId(null);
  };

  const navigateToContact = () => {
    window.history.pushState({}, "", "/contact");
    setCurrentPage("contact");
    setDestinationId(null);
  };

  const navigateToGallery = () => {
    window.history.pushState({}, "", "/gallery");
    setCurrentPage("gallery");
    setDestinationId(null);
  };

  const navigateToPackages = (filter?: string) => {
    const url = filter ? `/packages?filter=${filter}` : "/packages";
    window.history.pushState({}, "", url);
    setCurrentPage("packages");
    setDestinationId(null);
  };

  const navigateToAdventure = () => {
    window.history.pushState({}, "", "/adventure");
    setCurrentPage("adventure");
    setDestinationId(null);
  };

  const navigateToCustomTours = () => {
    window.history.pushState({}, "", "/custom-tours");
    setCurrentPage("custom-tours");
    setDestinationId(null);
    setTourId(null);
  };

  const navigateToTourDetail = (id: string) => {
    window.history.pushState({}, "", `/tour/${id}`);
    setTourId(id);
    setCurrentPage("tour-detail");
    setDestinationId(null);
  };

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "destinations":
        return <Destinations onNavigateToDestination={navigateToDestination} />;
      case "destination-detail":
        return destinationId ? (
          <DestinationDetail
            destinationId={destinationId}
            onNavigateBack={navigateToDestinations}
          />
        ) : null;
      case "about":
        return <AboutUs />;
      case "contact":
        return <ContactUs />;
      case "gallery":
        return <Gallery />;
      case "packages":
        return <Packages />;
      case "adventure":
        return <Adventure />;
      case "custom-tours":
        return <CustomTours />;
      case "tour-detail":
        return tourId ? (
          <TourDetail
            tourId={tourId}
            onNavigateBack={navigateToPackages}
          />
        ) : null;
      default:
        return <HomePage />;
    }
  };

  const navigationFunctions = {
    navigateToHome,
    navigateToDestinations,
    navigateToDestination,
    navigateToAbout,
    navigateToContact,
    navigateToGallery,
    navigateToPackages,
    navigateToAdventure,
    navigateToCustomTours,
    navigateToTourDetail,
  };

  return (
    <LanguageProvider>
      <NavigationProvider navigationFunctions={navigationFunctions}>
        <div className="min-h-screen bg-white">
          {/* Only show Header and Footer for pages that don't have them built-in */}
          {currentPage !== "home" && currentPage !== "destination-detail" && currentPage !== "tour-detail" && (
            <>
              <Header />
              <main>{renderCurrentPage()}</main>
              <Footer />
            </>
          )}

          {/* Pages with built-in Header/Footer */}
          {(currentPage === "home" || currentPage === "destination-detail" || currentPage === "tour-detail") &&
            <>
              <Header />
              {renderCurrentPage()}
              <Footer />
            </>}
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}

export default App;
