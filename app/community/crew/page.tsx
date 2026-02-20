"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function CrewPage() {
    const crews = [
        {
            title: "차차 중국어 크루",
            subtitle: "一步一步 学中文!",
            description: "한 걸음씩 함께 배우는 대학생·20대 중국어 크루를 모집합니다. 기초부터 중급까지 수준별로 운영하며, 언어교류는 물론 중국 영화 감상과 음식·문화 체험까지 즐길 수 있는 모임입니다. 딱딱한 스터디가 아닌, 편안한 분위기 속에서 자연스럽게 중국어를 배우고 싶은 분들께 추천드립니다.",
            tags: ["중국어 학습", "친목 & 자유 활동"],
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
            status: "모집 마감",
            period: "2026.01.28 ~ 2026.02.04"
        },
        {
            title: "전시과몰입",
            subtitle: "방학 동안 전시에 제대로 빠져보는 전시 소모임",
            description: "전시회에 제대로 빠져보고 싶은 사람들을 위한 전시 감상 크루입니다. 서울 시내 미술관·전시를 함께 관람하되, 말 많은 관람러·조용히 감상하는 타입·사진 중심 타입 등 관람 스타일에 맞춰 소그룹으로 운영합니다. 부담 없는 분위기에서 각자 편한 만큼 나누며, 정기 모임과 번개 관람으로 전시에 깊게 몰입하는 시간을 함께합니다.",
            tags: ["전시 관람", "문화 체험"],
            image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80",
            status: "모집중",
            period: "상시 모집"
        },
        {
            title: "우마이 갓 일식 크루",
            subtitle: "일식에 진심인 사람들의 맛집 탐방",
            description: "일식에 진심인 사람들을 위한 맛집 탐방 크루입니다. 현지 느낌 제대로 나는 일식 맛집을 함께 찾아가고, 다양한 메뉴를 나눠 먹으며 실패 없는 한 끼를 즐깁니다. 소규모로 운영되며 월 1회 정기 모임을 중심으로 맛집 추천과 투표로 장소를 정해 활동합니다. 일식을 제대로 즐기고 싶은 분들과 함께합니다.",
            tags: ["일식 맛집", "소규모 모임"],
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
            status: "모집중",
            period: "~ 02.18"
        },
        {
            title: "PIN-UP BUTTER 볼링 크루",
            subtitle: "볼링을 중심으로 자연스럽게 친해지는",
            description: "볼링을 중심으로 자연스럽게 친해지는 볼링 크루입니다. 실력과 상관없이 누구나 함께 즐기며 배우고, 팀전·개인전과 미니대회로 짜릿한 재미를 경험합니다. 매월 2~3회 정기 모임과 보드게임·영화·피크닉 등 다양한 친목 활동까지, 서울에서 새로운 인연과 추억을 만들고 싶은 분들과 함께합니다.",
            tags: ["볼링", "친목 활동"],
            image: "/butter.jpg",
            status: "모집중",
            period: "02.01 ~ 02.28"
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                            LOOFLY CREW
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            루플리 크루
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            건강한 도파민을 지속적으로 추구하는 사람들의 모임<br />
                            함께 성장하고, 함께 즐기는 커뮤니티
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            루플리 크루는<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">
                                서로를 단단하게 만드는 관계
                            </span>를 지향합니다
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            단순한 친목이나 일시적인 재미가 아니라,<br />
                            건강한 루틴과 성장 중심의 활동을 통해<br />
                            삶의 리듬을 함께 만들어가는 커뮤니티입니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Crew Cards */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            현재 모집 중인 크루
                        </h2>
                        <p className="text-lg text-gray-600">
                            다양한 관심사와 활동으로 함께 성장하는 크루를 만나보세요
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {crews.map((crew, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#2828D0] transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={crew.image}
                                        alt={crew.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                            {crew.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {crew.title}
                                        </h3>
                                        <p className="text-sm font-medium" style={{ color: '#2828D0' }}>
                                            {crew.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed line-clamp-4">
                                        {crew.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {crew.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-sm"
                                                style={{ background: 'rgba(40, 40, 208, 0.1)', color: '#2828D0' }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-500 mb-4">
                                            모집 기간: {crew.period}
                                        </p>
                                        {crew.status === "모집 마감" ? (
                                            <button
                                                disabled
                                                className="w-full py-3 rounded-full font-medium text-gray-400 bg-gray-100 cursor-not-allowed"
                                            >
                                                모집 마감
                                            </button>
                                        ) : (
                                            <button
                                                onClick={(e) => e.preventDefault()}
                                                className="w-full py-3 rounded-full font-medium text-white transition-opacity hover:opacity-90"
                                                style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                                            >
                                                참여하기
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
