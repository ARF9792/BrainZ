export default function YouTubeEmbed({ videoId, width, height }:{
  videoId:string,
  width:string,
  height:string,
}) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-black/5"></div>
      
      
      <div className="relative w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
        ></iframe>
        
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-xl"></div>
      </div>
      
      
      <div className="absolute top-3 right-3 w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-200">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
      
      
      <div className="absolute bottom-4 left-4 w-6 h-6 bg-red-500/20 rounded-full blur-sm"></div>
      <div className="absolute top-6 left-6 w-4 h-4 bg-pink-500/20 rounded-full blur-sm"></div>
    </div>
  );
}