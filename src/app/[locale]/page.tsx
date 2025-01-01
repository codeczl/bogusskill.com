// pages/index.js
import React, { Suspense } from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import { ArticleList } from '@/components/ArticleList'

import { Search } from '@/components/Search';
import {getTranslations, getLocale} from 'next-intl/server';

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
      <section className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-7xl tracking-tighter">
          <span className="inline-block">Bogus Skill</span>
        </h1>
        <h2 className="text-2xl tracking-tight sm:text-3xl md:text-3xl lg:text-3xl">{t("h2")}</h2>
        <p className="mx-auto max-w-[700px] md:text-xl tracking-tight">
          {t("description")}
        </p>
        <div className='w-full px-2 pt-10 lg:w-1/2'>
          <Search />
        </div>
      </section>

      <section id="hero">
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.description")}</p>
        <div>
          <a href="#manga">{t("hero.read_manga")}</a>
          <a href="#anime">{t("hero.watch_anime")}</a>
          <a href="#community">{t("hero.join_community")}</a>
        </div>
      </section>

      <section id="about">
        <h2>{t("about.title")}</h2>
        <p>{t("about.description_1")}</p>
        <p>{t("about.description_2")}</p>
        <h3>{t("about.features_title")}</h3>
        <ul>
          <li>
            <strong>{t("about.feature_1.title")}:</strong> {t("about.feature_1.description")}
          </li>
          <li>
            <strong>{t("about.feature_2.title")}:</strong> {t("about.feature_2.description")}
          </li>
        </ul>
      </section>

      <section id="latest">
        <h2>{t("latest.title")}</h2>
        <ul>
          {episodesArray.map((episode: Episode, index: number) => (
            <li key={index}>
              <h3>{episode.title}</h3>
              <p>{episode.date}</p>
              <a href={`#episode${index + 1}`}>{episode.action}</a>
            </li>
          ))}
        </ul>
      </section>

      <section id="news">
        <h2>{t("news.title")}</h2>
        <ul>
          {newsItemsArray.map((item: NewsItem, index: number) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={`#news${index + 1}`}>{item.action}</a>
            </li>
          ))}
        </ul>
      </section>

      <section id="community">
        <h2>{t("community.title")}</h2>
        <p>{t("community.description")}</p>
        <h3>{t("community.topics_title")}</h3>
        <ul>
          {topicsArray.map((topic: string, index: number) => (
            <li key={index}>
              <a href={`#discussion${index + 1}`}>{topic}</a>
            </li>
          ))}
        </ul>
        <a href="#forum">{t("community.join_forum")}</a>
      </section>

      <section id="store">
        <h2>{t("store.title")}</h2>
        <p>{t("store.description")}</p>
        <a href="https://www.bogusskill.com/store">{t("store.shop_now")}</a>
      </section>

      <section id="merchandise">
        <h2>{t("merchandise.title")}</h2>
        <p>{t("merchandise.description")}</p>
        <h3>{t("merchandise.featured_title")}</h3>
        <ul>
          {productsArray.map((product: Product, index: number) => (
            <li key={index}>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <a href={`https://www.bogusskill.com/store/${product.link}`}>
                {t("store.shop_now")}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="overview">
        <h2>{t("overview.title")}</h2>
        <p>{t("overview.description")}</p>
        
        <h3>{t("overview.manga.title")}</h3>
        <p>{t("overview.manga.description")}</p>
        
        <h3>{t("overview.anime.title")}</h3>
        <p>{t("overview.anime.description")}</p>
        
        <h3>{t("overview.recommendations.title")}</h3>
        <ul>
          <li>
            <a href="#similarManga">{t("overview.recommendations.similar_manga")}</a>
          </li>
          <li>
            <a href="#similarAnime">{t("overview.recommendations.similar_anime")}</a>
          </li>
        </ul>
      </section>

      <section id="multimedia">
        <h2>{t("multimedia.title")}</h2>
        <p>{t("multimedia.description")}</p>
        <a href="#videos">{t("multimedia.watch_now")}</a>
      </section>

      {categories.map((category: categoryType, index: React.Key | null | undefined) => (
        <ToolsList key={index} category={category} locale={locale} />
      ))}
      <div className='border-t'></div>
      <Suspense fallback={<div>Loading editor...</div>}>
        <ArticleList articles={allPostsData} />
      </Suspense>
    </div>
  )
}