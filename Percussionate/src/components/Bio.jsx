import Reveal from './Reveal'
import { bio } from '../data/content'

export default function Bio() {
  return (
    <section className="bio" id="about">
      <div className="wrap bio-grid">
        <Reveal
          className="bio-portrait"
          style={
            bio.portrait
              ? { backgroundImage: `url(${bio.portrait})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : undefined
          }
        >
          {!bio.portrait && <span className="tag">REPLACE — portrait photo</span>}
        </Reveal>

        <Reveal className="bio-text">
          <span className="eyebrow">The Story</span>
          <h2>{bio.heading}</h2>
          <p className="bio-summary">{bio.summary}</p>
          <p className="bio-detail">{bio.detail}</p>
          <p className="pull-quote">&ldquo;{bio.quote}&rdquo;</p>
        </Reveal>
      </div>

      <div className="wrap milestones">
        {bio.milestones.map((m) => (
          <div className="milestone" key={m.year}>
            <div className="yr">{m.year}</div>
            <div className="desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
