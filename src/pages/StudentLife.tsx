
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Trophy, Globe, Calendar, Camera, Music, FlaskConical,BookOpen, Palette, Dumbbell, Heart } from 'lucide-react';

const StudentLife = () => {
  const clubs = [
    { name: 'Robotics Club', category: 'STEM', icon: FlaskConical, members: 45, description: 'Build and program robots for competitions' },
    { name: 'Debate Society', category: 'Academic', icon: Users, members: 35, description: 'Develop public speaking and critical thinking' },
    { name: 'Music Ensemble', category: 'Arts', icon: Music, members: 60, description: 'Orchestra, band, and choir performances' },
    { name: 'Art Studio', category: 'Creative', icon: Palette, members: 40, description: 'Painting, sculpture, and digital arts' },
    { name: 'Drama Club', category: 'Performing Arts', icon: Users, members: 30, description: 'Theater productions and acting workshops' },
    { name: 'Environmental Club', category: 'Service', icon: Heart, members: 25, description: 'Sustainability projects and awareness campaigns' },
    { name: 'Sports Teams', category: 'Athletics', icon: Dumbbell, members: 120, description: 'Basketball, soccer, swimming, tennis, and more' },
    { name: 'Literary Society', category: 'Academic', icon: BookOpen, members: 28, description: 'Creative writing and literary discussions' },
  ];

  const events = [
    {
      title: 'Annual Sports Day',
      date: 'November 15-16',
      description: 'Two days of athletic competitions, team spirit, and celebration of sportsmanship',
      image: '🏃‍♂️',
      highlights: ['Inter-house competitions', 'Parent participation', 'Awards ceremony', 'Cultural performances']
    },
    {
      title: 'International Cultural Festival',
      date: 'March 20-22',
      description: 'Celebrating our diverse community with food, music, dance, and traditions from around the world',
      image: '🌍',
      highlights: ['Cultural performances', 'International food court', 'Traditional costumes', 'Language exhibitions']
    },
    {
      title: 'Science & Innovation Fair',
      date: 'January 10-12',
      description: 'Student-led research projects, inventions, and scientific discoveries on display',
      image: '🔬',
      highlights: ['Student research projects', 'Guest scientists', 'Innovation showcase', 'STEM workshops']
    },
    {
      title: 'Arts Showcase',
      date: 'May 5-7',
      description: 'Exhibition of student artwork, performances, and creative expressions across all disciplines',
      image: '🎨',
      highlights: ['Art exhibitions', 'Live performances', 'Student concerts', 'Creative writing readings']
    },
  ];

  const studentCouncil = [
    { position: 'Head Boy', name: 'Alex Thompson', grade: 'Grade 12', initiatives: ['Peer mentoring program', 'Digital learning resources'] },
    { position: 'Head Girl', name: 'Priya Sharma', grade: 'Grade 12', initiatives: ['Environmental sustainability', 'Student wellness program'] },
    { position: 'Sports Captain', name: 'Michael Chen', grade: 'Grade 11', initiatives: ['Inclusive sports programs', 'Health and fitness campaigns'] },
    { position: 'Arts Captain', name: 'Sofia Rodriguez', grade: 'Grade 11', initiatives: ['Community art projects', 'Cultural exchange programs'] },
  ];

  const globalPrograms = [
    {
      title: 'Sister School Exchange',
      location: 'Japan, Germany, Australia',
      duration: '2-4 weeks',
      description: 'Students live with host families and attend classes at our partner schools'
    },
    {
      title: 'Model United Nations',
      location: 'International Conferences',
      duration: 'Year-round',
      description: 'Participate in MUN conferences worldwide, developing diplomacy and global awareness'
    },
    {
      title: 'Service Learning Trips',
      location: 'Various Countries',
      duration: '1-2 weeks',
      description: 'Community service projects combined with cultural immersion experiences'
    },
    {
      title: 'Language Immersion',
      location: 'France, Spain, China',
      duration: '3-6 weeks',
      description: 'Intensive language learning programs in native-speaking countries'
    },
  ];

  return (
<>
      {/* Hero Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Life</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Beyond academics, our vibrant community offers countless opportunities for growth, 
            leadership, creativity, and lifelong friendships.
          </p>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clubs & Activities</h2>
            <p className="text-lg text-gray-600">
              Over 50 clubs and activities to explore your interests and discover new passions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-md">
                <CardHeader className="text-center pb-2">
                  <club.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{club.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{club.category}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-3">{club.description}</p>
                  <div className="text-xs text-gray-500">
                    <Users className="h-3 w-3 inline mr-1" />
                    {club.members} members
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">View All Clubs & Activities</Button>
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Events</h2>
            <p className="text-lg text-gray-600">
              Memorable celebrations that bring our community together throughout the year
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
                    <div className="text-4xl mb-3">{event.image}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Leadership</h2>
            <p className="text-lg text-gray-600">
              Our Student Council provides opportunities for leadership, representation, and positive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {studentCouncil.map((leader, index) => (
              <Card key={index} className="text-center border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-1">{leader.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{leader.grade}</p>
                  <div className="text-xs text-gray-600">
                    <p className="font-medium mb-1">Key Initiatives:</p>
                    {leader.initiatives.map((initiative, idx) => (
                      <p key={idx}>• {initiative}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Student Government</h3>
            <p className="text-gray-700 mb-4">
              Elections are held annually. All students are encouraged to participate either as candidates or voters.
            </p>
            <Button variant="outline">Learn About Elections</Button>
          </div>
        </div>
      </section>
</>
  );
};

export default StudentLife;
