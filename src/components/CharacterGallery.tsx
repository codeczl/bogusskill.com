'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Character = {
  id: string;
  fullImage: string;
  thumbnailImage: string;
}

const characters: Character[] = [
  {
    id: 'light',
    fullImage: '/pic/10.png',
    thumbnailImage: '/pic/(10).png',
  },
  {
    id: 'lena',
    fullImage: '/pic/1.png',
    thumbnailImage: '/pic/(1).png',
  },
  {
    id: 'ayla',
    fullImage: '/pic/2.png',
    thumbnailImage: '/pic/(2).png',
  },
  {
    id: 'monica',
    fullImage: '/pic/3.png',
    thumbnailImage: '/pic/(3).png',
  },
  {
    id: 'dratena',
    fullImage: '/pic/4.png',
    thumbnailImage: '/pic/(4).png',
  },
  {
    id: 'inspector',
    fullImage: '/pic/5.png',
    thumbnailImage: '/pic/(5).png',
  },
  {
    id: 'investigator',
    fullImage: '/pic/6.png',
    thumbnailImage: '/pic/(6).png',
  },
  {
    id: 'security',
    fullImage: '/pic/7.png',
    thumbnailImage: '/pic/(7).png',
  },
  {
    id: 'finance',
    fullImage: '/pic/9.png',
    thumbnailImage: '/pic/(9).png',
  }
];

export function CharacterGallery() {
  const [selectedChar, setSelectedChar] = useState(characters[0]);
  const t = useTranslations('characters');

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* 左侧大图 */}
          <div className="w-full lg:w-1/2 relative min-h-[600px]">
            <Image
              src={selectedChar.fullImage}
              alt={t(`${selectedChar.id}.name`)}
              fill
              className="object-contain transition-opacity duration-300"
              priority
            />
          </div>

          {/* 右侧信息 */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold static-title">
                {t(`${selectedChar.id}.name`)}
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t(`${selectedChar.id}.cv`)}
              </p>
              <div className="h-px bg-gray-200 dark:bg-gray-700 w-full my-4" />
              <p className="text-lg leading-relaxed">
                {t(`${selectedChar.id}.description`)}
              </p>
            </div>
          </div>
        </div>

        {/* 底部角色选择器 */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelectedChar(char)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all duration-300
                  ${selectedChar.id === char.id 
                    ? 'ring-4 ring-primary scale-105' 
                    : 'ring-2 ring-gray-200 hover:ring-primary/50'
                  }`}
              >
                <Image
                  src={char.thumbnailImage}
                  alt={t(`${char.id}.name`)}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 