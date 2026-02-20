"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function LoopLabPage() {
    const [selectedCategory, setSelectedCategory] = useState("전체")
    
    const categories = ["전체", "D-Report", "The Breakthrough", "Cycle Change"]
    
    const posts = [
        {
            id: 1,
            category: "D-Report",
            badge: "공지",
            title: "악명 고민상담소 방 비밀번호",
            excerpt: "아무것도 아닌 것 같지만, 그 시간들이 저를 보듬어주는 시간이었다는 걸 느꼈어요.",
            author: "관리자",
            comments: 2,
            views: 584,
            date: "26.02.13",
            isNotice: true
        },
        {
            id: 2,
            category: "D-Report",
            title: "처음에 걸린 엄마를 바라보는 게 힘든 초미의 고민",
            excerpt: "초미의 고민 '어린 나이에 처음에 걸린 엄마를 두고 저는 어떻게 살아가야 할까요?' 엄마가 조로기 치매 환자이십니다. 조로기 치매는 젊은 나이에 발생하는 치매로, ...",
            author: "익명",
            comments: 5,
            views: 892,
            date: "26.02.13"
        },
        {
            id: 3,
            category: "The Breakthrough",
            title: "오빠 때문에 화가 나는 삼월의 고민",
            excerpt: "삼월의 고민 '오빠가 저를 무시하는 것 같아요. 오빠와의 관계를 어떻게 풀어가야 할까요?' 오빠가 저를 무시하는 것 같아요. 오빠는 저보다 나이가 많고, 저는 막내라서 ...",
            author: "익명",
            comments: 12,
            views: 1243,
            date: "26.02.12"
        },
        {
            id: 4,
            category: "Cycle Change",
            title: "30일 릴스 끊기 챌린지 - 1주차 후기",
            excerpt: "릴스를 끊은 지 일주일이 지났습니다. 처음 3일은 정말 힘들었어요. 무의식적으로 인스타그램을 켜는 습관이 있었는데, 그때마다 의식적으로 앱을 끄고 책을 펼쳤습니다...",
            author: "도파민탐험가",
            comments: 28,
            views: 2156,
            date: "26.02.11"
        },
        {
            id: 5,
            category: "The Breakthrough",
            title: "게임 중독에서 벗어난 나만의 방법",
            excerpt: "3년간 하루 8시간씩 게임을 했던 제가 이제는 주 2시간만 합니다. 어떻게 가능했을까요? 핵심은 '대체'였습니다. 게임을 그냥 끊으려고 하면 실패하더라고요...",
            author: "새출발",
            comments: 45,
            views: 3421,
            date: "26.02.10"
        },
        {
            id: 6,
            category: "D-Report",
            title: "유튜브 쇼츠에 빠진 나의 하루",
            excerpt: "아침에 일어나자마자 유튜브 쇼츠를 봅니다. 출근길에도, 점심시간에도, 잠들기 전에도... 하루에 최소 3시간은 쇼츠를 보는 것 같아요. 이게 문제라는 걸 알지만...",
            author: "익명",
            comments: 18,
            views: 1876,
            date: "26.02.09"
        }
    ]

    const filteredPosts = selectedCategory === "전체" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory)
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 bg-white border-b">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2828D0' }}>
                                LOOP Lab
                            </p>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                                루프 랩 고민상담소
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                                나쁜 도파민을 끊고, 성취의 에너지를 실험하는 공간입니다.<br />
                                밀미 리추얼 먹어라, 메이트들과 함께하는 고민상담소예요.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Lab Mission - Compact */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                🧪 Lab Mission
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                        1
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: '#2828D0' }}>
                                        분석 Analyze
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    내가 왜 특정 자극에 갇혔는지 객관적으로 직시합니다.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                        2
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: '#2828D0' }}>
                                        실험 Experiment
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    나쁜 도파민을 대체할 나만의 '성취 루프'를 설계합니다.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                        3
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: '#2828D0' }}>
                                        공유 Share
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    실패와 성공의 데이터를 공유하며 서로를 돕습니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Board Section */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Category Tabs */}
                    <div className="mb-6 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    selectedCategory === category
                                        ? 'text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                                style={selectedCategory === category ? { background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' } : {}}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Post List */}
                    <div className="space-y-3">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`bg-white rounded-xl p-6 hover:shadow-md transition-all cursor-pointer border ${
                                    post.isNotice ? 'border-[#2828D0]' : 'border-gray-200'
                                }`}
                            >
                                <div className="flex gap-4">
                                    {/* Left: Avatar placeholder */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                            <span className="text-lg">
                                                {post.isNotice ? '📢' : '👤'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Category & Badge */}
                                        <div className="flex items-center gap-2 mb-2">
                                            {post.badge && (
                                                <span className="px-2 py-1 rounded text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}>
                                                    {post.badge}
                                                </span>
                                            )}
                                            <span className="text-xs font-medium" style={{ color: '#2828D0' }}>
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#2828D0] transition-colors">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span className="font-medium text-gray-700">{post.author}</span>
                                            <span className="flex items-center gap-1">
                                                💬 {post.comments}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                👁️ {post.views}
                                            </span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Write Button */}
                    <div className="mt-8 text-center">
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="px-8 py-3 rounded-full font-medium text-white transition-opacity hover:opacity-90"
                            style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                        >
                            글쓰기
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-12 px-6 bg-white border-t">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                            "혼자 하면 중독이지만,{' '}
                            <span className="bg-gradient-to-r from-[#2828D0] to-[#8060D0] bg-clip-text text-transparent">
                                함께 연구하면 성장의 데이터가 됩니다."
                            </span>
                        </p>
                        <p className="text-gray-600">
                            지금 당신을 붙잡고 있는 루프를 루프 랩에 제출하세요. 비상을 위한 연료로 바꿔드립니다.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
