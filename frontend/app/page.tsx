import React from 'react';
import { Brain, Sparkles, Zap, ArrowRight, BookOpen, Target, Users } from 'lucide-react';
import { GetStartedButton } from './components/GetStartedButton';
import { SignInButton } from './components/SignInButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <Brain className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BrainZ
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a>
            <SignInButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-bounce delay-100">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute top-32 right-20 animate-bounce delay-300">
              <Zap className="w-8 h-8 text-purple-500" />
            </div>
            <div className="absolute top-40 left-1/4 animate-bounce delay-500">
              <BookOpen className="w-5 h-5 text-blue-500" />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                Your Second Brain, Supercharged
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
                Never Lose a Link Again.
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Just Save, Search, and Chat.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
                Brainz transforms your saved links into intelligent cards. Use natural language to find exactly what you need, and chat with our AI to get instant summaries and answers from your saved content.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
                <GetStartedButton />
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrainZ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Go beyond simple bookmarking. BrainZ offers a smarter way to manage your digital library with features designed for recall and deep understanding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Effortless Saving</h3>
              <p className="text-gray-600 leading-relaxed">
                Save any URL and add your notes in seconds. We'll organize it into a neat, easy-to-find card so you can build your personal knowledge base without the clutter.
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Forget trying to remember exact titles. Search your saved cards using everyday language. Just ask, "find that article about space from last week" and let BrainZ do the rest.
              </p>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chat with Your Cards</h3>
              <p className="text-gray-600 leading-relaxed">
                Have a question about a saved link? Chat directly with our AI to get summaries, key takeaways, or specific information from the content without having to re-read the entire thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">BrainZ</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; 2025 BrainZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;