"use client";

export function Stats() {
    const stats = [
        { value: "5+", label: "Years of Excellence" },
        { value: "120+", label: "Successful Projects" },
        { value: "40+", label: "Team Members" },
        { value: "98%", label: "Client Satisfaction" },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-4xl md:text-6xl font-black tracking-tight text-white">{stat.value}</div>
                            <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
