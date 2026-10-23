'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Header } from '@/components/website/header';
import catalog from './catalog.json';

const categoryNames = [...new Set(catalog.map((item) => item.category))];

export default function ComponentsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return catalog.filter((item) => {
      const matchesCategory = activeCategory === '全部' || item.category === activeCategory;
      const matchesQuery = !normalized || `${item.name} ${item.category} ${item.description} ${item.tags.join(' ')}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <main className='component-library-page'>
      <Header />
      <section className='component-library-content'>
        <div className='component-library-heading'>
          <div>
            <p className='eyebrow'>MOTION PRIMITIVES · 本地组件集</p>
            <h1>动效组件库</h1>
            <p className='component-library-lede'>33 个组件 · 96 个可交互示例。浏览预览、查看完整示例源码并复制。</p>
          </div>
          <div className='library-count'><strong>{catalog.length}</strong><span>个组件</span><i /> <strong>{catalog.reduce((sum, item) => sum + item.demos.length, 0)}</strong><span>个示例</span></div>
        </div>
        <div className='library-controls'>
          <label className='library-search'><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder='搜索组件名称' aria-label='搜索组件名称' /></label>
          <div className='category-filters' aria-label='组件分类'>
            {['全部', ...categoryNames].map((category) => (
              <button key={category} className={activeCategory === category ? 'category-filter active' : 'category-filter'} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>
        </div>
        <div className='component-grid'>
          {filtered.map((item, index) => (
            <Link className='component-card' href={`/docs/${item.id}`} key={item.id}>
              <div className={`component-card-art art-${index % 6}`}><span>{item.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span><b>{item.name}</b></div>
              <div className='component-card-meta'><div><span className='component-category'>{item.category}</span><h2>{item.name}</h2><p className='component-description'>{item.description}</p></div><span className='component-open' aria-hidden>↗</span></div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <div className='library-empty'>没有找到匹配的组件。</div>}
        <footer className='library-footer'>组件源码基于 Motion Primitives，遵循 MIT License。许可文本随本项目一并提供。</footer>
      </section>
    </main>
  );
}
