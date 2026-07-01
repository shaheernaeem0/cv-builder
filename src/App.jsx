import { useState } from 'react';
import { DownloadButton } from './components/DownloadButton';

function App() {
  // State for CV data
  const [cvData, setCvData] = useState({
    fullName: 'John Doe',
    jobTitle: 'Full Stack Developer',
    email: 'john@example.com',
    phone: '+92 300 1234567',
    address: 'Karachi, Pakistan',
    summary: 'Experienced developer with 5+ years in web development. Passionate about creating beautiful and functional applications.',
    experience: [
      {
        company: 'Tech Solutions Inc.',
        role: 'Senior Developer',
        startDate: '2021',
        endDate: 'Present',
        description: 'Building enterprise applications using React and Node.js.',
      },
      {
        company: 'Web Agency',
        role: 'Junior Developer',
        startDate: '2019',
        endDate: '2021',
        description: 'Developed responsive websites for clients.',
      },
    ],
    education: [
      {
        degree: 'BS Computer Science',
        institute: 'University of Karachi',
        year: '2019',
      },
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'],
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCvData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle experience changes
  const handleExperienceChange = (index, field, value) => {
    const updatedExp = [...cvData.experience];
    updatedExp[index][field] = value;
    setCvData(prev => ({
      ...prev,
      experience: updatedExp
    }));
  };

  // Handle education changes
  const handleEducationChange = (index, field, value) => {
    const updatedEdu = [...cvData.education];
    updatedEdu[index][field] = value;
    setCvData(prev => ({
      ...prev,
      education: updatedEdu
    }));
  };

  // Add new experience
  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: '', role: '', startDate: '', endDate: '', description: '' }
      ]
    }));
  };

  // Add new education
  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: '', institute: '', year: '' }
      ]
    }));
  };

  // Remove experience
  const removeExperience = (index) => {
    const updatedExp = cvData.experience.filter((_, i) => i !== index);
    setCvData(prev => ({
      ...prev,
      experience: updatedExp
    }));
  };

  // Remove education
  const removeEducation = (index) => {
    const updatedEdu = cvData.education.filter((_, i) => i !== index);
    setCvData(prev => ({
      ...prev,
      education: updatedEdu
    }));
  };

  // Handle skills
  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s);
    setCvData(prev => ({
      ...prev,
      skills: skillsArray
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold">📄 CV Builder</h1>
          <p className="text-blue-100 mt-1">Create your professional CV in minutes</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🧑</span> Personal Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={cvData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={cvData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Stack Developer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={cvData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={cvData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={cvData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Karachi, Pakistan"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                  <textarea
                    name="summary"
                    value={cvData.summary}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Write your professional summary..."
                  />
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">💼</span> Work Experience
              </h2>
              
              {cvData.experience.map((exp, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-700">Experience #{index + 1}</h3>
                    {cvData.experience.length > 1 && (
                      <button
                        onClick={() => removeExperience(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        ✕ Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Role / Position"
                      value={exp.role}
                      onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Start Date"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="End Date"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <textarea
                      placeholder="Description"
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
              
              <button
                onClick={addExperience}
                className="w-full py-2 border-2 border-dashed border-blue-400 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                + Add Experience
              </button>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎓</span> Education
              </h2>
              
              {cvData.education.map((edu, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-700">Education #{index + 1}</h3>
                    {cvData.education.length > 1 && (
                      <button
                        onClick={() => removeEducation(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        ✕ Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Degree / Qualification"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Institute / University"
                      value={edu.institute}
                      onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Year of Completion"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
              
              <button
                onClick={addEducation}
                className="w-full py-2 border-2 border-dashed border-blue-400 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                + Add Education
              </button>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🛠️</span> Skills
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter skills (comma separated)
                </label>
                <input
                  type="text"
                  value={cvData.skills.join(', ')}
                  onChange={handleSkillsChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="React, JavaScript, Tailwind CSS, Node.js"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {cvData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Preview & Download */}
          <div className="space-y-6">
            {/* CV Preview */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">👀</span> CV Preview
              </h2>
              
              <div className="border rounded-lg p-6 bg-gray-50">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 -m-6 p-6 mb-6 rounded-t-lg">
                  <h2 className="text-2xl font-bold text-white text-center">
                    {cvData.fullName || 'Your Name'}
                  </h2>
                  <p className="text-blue-100 text-center">
                    {cvData.jobTitle || 'Job Title'}
                  </p>
                </div>
                
                {/* Contact */}
                <div className="space-y-1 text-sm mb-4">
                  <p>📧 {cvData.email || 'email@example.com'}</p>
                  <p>📱 {cvData.phone || '+92 300 0000000'}</p>
                  <p>📍 {cvData.address || 'City, Country'}</p>
                </div>
                
                {/* Summary */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 text-sm">📝 Summary</h3>
                  <p className="text-gray-600 text-sm">{cvData.summary || 'Your summary here...'}</p>
                </div>
                
                {/* Experience */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 text-sm">💼 Experience</h3>
                  {cvData.experience.map((exp, index) => (
                    <div key={index} className="mt-2">
                      <p className="font-medium text-sm">{exp.company || 'Company'}</p>
                      <p className="text-sm text-gray-600">{exp.role || 'Role'} | {exp.startDate || 'Start'} - {exp.endDate || 'End'}</p>
                      <p className="text-sm text-gray-500">{exp.description || 'Description'}</p>
                    </div>
                  ))}
                </div>
                
                {/* Education */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 text-sm">🎓 Education</h3>
                  {cvData.education.map((edu, index) => (
                    <div key={index} className="mt-2">
                      <p className="font-medium text-sm">{edu.degree || 'Degree'}</p>
                      <p className="text-sm text-gray-600">{edu.institute || 'Institute'} | {edu.year || 'Year'}</p>
                    </div>
                  ))}
                </div>
                
                {/* Skills */}
                <div>
                  <h3 className="font-semibold text-gray-700 text-sm">🛠️ Skills</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {cvData.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Download Button */}
              <div className="mt-6">
                <DownloadButton cvData={cvData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;