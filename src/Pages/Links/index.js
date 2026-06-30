const Section = ({ title, children }) => (
  <div className="mb5">
    <h2 className="f4 fw7 ttu tracked bb b--black-20 pb2 mb3">{title}</h2>
    {children}
  </div>
);

const DriveLink = ({ label, href, description }) => (
  <div className="mb3 pa3 ba b--black-10 br2 bg-near-white flex items-start justify-between">
    <div>
      {label && <p className="fw7 f6 ma0 mb1">{label}</p>}
      {description && <p className="f7 gray lh-copy ma0">{description}</p>}
    </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ml3 flex-shrink-0 f7 fw6 ph3 pv2 bg-red white no-underline br2 dim pointer"
    >
      Open ↗
    </a>
  </div>
);

export const Links = () => (
  <div className="pa4 center mw7">
    <h1 className="f2 fw7 red bb pb2 mb4">Links</h1>
    <p className="lh-copy mb5 f6 dark-gray">
      Legacy Google Drive links for all official Gundam Flashpoint resources.
    </p>

    <Section title="MSU Sheets">
      <DriveLink
        label="Earth Federation Forces"
        href="https://drive.google.com/drive/folders/10Sb0dryy5TxBqwA7qo9noleks1cCUgW3?usp=drive_link"
      />
      <DriveLink
        label="Zeon"
        href="https://drive.google.com/drive/folders/1KEafjKtKVtBf7x4qL1yQv_DO84X9HWgX?usp=drive_link"
      />
      <DriveLink
        label="ReZeon"
        href="https://drive.google.com/drive/folders/13T3-tho4eayuLtfgkTi-bBK4Qwf4gdzC?usp=drive_link"
      />
      <DriveLink
        label="Mafty"
        href="https://drive.google.com/drive/folders/1FI3sVk1pfk-UeoUO9NEKW68u4DkrBJ5D?usp=drive_link"
      />
      <DriveLink
        label="Crossbone Vanguard"
        href="https://drive.google.com/drive/folders/1eRDz-Y_AKOMKgCLV5H6vGnpbefMgO811?usp=drive_link"
      />
    </Section>

    <Section title="Rules">
      <DriveLink
        label="Gundam Flashpoint v0.6.7 Rules"
        href="https://drive.google.com/file/d/13y378z2joy2OmKwG46i6_WUf5Tsa9T6n/view?usp=drive_link"
      />
      <DriveLink
        label="ReZeon Faction Expansion"
        href="https://drive.google.com/file/d/1cjHVl1oIzxCfAxQPdSSu1CLZFc2zNbMb/view?usp=drive_link"
      />
    </Section>

    <Section title="Templates">
      <DriveLink
        label="Blank Pilot Sheets (DOCX)"
        href="https://docs.google.com/document/d/1173IIVD8y6VxDQQvZSt4qVrf1uUW5YnK/edit?usp=drive_link&ouid=108438249253722752462&rtpof=true&sd=true"
      />
      <DriveLink
        label="Blank Pilot Sheets PDF"
        href="https://drive.google.com/file/d/1gcNLFdB11TwOB4w0iLxK6EPuMQWnugvW/view?usp=drive_link"
      />
    </Section>

    <Section title="Community MSU Folder">
      <p className="f6 lh-copy mb3">
        Community members are encouraged to create and share their own MSU
        sheets. The folder below contains a PDF guide showing how to convert
        Wikipedia stats to MSU statlines.
      </p>
      <p className="f7 lh-copy mb3 dark-gray i">
        Suggested by u/jazzsplosion — thanks for the great idea!
      </p>
      <DriveLink
        label="Community MSU Folder"
        description="Includes the stat conversion guide PDF"
        href="https://drive.google.com/drive/folders/1iKuA01rYJbnzZ4ByUJgFT32i_aSZLpKb"
      />
    </Section>
  </div>
);
