"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-500 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" 
                     style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                         backgroundSize: '40px 40px'
                     }}
                />
            </div>

            {/* Floating Circles */}
            <motion.div
                className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                            3분 도메인 유형 테스트
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80">
                            나에게 맞는 도메인을 찾아보세요
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link 
                            href="/test"
                            className="group relative inline-block"
                        >
                            <div className="absolute inset-0 bg-white blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                            <motion.div
                                className="relative px-8 sm:px-12 md:px-16 py-4 sm:py-5 bg-white text-purple-500 rounded-full font-bold text-lg sm:text-xl shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                지금 참여하기
                                <motion.span
                                    className="inline-block ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
