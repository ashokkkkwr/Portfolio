import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        <i className="fas fa-briefcase mr-2"></i>Experience
      </h2>
      <div className="relative w-11/12 mx-auto">
        <div className="before:absolute before:w-1 before:h-full before:bg-gray-300 before:top-0 before:left-1/2 before:-ml-0.5"></div>
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`relative flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="w-5/12"></div>
              <div className={`flex w-7/12 items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className="relative w-full bg-white p-6 rounded-lg shadow-lg">
                  <div className="absolute top-1/2 -ml-1 w-6 h-6 bg-gray-100 border-2 border-gray-300 rounded-full transform -translate-y-1/2"></div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{item.company}</h2>
                    <h3 className="text-lg font-medium mt-1">{item.position}</h3>
                    <p className="text-gray-500 mt-2">{item.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <a href="/experience" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
          View All <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </section>
  );
};

const experienceData = [
  {
    company: 'Self Employed',
    position: 'Full Stack Developer',
    duration: 'Oct 2021 - present',
  },
  {
    company: 'Mapstreak Flyseas',
    position: 'Web Developer | Internship',
    duration: 'June 2021 - Dec 2021',
  },
  {
    company: 'The Spark Foundation',
    position: 'Website Developer | Internship',
    duration: 'May 2021 - June 2021',
  },
  {
    company: 'The Spark Foundation',
    position: 'Mobile Application Developer | Internship',
    duration: 'April 2021 - May 2021',
  },
  {
    company: 'Frshr Technologies',
    position: 'Wordpress Developer | Internship',
    duration: 'April 2021 - April 2021',
  },
  {
    company: 'WonderingBlog',
    position: 'Web Development & SEO | Internship',
    duration: 'March 2021 - April 2021',
  },
];

export default Experience;
