"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const types = [
    {
        id: 1,
        emoji: "🔥",
        title: "스파크 헌터 루프",
        subtitle: "강한 자극에 반응하는 유형",
        description: "새로움에 강하게 끌리고, 빠르게 달리고, 빨리 지치는 패턴. 트렌드를 남들보다 빨리 읽고 즉각 실행하는 추진력이 있지만, 깊은 집중이 어렵고 강한 자극 없이는 무기력해질 수 있어요.",
        image: "/intro1.jpg",
        slug: "spark-hunter"
    },
    {
        id: 2,
        emoji: "🌟",
        title: "시그널 의존 루프",
        subtitle: "타인의 반응에 반응하는 유형",
        description: "좋아요, 댓글, 조회수에 마음이 흔들리는 패턴. 사람 마음을 잘 읽고 관계 감각이 뛰어나며 브랜드형 인간이 될 가능성이 높지만, 반응이 끊기면 자존감도 함께 흔들릴 수 있어요.",
        image: "/intro2.jpg",
        slug: "signal-dependent"
    },
    {
        id: 3,
        emoji: "🧱",
        title: "설계자 루프",
        subtitle: "계획과 루틴으로 움직이는 유형",
        description: "단기 보상보다 장기 목표가 편하고, 천천히라도 끝까지 가는 패턴. 한 번 시작하면 오래 지속되고 성취를 쌓아올리는 힘이 있지만, 감정을 눌러두고 버티다 번아웃이 올 수 있어요.",
        image: "/intro3.jpg",
        slug: "architect"
    },
    {
        id: 4,
        emoji: "🌊",
        title: "관찰자 루프",
        subtitle: "의미와 내면에 반응하는 유형",
        description: "강한 자극보다 의미가 중요하고, 혼자 몰입하는 시간이 편한 패턴. 창작과 연구에 강하고 깊이 있는 사고를 하지만, 현실 속 실행이 늦어지고 머릿속 세계에만 머물 수 있어요.",
        image: "/intro4.jpg",
        slug: "observer"
    }
]

export default function IntroPage() {
    return (
        <div className="min-h-screen bg-blue-50 pt-32 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* 헤더 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        4가지 도파민 유형
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        당신은 어떤 패턴으로 도파민을 소비하고 있나요?<br />
                        각 유형의 특징을 알아보세요.
                    </p>
                </motion.div>

                {/* 유형 카드들 */}
                <div className="space-y-12">
                    {types.map((type, index) => (
                        <motion.div
                            key={type.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* 이미지 */}
                            <Link 
                                href={`/services/intro/${type.slug}`}
                                className={`${index % 2 === 1 ? "md:order-2" : ""}`}
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all group">
                                    <Image
                                        src={type.image}
                                        alt={type.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 px-4 py-2 rounded-full">
                                            상세보기 →
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {/* 내용 */}
                            <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                <div className="text-5xl">{type.emoji}</div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                                        {type.title}
                                    </h2>
                                    <p className="text-sm md:text-base font-medium" style={{ color: '#2828D0' }}>
                                        {type.subtitle}
                                    </p>
                                </div>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {type.description}
                                </p>
                                <Link
                                    href={`/services/intro/${type.slug}`}
                                    className="inline-block text-sm font-medium hover:opacity-80 transition-opacity"
                                    style={{ color: '#2828D0' }}
                                >
                                    자세히 보기 →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center space-y-6"
                >
                    <div className="p-8 md:p-12 rounded-2xl space-y-4" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.1) 0%, rgba(128, 96, 208, 0.1) 100%)' }}>
                        <h3 className="text-2xl md:text-3xl font-bold text-black">
                            나는 어떤 유형일까?
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                            24개 문항으로 당신의 도파민 유형을 정확하게 분석해드려요.
                        </p>
                        <Link
                            href="/services/test"
                            className="inline-block px-8 py-3 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                            style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                        >
                            테스트 시작하기
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
