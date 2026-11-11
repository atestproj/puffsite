import { useEffect, useState } from 'react'
import './App.css'

const tinyMenuItems = [
  { label: 'VOZOL PUFF', slug: 'vozol-puff' },
  { label: 'IQOS TEREA', slug: 'iqos-terea' },
  { label: 'IQOS ILUMA', slug: 'iqos-iluma' },
  { label: 'IQOS 3 DUO', slug: 'iqos-3-duo' },
  { label: 'HEETS', slug: 'heets' },
  { label: 'SMOK', slug: 'smok' },
]

const navItems = [
  { label: 'VOZOL PUFF', slug: 'vozol-puff' },
  { label: 'IQOS TEREA', slug: 'iqos-terea' },
  { label: 'IQOS ILUMA', slug: 'iqos-iluma' },
  { label: 'E-SİGARA', slug: 'e-sigara' },
  { label: 'SİZDEN GELENLER', slug: 'sizden-gelenler' },
]

const devices = [
  { name: 'Vozol Gold', color: '#f5e9c8', accent: '#d6c07c', detail: '#a18b4f' },
  { name: 'Vozol Blue', color: '#5a6ef5', accent: '#2d3bd6', detail: '#d3d9ff' },
  { name: 'Vozol Purple', color: '#c55bf7', accent: '#8726d9', detail: '#f1d7ff' },
  { name: 'Vozol Aqua', color: '#8be8f3', accent: '#35bfd5', detail: '#dffcff' },
]

const catalog = [
  { title: 'Vozol Star', subtitle: 'Leafy & smooth', price: '899 ₺', tone: 'gold' },
  { title: 'Vozol Max', subtitle: 'Long-lasting flavor', price: '1.199 ₺', tone: 'purple' },
  { title: 'Vozol Mini', subtitle: 'Compact daily use', price: '799 ₺', tone: 'blue' },
  { title: 'Vozol Flex', subtitle: 'Custom breeze', price: '1.399 ₺', tone: 'aqua' },
]

const brandCatalog = {
  'vozol-puff': {
    label: 'VOZOL PUFF',
    description: 'Yoğun aroma, sade kullanım ve uzun ömürlü performans sunan Vozol Puff modelleri.',
    products: [
      { title: 'Vozol Star', subtitle: 'Leafy & smooth', price: '899 ₺', tone: 'gold' },
      { title: 'Vozol Max', subtitle: 'Long-lasting flavor', price: '1.199 ₺', tone: 'purple' },
      { title: 'Vozol Mini', subtitle: 'Compact daily use', price: '799 ₺', tone: 'blue' },
      { title: 'Vozol Flex', subtitle: 'Custom breeze', price: '1.399 ₺', tone: 'aqua' },
      { title: 'Vozol Air', subtitle: 'Fresh draw', price: '1.049 ₺', tone: 'gold' },
      { title: 'Vozol Pro', subtitle: 'Balanced vapor', price: '1.299 ₺', tone: 'purple' },
    ],
  },
  'iqos-terea': {
    label: 'IQOS TEREA',
    description: 'Daha temiz kullanım ve karakteristik tat profili sunan IQOS TEREA seçenekleri.',
    products: [
      { title: 'TEREA Yellow', subtitle: 'Smooth tobacco', price: '259 ₺', tone: 'gold' },
      { title: 'TEREA Turquoise', subtitle: 'Fresh mint', price: '259 ₺', tone: 'aqua' },
      { title: 'TEREA Blue', subtitle: 'Cool menthol', price: '259 ₺', tone: 'blue' },
      { title: 'TEREA Silver', subtitle: 'Balanced finish', price: '259 ₺', tone: 'purple' },
    ],
  },
  'iqos-iluma': {
    label: 'IQOS ILUMA',
    description: 'Teknoloji odaklı ve modern kullanım deneyimi sunan ILUMA serisi ürünler.',
    products: [
      { title: 'ILUMA One', subtitle: 'Sleek daily use', price: '1.899 ₺', tone: 'blue' },
      { title: 'ILUMA Prime', subtitle: 'Premium comfort', price: '2.299 ₺', tone: 'gold' },
      { title: 'ILUMA Lite', subtitle: 'Lightweight design', price: '1.699 ₺', tone: 'purple' },
    ],
  },
  'iqos-3-duo': {
    label: 'IQOS 3 DUO',
    description: 'Gün boyu kullanım için dengeli ve pratik IQOS 3 DUO seçenekleri.',
    products: [
      { title: '3 DUO Kit', subtitle: 'Compact & dependable', price: '1.599 ₺', tone: 'gold' },
      { title: '3 DUO Plus', subtitle: 'Extended use', price: '1.799 ₺', tone: 'aqua' },
      { title: '3 DUO Starter', subtitle: 'Easy setup', price: '1.499 ₺', tone: 'blue' },
    ],
  },
  'heets': {
    label: 'HEETS',
    description: 'Yumuşak ve karakterli lezzet deneyimi sunan HEETS seçenekleri.',
    products: [
      { title: 'HEETS Amber', subtitle: 'Warm tobacco', price: '219 ₺', tone: 'gold' },
      { title: 'HEETS Silver', subtitle: 'Clean finish', price: '219 ₺', tone: 'purple' },
      { title: 'HEETS Blue', subtitle: 'Cool and crisp', price: '219 ₺', tone: 'aqua' },
    ],
  },
  smok: {
    label: 'SMOK',
    description: 'Güçlü puff karakteri ve modern tasarımla öne çıkan SMOK ürünleri.',
    products: [
      { title: 'SMOK Nord', subtitle: 'Portable design', price: '1.099 ₺', tone: 'blue' },
      { title: 'SMOK V8', subtitle: 'Smooth vapor', price: '1.349 ₺', tone: 'purple' },
      { title: 'SMOK Mini', subtitle: 'Daily favorite', price: '999 ₺', tone: 'gold' },
    ],
  },
}

const whatsappUrl = `https://wa.me/905388337507?text=${encodeURIComponent(
  'Merhaba, ürünler hakkında bilgi almak istiyorum.',
)}`

function getRoute() {
  if (typeof window === 'undefined') return ''
  const hash = window.location.hash.replace(/^#\/?/, '')
  return hash || ''
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const brand = brandCatalog[route]

  const renderHomePage = () => (
    <>
      <section className="hero">
        <div className="hero__content">
          <div className="wordmark">PUFFCUDAYI.COM.TR</div>
          <div className="subtitle">Premium vape</div>

          <h1>
            <span className="h1-main">VOZOL</span>
            <span className="h1-secondary">ÇEŞİTLERİ</span>
          </h1>

          <p className="hero-copy">Tarzına uygun Vozol'u seç!</p>

          <div className="device-row" aria-label="Vozol ürünleri">
            {devices.map((device) => (
              <div
                key={device.name}
                className="device"
                style={{
                  '--device-color': device.color,
                  '--device-accent': device.accent,
                  '--device-detail': device.detail,
                }}
              >
                <div className="device__top" />
                <div className="device__body">
                  <span>{device.name.split(' ')[1]}</span>
                </div>
                <div className="device__label">VOZOL</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-banner" aria-label="Öne çıkanlar">
        <div className="feature-pill">Ödül Kazandıran Lezzet</div>
        <div className="feature-pill">Hızlı Teslimat</div>
        <div className="feature-pill">Güvenli Ödeme</div>
        <div className="feature-pill">Kampanyalı Fiyat</div>
      </section>

      <section className="catalog">
        <div className="catalog__header">
          <h2>Öne çıkan ürünler</h2>
          <a href="#">Tüm ürünler</a>
        </div>

        <div className="product-grid">
          {catalog.map((product) => (
            <article key={product.title} className={`product-card product-card--${product.tone}`}>
              <div className="product-card__media" aria-hidden="true">
                <div className="product-card__device" />
              </div>
              <div className="product-card__info">
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                <div className="product-card__footer">
                  <span>{product.price}</span>
                  <button type="button">Sepete ekle</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )

  const renderBrandPage = () => (
    <section className="brand-page">
      <div className="brand-page__hero">
        <div className="brand-page__meta">
          <span className="brand-page__eyebrow">Kategori</span>
          <h2>{brand.label}</h2>
          <p>{brand.description}</p>
          <a href="#" className="brand-page__back">← Ana sayfaya dön</a>
        </div>
      </div>

      <div className="brand-page__products">
        {brand.products.map((product) => (
          <article key={product.title} className={`product-card product-card--${product.tone}`}>
            <div className="product-card__media" aria-hidden="true">
              <div className="product-card__device" />
            </div>
            <div className="product-card__info">
              <h3>{product.title}</h3>
              <p>{product.subtitle}</p>
              <div className="product-card__footer">
                <span>{product.price}</span>
                <button type="button">Sepete ekle</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="header-strip">
          <ul className="tiny-menu">
            {tinyMenuItems.map((item) => (
              <li key={item.slug}>
                <a href={`#/${item.slug}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="main-nav">
          <a href="#" className="brand-block" aria-label="Puffcu Dayı">
            <span className="brand-block__mark">PUFFCUDAYI.COM.TR</span>
            <small>premium vape store</small>
          </a>

          <nav className="nav-menu" aria-label="Ana menü">
            {navItems.map((item) => (
              <a key={item.slug} href={`#/${item.slug}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-content">
        {brand ? renderBrandPage() : renderHomePage()}
      </main>

      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden mesaj gönder"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3a12.7 12.7 0 0 0-10.9 19.2L3.5 29l7-1.8A12.8 12.8 0 1 0 16 3Zm0 23.2c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4A10.1 10.1 0 1 1 16 26.2Zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z" />
        </svg>
      </a>
    </div>
  )
}

export default App
