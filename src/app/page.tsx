"use client";

import {
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Settings,
  Database,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Play,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                {/* <span className="text-xl font-bold text-gray-900">ERPPro</span> */}
                <span className="text-xl font-bold text-gray-900">Vistock</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Benefits
                </a>
                <a
                  href="#process"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Process
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </a>
                <Link
                  href="https://app.vistock.in"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Get Started
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-100 bg-white">
                <nav className="flex flex-col space-y-4">
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Services
                  </a>
                  <a
                    href="#benefits"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Benefits
                  </a>
                  <a
                    href="#process"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Process
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Contact
                  </a>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 w-full">
                    Get Started
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transform your textile business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  AI-powered ERP solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Streamline textile operations, optimize inventory management,
                and accelerate growth with our AI-powered ERP solutions designed
                specifically for the textile industry. Trusted by 500+ textile
                businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2">
                  <span>Start Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Successful Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">40%</div>
                <div className="text-gray-600">Average Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive ERP Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From consultation to implementation and ongoing support, we
                provide end-to-end ERP solutions tailored to your business
                needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Settings className="w-8 h-8 text-blue-600" />,
                  title: "Textile ERP Implementation",
                  description:
                    "Complete ERP system setup tailored for textile manufacturing, inventory management, and supply chain optimization.",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
                  title: "Production Analytics",
                  description:
                    "AI-powered analytics for production planning, quality control, and real-time performance monitoring.",
                },
                {
                  icon: <Users className="w-8 h-8 text-orange-500" />,
                  title: "Workforce Management",
                  description:
                    "Optimize labor allocation, track productivity, and manage shift schedules across your textile operations.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-purple-600" />,
                  title: "Inventory Control",
                  description:
                    "Smart inventory management for raw materials, work-in-progress, and finished goods with automated reordering.",
                },
                {
                  icon: <Zap className="w-8 h-8 text-green-600" />,
                  title: "Supply Chain Integration",
                  description:
                    "Seamlessly connect with suppliers, distributors, and customers for end-to-end supply chain visibility.",
                },
                {
                  icon: <Clock className="w-8 h-8 text-red-500" />,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock technical support specialized in textile industry operations and requirements.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Vistock for Your Textile Business?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our AI-powered ERP solutions are specifically designed for
                  textile manufacturers, delivering measurable results that
                  transform your operations.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
                      title: "Production Efficiency",
                      description:
                        "Optimize production schedules and reduce waste by up to 40% with AI-driven insights.",
                    },
                    {
                      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                      title: "Quality Control",
                      description:
                        "Monitor fabric quality, defect rates, and compliance in real-time across all production lines.",
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-purple-600" />,
                      title: "Cost Reduction",
                      description:
                        "Reduce material waste, optimize energy consumption, and minimize production costs.",
                    },
                    {
                      icon: <Users className="w-6 h-6 text-teal-600" />,
                      title: "Supply Chain Visibility",
                      description:
                        "Track materials from suppliers to finished products with complete traceability.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6">
                    Textile ROI Impact
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span>Waste Reduction</span>
                      <span className="text-2xl font-bold">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Production Speed</span>
                      <span className="text-2xl font-bold">+45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cost Savings</span>
                      <span className="text-2xl font-bold">$1.8M</span>
                    </div>
                  </div>
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl mt-6 hover:bg-gray-50 transition-colors duration-200">
                    Calculate Your Textile ROI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Proven Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach ensuring successful ERP deployment with
                minimal disruption to your textile production operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Textile Assessment",
                  description:
                    "Comprehensive analysis of your production processes, inventory systems, and operational workflows.",
                  duration: "2-3 weeks",
                },
                {
                  step: "02",
                  title: "Custom Configuration",
                  description:
                    "Tailored ERP setup for textile-specific modules including production planning and quality control.",
                  duration: "3-4 weeks",
                },
                {
                  step: "03",
                  title: "Deployment & Testing",
                  description:
                    "Systematic rollout with extensive testing on production lines and quality assurance protocols.",
                  duration: "8-12 weeks",
                },
                {
                  step: "04",
                  title: "Training & Optimization",
                  description:
                    "Comprehensive staff training and continuous optimization for maximum textile production efficiency.",
                  duration: "Ongoing",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by industry leaders worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Production Manager, Premium Textiles Ltd",
                  content:
                    "Vistock transformed our textile operations completely. We saw a 45% increase in production efficiency and 30% reduction in waste within the first 6 months. Their textile industry expertise is unmatched.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Operations Director, Global Fabrics Inc",
                  content:
                    "The implementation was seamless and the ongoing support is exceptional. Our fabric inventory management and quality control have never been more accurate and streamlined.",
                  rating: 5,
                },
                {
                  name: "Emma Rodriguez",
                  role: "CEO, Sustainable Textiles Co",
                  content:
                    "Outstanding service from start to finish. The ROI was evident within months, and Vistock continues to drive our sustainable textile production growth with AI-powered insights.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Textile Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful textile manufacturers that have
              revolutionized their operations with Vistock&apos AI-powered ERP
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                Download Textile Case Study
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Ready to start your textile ERP transformation journey? Our
                  textile industry experts are here to help you succeed.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">contact@vistock.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Office</div>
                      <div className="text-gray-600">
                        123 Business Ave, Suite 100
                        <br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">ERPPro</span>
                  <span className="text-xl font-bold">Vistock</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transforming textile businesses with AI-powered ERP solutions
                  and expert implementation services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Textile ERP Implementation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Production Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Inventory Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Training & Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Company</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Webinars
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2025 Vistock. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

