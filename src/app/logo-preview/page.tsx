import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';

const CLEAN_LOGO_OPTIONS = [
  {
    id: 1,
    file: '/logos/option_1.png',
    title: '方案 1: 钛金灰 × 科技皇室蓝手柄 (Titanium & Royal Blue)',
    concept: '纯白/浅灰底色 × 哑光深岩灰手柄 × 皇室蓝点缀',
    style: 'Modern Minimalist / Precision Hardware',
    colors: ['#F8FAFC (清爽浅底)', '#0F172A (钛金灰黑)', '#2563EB (皇室蓝)'],
    description: '告别黑底与荧光绿！以极简纯白浅灰为底，中央采用深邃的哑光钛金深蓝灰手柄轮廓，搭配皇室蓝按键与中央纯白 AI 星芒，沉稳、高级、大厂风范。',
  },
  {
    id: 2,
    file: '/logos/option_2.png',
    title: '方案 2: 苹果风双色渐变手柄 (Indigo / Violet Gradient)',
    concept: '柔和白金底色 × 现代靛蓝紫双色渐变',
    style: 'Apple Style / Clean Dual-Tone',
    colors: ['#F1F5F9 (柔和浅灰)', '#4F46E5 (经典靛蓝)', '#818CF8 (鸢尾紫)'],
    description: '采用苹果/硅谷轻科技风格，外框为细腻的现代靛蓝渐变，内嵌柔和的冰蓝白腔体与纯白 AI 核心，质感温润丝滑，视觉舒适度极高。',
  },
  {
    id: 3,
    file: '/logos/option_3.png',
    title: '方案 3: 翡翠碧玉 × 钢灰几何手柄 (Emerald Jade & Steel Slate)',
    concept: '珍珠白底色 × 切角硬派钢灰 × 典雅翡翠绿',
    style: 'Precision Geometric / Clean Architecture',
    colors: ['#F6F8FA (珍珠白)', '#1E293B (钢岩灰)', '#059669 (典雅翡翠)'],
    description: '硬朗的几何切角手柄轮廓，中央经精密三角切割嵌入典雅深翡翠绿徽章，无刺眼发光，纯色块碰撞，充满高级设计感与平衡美。',
  },
  {
    id: 4,
    file: '/logos/option_4.png',
    title: '方案 4: 现代包豪斯双色手柄 (Modern Color-Block & Sunset Coral)',
    concept: '象牙白底色 × 极简深岩青灰 × 暖阳珊瑚橙',
    style: 'Figma/Linear Style / Clean Color-Block',
    colors: ['#FAFAFA (象牙白)', '#111827 (深墨色)', '#F97316 (珊瑚橙)'],
    description: '极简设计师风格，左侧为沉稳的深墨色握把与白色方向键，右侧采用活力的暖阳珊瑚橙色块碰撞，中央悬浮纯白 AI 钻石星标，年轻轻快且极具辨识度。',
  },
  {
    id: 5,
    file: '/logos/option_5.png',
    title: '方案 5: 极简英文字标 "A"+"G" 科技徽标 (Architectural AG Monogram)',
    concept: '浅冰灰底色 × 经典大写 A/Play 符 × 天空蓝摇杆',
    style: 'Corporate Monogram / Iconic Branding',
    colors: ['#F3F4F6 (浅冰灰)', '#1E1B4B (深邃群青)', '#0284C7 (天空蓝)'],
    description: '将 AiGamesHub 的首字母 "A"（游戏前进三角）与手柄操纵杆结构巧妙融合，顶部悬浮纯白与天蓝色的摇杆圆核，极简抽象，适合作为国际化品牌 Logo。',
  },
];

export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-300 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href="/" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline font-semibold">
                <ArrowLeft className="h-3.5 w-3.5" /> Back to AiGamesHub
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
              <Sparkles className="h-7 w-7 text-blue-600" />
              AiGamesHub 【清爽无黑底·非霓虹高雅科技】品牌 Logo 精选
            </h1>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              全面摒弃刺眼荧光绿与纯黑底色！采用清爽纯净的浅色质感底、高雅皇室蓝、苹果风渐变、翡翠碧玉与设计师双色块。
            </p>
          </div>
        </div>

        {/* 5 Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLEAN_LOGO_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Image Display */}
                <div className="relative aspect-square w-full rounded-xl bg-slate-50 border border-slate-100 overflow-hidden grid place-items-center p-4 group-hover:scale-[1.03] transition-transform duration-300 shadow-inner">
                  <Image
                    src={opt.file}
                    alt={opt.title}
                    width={320}
                    height={320}
                    className="h-full w-full object-contain drop-shadow-md"
                  />
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 font-mono">
                      清爽方案 {opt.id}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{opt.style.split('/')[0]}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-2">{opt.title}</h3>
                  <p className="text-xs text-blue-600 font-medium mt-0.5">{opt.concept}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5">{opt.description}</p>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5">
                <span className="text-[10px] text-slate-500 font-mono">质感配色：</span>
                <div className="flex flex-wrap gap-1.5">
                  {opt.colors.map((c, i) => (
                    <span key={i} className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] text-slate-700 font-mono font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
