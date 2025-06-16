
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Star, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, title: 'Compassion', description: 'We foster kindness, empathy, and respect for all members of our community.' },
    { icon: Star, title: 'Excellence', description: 'We strive for the highest standards in everything we do, from academics to character.' },
    { icon: Users, title: 'Community', description: 'We believe in the power of collaboration and building strong relationships.' },
    { icon: Globe, title: 'Global Mindset', description: 'We prepare students to be responsible global citizens in an interconnected world.' },
  ];

  const milestones = [
    { year: '1999', event: 'School Founded', description: 'Bright Future Academy opens its doors with 120 students' },
    { year: '2005', event: 'International Recognition', description: 'Received accreditation from the International Baccalaureate Organization' },
    { year: '2010', event: 'Campus Expansion', description: 'New science and technology wing inaugurated' },
    { year: '2015', event: 'Digital Innovation', description: 'Launched comprehensive digital learning program' },
    { year: '2020', event: 'Global Partnerships', description: 'Established sister school relationships across 5 countries' },
    { year: '2024', event: '25th Anniversary', description: 'Celebrating 25 years of educational excellence' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Bright Future Academy</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For over two decades, we have been dedicated to nurturing young minds, building character, 
            and preparing students for success in an ever-changing global landscape.
          </p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1999 with a vision to create a nurturing environment where every child could thrive, 
                Bright Future Academy has grown from a small community school to a recognized leader in education. 
                Our journey has been marked by continuous innovation, unwavering commitment to excellence, 
                and a deep belief in the potential of every student.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we serve over 1,200 students from diverse backgrounds, fostering a multicultural environment 
                that prepares our graduates for success in universities and careers around the world. Our alumni 
                network spans continents, with graduates making meaningful contributions in fields ranging from 
                medicine and engineering to arts and social entrepreneurship.
              </p>
              <p className="text-lg text-gray-700">
                As we look to the future, we remain committed to our founding principles while embracing innovation 
                and adapting to meet the evolving needs of 21st-century learners.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-gray-900">Awards & Recognition</h3>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• International School Award Winner 2023</li>
                  <li>• Best STEM Program - Regional Education Awards</li>
                  <li>• Outstanding Community Service Recognition</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-gray-900">Global Connections</h3>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Sister schools in 5 countries</li>
                  <li>• Annual international exchange programs</li>
                  <li>• UN Global Schools partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To be a globally recognized institution that nurtures confident, compassionate, and creative 
                  individuals who make positive contributions to society and embrace lifelong learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To provide an inspiring, inclusive, and innovative educational environment that empowers 
                  students to achieve academic excellence, develop strong character, and become responsible global citizens.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the dedicated professionals leading our educational mission</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">Principal</p>
                <p className="text-gray-700 italic mb-4">
                  "Education is not just about imparting knowledge; it's about igniting curiosity, fostering creativity, 
                  and building the confidence that every child needs to pursue their dreams."
                </p>
                <p className="text-sm text-gray-600">
                  Ed.D. in Educational Leadership, 20+ years in education
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. Michael Chen</h3>
                <p className="text-primary font-medium mb-4">Academic Director</p>
                <p className="text-gray-700 italic mb-4">
                  "Our role is to challenge students to think critically, question assumptions, and develop the skills 
                  they need to solve the complex problems of tomorrow."
                </p>
                <p className="text-sm text-gray-600">
                  Ph.D. in Curriculum Development, Former University Professor
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our 25-year history</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="inline-block max-w-md">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default About;
