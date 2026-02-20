"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const communities = [
    {
        title: "코딩 클래스",
        subtitle: "함께 성장하는 개발자 커뮤니티",
        tag: "[LOOFLY class]",
        badge: "참여하기",
        image: "/main4.jpg"
    },
    {
        title: "스냅 클래스",
        subtitle: "일상을 담는 사진 촬영 클래스",
        tag: "[LOOFLY class]",
        badge: "참여하기",
        image: "/main4.jpg"
    },
    {
        title: "가창 클래스",
        subtitle: "목소리로 표현하는 음악 수업",
        tag: "[LOOFLY class]",
        badge: "참여하기",
        image: "/main4.jpg"
    },
    {
        title: "러닝 크루",
        subtitle: "건강한 습관을 만드는 러닝 모임",
        tag: "[LOOFLY CREW]",
        badge: "참여하기",
        image: "/main4.jpg"
    },
    {
        title: "볼링 크루",
        subtitle: "스트라이크로 연결되는 즐거운 모임",
        tag: "[LOOFLY CREW]",
        badge: "참여하기",
        image: "/main4.jpg"
    },
    {
        title: "출사 크루",
        subtitle: "렌즈로 세상을 담는 사진 동호회",
        tag: "[LOOFLY CREW]",
        badge: "참여하기",
        image: "/main4.jpg"
    }
]

export function CommunitySection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    // 화면 크기 감지
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const itemsPerPage = isMobile ? 1 : 3

    // 자동 슬라이드
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + itemsPerPage) % communities.length)
        }, 10000) // 10초마다 자동 넘김

        return () => clearInterval(timer)
    }, [itemsPerPage])

    const handlePrev = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? communities.length - itemsPerPage : prev - itemsPerPage
        )
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + itemsPerPage) % communities.length)
    }

    const visibleCommunities = communities.slice(currentIndex, currentIndex + itemsPerPage)

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12 md:space-y-16"
                >
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <motion.p 
                            className="text-sm text-gray-600 font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            건강한 도파민이 모이는 곳
                        </motion.p>
                        <motion.h2 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            루플리 커뮤니티
                        </motion.h2>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative px-4 sm:px-16">
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border-2"
                            style={{ borderColor: '#2828D0' }}
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#2828D0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border-2"
                            style={{ borderColor: '#2828D0' }}
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#2828D0' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Cards Grid */}
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                                >
                                    {visibleCommunities.map((community, index) => (
                                        <div
                                            key={`${currentIndex}-${index}`}
                                            className="group"
                                        >
                                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100">
                                                {/* Image */}
                                                <div className="aspect-square bg-gray-100 rounded-lg sm:rounded-xl relative overflow-hidden">
                                                    <Image
                                                        src={community.image}
                                                        alt={community.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="space-y-2 sm:space-y-3">
                                                    {/* Tag */}
                                                    <p className="text-xs font-medium" style={{ color: '#2828D0' }}>
                                                        {community.tag}
                                                    </p>

                                                    {/* Title */}
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                                        {community.title}
                                                    </h3>

                                                    {/* Subtitle */}
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                        {community.subtitle}
                                                    </p>

                                                    {/* Badge */}
                                                    <button className="w-full px-4 py-2 sm:py-2.5 bg-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border-2 hover:bg-[#2828D0]/10 hover:border-[#2828D0]" style={{ color: '#2828D0', borderColor: '#8060D0' }}>
                                                        {community.badge}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: Math.ceil(communities.length / itemsPerPage) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index * itemsPerPage)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === index * itemsPerPage 
                                            ? 'w-8' 
                                            : 'w-2'
                                    }`}
                                    style={{ 
                                        backgroundColor: currentIndex === index * itemsPerPage ? '#2828D0' : '#d1d5db'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
