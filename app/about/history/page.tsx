"use client"

import { motion } from "framer-motion"

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                            Business Model
                        </h1>
                        <div className="h-1 w-24 bg-purple-400 mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Three Circles */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-purple-400 flex items-center justify-center mb-4 relative overflow-hidden bg-white cursor-pointer group">
                                <div className="absolute inset-0 bg-purple-400 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full" />
                                <div className="text-center relative z-10">
                                    <div className="text-sm md:text-xl font-bold text-black">B2B</div>
                                    <div className="text-xs md:text-sm text-black">파트너십</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-purple-400 flex items-center justify-center bg-white mb-4 relative overflow-hidden cursor-pointer group">
                                <div className="absolute inset-0 bg-purple-400 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full" />
                                <div className="text-center relative z-10">
                                    <div className="text-sm md:text-xl font-bold text-black">B2C</div>
                                    <div className="text-xs md:text-sm text-black">서비스</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-purple-400 flex items-center justify-center bg-white mb-4 relative overflow-hidden cursor-pointer group">
                                <div className="absolute inset-0 bg-purple-400 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full" />
                                <div className="text-center text-black text-xs md:text-base font-medium relative z-10 whitespace-nowrap">
                                    매체수익
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 px-6 bg-purple-100">
                <div className="max-w-5xl mx-auto space-y-16">
                    {/* B2B 파트너십 - 도파민 전달 솔루션 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-black">
                            B2B 파트너십
                        </h2>
                        <p className="text-lg text-black font-medium">
                            도파민 전달 솔루션 및 조직 분석 리포트
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            비즈니스의 전문성과 초기 수익원을 담보하는 핵심 모델입니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    기업용 도파민 관리하지 진단
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    조직 관리 결과지 판매
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    HR 면적 서비스
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* B2C 서비스 파트너십 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-black">
                            B2C 서비스 파트너십
                        </h2>
                        <p className="text-lg text-black font-medium">
                            앱 내 프리미엄 멤버십
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            사용자 경험 고도화와 데이터 축적을 통한 지속 기능을 수익입니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    심층 데이터 리포트
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    유료 프리미엄 기능
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    멤버십 구독 모델
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* B2B 파트너십 - 티켓 광고 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-black">
                            B2B 파트너십
                        </h2>
                        <p className="text-lg text-black font-medium">
                            티켓 광고 및 전략적 제휴
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            플랫폼 영향력을 기반으로 한 부가 수익 모델입니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    네이티브 디스플레이 광고
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    제휴 챌린지 광고
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-black font-medium">
                                    커머스 연계 광고
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
