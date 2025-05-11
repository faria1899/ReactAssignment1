import FAQAccordion from './FAQAccordion';

const faqData = [
  {
    question: "Can I use Landwind in open-source projects?",
    answer: [
        <>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Landwind is an open-source library of
        interactive components built on top of Tailwind CSS including buttons, dropdowns,
        modals,
        navbars, and more.</p>
    <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#"
            class="text-purple-600 dark:text-purple-500 hover:underline">get started</a> and
        start
        developing websites even faster with components on top of Tailwind CSS.</p>
        </>
    ]
  },
  {
    question: "Is there a Figma file available?",
    answer: [
      "Yes, everything in Landwind is first designed in Figma.",
      "Check out the Figma design system based on Tailwind CSS and Landwind."
    ]
  },
  {
    question: "What are the differences between Landwind and Tailwind UI?",
    answer: [
      "Landwind is open-source under the MIT license, whereas Tailwind UI is paid.",
      "Landwind uses smaller standalone components; Tailwind UI offers full page sections."
    ]
  },
  {
    question: "What about browser support?",
    answer: [
      "Landwind components are built with cross-browser compatibility in mind.",
      "You can safely use it in all major modern browsers."
    ]
  }
];

export default function FaqData() {
  return <FAQAccordion faqs={faqData} />;
}
