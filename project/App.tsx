import React, { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const TABS = [
  {
    id: 1,
    label: '자연 (Nature)',
    image: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwMzU5MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '평화롭고 아름다운 자연의 풍경입니다.'
  },
  {
    id: 2,
    label: '도시 (City)',
    image: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDI3Nzg0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '현대적인 건축물과 도시의 활기찬 모습입니다.'
  },
  {
    id: 3,
    label: '기술 (Tech)',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDI2NzU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '미래지향적이고 추상적인 기술 배경입니다.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 pb-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">이미지 갤러리 탭</h1>
        </div>

        {/* 탭 버튼 영역 */}
        <div className="flex border-b border-gray-200 px-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1 py-4 px-4 text-center text-sm font-semibold transition-all duration-200 outline-none
                ${activeTab.id === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 이미지 및 설명 표시 영역 */}
        <div className="p-6 min-h-[400px]">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-gray-100 mb-6 group">
             {/* key를 변경���여 이미지가 바뀔 때마다 리렌더링 및 페이드인 효과 유도 */}
            <div key={activeTab.id} className="animate-in fade-in zoom-in duration-300 w-full h-full">
               <ImageWithFallback
                src={activeTab.image}
                alt={activeTab.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div key={`desc-${activeTab.id}`} className="animate-in slide-in-from-bottom-2 duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{activeTab.label}</h2>
            <p className="text-gray-600 leading-relaxed">{activeTab.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
