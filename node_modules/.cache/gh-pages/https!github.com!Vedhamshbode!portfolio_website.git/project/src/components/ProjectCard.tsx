import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  images,
  tags,
  liveUrl,
  githubUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <div 
        className={`project-card bg-white rounded-xl shadow-lg overflow-hidden ${
          isHovered && !isExpanded ? 'transform scale-105' : ''
        } cursor-pointer`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 transform scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
  <>
    <div
      className="project-overlay fixed inset-0 bg-black/70 z-40"
      onClick={handleClick}
    ></div>

    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="project-card-expanded bg-white rounded-xl shadow-2xl flex max-w-[90vw] max-h-[90vh] w-[90vw] h-[90vh] overflow-hidden">
        
        {/* Left - Image Slider (75%) */}
        <div className="relative w-3/4 h-full">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full object-cover object-center transition-all duration-500"
          />

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
                onClick={handlePrev}
              >
                ‹
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
                onClick={handleNext}
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Right - Info (25%) */}
        <div className="relative w-1/4 h-full p-6 overflow-y-auto">
          <button
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            onClick={handleClick}
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            {description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
)}

    </>
  );
};

export default ProjectCard;