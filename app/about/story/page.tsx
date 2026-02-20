"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 pb-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                                About Loofly
                            </p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                <span className="text-gray-900">루플리는</span><br />
                                <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">도파민 설계 기반</span><br />
                                <span className="text-gray-900">성장 플랫폼입니다</span>
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed">
                            루플리(LOOFLY)는 <span className="font-bold" style={{ color: '#2828D0' }}>LOOP</span>와 <span className="font-bold" style={{ color: '#2828D0' }}>FLY</span>의 의미를 담았습니다.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            반복되는 자극의 고리를 끊고, 더 높은 곳으로 도약한다는 철학을 브랜드에 담았습니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            우리는 사람들이 무의식적으로 반복하는 <span className="font-bold" style={{ color: '#2828D0' }}>'페이직 도파민'</span>의 루프를 멈추고,
                            성취와 성장으로 이어지는 <span className="font-bold" style={{ color: '#2828D0' }}>'토닉 도파민'</span> 기반의 성장 루프를 만들 때
                            비로소 삶이 비상한다고 믿습니다.
                        </p>
                    </motion.div>

                    <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #2828D0 0%, #8060D0 100%)' }} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            도파민의 방향을 재설계하는 성장 플랫폼
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            많은 사람들이 스마트폰 중독과 무기력에 빠지는 이유는 의지가 약해서가 아니라,
                            노력 없이 얻는 일시적 쾌락 중심의 루프에 갇혀 있기 때문입니다.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            순간의 자극은 강하지만 오래 남지 않습니다.
                            반면, 과정을 통해 얻는 성취의 즐거움은 깊은 만족과 지속적인 성장을 만듭니다.
                        </p>
                    </motion.div>

                    <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #2828D0 0%, #8060D0 100%)' }} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            기업과 개인의 성장을 함께 설계합니다
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            우리는 기업을 대상으로 도파민을 건강하게 활용할 수 있는 교육·성장 프로그램을 개발하고 제공합니다.
                            자기 강점 발견, 리더십 강화, 팀 본딩을 통해 조직 안에서 긍정적 에너지가 선순환하도록 만듭니다.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            기업은 구성원의 역량이 곧 조직의 경쟁력이라는 믿음 아래 투자하고,
                            우리는 개인의 성장과 조직의 성과가 함께 상승하는 구조를 설계합니다.
                        </p>
                    </motion.div>

                    <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #2828D0 0%, #8060D0 100%)' }} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            동시에 루플리는 B2C 영역으로 확장하여, 더 많은 개인이 일상 속에서 건강한 도파민 루프를 경험할 수 있는
                            서비스와 제품을 준비하고 있습니다.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            억지로 참는 '디톡스'가 아니라, 스스로 몰입하고 성취하며 자연스럽게 삶의 활력을 회복하는 경험을 만듭니다.
                        </p>
                    </motion.div>

                    <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, #2828D0 0%, #8060D0 100%)' }} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            또한 루플리는 함께 성장할 크루가 모여 목표를 설정하고, 과정을 인증하며,
                            서로에게 건강한 자극을 주고받는 커뮤니티를 운영합니다.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            혼자서는 쉽게 무너지는 다짐도, 함께라면 선순환이 됩니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center space-y-12"
                    >
                        <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            루플리는 믿습니다
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            도파민은 끊어야 할 대상이 아니라,<br />
                            <span className="font-bold" style={{ color: '#2828D0' }}>설계해야 할 에너지</span>라는 것을
                        </p>
                        <div className="pt-8">
                            <p className="text-lg md:text-xl font-medium" style={{ color: '#2828D0' }}>
                                반복을 비상으로 바꾸는 루프, 그 시작이 루플리입니다
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Slogan Section */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center space-y-16"
                    >
                        <div className="space-y-8">
                            <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                                Our Slogan
                            </p>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">
                                    Activate your Loop,<br />
                                    Ready to Fly
                                </span>
                            </h2>
                        </div>
                        <div className="space-y-8 pt-8">
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                반복되는 자극의 고리를 끊고 더 높이 비상한다는 의미의 루플리는,
                                도파민의 방향을 재설계하여 삶의 주도권을 되찾는 여정을 의미합니다.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                일시적인 쾌락의 루프를 멈추고, 성취와 성장을 이끄는 선순환을 만들 때
                                우리는 비로소 진정한 성장을 경험합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center space-y-12"
                    >
                        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                            Our Mission
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            도파민의 선순환으로 잠재력을 깨우고,<br />
                            압도적 성취를 향해 함께 비상하는<br />
                            몰입 공동체
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 italic pt-8">
                            We empower people to rewire their dopamine loops<br />
                            and fly together toward peak performance and growth.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
