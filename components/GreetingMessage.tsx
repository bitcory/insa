import React from 'react';

interface GreetingMessageProps {
  message: string;
  loading: boolean;
}

const GreetingMessage: React.FC<GreetingMessageProps> = ({ message, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800"></div>
        <p className="text-gray-500 font-serif animate-pulse">진심을 담아 편지를 적고 있어요...</p>
      </div>
    );
  }

  // Split message by double newlines to separate paragraphs but keep lists together
  const blocks = message.split(/\n\n+/);

  // First block is the title
  const title = blocks[0];
  const bodyBlocks = blocks.slice(1);

  return (
    <div className="px-6 py-8 bg-white mx-4 mt-6 mb-24 rounded-xl shadow-xl border border-stone-100 relative fade-in">
      {/* Decorative quotes */}
      <div className="absolute -top-4 -left-2 text-6xl text-red-100 font-serif">“</div>

      {/* Hook / Title Section */}
      <div className="mb-6 text-center border-b border-stone-100 pb-4">
        <h2 className="text-xl font-bold text-red-900 font-serif leading-snug break-keep">
          {title}
        </h2>
      </div>

      <div className="space-y-4 font-serif text-stone-700 leading-relaxed text-[17px]">
        {bodyBlocks.map((block, index) => {
          // Render divider for "---"
          if (block.trim() === '---') {
            return <hr key={index} className="border-t-2 border-dashed border-red-100 my-2" />;
          }

          return (
            <p key={index} className="whitespace-pre-wrap break-keep">
              {block}
            </p>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100 flex justify-end items-center">
        <span className="text-sm text-stone-400 font-medium">최효진 올림</span>
      </div>

      <div className="absolute -bottom-8 -right-2 text-6xl text-red-100 font-serif transform rotate-180">“</div>
    </div>
  );
};

export default GreetingMessage;