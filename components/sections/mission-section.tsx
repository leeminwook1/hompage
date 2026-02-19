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
            "우리는 당신을 괴어하는 나쁜 중독의 무프를 끊어내고,",
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
        <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-20"
                >
                    {sections.map((section, sectionIndex) => (
                        <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                            className="space-y-6 text-center"
                        >
                            {section.title && (
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
                                    {section.title}
                                </h2>
                            )}
                            
                            {sectionIndex === 0 && (
                                <div className="w-24 h-1 bg-purple-400 mx-auto my-8"></div>
                            )}
                            
                            <div className="space-y-3">
                                {section.content.map((text, textIndex) => (
                                    <p 
                                        key={textIndex}
                                        className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pt-12 text-center"
                    >
                        <p className="text-2xl md:text-3xl font-bold text-black">
                            이제 루플리와 함께 시작해 보세요.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
