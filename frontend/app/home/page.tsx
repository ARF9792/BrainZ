"use client";

import { SignOutButton } from "@clerk/nextjs";
import Model_component from "../components/model";
import { useEffect, useState, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import YouTubeEmbed from "../components/video";
import TweetEmbed from "../components/tweet";
import URLPreview from "../components/urlpreview";
import ChatInterface from "../components/ai_interface";

// --- CHANGE 1: Add _id to the Card interface ---
interface Card {
  _id: string; 
  title: string;
  url: string;
  note: string;
  user: string;
  embedding: number[];
}

export default function CardsView() {
  const [model, setModel] = useState(false);
  const [ui2, setUi2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [matched, setMatch] = useState<Card[]>([]);
  const [activeChatCard, setActiveChatCard] = useState<Card | null>(null);
  const { user, isLoaded } = useUser();
  const searchRef = useRef<HTMLInputElement>(null);

  const userId = user?.id;

  const [cards, setCards] = useState<Card[]>([]);

  // Fetching cards
  useEffect(() => {
    if (!isLoaded || !userId) return;

    fetch(`https://brainz-backend-mtvb.onrender.com/display-cards?id=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => {
        console.error("Error finding cards:", error);
      });
  }, [isLoaded, userId, model]);

  // --- CHANGE 2: Add the handleDelete function ---
 // Corrected frontend function
async function handleDelete(cardId: string) {
  // if (!window.confirm("Are you sure you want to delete this card?")) {
  //   return;
  // }

  try {
    // FIX: Use the DELETE method and put the ID in the URL path
    const response = await fetch(`https://brainz-backend-mtvb.onrender.com/delete-card/${cardId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the card.");
    }

    setCards(cards.filter(card => card._id !== cardId));
    setMatch(matched.filter(card => card._id !== cardId));

  } catch (error) {
    console.error(error);
    alert("Error deleting card.");
  }
}

  const renderModel = () => {
    setModel(true);
  };

  // ... (your getYouTubeVideoId, getTweetId, searchHandler, and uiChanger functions)
  function getYouTubeVideoId(url: string | undefined) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  function getTweetId(url: string | undefined) {
    if (!url) return null;
    const match = url.match(
      /twitter\.com\/\w+\/status\/(\d+)|x\.com\/\w+\/status\/(\d+)/
    );
    return match ? match[1] || match[2] : null;
  }
  async function searchHandler() {
    setUi2(true);
    setLoading(true);

    const query = searchRef.current?.value;
    try {
      const response = await fetch("https://brainz-backend-mtvb.onrender.com/query-embedding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query, // extra field if needed
        }),
      });

      const message = await response.json(); // This will be the query embedding

      const searchResponse = await fetch("https://brainz-backend-mtvb.onrender.com/search-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ queryEmbedding: message,
          userId:userId,
         }),
      });

      const matchedCards = await searchResponse.json();
      setLoading(false);
      setMatch(matchedCards);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  }
  function uiChanger() {
    setUi2(false);
    setActiveChatCard(null); 
  }


  if (!ui2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Integrated Rounded Transparent Topbar */}
        <div className="sticky top-0 z-40 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-6">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Logo and Title Section */}
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-2xl font-bold text-gray-900">BrainZ</h1>
                    <p className="text-sm text-gray-600">{cards.length} cards</p>
                  </div>
                </div>
                
                {/* Search Section - Now Integrated */}
                <div className="flex-1 w-full max-w-2xl">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-900 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search your cards with AI..."
                      className="block w-full pl-12 pr-28 py-4 text-base border border-gray-200/60 rounded-2xl leading-6 bg-white/60 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400/60 focus:bg-white/90 focus:shadow-lg hover:bg-white/70 hover:border-gray-300/70 transition-all duration-300 text-gray-900 font-medium shadow-sm"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          searchHandler();
                        }
                      }}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        onClick={searchHandler}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {/* <span className="ml-2 hidden sm:block">Search</span> */}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <button
                    onClick={renderModel}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-2xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="hidden sm:block">Add Card</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                  
                  <SignOutButton>
                    <button className="inline-flex items-center px-4 py-3 border border-gray-300/50 text-sm font-medium rounded-2xl text-gray-700 bg-white/60 hover:bg-white/80 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="ml-2 hidden sm:block">Logout</span>
                    </button>
                  </SignOutButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 mt-10">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={card._id} // Use the unique _id as the key
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full overflow-hidden rounded-t-2xl">
                  {(card.url.includes("youtube.com") ||
                  card.url.includes("youtu.be")) ? (
                    <div className="h-48 bg-gray-100">
                      <YouTubeEmbed
                        videoId={getYouTubeVideoId(card.url)}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  ) : (card.url.includes("twitter.com") ||
                    card.url.includes("x.com")) ? (
                    <div className="h-80 overflow-y-auto bg-gray-50">
                      <TweetEmbed tweetId={getTweetId(card.url)} />
                    </div>
                  ) : (
                    <div className="h-20 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center">
                      <URLPreview url={card.url} title={card.title} />
                    </div>
                  )}
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 flex-1 mb-4">
                    {card.note}
                  </p>
                  
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => setActiveChatCard(card)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Chat with AI
                    </button>
                    <button
                      onClick={() => handleDelete(card._id)}
                      className="px-3 py-2 border border-red-200 text-xs font-medium rounded-lg text-red-600 bg-red-50 hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {cards.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No cards yet</h3>
              <p className="text-gray-600 mb-6">Start building your collection by adding your first card</p>
              <button
                onClick={renderModel}
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Your First Card
              </button>
            </div>
          )}
        </div>
        
        {/* Modals */}
        {model && <Model_component model={model} setmodel={setModel} />}
        {activeChatCard && (
          <ChatInterface
            cardContext={activeChatCard}
            onClose={() => setActiveChatCard(null)}
          />
        )}
      </div>
    );
  } else {
    if (loading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Searching...</h3>
                <p className="text-gray-600">Finding relevant cards for you</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (matched.length === 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-sm text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all cards</p>
            <button
              onClick={uiChanger}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Cards
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          {/* Search Results Topbar */}
          <div className="sticky top-0 z-40 p-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={uiChanger}
                      className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 bg-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </button>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div >
                      <h1 className="text-xl font-bold text-gray-900 mx-auto">Search Results</h1>
                      <p className="text-sm text-gray-600">{matched.length} cards found</p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>

          {/* Search Results Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {matched.map((card) => (
                <div
                  key={card._id}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full overflow-hidden rounded-t-2xl">
                    {(card.url?.includes("youtube.com") ||
                    card.url?.includes("youtu.be")) ? (
                      <div className="h-48 bg-gray-100">
                        <YouTubeEmbed
                          videoId={getYouTubeVideoId(card.url)}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    ) : (card.url?.includes("twitter.com") ||
                      card.url?.includes("x.com")) ? (
                      <div className="h-80 overflow-y-auto bg-gray-50">
                        <TweetEmbed tweetId={getTweetId(card.url)} />
                      </div>
                    ) : (
                      <div className="h-20 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center">
                        <URLPreview url={card.url} title={card.title} />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-1 mb-4">
                      {card.note}
                    </p>
                    
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setActiveChatCard(card)}
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Chat with AI
                      </button>
                      <button
                        onClick={() => handleDelete(card._id)}
                        className="px-3 py-2 border border-red-200 text-xs font-medium rounded-lg text-red-600 bg-red-50 hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {model && <Model_component model={model} setmodel={setModel} />}
          {activeChatCard && (
            <ChatInterface
              cardContext={activeChatCard}
              onClose={() => setActiveChatCard(null)}
            />
          )}
        </div>
      );
    }
  }
}