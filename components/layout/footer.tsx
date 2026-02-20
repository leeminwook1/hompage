"use client"

import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" 
                     style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                         backgroundSize: '40px 40px'
                     }}
                />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* 회사 정보 */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-white">루플리</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                            당신의 일상을 지키는 기업
                        </p>
                    </div>

                    {/* 링크 */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white">바로가기</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/about/story" className="text-sm text-white/80 hover:text-white transition-colors">
                                루플리 스토리
                            </Link>
                            <Link href="/services/test" className="text-sm text-white/80 hover:text-white transition-colors">
                                도파민 유형 테스트
                            </Link>
                        </div>
                    </div>

                    {/* 법적 정보 */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white">법적 고지</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                                이용약관
                            </Link>
                            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                                개인정보처리방침
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 하단 카피라이트 */}
                <div className="pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    <p className="text-center text-xs text-white/70">
                        © 2024 루플리(Loofly). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
