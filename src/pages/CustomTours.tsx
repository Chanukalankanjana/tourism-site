"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Calendar, Users, MapPin, DollarSign, Send, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CustomTours() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    preferredStartDate: "",
    numberOfTravelers: "",
    duration: "",
    tourInterests: "",
    budgetPerPerson: "",
    pickupLocation: "",
    specialRequirements: "",
    additionalMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const SERVICE_ID = "service_gttlsha" as const;
  const TEMPLATE_ID = "template_stwffc5" as const; // You'll need to create this template in EmailJS
  const PUBLIC_KEY = "LSzlQ7NIUs_zTjrqB" as const;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber || "Not provided",
        preferredStartDate: formData.preferredStartDate || "Not specified",
        numberOfTravelers: formData.numberOfTravelers || "Not specified",
        duration: formData.duration || "Not specified",
        tourInterests: formData.tourInterests || "Not specified",
        budgetPerPerson: formData.budgetPerPerson || "Not specified",
        pickupLocation: formData.pickupLocation || "Not specified",
        specialRequirements: formData.specialRequirements || "None",
        additionalMessage: formData.additionalMessage || "None",
      } as Record<string, unknown>;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus("success");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          preferredStartDate: "",
          numberOfTravelers: "",
          duration: "",
          tourInterests: "",
          budgetPerPerson: "",
          pickupLocation: "",
          specialRequirements: "",
          additionalMessage: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      // Log more details about the error
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/Hero/Adventure.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" /> {t("customTours.hero.badge")}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {t("customTours.hero.title")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t("customTours.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.fullName")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder={t("customTours.form.placeholders.fullName")}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder={t("customTours.form.placeholders.email")}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.phoneNumber")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder={t("customTours.form.placeholders.phone")}
                />
              </div>

              {/* Preferred Start Date */}
              <div>
                <label htmlFor="preferredStartDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.preferredStartDate")} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="preferredStartDate"
                    name="preferredStartDate"
                    value={formData.preferredStartDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Number of Travelers and Duration - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Number of Travelers */}
                <div>
                  <label htmlFor="numberOfTravelers" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("customTours.form.numberOfTravelers")} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      id="numberOfTravelers"
                      name="numberOfTravelers"
                      value={formData.numberOfTravelers}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder={t("customTours.form.placeholders.numberOfTravelers")}
                    />
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("customTours.form.duration")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder={t("customTours.form.placeholders.duration")}
                  />
                </div>
              </div>

              {/* Tour Interests / Preferences */}
              <div>
                <label htmlFor="tourInterests" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.tourInterests")}
                </label>
                <textarea
                  id="tourInterests"
                  name="tourInterests"
                  value={formData.tourInterests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder={t("customTours.form.placeholders.tourInterests")}
                />
              </div>

              {/* Budget per person */}
              <div>
                <label htmlFor="budgetPerPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.budgetPerPerson")}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    id="budgetPerPerson"
                    name="budgetPerPerson"
                    value={formData.budgetPerPerson}
                    onChange={handleChange}
                    min="0"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder={t("customTours.form.placeholders.budget")}
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.pickupLocation")}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder={t("customTours.form.placeholders.pickupLocation")}
                  />
                </div>
              </div>

              {/* Special Requirements / Requests */}
              <div>
                <label htmlFor="specialRequirements" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.specialRequirements")}
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder={t("customTours.form.placeholders.specialRequirements")}
                />
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="additionalMessage" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("customTours.form.additionalMessage")}
                </label>
                <textarea
                  id="additionalMessage"
                  name="additionalMessage"
                  value={formData.additionalMessage}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  placeholder={t("customTours.form.placeholders.additionalMessage")}
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">{t("customTours.form.success")}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">{t("customTours.form.error")}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t("customTours.form.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("customTours.form.submit")}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

