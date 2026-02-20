"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                            Contact Us
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            함께 성장할<br />
                            준비가 되셨나요?
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                            루플리와 함께 조직의 성장 루프를 만들어보세요.<br />
                            문의사항을 남겨주시면 빠르게 연락드리겠습니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    연락처
                                </h2>
                                <p className="text-lg text-gray-600">
                                    궁금하신 점이 있으시면 언제든지 연락주세요.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.1) 0%, rgba(128, 96, 208, 0.1) 100%)' }}>
                                        <Mail className="w-5 h-5" style={{ color: '#2828D0' }} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">이메일</div>
                                        <div className="text-gray-600">hello@loofly.kr</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.1) 0%, rgba(128, 96, 208, 0.1) 100%)' }}>
                                        <Phone className="w-5 h-5" style={{ color: '#2828D0' }} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">전화</div>
                                        <div className="text-gray-600">02-1234-5678</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(40, 40, 208, 0.1) 0%, rgba(128, 96, 208, 0.1) 100%)' }}>
                                        <MapPin className="w-5 h-5" style={{ color: '#2828D0' }} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">오피스</div>
                                        <div className="text-gray-600">서울특별시 강남구</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-100"
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-900">이름</label>
                                        <input 
                                            className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-[#2828D0] focus:outline-none transition-colors" 
                                            placeholder="홍길동" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-900">회사명</label>
                                        <input 
                                            className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-[#2828D0] focus:outline-none transition-colors" 
                                            placeholder="루플리" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">이메일</label>
                                    <input 
                                        type="email" 
                                        className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-[#2828D0] focus:outline-none transition-colors" 
                                        placeholder="hello@loofly.kr" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">전화번호</label>
                                    <input 
                                        type="tel" 
                                        className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-[#2828D0] focus:outline-none transition-colors" 
                                        placeholder="010-1234-5678" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">문의 내용</label>
                                    <textarea 
                                        className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 min-h-[150px] focus:border-[#2828D0] focus:outline-none transition-colors" 
                                        placeholder="프로그램에 대해 궁금한 점을 자유롭게 작성해주세요." 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full py-4 rounded-full text-white font-medium text-lg hover:opacity-90 transition-opacity"
                                    style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                                >
                                    문의하기
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
