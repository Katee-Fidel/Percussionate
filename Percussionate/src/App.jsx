import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Shows from './components/Shows'
import Contact from './components/Contact'
import RhythmBar from './components/RhythBar'



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RhythmBar />
      <Bio />
      <RhythmBar />
      <Shows />
      <RhythmBar />
      <Contact />
    </>
  )
}
