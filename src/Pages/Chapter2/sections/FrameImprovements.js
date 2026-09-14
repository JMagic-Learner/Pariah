import { SupportEquipmentTable } from "../../../Components/Table/SupportEquipmentTable";
import { FRAME_IMPROVEMENTS } from "../../../Data/FrameImprovements";

export const FrameImprovements = () => {
  return (
    <div>
      <h2 className="f2 fw7 red bb pb2 mb3">2.9 — Frame Improvements</h2>
      <p className="lh-copy tj">
        Frame Improvements are structural and armor modifications installed
        directly on the MSU's frame, covering a specific hit location. Each
        item lists its install location, tonnage cost, passive FRO drain,
        maximum quantity, MCU cost, and effect.
      </p>
      <SupportEquipmentTable
        items={FRAME_IMPROVEMENTS}
        mobileTitle="Frame Improvements"
      />
    </div>
  );
};
