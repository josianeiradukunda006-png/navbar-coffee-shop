import PageHeading from "../components/PageHeading";

function Roastery() {
  return (
    <section className="section page-section">
      <PageHeading eyebrow="FROM BEAN TO CUP" title="Roastery & Beans" description="Great coffee starts with thoughtful sourcing, careful roasting, and fresh preparation." />
      <div className="split-layout">
        <div className="roast-illustration"><span>Roasted with care</span></div>
        <div>
          <h2>Our coffee approach</h2>
          <p>We celebrate coffee and the people who grow it. This sample page introduces customers to different beans and the roasting process.</p>
          <div className="detail-row"><span>01</span><div><h3>Source</h3><p>Choose quality beans from trusted coffee growers.</p></div></div>
          <div className="detail-row"><span>02</span><div><h3>Roast</h3><p>Roast carefully to bring out aroma and flavour.</p></div></div>
          <div className="detail-row"><span>03</span><div><h3>Brew</h3><p>Prepare each cup to suit the coffee and customer.</p></div></div>
        </div>
      </div>
      <div className="feature-grid three">
        <article className="feature-card"><h3>Light Roast</h3><p>Bright flavours and a lighter body.</p></article>
        <article className="feature-card"><h3>Medium Roast</h3><p>Balanced aroma, sweetness, and body.</p></article>
        <article className="feature-card"><h3>Dark Roast</h3><p>Deeper, bold and toasted flavours.</p></article>
      </div>
    </section>
  );
}

export default Roastery;
