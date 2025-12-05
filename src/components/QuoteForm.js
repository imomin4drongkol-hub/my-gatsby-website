// src/components/QuoteForm.js
import * as React from "react"

const QuoteForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Request Your Free Quote</h2>
        <p className="text-gray-600 mb-6">Let HankCoolPro know what you need. We'll get back to you within 24 hours.</p>

        {/* NETLIFY FORM INTEGRATION */}
        {/* The 'name' attribute links this to the Netlify backend */}
        <form name="QuoteRequest" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          {/* Hidden field for Netlify bots */}
          <input type="hidden" name="form-name" value="QuoteRequest" />
          <div hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Your Full Name:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email or Phone:</label>
            <input 
              type="text" 
              name="contact" 
              id="contact" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="service">Service Needed:</label>
            <textarea 
              name="service" 
              id="service" 
              rows="4" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="E.g., Chemical cleaning for 2 units, or AC is leaking water."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Submit Request
          </button>
        </form>

        <button 
          onClick={onClose} 
          className="mt-4 text-sm text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;