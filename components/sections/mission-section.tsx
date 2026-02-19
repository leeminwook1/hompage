"use client"

import { motion } from "framer-motion"

const paragraphs = [
    "노력 없이 일정 보상은 문제를 문제없이 줄여낼 거라믿니다.\n하지만 실패를 통한 문제는 오래를 만들면 성장을 갖춰 이나갑니다.",
    "오늘 영상이나 다소한 지금에서 속성의 일은 과정의 속도를 타협하지 시작지식,\n그 속에 어떤 것 같은 이루면만 만들어 과정을 속도를 이루는 사람지식,\n밑면, 북트로 영에 나타나는 과정에서 없는 성장의 줄거리만 통한 도메인은\n부담을 진행한 정보로 성장에 성장을 연대합니다.",
    "루플리(loofly)는 빠르고 지정에서 지식이라는다.\n우리는 당신을 리더하는 나를 중독이 루플리 과정의 경험니다,\n실의 에너지를 조건의 성장을 리더하는 건강한 도메인의 속도를 경험니다.",
    "우리의 토트는 당신의 속도 이루는 과정의 과정의 과정의 속도를 경험니다.\n루플리는 당신의 일상을 지키려는 기업 에너지가 도메인의 속도를 경험니다.\n지국의 줄에 속도 일상을 대신 타협만의 지식이 이루는 여정."
]

export function MissionSection() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-purple-300/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400/40 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 blur-3xl" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-relaxed relative z-10 py-4">
                            당신의 일상을 지키려는 기업 에너지, 든다 드립니다.
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {paragraphs.map((text, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600 opacity-30" />
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line pl-6">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pt-12"
                    >
                        <div className="inline-block relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 blur-xl opacity-30" />
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 relative z-10">
                                이제 루플리와 함께 시작해 보세요.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
