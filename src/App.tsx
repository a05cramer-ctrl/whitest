import { useEffect, useState } from 'react'
import './App.css'
import heroVideo from './43f4e788-3ea3-4bb8-ab5c-d0d396aa0694.mp4'
import heroImage from './13a69461f00ffed769b95042d77d023e.jpg'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [copied, setCopied] = useState(false)
  const contractAddress = '2gHveFpCcGgafjhjBcE92RgKu9s8vcTYcQNNuefqpump'

  useEffect(() => {
    setLoaded(true)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="film-grain"></div>
      
      <div className="video-background">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="glow-effect"></div>
        <div className="ground-glow"></div>
      </div>
      
      <main className="hero-section">
        <h1 className="title">WHITEST</h1>
        
        <p className="tagline">There is only one memecoin That can be the Whitest</p>
        
        <div className="actions">
          <button className="action-btn">Buy</button>
          <button className="action-btn">Chart</button>
          <a 
            href="https://x.com/Whitest_dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-btn"
          >
            X
          </a>
        </div>
        
        <div className="contract-address">
          <span className="ca-label">CA:</span>
          <code className="ca-code" onClick={copyToClipboard}>
            {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
          </code>
          {copied && <span className="ca-copied">Copied!</span>}
        </div>
      </main>
      
      <section className="info-section">
        <div className="info-content">
          <div className="info-text">
            <h2 className="info-title">About</h2>
            <p className="info-paragraph">
              WHITEST is not just another memecoin.
            </p>
            <p className="info-paragraph">
              It is the limit.
            </p>
            <p className="info-paragraph">
              The brightest point in a market built.
            </p>
            <p className="info-paragraph info-paragraph-final">
              In a space full of colors, distractions, and copies, only one coin can be truly white.
            </p>
          </div>
          <div className="info-image-wrapper">
            <img 
              src={heroImage} 
              alt="WHITEST" 
              className="info-image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
