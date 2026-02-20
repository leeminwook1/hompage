"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {communities.map((community, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl p-5 md:p-6 space-y-4 h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100">
                                    {/* Image */}
                                    <div className="aspect-square bg-gray-100 rounded-xl relative overflow-hidden">
                                        <Image
                                            src={community.image}
                                            alt={community.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        {/* Tag */}
                                        <p className="text-xs md:text-sm font-medium" style={{ color: '#2828D0' }}>
                                            {community.tag}
                                        </p>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-black">
                                            {community.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-sm text-gray-600">
                                            {community.subtitle}
                                        </p>

                                        {/* Badge */}
                                        <button className="w-full px-4 py-2.5 bg-white rounded-xl text-sm font-medium transition-all duration-300 border-2 hover:bg-[#2828D0]/10 hover:border-[#2828D0]" style={{ color: '#2828D0', borderColor: '#8060D0' }}>
                                            {community.badge}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
