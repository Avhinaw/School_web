import React from "react";

const Gallary = () => {
    const photos = [
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqvqj_Q7NGKkad_tsthc6mSw4KRwjECFsag&s',
          description: 'Students participating in various sports events',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQRrUmLXQSAexxRK4_08ElTcH2oWswK0aCg&s',
          description: 'Students presenting their science projects',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMK8KZ7GOlgGCPP4ACf8hp4JESzakUBdomg&s',
          description: 'Students performing in the cultural fest',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB2BjL8vCEBdBKsDW634xeNew5FmyrEbk8A&s',
          description: 'A glimpse of our interactive classrooms',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZVxsBgbWlRBkjlDsO2kCGmLyFRlkTB-sbQ&s',
          description: 'Students reading and studying in the school library',
        },
      ];
    
      const videos = [
        {
          src: 'school_tour.mp4',
          description: 'Virtual tour of Springdale Public School.',
        },
        {
          src: 'annual_function.mp4',
          description: 'Highlights from the Annual Function 2023.',
        },
      ];
    return(
        <div className="bg-gray-100 p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Gallery</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
                <img
                  src={photo.src}
                  alt={photo.description}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-lg text-gray-700">{photo.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
                <video
                  src={video.src}
                  controls
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-lg text-gray-700">{video.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    )
}

export default Gallary;