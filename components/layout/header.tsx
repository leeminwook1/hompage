"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [mobileSubmenu, setMobileSubmenu] = React.useState<string | null>(null)
    const pathname = usePathname()

    // Close mobile menu when pathname changes
    React.useEffect(() => {
        setMobileMenuOpen(false)
        setMobileSubmenu(null)
    }, [pathname])

    const handleMobileLinkClick = () => {
        setMobileMenuOpen(false)
        setMobileSubmenu(null)
    }

    return (
        <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold text-black">
                        LOOFLY
                    </Link>

                    {/* Desktop Navigation */}
                    <nav 
                        className="hidden md:flex items-center h-full gap-12"
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        {/* 루플리 소개 */}
                        <div 
                            className="relative h-full flex items-center w-[120px] justify-center"
                            onMouseEnter={() => setActiveMenu('about')}
                        >
                            <div 
                                className={`h-full flex items-center text-base font-bold transition-colors cursor-pointer ${
                                    activeMenu === 'about' ? 'text-black' : 'text-black hover:text-gray-600'
                                }`}
                            >
                                루플리 소개
                            </div>
                        </div>

                        {/* 비즈니스 */}
                        <div 
                            className="relative h-full flex items-center w-[140px] justify-center"
                            onMouseEnter={() => setActiveMenu('business')}
                        >
                            <div 
                                className={`h-full flex items-center text-base font-bold transition-colors cursor-pointer ${
                                    activeMenu === 'business' ? 'text-black' : 'text-black hover:text-gray-600'
                                }`}
                            >
                                비즈니스
                            </div>
                        </div>

                        {/* 커뮤니티 */}
                        <div 
                            className="relative h-full flex items-center w-[120px] justify-center"
                            onMouseEnter={() => setActiveMenu('community')}
                        >
                            <div 
                                className={`h-full flex items-center text-base font-bold transition-colors cursor-pointer ${
                                    activeMenu === 'community' ? 'text-black' : 'text-black hover:text-gray-600'
                                }`}
                            >
                                커뮤니티
                            </div>
                        </div>

                        {/* 도파민유형 테스트 */}
                        <div 
                            className="relative h-full flex items-center w-[180px] justify-center"
                            onMouseEnter={() => setActiveMenu('services')}
                        >
                            <div 
                                className={`h-full flex items-center text-base font-bold transition-colors cursor-pointer ${
                                    activeMenu === 'services' ? 'text-black' : 'text-black hover:text-gray-600'
                                }`}
                            >
                                도파민유형 테스트
                            </div>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-black"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="메뉴"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Desktop Dropdown Menu */}
            {activeMenu && (
                <div 
                    className="hidden md:block absolute left-0 w-full bg-white border-t border-gray-200 shadow-lg"
                    onMouseEnter={() => setActiveMenu(activeMenu)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex justify-end">
                            <div className="flex gap-12">
                                {/* 루플리 소개 */}
                                <div className={`flex flex-col gap-3 items-center w-[120px] ${activeMenu === 'about' ? 'opacity-100' : 'opacity-30'}`}>
                                    <Link 
                                        href="/about/story" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/about/story' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        루플리 스토리
                                    </Link>
                                    <Link 
                                        href="/about/ceo" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/about/ceo' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        CEO 메세지
                                    </Link>
                                    {/* <Link 
                                        href="/about/history" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/about/history' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        수익구조
                                    </Link> */}
                                </div>

                                {/* 비즈니스 */}
                                <div className={`flex flex-col gap-3 items-center w-[140px] ${activeMenu === 'business' ? 'opacity-100' : 'opacity-30'}`}>
                                    <Link 
                                        href="/business/dopamine-literacy" 
                                        className={`text-sm transition-colors px-3 py-1 rounded-full text-center leading-tight ${
                                            pathname === '/business/dopamine-literacy' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        도파민 리터러시<br />프로그램
                                    </Link>
                                    <Link 
                                        href="/business/competency" 
                                        className={`text-sm transition-colors px-3 py-1 rounded-full text-center leading-tight ${
                                            pathname === '/business/competency' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        역량 강화<br />프로그램
                                    </Link>
                                    <Link 
                                        href="/business/leadership" 
                                        className={`text-sm transition-colors px-3 py-1 rounded-full text-center leading-tight ${
                                            pathname === '/business/leadership' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        리더십 강화<br />프로그램
                                    </Link>
                                    <Link 
                                        href="/business/team-bonding" 
                                        className={`text-sm transition-colors px-3 py-1 rounded-full text-center leading-tight ${
                                            pathname === '/business/team-bonding' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        팀 본딩<br />프로그램
                                    </Link>
                                </div>

                                {/* 커뮤니티 */}
                                <div className={`flex flex-col gap-3 items-center w-[120px] ${activeMenu === 'community' ? 'opacity-100' : 'opacity-30'}`}>
                                    <Link 
                                        href="/community/intro" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/community/intro' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        커뮤니티 소개
                                    </Link>
                                    <Link 
                                        href="/community/crew" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/community/crew' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        루플리 크루
                                    </Link>
                                    <Link 
                                        href="/community/class" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/community/class' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        루플리 클래스
                                    </Link>
                                    <Link 
                                        href="/community/lap" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/community/lap' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        루프 랩 <br />(게시판)
                                    </Link>
                                </div>

                                {/* 도파민유형 테스트 */}
                                <div className={`flex flex-col gap-3 items-center w-[180px] ${activeMenu === 'services' ? 'opacity-100' : 'opacity-30'}`}>
                                    <Link 
                                        href="/services/test" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/services/test' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        테스트 하기
                                    </Link>
                                    <Link 
                                        href="/services/intro" 
                                        className={`text-sm transition-colors px-4 py-1 rounded-full ${
                                            pathname === '/services/intro' 
                                                ? 'bg-[#2828D0] text-white' 
                                                : 'text-gray-600 hover:text-black'
                                        }`}
                                    >
                                        유형 소개
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="container mx-auto px-6 py-4">
                        {/* 루플리 소개 */}
                        <div className="mb-4">
                            <button
                                onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
                                className="w-full text-left font-bold text-base py-2 flex justify-between items-center text-black"
                            >
                                루플리 소개
                                <span className={`transition-transform text-black ${mobileSubmenu === 'about' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'about' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="/about/story" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        루플리 스토리
                                    </Link>
                                    <Link href="/about/ceo" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        CEO 메세지
                                    </Link>
                                    {/* <Link href="/about/history" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        수익구조
                                    </Link> */}
                                </div>
                            )}
                        </div>

                        {/* 비즈니스 */}
                        <div className="mb-4">
                            <button
                                onClick={() => setMobileSubmenu(mobileSubmenu === 'business' ? null : 'business')}
                                className="w-full text-left font-bold text-base py-2 flex justify-between items-center text-black"
                            >
                                비즈니스
                                <span className={`transition-transform text-black ${mobileSubmenu === 'business' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'business' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="/business/dopamine-literacy" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        도파민 리터러시 프로그램
                                    </Link>
                                    <Link href="/business/competency" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        역량 강화 프로그램
                                    </Link>
                                    <Link href="/business/leadership" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        리더십 강화 프로그램
                                    </Link>
                                    <Link href="/business/team-bonding" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        팀 본딩 프로그램
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* 커뮤니티 */}
                        <div className="mb-4">
                            <button
                                onClick={() => setMobileSubmenu(mobileSubmenu === 'community' ? null : 'community')}
                                className="w-full text-left font-bold text-base py-2 flex justify-between items-center text-black"
                            >
                                커뮤니티
                                <span className={`transition-transform text-black ${mobileSubmenu === 'community' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'community' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="/community/intro" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        커뮤니티 소개
                                    </Link>
                                    <Link href="/community/crew" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        루플리 크루
                                    </Link>
                                    <Link href="/community/class" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        루플리 클래스
                                    </Link>
                                    <Link href="/community/lap" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        루프 랩(게시판)
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* 도파민유형 테스트 */}
                        <div className="mb-4">
                            <button
                                onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                                className="w-full text-left font-bold text-base py-2 flex justify-between items-center text-black"
                            >
                                도파민유형 테스트
                                <span className={`transition-transform text-black ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'services' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link href="/services/test" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        테스트 하기
                                    </Link>
                                    <Link href="/services/intro" className="block py-2 text-sm text-gray-600" onClick={handleMobileLinkClick}>
                                        유형 소개
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
