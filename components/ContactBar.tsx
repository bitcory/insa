import React from 'react';

const ContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex flex-col items-center justify-center gap-2 max-w-md mx-auto">
      <div className="text-center">
         <p className="text-xs text-stone-500 mb-1">
          주변에 공부가 필요한 지인이 있으신가요?
         </p>
      </div>
      <a 
        href="tel:010-2958-3622"
        className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform active:scale-95 text-center flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        상담 및 소개 전화하기
      </a>
    </div>
  );
};

export default ContactBar;