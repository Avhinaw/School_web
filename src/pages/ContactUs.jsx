import React from "react";

const ContactUs = () => {
    return(
        <div className="bg-gray-100 p-6">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Contact Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Address</h2>
          <p className="text-lg text-gray-700">
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Phone</h2>
          <p className="text-lg text-gray-700">
            +1 (123) 456-7890
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Email</h2>
          <p className="text-lg text-gray-700">
            info@springdale.edu
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Contact Form</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="name">Name</label>
              <input 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                type="text" 
                id="name" 
                name="name" 
                required 
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
              <input 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                type="email" 
                id="email" 
                name="email" 
                required 
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                id="message" 
                name="message" 
                rows="4" 
                required 
              />
            </div>
            <div>
              <button 
                className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800" 
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-full border-0 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092!2d144.95373631568095!3d-37.81627974202162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57737677b0853c0!2s123%20Education%20Lane%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1616141486261!5m2!1sen!2sus" 
              allowFullScreen 
              loading="lazy" 
              title="Google Maps"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
    )
}

export default ContactUs;