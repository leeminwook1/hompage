"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function LeadershipPage() {
    const steps = [
        {
            number: "STEP 1",
            title: "에너지 리딩",
            subtitle: "Energy Leading",
            points: [
                "리더 자신의 멘탈 모델을 점검하고 스트레스를 다스리는 법을 익힙니다.",
                "리더의 긍정적인 에너지를 팀 전체에 전파하는 '감정 전염' 기술을 습득합니다."
            ]
        },
        {
            number: "STEP 2",
            title: "피드백 루프",
            subtitle: "Feedback Loop",
            points: [
                "작은 성공(Small Win)을 즉각적으로 보상하여 팀원의 성취감을 극대화합니다.",
                "루플리만의 '성장 피드백' 스킬을 통해 구성원의 도파민을 성과로 연결합니다."
            ]
        },
        {
            number: "STEP 3",
            title: "목적지 정렬",
            subtitle: "Alignment",
            points: [
                "조직의 목표와 개인의 성장 동기를 하나로 연결하는 비전 설계력을 강화합니다.",
                "구성원이 지시 없이도 스스로 비상하고 싶게 만드는 자발적 몰입 환경을 구축합니다."
            ]
        }
    ]

    const outcomes = [
        {
            title: "영향력의 선순환",
            description: "리더의 긍정적 에너지가 팀원의 자발적 몰입을 끌어내는 선순환 구조를 만듭니다."
        },
        {
            title: "성과 가속화",
            description: "'성장 피드백'을 통해 팀원들이 작은 성취를 반복하며 더 큰 목표에 도전하게 합니다."
        },
        {
            title: "지속 가능한 조직",
            description: "리더가 없어도 스스로 움직이는 '자기 완결형 팀'으로 조직의 체질을 개선합니다."
        }
    ]

    const faqs = [
        {
            question: "일반적인 리더십 교육과 무엇이 다른가요?",
            answer: "이론 중심 교육에서 벗어나, 뇌과학적 관점(도파민 루프)에서 구성원의 행동 원리를 파악하고 실제 변화를 이끌어내는 '설계' 중심의 교육입니다."
        },
        {
            question: "리더 개인이 신청해도 되나요?",
            answer: "기업 단위뿐만 아니라, 리더십 역량을 키우고 싶은 개인 리더분들을 위한 오픈 클래스 일정도 마련되어 있습니다."
        }
    ]

    const pricingOptions = [
        {
            name: "BASIC",
            subtitle: "리더 마인드셋",
            target: "리더의 역할 정의와 자기 관리가 필요한 신임 리더",
            features: [
                "리더 멘탈 모델 진단",
                "에너지 리딩 워크숍",
                "감정 관리 툴킷 제공"
            ],
            duration: "1일 (4시간)",
            price: "1인당 25만원"
        },
        {
            name: "STANDARD",
            subtitle: "동기 설계형",
            target: "실질적인 팀 코칭과 피드백 기술이 필요한 관리자",
            features: [
                "BASIC 구성 포함",
                "피드백 루프 실습(Role-play)",
                "팀 동기 설계 가이드북"
            ],
            duration: "1일 (8시간) 또는 2회 분할",
            price: "1인당 50만원",
            highlighted: true
        },
        {
            name: "PREMIUM",
            subtitle: "조직 체질 개선형",
            target: "팀 전체의 일하는 방식을 바꾸고 싶은 경영진/리더",
            features: [
                "STANDARD 구성 포함",
                "1:1 리더십 코칭 (2회)",
                "팀 문화 온보딩 시스템 설계"
            ],
            duration: "6주 프로그램 (워크숍 + 밀착 코칭)",
            price: "별도 문의 (커스터마이징)"
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
                            Leadership Enhancement Program
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            영향력의 선순환,<br />
                            루플리 리더십
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic border-l-4 pl-6" style={{ borderColor: '#2828D0' }}>
                            "리더의 역할은 구성원의 도파민이 '성과'와 '성장'의 방향으로<br />
                            흐르도록 길을 만드는 것입니다."
                        </p>
                        <p className="text-lg text-gray-600">
                            지시와 통제를 넘어, 팀원이 스스로 움직이게 만드는<br />
                            <span className="font-bold bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">동기 설계 리더십 솔루션</span>
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
                            리더 혼자 고군분투하며<br />
                            팀의 에너지가<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">고갈되고 있지는 않나요?</span>
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>팀원들의 동기부여 방식이 고민인 초보 및 중간 관리자</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>단기 실적 압박으로 인해 팀 전체가 번아웃(Burn-out)된 상태</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>팀원들이 수동적으로만 반응하여 리더의 업무 부하가 임계점에 도달한 팀</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>'건강한 자극'이 사라지고 정체된 조직 문화를 바꾸고 싶은 리더</span>
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
                        <p className="text-lg text-gray-600">3단계로 구성된 체계적인 리더십 강화 프로세스</p>
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
                            이런 리더와 조직에게<br />
                            이 프로그램을 강력히 추천합니다
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>팀원 개개인의 특성에 맞는 맞춤형 동기부여 전략이 필요한 리더</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>실무와 관리 사이에서 역할 갈등을 겪고 있는 중간 관리자</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>침체된 팀 분위기를 쇄신하고 강력한 원팀(One-team)을 만들고 싶은 조직</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>구성원의 성장을 지원하면서도 확실한 성과를 내고 싶은 결과 중심적 리더</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Price & Options - Card Style */}
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

                        <div className="grid md:grid-cols-3 gap-8">
                            {pricingOptions.map((option, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl p-8 flex flex-col border-2 border-gray-200"
                                >
                                    <div className="text-center space-y-2 mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {option.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {option.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 mb-2">핵심 대상</p>
                                            <p className="text-sm text-gray-600">{option.target}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-gray-900 mb-2">주요 구성</p>
                                            <ul className="space-y-2">
                                                {option.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span style={{ color: '#2828D0' }}>•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-gray-900 mb-2">소요 시간</p>
                                            <p className="text-sm text-gray-600">{option.duration}</p>
                                        </div>

                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600 mb-1">비용</p>
                                            <p className="text-2xl font-bold" style={{ color: '#2828D0' }}>
                                                {option.price}
                                            </p>
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="block w-full py-3 rounded-full text-center font-medium transition-all mt-6 border-2 hover:bg-gray-50"
                                        style={{
                                            color: '#2828D0',
                                            borderColor: '#2828D0'
                                        }}
                                    >
                                        문의하기
                                    </Link>
                                </motion.div>
                            ))}
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
                            우리 팀을 바꾸는<br />
                            리더십 솔루션
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-white rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
                                style={{ color: '#2828D0' }}
                            >
                                프로그램 신청하기
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
                            >
                                상세 브로슈어 받기
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
