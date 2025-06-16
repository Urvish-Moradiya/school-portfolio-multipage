import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, Calendar, FileText, Users, Phone, Download, Clock, Award, 
  DollarSign, Heart, ArrowRight, Star, Globe, Shield, Target
} from 'lucide-react';

const Admissions = () => {
  const whyChooseUs = [
    { icon: Award, title: 'Academic Excellence', description: '98% university acceptance rate with graduates attending top institutions worldwide' },
    { icon: Users, title: 'Small Class Sizes', description: 'Maximum 20 students per class ensuring personalized attention and support' },
    { icon: Heart, title: 'Holistic Development', description: 'Focus on character building, leadership skills, and emotional intelligence' },
    { icon: Clock, title: 'Proven Track Record', description: '25+ years of educational excellence with thousands of successful alumni' },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Initial Inquiry',
      description: 'Submit your interest form or contact our admissions team',
      icon: Phone,
      timeline: 'Anytime'
    },
    {
      step: 2,
      title: 'School Visit',
      description: 'Schedule a campus tour and meet with our counselors',
      icon: Users,
      timeline: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Application Submission',
      description: 'Complete application form with required documents',
      icon: FileText,
      timeline: 'Ongoing'
    },
    {
      step: 4,
      title: 'Assessment & Interview',
      description: 'Student assessment and parent-student interview',
      icon: CheckCircle,
      timeline: '2-3 weeks'
    },
    {
      step: 5,
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment information',
      icon: Award,
      timeline: '1 week'
    },
  ];

  const ageCriteria = [
    { level: 'Nursery', age: '3 years', cutoffDate: 'March 31st' },
    { level: 'Pre-KG', age: '4 years', cutoffDate: 'March 31st' },
    { level: 'KG', age: '5 years', cutoffDate: 'March 31st' },
    { level: 'Grade 1', age: '6 years', cutoffDate: 'March 31st' },
    { level: 'Grade 2-12', age: 'Age appropriate', cutoffDate: 'Subject to evaluation' },
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'October 1, 2024', status: 'open' },
    { event: 'Campus Open Day', date: 'November 15, 2024', status: 'upcoming' },
    { event: 'Early Admission Deadline', date: 'December 31, 2024', status: 'upcoming' },
    { event: 'Final Application Deadline', date: 'February 28, 2025', status: 'upcoming' },
    { event: 'Admission Results', date: 'March 15, 2025', status: 'upcoming' },
    { event: 'New Student Orientation', date: 'April 1, 2025', status: 'upcoming' },
  ];

  const feeStructure = [
    { level: 'Early Years (N-KG)', admission: '$500', annual: '$8,000', additional: 'Meals, Transport' },
    { level: 'Primary (1-5)', admission: '$750', annual: '$10,000', additional: 'Meals, Transport, Activities' },
    { level: 'Middle (6-8)', admission: '$1,000', annual: '$12,000', additional: 'Meals, Transport, Lab Fees' },
    { level: 'High School (9-12)', admission: '$1,250', annual: '$15,000', additional: 'Meals, Transport, Exam Fees' },
  ];

  return (
<>
      {/* Hero Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Community</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Begin your child's journey of excellence with us. We're here to guide you through 
            every step of the admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Application</Button>
            <Button size="lg" className="bg-white hover:bg-white/50 border border-white/80 text-blue-500 font-semibold rounded-xl shadow-xl">Schedule a Visit</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Bright Future Academy?</h2>
            <p className="text-lg text-gray-600">
              Discover what makes us the preferred choice for families seeking educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg shadow-md transition-shadow">
                <CardContent className="p-6">
                  <reason.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-gray-800">Admission Process</h2>
      <p className="text-lg text-gray-500 mt-2">
        A clear and simple process for you and your child
      </p>
    </div>

    <div className="space-y-6">
      {admissionSteps.map((step, index) => (
        <div
          key={index}
          className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="grid md:grid-cols-4 gap-0">
            <div className="bg-blue-200 p-6 flex flex-col items-center justify-center">
              <div className="text-xl font-medium text-gray-800 mb-1">Step {step.step}</div>
              <step.icon className="h-6 w-6 text-gray-600" />
            </div>
            <div className="md:col-span-2 p-6">
              <h3 className="text-lg font-medium text-gray-800">{step.title}</h3>
              <p className="text-gray-500 mt-1">{step.description}</p>
            </div>
            <div className="p-6 flex items-center bg-gray-100 justify-center">
              <div className="text-center">
                <Clock className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-800">Timeline</p>
                <p className="text-sm text-gray-500">{step.timeline}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Age Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Age Criteria</h2>
            <p className="text-lg text-gray-600">
              Age requirements for admission to different grade levels
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade Level</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Requirement</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cut-off Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {ageCriteria.map((criteria, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{criteria.level}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{criteria.age}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{criteria.cutoffDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-lg text-gray-600">
              Key dates for the 2025-26 academic year admission cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {importantDates.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant={item.status === 'open' ? 'default' : 'outline'}>
                      {item.status === 'open' ? 'Open' : 'Upcoming'}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.event}</h3>
                  <p className="text-primary font-medium">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing with flexible payment options available
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade Level</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admission Fee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Tuition</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Additional Costs</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {feeStructure.map((fee, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.level}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.admission}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{fee.annual}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{fee.additional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 text-green-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Plans</h3>
                  <p className="text-gray-600 text-sm">Flexible quarterly and monthly payment options available</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Scholarships</h3>
                  <p className="text-gray-600 text-sm">Merit-based and need-based financial assistance programs</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-purple-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Sibling Discount</h3>
                  <p className="text-gray-600 text-sm">10% discount for second child, 15% for third child and beyond</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default Admissions;
