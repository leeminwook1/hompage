"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ArchitectPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-16 px-6">
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
                    <div className="text-6xl">🧱</div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        설계자 루프
                    </h1>
                    <p className="text-lg text-purple-600 font-medium">
                        계획과 루틴으로 움직이는 유형
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
                        src="/intro3.jpg"
                        alt="설계자 루프"
                        fill
                        className="object-contain bg-gray-50"
                    />
                </motion.div>

                {/* 설명 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-purple-50 p-8 rounded-2xl space-y-4"
                >
                    <h2 className="text-2xl font-bold text-black">특징</h2>
                    <p className="text-gray-700 leading-relaxed">
                        단기 보상보다 장기 목표가 편하고, 천천히라도 끝까지 가는 패턴을 가진 유형입니다. 
                        한 번 시작하면 오래 지속되고 성취를 쌓아올리는 힘이 있지만, 
                        감정을 눌러두고 버티다 번아웃이 올 수 있어요.
                    </p>
                    <div className="pt-4">
                        <h3 className="text-lg font-bold text-black mb-2">강점</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✓</span>
                                <span>단기 보상보다 장기 목표가 편하고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✓</span>
                                <span>루틴이 있어야 안정되고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✓</span>
                                <span>천천히라도 끝까지 가고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✓</span>
                                <span>성취를 쌓는 타입</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-lg font-bold text-black mb-2">주의점</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>번아웃 와도 멈추기 어려움</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>회복 속도 느림</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>감정을 눌러두고 계속 달림</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>"난 괜찮아" 하면서 버티다가 폭발</span>
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
                        className="inline-block px-8 py-3 bg-purple-400 text-black rounded-full font-medium hover:bg-purple-500 transition-colors"
                    >
                        테스트 시작하기
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
