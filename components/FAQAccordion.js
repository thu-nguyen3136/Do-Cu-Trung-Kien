import { useState } from 'react';

export default function FAQAccordion({ faqs, title = "Câu Hỏi Thường Gặp (FAQ)" }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-10 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase mb-6 flex items-center gap-3">
        <span className="w-2 h-7 bg-[#388e3c] rounded-full inline-block"></span>
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-[#388e3c] bg-green-50/30' : 'border-gray-200 bg-gray-50/50 hover:border-gray-300'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-800 text-[15px] md:text-base cursor-pointer focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#388e3c] text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-gray-700 text-sm md:text-[15px] leading-relaxed border-t border-green-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
