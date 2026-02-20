"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const questions = [
    // 자극 강도 선호 (1-6)
    { id: 1, text: "가만히 있는 시간보다 자극적인 활동이 더 편하다.", category: "stimulus", reverse: false },
    { id: 2, text: "영상은 1.5배속 이상으로 보는 편이다.", category: "stimulus", reverse: false },
    { id: 3, text: "심심하면 습관처럼 휴대폰을 확인한다.", category: "stimulus", reverse: false },
    { id: 4, text: "여러 가지를 동시에 해야 덜 답답하다.", category: "stimulus", reverse: false },
    { id: 5, text: "조용한 환경이 오래 지속되면 불안해진다.", category: "stimulus", reverse: false },
    { id: 6, text: "느리고 반복적인 작업은 금방 지친다.", category: "stimulus", reverse: false },
    
    // 보상 지연 허용도 (7-12)
    { id: 7, text: "당장의 즐거움을 포기하고 미래 목표를 선택할 수 있다.", category: "delayed", reverse: false },
    { id: 8, text: "결과가 바로 보이지 않으면 흥미가 식는다.", category: "delayed", reverse: true },
    { id: 9, text: "몇 달 이상 걸리는 계획도 유지할 수 있다.", category: "delayed", reverse: false },
    { id: 10, text: "작은 성공이 쌓이는 과정을 즐긴다.", category: "delayed", reverse: false },
    { id: 11, text: "노력 대비 즉각적인 보상이 없으면 허무하다.", category: "delayed", reverse: true },
    { id: 12, text: "장기적인 성장이라는 개념이 와닿는다.", category: "delayed", reverse: false },
    
    // 외부 인정 의존도 (13-18)
    { id: 13, text: "누군가의 칭찬이 있어야 동기부여가 된다.", category: "external", reverse: false },
    { id: 14, text: "SNS 반응이 하루 기분에 영향을 준다.", category: "external", reverse: false },
    { id: 15, text: "혼자 하는 일은 집중이 잘 안 된다.", category: "external", reverse: false },
    { id: 16, text: "비교를 통해 자극을 받는다.", category: "external", reverse: false },
    { id: 17, text: "사람들에게 보여줄 수 있는 성과가 중요하다.", category: "external", reverse: false },
    { id: 18, text: "타인의 피드백이 없으면 방향을 잃는 느낌이 든다.", category: "external", reverse: false },
    
    // 새로움 추구 (19-24)
    { id: 19, text: "같은 루틴이 반복되면 의욕이 떨어진다.", category: "novelty", reverse: false },
    { id: 20, text: "새로운 경험을 하지 않으면 정체된 느낌이 든다.", category: "novelty", reverse: false },
    { id: 21, text: "예측 가능한 하루가 더 편하다.", category: "novelty", reverse: true },
    { id: 22, text: "새로운 환경에 가면 오히려 에너지가 생긴다.", category: "novelty", reverse: false },
    { id: 23, text: "익숙한 방식이 가장 효율적이라고 생각한다.", category: "novelty", reverse: true },
    { id: 24, text: "새로운 시도를 하지 않으면 뒤처질 것 같다.", category: "novelty", reverse: false },
]

const scaleOptions = [
    { value: 1, label: "전혀 아니다" },
    { value: 2, label: "아니다" },
    { value: 3, label: "보통이다" },
    { value: 4, label: "그렇다" },
    { value: 5, label: "매우 그렇다" },
]

export default function TestPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [showResult, setShowResult] = useState(false)

    const handleAnswer = (value: number) => {
        setAnswers({ ...answers, [questions[currentQuestion].id]: value })
        
        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1)
            }, 300)
        } else {
            setTimeout(() => {
                setShowResult(true)
            }, 300)
        }
    }

    const calculateResult = () => {
        let stimulus = 0, delayed = 0, external = 0, novelty = 0

        questions.forEach(q => {
            const answer = answers[q.id] || 0
            const score = q.reverse ? (6 - answer) : answer

            if (q.category === "stimulus") stimulus += score
            else if (q.category === "delayed") delayed += score
            else if (q.category === "external") external += score
            else if (q.category === "novelty") novelty += score
        })

        // 스파크 헌터형
        if (stimulus >= 20 && novelty >= 20 && delayed <= 18) {
            return {
                type: "스파크 헌터 루프",
                emoji: "🔥",
                subtitle: "당신은 '강한 자극'에 반응하는 사람인가요?",
                page1: {
                    title: "혹시 이런 패턴 반복하고 있다면?",
                    content: [
                        "처음엔 재밌고 신나서 시작했는데 어느 순간부터는…",
                        "쇼츠 / 릴스 / 쇼핑 / 게임을",
                        "\"즐기는 게 아니라 찾고 있는 느낌\""
                    ],
                    highlight: "스파크 헌터 루프는 강한 자극에 가장 빠르게 반응하는 유형입니다."
                },
                page2: {
                    title: "스파크 헌터 루프의 도파민 패턴은 단순해요.",
                    patterns: [
                        "짧고 강하게 터진다",
                        "금방 꺼진다",
                        "다시 더 센 자극을 찾는다"
                    ],
                    summary: "\"재미없으면 못 버티는 사람\"이 아니라 뇌가 '속도'를 학습한 사람이에요."
                },
                page3: {
                    title: "스파크 헌터 루프는 도파민이 터질 때 추진력이 폭발합니다.",
                    strengths: [
                        "트렌드를 남들보다 빨리 읽고",
                        "생각하면 바로 실행하고",
                        "에너지가 주변에 확산됩니다"
                    ],
                    potential: "이 유형은 시대를 먼저 타는 사람이 될 확률이 높아요."
                },
                page4: {
                    title: "그치만 도파민이 너무 빠르게 소비되는 것이 문제입니다",
                    warnings: [
                        "루프 중독 (쇼츠 → 쇼츠 → 쇼츠)",
                        "깊은 집중이 어려움",
                        "강한 자극 없으면 무기력",
                        "방향이 없으면 쉽게 소진됨"
                    ],
                    insight: "\"끊는게 아니라\" 도파민을 '느린 루트'로 옮겨야 합니다."
                },
                page5: {
                    checks: [
                        "새로움에 강하게 끌리고",
                        "빨리 달리고 빨리 지치고",
                        "다시 자극을 찾는다면"
                    ],
                    summary: "남들은 그냥 쉬는데 나는 자꾸 뭔가를 찾아요. 도파민이 짧고 강하게 터지는 유형입니다. 끊는 게 답이 아니라 빠른 자극 대신 느린 도파민으로 회로를 바꿔야 해요."
                },
                scores: { stimulus, delayed, external, novelty }
            }
        }
        
        // 시그널 의존형
        else if (external >= 20 && stimulus >= 15 && delayed <= 18) {
            return {
                type: "시그널 의존 루프",
                emoji: "🌟",
                subtitle: "당신은 자극보다 반응에 더 반응하는 사람인가요?",
                page1: {
                    title: "올린 순간은 별 생각 없었는데…",
                    content: [
                        "좋아요 수, 댓글, 조회수, 읽씹 여부",
                        "이게 보이는 순간부터"
                    ],
                    highlight: "시그널 의존 루프는 타인의 반응이 보상 버튼인 사람입니다."
                },
                page2: {
                    title: "시그널 의존형의 도파민 패턴은",
                    patterns: [
                        "누가 나를 봤을 때",
                        "누가 반응했을 때",
                        "내가 인정받았을 때"
                    ],
                    summary: "도파민은 '재밌는 일'이 아니라 \"인정받는 순간\"에 터집니다."
                },
                page3: {
                    title: "시그널 의존형 루프는",
                    strengths: [
                        "사람 마음을 잘 읽고",
                        "위기를 빠르게 캐치하고",
                        "관계 감각이 뛰어나고",
                        "스스로 브랜드처럼 보이게 할 줄 압니다"
                    ],
                    potential: "이 유형은 '브랜드형 인간'이 될 확률이 높아요."
                },
                page4: {
                    title: "그렇다면 반응이 끊기는 순간에는?",
                    warnings: [
                        "좋아요 적으면 급 다운",
                        "비교에 무너짐",
                        "칭찬 없으면 의욕 0",
                        "자존감이 외부에 묶임"
                    ],
                    insight: "도파민이 아니라 자존감이 '타인의 손'에 맡겨진다는 것입니다."
                },
                page5: {
                    checks: [
                        "좋아요에 마음이 흔들리고",
                        "누가 봤는지 자꾸 확인하고",
                        "반응 없으면 괜히 불안하고",
                        "비교하다가 지친다면"
                    ],
                    summary: "올린 건 그냥 올린 건데 좋아요, 댓글, 조회수에 마음이 흔들린다면. 시그널 의존 루프는 자극보다 반응에 도파민이 터지는 유형입니다. 사람 마음을 잘 읽고 관계 감각도 뛰어나요. 하지만 반응이 끊기면 자존감도 같이 흔들릴 수 있어요."
                },
                scores: { stimulus, delayed, external, novelty }
            }
        }
        
        // 설계자형
        else if (delayed >= 20 && novelty <= 18 && stimulus <= 18) {
            return {
                type: "설계자 루프",
                emoji: "🧱",
                subtitle: "당신은 자극보다 계획이 있어야 움직이는 사람인가요?",
                page1: {
                    title: "남들은 \"빨리 시작하자!\"",
                    content: [
                        "전 계획부터 세우고",
                        "루틴을 만들고",
                        "흐름을 안정화해야 마음이 편해요."
                    ],
                    highlight: "설계자형은 한 번 시작하면 오래 가는 사람입니다."
                },
                page2: {
                    title: "설계자형의 도파민 패턴은",
                    patterns: [
                        "처음엔 재미 없어도 참고",
                        "어느 순간부터 습관이 되고",
                        "나중에 성취가 터져요"
                    ],
                    summary: "천천히 오르지만 오래 지속되는 타입"
                },
                page3: {
                    title: "설계자형은",
                    strengths: [
                        "단기 보상보다 장기 목표가 편하고",
                        "루틴이 있어야 안정되고",
                        "천천히라도 끝까지 가고",
                        "성취를 쌓는 타입"
                    ],
                    potential: "남들이 빠르게 달릴 때 혼자 조용히 성공을 쌓아올리는 사람."
                },
                page4: {
                    title: "다만, 무너질 때도 조용히 무너져요.",
                    warnings: [
                        "번아웃 와도 멈추기 어려움",
                        "회복 속도 느림",
                        "감정을 눌러두고 계속 달림",
                        "\"난 괜찮아\" 하면서 버티다가 폭발"
                    ],
                    insight: "게으름이 아니라 자기 감정을 관리하지 못하는 것입니다."
                },
                page5: {
                    checks: [
                        "단기 보상보다 장기 목표가 편하고",
                        "루틴이 있어야 안정되고",
                        "천천히라도 끝까지 가고",
                        "성취를 쌓는 타입이라면"
                    ],
                    summary: "남들이 빠르게 달릴 때 혼자 조용히 성공을 쌓아올리는 사람. 설계자형은 도파민이 느린 대신 결과가 오래 남는 유형입니다. 하지만 감정을 눌러두고 버티는 습관이 있다면 번아웃은 늦게 오지만 오면 회복이 오래 걸릴 수 있어요."
                },
                scores: { stimulus, delayed, external, novelty }
            }
        }
        
        // 관찰자형
        else {
            return {
                type: "관찰자 루프",
                emoji: "🌊",
                subtitle: "당신은 자극보다 의미에 반응하는 사람인가요?",
                page1: {
                    title: "남들은 이렇게 말해요.",
                    content: [
                        "\"이거 완전 재밌겠다!\"",
                        "\"핫하다! 빨리 해보자!\"",
                        "나는 그게 재밌는지보다 왜 재밌는지가 궁금해요."
                    ],
                    highlight: "관찰자형은 세상이 주는 자극보다 내 안에서 납득되는 의미에 반응하는 사람입니다."
                },
                page2: {
                    title: "관찰자형의 도파민 패턴은 이거예요.",
                    patterns: [
                        "조용히 올라가고",
                        "깊게 유지되고",
                        "오래 남아요"
                    ],
                    summary: "관찰자형은 도파민이 \"많은 타입\"이 아니라 도파민을 '깊게 쓰는 타입'입니다."
                },
                page3: {
                    title: "그래서 관찰자형은",
                    strengths: [
                        "혼자서도 몰입 가능",
                        "창작/연구에 강함",
                        "깊이 있는 사고",
                        "자기만의 세계 구축"
                    ],
                    potential: "\"사람들 사이에서 튀는 사람\"이 아니라 혼자 있을 때 더 강해지는 사람이에요."
                },
                page4: {
                    title: "근데 이 유형의",
                    warnings: [
                        "세상의 자극이 너무 시끄럽게 느껴지고",
                        "현실 속 속도에 적응하기 어렵고",
                        "생각은 많은데 실행은 늦고",
                        "머릿속에서만 완벽한 계획을 반복해요"
                    ],
                    insight: "관찰자형은 게으른 게 아니라 현실보다 내면이 더 진짜처럼 느껴지는 사람입니다."
                },
                page5: {
                    checks: [
                        "강한 자극보다 의미가 중요하고",
                        "혼자 몰입하는 시간이 편하고",
                        "SNS보다 내면 만족이 더 크고",
                        "조용히 깊게 빠지는 타입이라면"
                    ],
                    summary: "남들이 빠르게 반응할 때 나는 조용히 세상을 관찰하는 사람. 관찰자형은 도파민이 폭발하지 않아요. 대신 깊고 오래 유지됩니다. 그래서 이 유형은 중독에는 강하지만 현실 속 실행에는 약할 수 있어요. 머릿속 세계가 너무 커져서 \"시작\"을 늦추게 되니까요."
                },
                scores: { stimulus, delayed, external, novelty }
            }
        }
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100

    if (showResult) {
        const result = calculateResult()
        
        return (
            <div className="min-h-screen bg-white pt-24 pb-12 px-4 md:px-6">
                <div className="max-w-6xl mx-auto border-2 rounded-2xl p-6 md:p-8" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* 헤더 - 컴팩트 */}
                        <div className="text-center space-y-2 pb-4 border-b-2" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                            <div className="text-5xl">{result.emoji}</div>
                            <h1 className="text-2xl md:text-3xl font-bold text-black">
                                {result.type}
                            </h1>
                            <p className="text-sm md:text-base text-gray-600">
                                {result.subtitle}
                            </p>
                        </div>

                        {/* 2x2 그리드 레이아웃 - 간격 축소 */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* 패턴 인식 */}
                            <div className="p-4 rounded-xl space-y-2" style={{ backgroundColor: 'rgba(40, 40, 208, 0.05)' }}>
                                <h3 className="text-base md:text-lg font-bold text-black">
                                    {result.page1.title}
                                </h3>
                                <div className="space-y-1 text-xs md:text-sm text-gray-700">
                                    {result.page1.content.map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm font-medium bg-white p-2 rounded-lg" style={{ color: '#2828D0' }}>
                                    {result.page1.highlight}
                                </p>
                            </div>

                            {/* 도파민 패턴 */}
                            <div className="bg-white border-2 p-4 rounded-xl space-y-2" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                                <h3 className="text-base md:text-lg font-bold text-black">
                                    도파민 패턴
                                </h3>
                                <div className="space-y-1">
                                    {result.page2.patterns.map((pattern, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-xs" style={{ color: '#2828D0' }}>•</span>
                                            <p className="text-xs md:text-sm text-gray-700">{pattern}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm font-medium text-black p-2 rounded-lg" style={{ backgroundColor: 'rgba(40, 40, 208, 0.05)' }}>
                                    {result.page2.summary}
                                </p>
                            </div>

                            {/* 강점 */}
                            <div className="bg-white border-2 p-4 rounded-xl space-y-2" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                                <h3 className="text-base md:text-lg font-bold text-black">
                                    당신의 강점
                                </h3>
                                <div className="space-y-1">
                                    {result.page3.strengths.map((strength, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-xs" style={{ color: '#2828D0' }}>✓</span>
                                            <p className="text-xs md:text-sm text-gray-700">{strength}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm font-medium p-2 rounded-lg" style={{ color: '#2828D0', backgroundColor: 'rgba(40, 40, 208, 0.05)' }}>
                                    {result.page3.potential}
                                </p>
                            </div>

                            {/* 주의점 */}
                            <div className="p-4 rounded-xl space-y-2" style={{ backgroundColor: 'rgba(40, 40, 208, 0.05)' }}>
                                <h3 className="text-base md:text-lg font-bold text-black">
                                    주의할 점
                                </h3>
                                <div className="space-y-1">
                                    {result.page4.warnings.map((warning, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-gray-400 text-xs">•</span>
                                            <p className="text-xs md:text-sm text-gray-700">{warning}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm font-medium text-black bg-white p-2 rounded-lg">
                                    {result.page4.insight}
                                </p>
                            </div>
                        </div>

                        {/* 요약 - 컴팩트 */}
                        <div className="p-4 md:p-6 rounded-xl space-y-3" style={{ backgroundColor: 'rgba(40, 40, 208, 0.1)' }}>
                            <h3 className="text-base md:text-lg font-bold text-black text-center">
                                이런 특징이 있다면 {result.type}!
                            </h3>
                            <div className="grid md:grid-cols-2 gap-2">
                                {result.page5.checks.map((check, i) => (
                                    <p key={i} className="text-xs md:text-sm text-gray-700 flex items-center gap-2">
                                        <span style={{ color: '#2828D0' }}>→</span>
                                        {check}
                                    </p>
                                ))}
                            </div>
                            <p className="text-xs md:text-sm text-gray-800 leading-relaxed pt-3 border-t" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                                {result.page5.summary}
                            </p>
                        </div>

                        {/* 하단 - 점수와 버튼을 한 줄로 */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border-2 p-4 rounded-xl" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                            <div className="flex gap-4 md:gap-6">
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold" style={{ color: '#2828D0' }}>{result.scores.stimulus}</div>
                                    <div className="text-xs text-gray-600">자극강도</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold" style={{ color: '#2828D0' }}>{result.scores.delayed}</div>
                                    <div className="text-xs text-gray-600">보상지연</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold" style={{ color: '#2828D0' }}>{result.scores.external}</div>
                                    <div className="text-xs text-gray-600">외부인정</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold" style={{ color: '#2828D0' }}>{result.scores.novelty}</div>
                                    <div className="text-xs text-gray-600">새로움</div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setCurrentQuestion(0)
                                    setAnswers({})
                                    setShowResult(false)
                                }}
                                className="px-6 py-2.5 text-white rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                                style={{ background: 'linear-gradient(135deg, #2828D0 0%, #8060D0 100%)' }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                다시 테스트하기
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-16 px-6">
            <div className="max-w-3xl mx-auto border-2 rounded-2xl p-8" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>질문 {currentQuestion + 1} / {questions.length}</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full"
                            style={{ background: 'linear-gradient(90deg, #2828D0 0%, #8060D0 100%)' }}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Question */}
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                >
                    <div className="bg-white border-2 p-8 rounded-2xl" style={{ borderColor: 'rgba(40, 40, 208, 0.2)' }}>
                        <p className="text-xl md:text-2xl text-black font-medium leading-relaxed">
                            {questions[currentQuestion].text}
                        </p>
                    </div>

                    {/* Answer Options */}
                    <div className="space-y-3">
                        {scaleOptions.map((option) => (
                            <motion.button
                                key={option.value}
                                onClick={() => handleAnswer(option.value)}
                                className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-left transition-all"
                                style={{
                                    '--hover-border': '#2828D0',
                                    '--hover-bg': 'rgba(40, 40, 208, 0.05)'
                                } as React.CSSProperties}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#2828D0';
                                    e.currentTarget.style.backgroundColor = 'rgba(40, 40, 208, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.backgroundColor = 'white';
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800">{option.label}</span>
                                    <span className="text-sm text-gray-500">{option.value}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Back Button */}
                {currentQuestion > 0 && (
                    <button
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                        className="mt-8 text-gray-600 hover:text-black transition-colors"
                    >
                        ← 이전 질문
                    </button>
                )}
            </div>
        </div>
    )
}
