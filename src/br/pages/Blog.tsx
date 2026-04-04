import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';
import { markdownToHtml } from '../../shared/utils/markdown';

interface BlogEntry {
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
  excerpt: string;
  file: string;
  tags?: string[];
}

interface BlogPost extends BlogEntry {
  body: string;
  author?: string;
}

const BATCH = 12;

const TAG_LABELS: Record<string, string> = {
  'pix': 'Pix',
  'credito': 'Crédito',
  'regtech': 'RegTech',
  'dados-ia': 'Dados & IA',
  'core-banking': 'Core Banking',
  'stablecoin': 'Stablecoin',
  'digital-twin': 'Digital Twin',
  'pagamentos': 'Pagamentos',
};

function BrBlogList() {
  const [posts, setPosts] = useState<BlogEntry[]>([]);
  const [visible, setVisible] = useState(BATCH);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/data/br/blog/index.json')
      .then(r => r.json())
      .then(setPosts);
  }, []);

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags || [])));

  const filtered = selectedTags.length === 0
    ? posts
    : posts.filter(p => selectedTags.every(t => p.tags?.includes(t)));

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    setVisible(BATCH);
  };

  const loadMore = useCallback(() => {
    setVisible(v => Math.min(v + BATCH, filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadMore();
    }, { rootMargin: '200px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <PageMeta title="Blog" description="Conteúdo sobre pagamentos, Pix, crédito, core banking e tecnologia financeira." url="/br/blog" />
      <PageHero title="Blog" />
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          {allTags.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {allTags.map(tag => {
                const active = selectedTags.includes(tag);
                return (
                  <button key={tag} onClick={() => toggleTag(tag)} style={{
                    padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                    border: active ? '2px solid var(--matera-green)' : '2px solid var(--matera-blue)',
                    backgroundColor: active ? 'var(--matera-green)' : '#fff',
                    color: active ? '#000' : 'var(--matera-blue)',
                    transition: 'all 0.2s',
                  }}>
                    {TAG_LABELS[tag] || tag}
                  </button>
                );
              })}
              {selectedTags.length > 0 && (
                <button onClick={() => { setSelectedTags([]); setVisible(BATCH); }} style={{
                  padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                  border: '2px solid #ccc', backgroundColor: '#fff', color: '#999',
                }}>
                  Limpar
                </button>
              )}
            </div>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}>
            {filtered.slice(0, visible).map((p) => (
              <Link
                key={p.slug}
                to={`/br/blog/${p.slug}`}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                }}
              >
                {p.thumbnail && (
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={p.thumbnail} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '8px' }}>
                    {new Date(p.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px', lineHeight: 1.4 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6, flex: 1 }}>
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {visible < filtered.length && <div ref={sentinelRef} style={{ height: '1px' }} />}
        </div>
      </section>
    </>
  );
}

function BrBlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/br/blog/index.json')
      .then(r => r.json())
      .then((index: BlogEntry[]) => {
        const entry = index.find(e => e.slug === slug);
        if (entry) {
          return fetch(`/data/br/blog/${encodeURIComponent(entry.file)}`).then(r => r.json());
        }
        return null;
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div style={{ minHeight: '60vh', paddingTop: '8rem' }} />;
  if (!post) return (
    <div style={{ minHeight: '60vh', paddingTop: '8rem', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>Post não encontrado</h1>
        <Link to="/br/blog" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>Voltar para o Blog</Link>
      </div>
    </div>
  );

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.excerpt || ''}
        image={post.thumbnail}
        url={'/br/blog/' + post.slug}
        article={{ date: post.date, author: post.author }}
      />
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-blue)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '60px',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/br/blog" style={{ color: 'var(--matera-green)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px', display: 'inline-block' }}>
            ← Voltar para o Blog
          </Link>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.25, marginBottom: '16px' }}>
            {post.title}
          </h1>
          <div style={{ opacity: 0.7, fontSize: '0.9rem', display: 'flex', gap: '20px' }}>
            <span>{new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {post.author && <span>Por {post.author}</span>}
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="container" style={{ maxWidth: '800px', marginTop: '-30px', position: 'relative', zIndex: 1 }}>
          <img src={post.thumbnail} alt={post.title} style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
        </div>
      )}

      {/* Body */}
      <section style={{ padding: '48px 0 80px' }}>
        <div
          className="container blog-content"
          style={{ maxWidth: '800px' }}
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }}
        />
      </section>
    </>
  );
}

export { BrBlogList, BrBlogArticle };
