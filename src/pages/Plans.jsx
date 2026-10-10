// src/pages/Plans.jsx
import { useState } from 'react';
import PlansHeader from '../components/PlansHeader';
import PricingCard from '../components/PricingCard';
import InfoBanner from '../components/InfoBanner';
import FaqAccordion from '../components/FaqAccordion';
import CtaBanner from '../components/CtaBanner';

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const proFeatures = [
    { text: "125 Links / mo", subtext: "+$1.50 per 10 additional links*" },
    { text: "Unlimited Tracked Clicks", subtext: null },
    { text: "3 Branded Domains", subtext: null }
  ];

  const bulkFeatures = [
    { text: "50,000 Links / mo", subtext: "+$2.00 per 1000 additional links*" },
    { text: "50,000 Tracked Clicks / mo", subtext: "+$0.60 per 1000 additional clicks*" },
    { text: "3 Branded Domains", subtext: null }
  ];

  const enterpriseFeatures = [
    { text: "Custom Number of Links", subtext: null },
    { text: "Custom Number of Tracked Clicks", subtext: null },
    { text: "Custom Number of Branded Domains", subtext: null },
    { text: "99.9% SLA-backed uptime guarantees", subtext: null },
    { text: "Custom Solutions for Compliance Needs", subtext: null }
  ];

  return (
      <>
    <div className="bg-white text-slate-900 py-16 px-6 w-full min-h-screen antialiased font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <PlansHeader billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          <div className="flex flex-col justify-between py-4 pr-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-[#111827] leading-tight">
                Get personal with branded links
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                TinyURL's paid tiers offer powerful link branding and customization features.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-bold pt-2">
                Because why settle for being noticed when you can be remembered?
              </p>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              *Listed prices exclude any applicable taxes.
            </p>
          </div>

          <PricingCard 
            title="Pro"
            price={billingCycle === 'monthly' ? '$9' : '$8'}
            subtitle={billingCycle === 'monthly' ? '| $108 / yr |' : '| Billed annually |'}
            description="Get full access to advanced link analytics, editing, and management."
            sliderInfo={{ min: "125", max: "4K" }}
            features={proFeatures}
            buttonText="Subscribe Now"
          />

          <PricingCard 
            title="Bulk 50K"
            price={billingCycle === 'monthly' ? '$69' : '$59'}
            subtitle={billingCycle === 'monthly' ? '| $828 / yr |' : '| Billed annually |'}
            description="Generate, edit and manage your links in bulk."
            sliderInfo={{ min: "50K", max: "5M" }}
            features={bulkFeatures}
            buttonText="Subscribe Now"
          />

          <PricingCard 
            title="Enterprise"
            price="Custom"
            subtitle="| Starts at $3,999 / yr |"
            description="A tailor-made plan for enterprises that need more than what our regular plans offer."
            sliderInfo={null}
            features={enterpriseFeatures}
            buttonText="Contact Sales"
          />

        </div>

      </div>
      
      
    </div>
    <InfoBanner />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
