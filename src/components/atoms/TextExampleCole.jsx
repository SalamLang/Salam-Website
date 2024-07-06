import React from 'react';

function TextExampleCole() {
  return (
    <div className="flex items-start justify-start flex-col gap-y-4">
      <h3 className="text-title text-[34px] md:text-[40px] font-medium">ساخت دکمه</h3>
      <ul className="flex items-start justify-start flex-col gap-y-4">
        <li><span className="text-text-orange">عملکرد سلام</span> &#123;</li>
        <ul className="flex items-start justify-start flex-col gap-y-4 pr-6">
            <li>نمایش طول(<span className="text-text-orange">&quot;سلام&quot;</span>)</li>
            <li>متن = <span className="text-text-orange">&quot;hi&quot;</span></li>
            <li>نمایش طول(<span className="text-text-orange">&quot;سلام&quot;</span>)</li>
            <li>نمایش طول(<span className="text-text-orange">متن</span>)</li>
        </ul>
        <li>&#125;</li>
    </ul>
    </div>
  );
}

export default TextExampleCole;
