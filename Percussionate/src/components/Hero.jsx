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

        <div
          className="hero-photo-placeholder"
          style={
            artist.heroPhoto
              ? {
                  backgroundImage: `url(${artist.heroPhoto})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : undefined
          }
        >
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="dash" />
      </div>
    </section>
  )
}
