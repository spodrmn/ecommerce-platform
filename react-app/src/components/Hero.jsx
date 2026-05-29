import { Link } from 'react-router-dom'

const slides = [
  {
    id: 1,
    image: 'https://placehold.co/1600x500/198754/white?text=Slide+1',
    title: 'Slide 1',
    subtitle: 'Description 1.',
  },
  {
    id: 2,
    image: 'https://placehold.co/1600x500/0d6efd/white?text=Slide+2',
    title: 'Slide 2',
    subtitle: 'Description 2.',
  },
  {
    id: 3,
    image: 'https://placehold.co/1600x500/dc3545/white?text=Slide+3',
    title: 'Slide 3',
    subtitle: 'Description 3.',
  },
]

function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>

            {/* Background image */}
            <img
              src={slide.image}
              className="d-block w-100"
              alt={slide.title}
              style={{ height: 450, objectFit: 'cover' }}
            />

            {/* White card overlay */}
            <div className="carousel-caption d-flex align-items-end text-start pb-5"
              style={{ left: '8%', right: 'auto', bottom: 0, top: 0 }}>
              <div className="bg-white text-dark p-4 rounded-3 shadow" style={{ maxWidth: 380 }}>
                <h2 className="fw-black mb-2">{slide.title}</h2>
                <p className="text-muted mb-3">{slide.subtitle}</p>
                <Link to="/products" className="btn btn-success w-100 fw-semibold">
                  Order Now
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Prev / Next controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  )
}

export default Hero