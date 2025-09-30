import React from 'react';

interface ResultsProps {
  result: 'A' | 'B' | 'C' | null;
}

// Data structure for the specific page content
const resultsData = {
  'A': {
    icon: '⏱️',
    headline: "You’ll Grow Fastest by Saving Time & Impressing Customers",
    body: "Your answers show that your biggest roadblock isn’t finding new customers — it’s how much time it takes to quote jobs. Every slow or sloppy estimate risks losing the job.",
    subhead: "The fastest way forward? Automate your estimates. That means:",
    bullets: [
      "5-minute professional quotes with detailed breakdowns",
      "Branded PDFs you can text or email instantly",
      "Consistency that wins customer trust"
    ],
    ctaText: "👉 “Yes, I want to streamline my estimates”",
    ctaLink: "https://arbor-estimate-ai-gadsdenron.replit.app/",
    ctaPrice: "That’s exactly what TreePro Estimator does for $10/month.",
    secondaryLinkText: "Show me the ",
    secondaryLink: "https://my.coursebox.ai/courses/140781/about",
    secondaryLinkTextClick: "other options too"
  },
  'B': {
    icon: '📈',
    headline: "You’ll Grow Fastest by Filling Your Schedule With New Leads",
    body: "Your answers show that your biggest roadblock isn’t estimates — it’s too few calls from new customers. Even the best service can’t thrive if nobody knows about it.",
    subhead: "The fastest way forward? Targeted Facebook ads that work. That means:",
    bullets: [
      "No more wasting money boosting posts",
      "Ads that bring messages straight to your inbox",
      "A repeatable system to keep the phone ringing"
    ],
    ctaText: "👉 “Yes, I want to grow with Facebook ads”",
    ctaLink: "https://my.coursebox.ai/courses/140781/about",
    ctaPrice: "That’s exactly what the Cheap Facebook Ads To Power Your Business course shows you step by step for a one-time $19 fee.",
    secondaryLinkText: "Show me that other ",
    secondaryLink: "https://arbor-estimate-ai-gadsdenron.replit.app/",
    secondaryLinkTextClick: "$10 per month tree services Estimator option too"
  },
  'C': {
    icon: '🚀',
    headline: "Double Power: More Leads + Faster Estimates = Faster Growth",
    body: [
        "Your answers show you need both:",
        "• More calls coming in and",
        "• Faster, more professional quotes going out",
        "This “double power” pathway is how small tree service companies scale into bigger operations without burning out."
    ].join('\n'),
    estimator: {
        text: "👉 With TreePro Estimator, you’ll save hours and win jobs faster for just $10/month.",
        link: "https://arbor-estimate-ai-gadsdenron.replit.app/",
    },
    ads: {
        text: "👉 With the Cheap Facebook Ads To Power Your Business course, you’ll generate steady leads at low cost with a one-time $19 fee.",
        link: "https://my.coursebox.ai/courses/140781/about"
    }
  }
};

const CTAButton: React.FC<{ href: string, text: string }> = ({ href, text }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center"
    >
      {text}
    </a>
)


const Results: React.FC<ResultsProps> = ({ result }) => {
  if (!result) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">No result found.</h2>
          <p>Please complete the assessment to see your growth pathway.</p>
        </div>
      </section>
    );
  }

  if (result === 'A' || result === 'B') {
      // FIX: Define `data` inside the conditional block to allow TypeScript to correctly narrow its type.
      const data = resultsData[result];
      return (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center">
              <span className="text-6xl mb-4 inline-block">{data.icon}</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-brand-green">
                {data.headline}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-600 leading-relaxed">
                {data.body}
              </p>
            </div>
    
            <div className="bg-brand-light p-8 md:p-10 rounded-xl shadow-lg mt-12">
              <h2 className="text-xl font-bold mb-6 text-brand-brown">{data.subhead}</h2>
              <ul className="space-y-4">
                {/* FIX: Removed unnecessary and incorrect type cast. */}
                {data.bullets.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 font-bold text-2xl mr-4">✓</span>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-gray-700 mb-4">{data.ctaPrice}</p>
                <CTAButton href={data.ctaLink} text={data.ctaText}/>
                <p className="mt-6 text-sm text-gray-500">
                    {data.secondaryLinkText}
                    <a href={data.secondaryLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-green">{data.secondaryLinkTextClick}</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      )
  }

  // Handle 'C' case separately due to different structure
  // FIX: Define `cData` based on the narrowed `result` type, removing the need for a cast.
  const cData = resultsData[result];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center">
          <span className="text-6xl mb-4 inline-block">{cData.icon}</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-brand-green">
            {cData.headline}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-600 leading-relaxed whitespace-pre-line">
            {cData.body}
          </p>
        </div>

        <div className="bg-brand-light p-8 md:p-10 rounded-xl shadow-lg mt-12 space-y-8">
            <div>
                <p className="text-xl font-semibold text-gray-700 mb-4">{cData.estimator.text}</p>
                <CTAButton href={cData.estimator.link} text="Learn About TreePro Estimator" />
            </div>
            <div className="border-t border-gray-300 pt-8">
                <p className="text-xl font-semibold text-gray-700 mb-4">{cData.ads.text}</p>
                <CTAButton href={cData.ads.link} text="Learn About the Facebook Ads Course" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
