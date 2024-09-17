import React from 'react';

function TextExampleCole() {
  return (
    <div className="flex items-start justify-start flex-col gap-y-4">
      <h3 className="text-title text-[30px] md:text-[35px] font-Estedad-Medium dark:text-white transition-colors">ساخت دکمه</h3>
      <ul className="flex items-start justify-start flex-col gap-y-4 ">
        <li><span className="text-text-orange font-Estedad-Light">عملکرد سلام</span> &#123;</li>
        <ul className="flex items-start justify-start flex-col gap-y-4 pr-6">
            <li className={"font-Estedad-Light"}>نمایش طول(<span className="text-text-orange font-Estedad-Light">&quot;سلام&quot;</span>)</li>
            <li className={"font-Estedad-Light"}>متن = <span className="text-text-orange font-Estedad-Light">&quot;hi&quot;</span></li>
            <li className={"font-Estedad-Light"}>نمایش طول(<span className="text-text-orange font-Estedad-Light">&quot;سلام&quot;</span>)</li>
            <li className={"font-Estedad-Light"}>نمایش طول(<span className="text-text-orange font-Estedad-Light">متن</span>)</li>
        </ul>
        <li>&#125;</li>
      </ul>
    </div>
  );
}

export default TextExampleCole;
