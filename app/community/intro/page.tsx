"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function CommunityIntroPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                            LOOFLY COMMUNITY
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            루플리 커뮤니티
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            건강한 도파민을 경험하고,<br />
                            그것을 지속 가능한 루틴으로 정착시키는 공간입니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-center"
                    >
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            우리는 자극이 넘치는 시대에 살고 있습니다.<br />
                            하지만 빠르고 강한 자극은 쉽게 소진되고, 반복될수록 동기와 집중력을 약화시킵니다.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                            루플리는 이 흐름과 반대 방향을 선택합니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Healthy Dopamine Loop */}
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
                            ✨ 건강한 도파민의<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">선순환 구조</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600">
                                    루플리 커뮤니티는 두 섹션으로 구성됩니다.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.05) 0%, rgba(128, 96, 208, 0.05) 100%)' }}>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: '#2828D0' }}>Class</h3>
                                        <p className="text-gray-600">새로운 경험과 몰입을 통해 성취 기반 도파민을 경험하는 시작점</p>
                                    </div>
                                    <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.05) 0%, rgba(128, 96, 208, 0.05) 100%)' }}>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: '#2828D0' }}>Crew</h3>
                                        <p className="text-gray-600">그 경험을 반복하고 확장하며 건강한 루틴으로 정착시키는 지속 구조</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Community collaboration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-center py-8">
                            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-base md:text-xl lg:text-2xl font-bold" style={{ color: '#2828D0' }}>
                                <span>경험</span>
                                <span>→</span>
                                <span>몰입</span>
                                <span>→</span>
                                <span>성취</span>
                                <span>→</span>
                                <span>루틴</span>
                                <span>→</span>
                                <span>확장</span>
                            </div>
                            <p className="text-gray-600 mt-6 text-base md:text-lg px-4">
                                이 선순환이 루플리 커뮤니티의 핵심 설계입니다.<br />
                                단발성 재미가 아닌, 삶의 활력으로 이어지는 자극을 만듭니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Growth Philosophy */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
                            ✨ 사람의 성장이 곧<br />
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">루플리의 성장입니다</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden order-2 md:order-1">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                                    alt="Growth and development"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    루플리는 사람의 몰입과 성장을 가장 중요한 자산으로 봅니다.
                                </p>
                                <ul className="space-y-4 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span style={{ color: '#2828D0' }}>•</span>
                                        <span>한 사람의 재능은 클래스가 되고</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{ color: '#2828D0' }}>•</span>
                                        <span>한 번의 경험은 커뮤니티 활동으로 이어지며</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span style={{ color: '#2828D0' }}>•</span>
                                        <span>반복되는 참여는 건강한 생활 습관으로 확장됩니다</span>
                                    </li>
                                </ul>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    이 구조 안에서 참여자는 삶의 동기를 얻고, 재능 제공자는 자신의 역량을 확장하며, 커뮤니티는 지속적으로 활성화됩니다.
                                </p>
                                <p className="text-lg font-medium text-gray-900">
                                    그리고 이 건강한 순환이 루플리의 지속 가능한 수익 구조를 만듭니다.
                                </p>
                                <p className="text-lg font-bold" style={{ color: '#2828D0' }}>
                                    우리는 소비를 자극하는 플랫폼이 아니라,<br />
                                    성장을 설계하는 커뮤니티를 지향합니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Goal */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            ✨ 루플리의 목표
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            루플리는 일시적인 즐거움이 아닌,<br />
                            지속 가능한 에너지와 동기를 제공하는 공간이 되고자 합니다.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                            건강한 도파민을 통해<br />
                            더 단단하고, 더 즐겁고, 더 지속 가능한 삶을 만드는 것.
                        </p>
                        <p className="text-lg text-gray-600">
                            그것이 루플리 커뮤니티의 존재 이유입니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Community Sections */}
            <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, white 0%, rgba(40, 40, 208, 0.03) 100%)' }}>
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                    {/* LOOFLY CLASS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#2828D0' }}>
                                    LOOFLY CLASS
                                </p>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                    루플리 클래스
                                </h2>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                루플리 클래스는 단순한 원데이 클래스가 아닙니다.<br className="hidden sm:block" />
                                각자가 가진 재능과 경험을 나누고, 참여자는 새로운 자극과 성장을 경험하며 건강한 도파민을 발견하는 장입니다.
                            </p>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                짧지만 밀도 있는 경험을 통해 몰입, 성취, 배움의 기쁨을 느끼고 그 경험이 다시 삶의 활력과 동기로 이어지는 선순환 루프를 만듭니다.
                            </p>
                            <div className="p-4 md:p-6 rounded-2xl border-l-4" style={{ borderColor: '#2828D0', background: 'rgba(40, 40, 208, 0.03)' }}>
                                <p className="text-sm md:text-base text-gray-700 font-medium">
                                    루플리 클래스는 자극적인 소비가 아닌, 성장과 성취에서 오는 지속 가능한 도파민을 제공합니다.
                                </p>
                            </div>
                            <p className="text-sm md:text-base text-gray-600">
                                여러 경험을 통해 나에게 맞는 자극을 찾고, 건강한 동기 시스템을 설계하는 시작점이 됩니다.
                            </p>
                            <Link
                                href="/community/class"
                                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg text-white hover:opacity-90 transition-opacity"
                                style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                            >
                                루플리 클래스 체험 바로가기
                            </Link>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-first md:order-last">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                                alt="LOOFLY CLASS - Learning and creativity"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* LOOFLY CREW */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                                alt="LOOFLY CREW - Team collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#2828D0' }}>
                                    LOOFLY CREW
                                </p>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                    루플리 크루
                                </h2>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                루플리 크루는 건강한 도파민을 지속적으로 추구하는 사람들의 모임입니다.
                            </p>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                단순한 친목이나 일시적인 재미가 아니라,<br className="hidden sm:block" />
                                건강한 루틴과 성장 중심의 활동을 통해<br className="hidden sm:block" />
                                삶의 리듬을 함께 만들어가는 커뮤니티입니다.
                            </p>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                같은 방향성을 가진 사람들이 모여<br className="hidden sm:block" />
                                몰입하고, 실천하고, 피드백을 나누며<br className="hidden sm:block" />
                                건강한 생활 습관과 에너지를 함께 구축합니다.
                            </p>
                            <div className="p-4 md:p-6 rounded-2xl border-l-4" style={{ borderColor: '#2828D0', background: 'rgba(40, 40, 208, 0.03)' }}>
                                <p className="text-sm md:text-base text-gray-700 font-medium">
                                    루플리 크루는<br className="hidden sm:block" />
                                    서로를 자극하는 관계가 아니라<br className="hidden sm:block" />
                                    서로를 단단하게 만드는 관계를 지향합니다.
                                </p>
                            </div>
                            <Link
                                href="/community/crew"
                                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg text-white hover:opacity-90 transition-opacity"
                                style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                            >
                                루플리 크루 소개 바로가기
                            </Link>
                        </div>
                    </motion.div>

                    {/* LOOP Lab */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#2828D0' }}>
                                    LOOP Lab
                                </p>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                    루프 랩
                                </h2>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                <span className="font-bold">루프 랩(LOOP Lab)</span>은 나쁜 도파민의 고리를 분석하고 끊어내는 사람들의 공간입니다.
                            </p>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                단순한 푸념이나 막연한 다짐에 머물지 않고,<br className="hidden sm:block" />
                                나를 가두는 <span className="font-bold">'중독의 루프'</span>를 객관적으로 직시하며<br className="hidden sm:block" />
                                이를 <span className="font-bold">'성장의 데이터'</span>로 전환하는 실험적인 커뮤니티입니다.
                            </p>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                비슷한 고민을 가진 사람들이 모여<br className="hidden sm:block" />
                                실패의 원인을 찾고, 성공의 노하우를 공유하며<br className="hidden sm:block" />
                                무기력한 반복을 멈추고 삶의 주도권을 되찾기 위한<br className="hidden sm:block" />
                                가장 실질적인 해법을 함께 연구합니다.
                            </p>
                            <div className="p-4 md:p-6 rounded-2xl border-l-4" style={{ borderColor: '#2828D0', background: 'rgba(40, 40, 208, 0.03)' }}>
                                <p className="text-sm md:text-base text-gray-700 font-medium">
                                    루프 랩은<br className="hidden sm:block" />
                                    단순히 참는 고통을 나누는 곳이 아니라<br className="hidden sm:block" />
                                    다시 비상할 수 있는 새로운 경로를 설계하는 곳입니다.
                                </p>
                            </div>
                            <Link
                                href="/community/lap"
                                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg text-white hover:opacity-90 transition-opacity"
                                style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                            >
                                루프 랩 커뮤니티 바로가기
                            </Link>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-first md:order-last">
                            <Image
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                                alt="LOOP Lab - Research and analysis"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
