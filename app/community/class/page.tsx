"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClassPage() {
    const classes = [
        {
            title: "AI로 만드는 첫 웹사이트 (Python 멘토링)",
            description: "코딩을 몰라도 괜찮습니다. 생성형 AI를 활용해 처음부터 웹사이트를 직접 만들어보는 1:1 실전 멘토링입니다. Python 기초부터 게시판 제작, 나만의 포트폴리오 사이트 완성까지 단계별로 진행합니다. AI를 제대로 활용하는 방법과 실전 검색 노하우까지 함께 배우며, 결과물로 남는 프로젝트를 완성해보세요. 프로그래밍을 처음 시작하는 분도 부담 없이 참여할 수 있습니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
            status: "모집중"
        },
        {
            title: "Gemini로 배우는 AI 프롬프트 실전",
            description: "생성형 AI를 제대로 쓰고 싶다면, 핵심은 프롬프트입니다. 이 클래스는 Gemini를 활용해 프롬프트의 기초 개념부터 실무에서 바로 쓰는 고급 기법까지 단계적으로 배우는 1:1 실전 멘토링입니다. AI를 처음 접하는 분도 이해할 수 있도록 기본 구조부터 차근차근 설명하고, 직접 프롬프트를 설계·최적화하며 mini 프로젝트까지 완성합니다. 생성형 AI를 더 효율적이고 전략적으로 활용하고 싶은 분들께 추천드립니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            status: "모집 마감"
        },
        {
            title: "1:1 머신러닝 멘토링 (초급·중급)",
            description: "머신러닝을 처음 시작하는 분부터 이론을 깊이 이해하고 싶은 분까지 위한 1:1 멘토링입니다. 초급은 개념과 데이터 이해부터, 중급은 최적화·모델 이론까지 다루며 각 과정은 미니 프로젝트로 마무리합니다. 기초부터 실전 적용까지 단계적으로 배우고 싶은 분들께 추천드립니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
            status: "모집중"
        },
        {
            title: "8주 완성 코딩테스트 1:1 멘토링",
            description: "코딩테스트를 제대로 준비하고 싶은 분들을 위한 1:1 실전 멘토링입니다. 시간복잡도와 자료구조 기초부터 DFS·BFS, 그리디, 이진탐색, DP, 최단거리 알고리즘까지 8주 동안 핵심을 단계적으로 정리합니다. Beginner·Advanced 난이도로 운영되어 초보자도 참여 가능하며, 기출 기반 실전 연습과 피드백으로 문제 해결 방향을 잡아드립니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
            status: "모집중"
        },
        {
            title: "대학생 맞춤 1:1 수학 멘토링",
            description: "전공 수업과 취업 준비에 필요한 수학을 체계적으로 정리하는 1:1 멘토링입니다. 고교 수학 복습부터 선형대수·이산수학 등 대학 기초, 다변수 미적분과 최적화 같은 실전 수학까지 단계별로 진행합니다. 수학이 약한 분도 눈높이에 맞춰 차근차근 이해할 수 있도록 돕습니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
            status: "모집 마감"
        },
        {
            title: "Spring Boot 실전 프로젝트 스터디",
            description: "Java 기초만 알아도 괜찮습니다. Spring Boot로 REST API를 만들고, DB 연동과 인증 구현을 거쳐 최종적으로 AWS 배포까지 경험하는 실전 프로젝트 스터디입니다. 매주 이론 정리, 라이브 코딩, 코드 리뷰를 통해 협업 감각과 백엔드 역량을 함께 키웁니다. 혼자서는 막혔던 분, 포트폴리오를 완성하고 싶은 분들께 추천드립니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
            status: "모집중"
        },
        {
            title: "캠퍼스·데일리 스냅 무료 촬영",
            description: "자연스럽고 편안한 순간을 기록하는 루스 스냅에서 캠퍼스·데일리 스냅 무료 촬영 참여자를 모집합니다. 모델 경험이 없어도 괜찮으며, 원하는 분위기를 사전 체크 후 1:1로 촬영을 진행합니다. 약 1시간 촬영 후 보정본 3~5장을 제공하며, 가장 나다운 하루를 남기고 싶은 서울 소재 대학생이라면 누구나 참여 가능합니다.",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
            status: "모집중"
        },
        {
            title: "필체 브랜딩 교정 클래스",
            description: "필체는 나를 보여주는 또 하나의 브랜드입니다. 이 클래스는 필압·속도·비율을 분석하는 필적학 기반 진단을 통해 자신의 필체 성향을 이해하고, 원하는 이미지에 맞게 정돈하는 1:1 교정 과정입니다. 감각적인 모방이 아닌, 이론과 분석을 바탕으로 반복 가능한 필기 습관을 만들어 안정감 있고 신뢰감 있는 필체로 완성합니다. ✍🏻",
            category: "도구 활용",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
            status: "모집 마감"
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
                            LOOFLY CLASS
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            루플리 클래스
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            새로운 경험과 몰입을 통해<br />
                            성취 기반 도파민을 경험하는 시작점
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
                            루플리 클래스는<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">
                                성장과 성취에서 오는<br />
                                지속 가능한 도파민
                            </span>을 제공합니다
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            짧지만 밀도 있는 경험을 통해 몰입, 성취, 배움의 기쁨을 느끼고<br />
                            그 경험이 다시 삶의 활력과 동기로 이어지는 선순환 루프를 만듭니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Class List */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            진행 중인 클래스
                        </h2>
                        <p className="text-lg text-gray-600">
                            다양한 분야의 전문가들과 함께 새로운 경험을 시작하세요
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {classes.map((classItem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#2828D0] transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image */}
                                    <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0">
                                        <Image
                                            src={classItem.image}
                                            alt={classItem.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-black/50 backdrop-blur-sm">
                                                {classItem.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#2828D0] transition-colors">
                                                {classItem.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed line-clamp-3">
                                                {classItem.description}
                                            </p>
                                        </div>

                                        <div className="mt-6">
                                            {classItem.status === "모집 마감" ? (
                                                <button
                                                    disabled
                                                    className="px-6 py-3 rounded-full font-medium text-gray-400 bg-gray-100 cursor-not-allowed"
                                                >
                                                    모집 마감
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={(e) => e.preventDefault()}
                                                    className="px-6 py-3 rounded-full font-medium text-white transition-opacity hover:opacity-90"
                                                    style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                                                >
                                                    참여하기
                                                </button>
                                            )}
                                        </div>
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
