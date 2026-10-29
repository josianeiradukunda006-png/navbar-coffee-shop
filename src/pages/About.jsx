import PageHeading from "../components/PageHeading";

function About() {
  return (
    <section className="section page-section">
      <PageHeading eyebrow="OUR STORY" title="About Aroma & Bean" description="A friendly café concept built around good coffee, community, and comfortable moments." />
      <div className="about-panel">
        <div className="about-mark">A<span>&</span>B</div>
        <div><h2>A little place to feel welcome</h2><p>Our idea is simple: serve enjoyable drinks and fresh treats in a calm, welcoming environment. Whether you are meeting friends, studying, or taking a break, there is a place for you here.</p><p>This page can later include the real café history, team members, and photos.</p></div>
      </div>
      <div className="feature-grid three">
        <article className="feature-card"><span></span><h3>Hospitality</h3><p>We aim to treat every guest with kindness.</p></article>
        <article className="feature-card"><span></span><h3>Quality</h3><p>We care about the ingredients and preparation.</p></article>
        <article className="feature-card"><span></span><h3>Community</h3><p>We want our café to bring people together.</p></article>
      </div>
    </section>
  );
}

export default About;
