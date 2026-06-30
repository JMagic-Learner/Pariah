export const ContactCard = ({
  name,
  role,
  email,
  discord,
  notes,
  avatarUrl,
  reddit,
}) => (
  <div className="ba b--black-20 br2 overflow-hidden mw6">
    {avatarUrl && <img className="db w-100" src={avatarUrl} alt={name} />}
    <div className="pa4">
      {name && <h2 className="f3 fw7 red ma0 mb1">{name}</h2>}
      {role && <p className="f6 fw6 gray ttu tracked ma0 mb3">{role}</p>}
      {email && (
        <p className="f6 lh-copy ma0 mb2">
          <span className="fw6">Email: </span>
          <a className="red link dim" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      )}
      {discord && (
        <p className="f6 lh-copy ma0 mb2">
          <span className="fw6">Discord: </span>
          <span className="dark-gray">{discord}</span>
        </p>
      )}
      {reddit && (
        <p className="f6 lh-copy ma0 mb2">
          <span className="fw6">Reddit: </span>
          <span className="dark-gray">{reddit}</span>
        </p>
      )}
      {notes && <p className="f6 lh-copy mt3 mb0 dark-gray">{notes}</p>}
    </div>
  </div>
);
