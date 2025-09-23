// src/components/About.jsx
import React from 'react';
import { Clock, Award, Users, Heart, CheckCircle, Star, Truck } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '500+', label: 'Restaurant Partners', icon: Award },
    { number: '30min', label: 'Average Delivery', icon: Clock },
    { number: '4.8★', label: 'Customer Rating', icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We partner only with restaurants that meet our high standards for food quality and safety.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Lightning-fast delivery that gets your food to you hot and fresh, guaranteed within 30 minutes.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Every decision we make puts our customers first. Your satisfaction is our top priority.'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Consistent service you can count on, whether it\'s your first order or your hundredth.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About FoodStorm
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              {" "}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connecting food lovers with their favorite restaurants since 2020
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2020 during the challenging times of the pandemic, FoodStorm was born out of a simple yet powerful idea: to bring people together through food, even when we had to stay apart.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              What started as a small local delivery service has grown into a thriving platform that connects thousands of customers with their favorite restaurants. We've built more than just a delivery service - we've created a community that celebrates the joy of good food.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, we're proud to serve over 50,000 happy customers across the city, working with 500+ restaurant partners to deliver not just meals, but moments of happiness to your doorstep .
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
              alt="Restaurant kitchen"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">2020</div>
              <div className="text-sm">Year Founded</div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 mb-20 theme-transition">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To make food delivery convenient, reliable, and accessible for everyone while supporting local restaurants and creating meaningful connections through the universal language of food.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 theme-transition h-full">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
