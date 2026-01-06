"use client";

import { ArrowLeft, Clock, Users, Star, Check, CheckCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

interface TourDetailProps {
  readonly tourId: string;
  readonly onNavigateBack: () => void;
}

export default function TourDetail({ tourId, onNavigateBack }: TourDetailProps) {
  const { t, currentLanguage } = useLanguage();
  const { navigateToPackages } = useNavigation();

  // Get 4 images for current tour
  const getTourImages = (id: string) => {
    const tourIdNum = Number.parseInt(id, 10);
    const tourImages: { [key: number]: string[] } = {
      16: ["/packages/Kandy.jpg", "/packages/Sigiriya.jpg", "/Distination/Kandy/Kandy1.jpg", "/Distination/Sigiriya/Sigiriya 2.jpg"],
      17: ["/packages/Kandy-Ella.jpg", "/packages/Kandy.jpg", "/packages/Ella.jpg", "/Distination/Ella/Ella-country.jpg"],
      19: ["/packages/7days.png", "/packages/Colombo.png", "/packages/Sigiriya.jpg", "/packages/Kandy.jpg"],
      20: ["/packages/7days.png", "/packages/Ella-Sigiriya.jpg", "/packages/Udawala-Yala.webp", "/packages/Galle.jpg"],
      21: ["/packages/Ella.jpg", "/packages/Kandy-Ella.jpg", "/Distination/Ella/Ella-country.jpg", "/packages/Kandy.jpg"],
      22: ["/packages/7days.png", "/packages/Ella.jpg", "/packages/Udawala-Yala.webp", "/packages/Galle.jpg"],
      23: ["/packages/Kandy.jpg", "/Distination/Kandy/Kandy1.jpg", "/Distination/Kandy/Kandy2.jpg", "/Distination/Kandy/Kandy3.jpg"],
      24: ["/packages/Galle.jpg", "/Distination/Galle/Galle1.jpg", "/Distination/Galle/Galle2.jpg", "/Distination/Galle/Galle3.jpg"],
      25: ["/packages/Ella.jpg", "/Distination/Ella/Ella-country.jpg", "/packages/Kandy-Ella.jpg", "/packages/Ella-Sigiriya.jpg"],
      26: ["/packages/Sigiriya.jpg", "/Distination/Sigiriya/sigiria-sri-lanka-945x630.jpg", "/Distination/Sigiriya/Sigiriya 2.jpg", "/Distination/Sigiriya/Sigiriya 3.jpg"],
      27: ["/packages/Udawala-Yala.webp", "/Distination/Yala/yala-national.jpg", "/packages/Ella-Yala-Colo.jpg", "/packages/7days.png"],
    };
    return tourImages[tourIdNum] || [
      "/packages/Sigiriya.jpg",
      "/packages/Kandy.jpg",
      "/packages/Ella.jpg",
      "/packages/Galle.jpg",
    ];
  };

  const currentTourImages = getTourImages(tourId);

  // Get tour data from Packages.tsx structure
  const getTourData = (id: string) => {
    const tourIdNum = Number.parseInt(id, 10);
    const tourKeys: { [key: number]: any } = {
      1: {
        nameKey: "packages.tours.ella.name",
        subtitleKey: "packages.tours.ella.subtitle",
        duration: "1day",
        category: "adventure",
        price: "$85",
        originalPrice: "$110",
        rating: 4.9,
        reviews: 234,
        groupSize: "2-15",
        badge: "popular",
        highlights: [
          "packages.tours.ella.highlights.rawana",
          "packages.tours.ella.highlights.nineArch",
          "packages.tours.ella.highlights.monkeys",
          "packages.tours.ella.highlights.adamsPeak",
          "packages.tours.ella.highlights.tea",
        ],
        included: [
          "packages.tours.ella.included.tickets",
          "packages.tours.ella.included.guide",
          "packages.tours.ella.included.water",
          "packages.tours.ella.included.vehicle",
        ],
      },
      2: {
        nameKey: "packages.tours.galle.name",
        subtitleKey: "packages.tours.galle.subtitle",
        duration: "1day",
        category: "cultural",
        price: "$75",
        originalPrice: "$95",
        rating: 4.8,
        reviews: 189,
        groupSize: "2-20",
        badge: "heritage",
        highlights: [
          "packages.tours.galle.highlights.turtleFarm",
          "packages.tours.galle.highlights.boatSafari",
          "packages.tours.galle.highlights.moonstoneMine",
          "packages.tours.galle.highlights.turtleBeach",
          "packages.tours.galle.highlights.dutchFort",
        ],
        included: [
          "packages.tours.galle.included.tickets",
          "packages.tours.galle.included.guide",
          "packages.tours.galle.included.water",
          "packages.tours.galle.included.vehicle",
        ],
      },
      3: {
        nameKey: "packages.tours.colombo.name",
        subtitleKey: "packages.tours.colombo.subtitle",
        duration: "1day",
        category: "city",
        price: "$65",
        originalPrice: "$85",
        rating: 4.7,
        reviews: 156,
        groupSize: "2-25",
        badge: "city",
        highlights: [
          "packages.tours.colombo.highlights.galleFace",
          "packages.tours.colombo.highlights.gangaramaya",
          "packages.tours.colombo.highlights.independence",
          "packages.tours.colombo.highlights.pettah",
          "packages.tours.colombo.highlights.shoppingMall",
          "packages.tours.colombo.highlights.lotusTower",
        ],
        included: [
          "packages.tours.colombo.included.tickets",
          "packages.tours.colombo.included.guide",
          "packages.tours.colombo.included.water",
          "packages.tours.colombo.included.vehicle",
        ],
      },
      4: {
        nameKey: "packages.tours.kandy.name",
        subtitleKey: "packages.tours.kandy.subtitle",
        duration: "1day",
        category: "cultural",
        price: "$95",
        originalPrice: "$120",
        rating: 4.9,
        reviews: 203,
        groupSize: "2-15",
        badge: "bestseller",
        highlights: [
          "packages.tours.kandy.highlights.elephantFeeding",
          "packages.tours.kandy.highlights.elephantRide",
          "packages.tours.kandy.highlights.temple",
          "packages.tours.kandy.highlights.botanicalGardens",
        ],
        included: [
          "packages.tours.kandy.included.tickets",
          "packages.tours.kandy.included.guide",
          "packages.tours.kandy.included.water",
        ],
      },
      5: {
        nameKey: "packages.tours.sigiriya.name",
        subtitleKey: "packages.tours.sigiriya.subtitle",
        duration: "1day",
        category: "cultural",
        price: "$105",
        originalPrice: "$135",
        rating: 4.9,
        reviews: 278,
        groupSize: "2-12",
        badge: "wonder",
        highlights: [
          "packages.tours.sigiriya.highlights.dambullaCave",
          "packages.tours.sigiriya.highlights.rockFortress",
          "packages.tours.sigiriya.highlights.elephantRide",
          "packages.tours.sigiriya.highlights.ayurvedaSpice",
          "packages.tours.sigiriya.highlights.cookingClass",
        ],
        included: [
          "packages.tours.sigiriya.included.tickets",
          "packages.tours.sigiriya.included.guide",
          "packages.tours.sigiriya.included.water",
          "packages.tours.sigiriya.included.vehicle",
        ],
      },
      6: {
        nameKey: "packages.tours.yala.name",
        subtitleKey: "packages.tours.yala.subtitle",
        duration: "1day",
        category: "wildlife",
        price: "$120",
        originalPrice: "$150",
        rating: 4.8,
        reviews: 167,
        groupSize: "2-8",
        badge: "wildlife",
        highlights: [
          "packages.tours.yala.highlights.jeepSafari",
          "packages.tours.yala.highlights.wildlife",
          "packages.tours.yala.highlights.crocodiles",
          "packages.tours.yala.highlights.flamingos",
          "packages.tours.yala.highlights.photography",
        ],
        included: [
          "packages.tours.yala.included.tickets",
          "packages.tours.yala.included.jeep",
          "packages.tours.yala.included.water",
          "packages.tours.yala.included.vehicle",
          "packages.tours.yala.included.guide",
        ],
      },
      7: {
        nameKey: "packages.tours.ellaYala.name",
        subtitleKey: "packages.tours.ellaYala.subtitle",
        duration: "1day",
        category: "adventure",
        price: "$145",
        originalPrice: "$180",
        rating: 4.9,
        reviews: 134,
        groupSize: "2-10",
        badge: "combo",
        highlights: [
          "packages.tours.ellaYala.highlights.rawana",
          "packages.tours.ellaYala.highlights.nineArch",
          "packages.tours.ellaYala.highlights.monkeys",
          "packages.tours.ellaYala.highlights.tea",
          "packages.tours.ellaYala.highlights.ayurveda",
          "packages.tours.ellaYala.highlights.safari",
        ],
        included: [
          "packages.tours.ellaYala.included.tickets",
          "packages.tours.ellaYala.included.jeepSafari",
          "packages.tours.ellaYala.included.water",
          "packages.tours.ellaYala.included.vehicle",
          "packages.tours.ellaYala.included.guide",
        ],
      },
      8: {
        nameKey: "packages.tours.mirissa.name",
        subtitleKey: "packages.tours.mirissa.subtitle",
        duration: "1day",
        category: "beach",
        price: "$95",
        originalPrice: "$120",
        rating: 4.8,
        reviews: 145,
        groupSize: "2-20",
        badge: "wildlife",
        highlights: [
          "packages.tours.mirissa.highlights.whaleBoat",
          "packages.tours.mirissa.highlights.dolphin",
          "packages.tours.mirissa.highlights.beach",
          "packages.tours.mirissa.highlights.parrotRock",
          "packages.tours.mirissa.highlights.coconutHill",
          "packages.tours.mirissa.highlights.seafood",
        ],
        included: [
          "packages.tours.mirissa.included.tickets",
          "packages.tours.mirissa.included.boat",
          "packages.tours.mirissa.included.lifeJackets",
          "packages.tours.mirissa.included.water",
          "packages.tours.mirissa.included.guide",
          "packages.tours.mirissa.included.vehicle",
        ],
      },
      14: {
        nameKey: "packages.tours.gold.name",
        subtitleKey: "packages.tours.gold.subtitle",
        duration: "2day",
        category: "comprehensive",
        price: "$280",
        originalPrice: "$350",
        rating: 4.9,
        reviews: 89,
        groupSize: "2-12",
        badge: "gold",
        highlights: [
          "packages.tours.gold.highlights.day1.ella",
          "packages.tours.gold.highlights.day1.nuwara",
          "packages.tours.gold.highlights.day2.ambuluwawa",
          "packages.tours.gold.highlights.day2.sigiriya",
        ],
        included: [
          "packages.tours.gold.included.guide",
          "packages.tours.gold.included.entrance",
          "packages.tours.gold.included.hotel",
          "packages.tours.gold.included.transport",
        ],
      },
      15: {
        nameKey: "packages.tours.silva.name",
        subtitleKey: "packages.tours.silva.subtitle",
        duration: "2day",
        category: "comprehensive",
        price: "$260",
        originalPrice: "$320",
        rating: 4.8,
        reviews: 112,
        groupSize: "2-15",
        badge: "popular",
        highlights: [
          "packages.tours.silva.highlights.day1.elephant",
          "packages.tours.silva.highlights.day1.kandy",
          "packages.tours.silva.highlights.day2.tea",
          "packages.tours.silva.highlights.day2.ella",
        ],
        included: [
          "packages.tours.silva.included.tickets",
          "packages.tours.silva.included.meals",
          "packages.tours.silva.included.water",
          "packages.tours.silva.included.guide",
          "packages.tours.silva.included.transport",
        ],
      },
      // New tours from New folder
      16: {
        nameKey: "packages.tours.kandySigiriya.name",
        subtitleKey: "packages.tours.kandySigiriya.subtitle",
        duration: "2day",
        category: "cultural",
        price: "$280",
        originalPrice: "$350",
        rating: 4.9,
        reviews: 145,
        groupSize: "2-15",
        badge: "popular",
        itinerary: [
          { step: "01", titleKey: "packages.tours.kandySigiriya.itinerary.step01.title", descriptionKey: "packages.tours.kandySigiriya.itinerary.step01.description" },
          { step: "02", titleKey: "packages.tours.kandySigiriya.itinerary.step02.title", descriptionKey: "packages.tours.kandySigiriya.itinerary.step02.description" },
          { step: "03", titleKey: "packages.tours.kandySigiriya.itinerary.step03.title", descriptionKey: "packages.tours.kandySigiriya.itinerary.step03.description" },
        ],
        highlights: [
          "packages.tours.kandySigiriya.highlights.0",
          "packages.tours.kandySigiriya.highlights.1",
          "packages.tours.kandySigiriya.highlights.2",
          "packages.tours.kandySigiriya.highlights.3",
          "packages.tours.kandySigiriya.highlights.4",
          "packages.tours.kandySigiriya.highlights.5",
          "packages.tours.kandySigiriya.highlights.6",
        ],
        included: [
          "packages.tours.kandySigiriya.included.0",
          "packages.tours.kandySigiriya.included.1",
          "packages.tours.kandySigiriya.included.2",
          "packages.tours.kandySigiriya.included.3",
        ],
        excluded: [
          "packages.tours.kandySigiriya.excluded.0",
          "packages.tours.kandySigiriya.excluded.1",
        ],
      },
      17: {
        nameKey: "packages.tours.kandyElla.name",
        subtitleKey: "packages.tours.kandyElla.subtitle",
        duration: "2day",
        category: "adventure",
        price: "$260",
        originalPrice: "$320",
        rating: 4.8,
        reviews: 128,
        groupSize: "2-15",
        badge: "popular",
        itinerary: [
          { step: "01", title: "Early Morning - Hotel Pick-Up & Drive to Kandy", description: "Begin your journey early to make the most of your day. Travel through lush countryside towards Kandy." },
          { step: "02", title: "Cultural Highlights & Nature in Kandy", description: "Meet and feed friendly elephants at Pinnawala Elephant Orphanage, visit Ceylon tea Giragama tea factory, learn about Sri Lanka's natural ayurvedic garden (cinnamon, cardamom, herbal remedies), visit Temple of the Tooth in Kandy, and explore botanical garden in Peradeniya. Relax and spend the night in Kandy hotel." },
          { step: "03", title: "Tea Plantations & Waterfalls in Nuwara Eliya / Ella", description: "Drive to Abulluwawa Tower (climbing), explore tea plantations, drive to Nuwara Eliya stopping at Ramboda Waterfall, explore Nuwara Eliya town and Gregory Lake, travel from Nanau Oya to Ella, hike to Little Adam's Peak, visit Nine Arch Bridge, and see Ravana Waterfall with feeding monkeys. Drop to beach hotel." },
        ],
        highlights: [
          "Visit Pinnawala Elephant Orphanage",
          "Explore Ceylon tea factory",
          "Learn about ayurvedic remedies",
          "Visit Temple of the Tooth in Kandy",
          "Explore Royal Botanical Gardens",
          "Experience tea plantations and waterfalls",
          "Hike to Little Adam's Peak and Nine Arch Bridge",
        ],
        included: [
          "Private air-conditioned vehicle and guide",
          "Bottled water",
          "Hotel dinner and breakfast",
          "On Trip Transport",
        ],
        excluded: [
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      19: {
        nameKey: "packages.tours.gemSriLanka.name",
        subtitleKey: "packages.tours.gemSriLanka.subtitle",
        duration: "4day",
        category: "comprehensive",
        price: "$450",
        originalPrice: "$580",
        rating: 4.9,
        reviews: 98,
        groupSize: "2-12",
        badge: "bestseller",
        itinerary: [
          { step: "01", title: "Hotel or Airport Pick-Up - Colombo City Tour", description: "Explore Colombo's key attractions: Galle Face Beach, Gangaramaya Temple, Independence Square, Pettah Street, Shopping Mall, and Lotus Tower (tickets not included). Overnight stay in Colombo." },
          { step: "02", title: "PINNAWELA - SIGIRIYA", description: "Elephant ride and feed at Pinnawala Elephant Orphanage, visit Ceylon tea factory, explore ayurveda garden, and climb Sigiriya Rock Fortress (UNESCO). Overnight stay in Sigiriya or Habarana." },
          { step: "03", title: "DAMBULLA - MATALE - KANDY", description: "Explore Dambulla Cave Temple (UNESCO), visit spice garden, Temple of the Tooth in Kandy, and enjoy traditional Cultural Dance Show. Overnight stay in Kandy." },
          { step: "04", title: "PERADENIYA - BEACH HOTEL (OR AIRPORT)", description: "Visit Royal Botanic Gardens Peradeniya, Kandy Temple of the Tooth, and visit a natural gem shop. Drop to hotel or airport." },
        ],
        highlights: [
          "Explore Colombo's cultural landmarks",
          "Elephant ride and feed at Pinnawala",
          "Climb the iconic Sigiriya Rock Fortress (UNESCO)",
          "Discover ancient cave temples at Dambulla (UNESCO)",
          "Visit Temple of the Tooth in Kandy",
          "Experience traditional Cultural Dance Show",
        ],
        included: [
          "Private air-conditioned vehicle with driver/guide",
          "Airport Transfers",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Departure Taxes",
          "Airport Transfers",
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      20: {
        nameKey: "packages.tours.goldenTour.name",
        subtitleKey: "packages.tours.goldenTour.subtitle",
        duration: "7day",
        category: "comprehensive",
        price: "$850",
        originalPrice: "$1100",
        rating: 4.9,
        reviews: 76,
        groupSize: "2-10",
        badge: "premium",
        itinerary: [
          { step: "01", title: "Colombo City Tour", description: "Explore Galle Face Beach, Gangaramaya Temple, Independence Square, Pettah Street, Shopping Mall, and Lotus Tower. Overnight stay in Negombo." },
          { step: "02", title: "PINNAWELA - SIGIRIYA / DAMBULLA", description: "Visit Pinnawala Elephant Orphanage, Ceylon tea factory, natural gem shop, and climb Sigiriya (UNESCO). Overnight stay in Dambulla." },
          { step: "03", title: "DAMBULLA - POLONARUWA - KANDY", description: "Explore Dambulla Cave Temple (UNESCO), visit Polonaruwa ancient city, and ayurveda garden. Overnight stay in Kandy." },
          { step: "04", title: "PERADENIYA - ABULUWAWA - NUWARA ELIYA", description: "Visit Temple of the Tooth in Kandy, Royal Botanic Gardens Peradeniya, Abulluwawa (on request), Nuwara Eliya city tour, tea plantations, and English Post Office (Built in 1894). Overnight stay in Nuwara Eliya." },
          { step: "05", title: "NUWARA ELIYA - ELLA", description: "Visit Nine-arched Bridge, Little Adam's Peak, train ride, ayurveda garden, and Ravana Waterfalls. Overnight stay in Yala." },
          { step: "06", title: "YALA / GALLE", description: "Early morning Yala jeep safari to spot leopards, elephants, and diverse wildlife. Explore Galle Dutch Fort (UNESCO). Overnight stay in Unawatuna/Galle." },
          { step: "07", title: "GALLE - BENTHOTA", description: "Madu River or Bentota boat safari, turtle beach, turtle farm, and moonstone mining shops. Evening drop to beach hotel." },
        ],
        highlights: [
          "Comprehensive tour of Sri Lanka's highlights",
          "Visit UNESCO World Heritage Sites",
          "Wildlife safari in Yala National Park",
          "Explore historic Galle Fort",
          "Experience tea plantations in Nuwara Eliya",
          "River safari and turtle encounters",
        ],
        included: [
          "Private air-conditioned vehicle with driver/guide",
          "Airport Transfers",
          "Sigiriya special guide",
          "Hotel dinner and breakfast",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Departure Taxes",
          "Airport Transfers",
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      21: {
        nameKey: "packages.tours.mountSriLanka.name",
        subtitleKey: "packages.tours.mountSriLanka.subtitle",
        duration: "3day",
        category: "adventure",
        price: "$320",
        originalPrice: "$400",
        rating: 4.8,
        reviews: 112,
        groupSize: "2-12",
        badge: "adventure",
        itinerary: [
          { step: "01", title: "AIRPORT - PINNAWELA - KANDY", description: "Elephant ride and feed at Pinnawala Elephant Orphanage, visit tea factory, and evening visit to Kandy Tooth Temple. Overnight stay in Kandy." },
          { step: "02", title: "KANDY / NUWARA ELIYA / ELLA", description: "Visit Botanical Garden, Abulluwawa (on request), waterfalls, tea plantations, Nuwara Eliya city tour, and English Post Office (Built in 1894). Overnight stay in Ella." },
          { step: "03", title: "ELLA / UDAWALAWE", description: "Visit Nine-arched Bridge, Little Adam's Peak, train ride, ayurveda garden, Ravana Waterfalls, and Udawalawe National Park jeep safari. Evening drop to beach hotel." },
        ],
        highlights: [
          "Elephant ride at Pinnawala",
          "Explore tea factories and plantations",
          "Visit Temple of the Tooth in Kandy",
          "Experience Nuwara Eliya's colonial charm",
          "Hike to Little Adam's Peak and Nine Arch Bridge",
          "Wildlife safari in Udawalawe National Park",
        ],
        included: [
          "Private air-conditioned vehicle with driver/guide",
          "Airport Transfers",
          "Bottled water",
          "Hotel dinner and breakfast",
          "On Trip Transport",
        ],
        excluded: [
          "Departure Taxes",
          "Airport Transfers",
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      22: {
        nameKey: "packages.tours.natureTour.name",
        subtitleKey: "packages.tours.natureTour.subtitle",
        duration: "6day",
        category: "nature",
        price: "$680",
        originalPrice: "$850",
        rating: 4.9,
        reviews: 89,
        groupSize: "2-10",
        badge: "nature",
        itinerary: [
          { step: "01", title: "Colombo City Tour", description: "Explore Galle Face Beach, Gangaramaya Temple, Independence Square, Pettah Street, Shopping Mall, and Lotus Tower (tickets not included). Overnight stay in Colombo/Negombo." },
          { step: "02", title: "PINNAWELA - SIGIRIYA / DAMBULLA", description: "Elephant ride and feed at Pinnawala Elephant Orphanage, visit Ceylon tea factory, and climb Sigiriya (UNESCO). Overnight stay in Sigiriya or Habarana." },
          { step: "03", title: "DAMBULLA - POLONARUWA - KANDY", description: "Explore Dambulla Cave Temple (UNESCO), visit Polonaruwa ancient city, and ayurveda garden. Overnight stay in Kandy." },
          { step: "04", title: "PERADENIYA - ABULUWAWA - NUWARA ELIYA", description: "Visit Temple of the Tooth in Kandy, Royal Botanic Gardens Peradeniya, Abulluwawa (on request), Nuwara Eliya city tour, tea plantations, and English Post Office (Built in 1894). Overnight stay in Nuwara Eliya." },
          { step: "05", title: "NUWARA ELIYA - ELLA", description: "Visit Nine-arched Bridge, Little Adam's Peak, train ride, ayurveda garden, and Ravana Waterfalls. Overnight stay in Yala." },
          { step: "06", title: "YALA / GALLE", description: "Early morning Yala jeep safari to spot leopards, elephants, and diverse wildlife. Explore Galle Dutch Fort (UNESCO). Evening drop to beach hotel." },
        ],
        highlights: [
          "Explore Colombo's cultural landmarks",
          "Elephant ride at Pinnawala",
          "Climb Sigiriya Rock Fortress (UNESCO)",
          "Discover Dambulla Cave Temple (UNESCO)",
          "Experience tea plantations in Nuwara Eliya",
          "Wildlife safari in Yala National Park",
          "Explore Galle Fort (UNESCO)",
        ],
        included: [
          "Private air-conditioned vehicle with driver/guide",
          "Airport Transfers",
          "Sigiriya special guide",
          "Hotel dinner and breakfast",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Departure Taxes",
          "Airport Transfers",
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      23: {
        nameKey: "packages.tours.kandyDay.name",
        subtitleKey: "packages.tours.kandyDay.subtitle",
        duration: "1day",
        category: "cultural",
        price: "$95",
        originalPrice: "$120",
        rating: 4.9,
        reviews: 203,
        groupSize: "2-15",
        badge: "bestseller",
        itinerary: [
          { step: "01", title: "Early Morning - Hotel Pick-Up & Drive to Kandy", description: "Begin your journey early to make the most of your day. Travel through lush countryside towards Kandy." },
          { step: "02", title: "Pinnawala Elephant Orphanage", description: "Visit Pinnawala Elephant Orphanage to see and interact with friendly elephants." },
          { step: "03", title: "Ceylon Tea Giragama Tea Factory", description: "Visit Ceylon tea Giragama tea factory to learn about the process of Ceylon tea production." },
          { step: "04", title: "Sri Lanka Natural Ayurvedic Garden", description: "Learn about Sri Lanka's cinnamon, cardamom, and herbal remedies at a natural ayurvedic garden." },
          { step: "05", title: "Temple of the Tooth in Kandy", description: "Visit the Temple of the Tooth in Kandy, home to the revered Buddha tooth relic and vibrant cultural heritage." },
          { step: "06", title: "Royal Botanic Gardens Peradeniya", description: "Visit botanical garden in Peradeniya, one of the finest tropical gardens in Asia." },
          { step: "07", title: "Back to Hotel", description: "Relax in your private vehicle as you head back to your hotel." },
        ],
        highlights: [
          "Visit Pinnawala Elephant Orphanage",
          "Explore Ceylon tea factory",
          "Learn about ayurvedic remedies",
          "Visit Temple of the Tooth in Kandy",
          "Explore Royal Botanic Gardens Peradeniya",
        ],
        included: [
          "Private air-conditioned vehicle and guide",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      24: {
        nameKey: "packages.tours.dutchFort.name",
        subtitleKey: "packages.tours.dutchFort.subtitle",
        duration: "1day",
        category: "cultural",
        price: "$75",
        originalPrice: "$95",
        rating: 4.8,
        reviews: 189,
        groupSize: "2-20",
        badge: "heritage",
        itinerary: [
          { step: "01", title: "Early Morning - Hotel Pick-Up", description: "Begin your journey early and travel along the scenic southern coast towards Galle." },
          { step: "02", title: "Madu River or Bentota Boat Safari", description: "Enjoy a scenic boat safari through the Madu River or Bentota, exploring the mangrove forests and local wildlife." },
          { step: "03", title: "Turtle Farm Visit", description: "Visit a turtle farm to learn about sea turtle conservation and see different species of turtles." },
          { step: "04", title: "Moon Stone Mining Shops", description: "Explore moonstone mining shops and learn about this precious gemstone unique to Sri Lanka." },
          { step: "05", title: "Turtle Beach", description: "Visit a beautiful turtle beach where you can see turtles in their natural habitat." },
          { step: "06", title: "Galle Dutch Fort (UNESCO)", description: "Walk through the historic Galle Fort, a UNESCO World Heritage Site with well-preserved Dutch colonial architecture, ramparts, and the iconic lighthouse." },
          { step: "07", title: "Back to Hotel", description: "Relax in your private vehicle as you head back to your hotel." },
        ],
        highlights: [
          "Explore UNESCO World Heritage Galle Fort",
          "Madu River or Bentota boat safari",
          "Visit turtle farm and turtle beach",
          "Discover moonstone mining shops",
          "Experience Dutch colonial architecture",
        ],
        included: [
          "Private air-conditioned vehicle and guide",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      25: {
        nameKey: "packages.tours.mountElla.name",
        subtitleKey: "packages.tours.mountElla.subtitle",
        duration: "1day",
        category: "adventure",
        price: "$85",
        originalPrice: "$110",
        rating: 4.9,
        reviews: 234,
        groupSize: "2-15",
        badge: "popular",
        itinerary: [
          { step: "01", title: "Early Morning - Hotel Pick-Up & Drive to Ella", description: "Begin your journey early to make the most of your day. Travel through scenic hill country roads towards Ella." },
          { step: "02", title: "Nine-arched Bridge", description: "Visit the iconic Nine Arch Bridge, a marvel of colonial engineering surrounded by lush greenery and tea plantations." },
          { step: "03", title: "Ravana Waterfall", description: "Visit the beautiful Ravana Waterfall, one of the widest waterfalls in Sri Lanka, surrounded by lush forest." },
          { step: "04", title: "Little Adam's Peak", description: "Climb Little Adam's Peak for stunning panoramic views over the Ella Gap and surrounding valleys." },
          { step: "05", title: "Train Ride", description: "Enjoy a scenic train ride through the hill country, experiencing one of the world's most beautiful train journeys." },
          { step: "06", title: "Ayurveda Garden", description: "Visit an ayurveda garden to learn about Sri Lanka's traditional herbal remedies, cinnamon, and cardamom." },
          { step: "07", title: "Back to Hotel", description: "Relax in your private vehicle as you head back to your hotel." },
        ],
        highlights: [
          "Visit the iconic Nine Arch Bridge",
          "Explore Ravana Waterfall",
          "Climb Little Adam's Peak for stunning views",
          "Experience scenic train ride",
          "Learn about ayurveda and herbal remedies",
        ],
        included: [
          "Private air-conditioned vehicle and guide",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      26: {
        nameKey: "packages.tours.sigiriyaCave.name",
        subtitleKey: "packages.tours.sigiriyaCave.subtitle",
        duration: "1day",
        category: "cultural",
        price: "$105",
        originalPrice: "$135",
        rating: 4.9,
        reviews: 278,
        groupSize: "2-12",
        badge: "wonder",
        itinerary: [
          { step: "01", title: "Early Morning - Hotel Pick-Up & Drive to Sigiriya", description: "Begin your journey early to make the most of your day. Travel through lush countryside and rural villages as you head towards Sri Lanka's Cultural Triangle." },
          { step: "02", title: "Sigiriya Rock Fortress Climb (UNESCO)", description: "Ascend the world-famous Sigiriya Lion Rock - a UNESCO World Heritage Site. Explore the frescoes of the Sigiriya maidens, the Mirror Wall, and the ancient summit palace ruins." },
          { step: "03", title: "Dambulla Cave Temple (UNESCO)", description: "Explore the largest and best-preserved cave temple complex in Sri Lanka. Admire over 150 Buddha statues and centuries-old murals covering the cave walls." },
          { step: "04", title: "Herbal Spice Garden", description: "Visit a local spice garden to learn about Sri Lanka's cinnamon, cardamom, and herbal remedies." },
          { step: "05", title: "On Request Village Tour", description: "Savor an authentic rice & curry meal at a local restaurant or village home. Optional: Experience a Sri Lankan village tour with a bullock cart ride and boat crossing." },
          { step: "06", title: "Back to Hotel", description: "Relax in your private vehicle as you head back to your hotel, arriving in the evening with unforgettable memories." },
        ],
        highlights: [
          "Climb Sigiriya Rock Fortress (UNESCO)",
          "Explore Dambulla Cave Temple (UNESCO)",
          "Visit Herbal Spice Garden",
          "Optional village tour experience",
          "Discover Sri Lanka's top heritage sites",
        ],
        included: [
          "Private air-conditioned vehicle and guide",
          "Special guide",
          "Bottled water",
          "On Trip Transport",
        ],
        excluded: [
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
      27: {
        nameKey: "packages.tours.safariTour.name",
        subtitleKey: "packages.tours.safariTour.subtitle",
        duration: "1day",
        category: "wildlife",
        price: "$120",
        originalPrice: "$150",
        rating: 4.8,
        reviews: 167,
        groupSize: "2-8",
        badge: "wildlife",
        itinerary: [
          { step: "01", title: "Early Morning Pick-Up", description: "Begin your journey very early in the morning to reach the national park at the best time for wildlife spotting." },
          { step: "02", title: "Udwala or Yala National Park Safari", description: "Embark on a thrilling jeep safari through Yala or Udawalawe National Park, spotting leopards, elephants, and exotic birds in their natural habitat." },
          { step: "03", title: "Back to Hotel", description: "Relax in your private vehicle as you head back to your hotel with unforgettable wildlife memories." },
        ],
        highlights: [
          "Jeep safari in Yala or Udawalawe National Park",
          "Spot leopards, elephants, and diverse wildlife",
          "Wildlife photography opportunities",
          "Experience Sri Lanka's natural biodiversity",
        ],
        included: [
          "Private air-conditioned vehicle and guide",
          "Bottled water",
          "Jeep for safari",
          "Entry Fees",
          "On Trip Transport",
        ],
        excluded: [
          "Entry Fees",
          "Box Lunch, Dinner & Snacks",
        ],
      },
    };

    return tourKeys[tourIdNum];
  };

  const tourData = getTourData(tourId);

  if (!tourData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <button
            onClick={onNavigateBack}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`);
    const tourName = tourData.name || t(tourData.nameKey || "");
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${tourName} tour. Can you provide more details?`
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  // Helper functions to get tour name and subtitle (supporting both old and new format)
  const getTourName = () => {
    return tourData.name || t(tourData.nameKey || "");
  };

  const getTourSubtitle = () => {
    return tourData.subtitle || t(tourData.subtitleKey || "");
  };

  const getDurationText = () => {
    if (tourData.duration === "1day") return "1 Day";
    if (tourData.duration === "2day") return "2 Days";
    if (tourData.duration === "3day") return "3 Days";
    if (tourData.duration === "4day") return "4 Days";
    if (tourData.duration === "6day") return "6 Days";
    if (tourData.duration === "7day") return "7 Days";
    return tourData.duration;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Featured Tours Hero Section - 4 Photos Full Width - At the Top */}
      <section className="relative w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {currentTourImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden w-full"
              >
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={image}
                    alt={`${getTourName()} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentTourImages[0] || "/packages/Sigiriya.jpg"}
            alt={getTourName()}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Back Button */}
        <div className="relative z-10 pt-28 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={onNavigateBack}
              className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Tours</span>
            </button>

            <div className="text-white">
              <div className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-sm font-medium mb-4">
                {tourData.badge?.toUpperCase() || "TOUR"}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {getTourName()}
              </h1>
              <p className="text-xl text-white/90 mb-6">{getTourSubtitle()}</p>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{getDurationText()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Max People: {tourData.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>{tourData.rating} ({tourData.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tour Plan / Itinerary */}
              {tourData.itinerary && tourData.itinerary.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Plan</h2>
                  <p className="text-gray-700 mb-6">
                    What to Expect: {getTourSubtitle()}
                  </p>
                  <div className="relative">
                    {/* Vertical dotted line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-emerald-300"></div>
                    <div className="space-y-8">
                      {tourData.itinerary.map((item: any, index: number) => (
                        <div key={index} className="relative flex items-start space-x-6">
                          {/* Step number circle */}
                          <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                            {item.step}
                          </div>
                          {/* Content */}
                          <div className="flex-1 pt-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.titleKey ? t(item.titleKey) : item.title}</h3>
                            <p className="text-gray-700">{item.descriptionKey ? t(item.descriptionKey) : item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Highlights */}
              {tourData.highlights && tourData.highlights.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tourData.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          {tourData.nameKey ? t(highlight) : highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What's Included */}
              {tourData.included && tourData.included.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Includes</h2>
                  <div className="space-y-3">
                    {tourData.included.map((item: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-gray-700">
                          {tourData.nameKey ? t(item) : item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What's Excluded */}
              {tourData.excluded && tourData.excluded.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Excludes</h2>
                  <div className="space-y-3">
                    {tourData.excluded.map((item: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{tourData.nameKey ? t(item) : item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  onClick={() => navigateToPackages()}
                  className="w-full bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
                >
                  View All Tours
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">
                        {getDurationText()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Group Size</span>
                      <span className="font-medium">{tourData.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-medium flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {tourData.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

