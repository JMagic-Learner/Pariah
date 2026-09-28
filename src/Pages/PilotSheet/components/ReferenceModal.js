import { Z_MODAL } from "../../../utils/zIndex";

export const ReferenceModal = ({ title, onClose, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: Z_MODAL,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "white",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-dark-green white pa2 flex-shrink-0">
          <span className="fw7 f6 ttu tracked">{title}</span>
          <button
            onClick={onClose}
            className="bn bg-transparent white fw7 f4 pointer dim lh-solid"
          >
            ✕
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }} className="pa2">
          {children}
        </div>
      </div>
    </div>
  );
};
