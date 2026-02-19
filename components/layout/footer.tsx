import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full bg-purple-100 border-t border-purple-200">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* 회사 정보 */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-black">루플리</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            당신의 일상을 지키는 기업
                        </p>
                    </div>

                    {/* 링크 */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-black">바로가기</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/about/story" className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                                루플리 스토리
                            </Link>
                            <Link href="/about/history" className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                                수익구조
                            </Link>
                            <Link href="/services/test" className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                                도파민 유형 테스트
                            </Link>
                        </div>
                    </div>

                    {/* 법적 정보 */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-black">법적 고지</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                                이용약관
                            </Link>
                            <Link href="#" className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                                개인정보처리방침
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 하단 카피라이트 */}
                <div className="pt-6 border-t border-purple-200">
                    <p className="text-center text-xs text-gray-600">
                        © 2024 루플리(Loofly). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
