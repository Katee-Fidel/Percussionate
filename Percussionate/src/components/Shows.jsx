import Reveal from './Reveal'
import { pastShows } from '../data/content'

export default function Shows() {
  return (
    <section className="shows" id="shows">
      <div className="wrap">
        <Reveal className="shows-head">
          <span className="eyebrow">The Journey So Far</span>
          <h2>Shows Performed</h2>
        </Reveal>
      </div>

      <Reveal className="past-scroll">
        {pastShows.map((show) => (
          <article className="show-card" key={`${show.title}-${show.year}`}>
            <div className="thumb">
              {show.photo && <img src={show.photo} alt={show.title} />}
              {!show.photo && <span className="tag">photo/video</span>}
            </div>
            <div className="info">
              <span className="yr">{show.year}</span>
              <h3>{show.title}</h3>
              <p className="loc">{show.location}</p>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  )
}
