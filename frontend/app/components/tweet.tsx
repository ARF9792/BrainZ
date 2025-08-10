import { Tweet } from 'react-tweet'

export default function TweetEmbed({ tweetId }:{
    tweetId:string
}) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      <div className="relative z-10 h-full p-2">
        <div className="w-full h-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-y-auto h-full hover:shadow-xl transition-all duration-300">
            <div className="p-2">
              <Tweet id={tweetId} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-6 left-6 w-6 h-6 bg-indigo-500/20 rounded-full blur-sm"></div>
      
      {/* Twitter/X logo indicator */}
      <div className="absolute top-3 left-3 w-6 h-6 bg-black rounded-md flex items-center justify-center shadow-sm">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
    </div>
  );
}
