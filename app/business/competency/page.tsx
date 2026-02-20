"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CompetencyPage() {
    const steps = [
        {
            number: "STEP 1",
            title: "강점 자각",
            subtitle: "Strength Awareness",
            points: [
                "데이터 기반 진단을 통해 내가 '언제' 몰입하고 성취감을 느끼는지 객관적으로 파악합니다.",
                "단순 성격 검사를 넘어 개인이 가진 '천성적 강점'을 도출합니다."
            ]
        },
        {
            number: "STEP 2",
            title: "몰입 설계",
            subtitle: "Flow Design",
            points: [
                "일시적 쾌락이 아닌, 업무 내에서 '성취 도파민'을 이끌어낼 수 있는 개인별 과업 설계법을 익힙니다.",
                "나쁜 도파민(단순 자극)에 분산되던 에너지를 강점 발휘로 전환하는 전략을 세웁니다."
            ]
        },
        {
            number: "STEP 3",
            title: "자기 효능감",
            subtitle: "Self-Efficacy",
            points: [
                "내가 통제할 수 있는 강점을 발견함으로써 무기력을 극복하고 업무 주도성을 회복합니다.",
                "발견한 강점을 실무 현장에 즉시 적용할 수 있는 액션 플랜을 수립합니다."
            ]
        }
    ]

    const outcomes = [
        {
            title: "에너지 전환",
            description: "가짜 도파민에 낭비되던 에너지를 성과를 만드는 '강점 몰입'으로 전환합니다."
        },
        {
            title: "주도성 회복",
            description: "통제 가능한 강점을 인지하여 수동적 태도에서 벗어나 업무 주도권을 잡습니다."
        },
        {
            title: "지속 가능한 성장",
            description: "외적 보상 없이도 스스로 동기를 부여하는 '내적 성장 엔진'을 장착합니다."
        }
    ]

    const faqs = [
        {
            question: "진단 도구는 무엇을 사용하나요?",
            answer: "검증된 글로벌 강점 진단 도구 및 자체 개발한 '도파민-강점 연결 리포트'를 혼합 사용합니다."
        },
        {
            question: "소규모 스타트업도 신청 가능한가요?",
            answer: "네, 5인 이하 소규모 팀을 위한 맞춤형 집중 세션도 준비되어 있습니다."
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
                            Competency Enhancement Program
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            나만의 성장 엔진,<br />
                            자기 강점 발견
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic border-l-4 pl-6" style={{ borderColor: '#2828D0' }}>
                            "무의식적인 반응을 멈추고, 고유한 강점에 몰입(Flow)할 때<br />
                            진짜 에너지가 깨어납니다."
                        </p>
                        <p className="text-lg text-gray-600">
                            단순한 진단을 넘어, 도파민의 방향을 '소비'에서 '성취'로 바꾸는<br />
                            <span className="font-bold bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">강점 루프 설계 솔루션</span>
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
                            우리 팀의 에너지가 혹시<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">'낮은 자극'</span>에만<br />
                            머물러 있지는 않나요?
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>업무의 의미보다 숏폼, 단순 자극 등 '가짜 도파민'에 익숙해진 상태</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>자신의 강점을 몰라 매너리즘과 무기력에 빠진 구성원</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>보상(월급, 휴가)에만 반응하고 업무 자체에서는 즐거움을 찾지 못하는 팀</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>새로운 시도보다 익숙하고 편한 방식에 안주하려는 경향</span>
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
                        <p className="text-lg text-gray-600">3단계로 구성된 체계적인 강점 발견 프로세스</p>
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
                            이런 팀에게 이 프로그램을<br />
                            강력히 추천합니다
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>자신의 업무 강점을 찾지 못해 매너리즘에 빠진 구성원이 많은 팀</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>보상 외에 업무 과정 자체에서 몰입의 즐거움을 되찾고 싶은 조직</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>구성원 개개인의 강점에 맞춘 적재적소의 업무 배치가 필요한 리더</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: '#2828D0' }}>•</span>
                                <span>조직 내 '자기 주도적 성장 문화'를 정착시키고 싶은 인사 담당자</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Price & Options Table */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            가격 및 옵션
                        </h2>

                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2" style={{ borderColor: '#2828D0' }}>
                                        <th className="text-left p-4 font-bold text-gray-900">구분</th>
                                        <th className="text-left p-4 font-bold text-gray-900">BASIC<br /><span className="text-sm font-normal text-gray-600">(강점 진단형)</span></th>
                                        <th className="text-left p-4 font-bold text-gray-900">STANDARD<br /><span className="text-sm font-normal text-gray-600">(몰입 설계형)</span></th>
                                        <th className="text-left p-4 font-bold text-gray-900">PREMIUM<br /><span className="text-sm font-normal text-gray-600">(조직 문화형)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-medium text-gray-900">핵심 대상</td>
                                        <td className="p-4 text-gray-600">개인의 강점을 빠르게 파악하고 싶은 소규모 팀</td>
                                        <td className="p-4 text-gray-600">강점 발견을 실제 업무 설계까지 연결하고 싶은 조직</td>
                                        <td className="p-4 text-gray-600">조직 전체의 몰입 구조와 문화를 바꾸고 싶은 기업</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-medium text-gray-900">주요 구성</td>
                                        <td className="p-4 text-gray-600">
                                            • 데이터 기반 강점 진단<br />
                                            • 개인별 강점 리포트 제공<br />
                                            • 1회성 강점 해석 워크숍
                                        </td>
                                        <td className="p-4 text-gray-600">
                                            • BASIC 구성 포함<br />
                                            • 도파민 루프/몰입 설계 워크숍<br />
                                            • 개인별 액션 플랜 수립
                                        </td>
                                        <td className="p-4 text-gray-600">
                                            • STANDARD 구성 포함<br />
                                            • 리더십 코칭 (강점 기반 피드백)<br />
                                            • 4주간의 몰입 습관 트래킹
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-4 font-medium text-gray-900">소요 시간</td>
                                        <td className="p-4 text-gray-600">1일 (3시간 내외)</td>
                                        <td className="p-4 text-gray-600">1일 (6시간) 또는 2회 분할</td>
                                        <td className="p-4 text-gray-600">4주 프로그램<br />(워크숍 3회 + 코칭)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-gray-900">비용</td>
                                        <td className="p-4 font-bold" style={{ color: '#2828D0' }}>1인당 15만원</td>
                                        <td className="p-4 font-bold" style={{ color: '#2828D0' }}>1인당 35만원</td>
                                        <td className="p-4 font-bold" style={{ color: '#2828D0' }}>별도 문의<br /><span className="text-sm font-normal text-gray-600">(커스터마이징)</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-6">
                            <div className="border-2 border-gray-200 rounded-2xl p-6 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">BASIC <span className="text-sm font-normal text-gray-600">(강점 진단형)</span></h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">핵심 대상</p>
                                        <p className="text-gray-600">개인의 강점을 빠르게 파악하고 싶은 소규모 팀</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">주요 구성</p>
                                        <p className="text-gray-600">• 데이터 기반 강점 진단<br />• 개인별 강점 리포트 제공<br />• 1회성 강점 해석 워크숍</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">소요 시간</p>
                                        <p className="text-gray-600">1일 (3시간 내외)</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">비용</p>
                                        <p className="text-xl font-bold" style={{ color: '#2828D0' }}>1인당 15만원</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-2 border-gray-200 rounded-2xl p-6 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">STANDARD <span className="text-sm font-normal text-gray-600">(몰입 설계형)</span></h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">핵심 대상</p>
                                        <p className="text-gray-600">강점 발견을 실제 업무 설계까지 연결하고 싶은 조직</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">주요 구성</p>
                                        <p className="text-gray-600">• BASIC 구성 포함<br />• 도파민 루프/몰입 설계 워크숍<br />• 개인별 액션 플랜 수립</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">소요 시간</p>
                                        <p className="text-gray-600">1일 (6시간) 또는 2회 분할</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">비용</p>
                                        <p className="text-xl font-bold" style={{ color: '#2828D0' }}>1인당 35만원</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-2 border-gray-200 rounded-2xl p-6 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">PREMIUM <span className="text-sm font-normal text-gray-600">(조직 문화형)</span></h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">핵심 대상</p>
                                        <p className="text-gray-600">조직 전체의 몰입 구조와 문화를 바꾸고 싶은 기업</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">주요 구성</p>
                                        <p className="text-gray-600">• STANDARD 구성 포함<br />• 리더십 코칭 (강점 기반 피드백)<br />• 4주간의 몰입 습관 트래킹</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">소요 시간</p>
                                        <p className="text-gray-600">4주 프로그램 (워크숍 3회 + 코칭)</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-1">비용</p>
                                        <p className="text-xl font-bold" style={{ color: '#2828D0' }}>별도 문의 <span className="text-sm font-normal text-gray-600">(커스터마이징)</span></p>
                                    </div>
                                </div>
                            </div>
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
                            지금 바로 우리 팀의<br />
                            강점을 발견하세요
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-white rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
                                style={{ color: '#2828D0' }}
                            >
                                도입 문의하기
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
