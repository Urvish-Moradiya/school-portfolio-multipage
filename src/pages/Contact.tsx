
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, GraduationCap, Building, Calendar, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', inquiry: '', message: '' });
  };

  const contactCards = [
    {
      icon: MessageCircle,
      title: 'General Inquiry',
      description: 'Questions about our school and programs',
      contact: 'info@brightfutureacademy.edu',
      phone: '+1 (555) 123-4567',
      color: 'border-l-blue-500'
    },
    {
      icon: Users,
      title: 'Admissions',
      description: 'Application process and enrollment',
      contact: 'admissions@brightfutureacademy.edu',
      phone: '+1 (555) 123-4568',
      color: 'border-l-green-500'
    },
    {
      icon: GraduationCap,
      title: 'Academic Affairs',
      description: 'Curriculum and student progress',
      contact: 'academic@brightfutureacademy.edu',
      phone: '+1 (555) 123-4569',
      color: 'border-l-purple-500'
    },
    {
      icon: Building,
      title: 'Career Opportunities',
      description: 'Teaching and staff positions',
      contact: 'careers@brightfutureacademy.edu',
      phone: '+1 (555) 123-4570',
      color: 'border-l-orange-500'
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
<>
      
      {/* Hero Section */}
      <section className="py-20  bg-blue-50  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any questions, 
            admissions inquiries, or to schedule a campus visit.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach us based on your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <Card key={index} className={`border-l-4 ${card.color} hover:shadow-lg transition-shadow`}>
                <CardHeader className="text-center">
                  <card.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-gray-700">{card.contact}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-gray-700">{card.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className='p-6'>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid md:grid-cols-1 gap-3">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1 gap-3">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select onValueChange={(value) => setFormData({...formData, inquiry: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="academics">Academic Programs</SelectItem>
                          <SelectItem value="campus">Campus Tour</SelectItem>
                          <SelectItem value="careers">Career Opportunities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please tell us about your inquiry..."
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-3">
              {/* Address & Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Visit Our Campus</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700">
                      123 Education Street<br />
                      Knowledge City, KC 12345<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-700">info@brightfutureacademy.edu</p>
                  </div>

                  <Button className="w-full" variant="outline">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Emergency contact available 24/7 for enrolled families
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Located in the heart of Knowledge City</p>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center p-8">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Campus Map</h3>
                  <p className="text-gray-600 mb-4">Click to view detailed directions and campus layout</p>
                  <Button>View Map</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
</>
  );
};

export default Contact;
