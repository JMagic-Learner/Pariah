import { useState } from "react";
import { usePilotSheet, usePilotSlot } from "../../context/PilotSheetContext";
import { useMediaQuery } from "@custom-react-hooks/all";
import classNames from "classnames";
import { TRAITS } from "../../Data/PilotTraitArray";
import { TEAMS } from "../../Data/TeamArray";
import {
  RangedWeaponTable,
  MeleeWeaponTable,
} from "../../Components/Table/WeaponTable";
import { SupportEquipmentTable } from "../../Components/Table/SupportEquipmentTable";
import { blankEquip } from "../../Data/PresetsArray";
import { SUPPORT } from "../../Data/SupportEquipmentArray";
import { KEYWORDS } from "../../Data/KeywordArray";
import { NEWTYPE_UPGRADES, BITS } from "../../Data/NewtypeUpgrades";
import { renderKeywords } from "../../utils/renderKeywords";
import { KeywordDialog } from "../../Components/KeywordDialog";
import { SheetHeader } from "../../Components/SheetHeader";
import { TextInput } from "../../Components/TextInput";
import { NumInput } from "../../Components/NumImput";
import { LocationCard } from "../../Components/LocationCard";
import {
  EF_PRESETS,
  ZEON_PRESETS,
  CROSSBONE_PRESETS,
  MAFTY_PRESETS,
  REZEON_PRESETS,
} from "../../Data/PresetsArray";

import { TH, TD } from "./components/TableCells";
import { MsuColgroup } from "./components/MsuColgroup";
import { TraitRow } from "./components/TraitRow";
import { EquipmentRow } from "./components/EquipmentRow";
import { MobileEquipRow } from "./components/MobileEquipRow";
import { RefToggle } from "./components/RefToggle";
import { PanelToggle } from "./components/PanelToggle";
import { EquipmentPickerModal } from "./components/EquipmentPickerModal";

import { usePilotDerivedStats } from "./hooks/usePilotDerivedStats";
import { useSupportLocations } from "./hooks/useSupportLocations";
import { useEquipmentUpdaters } from "./hooks/useEquipmentUpdaters";
import { usePilotSlotActions } from "./hooks/usePilotSlotActions";

// ─── Single sheet panel ───────────────────────────────────────────────────────

const PilotSheetPanel = ({ slotIndex }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const pilotSlot = usePilotSlot(slotIndex);
  const {
    msuName,
    pilotName,
    setPilotName,
    gunnery,
    setGunnery,
    brawl,
    setBrawl,
    piloting,
    setPiloting,
    traits,
    setTraits,
    mobileSuit,
    setMobileSuit,
    mcu,
    setMcu,
    fro,
    setFro,
    tonnageLimit,
    setTonnageLimit,
    movement,
    setMovement,
    armorValue,
    setArmorValue,
    baseEquip,
    setBaseEquip,
    addlEquip,
    setAddlEquip,
    soldBase,
    setSoldBase,
    usedBase,
    setUsedBase,
    usedAddl,
    setUsedAddl,
    purgeArmor,
    setPurgeArmor,
    mechanicChoice,
    setMechanicChoice,
    scavengerChoice,
    setScavengerChoice,
    newtypeChoice1,
    setNewtypeChoice1,
    newtypeChoice2,
    setNewtypeChoice2,
    cyberNewtypeChoice,
    setCyberNewtypeChoice,
    ramboChoice,
    setRamboChoice,
    grypsVetChoice,
    setGrypsVetChoice,
    locations,
    setLocations,
    showTraits,
    setShowTraits,
    showWeapons,
    setShowWeapons,
    showMelee,
    setShowMelee,
    showSupport,
    setShowSupport,
    showKeywords,
    setShowKeywords,
    showNewtype,
    setShowNewtype,
    showPilotPanel,
    setShowPilotPanel,
    showBaseEquip,
    setShowBaseEquip,
    showAddlEquip,
    setShowAddlEquip,
    customPreset,
  } = pilotSlot;

  const {
    hasMechanic,
    hasNewtype,
    hasCyberNewtype,
    hasRambo,
    hasRookie,
    hasScavenger,
    hasPurgableArmor,
    hasGrypsVet,
    hasHonorable,
    gunneryTraitCount,
    brawlerTraitCount,
    pilotingTraitCount,
    gsBonus,
    bsBonus,
    psBonus,
    froBonus,
    effectiveTonnageLimit,
    mcuLimit,
    totalMCU,
    purgedArmorFor,
    totalTonnage,
  } = usePilotDerivedStats({
    traits,
    baseEquip,
    soldBase,
    addlEquip,
    scavengerChoice,
    mcu,
    tonnageLimit,
    locations,
    purgeArmor,
    mechanicChoice,
    newtypeChoice1,
    newtypeChoice2,
    cyberNewtypeChoice,
    ramboChoice,
    grypsVetChoice,
  });

  // Ephemeral UI-only state (dialogs/popups — not persisted)
  const [equipPopup, setEquipPopup] = useState(null);
  const [slotWarning, setSlotWarning] = useState(null);
  const [kwDialog, setKwDialog] = useState(null);
  const openEquipPopup = (onSelect) => setEquipPopup({ onSelect });
  const closeEquipPopup = () => setEquipPopup(null);

  const { removeSupportLoc, autoFillSupportLoc } = useSupportLocations({
    locations,
    setLocations,
    setSlotWarning,
  });

  const { updateBaseEquip, applyBaseEquip, updateAddlEquip, applyAddlEquip } =
    useEquipmentUpdaters({ setBaseEquip, setAddlEquip });

  const { handleMsuName, saveCustomPreset, loadCustomPreset, applyPreset } =
    usePilotSlotActions(slotIndex, pilotSlot);

  const updateTrait = (i, v) =>
    setTraits((prev) => prev.map((t, idx) => (idx === i ? v : t)));

  const updateLoc = (loc, field, v) =>
    setLocations((prev) => ({ ...prev, [loc]: { ...prev[loc], [field]: v } }));

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="pa3 pa4-ns mw9 center">
      {/* ── MSU Name ── */}
      <div className="ba b--black-20 mb3">
        <SheetHeader>MSU Name</SheetHeader>
        <div className="pa2">
          <TextInput
            value={msuName}
            onChange={handleMsuName}
            placeholder="Enter MSU name…"
            className="f3 fw7"
          />
        </div>
      </div>

      {/* ── Pilot ── */}
      <div className="ba b--black-20 mb3">
        <SheetHeader
          right={
            <PanelToggle
              open={showPilotPanel}
              onToggle={() => setShowPilotPanel((v) => !v)}
            />
          }
        >
          Pilot
        </SheetHeader>

        {showPilotPanel && (
          <>
            {/* Stats row */}
            <div className="overflow-auto">
              <table className="w-100 f7" cellSpacing="0">
                <thead>
                  <tr>
                    <TH className="w-30 tc">Pilot Name</TH>
                    <TH className="tc">Gunnery</TH>
                    <TH className="tc">+Mod</TH>
                    <TH className="tc">Brawl</TH>
                    <TH className="tc">+Mod</TH>
                    <TH className="tc">Piloting</TH>
                    <TH className="tc">+Mod</TH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TD>
                      <TextInput
                        value={pilotName}
                        onChange={setPilotName}
                        placeholder="Pilot name"
                        className="tc"
                      />
                    </TD>
                    <TD className="tc">
                      <NumInput value={gunnery} onChange={setGunnery} />
                      {hasRookie && (
                        <div className="f8 fw6 mt1 red">base: 0</div>
                      )}
                    </TD>
                    <TD className="tc">
                      <NumInput value={gsBonus} onChange={() => {}} />
                    </TD>
                    <TD className="tc">
                      <NumInput value={brawl} onChange={setBrawl} />
                      {hasRookie && (
                        <div className="f8 fw6 mt1 red">base: 0</div>
                      )}
                    </TD>
                    <TD className="tc">
                      <NumInput value={bsBonus} onChange={() => {}} />
                    </TD>
                    <TD className="tc">
                      <NumInput value={piloting} onChange={setPiloting} />
                      {hasRookie && (
                        <div className="f8 fw6 mt1 red">base: 0</div>
                      )}
                    </TD>
                    <TD className="tc">
                      <NumInput value={psBonus} onChange={() => {}} />
                    </TD>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pilot Traits */}
            <div className="bt b--black-10 overflow-auto">
              <table className="w-100 f7" cellSpacing="0">
                <thead>
                  <tr>
                    <TH className="w-30 tc">Pilot Trait</TH>
                    <TH className="tc w-10">Cost</TH>
                    <TH className="tc">Effect</TH>
                  </tr>
                </thead>
                <tbody>
                  {traits.map((t, i) => (
                    <TraitRow
                      key={i}
                      value={t}
                      onChange={(v) => updateTrait(i, v)}
                      onKeywordClick={setKwDialog}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Trait modifiers */}
            {(hasMechanic ||
              gunneryTraitCount > 0 ||
              brawlerTraitCount > 0 ||
              pilotingTraitCount > 0 ||
              hasNewtype ||
              hasCyberNewtype ||
              hasRambo ||
              hasRookie ||
              hasGrypsVet ||
              hasHonorable) &&
              (() => {
                const StatBtn = ({ label, active, onClick }) => (
                  <button
                    className={classNames(
                      "f8 ph2 pv1 mr1 bn br1 pointer lh-copy",
                      active
                        ? "bg-dark-green white fw7"
                        : "bg-near-white dark-gray",
                    )}
                    onClick={onClick}
                  >
                    {label}
                  </button>
                );
                return (
                  <div className="ph3 pv2 bt b--black-10 bg-washed-green">
                    <p className="f8 fw7 ttu tracked mb2 dark-green">
                      Active Trait Modifiers
                    </p>

                    {/* Stackable stat traits — auto-applied, no toggle needed */}
                    {(gunneryTraitCount > 0 ||
                      brawlerTraitCount > 0 ||
                      pilotingTraitCount > 0 ||
                      hasHonorable) && (
                      <div className="flex items-center mb2 flex-wrap">
                        {gunneryTraitCount > 0 && (
                          <span className="f8 mr3 dark-green fw6">
                            Gunnery ×{gunneryTraitCount} → +{gunneryTraitCount}{" "}
                            GS
                          </span>
                        )}
                        {brawlerTraitCount > 0 && (
                          <span className="f8 mr3 dark-green fw6">
                            Brawler ×{brawlerTraitCount} → +{brawlerTraitCount}{" "}
                            BR
                          </span>
                        )}
                        {pilotingTraitCount > 0 && (
                          <span className="f8 mr3 dark-green fw6">
                            Piloting ×{pilotingTraitCount} → +
                            {pilotingTraitCount} PS
                          </span>
                        )}
                        {hasHonorable && (
                          <span className="f8 dark-green fw6">
                            Honorable → +1 GS, +1 BR
                          </span>
                        )}
                      </div>
                    )}

                    {/* Newtype — choose 2 different stats */}
                    {hasNewtype && (
                      <div className="mb2">
                        <span className="f7 fw6 mr2">
                          Newtype (choose 2 stats):
                        </span>
                        <div className="flex items-center mt1 flex-wrap">
                          <span className="f8 mr2 gray">Choice 1:</span>
                          {["gs", "bs", "ps"].map((s) => (
                            <StatBtn
                              key={s}
                              label={`+1 ${s.toUpperCase()}`}
                              active={newtypeChoice1 === s}
                              onClick={() =>
                                setNewtypeChoice1((p) => (p === s ? "" : s))
                              }
                            />
                          ))}
                          <span className="f8 mh2 gray">Choice 2:</span>
                          {["gs", "bs", "ps"]
                            .filter((s) => s !== newtypeChoice1)
                            .map((s) => (
                              <StatBtn
                                key={s}
                                label={`+1 ${s.toUpperCase()}`}
                                active={newtypeChoice2 === s}
                                onClick={() =>
                                  setNewtypeChoice2((p) => (p === s ? "" : s))
                                }
                              />
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Cyber-Newtype — choose 1 stat */}
                    {hasCyberNewtype && (
                      <div className="flex items-center mb2 flex-wrap">
                        <span className="f7 fw6 mr2 nowrap">
                          Cyber-Newtype:
                        </span>
                        {["gs", "bs", "ps"].map((s) => (
                          <StatBtn
                            key={s}
                            label={`+1 ${s.toUpperCase()}`}
                            active={cyberNewtypeChoice === s}
                            onClick={() =>
                              setCyberNewtypeChoice((p) => (p === s ? "" : s))
                            }
                          />
                        ))}
                      </div>
                    )}

                    {/* Rambo — choose GS or BR */}
                    {hasRambo && (
                      <div className="flex items-center mb2">
                        <span className="f7 fw6 mr2 nowrap">Rambo:</span>
                        {["gs", "bs"].map((s) => (
                          <StatBtn
                            key={s}
                            label={`+1 ${s.toUpperCase()}`}
                            active={ramboChoice === s}
                            onClick={() =>
                              setRamboChoice((p) => (p === s ? "" : s))
                            }
                          />
                        ))}
                      </div>
                    )}

                    {/* Gryps War Veteran (REZEON) — choose 1 stat */}
                    {hasGrypsVet && (
                      <div className="flex items-center mb2 flex-wrap">
                        <span className="f7 fw6 mr2 nowrap">
                          Gryps War Veteran:
                        </span>
                        {["gs", "bs", "ps"].map((s) => (
                          <StatBtn
                            key={s}
                            label={`+1 ${s.toUpperCase()}`}
                            active={grypsVetChoice === s}
                            onClick={() =>
                              setGrypsVetChoice((p) => (p === s ? "" : s))
                            }
                          />
                        ))}
                      </div>
                    )}

                    {/* Rookie — reminder */}
                    {hasRookie && (
                      <div className="flex items-center mb2">
                        <span className="f7 fw6 red mr2 nowrap">Rookie:</span>
                        <span className="f8 red">
                          Base GS / BR / PS default to 0
                        </span>
                      </div>
                    )}

                    {/* Mechanic */}
                    {hasMechanic && (
                      <div className="flex items-center mb2">
                        <span className="f7 fw6 mr2 nowrap">Mechanic:</span>
                        {[
                          { label: "+6 Tonnage", value: "tonnage" },
                          { label: "+2 FRO", value: "fro" },
                        ].map(({ label, value }) => (
                          <StatBtn
                            key={value}
                            label={label}
                            active={mechanicChoice === value}
                            onClick={() =>
                              setMechanicChoice((p) =>
                                p === value ? "" : value,
                              )
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

            {/* Trait reference */}
            <div className="ph2 pb2 bt b--black-10">
              <RefToggle
                open={showTraits}
                onToggle={() => setShowTraits((v) => !v)}
                label="Trait Reference"
              />
            </div>
            {showTraits && (
              <div className="bt b--black-10 overflow-auto">
                <table className="w-100 f7" cellSpacing="0">
                  <thead>
                    <tr>
                      <TH className="w-25">Trait</TH>
                      <TH className="tc w-10">Cost</TH>
                      <TH>Effect</TH>
                    </tr>
                  </thead>
                  <tbody>
                    {TRAITS.map((t) => (
                      <tr key={t.name} className="stripe-light">
                        <TD className="fw6">{t.name}</TD>
                        <TD className="tc fw6 dark-green">{t.cost}</TD>
                        <TD className="lh-copy">{t.effect}</TD>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Mobile Suit + Equipment (single table so columns align) ── */}
      <div className="ba b--black-20 mb3">
        <div className="flex items-center justify-between flex-wrap bg-dark-green white fw7 f7 pa2 ttu tracked">
          <span>Mobile Suit Unit</span>
          <div
            className="flex items-center flex-wrap"
            style={{ gap: "0.5rem" }}
          >
            {[
              { label: "EF", presets: EF_PRESETS },
              { label: "ZEON", presets: ZEON_PRESETS },
              { label: "CBV", presets: CROSSBONE_PRESETS },
              { label: "MAFTY", presets: MAFTY_PRESETS },
              { label: "REZEON", presets: REZEON_PRESETS },
            ].map(({ label, presets }) => (
              <div key={label} className="flex items-center">
                <span className="f8 mr1 nowrap">{label}:</span>
                <select
                  className="f7 ba b--white pa1 bg-dark-green white pointer normal"
                  value=""
                  onChange={(e) => {
                    if (e.target.value) applyPreset(e.target.value);
                  }}
                >
                  <option value="">— Preset —</option>
                  {presets.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-center" style={{ gap: "0.25rem" }}>
              <button
                className="f8 ph2 pv1 bn br1 pointer bg-white dark-green fw7 dim"
                onClick={saveCustomPreset}
                title="Save current sheet as custom preset"
              >
                SAVE CUSTOM
              </button>
              {customPreset && (
                <button
                  className="f8 ph2 pv1 bn br1 pointer bg-yellow dark-green fw7 dim"
                  onClick={loadCustomPreset}
                  title="Load saved custom preset"
                >
                  LOAD CUSTOM
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          <table className="w-100 f7" cellSpacing="0">
            <MsuColgroup />
            <thead>
              <tr>
                <TH className="tc">Mobile Suit</TH>
                <TH className="tc">MCU Cost / 250</TH>
                <TH className="tc">FRO</TH>
                <TH className="tc">Tonnage</TH>
                <TH className="tc">Movement (Base)</TH>
                <TH className="tc">Armor Value</TH>
              </tr>
            </thead>
            <tbody>
              {/* Mobile Suit row */}
              <tr>
                <TD>
                  <TextInput
                    value={mobileSuit}
                    onChange={setMobileSuit}
                    placeholder="e.g. GM Sniper II"
                  />
                </TD>
                <TD className="tc">
                  <NumInput value={mcu} onChange={setMcu} width="4rem" />
                  <div
                    className={classNames("f8 fw6 mt1", {
                      red: totalMCU > mcuLimit,
                      "dark-green": totalMCU > 0 && totalMCU <= mcuLimit,
                      gray: totalMCU === 0,
                    })}
                  >
                    {totalMCU} / {mcuLimit}
                  </div>
                </TD>
                <TD className="tc">
                  <NumInput value={fro} onChange={setFro} />
                  {froBonus > 0 && (
                    <div className="f8 fw6 mt1 dark-green">
                      +{froBonus} bonus
                    </div>
                  )}
                </TD>
                <TD className="tc">
                  <NumInput value={tonnageLimit} onChange={setTonnageLimit} />
                  <div
                    className={classNames("f8 fw6 mt1", {
                      red: totalTonnage > effectiveTonnageLimit,
                      "dark-green":
                        totalTonnage > 0 &&
                        totalTonnage <= effectiveTonnageLimit,
                      gray: totalTonnage === 0,
                    })}
                  >
                    {totalTonnage} / {effectiveTonnageLimit || 0}
                  </div>
                </TD>
                <TD className="tc">
                  <TextInput
                    value={movement}
                    onChange={setMovement}
                    placeholder='e.g. 16"'
                    className="tc"
                  />
                </TD>
                <TD className="tc">
                  <NumInput
                    value={armorValue}
                    onChange={setArmorValue}
                    width="4rem"
                  />
                </TD>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Equipment (Base) section ── */}
        <div className="bg-dark-green white fw7 f7 pa2 ttu tracked flex items-center justify-between bt b--black-20">
          <span className="v-mid">Equipment (Base)</span>
          <PanelToggle
            open={showBaseEquip}
            onToggle={() => setShowBaseEquip((v) => !v)}
          />
        </div>
        {showBaseEquip &&
          (isMobile ? (
            <div>
              {baseEquip.map((row, i) => (
                <MobileEquipRow
                  key={i}
                  row={row}
                  detailsLabel="Notes"
                  onChange={(f, v) => updateBaseEquip(i, f, v)}
                  onNameClick={() =>
                    openEquipPopup((fields) => {
                      applyBaseEquip(i, fields);
                      autoFillSupportLoc(fields.name);
                    })
                  }
                  sold={soldBase[i]}
                  onSell={() =>
                    setSoldBase((prev) =>
                      prev.map((s, idx) => (idx === i ? !s : s)),
                    )
                  }
                  used={usedBase[i]}
                  onToggleUsed={() =>
                    setUsedBase((prev) =>
                      prev.map((u, idx) => (idx === i ? !u : u)),
                    )
                  }
                />
              ))}
            </div>
          ) : (
            <div className="overflow-auto">
              <table className="w-100 f7" cellSpacing="0">
                <MsuColgroup />
                <thead>
                  <tr>
                    <TH className="tc">Name</TH>
                    <TH className="tc">MCU Cost</TH>
                    <TH className="tc">Passive / Active FRO</TH>
                    <TH className="tc">Tonnage</TH>
                    <TH className="tc" colSpan={2}>
                      Notes
                    </TH>
                  </tr>
                </thead>
                <tbody>
                  {baseEquip.map((row, i) => (
                    <EquipmentRow
                      key={i}
                      row={row}
                      onChange={(f, v) => updateBaseEquip(i, f, v)}
                      onNameClick={() =>
                        openEquipPopup((fields) => {
                          applyBaseEquip(i, fields);
                          autoFillSupportLoc(fields.name);
                        })
                      }
                      lastCellColSpan={2}
                      sold={soldBase[i]}
                      onSell={() =>
                        setSoldBase((prev) =>
                          prev.map((s, idx) => (idx === i ? !s : s)),
                        )
                      }
                      used={usedBase[i]}
                      onToggleUsed={() =>
                        setUsedBase((prev) =>
                          prev.map((u, idx) => (idx === i ? !u : u)),
                        )
                      }
                      detailsLabel="Notes"
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        {/* ── Additional Equipment section ── */}
        <div className="bg-dark-green white fw7 f7 pa2 ttu tracked flex items-center justify-between bt b--black-20">
          <span className="flex items-center" style={{ gap: "0.75rem" }}>
            <span className="v-mid">Additional Equipment</span>
            <PanelToggle
              open={showAddlEquip}
              onToggle={() => setShowAddlEquip((v) => !v)}
            />
          </span>
          <button
            className="f7 fw6 ph2 pv1 bg-red white bn br1 pointer ttu tracked v-mid"
            onClick={() => {
              addlEquip.forEach((row) => removeSupportLoc(row.name));
              setAddlEquip(Array(8).fill(null).map(blankEquip));
            }}
          >
            Clear All
          </button>
        </div>
        {showAddlEquip &&
          (isMobile ? (
            <div>
              {addlEquip.map((row, i) => (
                <MobileEquipRow
                  key={i}
                  row={row}
                  detailsLabel="Effects"
                  onChange={(f, v) => updateAddlEquip(i, f, v)}
                  onNameClick={() =>
                    openEquipPopup((fields) => {
                      applyAddlEquip(i, fields);
                      autoFillSupportLoc(fields.name);
                    })
                  }
                  onClear={() => {
                    removeSupportLoc(row.name);
                    applyAddlEquip(i, blankEquip());
                    if (scavengerChoice === String(i)) setScavengerChoice("");
                  }}
                  scavengerToggle={
                    hasScavenger && SUPPORT.some((s) => s.name === row.name)
                      ? {
                          active: scavengerChoice === String(i),
                          onClick: () =>
                            setScavengerChoice((p) =>
                              p === String(i) ? "" : String(i),
                            ),
                        }
                      : null
                  }
                  used={usedAddl[i]}
                  onToggleUsed={() =>
                    setUsedAddl((prev) =>
                      prev.map((u, idx) => (idx === i ? !u : u)),
                    )
                  }
                />
              ))}
            </div>
          ) : (
            <div className="overflow-auto">
              <table className="w-100 f7" cellSpacing="0">
                <MsuColgroup />
                <thead>
                  <tr>
                    <TH className="tc">Name</TH>
                    <TH className="tc">MCU Cost</TH>
                    <TH className="tc">Passive / Active FRO</TH>
                    <TH className="tc">Tonnage</TH>
                    <TH className="tc" colSpan={2}>
                      Effects
                    </TH>
                  </tr>
                </thead>
                <tbody>
                  {addlEquip.map((row, i) => (
                    <EquipmentRow
                      key={i}
                      row={row}
                      onChange={(f, v) => updateAddlEquip(i, f, v)}
                      onNameClick={() =>
                        openEquipPopup((fields) => {
                          applyAddlEquip(i, fields);
                          autoFillSupportLoc(fields.name);
                        })
                      }
                      onClear={() => {
                        removeSupportLoc(row.name);
                        applyAddlEquip(i, blankEquip());
                        if (scavengerChoice === String(i))
                          setScavengerChoice("");
                      }}
                      lastCellColSpan={2}
                      scavengerToggle={
                        hasScavenger && SUPPORT.some((s) => s.name === row.name)
                          ? {
                              active: scavengerChoice === String(i),
                              onClick: () =>
                                setScavengerChoice((p) =>
                                  p === String(i) ? "" : String(i),
                                ),
                            }
                          : null
                      }
                      used={usedAddl[i]}
                      onToggleUsed={() =>
                        setUsedAddl((prev) =>
                          prev.map((u, idx) => (idx === i ? !u : u)),
                        )
                      }
                      detailsLabel="Effects"
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        {/* Reference toggles */}
        <div className="ph2 pb2 flex">
          <RefToggle
            open={showWeapons}
            onToggle={() => setShowWeapons((v) => !v)}
            label="Ranged Weapons Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showMelee}
            onToggle={() => setShowMelee((v) => !v)}
            label="Melee Weapons Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showSupport}
            onToggle={() => setShowSupport((v) => !v)}
            label="Support Equipment Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showKeywords}
            onToggle={() => setShowKeywords((v) => !v)}
            label="Keyword Reference"
          />
          <span className="mr2" />
          <RefToggle
            open={showNewtype}
            onToggle={() => setShowNewtype((v) => !v)}
            label="Newtype Upgrades"
          />
        </div>
        {showWeapons && (
          <div className="bt b--black-10 ph2 pb2">
            <RangedWeaponTable />
          </div>
        )}
        {showMelee && (
          <div className="bt b--black-10 ph2 pb2">
            <MeleeWeaponTable />
          </div>
        )}
        {showSupport && (
          <div className="bt b--black-10 ph2 pb2">
            <SupportEquipmentTable tonnageLimit={tonnageLimit} fro={fro} />
          </div>
        )}
        {showNewtype && (
          <div className="bt b--black-10 ph2 pb2 overflow-auto">
            <p className="f7 fw7 ttu tracked mv2 dark-green">
              Newtype Upgrades
            </p>
            <table className="w-100 f7 mb3" cellSpacing="0">
              <thead>
                <tr>
                  <TH className="w-20">Name</TH>
                  <TH className="tc w-10">Limit</TH>
                  <TH className="tc w-10">MCU</TH>
                  <TH>Effect</TH>
                </tr>
              </thead>
              <tbody>
                {NEWTYPE_UPGRADES.map((u, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                  >
                    <TD className="fw6">{u.name}</TD>
                    <TD className="tc">{u.limit}</TD>
                    <TD className="tc fw6 dark-green">{u.mcu}</TD>
                    <TD className="lh-copy">
                      {renderKeywords(u.effect, setKwDialog)}
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="f7 fw7 ttu tracked mv2 dark-green">Psycommu Bits</p>
            <table className="w-100 f7" cellSpacing="0">
              <thead>
                <tr>
                  <TH>Type</TH>
                  <TH className="tc">Category</TH>
                  <TH className="tc">Armor</TH>
                  <TH className="tc">Range</TH>
                  <TH className="tc">Mods</TH>
                  <TH className="tc">Dam</TH>
                  <TH className="tc">MCU</TH>
                  <TH className="tc">Faction</TH>
                </tr>
              </thead>
              <tbody>
                {BITS.map((b, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                  >
                    <TD className="fw6">{b.type}</TD>
                    <TD className="tc">{b.cat}</TD>
                    <TD className="tc">{b.armor}</TD>
                    <TD className="tc">{b.range}</TD>
                    <TD className="tc">{b.mods}</TD>
                    <TD className="tc">{b.dam}</TD>
                    <TD className="tc fw6 dark-green">{b.mcu}</TD>
                    <TD className="tc">{b.faction}</TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showKeywords && (
          <div className="bt b--black-10 ph2 pb2 overflow-auto">
            <table className="w-100 f7" cellSpacing="0">
              <thead>
                <tr>
                  <TH className="w-20 nowrap">Keyword</TH>
                  <TH>Description</TH>
                </tr>
              </thead>
              <tbody>
                {KEYWORDS.map((kw, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                  >
                    <TD className="fw7 dark-green nowrap">{kw.name}</TD>
                    <TD className="lh-copy">
                      {renderKeywords(kw.desc, setKwDialog)}
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Hit Locations + Reference Tables ── */}
      <div className={classNames({ flex: !isMobile })}>
        {/* Hit location 2-column grid */}
        <div className={classNames({ "w-75 pr3": !isMobile, mb3: isMobile })}>
          {hasPurgableArmor && (
            <div
              className="mb2 flex items-center flex-wrap"
              style={{ gap: "0.5rem" }}
            >
              <button
                className={classNames(
                  "f7 fw6 ph2 pv1 bn br1 pointer ttu tracked",
                  purgeArmor ? "bg-orange white" : "bg-near-white dark-gray",
                )}
                onClick={() => setPurgeArmor((v) => !v)}
                title="Purgable Armor: jettison armor plating for extra tonnage capacity"
              >
                {purgeArmor ? "Armor Purged ✓" : "Purge Armor"}
              </button>
              {purgeArmor && (
                <span className="f8 i mid-gray">
                  −2 tonnage per remaining non-Head location; each non-Head
                  location's armor shown reduced by 10 (min 1).
                </span>
              )}
            </div>
          )}
          {[
            ["head", "HEAD", "torso", "TORSO", false],
            ["rightArm", "RIGHT ARM", "leftArm", "LEFT ARM", true],
            ["rightLeg", "RIGHT LEG", "leftLeg", "LEFT LEG", false],
          ].map(([locA, titleA, locB, titleB, isArmRow]) => (
            <div key={locA} className="flex mb2">
              <div className="w-50 pr1">
                <LocationCard
                  title={titleA}
                  data={locations[locA]}
                  onChange={(f, v) => updateLoc(locA, f, v)}
                  showShield={isArmRow}
                  isMobile={isMobile}
                  purgedArmor={purgedArmorFor(locA)}
                />
              </div>
              <div className="w-50 pl1">
                <LocationCard
                  title={titleB}
                  data={locations[locB]}
                  onChange={(f, v) => updateLoc(locB, f, v)}
                  showShield={isArmRow}
                  isMobile={isMobile}
                  purgedArmor={purgedArmorFor(locB)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Reference column */}
        <div className={classNames("ba b--black-20", { "w-25": !isMobile })}>
          <SheetHeader>Evasion Tier Table</SheetHeader>
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <TH className="tc">Move</TH>
                <TH className="tc">Evasion</TH>
                <TH className="tc">Aim Instability</TH>
              </tr>
            </thead>
            <tbody>
              {[
                ['0–8"', "2d3 + PS −1", "+1 GS"],
                ['9–20"', "2d3 + PS", "+0 GS"],
                ['21+"', "2d3 + PS +1", "−1 GS"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-near-white tc" : "bg-white tc"}
                >
                  {row.map((cell, j) => (
                    <TD key={j}>{cell}</TD>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <SheetHeader>Hit Locations</SheetHeader>
          <table className="w-100 f7" cellSpacing="0">
            <thead>
              <tr>
                <TH className="tc w-20">Roll</TH>
                <TH className="tc w-20">Location</TH>
              </tr>
            </thead>
            <tbody>
              {[
                ["2", "Torso"],
                ["3", "Left Arm"],
                ["4", "Right Arm"],
                ["5", "Left Leg"],
                ["6", "Right Leg"],
                ["7", "Left Arm"],
                ["8", "Right Arm"],
                ["9", "Left Leg"],
                ["10", "Right Leg"],
                ["11", "Head"],
                ["12", "Torso"],
              ].map(([roll, loc], i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-near-white" : "bg-white"}
                >
                  <TD className="tc fw6">{roll}</TD>
                  <TD>{loc}</TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Keyword reference dialog */}
      <KeywordDialog kw={kwDialog} onClose={() => setKwDialog(null)} />

      {/* Equipment picker modal */}
      {equipPopup && (
        <EquipmentPickerModal
          onClose={closeEquipPopup}
          onSelect={equipPopup.onSelect}
          tonnageLimit={tonnageLimit}
          fro={fro}
        />
      )}

      {/* Slot overflow warning */}
      {slotWarning && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setSlotWarning(null)}
        >
          <div
            style={{
              background: "white",
              maxWidth: "22rem",
              borderRadius: "4px",
            }}
            className="pa4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="fw7 f5 red ma0 mb2">Equipment Slots Exceeded</p>
            <p className="f6 lh-copy ma0 mb3">
              This MSU configuration exceeds available equipment slots.{" "}
              {slotWarning}
            </p>
            <button
              className="f7 ph3 pv2 bg-red white bn br1 pointer dim"
              onClick={() => setSlotWarning(null)}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const PilotSheet = () => {
  const { activeTab, setActiveTab, tabNames, initiatives, setInitiatives } =
    usePilotSheet();
  const [showTeamNav, setShowTeamNav] = useState(true);
  const [showInitiative, setShowInitiative] = useState(true);

  const updateInitiative = (i, v) =>
    setInitiatives((prev) => prev.map((val, idx) => (idx === i ? v : val)));

  return (
    <div>
      {/* ── Collapse controls ── */}
      <div className="flex bb b--black-20 bg-near-white ph2 pv2">
        <RefToggle
          open={showTeamNav}
          onToggle={() => setShowTeamNav((v) => !v)}
          label="Team Navigation"
        />
        <span className="mr2" />
        <RefToggle
          open={showInitiative}
          onToggle={() => setShowInitiative((v) => !v)}
          label="Initiative Tracker"
        />
      </div>

      {/* ── Tab bar ── */}
      {showTeamNav && (
        <div className="flex flex-wrap bb b--black-20 bg-near-white items-stretch">
          {TEAMS.map((team) => (
            <div key={team.label} className="flex items-center br b--black-20">
              <span className={`f7 fw7 ph2 nowrap ${team.color}`}>
                {team.label}
              </span>
              {team.pilots.map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={classNames(
                    "f6 pv2 ph3 pointer bn lh-solid bl b--black-20",
                    {
                      [`bg-${team.color} white fw7`]: activeTab === i,
                      "bg-near-white dark-gray dim": activeTab !== i,
                    },
                  )}
                >
                  {tabNames[i]}
                  {initiatives[i] !== "" && (
                    <span className="ml1 f7 o-60">·{initiatives[i]}</span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ── Initiative tracker ── */}
      {showInitiative && (
        <div className="flex bb b--black-20 bg-white">
          {TEAMS.map((team) => (
            <div key={team.label} className="w-50 br b--black-20">
              <div className={`f7 fw7 pa1 ph2 bb b--black-20 ${team.color}`}>
                {team.label} — Initiative
              </div>
              {team.pilots.map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between ph2 pv1 bb b--black-10"
                >
                  <button
                    onClick={() => setActiveTab(i)}
                    className={classNames(
                      "f7 bn bg-transparent pointer dim tl pa0 truncate w-70",
                      {
                        "fw7 red": team.color === "red" && activeTab === i,
                        "fw7 dark-blue":
                          team.color === "dark-blue" && activeTab === i,
                        "dark-gray": activeTab !== i,
                      },
                    )}
                  >
                    {tabNames[i]}
                  </button>
                  <div className="flex items-center">
                    <span className="f7 gray mr1">Init</span>
                    <input
                      type="number"
                      className="input-reset ba b--black-20 pa1 bg-white f7 tc"
                      style={{ width: "3rem" }}
                      value={initiatives[i]}
                      onChange={(e) => updateInitiative(i, e.target.value)}
                      placeholder="—"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* All six sheets kept mounted — only active one is visible */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} style={{ display: activeTab === i ? "block" : "none" }}>
          <PilotSheetPanel slotIndex={i} />
        </div>
      ))}
    </div>
  );
};
