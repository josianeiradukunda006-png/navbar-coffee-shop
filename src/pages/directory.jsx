import PageHeading from "../components/PageHeading";

function directory() {
  return (
    <section className="section page-section legal-page">
      <PageHeading eyebrow="USEFUL INFORMATION" title="Directory & Legal" description="A simple directory, privacy summary, and terms outline." />
      <div className="legal-card"><h2>Website directory</h2><ul><li>Home — introduction and featured sections.</li><li>Menu — searchable drinks and food.</li><li>Roastery — coffee beans and roasting.</li><li>Events — workshops and tastings.</li><li>Rewards — sample loyalty dashboard.</li><li>Reservations — table request form.</li><li>Contact — contact details and feedback.</li></ul></div>
      <div className="legal-card"><h2>Privacy policy summary</h2><p>This student demo does not send or store form data on a server. Avoid entering real personal or confidential information. A production website should explain what data it collects, why it collects it, and how customers can request its removal.</p></div>
      <div className="legal-card"><h2>Terms of service outline</h2><p>Menu prices, opening hours, event dates, and contact details on this demo are examples. A real café should publish accurate information and clear booking, cancellation, and customer-service policies.</p></div>
    </section>
  );
}

export default directory;
