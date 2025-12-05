import * as React from "react"
import { useState } from "react"
import QuoteForm from "../components/QuoteForm"

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-gray-50 min-h-screen p-8 md:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-xl rounded-lg">
        
        {/* HEADER / HERO SECTION - Commercial Name */}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 border-b pb-2">
          Welcome to HankCoolPro Services
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A division of <strong className="font-bold text-red-600">HANK Solutions Enterprise</strong>. We specialize in **Air Conditioner and household electrical installation and servicing**.
          We operate efficiently while prioritizing free and open-source software (FOSS).
        </p>

        {/* ENGINEERING / HOBBY SECTION - Personal Branding */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            <span className="text-blue-500 mr-2">🛰️</span> The Coolness Never Ends
          </h2>
          <p className="text-gray-600">
            Our service is backed by a disciplined approach to technical work. 
            We ensure every technical service is performed with precision and reliability.
          </p>
        </div>
        
        {/* CALL TO ACTION (CTA) */}
        <div className="mt-10 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Your Free AC Quote from HankCoolPro!
          </button>
          <p className="text-sm text-gray-500 mt-2">1-Month Service Warranty Included</p>
        </div>
        
      </div>
      
      {/* THE MODAL FORM */}
      <QuoteForm 
        isVisible={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default IndexPage;