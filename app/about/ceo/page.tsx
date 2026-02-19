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
                        <h1 className="text-3xl font-bold text-purple-400">CEO's Message</h1>
                    </div>

                    {/* 메인 메시지 */}
                    <div className="space-y-8">
                        <p className="text-xl font-bold text-black leading-relaxed">
                            "우리는 도메인을 꿈으의 노력했지만, 시실 우리를 움직이는 건 도메인이었습니다."
                        </p>

                        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                            <p>
                                대표인 저는 현때 지능로 무기력증에 빠져 있었습니다.<br />
                                소통 영상과 끝없는 스크롤 속에서 하루를 허비하고나 보면 찾아오는 건 자괴감뿐이었죠.<br />
                                제건의 유명서적 '도메인 다복스'를 만나며 스타트업을 알려해 보기도 있었니다.<br />
                                하지만 의지로 자극을 차단했을를 실의 에너지는 오히려 배열되었습니다.<br />
                                그때 개달았습니다. 문제는 도메인 그 자체가 아니라, 도메인을 없는 '방식'에 였다는 것을요.
                            </p>

                            <p>
                                저는 도메인의 알리를 파고들기 시작했습니다.<br />
                                연구 끝에 발견한 사실은 놀라웠습니다.<br />
                                우리가 무단가에 도전하고, 성취감을 느끼고, 내 목표를 기대하게 만드는 힘 역시 '도메인'에서 나온다는 점이었습니다.<br />
                                나쁜 도메인은 노력을 삼려한 채 결과만 주지만는 '가짜 해택'이었고,<br />
                                좋은 도메인은 과정의 고통을 즐거움으로 바꿔주는 '성장의 연료'였습니다.
                            </p>

                            <p>
                                대한민국 20대가 활력을 잃어가는 이유는 의지가 부족해서가 아닙니다.<br />
                                단지 '좋은 도메인'을 없는 경로를 몰랐을 뿐입니다.<br />
                                저는 이 '도메인의 선순환 고주'를 시스템화하고 싶었습니다.<br />
                                단순히 중독을 방지하는 컨시지가 아니라, 직시가 가진 도메인의 에너지를<br />
                                '건강한 습관'과 '생산적인 커뮤니티'로 연결해주는 가이드가 되기로 결심했습니다.
                            </p>

                            <p>
                                결국 제가 내린 결론은 하나였습니다.<br />
                                우리 삶을 망치는 것은 도메인 그 자체가 아니라, 한 번 빠지면 해어 나오지 못하는 '나쁜 중독의 굴레'였습니다.<br />
                                우리는 이 굴레를 깨어내는 것이 그저인 없고, 그 에너지를 성장의 동력으로 돌려놓는 새로운 고리를 만들고자 합니다.<br />
                                과락 뒤에 허무함이 남는 일회성 자극이 아니라, 성취가 다시 다음 도전의 설레으로 이어지는 단단한 흐름 말입니다.
                            </p>

                            <p>
                                이것이 우리가 '루플리(LOOFLY)'인 이유입니다.
                            </p>

                            <p>
                                나쁜 중독의 루프(Loop)를 끊고, 당신의 삶을 건강하게 지탱할 도메인의 선순환 루프를 시작하는 곳.<br />
                                우리는 루플리를 통해 도주가 배열 다니는 자신을 만나는 기분 좋은 반복 속에 머물기를 바랍니다.
                            </p>

                            <p className="font-bold text-black">
                                이제 루플리와 함께, 당신만의 건강한 루프를 설계해 보세요.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
