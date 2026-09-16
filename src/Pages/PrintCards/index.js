import { ACTIONS } from "../../Data/ActionsArray";
import { STATES } from "../../Data/StatesArray";

const Card = ({ item }) => (
  <div className="pcard ba b--black-30 br3 bg-white flex flex-column">
    <div className="pcard-header flex items-start justify-between">
      <span className="pcard-name">{item.name}</span>
      <span className="pcard-section flex-shrink-0">§{item.section}</span>
    </div>
    <div className="pcard-tags flex flex-wrap">
      {item.tags.map((t) => (
        <span key={t} className="pcard-tag">
          {t}
        </span>
      ))}
    </div>
    <p className="pcard-effect">{item.effect}</p>
  </div>
);

const CardSection = ({ title, items }) => (
  <div className="mb4">
    <h2 className="f4 fw7 ttu tracked bb b--black-20 pb2 mb3">{title}</h2>
    <div className="pcard-grid">
      {items.map((item) => (
        <Card key={item.name} item={item} />
      ))}
    </div>
  </div>
);

export const PrintCards = () => (
  <div className="pa4 center mw9">
    <style>{`
      .pcard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 2.5in);
        gap: 0.25in;
        justify-content: center;
      }
      .pcard {
        width: 2.5in;
        height: 3.5in;
        box-sizing: border-box;
        padding: 0.14in;
        overflow: hidden;
      }
      .pcard-header {
        margin-bottom: 0.03in;
      }
      .pcard-name {
        font-size: 10pt;
        font-weight: 700;
        line-height: 1.15;
        color: #c0392b;
      }
      .pcard-section {
        font-size: 6.5pt;
        color: #888;
        margin-left: 0.05in;
        white-space: nowrap;
      }
      .pcard-tags {
        gap: 0.05in;
        margin-bottom: 0.07in;
      }
      .pcard-tag {
        font-size: 5.5pt;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        background: #eee;
        color: #555;
        padding: 0.01in 0.05in;
        border-radius: 2px;
        white-space: nowrap;
      }
      .pcard-effect {
        font-size: 6.5pt;
        line-height: 1.28;
        color: #333;
        margin: 0;
        overflow: hidden;
      }
      @media print {
        @page { size: letter; margin: 0.4in; }
        body { background: white !important; }
        .print-hide { display: none !important; }
        .pcard-grid {
          justify-content: start;
          gap: 0.2in;
        }
        .pcard {
          border: 1.25pt solid #000 !important;
          page-break-inside: avoid;
          break-inside: avoid;
        }
      }
    `}</style>

    <div className="flex items-center justify-between flex-wrap mb2 print-hide">
      <h1 className="f2 fw7 red bb pb2 mb0">Action &amp; State Cards</h1>
      <button
        className="f6 fw6 ph3 pv2 bg-red white bn br2 dim pointer"
        onClick={() => window.print()}
      >
        Print ↗
      </button>
    </div>
    <p className="lh-copy mb4 f6 dark-gray print-hide">
      Printable quick-reference cards for every Action, Reaction, Maneuver,
      and State in Chapter 3, standardized to Magic: The Gathering card size
      (2.5" × 3.5") so they fit standard card sleeves. Print and cut along
      the card borders for a physical reference deck at the table.
    </p>

    <CardSection title="Actions &amp; Reactions" items={ACTIONS} />
    <CardSection title="States" items={STATES} />
  </div>
);
