"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
  const { t, currentLanguage } = useLanguage()

  // Slides for hero background + subtitle (using existing translated keys)
  const slides = [
    {
      image: "/Home-Hero/hero.webp",
      subtitleKey: "hero.subtitle",
    },
    {
      image: "/Home-Hero/Home-1.jpg",
      subtitleKey: "destinations.hero.subtitle",
    },
    {
      image: "/Home-Hero/Home-2.jpg",
      subtitleKey: "packages.hero.subtitle",
    },
    {
      image: "/Home-Hero/Aboutus.png",
      subtitleKey: "about.hero.subtitle",
    },
  ] as const

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate hero background + description
  useEffect(() => {
    const interval = globalThis.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000) // 7s per slide

    return () => globalThis.clearInterval(interval)
  }, [])

  const currentSubtitleKey = slides[currentSlide].subtitleKey

  const handleWhatsAppClick = () => {
    const number = t(`whatsapp.phoneNumber.${currentLanguage.code}`)
    const message = encodeURIComponent(t("whatsapp.message.hero"))
    window.open(`https://wa.me/${number}?text=${message}`, "_blank")
  }

  // const stats = [
  //   {
  //     number: "50+",
  //     label: t("hero.stats.destinations"),
  //     icon: MapPin,
  //   },
  //   {
  //     number: "5000+",
  //     label: t("hero.stats.clients"),
  //     icon: Users,
  //   },
  //   {
  //     number: "12+",
  //     label: t("hero.stats.experience"),
  //     icon: Calendar,
  //   },
  //   {
  //     number: "4.9",
  //     label: t("hero.stats.rating"),
  //     icon: Star,
  //   },
  // ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
              index === currentSlide ? "opacity-100 hero-zoom" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt="Sri Lanka Landscape"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p
            key={currentSubtitleKey}
            className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-700 ease-out transform opacity-100 translate-y-0"
          >
            {t(currentSubtitleKey as any)}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>{t("hero.cta")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t("hero.whatsapp")}</span>
            </button>
          </div>

          {/* Stats
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              )
            })}
          </div> */}
        </div>
      </div>

      {/* Slide Indicators + Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3">
        {/* Dots */}
        <div className="flex space-x-2 mb-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2.5 h-2.5 rounded-full border border-white/60 transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
