"use client"

import { motion } from "framer-motion"

const sections = [
    {
        title: "당신의 일상을 지켜하는 기저 에너지, 토닉 도파민.",
        content: [
            "노력 없이 얻은 보상은 우리를 우기적의 권리에 가둡니다.",
            "하지만 성취를 향한 몰입은 우리를 진정한 성장의 길로 안내합니다."
        ]
    },
    {
        content: [
            "숏폼 영상이나 단순한 자극처럼 순삽게 얻은 쾌락은 순식간에 타올랐다 사라지며,",
            "그 끝에는 언제나 깊은 허무함만을 남깁니다.",
            "반면, 목표를 향해 나아가는 과정에서 얻는 성취의 즐거움인 '좋은 도파민'은",
            "우리를 진정한 몰입과 성장의 길로 인내합니다."
        ]
    },
    {
        content: [
            "루플리(loofly)는 바로 이 지점에서 시작되었습니다.",
            "우리는 당신을 갉아먹는 나쁜 중독의 루프를 과감히 끊어내고,",
            "삶의 에너지를 건강한 성취로 되돌리는 건강한 도파민의 선순환을 설계하고자 합니다."
        ]
    },
    {
        content: [
            "우리의 목표는 단순히 순간의 쾌락인 '페이직 도파민'에 휘둘리는 삶이 아닙니다.",
            "루플리는 당신의 일상을 지탱하는 기저 에너지인 '토닉 도파민'의 집서를 세우고자 합니다."
        ]
    },
    {
        content: [
            "지금의 끝에 오는 공허함 대신, 탄탄하게 차오르는 내면의 원동력,",
            "자극에 휘둘리는 삶에서 벗어나 당신만의 리듬을 되찾는 여정."
        ]
    }
]

export function MissionSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-16 md:space-y-20">
                    {sections.map((section, sectionIndex) => (
                        <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-center space-y-6"
                        >
                            {section.title && (
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.3,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-relaxed"
                                >
                                    {section.title}
                                </motion.h2>
                            )}
                            
                            {sectionIndex === 0 && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="w-20 h-0.5 mx-auto"
                                    style={{ background: 'linear-gradient(90deg, #2828D0 0%, #8060D0 100%)' }}
                                />
                            )}
                            
                            <div className="space-y-4">
                                {section.content.map((text, textIndex) => (
                                    <motion.p
                                        key={textIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.7,
                                            delay: 0.4 + (textIndex * 0.1),
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="pt-8 text-center"
                    >
                        <motion.p
                            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            이제 루플리와 함께 시작해 보세요.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
