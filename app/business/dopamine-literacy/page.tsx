"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function DopamineLiteracyPage() {
    const solutions = [
        {
            number: "01",
            title: "개인 역량 강화",
            subtitle: "나만의 성장 엔진, 자기 강점 발견",
            quote: "무의식적인 반응을 멈추고, 나의 고유한 강점에 몰입(Flow)할 때 진짜 에너지가 깨어납니다.",
            description: "단순한 성격 검사를 넘어, 개인이 가진 '천성적 강점'과 '도파민이 솟구치는 지점'을 연결합니다. 숏폼과 단순 자극에 분산되던 에너지를 나만의 강점 발휘로 전환하는 프로그램입니다.",
            recommended: [
                "자신의 업무 강점을 찾지 못해 매너리즘에 빠진 구성원이 많은 팀",
                "보상(월급, 휴가) 외에 업무 자체에서 즐거움을 찾지 못하는 팀"
            ],
            core: [
                { title: "강점 자각", desc: "내가 '언제' 몰입하고 성취감을 느끼는지 데이터로 파악" },
                { title: "몰입 설계", desc: "업무 내에서 '성취 도파민'을 이끌어낼 수 있는 과업 설계법 습득" },
                { title: "자기 효능감", desc: "통제 가능한 강점을 발견하여 무기력 극복 및 주도성 회복" }
            ]
        },
        {
            number: "02",
            title: "리더십 강화",
            subtitle: "영향력의 선순환, 루플리 리더십",
            quote: "리더의 역할은 구성원의 도파민이 '성과'와 '성장'의 방향으로 흐르도록 길을 만드는 것입니다.",
            description: "리더 스스로의 멘탈 모델을 점검하고, 팀원들이 '건강한 자극'을 주고받으며 스스로 움직이게 만드는 '동기 설계 리더십'을 배웁니다. 지시와 통제가 아닌, 성취의 기쁨을 공유하는 문화를 설계합니다.",
            recommended: [
                "팀원들의 동기부여 방식이 고민인 초보 및 중간 관리자",
                "단기 실적 압박으로 인해 팀 전체가 번아웃(Burn-out)된 팀"
            ],
            core: [
                { title: "에너지 리딩", desc: "리더의 감정을 다스리고 팀에 긍정적인 에너지를 전파하는 기술" },
                { title: "피드백 루프", desc: "작은 성공(Small Win)을 즉각 보상하여 성취감을 극대화하는 스킬" },
                { title: "목적지 정렬", desc: "조직의 목표와 개인의 성장을 연결하여 자발적 비상 유도" }
            ]
        },
        {
            number: "03",
            title: "조직 응집력 강화",
            subtitle: "팀 본딩 및 소통 역량 강화",
            quote: "혼자서는 끊기 힘든 나쁜 습관도, 함께라면 성장의 루프가 됩니다.",
            description: "서로의 다름을 '자극'이 아닌 '동력'으로 전환하는 워크숍입니다. 루플리만의 크루 시스템을 조직에 이식하여, 서로의 성장을 인증하고 응원하며 조직 전체가 하나의 거대한 성장 루프로 작동하게 합니다.",
            recommended: [
                "심리적 안전감이 낮아 소통이 단절되거나 감정 소모가 큰 팀",
                "새로운 프로젝트를 앞두고 '원팀(One Team)'으로서의 결속이 필요한 팀"
            ],
            core: [
                { title: "심리적 안전감", desc: "취약성을 공유하고 다름을 수용하는 두려움 없는 소통 환경" },
                { title: "성장 커뮤니티", desc: "서로의 목표 달성을 돕고 건강한 자극을 주고받는 지지 시스템" },
                { title: "시너지 루프", desc: "개별 강점이 조직의 성과로 이어지는 구조를 경험하며 소속감 고취" }
            ]
        }
    ]

    const stats = [
        { value: "45%↓", label: "스마트폰 스크린타임 감소율" },
        { value: "15+", label: "파트너 기업 및 기관 수" },
        { value: "500+", label: "도파민 리터러시 수료생" }
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
                            Dopamine Literacy Program
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            루플리<br />
                            도파민 리터러시<br />
                            프로그램
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                            왜 지금, 우리 조직에<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">'도파민 리터러시'</span>가<br />
                            필요할까요?
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                            <p>
                                많은 기업이 구성원의 성장을 바라며 아낌없이 자원을 투자합니다. 하지만 스마트폰의 짧은 영상, 즉각적인 자극, 의미 없는 휴식 등 '가짜 도파민'에 에너지를 빼앗긴 구성원들에게 성장은 먼 이야기처럼 들립니다.
                            </p>
                            <p>
                                소속감이 결핍된 조직에서 개인은 고립되고, 고립된 개인은 낮은 자극에 안주하며 무기력의 굴레에 빠지기 쉽습니다.
                            </p>
                            <p className="font-medium text-gray-900">
                                루플리는 단순히 일을 잘하는 법을 가르치지 않습니다. 나쁜 도파민의 방향을 건강한 성취의 동력으로 재설계하여, 개인이 몰입하고 팀이 응집하는 '성장 루프'를 제안합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Section */}
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
                            루플리와 함께<br />
                            성장 루프를 만드는<br />
                            세 가지 솔루션
                        </h2>
                    </motion.div>

                    <div className="space-y-24">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-6xl md:text-7xl font-bold" style={{ color: '#2828D0' }}>
                                        {solution.number}
                                    </span>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                {solution.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-gray-600 mt-2">
                                                {solution.subtitle}
                                            </p>
                                        </div>
                                        <p className="text-lg italic text-gray-700 border-l-4 pl-4" style={{ borderColor: '#2828D0' }}>
                                            {solution.quote}
                                        </p>
                                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-24">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-bold text-gray-900">이런 팀에 추천해요</h4>
                                        <ul className="space-y-2">
                                            {solution.recommended.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <span style={{ color: '#2828D0' }}>•</span>
                                                    <span className="text-sm md:text-base">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-bold text-gray-900">프로그램 핵심</h4>
                                        <div className="space-y-3">
                                            {solution.core.map((item, i) => (
                                                <div key={i} className="space-y-1">
                                                    <p className="font-medium text-gray-900">{item.title}</p>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {index < solutions.length - 1 && (
                                    <div className="w-full h-px mt-16" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(40, 40, 208, 0.2) 50%, transparent 100%)' }} />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                            루플리 프로그램 성과
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-8 rounded-2xl"
                                    style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.05) 0%, rgba(128, 96, 208, 0.05) 100%)' }}
                                >
                                    <p className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#2828D0' }}>
                                        {stat.value}
                                    </p>
                                    <p className="text-sm md:text-base text-gray-600">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

                        {/* CTA Section */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                            우리 조직에 딱 맞는<br />
                            성장 루프를 설계하고 싶으신가요?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            루플리의 도파민 리터러시 전문가들이<br />
                            여러분의 팀에 최적화된 솔루션을 제안해 드립니다.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
                            style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                        >
                            문의하기
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
