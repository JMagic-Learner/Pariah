export const KeywordDialog = ({ kw, onClose }) => {
  if (!kw) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3000,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{ background: "white", maxWidth: "28rem", width: "90vw", borderRadius: "4px" }}
        className="pa4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="fw7 f5 dark-green ma0 mb2">{kw.name}</p>
        <p className="f6 lh-copy ma0 mb3">{kw.desc}</p>
        <button
          className="f7 ph3 pv2 bg-dark-green white bn br1 pointer dim"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
