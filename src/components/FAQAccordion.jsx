import React from 'react';

const FAQAccordion = ({ faqs, sectionTitle = "Frequently asked questions", expandedIndex = 0 }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          {sectionTitle}
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush" data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    aria-expanded={expandedIndex === index ? "true" : "false"}
                    aria-controls={`accordion-flush-body-${index}`}
                  >
                    <span>{faq.question}</span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 shrink-0 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`accordion-flush-body-${index}`}
                  className={`${expandedIndex === index ? 'block' : 'hidden'}`} 
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    {faq.answer.map((text, i) => (
                      <p key={i} className="mb-2 text-gray-500 dark:text-gray-400">{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
