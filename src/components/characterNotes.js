import React, { useState } from 'react';

const CharacterNote = ({ portrait, text, name, link, isExpanded, onToggle }) => {
    return (
        <div className="character-note">
            <div className="portrait-container" onClick={onToggle}>
                <img src={portrait} alt="Character portrait" className="character-portrait" />
            </div>
            {isExpanded && (
                <div className="text-container">
                    <h3>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </h3>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

const CharacterNotesContainer = ({ characters }) => {
    const [expandedStates, setExpandedStates] = useState(new Array(characters.length).fill(false));

    const toggleIndividual = (index) => {
        const newExpandedStates = [...expandedStates];
        newExpandedStates[index] = !newExpandedStates[index];
        setExpandedStates(newExpandedStates);
    };

    const toggleAll = () => {
        const newState = !expandedStates.every(state => state);
        setExpandedStates(new Array(characters.length).fill(newState));
    };

    return (
        <div className='charactersContainer'>
            <button className="notesButton" onClick={toggleAll}>
                {expandedStates.every(state => state) ? 'Collapse All' : 'Expand All'}
            </button>
            <div className="characters-wrapper">
                {characters.map((character, index) => (
                    <div className="character-notes-container" key={index}>
                        <CharacterNote
                            portrait={character.portrait}
                            text={character.text}
                            name={character.name}
                            link={character.link}
                            isExpanded={expandedStates[index]} 
                            onToggle={() => toggleIndividual(index)} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterNotesContainer;
