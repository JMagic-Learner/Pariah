import { useState } from 'react';
import { useMediaQuery } from '@custom-react-hooks/all';
import classNames from 'classnames';

export const ChapterLayout = ({ chapterTitle, sections }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const active = sections.find(s => s.id === activeId);
  const ActiveComponent = active?.Component;

  return (
    <div className={classNames({ flex: !isMobile })}>
      {/* Sidebar */}
      <div
        className={classNames({
          'w-25 br b--black-10 bg-near-white': !isMobile,
          'w-100': isMobile,
        })}
        style={!isMobile ? { minHeight: '100vh' } : {}}
      >
        <div className="pv3 ph3 bg-near-black">
          <h2 className="f6 white fw7 ma0 ttu tracked">{chapterTitle}</h2>
        </div>

        {isMobile ? (
          <select
            className="w-100 pa2 f6 ba b--black-20 bg-white"
            onChange={e => setActiveId(e.target.value)}
            value={activeId}
          >
            {sections.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        ) : (
          sections.map(section => (
            <button
              key={section.id}
              className={classNames(
                'db w-100 tl pv3 ph3 bn pointer f6 bb b--black-10 lh-copy',
                {
                  'bg-dark-red white fw7': activeId === section.id,
                  'bg-near-white dark-gray': activeId !== section.id,
                }
              )}
              onClick={() => setActiveId(section.id)}
            >
              {section.title}
            </button>
          ))
        )}
      </div>

      {/* Content area */}
      <div
        className={classNames('pa3 pa4-ns overflow-auto', {
          'w-75': !isMobile,
          'w-100': isMobile,
        })}
      >
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};
