import { artist } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-content-col">
          <span className="eyebrow">{artist.eyebrow}</span>
          <h1>
            {artist.name.split(' ')[0]}
            <br />
            {artist.name.split(' ').slice(1).join(' ')}
          </h1>
          <p>{artist.heroHook}</p>
          <div className="hero-ctas">
            <a href="#shows" className="btn-primary">
              Watch Performance
            </a>
          </div>
        </div>

        <div className="hero-photo-placeholder">
          {artist.heroPhoto && <img src={artist.heroPhoto} alt={`${artist.name} performing`} />}
        </div>
      </div>
      
    </section>
  )
}
