"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TeamBondingPage() {
    const steps = [
        {
            number: "STEP 1",
            title: "심리적 안전감",
            subtitle: "Psychological Safety",
            points: [
                "취약성을 공유하고 서로의 다름을 수용하는 '두려움 없는 소통 환경'을 구축합니다.",
                "보이지 않는 심리적 장벽을 허물고 팀 내 신뢰의 기초를 재설계합니다."
            ]
        },
        {
            number: "STEP 2",
            title: "성장 커뮤니티",
            subtitle: "Growth Community",
            points: [
                "팀원끼리 서로의 목표 달성을 돕고 건강한 자극을 주고받는 '루플리 지지 시스템'을 구축합니다.",
                "단순한 친목을 넘어 서로의 성장을 인증하고 응원하는 크루 문화를 이식합니다."
            ]
        },
        {
            number: "STEP 3",
            title: "시너지 루프",
            subtitle: "Synergy Loop",
            points: [
                "개별 강점이 합쳐져 조직의 성과로 연결되는 구조를 직접 경험합니다.",
                "공동의 성공 경험을 통해 소속감을 고취하고 거대한 성장의 선순환 구조를 완성합니다."
            ]
        }
    ]

    const outcomes = [
        {
            title: "신뢰 기반 소통",
            description: "비난에 대한 두려움 없이 의견을 제안하고 수용하는 유연한 조직 문화를 형성합니다."
        },
        {
            title: "자발적 지지 시스템",
            description: "팀원이 서로의 페이스메이커가 되어 함께 성과를 만들어가는 구조를 갖춥니다."
        },
        {
            title: "소속감과 자부심",
            description: "'우리'라는 정체성을 강화하여 이탈을 방지하고 조직에 대한 로열티를 높입니다."
        }
    ]

    const faqs = [
        {
            question: "일반적인 레크리에이션이나 팀 빌딩과 무엇이 다른가요?",
            answer: "단순히 즐거운 시간을 보내는 것에 그치지 않고, 업무 현장에서 지속될 수 있는 '성장 인증 시스템'과 '소통 매뉴얼'을 실질적으로 남겨드립니다."
        },
        {
            question: "갈등이 심한 팀도 참여 가능한가요?",
            answer: "네, 갈등의 원인을 객관적으로 바라보는 진단 세션을 포함하여 안전한 환경에서 문제를 해결할 수 있도록 돕습니다."
        },
        {
            question: "루플리 크루 시스템이 무엇인가요?",
            answer: "습관 형성과 성장을 함께 돕는 루플리만의 커뮤니티 운영 노하우를 조직의 특성에 맞춰 최적화한 시스템입니다."
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                            Team Bonding & Communication Program
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            팀 본딩 및<br />
                            소통 역량 강화
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic border-l-4 pl-6" style={{ borderColor: '#2828D0' }}>
                            "혼자서는 끊기 힘든 나쁜 습관도,<br />
                            함께라면 성장의 루프가 됩니다."
                        </p>
                        <p className="text-lg text-gray-600">
                            서로의 다름을 '자극'이 아닌 '동력'으로 전환하는<br />
                            <span className="font-bold bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">조직 응집력 강화 솔루션</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            우리 팀은 서로에게<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">'성장의 동력'</span>인가요,<br />
                            아니면 '감정 소모의 대상'인가요?
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>심리적 안전감이 낮아 소통이 단절되고 비난에 대한 두려움이 있는 팀</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>부서 간 또는 팀원 간의 보이지 않는 벽으로 협업 효율이 떨어진 상태</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>새로운 프로젝트나 큰 변화를 앞두고 강력한 원팀(One Team)의 결속이 필요한 팀</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>서로의 다름을 인정하지 못해 갈등 해결에 에너지를 낭비하는 조직</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Program Steps */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            프로그램 구성
                        </h2>
                        <p className="text-lg text-gray-600">3단계로 구성된 체계적인 팀 본딩 프로세스</p>
                    </motion.div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-bold" style={{ color: '#2828D0' }}>
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{step.subtitle}</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 pl-20">
                                    {step.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <span style={{ color: '#2828D0' }}>•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                {index < steps.length - 1 && (
                                    <div className="w-full h-px mt-8" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(40, 40, 208, 0.2) 50%, transparent 100%)' }} />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Customer */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            이런 조직에게<br />
                            이 프로그램을 강력히 추천합니다
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>신규 입사자나 신설 부서의 빠른 안착(On-boarding)이 필요한 조직</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>프로젝트 기반의 협업이 잦아 유연하고 긴밀한 소통이 필수적인 팀</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>갈등 관리 비용을 줄이고 심리적 안전감을 통해 창의성을 극대화하고 싶은 기업</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>'함께 성장하는 즐거움'을 기업 문화의 핵심 가치로 삼고 싶은 리더</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Price & Options - Horizontal Cards with Icons */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                            가격 및 옵션
                        </h2>

                        <div className="space-y-6">
                            {/* BASIC */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#2828D0] transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                            B
                                        </div>
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">BASIC <span className="text-lg font-normal text-gray-600">(팀 본딩형)</span></h3>
                                            <p className="text-sm text-gray-600 mt-1">가벼운 분위기 속에서 팀워크를 다지고 싶은 팀</p>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">주요 구성</p>
                                                <ul className="space-y-1 text-gray-600">
                                                    <li>• 심리적 안전감 워크숍</li>
                                                    <li>• 다름의 이해(진단)</li>
                                                    <li>• 팀 본딩 액티비티</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">소요 시간</p>
                                                <p className="text-gray-600">1일 (4시간 내외)</p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">비용</p>
                                                <p className="text-2xl font-bold" style={{ color: '#2828D0' }}>1인당 15만원</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link
                                            href="/contact"
                                            className="block px-6 py-3 border-2 rounded-full text-center font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                                            style={{ color: '#2828D0', borderColor: '#2828D0' }}
                                        >
                                            문의하기
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* STANDARD */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#2828D0] transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                            S
                                        </div>
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">STANDARD <span className="text-lg font-normal text-gray-600">(응집력 강화형)</span></h3>
                                            <p className="text-sm text-gray-600 mt-1">깊이 있는 대화와 협업 구조 설계가 필요한 조직</p>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">주요 구성</p>
                                                <ul className="space-y-1 text-gray-600">
                                                    <li>• BASIC 구성 포함</li>
                                                    <li>• 성장 커뮤니티 규칙 수립</li>
                                                    <li>• 시너지 루프 시뮬레이션</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">소요 시간</p>
                                                <p className="text-gray-600">1일 (8시간) 또는 2회 분할</p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">비용</p>
                                                <p className="text-2xl font-bold" style={{ color: '#2828D0' }}>1인당 30만원</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link
                                            href="/contact"
                                            className="block px-6 py-3 border-2 rounded-full text-center font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                                            style={{ color: '#2828D0', borderColor: '#2828D0' }}
                                        >
                                            문의하기
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                            {/* PREMIUM */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#2828D0] transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                            P
                                        </div>
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">PREMIUM <span className="text-lg font-normal text-gray-600">(문화 이식형)</span></h3>
                                            <p className="text-sm text-gray-600 mt-1">조직 전체의 커뮤니케이션 체질을 바꾸고 싶은 기업</p>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">주요 구성</p>
                                                <ul className="space-y-1 text-gray-600">
                                                    <li>• STANDARD 구성 포함</li>
                                                    <li>• 8주간의 크루 시스템 관리</li>
                                                    <li>• 조직 소통 문화 가이드 구축</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">소요 시간</p>
                                                <p className="text-gray-600">8주 프로그램<br />(정기 워크숍 4회)</p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 mb-2">비용</p>
                                                <p className="text-2xl font-bold" style={{ color: '#2828D0' }}>별도 문의<br /><span className="text-sm font-normal text-gray-600">(커스터마이징)</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link
                                            href="/contact"
                                            className="block px-6 py-3 border-2 rounded-full text-center font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                                            style={{ color: '#2828D0', borderColor: '#2828D0' }}
                                        >
                                            문의하기
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Outcomes */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            핵심 성과
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {outcomes.map((outcome, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl space-y-4"
                                    style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.05) 0%, rgba(128, 96, 208, 0.05) 100%)' }}
                                >
                                    <h3 className="text-xl font-bold" style={{ color: '#2828D0' }}>
                                        {outcome.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {outcome.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            자주 묻는 질문
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-l-4 pl-6 py-4" style={{ borderColor: '#2828D0' }}>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        Q. {faq.question}
                                    </h3>
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            우리 팀을<br />
                            성장 루프에 합류시키기
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-white rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
                                style={{ color: '#2828D0' }}
                            >
                                맞춤형 워크숍 문의
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
                            >
                                프로그램 제안서 다운로드
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
