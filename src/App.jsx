
import './App.css'

const fixedResults = [
  { method: 'Fixed', criterion: '8 × 8', patches: '16', psnr: '13.09', ssim: '0.309' },
  { method: 'Fixed', criterion: '4 × 4', patches: '64', psnr: '15.59', ssim: '0.613' },
  { method: 'Fixed', criterion: '2 × 2', patches: '256', psnr: '20.40', ssim: '0.872' },
  { method: 'Adaptive', criterion: 'Variance', patches: '93.52', psnr: '18.361', ssim: '0.761' },
  { method: 'Adaptive', criterion: 'Gradient', patches: '90.40', psnr: '18.380', ssim: '0.765' },
  { method: 'Adaptive', criterion: 'Entropy', patches: '93.58', psnr: '18.357', ssim: '0.766' },
]

const resourceResults = [
  { method: 'Conventional FRQI', elements: '256', qubits: '9', gates: '72,712', depth: '50,435', ssim: '1.000' },
  { method: 'Fixed 8 × 8', elements: '4', qubits: '3', gates: '26', depth: '18', ssim: '0.0408' },
  { method: 'Fixed 4 × 4', elements: '16', qubits: '5', gates: '1,092', depth: '705', ssim: '0.4191' },
  { method: 'Fixed 2 × 2', elements: '64', qubits: '7', gates: '8,582', depth: '4,875', ssim: '0.7694' },
]

const adaptiveResults = [
  { method: 'Error-based Adaptive', values: '38.32', qubits: '6.83', gates: '5,015.23', depth: '2,845.72', mse: '785.183', psnr: '19.181', ssim: '0.8293' },
  { method: 'Two Adaptive', values: '38.32', qubits: '7.83', gates: '15,366.23', depth: '12,387.46', mse: '741.616', psnr: '19.635', ssim: '0.8560' },
  { method: 'Multi Adaptive', values: '152.89', qubits: '8.83', gates: '42,142.43', depth: '29,688.00', mse: '11.700', psnr: '41.488', ssim: '0.9962' },
]

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{number} / {label}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  )
}

function ImageFigure({ src, alt, caption }) {
  return (
    <figure className="research-figure">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function DataTable({ headers, rows, highlightLast = false }) {
  return (
    <div className="table-wrap">
      <table className="result-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={highlightLast && index === rows.length - 1 ? 'highlight-row' : ''}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function App() {
  return (
    <div className="website">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">QIR<span>.</span> Research</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#why">Why</a>
          <a href="#approach">Approach</a>
          <a href="#experiments">Experiments</a>
          <a href="#findings">Findings</a>
          <a href="#future">What's Next</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">QUANTUM IMAGE PROCESSING · RESEARCH</p>

          <h1>
            Can we represent images using
            <span> fewer quantum resources?</span>
          </h1>

          <p className="hero-description">
            Exploring fixed and adaptive patch-based representation
            to improve the balance between image reconstruction
            quality and quantum resource efficiency.
          </p>

          <a href="#why" className="primary-btn">
            Explore the Research <span>↓</span>
          </a>

          <div className="research-info">
            <span>Researcher: Poorani Ayswariya P S</span>
            <span>Amrita Vishwa Vidyapeetham, Coimbatore</span>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-visual">
            <div className="pixel-grid">
              {Array.from({ length: 64 }, (_, i) => (
                <span key={i} className={`pixel pixel-${i % 8}`} />
              ))}
            </div>
            <div className="visual-label">IMAGE → PATCHES → QUBITS</div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section" id="why">
        <SectionHeading
          number="01"
          label="THE MOTIVATION"
          title="Why does image representation matter?"
          description="Encoding an entire image into quantum states can require considerable quantum resources. But does every region of an image really need the same level of representation?"
        />

        <div className="info-grid">
          <article className="info-card">
            <span className="card-number">THE CHALLENGE</span>
            <h3>Not every region is equally complex.</h3>
            <p>
              Detailed regions contain more visual information,
              while simpler regions may not need the same
              representation complexity.
            </p>
          </article>

          <article className="info-card">
            <span className="card-number">THE RESEARCH QUESTION</span>
            <h3>Can we encode images more efficiently?</h3>
            <p>
              Can intelligent image partitioning reduce encoding
              requirements while preserving important
              visual information?
            </p>
          </article>
        </div>

        <div className="idea-strip">
          <span>OUR CENTRAL IDEA</span>
          <p>
            Allocate representation according to image complexity,
            rather than treating every region identically.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section alternate" id="approach">
        <SectionHeading
          number="02"
          label="THE APPROACH"
          title="Two ways to divide an image"
          description="We investigate fixed and adaptive patching strategies as preprocessing techniques for Quantum Image Representation."
        />

        <div className="approach-grid">
          <article className="approach-card">
            <div className="approach-top">
              <span className="card-number">01 / FIXED</span>
              <span className="approach-symbol">▦</span>
            </div>
            <h3>Fixed-size patching</h3>
            <p>One patch size is applied throughout the image.</p>
            <div className="patch-sizes">
              <span>2 × 2</span>
              <span>4 × 4</span>
              <span>8 × 8</span>
            </div>
            <p className="small-note">
              Simple and predictable, but does not adapt to
              local image complexity.
            </p>
          </article>

          <article className="approach-card featured-card">
            <div className="approach-top">
              <span className="card-number">02 / ADAPTIVE</span>
              <span className="approach-symbol">◈</span>
            </div>
            <h3>Adaptive patching</h3>
            <p>Patch sizes change according to local image content.</p>
            <div className="patch-sizes">
              <span>Variance</span>
              <span>Gradient</span>
              <span>Entropy</span>
            </div>
            <p className="small-note">
              Larger patches for simpler regions and smaller
              patches for detailed regions.
            </p>
          </article>
        </div>

        <div className="research-question">
          <p>THE CENTRAL IDEA</p>
          <h3>
            Smaller patches for detailed regions.
            Larger patches for simpler regions.
          </h3>
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section className="section" id="experiments">
        <SectionHeading
          number="03"
          label="THE EXPERIMENTAL JOURNEY"
          title="How did we investigate it?"
          description="The research follows three experimental stages using MNIST images and the FRQI framework."
        />

        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-number">01</span>
            <div>
              <h3>Classical image preprocessing</h3>
              <p>
                MNIST handwritten digit images are resized and
                evaluated using fixed and adaptive patching.
              </p>
              <span className="timeline-detail">
                Dataset: MNIST · First 100 test images
              </span>
            </div>
          </article>

          <article className="timeline-item">
            <span className="timeline-number">02</span>
            <div>
              <h3>FRQI-based quantum representation</h3>
              <p>
                Conventional FRQI and fixed-patch FRQI are
                compared to understand how reducing encoded
                elements affects quantum resources.
              </p>
              <span className="timeline-detail">
                Encoding: FRQI · Qiskit statevector simulation
              </span>
            </div>
          </article>

          <article className="timeline-item">
            <span className="timeline-number">03</span>
            <div>
              <h3>Adaptive quantum representation</h3>
              <p>
                Error-based, two-value and multi-value
                representations are evaluated to investigate
                the reconstruction-quality and resource trade-off.
              </p>
              <span className="timeline-detail">
                Evaluation: MSE · PSNR · SSIM · Gates · Depth
              </span>
            </div>
          </article>
        </div>

        <div className="visualization-section">
          <div className="visualization-heading">
            <span className="card-number">EXPERIMENTAL VISUALIZATION</span>
            <h3>From an original image to adaptive reconstruction</h3>
            <p>
              The example below illustrates the original MNIST
              image, adaptive partitioning and the reconstructed image.
            </p>
          </div>

          <ImageFigure
            src="/images/adaptive-patching.png"
            alt="Original MNIST digit, adaptive patch partitioning and reconstructed image"
            caption="Figure 1. Adaptive patch-based image representation using 8×8, 4×4 and 2×2 patches."
          />
        </div>
      </section>

      {/* FINDINGS */}
      <section className="section alternate" id="findings">
        <SectionHeading
          number="04"
          label="EXPERIMENTAL FINDINGS"
          title="What did the experiments reveal?"
          description="Three experimental stages explore how patch selection and intensity retention influence image reconstruction and quantum resource requirements."
        />

        {/* STAGE 1 */}
        <article className="result-block">
          <div className="result-heading">
            <span className="result-tag">STAGE 01</span>
            <span className="result-subtitle">CLASSICAL PATCHING</span>
          </div>

          <h3>Fixed vs adaptive patching</h3>
          <p className="result-description">
            Adaptive patching offers a balance between patch count
            and reconstruction quality. Fixed 2×2 patching gives
            the best fixed-patching reconstruction quality,
            but requires many more patches.
          </p>

          <DataTable
            headers={['Method', 'Patch size / Criterion', 'Patches', 'PSNR (dB)', 'SSIM']}
            rows={fixedResults.map(item => [
              item.method, item.criterion, item.patches, item.psnr, item.ssim
            ])}
          />

          <div className="result-insight">
            <strong>What did we observe?</strong>
            <p>
              Gradient-based adaptive patching achieves the highest
              adaptive PSNR (18.380 dB), while entropy-based
              patching achieves the highest adaptive SSIM (0.766).
              Adaptive methods use approximately 90–94 patches,
              compared with 256 for fixed 2×2 patching.
            </p>
          </div>
        </article>

        {/* STAGE 2 */}
        <article className="result-block">
          <div className="result-heading">
            <span className="result-tag">STAGE 02</span>
            <span className="result-subtitle">QUANTUM RESOURCE COMPARISON</span>
          </div>

          <h3>How much quantum resource can patching save?</h3>
          <p className="result-description">
            Fixed-patch FRQI reduces encoded elements, qubit
            requirements, gate count and circuit depth compared
            with conventional FRQI.
          </p>

          <DataTable
            headers={['Representation', 'Elements', 'Qubits', 'Gates', 'Depth', 'SSIM']}
            rows={resourceResults.map(item => [
              item.method, item.elements, item.qubits,
              item.gates, item.depth, item.ssim
            ])}
          />

          <div className="result-insight">
            <strong>What did we observe?</strong>
            <p>
              Fixed 8×8 FRQI requires only 26 gates and 3 qubits,
              but its reconstruction SSIM is only 0.0408.
              Smaller patches preserve more image information
              at a higher resource cost.
            </p>
          </div>
        </article>

        {/* STAGE 3 */}
        <article className="result-block">
          <div className="result-heading">
            <span className="result-tag">STAGE 03</span>
            <span className="result-subtitle">ADAPTIVE FRQI</span>
          </div>

          <h3>How much intensity information should we retain?</h3>
          <p className="result-description">
            Three adaptive representations investigate how
            retaining additional intensity information affects
            reconstruction quality and quantum resources.
          </p>

          <DataTable
            headers={['Representation', 'Encoded Values', 'Qubits', 'Gates', 'Depth', 'MSE', 'PSNR', 'SSIM']}
            rows={adaptiveResults.map(item => [
              item.method, item.values, item.qubits,
              item.gates, item.depth, item.mse, item.psnr, item.ssim
            ])}
            highlightLast
          />

          <div className="quality-bars">
            <h4>Reconstruction quality – SSIM</h4>

            {adaptiveResults.map(item => (
              <div className="bar-item" key={item.method}>
                <div className="bar-label">
                  <span>{item.method}</span>
                  <strong>{item.ssim}</strong>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${Number(item.ssim) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <ImageFigure
            src="/images/quality-vs-qubits.png"
            alt="Reconstruction quality versus number of qubits for conventional and adaptive FRQI"
            caption="Figure 3. Reconstruction quality compared with qubit requirements."
          />

          <div className="result-insight">
            <strong>What did we observe?</strong>
            <p>
              Multi-value adaptive FRQI achieves the highest
              reconstruction quality, with SSIM 0.9962 and
              PSNR 41.488 dB. However, it requires more
              encoded values and quantum resources. The
              two-value representation offers a more balanced
              quality-resource trade-off.
            </p>
          </div>
        </article>

        {/* OVERALL TRADE-OFF */}
        <article className="tradeoff-block">
          <span className="result-tag">OVERALL RESEARCH INSIGHT</span>
          <h3>There is no single method that maximizes everything.</h3>
          <p>
            Increasing retained image information generally
            improves reconstruction quality, but also increases
            quantum circuit complexity.
          </p>

          <ImageFigure
            src="/images/quality-resource-tradeoff.png"
            alt="Quality versus quantum gate count trade-off across QIR representations"
            caption="Figure 4. Quality-resource trade-off across conventional, fixed-patch and adaptive FRQI representations."
          />

          <div className="reduction-grid">
            <div>
              <strong>93.1%</strong>
              <span>Gate count reduction</span>
              <small>Error-based adaptive vs conventional FRQI</small>
            </div>
            <div>
              <strong>94.4%</strong>
              <span>Circuit depth reduction</span>
              <small>Error-based adaptive vs conventional FRQI</small>
            </div>
          </div>

          <p className="method-note">
            Reduction percentages are calculated from the reported
            average gate counts and circuit depths. The experiments
            use ideal statevector simulation and do not represent
            measured quantum hardware speedups.
          </p>
        </article>
      </section>

      {/* FUTURE WORK */}
      <section className="section" id="future">
        <SectionHeading
          number="05"
          label="BEYOND THE CURRENT STUDY"
          title="What's next?"
          description="The current investigation opens up several directions for further exploration."
        />

        <div className="future-grid">
          <article className="future-card">
            <span>01</span>
            <h3>Larger images</h3>
            <p>Evaluate the approach on more complex and high-resolution images.</p>
          </article>

          <article className="future-card">
            <span>02</span>
            <h3>Medical imaging</h3>
            <p>Explore applications involving medical image representation.</p>
          </article>

          <article className="future-card">
            <span>03</span>
            <h3>NEQR integration</h3>
            <p>Investigate adaptive patching with alternative quantum image representation models.</p>
          </article>

          <article className="future-card">
            <span>04</span>
            <h3>Quantum hardware</h3>
            <p>Evaluate representation performance under finite-shot and real hardware constraints.</p>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">QIR<span>.</span> Research</a>
        <p>Exploring efficient quantum image representation.</p>
        <p>Academic Research Portal · Amrita Vishwa Vidyapeetham</p>
      </footer>

    </div>
  )
}

export default App
