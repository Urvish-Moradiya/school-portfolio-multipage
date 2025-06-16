import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InquiryForm from './InquiryForm';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academics' },
    { path: '/campus', label: 'Campus' },
    { path: '/student-life', label: 'Student Life' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <GraduationCap className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight">Bright Future Academy</span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">Excellence in Education</span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></div>
                  )}
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>
                </Link>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => setShowInquiryForm(true)}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Apply Now</span>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse ml-2"></div>
              </Button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-gray-700 hover:text-primary transition-colors duration-200 hover:bg-gray-50 rounded-lg"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-2 border-t border-gray-100">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/10 border-l-4 border-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Button 
                  onClick={() => {
                    setShowInquiryForm(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <InquiryForm 
        open={showInquiryForm} 
        onOpenChange={setShowInquiryForm} 
      />
    </>
  );
};

export default Navigation;
