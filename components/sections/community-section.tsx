"use client"

import { motion } from "framer-motion"

const communities = [
    {
        title: "코딩 스타터",
        description: "코딩 시작하기 위한 기초 프로그래밍 입문 과정 | 코딩 기초부터 실전까지 | 1:1 멘토링 | 1:1 코칭 | 1:1 피드백",
        tag: "코딩 입문",
        color: "from-purple-400 to-purple-600"
    },
    {
        title: "기획/개발 코칭",
        description: "기획 시작하기 위한 기초 프로그래밍 입문 과정 | 기획 기초부터 실전까지 | 1:1 멘토링 | 1:1 코칭 | 1:1 피드백",
        tag: "기획/개발",
        color: "from-purple-500 to-purple-700"
    },
    {
        title: "스킬 클래스/커뮤니티 입문",
        description: "스킬 시작하기 위한 기초 프로그래밍 입문 과정 | 스킬 기초부터 실전까지 | 1:1 멘토링 | 1:1 코칭 | 1:1 피드백",
        tag: "스킬 클래스",
        color: "from-pink-300 to-purple-500"
    }
]

export function CommunitySection() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <div className="text-center space-y-4">
                        <motion.p 
                            className="text-sm text-purple-500 font-semibold tracking-wider uppercase"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            관심과 도메인이 같아요 꼭
                        </motion.p>
                        <motion.h2 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            루플리 커뮤니티
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                        {communities.map((community, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${community.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                                
                                {/* Image Placeholder with Gradient */}
                                <div className={`aspect-video bg-gradient-to-br ${community.color} rounded-xl mb-6 relative overflow-hidden`}>
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.5, 0.3],
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-purple-500 transition-colors">
                                    {community.title}
                                </h3>
                                
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                                    {community.description}
                                </p>
                                
                                <div className="flex justify-end">
                                    <motion.button 
                                        className={`px-6 py-2 bg-gradient-to-r ${community.color} text-white rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {community.tag}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
