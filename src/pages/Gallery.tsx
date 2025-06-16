
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'academics', label: 'Academics' },
    { id: 'sports', label: 'Sports' },
    { id: 'events', label: 'Events' },
    { id: 'campus', label: 'Campus' },
    { id: 'activities', label: 'Activities' },
    { id: 'arts', label: 'Arts & Culture' },
  ];

const galleryImages = [
  // Academics
  { id: 1, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754', alt: 'Students in classroom', category: 'academics', title: 'Interactive Learning' },
  { id: 2, src: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba', alt: 'Science laboratory', category: 'academics', title: 'Science Lab' },
  { id: 3, src: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481', alt: 'Computer class', category: 'academics', title: 'Digital Learning' },
  { id: 4, src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f', alt: 'Library study', category: 'academics', title: 'Library Resources' },

  // Sports
  { id: 5, src: 'https://images.unsplash.com/photo-1609422644211-a85c36ee36a7', alt: 'Football match', category: 'sports', title: 'Football Championship' },
  { id: 6, src: 'https://images.unsplash.com/photo-1573800495261-93132cc8d578', alt: 'Basketball court', category: 'sports', title: 'Basketball Training' },
  { id: 7, src: 'https://images.unsplash.com/photo-1558617320-e695f0d420de', alt: 'Swimming pool', category: 'sports', title: 'Swimming Lessons' },
  { id: 8, src: 'https://images.unsplash.com/photo-1502904550040-7534597429ae', alt: 'Athletics track', category: 'sports', title: 'Track & Field' },

  // Events
  { id: 9, src: 'https://images.unsplash.com/photo-1685944505412-c12c8bc14e60', alt: 'Annual day celebration', category: 'events', title: 'Annual Day 2024' },
  { id: 10, src: 'https://images.unsplash.com/photo-1493528237448-144452699e16', alt: 'Science fair', category: 'events', title: 'Science Exhibition' },
  { id: 11, src: 'https://images.unsplash.com/photo-1639369501176-f40a0641c91f', alt: 'Cultural festival', category: 'events', title: 'Cultural Festival' },
  { id: 12, src: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae', alt: 'Graduation ceremony', category: 'events', title: 'Graduation 2024' },

  // Campus
  { id: 13, src: 'https://images.unsplash.com/photo-1592066575517-58df903152f2', alt: 'School building', category: 'campus', title: 'Main Building' },
  { id: 14, src: 'https://images.unsplash.com/photo-1711369093144-2ada6e035a84', alt: 'Playground', category: 'campus', title: 'Playground' },
  { id: 15, src: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d', alt: 'Cafeteria', category: 'campus', title: 'Dining Hall' },
  { id: 16, src: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00', alt: 'Garden area', category: 'campus', title: 'School Garden' },

  // Activities
  { id: 17, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', alt: 'Robotics club', category: 'activities', title: 'Robotics Club' },
  { id: 18, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b', alt: 'Debate competition', category: 'activities', title: 'Debate Competition' },
  { id: 19, src: 'https://images.unsplash.com/photo-1690995443520-a5a9218db654', alt: 'Environmental club', category: 'activities', title: 'Eco Club' },
  { id: 20, src: 'https://images.unsplash.com/photo-1699743570117-91384b4b0400', alt: 'Chess tournament', category: 'activities', title: 'Chess Championship' },

  // Arts & Culture
  { id: 21, src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d', alt: 'Music performance', category: 'arts', title: 'Music Concert' },
  { id: 22, src: 'https://images.unsplash.com/photo-1561490497-43bc900ac2d8', alt: 'Art exhibition', category: 'arts', title: 'Art Gallery' },
  { id: 23, src: 'https://images.unsplash.com/photo-1596315458574-d99efaea3b3b', alt: 'Dance performance', category: 'arts', title: 'Cultural Dance' },
  { id: 24, src: 'https://images.unsplash.com/photo-1558970439-add78fc68990', alt: 'Drama production', category: 'arts', title: 'School Play' },
];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
<>
      
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            School <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Explore the vibrant life at Bright Future Academy through our photo collection
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-blue-500 hover:bg-primary/90 text-white shadow-lg' 
                    : 'hover:bg-blue-300 hover:border-blue-500'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                    <Button
                      size="sm"
                      onClick={() => setSelectedImage(image.src)}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <ZoomIn className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-gray-600">Events</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">25+</div>
              <div className="text-gray-600">Activities</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-gray-600">Memories</div>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default Gallery;
