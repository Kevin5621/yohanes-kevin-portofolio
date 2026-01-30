import React, { useState } from 'react';
import { Check, Plus, ChevronDown, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/utils';

interface PricingPackage {
  title: string;
  description: string;
  price: string;
  revisions: string[];
  features: string[];
  addons: string[];
}

interface CrmPackage {
  name: string;
  features: string[];
  price: string;
  revisions?: string[];
}

interface RevisionSystem {
  title: string;
  small: {
    title: string;
    items: string[];
  };
  large: {
    title: string;
    items: string[];
  };
  extra: string[];
}

interface ErpCrm {
  title: string;
  description: string;
  crm: {
    title: string;
    description: string;
    packages: CrmPackage[];
  };
  erp: {
    title: string;
    description: string;
    modules: string[];
    fullPackage: string;
    revisions: string[];
  };
  cta?: {
    title: string;
    subtitle: string;
    timeline: string;
    description: string;
    button: string;
  };
}

interface AiAddons {
  tabLabel: string;
  headline: string;
  eyebrow: string;
  narrative: string;
  impacts: {
    stat: string;
    label: string;
    description: string;
  }[];
  useCases: {
    title: string;
    items: string[];
  };
  pricingNote: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

interface CustomSoftwarePackage {
  name: string;
  description: string;
  price: string;
  features: string[];
  revisions?: string[];
  bestFor: string;
}

interface CustomSoftware {
  title: string;
  subtitle: string;
  description: string;
  packages: CustomSoftwarePackage[];
}

interface RecurringRevenue {
  title: string;
  subtitle: string;
  description: string;
  maintenance: {
    title: string;
    label: string;
    description: string;
    packages: {
      name: string;
      price: string;
      features: string[];
      sla?: string;
    }[];
  };
  licensing: {
    title: string;
    label: string;
    description: string;
    packages: {
      name: string;
      setupPrice: string;
      monthlyPrice: string;
      features: string[];
      bestFor: string;
    }[];
  };
}

interface UnifiedPricingProps {
  lang: 'en' | 'id';
  packages: PricingPackage[];
  revisionSystem: RevisionSystem;
  erpCrm: ErpCrm;
  aiAddons?: AiAddons;
  customSoftware?: CustomSoftware;
  recurringRevenue?: RecurringRevenue;
}

type TabType = 'custom' | 'recurring' | 'website' | 'crm' | 'erp' | 'ai';

const UnifiedPricing: React.FC<UnifiedPricingProps> = ({
  lang,
  packages,
  revisionSystem,
  erpCrm,
  aiAddons,
  customSoftware,
  recurringRevenue,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>(customSoftware ? 'custom' : recurringRevenue ? 'recurring' : 'website');
  const [showRevisions, setShowRevisions] = useState(false);
  const [recurringSubTab, setRecurringSubTab] = useState<'maintenance' | 'licensing'>('maintenance');

  const tabs: { id: TabType; label: string }[] = [
    ...(customSoftware ? [{ id: 'custom' as TabType, label: lang === 'en' ? 'Custom Software' : 'Software Custom' }] : []),
    ...(recurringRevenue ? [{ id: 'recurring' as TabType, label: lang === 'en' ? 'Recurring Plans' : 'Paket Berulang' }] : []),
    ...(aiAddons ? [{ id: 'ai' as TabType, label: aiAddons.tabLabel }] : []),
  ];

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1">
              <animate attributeName="stop-color" values="#6366f1;#8b5cf6;#a855f7;#c084fc;#8b5cf6;#6366f1" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#a855f7;#c084fc;#8b5cf6;#6366f1;#8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7;#c084fc;#8b5cf6;#6366f1;#8b5cf6;#a855f7" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="75%" stopColor="#c084fc">
              <animate attributeName="stop-color" values="#c084fc;#8b5cf6;#6366f1;#8b5cf6;#a855f7;#c084fc" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#6366f1">
              <animate attributeName="stop-color" values="#6366f1;#8b5cf6;#a855f7;#c084fc;#8b5cf6;#6366f1" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            {lang === 'en' ? 'Pricing' : 'Harga'}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            {lang === 'en' ? 'Product-Focused Solution Partner' : 'Partner Solusi Berfokus Produk'}
          </h2>
          <p className="text-muted-foreground text-lg">
            {lang === 'en'
              ? 'We help scale your operational sales & internal workflow. Not just building apps—we build sustainable business solutions with recurring value.'
              : 'Kami membantu scaling operasional sales & workflow internal perusahaan Anda. Bukan hanya membangun aplikasi—kami membangun solusi bisnis berkelanjutan dengan nilai berulang.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-secondary/80 rounded-full" role="tablist">
            {tabs.map((tab) => {
              const isAiTab = tab.id === 'ai';
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 min-h-[44px] ${
                    activeTab === tab.id
                      ? isAiTab
                        ? 'bg-linear-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-500/50 shadow-lg shadow-indigo-500/30'
                        : 'bg-primary text-primary-foreground'
                      : isAiTab
                        ? 'text-indigo-400/70 hover:text-indigo-300 bg-transparent'
                        : 'text-foreground/70 hover:text-foreground bg-transparent'
                  }`}
                >
                  {isAiTab && activeTab === tab.id && (
                    <span className="ai-gradient-icon inline-block mr-1.5">
                      <Sparkles className="w-3 h-3" stroke="url(#ai-gradient)" />
                    </span>
                  )}
                  {isAiTab && activeTab === tab.id ? (
                    <span className="ai-gradient-text">{tab.label}</span>
                  ) : isAiTab ? (
                    <span className="text-indigo-400/70 hover:text-indigo-300">{tab.label}</span>
                  ) : (
                    tab.label
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Software Packages */}
        {activeTab === 'custom' && customSoftware && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">{customSoftware.title}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">{customSoftware.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {customSoftware.packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                    index === 1
                      ? 'border-primary bg-primary text-primary-foreground scale-105 z-10'
                      : 'border-border bg-background hover:border-primary/50'
                  }`}
                >
                  {index === customSoftware.packages.length - 1 && (
                    <div className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                      {lang === 'en' ? 'Enterprise' : 'Enterprise'}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                    <p
                      className={`text-sm mb-4 ${
                        index === customSoftware.packages.length - 1 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}
                    >
                      {pkg.description}
                    </p>
                    <p className="text-2xl font-bold mb-2">{pkg.price}</p>
                    <p
                      className={`text-xs ${
                        index === customSoftware.packages.length - 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                      }`}
                    >
                      {pkg.bestFor}
                    </p>
                  </div>

                  <div className="space-y-6 mb-8 flex-1">
                    <div>
                      <p
                        className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                          index === customSoftware.packages.length - 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                        }`}
                      >
                        {lang === 'en' ? 'Includes' : 'Termasuk'}
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                index === customSoftware.packages.length - 1 ? 'text-brand' : 'text-muted-foreground'
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.revisions && (
                      <div>
                        <p
                          className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                            index === customSoftware.packages.length - 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                          }`}
                        >
                          {lang === 'en' ? 'Revisions' : 'Revisi'}
                        </p>
                        <ul className="space-y-1.5">
                          {pkg.revisions.map((rev) => (
                            <li
                              key={rev}
                              className={`text-sm ${
                                index === customSoftware.packages.length - 1 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                              }`}
                            >
                              {rev}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <a
                    href={getWhatsAppLink('pricing', lang, pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-full font-medium text-center text-sm transition-colors duration-300 ${
                      index === customSoftware.packages.length - 1
                        ? 'bg-brand text-white hover:bg-brand/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {lang === 'en' ? 'Get Started' : 'Mulai'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recurring Revenue Packages */}
        {activeTab === 'recurring' && recurringRevenue && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">{recurringRevenue.title}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">{recurringRevenue.description}</p>
              
              {/* Sub-tabs for Maintenance vs Licensing */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 bg-secondary/80 rounded-full">
                  <button
                    onClick={() => setRecurringSubTab('maintenance')}
                    className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      recurringSubTab === 'maintenance'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/70 hover:text-foreground bg-transparent'
                    }`}
                  >
                    {recurringRevenue.maintenance.label || recurringRevenue.maintenance.title}
                  </button>
                  <button
                    onClick={() => setRecurringSubTab('licensing')}
                    className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      recurringSubTab === 'licensing'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/70 hover:text-foreground bg-transparent'
                    }`}
                  >
                    {recurringRevenue.licensing.label || recurringRevenue.licensing.title}
                  </button>
                </div>
              </div>
            </div>

            {/* Maintenance Plans */}
            {recurringSubTab === 'maintenance' && (
              <div>
                <p className="text-center text-muted-foreground mb-8">{recurringRevenue.maintenance.description}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {recurringRevenue.maintenance.packages.map((pkg, index) => (
                    <div
                      key={pkg.name}
                      className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                        index === 1
                          ? 'border-primary bg-primary text-primary-foreground scale-105 z-10'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      {index === 1 && (
                        <div className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                          {lang === 'en' ? 'Most Popular' : 'Paling Populer'}
                        </div>
                      )}

                      <div className="mb-8">
                        <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                        <p className="text-2xl font-bold mb-2">{pkg.price}</p>
                        {pkg.sla && (
                          <p className={`text-xs ${index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                            {pkg.sla}
                          </p>
                        )}
                      </div>

                      <ul className="space-y-2 mb-8 flex-1">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                index === 1 ? 'text-brand' : 'text-muted-foreground'
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={getWhatsAppLink('pricing', lang, pkg.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-full font-medium text-center text-sm transition-colors duration-300 ${
                          index === 1
                            ? 'bg-brand text-white hover:bg-brand/90'
                            : 'bg-primary text-primary-foreground hover:bg-primary/90'
                        }`}
                      >
                        {lang === 'en' ? 'Get Started' : 'Mulai'}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Licensing Plans */}
            {recurringSubTab === 'licensing' && (
              <div>
                <p className="text-center text-muted-foreground mb-8">{recurringRevenue.licensing.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {recurringRevenue.licensing.packages.map((pkg, index) => (
                    <div
                      key={pkg.name}
                      className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                        index === 1
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      <div className="mb-8">
                        <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                        <p className={`text-sm mb-4 ${index === 1 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                          {pkg.bestFor}
                        </p>
                        <div className="space-y-2">
                          <div>
                            <p className={`text-xs ${index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                              {lang === 'en' ? 'Setup Fee' : 'Biaya Setup'}
                            </p>
                            <p className="text-xl font-bold">{pkg.setupPrice}</p>
                          </div>
                          <div>
                            <p className={`text-xs ${index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                              {lang === 'en' ? 'Monthly License' : 'Lisensi Bulanan'}
                            </p>
                            <p className="text-xl font-bold">{pkg.monthlyPrice}</p>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-8 flex-1">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                index === 1 ? 'text-brand' : 'text-muted-foreground'
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={getWhatsAppLink('pricing', lang, pkg.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-full font-medium text-center text-sm transition-colors duration-300 ${
                          index === 1
                            ? 'bg-brand text-white hover:bg-brand/90'
                            : 'bg-primary text-primary-foreground hover:bg-primary/90'
                        }`}
                      >
                        {lang === 'en' ? 'Get Started' : 'Mulai'}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Enterprise - By Consultation Only */}
        {activeTab === 'crm' && erpCrm && erpCrm.cta && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">{erpCrm.title}</h3>
              <p className="text-muted-foreground mb-8">{erpCrm.description}</p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  {erpCrm.cta.title}
                </p>
                <p className="text-3xl font-bold mb-2">{erpCrm.cta.subtitle}</p>
                <p className="text-muted-foreground mb-6">{erpCrm.cta.timeline}</p>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{erpCrm.cta.description}</p>
                <a
                  href={getWhatsAppLink('pricing', lang, 'Enterprise')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full font-medium bg-brand text-white hover:bg-brand/90 transition-colors duration-300"
                >
                  {erpCrm.cta.button}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Smart Automation - Storytelling Section */}
        {activeTab === 'ai' && aiAddons && (
          <div className="max-w-6xl mx-auto">
            {/* Eyebrow + Headline */}
            <div className="text-center mb-16">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
                {aiAddons.eyebrow}
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {aiAddons.headline}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {aiAddons.narrative}
              </p>
            </div>

            {/* Impact Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {aiAddons.impacts.map((impact, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{impact.stat}</p>
                  <p className="text-sm font-medium mb-2">{impact.label}</p>
                  <p className="text-xs text-muted-foreground">{impact.description}</p>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="max-w-4xl mx-auto mb-16">
              <h4 className="text-xl font-bold text-center mb-8">{aiAddons.useCases.title}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {aiAddons.useCases.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/80 hover:bg-secondary/80 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing Note + CTA */}
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm text-muted-foreground mb-6">{aiAddons.pricingNote}</p>
              <a
                href={getWhatsAppLink('pricing', lang, 'Smart Automation')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              >
                {aiAddons.cta.primary}
              </a>
              <p className="text-xs text-muted-foreground mt-4">{aiAddons.cta.secondary}</p>
            </div>
          </div>
        )}

        {/* ERP Packages */}
        {activeTab === 'erp' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-muted-foreground">{erpCrm.erp.description}</p>
            </div>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {erpCrm.erp.modules.map((module) => (
                <div
                  key={module}
                  className="p-4 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors duration-300"
                >
                  <p className="text-sm">{module}</p>
                </div>
              ))}
            </div>

            {/* Full Package */}
            <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
                    {lang === 'en' ? 'Full Package' : 'Paket Lengkap'}
                  </p>
                  <p className="text-2xl font-bold">{erpCrm.erp.fullPackage.split(': ')[1]}</p>
                </div>
                <a
                  href={getWhatsAppLink('pricing', lang, erpCrm.erp.fullPackage.split(': ')[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium text-sm bg-brand text-white hover:bg-brand/90 transition-colors duration-300 text-center"
                >
                  {lang === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                <ul className="space-y-1.5">
                  {erpCrm.erp.revisions.map((rev) => (
                    <li key={rev} className="text-xs text-primary-foreground/60">
                      {rev}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Revision System - Collapsible */}
        <div className="max-w-4xl mx-auto mt-16">
          <button
            onClick={() => setShowRevisions(!showRevisions)}
            className="w-full flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors duration-300"
          >
            <span className="font-medium">{revisionSystem.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                showRevisions ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showRevisions && (
            <div className="mt-4 p-8 rounded-2xl border border-border bg-background">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Small Revisions */}
                <div>
                  <h3 className="font-medium mb-4 text-foreground">{revisionSystem.small.title}</h3>
                  <ul className="space-y-2">
                    {revisionSystem.small.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Large Revisions */}
                <div>
                  <h3 className="font-medium mb-4 text-foreground">{revisionSystem.large.title}</h3>
                  <ul className="space-y-2">
                    {revisionSystem.large.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Extra Revisions */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  {lang === 'en' ? 'Additional Revisions' : 'Revisi Tambahan'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {revisionSystem.extra.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default UnifiedPricing;
