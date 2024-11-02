import React, { useState } from 'react';
import '../App.css';
import DarkModeToggle from './darklight';
import CharacterNotesContainer from './characterNotes';

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isInfographicOpen, setIsInfographicOpen] = useState(true);
    const [isNotesOpen, setIsNotesOpen] = useState(true);
    const [isFAQOpen, setIsFAQOpen] = useState(true);
    const [isLightMode, setIsLightMode] = useState(false); 

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleInfographicDropdown = () => setIsInfographicOpen(!isInfographicOpen);
    const toggleNotesDropdown = () => setIsNotesOpen(!isNotesOpen);
    const toggleFAQDropdown = () => setIsFAQOpen(!isFAQOpen);
    const toggleTheme = () => setIsLightMode(!isLightMode);

    const characters = [
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/adaman.png`, 
            text: "Currently, he's uncontested in Grass-type sync damage. Applying -2 rebuff can take a couple of turns, but thanks to its 2 uses, you can preserve one in case a stage has status change clearing gimmicks. He's very straightforward with a 1 turn setup, a 100% crit chance and his sync multiplier conditions aren't dependent on external factors like debuffs. Adaman also has the ability to set sun on each sync, which can be combo'd with his sun extension for longer durations.",
            name: 'Adaman & Leafeon', 
            link: 'https://ng-pomatools.web.app/pairs/28400/47000?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFBggLDh0gKSotLg&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/dexio.png`, 
            text: "Dexio is an impressive Psychic-type offensive unit, sporting high BP moves and debuffs for his offensive abilities. Psychic Light of the Dawn is a very strong buddy move, and it can be used continuously as long as you have berry MP. Once the berry MP runs out Dexio can regain 1 MP on the B-move from any team member's sync for the duration of the battle. Dexio serves as very good single target damage in the team.", 
            name: 'Dexio & Espeon', 
            link: 'https://ng-pomatools.web.app/pairs/18800/19600?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFERMWGx4pKy8yNDU&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/irida.png`, 
            text: "Irida is one of the best partners to have in an Ice-type team compressing Hail & Ice Zone into one button and team slot. She provides AoE debuffs, team damage bonus, and sports a strong 1-use buddy move to burst down or setup a target for a follow-up.", 
            name: 'Irida & Glaceon', 
            link: 'https://ng-pomatools.web.app/pairs/28500/47100?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFBggLDhUYKSwtLg&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/ssserena.png`, 
            text: "Serena still sports impressive damage thanks to her stat line and easy 50% multiplier, restrain also counts as a negative status change for stage gimmicks as a substitute for rebuff. Her ability to become immune to stat drops and never miss makes her ideal for any stages that try to affect move accuracy or debuff the player.", 
            name: 'Serena & Zygarde', 
            link: 'https://ng-pomatools.web.app/pairs/13002/71800?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFBgsMDRARFCgrLS4v&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/ssingo.png`, 
            text: "Ingo offers burn/confusion, sync acceleration, team spec. move ups, and team speed+eva all wrapped up in a self-sufficient bow. He's someone you'd want on the team to check off gimmicks while contributing to the team with every action. With investment he gains access to more consistent debuffs and status conditions unavailable at 1/5.",
            name: 'Ingo & Chandelure', 
            link: 'https://ng-pomatools.web.app/pairs/10802/60900?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFDhATGB4hJCcpKi0wMw&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/sina.png`, 
            text: "An offensive Ice-type sporting an AoE Piercing Blows Buddy move. Sina has a big emphasis on sync acceleration, with her trainer move and once she exhausts her berries. Beautiful Icy Wind is empowered greatly each time she consumes a berry, however once she runs out of berries she loses a bit of steam. When compared to Dexio her B-move does not have the refresh playstyle at the cost of being weaker.", 
            name: 'Sina & Glaceon', 
            link: 'https://ng-pomatools.web.app/pairs/18700/47100?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFHiEkJygpLC8yMzQ1&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/eri.png`, 
            text: "Eri is a tank with reliable sustain that can continously heal damage taken, and overtime buff allies while taking hits. Her free gauge usage is tied directly to any Circle field being active. She is mainly catered towards teams that use physical moves, but Paldea Defensive Circle allows her to flex where needed as a defensive option. With investment she can buff & debuff offenses as well as extend the Circle effect.", 
            name: 'Eri & Anihilape', 
            link: 'https://ng-pomatools.web.app/pairs/33000/97900?s=3&l=140&r=5&p=0&a=15010301&g=AAECAwQFDA4QERQZGh0eLC8xMw' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/ssemmet.png`, 
            text: "Emmet offers paralysis/trap, field effects like Unova Defensive Circle and Electric Terrain, and a 1 use Trainer Move used to empower the sync of an ally. Like Ingo, Emmet's goal is to provide utility with the various effects he can get off his Buddy move. Compared to Ingo, Emmet has a more direct but limited duration method of boosting his allies' damage.", 
            name: 'Emmet & Eelektross', 
            link: 'https://ng-pomatools.web.app/pairs/10902/60400?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFFRYYGx4gIiUoKi0uLzA0&x=true' 
        },
    ];


    return (
        <div className={`container ${isLightMode ? 'light' : 'dark'}`}>
            <img 
                src={`${process.env.PUBLIC_URL}/img/banner.jpg`} 
                alt="Main Banner" 
                className="titleImage"/>
            <div className='introSection'>
                <div className='introText'>
                    <p>Welcome to the Banner Priority Ranking chart! This resource is the result of a collaborative effort by several veterans from the subreddit’s Discord server. It was created in response to strong feedback from newcomers who needed guidance on which banners to pull from, given the large number of pairs available each month. You can collapse each section of this website by clicking on their title! Happy browsing.</p>
                </div>
                <div className='introToggle'>
                    <DarkModeToggle toggleTheme={toggleTheme} />
                    {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </div>
            </div>


        <div className='disclaimersSection'>
            <h1 onClick={toggleDropdown} className="dropdownToggle">Disclaimers</h1>
            <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                <h2>⚠ Please Read ⚠</h2>
                <ul>
                    <li>This is not a unit tier list.</li>
                    <li>These rankings are largely catered towards new & casual players; your personal preferences may differ based on playstyle and roster.</li>
                    <li>Banners are ordered top to bottom to show how much value we estimate they hold for you.</li>
                    <li>The letter ranks are relative and compare the value of each pair for this month's banners only, while focusing on their 1/5 base kits.</li>
                    <li>Certain pairs whose 3/5 EXR upgrades are notable are highlighted with two letters.</li>
                    <li>We do not take 5/5 or Super Awakenings into consideration as they are still fairly out of reach and unnecessary for rewards completion.</li>
                    <li>A pair's individual rate (shown on graphic) can influence the banner's ranking and for simplicity's sake, we assume that you do not chase copies.</li>
                    <li>The "U" (Uber) rank is used on occasions when a certain pair is much more valuable than the rest that month; lack of it does not mean the banners are bad.</li>
                    <li>Remember that 36,600 free gems are required to guarantee the unit, and 45,600 for Arc Banners; any number lower than this may not result in a successful pull!</li>
                    <li>For a max potential tier list, check out <a href="https://docs.google.com/document/d/1vF42uzF-xpkcfIU2gVEY4Dl7sS_I3ITj8g5X2lo1usA/edit?tab=t.0#heading=h.udjew0gpye5z" target="_blank" rel="noreferrer">Spark's Tier List.</a></li>
                </ul>
            </div>
        </div>
 

        <div className='rankingsSection'>
            <h1 onClick={toggleInfographicDropdown} className="dropdownToggle">Rankings</h1>
            <div className={`dropdown ${isInfographicOpen ? 'open' : ''}`}>
                <h3>November 2024</h3>
                <img 
                    src={`${process.env.PUBLIC_URL}/img/rankings.png`} 
                    alt="Chart" 
                    className="chartImage"/>
                <div className='graphicNotes'>
                    <a href="https://i.imgur.com/QFF3k0Z.jpeg" target="_blank" rel="noreferrer"><h3>Download the Full Image</h3></a>
                    <a href="https://www.flickr.com/photos/167060966@N06/sets/72177720317637402" target="_blank" rel="noreferrer"><h3>Album of all previous charts</h3></a>
                </div>
            </div>
        </div>


        <div className='notesSection'>
            <h1 onClick={toggleNotesDropdown} className="dropdownToggle">Notes</h1>
            <div className={`dropdown ${isNotesOpen ? 'open' : ''}`}>
                <div className='notesContainer'>
                     <p>Click a pair's portrait below for a short summary of what they offer!</p>
                </div>
                    <CharacterNotesContainer characters={characters} />
                <ul>
                    <li>We are currently working on another format to replace the double letter grading on the graphic, to better showcase investment value & ceiling.</li>
                    <li>The new Ingo & Emmet act as team utility with various effects tied the state of the opponent their attacking, they aren't specifically limited to just partnering with each other. There are various combinations that work well together with many different sync pairs.</li>
                    <li>Each Variety Eeveelution offers different perks and utility on their respective teams. They are designed with repeately using their sync move to maintain upkeep of their respective field effects. Since their sync tends the to be very important, investing to unlock their sync grid is a typical consideration. However you can leverage their perks in teams who already set & extend their respective fields. </li>
                    <li>Due to Number of Sync Pairs available we've decided to not rank these Eevee pairs for the following reasons:</li>
                        <ul>
                            <li>Multi-Feature Rate is significantly worse for the rerun Eeveelution Banner, with a 0.4% per featured sync pair on the 5-split banner.</li>
                            <li>Their Field Effect Maintenance requires using their own Sync Move, which at base will be lacking and are considered to be either recommended for investment or used alongside other WTZ setters. Which for a new player will be harder to recommend overall.</li>
                        </ul>
                </ul>
            </div>
         </div>


         <div className='faqSection'>
            <h1 onClick={toggleFAQDropdown} className="dropdownToggle">FAQ</h1>
            <div className={`dropdown ${isFAQOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <strong>What is this chart?</strong>
                        <p>The Banner Priority chart is designed to rank banner value and compare the value of pairs available only within the current month. It is not a general tier list and should not be used as such. These rankings are primarily tailored to new and casual players, so your personal preferences may differ based on your playstyle and roster.</p>
                    </li>
                    <li>
                        <strong>How do I read the chart?</strong>
                        <p>Banner value is indicated by the vertical placement on the chart, while letter gradings differentiate each pair in the month and within multi-featured banners. The letter grading and banner value favor base kits, as we’ve observed that many casual players seek immediate value. Some pairs are marked with a double letter grading (→) if investment greatly enhances their kit. Investments typically include cake and/or move levels, up to a maximum of 3/5. The individual pair rate is displayed on the left of each banner, and these rates can also influence a banner's value and placement on the chart.</p>
                    </li>
                    <li>
                        <strong>What are the letters?</strong>
                        <p>The chart uses a traditional letter ranking: U, S, A, B, C, D, E. The "U" ranking may occasionally appear when one or more pairs have a noticeable power gap compared to the rest of the month’s choices. For example, if there's a month where Volkner (Electivire) and Red (Pikachu) are available in the same month, Volkner would be rated a lot lower, probably around C or D given what else is available. Does it mean Volkner is D grade in performance across the board? No. He's D relative to Red, but Volkner still likely will put some work in over your f2p electric units.</p>
                    </li>
                    <li>
                        <strong>Which banners are ranked?</strong>
                        <p>We only rank non-paid banners, with a few exceptions, such as seasonal rerun banners, which are usually better left for favorites due to their extremely low rates and largely outdated pool. Any important disclaimers about missing banners or notable seasonal/select pairs are typically included in the notes above.</p>
                    </li>
                    <li>
                    <strong>Who makes this chart?</strong>
                            <p>As mentioned above, the chart is a group effort by various helpers and staff members from the subreddit's Discord community. These players have extensive knowledge of the game, contribute to popular guides and resources, and assist newcomers on a daily basis. You can find us on the Discord, where we’re always available to discuss these placements and pairs. These charts are created through a thorough study of kits, calculations, and discussions. While we don’t claim to provide a perfect solution for banner pulls, given the numerous factors involved in such decisions, we’re confident in our ability to offer advice that benefits most casual rosters.</p>
                    </li>
                </ul>
            </div>
        </div>


        <footer className="footer">
            <p>Find us on our social networks below and feel free to give us your feedback on Discord!</p>
                <div className='socials'>
                    <a href="https://discord.gg/d28zwe3R" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={`${process.env.PUBLIC_URL}/img/discord.svg`} alt="Discord" className="social-icon-img" />
                    </a>
                    <a href="https://www.reddit.com/r/PokemonMasters/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={`${process.env.PUBLIC_URL}/img/reddit.svg`} alt="Reddit" className="social-icon-img" />
                    </a>
                </div>
                    <em><p>@DreamyAkemi</p></em>
        </footer>
    </div>
    );
};

export default Home;
