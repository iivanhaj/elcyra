import React from 'react';
import course1Image from '../images/book.html';
import course2Image from '../images/science.png';
import course3Image from '../images/robot.jpeg';
import course4Image from '../images/image4.jpeg';

const Courses = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
        <p className="text-lg">Explore our range of courses.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Course 1 */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-sm">
          <img className="w-full" src={course1Image} alt="Course 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Course 1 Name</div>
            <p className="text-gray-300 text-base">
              Course 1 description goes here. Describe what the course is about and its key features.
            </p>
            <a href="/course1" className="text-blue-500">Learn More</a>
          </div>
        </div>
        
        {/* Course 2 */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-sm">
          <img className="w-full" src={course2Image} alt="Course 2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Course 2 Name</div>
            <p className="text-gray-300 text-base">
              Course 2 description goes here. Describe what the course is about and its key features.
            </p>
            <a href="/course2" className="text-blue-500">Learn More</a>
          </div>
        </div>

        {/* Course 3 */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-sm">
          <img className="w-full" src={course3Image} alt="Course 3" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Course 3 Name</div>
            <p className="text-gray-300 text-base">
              Course 3 description goes here. Describe what the course is about and its key features.
            </p>
            <a href="/course3" className="text-blue-500">Learn More</a>
          </div>
        </div>

        {/* Course 4 */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-sm">
          <img className="w-full" src={course4Image} alt="Course 4" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Course 4 Name</div>
            <p className="text-gray-300 text-base">
              Course 4 description goes here. Describe what the course is about and its key features.
            </p>
            <a href="/course4" className="text-blue-500">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
