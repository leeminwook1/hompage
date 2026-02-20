"use client"

import { motion } from "framer-motion"

export default function CEOPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    {/* 제목 */}
                    <div className="border-b border-gray-200 pb-6">
                        <h1 className="text-3xl font-bold" style={{ color: '#2828D0' }}>CEO 메시지</h1>
                    </div>

                    {/* 메인 메시지 */}
                    <div className="space-y-8">
                        <p className="text-xl font-bold text-black leading-relaxed">
                            "개인의 의지를 넘어, 몰입의 구조를 설계합니다"
                        </p>

                        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                            <p>
                                저는 오랫동안 스스로를 통제력이 강하고 몰입도가 높은 사람이라 믿어 왔습니다.<br />
                                목표를 세우면 끝까지 완수해 내는 책임감이 제 삶을 이끄는 가장 큰 원동력이었기 때문입니다.
                            </p>

                            <p>
                                하지만 어느 순간부터, 제 의지만으로는 통제하기 어려운 변화가 시작되었습니다.<br />
                                휴식을 위해 켠 스마트폰은 한 시간이 넘도록 손에서 떠나지 않았고,<br />
                                무의미하게 이어지는 짧은 영상들의 연쇄를 끊어내기가 점점 힘들어졌습니다.<br />
                                해야 할 일이 분명함에도 의욕은 좀처럼 생겨나지 않았으며,<br />
                                저의 감각은 더 즉각적이고 강렬한 자극에만 반응하기 시작했습니다.
                            </p>

                            <p>
                                처음에는 이것을 단순한 의지력의 문제라고 생각하며 스스로를 질책했습니다.<br />
                                그러나 반복되는 무기력과 짧아진 집중력은 개인의 태도만으로는 설명할 수 없는 영역이었습니다.
                            </p>

                            <p>
                                이 현상의 본질을 탐구하며 저는 확신을 얻었습니다.<br />
                                우리가 겪는 무기력은 나약함 때문이 아니라, 과도한 자극에 노출될 수밖에 없는 현대 사회의 보상 구조 안에서 발생한 신경계의 불균형입니다.<br />
                                도파민은 단순히 기분을 좋게 만드는 물질이 아니라, 우리에게 기대를 심어주고 특정 행동을 반복하게 만드는 뇌의 강력한 신호이기 때문입니다.
                            </p>

                            <p>
                                저는 이 문제를 개인의 각성에만 맡기지 않고, 보다 근본적인 '구조적 설계'를 통해 해결하고자 루플리(loofly)를 설립했습니다.<br />
                                이를 위해 도파민 기전을 전문적으로 탐구해 온 연구 인력을 영입하여 과학적 기반의 연구 시스템을 구축했습니다.
                            </p>

                            <p>
                                루플리는 다음 두 가지 방향을 향해 나아갑니다.<br />
                                첫째, 일시적인 쾌락에 휘둘리지 않는 지속 가능한 동기 체계를 만드는 것입니다.<br />
                                둘째, 누구나 자신의 신경계 작동 방식을 이해하고 스스로의 일상을 설계할 수 있도록 돕는 것입니다.
                            </p>

                            <p>
                                루플리는 더 자극적인 대안을 제시하는 곳이 아닙니다.<br />
                                자극에 의존하지 않고도 본연의 에너지만으로 움직일 수 있는 최적의 구조를 연구하는 곳입니다.
                            </p>

                            <p>
                                우리는 막연한 의지를 강조하기보다, 과학적이고 정교한 구조의 힘을 믿습니다.<br />
                                루플리는 인간의 몰입과 성장을 가능하게 하는 그 본질적인 방향을 끝까지 탐구해 나가겠습니다.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
