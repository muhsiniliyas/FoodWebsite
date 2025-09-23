// src/components/TeamSection.jsx
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Passionate about connecting communities through food. Former restaurant owner with 10+ years in hospitality.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@foodieexpress.com'
      }
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading our tech innovation with expertise in scalable platforms and user experience design.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus@foodieexpress.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Ensuring smooth operations and exceptional customer experiences across all our delivery services.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@foodieexpress.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Restaurant Relations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Building strong partnerships with local restaurants and helping them grow their delivery business.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@foodieexpress.com'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              {" "}Team
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The passionate people behind FoodieExpress who make delicious deliveries possible
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden theme-transition">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
