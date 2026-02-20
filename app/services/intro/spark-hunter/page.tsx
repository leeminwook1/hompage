"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SparkHunterPage() {
    return (
        <div className="min-h-screen bg-blue-50 pt-32 pb-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* 뒤로가기 */}
                <Link
                    href="/services/intro"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
                >
                    ← 목록으로
                </Link>

                {/* 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 space-y-4"
                >
                    <div className="text-6xl">🔥</div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        스파크 헌터 루프
                    </h1>
                    <p className="text-lg font-medium" style={{ color: '#2828D0' }}>
                        강한 자극에 반응하는 유형
                    </p>
                </motion.div>

                {/* 이미지 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12"
                >
                    <Image
                        src="/intro1.jpg"
                        alt="스파크 헌터 루프"
                        fill
                        className="object-contain bg-gray-50"
                    />
                </motion.div>

                {/* 설명 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-8 rounded-2xl space-y-4" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.05) 0%, rgba(128, 96, 208, 0.05) 100%)' }}
                >
                    <h2 className="text-2xl font-bold text-black">특징</h2>
                    <p className="text-gray-700 leading-relaxed">
                        새로움에 강하게 끌리고, 빠르게 달리고, 빨리 지치는 패턴을 가진 유형입니다. 
                        트렌드를 남들보다 빨리 읽고 즉각 실행하는 추진력이 있지만, 
                        깊은 집중이 어렵고 강한 자극 없이는 무기력해질 수 있어요.
                    </p>
                    <div className="pt-4">
                        <h3 className="text-lg font-bold text-black mb-2">강점</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>트렌드를 남들보다 빨리 읽고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>생각하면 바로 실행하고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>에너지가 주변에 확산됩니다</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-lg font-bold text-black mb-2">주의점</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>루프 중독 (쇼츠 → 쇼츠 → 쇼츠)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>깊은 집중이 어려움</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>강한 자극 없으면 무기력</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>방향이 없으면 쉽게 소진됨</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center space-y-4"
                >
                    <p className="text-gray-700">나는 어떤 유형일까요?</p>
                    <Link
                        href="/services/test"
                        className="inline-block px-8 py-3 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                        style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                    >
                        테스트 시작하기
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
