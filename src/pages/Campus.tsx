
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Shield, Clock, Wifi, Car, Utensils, FlaskConical, BookOpen, Dumbbell, Palette, Music, Users } from 'lucide-react';

const Campus = () => {
  const facilities = [
    {
      title: 'Modern Classrooms',
      description: 'Spacious, well-lit classrooms equipped with smart boards and comfortable furniture',
      icon: Users,
      features: ['Interactive Smart Boards', 'Air Conditioning', 'Ergonomic Furniture', 'Natural Lighting']
    },
    {
      title: 'Science Laboratories',
      description: 'State-of-the-art labs for Physics, Chemistry, Biology, and Environmental Science',
      icon: FlaskConical,
      features: ['Advanced Equipment', 'Safety Systems', 'Digital Microscopes', 'Research Facilities']
    },
    {
      title: 'Digital Library',
      description: 'Extensive collection with quiet study areas and digital resources',
      icon: BookOpen,
      features: ['25,000+ Books', 'Digital Database', 'Study Pods', 'Research Support']
    },
    {
      title: 'Sports Complex',
      description: 'Comprehensive facilities for various indoor and outdoor sports',
      icon: Dumbbell,
      features: ['Olympic Pool', 'Basketball Courts', 'Football Field', 'Gymnasium']
    },
    {
      title: 'Arts Studios',
      description: 'Creative spaces for visual arts, pottery, and design work',
      icon: Palette,
      features: ['Art Studios', 'Pottery Wheels', 'Exhibition Space', 'Digital Design Lab']
    },
    {
      title: 'Music Center',
      description: 'Professional facilities for instrumental and vocal music programs',
      icon: Music,
      features: ['Recording Studio', 'Practice Rooms', 'Concert Hall', 'Instrument Library']
    },
  ];

  const safetyFeatures = [
    { icon: Shield, title: 'Comprehensive Security', description: '24/7 CCTV monitoring and trained security personnel' },
    { icon: Clock, title: 'Controlled Access', description: 'Card-based entry system and visitor management' },
    { icon: Shield, title: 'Fire Safety', description: 'Advanced fire detection and suppression systems' },
    { icon: Users, title: 'Health Services', description: 'On-campus nurse and tie-ups with nearby hospitals' },
  ];

  const sustainability = [
    { title: 'Solar Power', description: '60% of campus energy from renewable solar panels' },
    { title: 'Rainwater Harvesting', description: 'Collection and recycling system for campus irrigation' },
    { title: 'Waste Management', description: 'Comprehensive recycling and composting programs' },
    { title: 'Green Spaces', description: 'Landscaped gardens and tree-lined pathways throughout campus' },
  ];

  const amenities = [
    { icon: Utensils, title: 'Cafeteria', description: 'Nutritious meals with vegetarian and international options' },
    { icon: Car, title: 'Transportation', description: 'Safe and reliable bus service covering the city' },
    { icon: Wifi, title: 'Wi-Fi Campus', description: 'High-speed internet access throughout the facility' },
    { icon: MapPin, title: 'Location', description: 'Easily accessible location with ample parking' },
  ];

  return (
<>
      {/* Hero Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Campus & Facilities</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our modern, purpose-built campus provides an inspiring environment where students can learn, 
            grow, and thrive in a safe and nurturing setting.
          </p>
          <Button size="lg">Schedule a Campus Tour</Button>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Virtual Campus Tour</h2>
            <p className="text-lg text-gray-600">Take a virtual walk through our beautiful campus</p>
          </div>
          
          <div className=" bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-10 flex items-center justify-center mb-8">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Campus Map</h3>
              <p className="text-gray-600 mb-4">Explore our facilities with our interactive 360° tour</p>
              <Button>Start Virtual Tour</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-2">15 Acres</div>
              <p className="text-gray-600">Beautiful Campus</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Modern Classrooms</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Wi-Fi Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600">
              Every space on our campus is designed to enhance learning and personal development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <facility.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety & Security</h2>
            <p className="text-lg text-gray-600">
              Your child's safety is our top priority. We maintain the highest security standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-2 border-primary/20">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Preparedness</h3>
            <p className="text-red-800">
              Regular safety drills, emergency response protocols, and direct communication 
              channels with local emergency services ensure comprehensive emergency preparedness.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Initiatives</h2>
            <p className="text-lg text-gray-600">
              We're committed to environmental responsibility and teaching students to be eco-conscious citizens
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sustainability.map((initiative, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-700">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-800 font-medium">Carbon Neutral Campus by 2030</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Amenities</h2>
            <p className="text-lg text-gray-600">
              Additional services that make our campus a comfortable and convenient learning environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <amenity.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

</>
  );
};

export default Campus;
