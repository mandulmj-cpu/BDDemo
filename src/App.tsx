/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollTo = (key: string) => {
    const el = sectionRefs.current[key];
    if (el) {
      const offset = el.offsetTop - 120;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveTab(key);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#343a40] antialiased pb-28">
      
      {/* --- 2) 제목 최상단 배치 --- */}
      <header className="mx-auto max-w-[1060px] px-5 py-8">
        <div className="text-[13px] text-[#848c94] mb-3 flex items-center gap-1">
          호주 <span className="text-[10px]">〉</span> 시드니 <span className="text-[10px]">〉</span> 투어
        </div>
        <h1 className="text-[28px] md:text-[34px] font-bold leading-tight mb-5 text-[#212529]">
          [소규모 반나절 투어] 블랙스완/박쥐/코스탈 워크 센테니얼파크+동부 해안 코스
        </h1>
        
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#51ABF3] font-bold text-lg">★ 5.0</span>
            <span className="text-[#848c94] text-sm underline cursor-pointer" onClick={() => scrollTo("reviews")}>후기 128개</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollTo("itinerary")} className="px-4 py-2 border rounded-xl text-[14px] font-bold hover:bg-gray-50 cursor-pointer">코스보기</button>
            <button onClick={() => scrollTo("faq")} className="px-4 py-2 border rounded-xl text-[14px] font-bold hover:bg-gray-50 cursor-pointer">문의/FAQ</button>
            <button onClick={() => scrollTo("intro")} className="px-4 py-2 border rounded-xl text-[14px] font-bold hover:bg-gray-50 cursor-pointer">만나는 시간</button>
            <button className="px-4 py-2 border rounded-xl text-[14px] font-bold bg-[#51ABF3] text-white cursor-pointer">저장하기</button>
          </div>
        </div>
      </header>

      {/* --- 3) 대표 이미지 --- */}
      <section className="mx-auto max-w-[1060px] px-5 mb-10">
        <div className="grid grid-cols-4 gap-2 h-[450px] rounded-2xl overflow-hidden shadow-sm">
          <div className="col-span-3 h-full">
            <img src="https://i.imgur.com/sXTpmBC.jpg" className="w-full h-full object-cover" alt="Main" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 flex flex-col gap-2 h-full">
            <img src="https://i.imgur.com/4drZihh.jpg" className="h-1/2 w-full object-cover" alt="Sub1" referrerPolicy="no-referrer" />
            <img src="https://i.imgur.com/2yK6fsw.jpg" className="h-1/2 w-full object-cover" alt="Sub2" referrerPolicy="no-referrer" />
          </div>
        </div>
        {/* 이미지 하단 요약 정보 */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-8 bg-[#F8F9FA] rounded-2xl border border-gray-100">
          <div className="flex items-center gap-3"><span className="text-xl">📍</span><span className="text-[14px] font-bold">호텔 픽업 & 드롭</span></div>
          <div className="flex items-center gap-3"><span className="text-xl">👥</span><span className="text-[14px] font-bold">최대 인원 6명</span></div>
          <div className="flex items-center gap-3"><span className="text-xl">⚡</span><span className="text-[14px] font-bold">즉시 확정 상품</span></div>
          <div className="flex items-center gap-3"><span className="text-xl">📸</span><span className="text-[14px] font-bold">폴라로이드 스냅</span></div>
        </div>
      </section>

      {/* --- 네비게이션 바 --- */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1060px] px-5 flex gap-8">
          {["intro", "itinerary", "policy", "reviews", "faq"].map((tab) => (
            <button key={tab} onClick={() => scrollTo(tab)} className={`py-4 text-[15px] font-bold transition-all cursor-pointer ${activeTab === tab ? "border-b-2 border-black text-black" : "text-[#adb5bd]"}`}>
              {tab === "intro" ? "상품소개" : tab === "itinerary" ? "코스안내" : tab === "policy" ? "이용안내" : tab === "reviews" ? "후기" : "질문"}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-[1060px] px-5 py-12 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
        <div className="space-y-20">
          
          {/* --- 4) 여행사 소개 --- */}
          <section className="p-6 border rounded-2xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#FF4B4B] rounded-full flex items-center justify-center text-white font-bold text-2xl">M</div>
              <div>
                <h4 className="font-bold text-lg text-[#212529]">이민주 마리트 투어</h4>
                <p className="text-sm text-[#848c94]">시드니 현지 자연 전문 가이드</p>
              </div>
            </div>
            <button className="text-[13px] font-bold text-[#51ABF3] border border-[#51ABF3] px-4 py-2 rounded-lg cursor-pointer">브랜드 홈 〉</button>
          </section>

          {/* --- 5) 결제 혜택 --- */}
          <section className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold mb-4 text-[#212529] text-[17px]">결제 혜택</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-[13.5px] font-medium"><span className="text-gray-600">KB국민카드</span><span className="text-[#51ABF3]">최대 3만원 결제일 할인</span></div>
              <div className="flex justify-between text-[13.5px] font-medium"><span className="text-gray-600">카카오페이</span><span className="text-[#51ABF3]">최대 4만원 즉시할인</span></div>
              <div className="flex justify-between text-[13.5px] font-medium"><span className="text-gray-600 text-xs italic cursor-pointer">롯데카드/하나카드 혜택 더보기 〉</span></div>
            </div>
          </section>

          {/* --- 6) 상품소개 --- */}
          <section ref={el => sectionRefs.current["intro"] = el} className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-8">상품 소개</h2>
            <div className="space-y-8 text-[16px] leading-relaxed text-[#495057]">
              <div>
                <p className="text-xl font-bold text-black mb-1">도심에서 멀리 가지 않고 즐기는</p>
                <p className="text-xl font-bold text-black mb-4">시드니 소규모 자연 탐험 반나절 투어!</p>
                <p>멀리 나가고 싶지는 않은데... 호주의 자연을 만끽하고 싶은 소규모 여행 팀이라면?</p>
                <p>아이들을 데리고 시드니를 여행하고 싶은데, 도시에서 벗어나고 싶지 않다면?</p>
                <p className="font-bold text-[#51ABF3] mt-4 border-b-2 border-blue-50 inline-block pb-1">'호텔 픽업' 포함된 센테니얼파크+동부해안 코스탈 워크가 딱!</p>
              </div>

              <div className="pt-6 border-t">
                <h3 className="font-bold text-black text-[19px] mb-4">아이와 함께하는 시드니 자연 탐험 👶🍃</h3>
                <p>동물원처럼 붐비지 않고, 도심에서 가까운 자연 속에서 아이들과, 함께 여행을 온 이들과 특별한 시간을 보내보세요.</p>
                <div className="mt-6 space-y-4">
                  <p className="font-bold">이 투어에서는</p>
                  <ul className="list-disc ml-5">
                    <li>센테니얼 파크에서 블랙 스완과 다양한 새들을 관찰하고</li>
                    <li>아름다운 시드니 해안 절벽을 따라 걷는 코스탈 워크를 경험합니다.</li>
                  </ul>
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#51ABF3] mt-4">
                    <p className="font-bold mb-2">이 투어를 특히 추천하는 분들</p>
                    <ul className="space-y-1 text-sm">
                      <li>✔ 아이들과 함께하는 가족 여행</li>
                      <li>✔ 긴 이동 없이 자연을 즐기고 싶은 분</li>
                      <li>✔ 오전 일정으로 가볍게 여행하고 싶은 분</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- 7) 코스 자세히 --- */}
          <section ref={el => sectionRefs.current["itinerary"] = el} className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-10">투어 일정</h2>
            <div className="relative ml-4 space-y-12 before:absolute before:left-[-17px] before:top-2 before:h-full before:w-[2px] before:bg-gray-100">
              <TimelineItem time="09:00" title="호텔 픽업" content="시드니 시내 숙소 로비에서 가이드가 직접 픽업 및 미팅을 진행합니다." />
              <TimelineItem 
                time="09:20" title="Centennial Park Nature Walk" 
                content="센테니얼 파크의 Duck Pond에서 블랙 스완, 오리, 다양한 호주 조류를 관찰하며 자연 산책을 즐깁니다."
                note="🦇 아이들을 위한 Nature Scavenger Hunt 활동 진행! 운이 좋은 날에는 박쥐들을 볼 수도 있어요! 가이드가 직접 찍어드리는 폴로라이드 서비스 포함 📸"
              />
              <TimelineItem time="10:30" title="Coastal Drive" content="차량으로 시드니 동부 해안 지역으로 이동합니다." />
              <TimelineItem 
                time="10:45" title="Bondi Coastal Walk" 
                content="타마라마 비치에서 본다이 비치까지 이어지는 해안 산책로를 가이드의 설명과 함께 걷습니다. (해안 절벽 지형, 바다 생태 해설)" 
              />
              <TimelineItem 
                time="12:15" title="Bondi Beach Break (자유시간)" 
                content="본다이 비치에서 개별 점심 식사 및 해변 피크닉을 즐깁니다." 
                note="🎁 돗자리 무료 대여 & 가이드가 직접 선별한 '찐! 현지인 맛집 리스트' 공유"
              />
              <TimelineItem time="13:30" title="호텔 드롭" content="안전하게 투어 종료 및 숙소/시내 드롭" />
            </div>
          </section>

          {/* --- 8, 9, 10) 포함/불포함/필수사항/취소규정 --- */}
          <section ref={el => sectionRefs.current["policy"] = el} className="scroll-mt-32 border-t pt-12 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-[17px]">✅ 포함 사항</h3>
                <ul className="text-[14px] space-y-2 text-gray-600"><li>• 호텔 픽업 & 드롭</li><li>• 전문 가이드 & 차량</li><li>• 어린이 자연 활동 워크시트</li></ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-[17px]">❌ 불포함 사항</h3>
                <ul className="text-[14px] space-y-2 text-gray-600"><li>• 개인 식사비</li><li>• 카페/음료 비용</li><li>• 여행자 보험</li></ul>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold mb-4 text-[17px]">🎒 필수 확인 사항 및 준비물</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">• 편한 운동화, 모자, 선크림, 개인 물 지참 권장 <br/>• 본다이 비치 피크닉용 돗자리 무료 대여 <br/>• 투어 48시간 전까지 취소 시 100% 전액 환불 가능</p>
            </div>
          </section>

          {/* --- 11, 12) AI 요약 및 실 후기 --- */}
          <section ref={el => sectionRefs.current["reviews"] = el} className="scroll-mt-32 border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">후기 <span className="text-[#51ABF3]">128</span></h2>
            <div className="bg-[#F0F8FF] p-7 rounded-2xl border border-[#D9EBFF] mb-12 shadow-sm">
              <div className="flex items-center gap-2 mb-5"><span className="text-lg">🤖</span><span className="font-bold text-[16px]">AI 후기 요약</span></div>
              <p className="text-[14px] text-gray-700 bg-white p-4 rounded-xl leading-relaxed">"아이 동반 가족 만족도가 높고, 도심 근처에서 블랙스완과 수많은 박쥐를 보는 경험이 매우 이색적이라는 평이 많습니다."</p>
            </div>

            <div className="space-y-10">
              <ReviewItem rating={5} name="이*주" date="2026.03.02" comment="아이들이 정말 좋아했어요! 동물원보다 자연스럽고 한적해서 시드니에서 가장 좋았던 오전이었습니다. 가이드님 폴로라이드 센스 최고!" />
              <ReviewItem rating={5} name="김*성" date="2026.02.15" comment="자유롭게 자연에서 움직이는 새들과 박쥐를 보니 저도 같이 신나더라고요. 박쥐 찐으로 ㅈㅉㅈㅉ 신기해요 어케 이렇게 많은지 경악..." />
              <ReviewItem rating={5} name="박*민" date="2026.01.10" comment="코스탈 워크 풍경이 너무 예뻐서 걷는 내내 행복했습니다. 돗자리 대여해주셔서 해변에서 쉴 때 너무 편했어요. 강력 추천!" />
              <ReviewItem rating={5} name="최*영" date="2025.12.24" comment="소규모라 오붓하게 다닐 수 있어 좋았습니다. 가이드님이 추천해주신 본다이 맛집 리스트로 점심까지 완벽하게 해결했네요." />
            </div>
          </section>

          {/* --- 13) 자주 묻는 질문 --- */}
          <section ref={el => sectionRefs.current["faq"] = el} className="scroll-mt-32 border-t pt-12">
            <h2 className="text-2xl font-bold mb-8 text-[#212529]">자주 묻는 질문</h2>
            <div className="divide-y border-y">
              <FAQItem q="비가 오면 취소되나요?" a="기본적으로 진행되나, 안전상 우려되는 폭우 시 코스가 변경되거나 상의 후 조정됩니다." />
              <FAQItem q="유아 카시트가 준비되어 있나요?" a="네, 예약 시 미리 말씀해 주시면 무료로 연령에 맞는 카시트를 장착해 드립니다." />
              <FAQItem q="블랙스완을 항상 볼 수 있나요?" a="네, 공원에 상주하고 있어 거의 항상 관찰 가능합니다." />
              <FAQItem q="투어 후 다른 곳에 내려주실 수 있나요?" a="시내 중심가(서큘러키 등)라면 호텔이 아니더라도 드롭 가능합니다." />
              <FAQItem q="준비물이 따로 있나요?" a="편한 운동화, 모자, 선크림을 추천드려요. 돗자리는 저희가 빌려드립니다." />
            </div>
          </section>
        </div>

        {/* --- 우측 가격/예약 바 --- */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-28 border rounded-2xl p-6 shadow-xl bg-white border-blue-50">
            <div className="mb-2">
              <span className="text-sm text-gray-400 line-through mr-2">99,000원</span>
              <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">10% OFF</span>
            </div>
            <div className="text-[32px] font-black mb-6 text-[#212529]">89,000원</div>
            <button className="w-full bg-[#51ABF3] text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 shadow-blue-100 mb-4 text-lg cursor-pointer">
              예약하기
            </button>
            <div className="flex justify-between text-[13px] text-gray-500 font-medium px-1">
              <span>취소 규정</span>
              <span className="text-[#51ABF3]">48시간 전 무료 취소</span>
            </div>
          </div>
        </aside>
      </main>

      {/* --- 모바일 하단 예약 바 --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between z-[100] shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div>
          <span className="text-[12px] text-gray-400 line-through">99,000원</span>
          <div className="text-[20px] font-black text-[#212529]">89,000원</div>
        </div>
        <button className="bg-[#51ABF3] text-white px-8 py-3 rounded-xl font-bold cursor-pointer">예약하기</button>
      </div>
    </div>
  );
}

/* --- 하위 컴포넌트 --- */
function TimelineItem({ time, title, content, note }: any) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[-25px] top-1.5 z-10 h-[18px] w-[18px] rounded-full border-4 border-[#51ABF3] bg-white" />
      <div className="text-xs font-black text-[#51ABF3] mb-1">{time}</div>
      <h4 className="text-[17px] font-bold mb-1 text-[#212529]">{title}</h4>
      <p className="text-[14px] text-gray-600 mb-2 leading-relaxed">{content}</p>
      {note && <div className="bg-gray-50 p-4 rounded-xl text-[13px] font-medium text-gray-500 border-l-4 border-gray-200 mt-2">{note}</div>}
    </div>
  );
}

function ReviewItem({ rating, name, comment, date }: any) {
  return (
    <div className="border-b pb-8 last:border-0">
      <div className="flex gap-1 text-[#51ABF3] text-xs mb-3">{"★".repeat(rating)}</div>
      <p className="text-[15px] font-medium text-[#212529] mb-3 leading-relaxed">"{comment}"</p>
      <div className="text-xs text-gray-400 font-medium">{name} | {date}</div>
    </div>
  );
}

function FAQItem({ q, a }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button onClick={() => setOpen(!open)} className="w-full text-left font-bold flex justify-between items-center group cursor-pointer">
        <span className="text-[15px] group-hover:text-[#51ABF3] transition-colors">Q. {q}</span>
        <span className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && <div className="mt-4 text-[14px] text-gray-500 leading-relaxed bg-gray-50 p-5 rounded-2xl">{a}</div>}
    </div>
  );
}
