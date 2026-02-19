"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                                자극의 과잉 시대를<br />살고 있습니다
                            </h1>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                매일 마주하는 수백 개의 숏폼, 끊임없는 알림, 노력 없이 주어지는 즉각적인 보상들. 
                                우리의 뇌는 지금 이 순간에도 강렬한 <span className="font-semibold text-black">페이직 도파민(Phasic Dopamine)</span>의 불꽃에 노출되어 있습니다.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                                alt="Digital overstimulation"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 px-6 bg-purple-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-black">
                            공허함의 원인: 흩어진 도파민
                        </h2>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                순간적으로 타올랐다 꺼지는 이 자극은 우리를 즐겁게 하는 듯 보이지만, 
                                실상은 우리 삶을 지탱하는 기저의 에너지를 갉아먹고 있습니다.
                            </p>
                            <div className="bg-white p-6 md:p-8 rounded-2xl border-l-4 border-purple-400">
                                <p className="text-gray-800">
                                    자극의 끝에 찾아오는 무기력함은 당신의 잘못이 아닙니다. 
                                    과도한 페이직 도파민의 폭발은 뇌의 보상 회로를 무디게 만들고, 
                                    정작 일상을 살아갈 원동력인 <span className="font-semibold text-black">토닉 도파민(Tonic Dopamine)</span>의 수치를 떨어뜨립니다.
                                </p>
                            </div>
                            <p className="text-gray-600 italic">
                                엔진의 연료가 바닥난 상태에서 억지로 가속 페달을 밟는 것, 
                                그것이 우리가 느끼는 공허함의 정체입니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden order-2 md:order-1"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                                alt="Focus and clarity"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8 order-1 md:order-2"
                        >
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-4xl font-bold text-black">
                                    루플리의 해답: 도파민 리터러시
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    루플리는 단순히 자극을 차단하는 '디톡스'를 넘어, 
                                    도파민을 올바르게 읽고 활용하는 <span className="font-semibold text-black">리터러시</span>를 제안합니다.
                                </p>
                            </div>

                            <div className="bg-purple-400 p-8 md:p-10 rounded-2xl">
                                <p className="text-base md:text-lg text-black leading-relaxed">
                                    무분별하게 소모되던 에너지를 수거하여, 성취와 성장의 경로로 재배치하는 것.
                                    <span className="block mt-3 font-bold text-lg md:text-xl">
                                        우리는 이것을 '감각의 질서를 세우는 과정'이라 부릅니다.
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-black">
                                성취의 루프, 선순환의 시작
                            </h2>
                            <p className="text-base md:text-lg text-gray-700">
                                루플리가 설계한 시스템은 당신의 에너지를 선순환시킵니다.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black">진단</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    데이터 기반의 분석으로 나의 도파민 상태를 객관적으로 파악합니다.
                                </p>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black">전환</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    흩어진 페이직 도파민을 명확한 목표와 습관으로 연결합니다.
                                </p>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black">안착</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    탄탄하게 차오르는 토닉 도파민을 통해, 외부의 자극 없이도 스스로 움직이는 내면의 원동력을 완성합니다.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-purple-400 p-12 md:p-16 rounded-2xl text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                            LOOFLY
                        </h2>
                        <p className="text-lg md:text-xl text-black">
                            감각의 질서를 세우는 여정, 지금 시작하세요.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
