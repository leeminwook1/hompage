"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SparkHunterPage() {
    const images = ["/intro1.jpg", "/intro11.jpg", "/intro12.jpg"]

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
                    <div className="text-6xl">🔥</div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        스파크 헌터 루프
                    </h1>
                    <p className="text-lg text-purple-600 font-medium">
                        강한 자극에 반응하는 유형
                    </p>
                </motion.div>

                {/* 이미지 갤러리 */}
                <div className="space-y-8 mb-12">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={image}
                                alt={`스파크 헌터 루프 ${index + 1}`}
                                fill
                                className="object-contain bg-gray-50"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* 설명 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-purple-50 p-8 rounded-2xl space-y-4"
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
                                <span className="text-purple-600">✓</span>
                                <span>트렌드를 남들보다 빨리 읽고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✓</span>
                                <span>생각하면 바로 실행하고</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600">✓</span>
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
                    transition={{ delay: 0.8 }}
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
