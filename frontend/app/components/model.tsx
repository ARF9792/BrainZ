// frontend/app/components/model.tsx

'use client'

import { useUser } from '@clerk/nextjs';
import { useRef, useState } from 'react';

type SetModelType = (model: boolean) => void;

export default function Model_component({ model, setmodel }: {
  model: boolean,
  setmodel: SetModelType
}) {
  const { user, isLoaded } = useUser();
  const [loading, setloading] = useState(false);

  const titleref = useRef<HTMLInputElement>(null);
  const urlref = useRef<HTMLInputElement>(null);
  
  
  const noteref = useRef<HTMLTextAreaElement>(null);

  if (!isLoaded) return <div>Loading...</div>;

  async function db_adder() {
    setloading(true)
    const title = titleref.current?.value;
    const url = urlref.current?.value;
    const note = noteref.current?.value;
    const userid = user?.id;
  
    if (!title || !note || !userid || !url) {
      alert("Please fill all required fields.");
      setloading(false);
      return;
    }
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          card: {
            title,
            url,
            note,
          },
          id: userid,
        }),
      });
  
      await response.text();
      setloading(false)
      if (response.ok) {
        setmodel(false);
      }
    } catch (error) {
      console.error("Error adding card:", error);
      alert("Failed to add card.");
      setloading(false);
    }
  }      

  function model_remover(){
    setmodel(false)
  }

  if(!loading){
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto transform transition-all">
          
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Add New Card</h2>
            </div>
            <button
              onClick={model_remover}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          
          <div className="p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                ref={titleref}
                id="title"
                type="text"
                placeholder="Enter a descriptive title"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                URL <span className="text-red-500">*</span>
              </label>
              <input
                ref={urlref}
                id="url"
                type="url"
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            
            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-2">
                Notes <span className="text-red-500">*</span>
              </label>
              <textarea
                ref={noteref}
                id="note"
                rows={4}
                placeholder="Add your thoughts, insights, or key takeaways..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
              />
            </div>
          </div>
          
          
          <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <button
              onClick={model_remover}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={db_adder}
              className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Card
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Creating your card...</h3>
          <p className="text-gray-600">This will just take a moment</p>
        </div>
      </div>
    )
  }
}