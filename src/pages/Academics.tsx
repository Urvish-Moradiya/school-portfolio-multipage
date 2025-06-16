
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Award, Globe, Laptop, FlaskConical, Palette, Music } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      title: 'International Baccalaureate (IB)',
      description: 'Comprehensive program fostering critical thinking and global perspective',
      icon: Globe,
      features: ['Primary Years Programme (PYP)', 'Middle Years Programme (MYP)', 'Diploma Programme (DP)']
    },
    {
      title: 'Cambridge Curriculum',
      description: 'Rigorous academic standards with international recognition',
      icon: Award,
      features: ['Cambridge Primary', 'Cambridge Lower primary', 'Cambridge IGCSE', 'Cambridge A Levels']
    },
    {
      title: 'National Curriculum',
      description: 'Strong foundation in local educational standards and culture',
      icon: BookOpen,
      features: ['State Board Alignment', 'Local Language Studies', 'Cultural Integration', 'National Assessments']
    },
  ];

  const gradeStructure = [
    {
      level: 'Early Years',
      grades: 'Nursery - KG',
      age: '3-5 years',
      focus: 'Play-based Learning',
      description: 'Foundation development through exploration, creativity, and social interaction',
      subjects: ['Literacy Development', 'Numeracy Basics', 'Creative Arts', 'Physical Development', 'Social Skills'],
      icon: '🌱'
    },
    {
      level: 'Primary',
      grades: 'Grades 1-5',
      age: '6-10 years',
      focus: 'Core Skills Building',
      description: 'Establishing strong academic foundations and learning habits',
      subjects: ['English Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Arts & Crafts', 'Physical Education'],
      icon: '📚'
    },
    {
      level: 'Middle School',
      grades: 'Grades 6-8',
      age: '11-13 years',
      focus: 'Critical Thinking',
      description: 'Developing analytical skills and preparing for advanced studies',
      subjects: ['Advanced Mathematics', 'Integrated Sciences', 'Literature', 'World History', 'Technology', 'Foreign Languages'],
      icon: '🔬'
    },
    {
      level: 'High School',
      grades: 'Grades 9-12',
      age: '14-18 years',
      focus: 'College Preparation',
      description: 'Advanced coursework and specialization for university readiness',
      subjects: ['Advanced Placement Courses', 'International Baccalaureate', 'Research Projects', 'Career Guidance', 'University Counseling'],
      icon: '🎓'
    },
  ];

  const facilities = [
    { icon: FlaskConical, title: 'Science Laboratories', description: 'State-of-the-art labs for Physics, Chemistry, and Biology' },
    { icon: Laptop, title: 'Computer Labs', description: 'Modern technology centers with latest software and equipment' },
    { icon: BookOpen, title: 'Digital Library', description: 'Extensive collection of books, journals, and digital resources' },
    { icon: Palette, title: 'Arts Studios', description: 'Creative spaces for visual arts, design, and crafts' },
    { icon: Music, title: 'Music Rooms', description: 'Professional-grade facilities for vocal and instrumental music' },
    { icon: Users, title: 'Collaboration Spaces', description: 'Flexible learning environments for group work and presentations' },
  ];

  const achievements = [
    { title: '98% University Acceptance Rate', description: 'Our graduates consistently gain admission to top universities worldwide' },
    { title: 'International Science Olympiad Winners', description: 'Students regularly excel in global academic competitions' },
    { title: 'Outstanding Board Results', description: 'Consistently above-average performance in all standardized assessments' },
    { title: 'Innovation Awards', description: 'Recognition for creative thinking and problem-solving skills' },
  ];

  return (
<>
      {/* Hero Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Academic Excellence</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our comprehensive curriculum combines rigorous academics with creative exploration, 
            preparing students for success in higher education and beyond.
          </p>
        </div>
      </section>

      {/* Curriculum Framework */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Framework</h2>
            <p className="text-lg text-gray-600">
              We offer multiple pathways to ensure every student finds their ideal academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <program.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 bg-gray-50 py-1 px-3 rounded">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grade Structure</h2>
            <p className="text-lg text-gray-600">
              Age-appropriate learning progressions designed for optimal development
            </p>
          </div>

          <div className="space-y-8">
            {gradeStructure.map((grade, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-4 gap-0">
                    <div className="bg-primary text-white p-8 flex flex-col items-center justify-center">
                      <div className="text-4xl mb-2">{grade.icon}</div>
                      <h3 className="text-xl font-bold mb-1">{grade.level}</h3>
                      <p className="text-white/80">{grade.grades}</p>
                      <p className="text-sm text-white/80 ">{grade.age}</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <div className="mb-4">
                        <div className="text-lg font-semibold text-gray-900 mb-2">Focus: {grade.focus}</div>
                        <p className="text-gray-700">{grade.description}</p>
                      </div>
                    </div>
                    <div className="p-8 bg-gray-50">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Subjects</h4>
                      <ul className="space-y-1">
                        {grade.subjects.map((subject, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {subject}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Pedagogy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Approach</h2>
            <p className="text-lg text-gray-600">
              Innovative methodologies that engage, challenge, and inspire our students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Inquiry-Based Learning</h3>
                <p className="text-gray-600">
                  Students explore questions, investigate problems, and construct their own understanding 
                  through guided discovery and critical thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Project-Based Learning</h3>
                <p className="text-gray-600">
                  Real-world projects that integrate multiple subjects, develop practical skills, 
                  and prepare students for future challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Collaborative Learning</h3>
                <p className="text-gray-600">
                  Group work and peer interaction that builds communication skills, 
                  teamwork, and respect for diverse perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Integration</h3>
                <p className="text-gray-600">
                  Technology seamlessly woven into curriculum to enhance learning 
                  and prepare students for the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Differentiated Instruction</h3>
                <p className="text-gray-600">
                  Tailored teaching approaches that accommodate different learning styles, 
                  abilities, and interests of individual students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Perspectives</h3>
                <p className="text-gray-600">
                  International mindedness woven throughout the curriculum to develop 
                  cultural awareness and global citizenship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Facilities</h2>
            <p className="text-lg text-gray-600">
              Modern spaces designed to support every aspect of academic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow shadow-md">
                <CardContent className="p-6">
                  <facility.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Achievements</h2>
            <p className="text-xl opacity-90">
              Our students consistently excel and make us proud with their outstanding performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="opacity-90">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
</>
  );
};

export default Academics;
