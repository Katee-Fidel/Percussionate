import Reveal from './Reveal'
import SocialIcon from './Sociallcon'

import { contact, socials } from '../data/content'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <Reveal as="span" className="eyebrow">
          Get In Touch
        </Reveal>
        <Reveal as="h2">{contact.heading}</Reveal>
        <Reveal as="p" className="lead">
          {contact.lead}
        </Reveal>
        <Reveal as="a" href={`mailto:${contact.email}`} className="contact-email">
          {contact.email}
        </Reveal>

        <Reveal className="socials">
          {socials.map((s) => (
            <a className="social-icon" href={s.href} aria-label={s.label} key={s.label}>
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </Reveal>

        <p className="foot-line">© {new Date().getFullYear()} {`Dogoo`}. All rights reserved.</p>
      </div>
    </section>
  )
}
