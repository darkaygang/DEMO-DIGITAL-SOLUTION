import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  paragraph?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  paragraph,
  align = 'left',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  const renderTitle = () => {
    if (!italicWord || !title.includes(italicWord)) {
      return title;
    }
    const parts = title.split(italicWord);
    return (
      <>
        {parts[0]}
        <span className={`font-serif-italic ${isLight ? 'text-[#131313]' : 'text-white/90'} px-1 inline-block`}>
          {italicWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase mb-4 ${isLight ? 'bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/70' : 'liquid-glass text-white/70'}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-[#131313]/60' : 'bg-white/60'}`}></span>
        {eyebrow}
      </div>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] font-serif-editorial ${isLight ? 'text-[#131313]' : 'text-white'}`}>
        {renderTitle()}
      </h2>
      {paragraph && (
        <p className={`mt-3.5 text-sm sm:text-base font-sans font-normal leading-relaxed max-w-2xl ${isLight ? 'text-[#131313]/70' : 'text-white/60'}`}>
          {paragraph}
        </p>
      )}
    </div>
  );
};
