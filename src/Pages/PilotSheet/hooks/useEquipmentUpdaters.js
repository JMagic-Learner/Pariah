// Small immutable-update helpers for the Base/Additional equipment row arrays.
export const useEquipmentUpdaters = ({ setBaseEquip, setAddlEquip }) => {
  const updateBaseEquip = (i, field, v) =>
    setBaseEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, [field]: v } : e)),
    );

  const applyBaseEquip = (i, fields) =>
    setBaseEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, ...fields } : e)),
    );

  const updateAddlEquip = (i, field, v) =>
    setAddlEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, [field]: v } : e)),
    );

  const applyAddlEquip = (i, fields) =>
    setAddlEquip((prev) =>
      prev.map((e, idx) => (idx === i ? { ...e, ...fields } : e)),
    );

  return { updateBaseEquip, applyBaseEquip, updateAddlEquip, applyAddlEquip };
};
