// src/components/PlansHeader.jsx
export default function PlansHeader({ billingCycle, setBillingCycle }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8 gap-6 w-full font-sans">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
        Find a plan that meets your needs
      </h1>
      
      <div className="inline-flex bg-slate-100 p-1.5 rounded-full items-center self-start md:self-auto border border-slate-200/80">
        <button
          type="button"
          onClick={() => setBillingCycle('monthly')}
          className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-150 ${
            billingCycle === 'monthly' ? 'bg-[#0D7693] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBillingCycle('annually')}
          className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-150 ${
            billingCycle === 'annually' ? 'bg-[#0D7693] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Annually
        </button>
      </div>
    </div>
  );
}
