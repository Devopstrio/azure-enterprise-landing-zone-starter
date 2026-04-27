import React from 'react';

// Devopstrio Azure Enterprise Landing Zone Starter
// Executive Cloud Foundation Command Center & Platform Engineering Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-blue-500/30">
            {/* Global Foundation Header */}
            <header className="border-b border-white/5 bg-black/60 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-white/10 relative overflow-hidden">
                            AZ
                            <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full m-1 border border-black shadow-[0_0_50px_10px_rgba(96,165,250,0.5)]"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none">AZURE ENTERPRISE FOUNDATION</h1>
                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mt-2 italic">Standardized Multi-Subscription Governance</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-blue-400 border-b-2 border-blue-500 pb-10 pt-10">Platform Ops</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Sub Vending</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Gov Scorecard</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Net Hubs</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">FinOps</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Global Foundation Health KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Active Subscriptions', value: '142', status: 'Managed', color: 'blue' },
                        { label: 'Global Compliance', value: '98.4%', status: 'SLA Target 95%', color: 'emerald' },
                        { label: 'Network Peering Health', value: '100%', status: 'Stable', color: 'emerald' },
                        { label: 'Security Secure Score', value: '84%', status: 'Improving', color: 'blue' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-neutral-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Automation Intelligence & Foundation Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Live Governance Drift & Sub Feed */}
                    <div className="xl:col-span-2 bg-neutral-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Real-Time Foundation Health</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-lg">Monitoring global Management Group alignment, Policy compliance, and Hub-Spoke connectivity across all Azure regions.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10">
                                    Export Compliance Audit
                                </button>
                                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-900/40">
                                    Vend New Subscription
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: 'fin-prod-uk-01', type: 'Corp LZ', compliance: 100, state: 'Standard', icon: 'shield' },
                                { name: 'mkt-dev-us-04', type: 'Online LZ', compliance: 94, state: 'Warning (Tagging)', icon: 'globe' },
                                { name: 'hr-reg-uk-02', type: 'Regulated LZ', compliance: 100, state: 'Hardened', icon: 'lock' },
                                { name: 'dat-ai-sandbox', type: 'Sandbox', compliance: 82, state: 'Alert (Cost)', icon: 'flask' }
                            ].map((row, idx) => (
                                <div key={idx} className="p-8 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-blue-500/20 transition-all flex justify-between items-center">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                                            <span className="text-blue-400 text-xs font-black italic">{row.icon[0].toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-white">{row.name}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{row.type}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <div className="w-48 text-right">
                                            <div className="text-[9px] font-black text-slate-500 uppercase mb-1">Policy Compliance</div>
                                            <div className="text-xl font-black text-white font-mono">{row.compliance}%</div>
                                        </div>
                                        <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${row.compliance >= 95 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'}`}>
                                            {row.state}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hierarchy & Connectivity Stack */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-neutral-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-8 border-b border-blue-500/20 pb-6">Management Group State</h3>
                            <div className="space-y-8 flex-1">
                                {[
                                    { mg: 'Platform / Connectivity', subs: 12, status: 'Healthy', color: 'blue' },
                                    { mg: 'Landing Zones / Corp', subs: 64, status: 'Healthy', color: 'blue' },
                                    { mg: 'Landing Zones / Online', subs: 32, status: 'Drift Detected', color: 'orange' },
                                    { mg: 'Sandboxes / Exp', subs: 34, status: 'Healthy', color: 'blue' }
                                ].map((m, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs font-bold text-slate-300 group-hover:text-white">{m.mg}</span>
                                            <span className="text-[10px] font-black text-slate-500 font-mono">{m.subs} Subs</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full bg-${m.color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`}></div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-black hover:bg-neutral-800 text-white text-[11px] font-black py-4 rounded-2xl border border-white/10 uppercase tracking-widest transition-all">
                                Manage Hierarchy
                            </button>
                        </div>

                        <div className="bg-blue-600 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(37,99,235,0.3)] relative overflow-hidden group border border-white/10">
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                            <h4 className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-4 leading-none">Connectivity Insight</h4>
                            <div className="text-2xl font-black text-white tracking-tight mb-4">Hub-Spoke Sync Confirmed</div>
                            <p className="text-xs text-white/90 font-black px-6 py-4 rounded-2xl bg-black/20 shadow-xl leading-relaxed">
                                ExpressRoute Gateway is stable in UK South. Peerings for Wave 4 spokes successfully updated.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Sub-Intelligence & Drift Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-neutral-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-3">Cloud Spend Trend (30d)</h5>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter">£142,420 <span className="text-xs font-bold text-emerald-400 ml-1 uppercase tracking-normal">ON TRACK</span></div>
                            </div>
                            <div className="text-right text-[10px] font-black text-slate-500 uppercase">Enterprise Total</div>
                        </div>
                        <div className="flex items-end gap-1.5 h-32 px-2">
                            {[12, 18, 14, 22, 10, 8, 14, 24, 38, 12, 8, 6, 9, 11, 24, 32, 28, 14, 12, 10, 8, 12].map((v, i) => (
                                <div key={i} className="flex-1 bg-blue-500/20 rounded-t-lg hover:bg-blue-500 transition-all relative group cursor-pointer" style={{ height: `${v * 2}%` }}>
                                    <div className="absolute -top-10 left-1/2 -ms-4 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl pointer-events-none transition-all">
                                        £{v}k
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-neutral-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl">
                        <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10">Compliance & Guardrail State</h5>
                        <div className="space-y-6">
                            {[
                                { ctrl: 'Regional Data Residency Policy', status: 'Compliant', col: 'emerald' },
                                { ctrl: 'Storage Encryption (CMK) Gate', status: 'Active', col: 'emerald' },
                                { ctrl: 'RBAC PIM Eligibility Sync', status: 'In-Sync', col: 'emerald' },
                                { ctrl: 'Network Connectivity Guardrail', status: 'Auditing', col: 'blue' }
                            ].map((row, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 hover:border-white/10 transition-colors cursor-pointer group">
                                    <div>
                                        <div className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{row.ctrl}</div>
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Continuous Governance Monitoring</div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest bg-${row.col}-500/10 text-${row.col}-400`}>{row.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 bg-white hover:bg-slate-200 text-black text-[11px] font-black py-4 rounded-2xl uppercase tracking-widest transition-all">
                            Generate Quarterly Foundation CSR
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
