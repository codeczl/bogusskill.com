// pages/index.js
import React, { Suspense } from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories, getDataList } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import { ArticleList } from '@/components/ArticleList'
import { CharacterGallery } from '@/components/CharacterGallery'
import {getTranslations, getLocale} from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('home');
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}


type categoryType = { 
  name: string; 
  src: string; 
  description: string;
  link: string; 
}

// 添加类型定义
type Episode = {
  title: string;
  date: string;
  action: string;
}

type NewsItem = {
  title: string;
  description: string;
  action: string;
}

type Product = {
  title: string;
  description: string;
  link: string;
}

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations('home');
  const episodeT = await getTranslations('episode');
  const categories = getCategories(locale);
  console.log('categories: ', categories)

  const allPostsData = getSortedPostsData().slice(0, 6)
  
  // 获取数组数据并打印查看
  const episodes = t.raw('latest.episodes');
  console.log('episodes: ', episodes);
  
  const newsItems = t.raw('news.items');
  console.log('newsItems: ', newsItems);
  
  const topics = t.raw('community.topics');
  console.log('topics: ', topics);
  
  const products = t.raw('merchandise.products');
  console.log('products: ', products);

  // 确保数据是数组
  const episodesArray = Array.isArray(episodes) ? episodes : [];
  const newsItemsArray = Array.isArray(newsItems) ? newsItems : [];
  const topicsArray = Array.isArray(topics) ? topics : [];
  const productsArray = Array.isArray(products) ? products : [];

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="flex flex-col items-center justify-center text-center space-y-6 relative min-h-[500px] p-8 overflow-hidden">
        {/* 左上角背景图片 */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] z-0"> 
          <img 
            src="/pic/section1.png" 
            alt="background character"
            className="w-full h-full object-contain opacity-40"
            style={{
              transformOrigin: 'center center',
              transform: 'rotate(-45deg) scale(1.5)'
            }}
          />
        </div>

        {/* 右下角背景图片 */}
        <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] z-0"> 
          <img 
            src="/pic/section2.png" 
            alt="background character"
            className="w-full h-full object-contain opacity-40"
            style={{
              transformOrigin: 'center center',
              transform: 'scaleX(-1) rotate(-15deg) scale(1.5)'
            }}
          />
        </div>

        {/* 内容部分 */}
        <div className="relative z-10">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold lg:text-8xl tracking-tighter hero-title" data-text="Bogus Skill">
            Bogus Skill
          </h1>
          
          <h2 className="text-3xl tracking-tight sm:text-4xl md:text-4xl lg:text-4xl anime-subtitle mt-8">
            {t("h2")}
          </h2>
          
          <p className="mx-auto max-w-[800px] text-xl md:text-2xl tracking-tight anime-text mt-8">
            {t("description")}
          </p>
        </div>
      </section>

      <section id="hero" className="space-y-8 text-center p-8 mystical-bg rounded-lg relative overflow-hidden backdrop-blur-sm">
        <h1 className="text-6xl font-bold tracking-tight static-title">
          {t("hero.title")}
        </h1>
        <h2 className="text-3xl font-semibold anime-subtitle">
          {t("hero.subtitle")}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg anime-text">
          <p>{t("hero.description")}</p>
          <p>{t("hero.story_line1")}</p>
          <p>{t("hero.story_line2")}</p>
          <p>{t("hero.story_line3")}</p>
          <p>{t("hero.story_line4")}</p>
          <p>{t("hero.story_line5")}</p>
          <p>{t("hero.story_line6")}</p>
          <p>{t("hero.story_line7")}</p>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">
            {t("hero.dramatic_text")}
          </p>
          <p>{t("hero.reveal_text")}</p>
          <p className="font-bold">{t("hero.power_text")}</p>
          <p className="font-bold">{t("hero.cheat_text")}</p>
          <p className="font-bold">{t("hero.twist_text")}</p>
          <p className="text-xl font-bold text-red-600 dark:text-red-400">
            {t("hero.epic_conclusion")}
          </p>
        </div>
      </section>
      <CharacterGallery />
      <section id="skills" className="space-y-8 text-center p-8 mystical-bg rounded-lg relative overflow-hidden backdrop-blur-sm">
        {/* 内容区域 */}
        <div className="relative z-10">
          <h2 className="text-6xl font-bold tracking-tight static-title mb-4">
            {t("skills.title")}
          </h2>
          <h3 className="text-3xl font-semibold anime-subtitle mb-6">
            {t("skills.subtitle")}
          </h3>
          <p className="text-xl md:text-2xl tracking-tight anime-text mb-12 max-w-3xl mx-auto">
            {t("skills.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t.raw("skills.skills") as any[]).map((skill, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur p-6 rounded-lg border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold anime-subtitle">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      {skill.japanese}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur border border-white/30">
                    {skill.type}
                  </span>
                </div>
                <p className="text-lg anime-text leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pv" className="space-y-8 text-center p-8 mystical-bg rounded-lg relative overflow-hidden backdrop-blur-sm">


{/* 内容区域 */}
<div className="relative z-10">
  <h2 className="text-6xl font-bold tracking-tight static-title mb-4">
    {t("pv.title")}
  </h2>
  <h3 className="text-3xl font-semibold anime-subtitle mb-6">
    {t("pv.subtitle")}
  </h3>
  <p className="text-xl md:text-2xl tracking-tight anime-text mb-12 max-w-3xl mx-auto">
    {t("pv.description")}
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* 第一弹PV */}
    <div className="bg-white/5 backdrop-blur p-6 rounded-lg border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl">
      <h3 className="text-2xl font-bold mb-4 anime-subtitle">
        {t("pv.pv1.title")}
      </h3>
      <div className="aspect-video w-full mb-4 relative">
        <iframe 
          className="w-full h-full rounded-lg border-4 border-white/10"
          src="https://www.youtube.com/embed/yak-TPMRrv8?si=pUFjA8NrKpFN970j" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-lg anime-text">{t("pv.pv1.description")}</p>
    </div>

    {/* 第二弹PV */}
    <div className="bg-white/5 backdrop-blur p-6 rounded-lg border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl">
      <h3 className="text-2xl font-bold mb-4 anime-subtitle">
        {t("pv.pv2.title")}
      </h3>
      <div className="aspect-video w-full mb-4 relative">
        <iframe 
          className="w-full h-full rounded-lg border-4 border-white/10"
          src="https://www.youtube.com/embed/PjgDnHIvci8?si=QYVepJXR7aaR2sHA" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-lg anime-text">{t("pv.pv2.description")}</p>
    </div>
  </div>
</div>
</section>

      {/* First Episode Section */}
      <section className="space-y-8 text-center p-8 mystical-bg rounded-lg relative overflow-hidden backdrop-blur-sm">
        <div className="relative z-10">
          <h2 className="text-5xl font-bold tracking-tight static-title mb-6">
            {episodeT("title")}
          </h2>
          <h3 className="text-3xl font-semibold anime-subtitle mb-6">
            {episodeT("subtitle")}
          </h3>
          <p className="text-xl md:text-2xl tracking-tight anime-text mb-8 max-w-3xl mx-auto">
            {episodeT("description")}
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur p-6 rounded-lg border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl">
            <div className="aspect-video w-full relative">
              <iframe 
                className="w-full h-full rounded-lg border-4 border-white/10"
                src="https://www.youtube.com/embed/2MQl9XIwO6I?si=A7G6-UMAmBpkS0vJ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.map((category: categoryType, index: React.Key | null | undefined) => (
        <section key={index} className="space-y-8 text-center p-8 mystical-bg rounded-lg relative overflow-hidden backdrop-blur-sm">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold tracking-tight static-title mb-6 inline-block">
              {category.name}
              <div className="h-2 w-full bg-white/20 mt-2 rounded-full"></div>
            </h2>
            <p className="text-xl md:text-2xl tracking-tight anime-text mb-8 max-w-3xl mx-auto">
              {category.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getDataList(category.src, locale)?.slice(0, 6).map((item: any, itemIndex: number) => (
                <a 
                  key={itemIndex}
                  href={item.url} // 添加链接
                  target="_blank"  // 新窗口打开
                  rel="noopener noreferrer"
                  className="group relative bg-white/5 backdrop-blur p-6 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  {/* 装饰性边框 - 点状边角 */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute top-2 left-6 w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="absolute top-6 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 transform rotate-90">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute top-2 left-6 w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="absolute top-6 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>

                  {/* 内容区域 */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 anime-subtitle group-hover:text-purple-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* 链接指示器 */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg 
                        className="w-6 h-6 text-white/50" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Articles Section */}
      <section className="space-y-8 text-center p-8 mystical-bg rounded-lg relative overflow-hidden backdrop-blur-sm">
        {/* 装饰性图案 */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-[100px] h-[100px] border-t-4 border-l-4 border-white/30"></div>
          <div className="absolute top-0 right-0 w-[100px] h-[100px] border-t-4 border-r-4 border-white/30"></div>
          <div className="absolute bottom-0 left-0 w-[100px] h-[100px] border-b-4 border-l-4 border-white/30"></div>
          <div className="absolute bottom-0 right-0 w-[100px] h-[100px] border-b-4 border-r-4 border-white/30"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold tracking-tight static-title mb-6">
            Articles
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback={<div>Loading articles...</div>}>
                {allPostsData.map((article: any, index: number) => (
                  <div 
                    key={index}
                    className="group bg-white/5 backdrop-blur p-6 rounded-lg relative overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* 文章卡片装饰边框 */}
                    <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:border-white/40 transition-colors duration-300"></div>
                    <div className="absolute top-0 left-0 w-[30px] h-[30px] border-t-2 border-l-2 border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                    <div className="absolute top-0 right-0 w-[30px] h-[30px] border-t-2 border-r-2 border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-[30px] h-[30px] border-b-2 border-l-2 border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-b-2 border-r-2 border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                    
                    {/* 文章内容 */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 anime-subtitle">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/60 mb-4">
                        {article.date}
                      </p>
                      <p className="text-base anime-text line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}