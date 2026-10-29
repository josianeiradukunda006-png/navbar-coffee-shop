import { useState } from "react";
import PageHeading from "../components/PageHeading";

function Rewards() {
  const [points, setPoints] = useState(120);
  const [message, setMessage] = useState("");

  function addDemoPurchase() {
    setPoints((current) => current + 10);
    setMessage("Demo purchase added: 10 points earned!");
  }

  const nextReward = 200;
  const progress = Math.min((points / nextReward) * 100, 100);

  return (
    <section className="section page-section">
      <PageHeading eyebrow="A THANK YOU" title="Loyalty & Rewards" description="Collect points in this demo and see how a customer rewards dashboard could work." />
      <div className="rewards-panel">
        <div><p className="eyebrow">YOUR DEMO BALANCE</p><div className="points-number">{points}<span> pts</span></div><p>You need {Math.max(nextReward - points, 0)} more points for the next sample reward.</p></div>
        <div className="progress-area"><div className="progress-label"><span>Progress to reward</span><strong>{Math.round(progress)}%</strong></div><div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div><p>200 points = a sample free drink reward.</p><button onClick={addDemoPurchase}>Simulate purchase (+10 points)</button>{message && <p className="success-message" role="status">{message}</p>}</div>
      </div>
      <div className="feature-grid three">
        <article className="feature-card"><span></span><h3>Coffee Lover</h3><p>Starter level for new members.</p></article>
        <article className="feature-card"><span></span><h3>Regular</h3><p>Earn points with repeat visits.</p></article>
        <article className="feature-card"><span></span><h3>Master Roaster</h3><p>Unlock special sample offers.</p></article>
      </div>
      <p className="demo-note">Points are held in page state only. Refreshing the page resets the demo balance; a real system needs a database and customer accounts.</p>
    </section>
  );
}

export default Rewards;
