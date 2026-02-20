"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" 
                     style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                         backgroundSize: '40px 40px'
                     }}
                />
            </div>

            {/* Floating Circles */}
            <motion.div
                className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(128, 96, 208, 0.3)' }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(40, 40, 208, 0.2)' }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
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
                        <p className="text-lg sm:text-xl text-white">
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
                            href="/services/test"
                            className="group relative inline-block"
                        >
                            <div className="absolute inset-0 bg-white blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                            <motion.div
                                className="relative px-8 sm:px-12 md:px-16 py-4 sm:py-5 bg-white rounded-full font-bold text-lg sm:text-xl shadow-2xl border-2"
                                style={{ color: '#2828D0', borderColor: '#8060D0' }}
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
