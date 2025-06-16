
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users, Globe, Languages, Award, BookOpen, GraduationCap, MapPin, Calendar,
  Star, Heart, Shield, Lightbulb, Target, Trophy, CheckCircle, ArrowRight,
  Play, Quote, FileText, MessageCircle, Sparkles
} from 'lucide-react';

const Index = () => {
  const stats = [
    { icon: Users, label: 'Happy Students', value: '1,250+', color: 'text-blue-600' },
    { icon: Globe, label: 'Countries Represented', value: '35+', color: 'text-green-600' },
    { icon: Languages, label: 'Languages Spoken', value: '22+', color: 'text-purple-600' },
    { icon: Award, label: 'Years of Excellence', value: '28+', color: 'text-orange-600' },
  ];

  const grades = [
    {
      title: 'Early Years',
      subtitle: 'Ages 3-6 | Nursery - KG',
      description: 'Foundation learning through play-based exploration, sensory activities, and nurturing care in a safe, loving environment.',
      icon: '🌱',
      features: ['Play-based Learning', 'Montessori Approach', 'Creative Arts', 'Social Skills']
    },
    {
      title: 'Primary School',
      subtitle: 'Ages 6-11 | Grades 1-5',
      description: 'Building core academic skills with hands-on learning, critical thinking, and character development.',
      icon: '📚',
      features: ['Cambridge Curriculum', 'STEAM Programs', 'Leadership Training', 'Global Perspectives']
    },
    {
      title: 'Middle School',
      subtitle: 'Ages 11-14 | Grades 6-8',
      description: 'Developing independence, critical thinking, and preparing for advanced academic challenges.',
      icon: '🔬',
      features: ['Advanced Sciences', 'Technology Integration', 'Model UN', 'Entrepreneurship']
    },
    {
      title: 'High School',
      subtitle: 'Ages 14-18 | Grades 9-12',
      description: 'University preparation with rigorous academics, leadership opportunities, and career guidance.',
      icon: '🎓',
      features: ['IB Diploma Programme', 'University Counseling', 'Internships', 'Global Exchanges']
    },
  ];

  const achievements = [
    { title: '98% University Acceptance', description: 'Top universities worldwide' },
    { title: 'International Accreditation', description: 'Cambridge & IB Authorized' },
    { title: '50+ Academic Awards', description: 'Regional & national recognition' },
    { title: 'Green School Certified', description: 'Sustainable campus practices' },
  ];

  const testimonials = [
    {
      quote: "Bright Future Academy doesn't just educate children; it nurtures global citizens with strong values and unlimited potential.",
      author: "Sarah Mitchell",
      role: "Parent of Grade 10 Student",
      rating: 5
    },
    {
      quote: "The teachers here truly care about each student's success. My daughter has grown academically and personally in ways I never imagined.",
      author: "Dr. Ahmed Hassan",
      role: "Parent & Medical Professional",
      rating: 5
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section with Professional Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-indigo-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-indigo-600/10"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse sm:w-32 sm:h-32"></div>
        <div className="absolute bottom-20 right-8 w-24 h-24 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000 sm:w-40 sm:h-40"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-400/8 rounded-full blur-xl animate-pulse delay-2000 sm:w-24 sm:h-24"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-2xl">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-semibold text-white">
              Ranked #1 International School
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block mb-2 text-white drop-shadow-2xl">Shaping Tomorrow's</span>
            <span className="block bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
              Global Leaders
            </span>
          </h1>
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed mb-3 font-medium">
                Where academic excellence meets character development in a
                <span className="font-bold text-blue-200"> globally-minded community</span>
              </p>
              <p className="text-base sm:text-lg text-white/80">
                Preparing students not just for exams, but for life's greatest adventures
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Button size="lg" className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1">
              <Link to="/admissions" className="flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl">
              <Link to="/campus" className="flex items-center gap-2">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                Virtual Campus Tour
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 border border-white/20 shadow-2xl hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl sm:text-4xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Cambridge Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>IB World School</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Green School Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200">
              Our Impact
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Numbers That Tell Our Story
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Over nearly three decades, we've built a legacy of excellence that speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 sm:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mb-4 sm:mb-6`}>
                    <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200">
                Principal's Message
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Our Global Learning Community
              </h2>
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 h-6 w-6 sm:h-8 sm:w-8 text-blue-200" />
                <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed pl-6 sm:pl-8">
                  "At Bright Future Academy, we believe every child has unlimited potential. Our role is to
                  unlock that potential through personalized learning, global perspectives, and unwavering support.
                  We're not just preparing students for tests – we're preparing them to change the world."
                </p>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg sm:text-xl text-gray-900">Dr. Sarah Johnson</div>
                  <div className="text-gray-600 text-sm sm:text-base">Principal & Educational Leader</div>
                  <div className="text-xs sm:text-sm text-gray-500">M.Ed Cambridge, Ph.D Educational Psychology</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900">{achievement.title}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center p-6 sm:p-8">
                <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl flex items-center justify-center mb-6 mx-auto">
                    <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Excellence Since 1996</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Nearly three decades of nurturing young minds, fostering global citizenship,
                    and building tomorrow's leaders through innovative education.
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-lg">
                <Star className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-500" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-3 shadow-lg">
                <Trophy className="h-4 w-4 sm:h-6 sm:w-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Preview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-600 border-indigo-200">
              Academic Excellence
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Learning Journeys That Transform Lives
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive curriculum is designed to challenge, inspire, and prepare students
              for success in an ever-changing global landscape
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {grades.map((grade, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="text-3xl sm:text-5xl">{grade.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{grade.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2 sm:mb-3">{grade.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{grade.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {grade.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 sm:mt-6 hover:bg-blue-600 hover:text-white transition-all duration-300" variant="outline">
                    <Link to="/academics" className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200">
              What Families Say
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Families Worldwide
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it – hear from the families who've experienced
              the transformative power of our education
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200 mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Culture Teaser Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Life at BFA
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Where Learning Comes Alive</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Beyond academics, we nurture creativity, leadership, and global citizenship through
              rich experiences that prepare students for an interconnected world
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center mb-8 sm:mb-12">
            <div className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Calendar className="h-8 w-8 sm:h-10 sm:w-10 opacity-90" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Rich Extracurriculars</h3>
              <p className="opacity-80 leading-relaxed text-sm sm:text-base">
                From robotics competitions to theater productions, Model UN to entrepreneurship clubs –
                every passion finds its perfect home and community here.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 opacity-90" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Global Connections</h3>
              <p className="opacity-80 leading-relaxed text-sm sm:text-base">
                Sister school partnerships across 6 continents, international exchange programs,
                and virtual classroom collaborations broaden every student's worldview.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 opacity-90" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Character Development</h3>
              <p className="opacity-80 leading-relaxed text-sm sm:text-base">
                Service learning, peer mentorship, and leadership opportunities develop
                compassionate global citizens committed to positive change.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-white hover:bg-white/50 border border-white/80 text-blue-500 font-semibold rounded-xl shadow-xl">
              <Link to="/student-life" className="flex items-center gap-2">
                Explore Student Life
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 sm:mb-6 bg-indigo-100 text-indigo-600 border-indigo-200 text-sm sm:text-lg px-4 sm:px-6 py-2">
            Ready to Begin?
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Your Child's Extraordinary Journey Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of learners, dreamers, and future leaders. Take the first step
            towards an education that will open doors to limitless possibilities.
          </p>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
            <Card className="text-left shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Book a Personalized Tour</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Experience our campus, meet our teachers, and see learning in action.</p>
                <Button className="w-full text-sm sm:text-base" variant="outline">
                  <Link to="/campus">Schedule Visit</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-left shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Download Our Prospectus</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Get detailed information about our programs, fees, and admission process.</p>
                <Button className="w-full text-sm sm:text-base" variant="outline">
                  <Link to="/admissions">Get Prospectus</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-left shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">Speak with Our Team</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Have questions? Our admissions counselors are here to help.</p>
                <Button className="w-full text-sm sm:text-base" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="bg-blue-600 text-white text-base sm:text-xl px-8 sm:px-12 py-3 sm:py-4 shadow-2xl hover:shadow-3xl hover:bg-blue-700">
            <Link to="/admissions" className="flex items-center gap-2 sm:gap-3">
              Apply Now - Shape Their Future
              <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
