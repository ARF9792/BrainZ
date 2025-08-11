import React from 'react';
import { Brain, Sparkles, Zap, ArrowRight, BookOpen, Target, Users } from 'lucide-react';
import { GetStartedButton } from '../components/GetStartedButton';
import { SignInButton } from '../components/SignInButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-2xl animate-float-slow"></div>
        </div>
      </div>
      
      <nav className="relative z-20 px-4 sm:px-6 py-4 backdrop-blur-sm bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrainZ
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">Features</a>
            <SignInButton />
          </div>
        </div>
      </nav>

     
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            
            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 animate-bounce delay-100">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 drop-shadow-lg" />
            </div>
            <div className="absolute top-20 sm:top-32 right-4 sm:right-20 animate-bounce delay-300">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 drop-shadow-lg" />
            </div>
            <div className="absolute top-32 sm:top-40 left-1/4 animate-bounce delay-500 hidden sm:block">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 drop-shadow-lg" />
            </div>

            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium mb-6 sm:mb-8 animate-fade-in border border-blue-200/50 shadow-lg backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Your Second Brain, Supercharged
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 animate-slide-up leading-tight">
                Never Lose a Link Again.
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient drop-shadow-sm">
                  Just Save, Search, and Chat.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200 px-4">
                Brainz transforms your saved links into intelligent cards. Use natural language to find exactly what you need, and chat with our AI to get instant summaries and answers from your saved content.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
                <GetStartedButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-white/60 backdrop-blur-md border-t border-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrainZ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Go beyond simple bookmarking. BrainZ offers a smarter way to manage your Personal Knowledge Space with features designed for recall and deep understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Effortless Saving */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm group-hover:blur-none"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-700 border border-gray-100/50 hover:border-blue-200/50 h-full flex flex-col">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon container */}
                  <div className="mb-8">
                    <div className="relative inline-flex">
                      <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                        <Brain className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse shadow-md"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      Effortless Saving
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg group-hover:text-gray-700 transition-colors duration-300 flex-1">
                      Save any URL and add your notes in seconds. We&apos;ll organize it into a neat, easy-to-find card so you can build your personal knowledge base without the clutter.
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - AI-Powered Search */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm group-hover:blur-none"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-700 border border-gray-100/50 hover:border-purple-200/50 h-full flex flex-col">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon container */}
                  <div className="mb-8">
                    <div className="relative inline-flex">
                      <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                        <Target className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse shadow-md"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      AI-Powered Search
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg group-hover:text-gray-700 transition-colors duration-300 flex-1">
  Forget trying to remember exact titles. Search your saved cards using everyday language. Just ask, &quot;find that article about space from last week&quot; and let BrainZ do the rest.
</p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Chat with Your Cards */}
            <div className="group relative md:col-span-2 xl:col-span-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm group-hover:blur-none"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-700 border border-gray-100/50 hover:border-pink-200/50 h-full flex flex-col">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon container */}
                  <div className="mb-8">
                    <div className="relative inline-flex">
                      <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                        <Users className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-pulse shadow-md"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-700 transition-colors duration-300">
                      Chat with Your Cards
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg group-hover:text-gray-700 transition-colors duration-300 flex-1">
                      Have a question about a saved link? Chat directly with our AI to get summaries, key takeaways, or specific information from the content without having to re-read the entire thing.
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="relative z-10 px-4 sm:px-6 py-12 bg-gradient-to-r from-gray-50 to-blue-50/30 border-t border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-6 h-6 text-blue-600 hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BrainZ</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-all duration-200 hover:scale-105 font-medium">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-all duration-200 hover:scale-105 font-medium">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-all duration-200 hover:scale-105 font-medium">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200/50 text-center text-gray-500">
            <p>&copy; 2025 BrainZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
