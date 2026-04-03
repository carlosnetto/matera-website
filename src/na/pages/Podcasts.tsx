import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { markdownToHtml } from '../../shared/utils/markdown';
interface PodcastEntry {
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
  excerpt: string;
  file: string;
  spotifyUrl: string;
  applePodcastsUrl: string;
}

interface PodcastPost extends PodcastEntry {
  body: string;
  externalUrl: string;
}

function PodcastList() {
  const [episodes, setEpisodes] = useState<PodcastEntry[]>([]);

  useEffect(() => {
    fetch('/data/en/podcasts/index.json')
      .then(r => r.json())
      .then(setEpisodes);
  }, []);

  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-black)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '3rem',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '60% 40%',
          alignItems: 'center',
          gap: '32px',
        }}>
          {/* Left: Title */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--matera-green)',
              lineHeight: 1.15,
            }}>
              Real Time Payments Revolution
            </h1>
          </div>

          {/* Right: Subtitle + Listen buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <p style={{ opacity: 0.8, fontSize: '1rem' }}>A Matera Podcast</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://open.spotify.com/show/5uowdgPihCQwTE1Y7mUnYD"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 28px',
                  border: '2px solid var(--matera-green)',
                  borderRadius: '8px',
                  color: 'var(--matera-green)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'transparent',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(92,255,77,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--matera-green)"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                Listen on Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/real-time-payments-revolution/id1807223492"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 28px',
                  border: '2px solid var(--matera-green)',
                  borderRadius: '8px',
                  color: 'var(--matera-green)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'transparent',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(92,255,77,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--matera-green)"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 018.4 8.4c0 4.03-2.848 7.373-6.6 8.16v-1.44c2.88-.744 5.04-3.36 5.04-6.48A6.84 6.84 0 0012 5.4a6.84 6.84 0 00-6.84 6.84c0 3.12 2.16 5.736 5.04 6.48v1.44c-3.752-.787-6.6-4.13-6.6-8.16A8.4 8.4 0 0112 3.6zm0 4.8a3.6 3.6 0 013.6 3.6c0 1.56-1.008 2.88-2.4 3.36v4.44c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2v-4.44A3.604 3.604 0 018.4 12 3.6 3.6 0 0112 8.4z"/></svg>
                Listen on Apple Podcasts
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '2rem' }} />
        </div>
      </section>

      {/* Episodes */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}>
            {episodes.map((ep) => (
              <Link
                key={ep.slug}
                to={`/en/podcasts/${ep.slug}`}
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
                {ep.thumbnail && (
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={ep.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '8px' }}>
                    {new Date(ep.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px', lineHeight: 1.4 }}>
                    {ep.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, flex: 1 }}>
                    {ep.excerpt}
                  </p>
                  <div style={{ marginTop: '12px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {ep.spotifyUrl && (
                      <a
                        href={ep.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1DB954', fontSize: '0.85rem', fontWeight: 600 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                        Spotify
                      </a>
                    )}
                    {ep.applePodcastsUrl && (
                      <a
                        href={ep.applePodcastsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#A855F7', fontSize: '0.85rem', fontWeight: 600 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#A855F7"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 018.4 8.4c0 4.03-2.848 7.373-6.6 8.16v-1.44c2.88-.744 5.04-3.36 5.04-6.48A6.84 6.84 0 0012 5.4a6.84 6.84 0 00-6.84 6.84c0 3.12 2.16 5.736 5.04 6.48v1.44c-3.752-.787-6.6-4.13-6.6-8.16A8.4 8.4 0 0112 3.6zm0 4.8a3.6 3.6 0 013.6 3.6c0 1.56-1.008 2.88-2.4 3.36v4.44c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2v-4.44A3.604 3.604 0 018.4 12 3.6 3.6 0 0112 8.4z"/></svg>
                        Apple
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PodcastEpisode() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PodcastPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/en/podcasts/index.json')
      .then(r => r.json())
      .then((index: PodcastEntry[]) => {
        const entry = index.find(e => e.slug === slug);
        if (entry) {
          return fetch(`/data/en/podcasts/${encodeURIComponent(entry.file)}`).then(r => r.json());
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
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>Episode not found</h1>
        <Link to="/en/podcasts" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>Back to Podcasts</Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-black)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '60px',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/en/podcasts" style={{ color: 'var(--matera-green)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px', display: 'inline-block' }}>
            ← Back to Podcasts
          </Link>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.25, marginBottom: '16px' }}>
            {post.title}
          </h1>
          <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </section>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="container" style={{ maxWidth: '800px', marginTop: '-30px', position: 'relative', zIndex: 1 }}>
          <img src={post.thumbnail} alt="" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
        </div>
      )}

      {/* Listen links */}
      <div className="container" style={{ maxWidth: '800px', marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {post.spotifyUrl && (
          <a
            href={post.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '12px 24px', border: '2px solid #1DB954', borderRadius: '8px',
              color: '#1DB954', fontWeight: 700, fontSize: '0.95rem', background: 'transparent',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(29,185,84,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            Listen on Spotify
          </a>
        )}
        {post.externalUrl && post.externalUrl.includes('apple.com') && (
          <a
            href={post.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '12px 24px', border: '2px solid #A855F7', borderRadius: '8px',
              color: '#A855F7', fontWeight: 700, fontSize: '0.95rem', background: 'transparent',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#A855F7"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 018.4 8.4c0 4.03-2.848 7.373-6.6 8.16v-1.44c2.88-.744 5.04-3.36 5.04-6.48A6.84 6.84 0 0012 5.4a6.84 6.84 0 00-6.84 6.84c0 3.12 2.16 5.736 5.04 6.48v1.44c-3.752-.787-6.6-4.13-6.6-8.16A8.4 8.4 0 0112 3.6zm0 4.8a3.6 3.6 0 013.6 3.6c0 1.56-1.008 2.88-2.4 3.36v4.44c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2v-4.44A3.604 3.604 0 018.4 12 3.6 3.6 0 0112 8.4z"/></svg>
            Listen on Apple Podcasts
          </a>
        )}
      </div>

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

export { PodcastList, PodcastEpisode };
