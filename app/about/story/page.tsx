"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 pb-24 px-6 relative">
                <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-30" style={{ backgroundColor: 'rgba(128, 96, 208, 0.2)' }} />
                <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: 'rgba(40, 40, 208, 0.3)' }} />
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-6 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(128, 96, 208, 0.1)' }}>
                            <span className="text-sm font-semibold tracking-wide" style={{ color: '#2828D0' }}>ABOUT US</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                            루플리는<br />
                            '도파민 설계 기반'<br />
                            성장 플랫폼입니다.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6 relative" style={{ backgroundColor: 'rgba(128, 96, 208, 0.05)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'rgba(128, 96, 208, 0.3)' }} />
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        <div className="text-center">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: '#2828D0' }}>
                                    Story
                                </h2>
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                            </div>
                            <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed">
                                <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                    루플리(LOOFLY)는 LOOP와 FLY의 의미를 담은 이름입니다. 
                                    반복되는 자극의 고리를 끊고(Loop), 더 높은 곳으로 도약한다(Fly)는 철학을 브랜드 안에 담았습니다.
                                </p>
                                <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                    우리는 사람들이 무의식적으로 반복하는 '과도한 페이직 도파민(Phasic Dopamine)'의 루프를 멈추고, 
                                    성취와 성장으로 이어지는 '안정적인 토닉 도파민(Tonic Dopamine)' 기반의 성장 루프를 만들 때 
                                    비로소 삶이 비상한다고 믿습니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0033FF' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.6)' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.3)' }} />
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed text-center">
                            <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                루플리는 '도파민의 방향을 재설계하는 성장 플랫폼'입니다. 
                                많은 사람들이 스마트폰 중독과 무기력에 빠지는 이유는 의지가 약해서가 아니라, 
                                노력 없이 얻는 일시적 쾌락 중심의 '페이직 도파민' 루프에 갇혀 있기 때문입니다.
                            </p>
                            <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                순간의 자극은 강하지만 오래 남지 않습니다. 
                                반면, 과정을 통해 얻는 성취의 즐거움은 깊은 만족과 지속적인 성장을 만듭니다. 
                                루플리는 이 차이에 주목합니다.
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0033FF' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.6)' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.3)' }} />
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed text-center">
                            <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                우리는 기업을 대상으로 도파민을 건강하게 활용할 수 있는 교육·성장 프로그램을 개발하고 제공합니다. 
                                자기 강점 발견 프로그램을 통해 개인이 스스로의 가능성을 인식하도록 돕고, 
                                리더십 프로그램을 통해 건강한 동기 설계와 영향력을 키우며, 
                                팀 본딩 및 소통 역량 강화 프로그램을 통해 조직 안에서 긍정적 에너지가 선순환하도록 만듭니다.
                            </p>
                            <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                기업은 구성원의 역량이 곧 조직의 경쟁력이라는 믿음 아래 루플리의 프로그램에 투자하고, 
                                우리는 개인의 성장과 조직의 성과가 함께 상승하는 구조를 설계합니다.
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0033FF' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.6)' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.3)' }} />
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed text-center">
                            <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                동시에 루플리는 B2C 영역으로 확장하여, 더 많은 개인이 일상 속에서 건강한 도파민 루프를 경험할 수 있는 
                                서비스와 제품을 준비하고 있습니다. 
                                억지로 참는 '디톡스'가 아니라, 스스로 몰입하고 성취하며 자연스럽게 삶의 활력을 회복하는 경험을 만드는 것이 
                                우리의 방향입니다.
                            </p>
                            <p className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                                또한 루플리는 함께 성장할 크루가 모여 목표를 설정하고, 과정을 인증하며, 
                                서로에게 건강한 자극을 주고받는 커뮤니티를 운영합니다. 
                                혼자서는 쉽게 무너지는 다짐도, 함께라면 선순환이 됩니다.
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0033FF' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.6)' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(0, 51, 255, 0.3)' }} />
                        </div>

                        <div className="pt-8 text-center">
                            <div className="p-10 md:p-12 rounded-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                                    루플리는 믿습니다.<br />
                                    도파민은 끊어야 할 대상이 아니라, 설계해야 할 에너지라는 것을.<br />
                                    반복을 비상으로 바꾸는 루프, 그 시작이 루플리입니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Slogan Section */}
            <section className="py-20 px-6 bg-white relative">
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'rgba(128, 96, 208, 0.2)' }} />
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16 text-center"
                    >
                        <div>
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: '#2828D0' }}>
                                    Slogan
                                </h2>
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                            </div>
                            <div className="p-12 md:p-16 rounded-3xl border-2 shadow-sm" style={{ backgroundColor: 'rgba(128, 96, 208, 0.05)', borderColor: 'rgba(128, 96, 208, 0.2)' }}>
                                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                                    Activate your Loop,<br />
                                    Ready to Fly
                                </p>
                                <div className="flex items-center justify-center gap-2 mt-8">
                                    <div className="w-12 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2828D0' }} />
                                    <div className="w-12 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed">
                            <p className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(128, 96, 208, 0.05)' }}>
                                '반복되는 자극의 고리를 끊고 더 높이 비상한다'는 의미의 루플리는, 
                                도파민의 방향을 재설계하여 삶의 주도권을 되찾는 여정을 의미합니다. 
                                도파민은 억지로 참거나 끊어내야 할 대상이 아닙니다.
                            </p>
                            <p className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(128, 96, 208, 0.05)' }}>
                                일시적인 쾌락인 '페이직 도파민'의 루프를 멈추고, 
                                성취와 성장을 이끄는 '토닉 도파민'의 선순환을 만들 때 
                                우리는 비로소 진정한 성장을 경험합니다.
                            </p>
                            <p className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(128, 96, 208, 0.05)' }}>
                                루플리를 통해 당신의 에너지를 올바르게 설계함으로써, 
                                어제보다 더 높은 곳으로 도약하는 압도적인 비상을 시작해 보세요.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 relative" style={{ backgroundColor: 'rgba(128, 96, 208, 0.05)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'rgba(128, 96, 208, 0.3)' }} />
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16 text-center"
                    >
                        <div>
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: '#2828D0' }}>
                                    Mission
                                </h2>
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                            </div>
                            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg">
                                <p className="text-2xl md:text-4xl font-bold text-black leading-relaxed mb-6">
                                    도파민의 선순환으로 잠재력을 깨우고,<br />
                                    압도적 성취를 향해 함께 비상하는<br />
                                    몰입 공동체
                                </p>
                                <div className="flex items-center justify-center gap-2 my-6">
                                    <div className="w-12 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2828D0' }} />
                                    <div className="w-12 h-0.5" style={{ backgroundColor: '#2828D0' }} />
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 italic">
                                    We empower people to rewire their dopamine loops<br />
                                    and fly together toward peak performance and growth.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
