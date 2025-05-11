import React from 'react';
import PricingCard from './PricingCard';

const pricingData = [
  {
    title: 'Starter',
    description: 'Best option for personal use & for your next project.',
    price: '$29',
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 1 developer',
      'Premium support: 6 months',
      'Free updates: 6 months'
    ],
    support: '6 months',
    updates: '6 months',
    teamSize: '1 developer'
  },
  {
    title: 'Company',
    description: 'Relevant for multiple users, extended & premium support.',
    price: '$99',
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 10 developers',
      'Premium support: 24 months',
      'Free updates: 24 months'
    ],
    support: '24 months',
    updates: '24 months',
    teamSize: '10 developers'
  },
  {
    title: 'Enterprise',
    description: 'Best for large scale uses and extended redistribution rights.',
    price: '$499',
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 100+ developers',
      'Premium support: 36 months',
      'Free updates: 36 months'
    ],
    support: '36 months',
    updates: '36 months',
    teamSize: '100+ developers'
  }
];

const PricingSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              support={plan.support}
              updates={plan.updates}
              teamSize={plan.teamSize}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
