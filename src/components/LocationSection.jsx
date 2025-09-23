// src/components/LocationSection.jsx
import React from 'react';
import { Phone, Mail, Clock, Navigation, Car, Bike } from 'lucide-react';

const LocationSection = () => {
  // Single location data
  const location = {
    name: 'FoodStorm ',
    address: '123 Food Street, Tamil Nadu District',
    city: 'Chennai,',
    phone: '+91 7395944311',
    email: 'muhsiniliyas03@gmail.com',
    hours: {
      weekdays: '7:00 AM - 11:00 PM',
      weekends: '8:00 AM - 12:00 AM'
    },
    deliveryZones: ['Pondicherry', 'Comibatore', 'Bengalore']
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 7395944311',
      subInfo: 'Mon-Sun: 24/7 Support',
      action: 'tel:+91 7395944311',
      bgColor: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'muhsiniliyas03@gmail.com',
      subInfo: 'We reply within 2 hours',
      action: 'mailto:muhsiniliyas03@gmail.com',
      bgColor: 'bg-blue-500'
    },
    {
      icon: Navigation,
      title: 'Live Chat',
      info: 'Available 24/7',
      subInfo: 'Instant support online',
      action: '#',
      bgColor: 'bg-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us & Get In Touch
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              {" "}
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Visit our location or reach out to us. We're here to serve you with delicious food and excellent service
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 theme-transition border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className={`${method.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    {method.info}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.subInfo}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Location Details - Full Width */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Location Info */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <span>📍</span>
                <span>{location.name}</span>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                  Main Location
                </span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-1">🏢</span>
                  <div>
                    <p className="font-medium text-white">{location.address}</p>
                    <p className="text-gray-100">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-white hover:text-yellow-200 transition-colors duration-200"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                  <a 
                    href={`mailto:${location.email}`}
                    className="text-white hover:text-yellow-200 transition-colors duration-200"
                  >
                    {location.email}
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
                  <div className="text-white">
                    <p><strong>Monday - Friday:</strong> {location.hours.weekdays}</p>
                    <p><strong>Saturday - Sunday:</strong> {location.hours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Delivery Zones */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl theme-transition border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Bike className="w-5 h-5 text-primary-500" />
                  <span>Delivery Coverage Areas</span>
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {location.deliveryZones.map((zone, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-200">Free delivery</strong> within these zones for orders over ₹1500. Delivery fee applies for orders under ₹1500.
                </p>
              </div>

              {/* Services */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm theme-transition text-center border border-gray-200 dark:border-gray-700">
                  <Car className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Car Delivery</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">Large orders & bulk catering</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm theme-transition text-center border border-gray-200 dark:border-gray-700">
                  <Bike className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Bike Delivery</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">Quick & eco-friendly delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Our Location */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl theme-transition border border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Visit Our Location
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Come by our headquarters to experience our food first-hand, meet our team, or discuss catering options for your events.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                  🅿️ Free Parking Available
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-200 dark:border-green-800">
                  ♿ Wheelchair Accessible
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                  📶 Free Wi-Fi
                </span>
              </div>
              <div className="text-center">
                <p className="text-gray-900 dark:text-gray-200 font-medium text-lg">
                  {location.address}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {location.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 theme-transition border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Order?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Browse our delicious menu and get your favorite food delivered fresh to your door in 30 minutes or less.
            </p>
            <button
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
