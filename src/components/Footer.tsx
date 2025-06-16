
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Bright Future Academy
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Inspiring young minds and building bright futures through excellence in education and holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group">
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group">
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-sky-400 transition-colors" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group">
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-blue-500/30 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Academics
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/admissions" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Admissions
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/student-life" 
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Student Life
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-green-500/30 pb-3">
              Programs
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                <span>Early Years (Nursery-KG)</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                <span>Primary (Grades 1-5)</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                <span>Middle (Grades 6-8)</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                <span>Secondary (Grades 9-12)</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-purple-500/30 pb-3">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="h-4 w-4 text-purple-400 mt-0.5" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  123 Education Street, Knowledge City, KC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-gray-300">info@brightfutureacademy.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Bright Future Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
