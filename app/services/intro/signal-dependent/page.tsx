"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SignalDependentPage() {
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
                    <div className="text-6xl">🌟</div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        시그널 의존 루프
                    </h1>
                    <p className="text-lg font-medium" style={{ color: '#2828D0' }}>
                        타인의 반응에 반응하는 유형
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
                        src="/intro2.jpg"
                        alt="시그널 의존 루프"
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
                        좋아요, 댓글, 조회수에 마음이 흔들리는 패턴을 가진 유형입니다. 
                        사람 마음을 잘 읽고 관계 감각이 뛰어나며 브랜드형 인간이 될 가능성이 높지만, 
                        반응이 끊기면 자존감도 함께 흔들릴 수 있어요.
                    </p>
                    <div className="pt-4">
                        <h3 className="text-lg font-bold text-black mb-2">강점</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>사람 마음을 잘 읽고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>위기를 빠르게 캐치하고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>관계 감각이 뛰어나고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: '#2828D0' }}>✓</span>
                                <span>스스로 브랜드처럼 보이게 할 줄 압니다</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-lg font-bold text-black mb-2">주의점</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>좋아요 적으면 급 다운</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>비교에 무너짐</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>칭찬 없으면 의욕 0</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span>자존감이 외부에 묶임</span>
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
