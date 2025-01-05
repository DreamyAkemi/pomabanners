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
            portrait: `${process.env.PUBLIC_URL}/img/pairs/blue.png`, 
            text: "Blue set a new standard when it comes to tanking during his initial release, especially in difficult content, being able to raise the DEF & Sp.DEF of allies continuously is something that is incredibly helpful in difficult battle challenges where the opponent's debuff your stats. Blue also empowers all ally sync damage by an additional 20% for an added benefit, and then we have his buddy move: Thundering Wings Roost. An incredible healing move that allows Blue to continue to survive arduous content. If you invest in him you'll get constant Offensive debuffs, more reliable paralysis, sync healing, and more utility.",
            name: 'Blue & Zapdos', 
            link: 'https://ng-pomatools.web.app/pairs/2103/14500?s=3&l=150&r=6&p=0&a=17010801&g=AAECAwQFBggLDQ4QGRocHyIv&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/red.png`, 
            text: "Red serves as an incredible offensive presence on teams, where he can constantly amplify his own damage after attacking and has tools to stack up multiple Sp.Move ↑ Next effects to unleash a powerful back-to-back combo of a boosted sync move & devastating blow from either Blizzard or his Frozen Wings Ice Beam. In addition to all that, his Buddy Move acts as a denial tool in non-resilient content. When invested Red can access more utility and damage enhancements; such as setting Hail, lowering accuracy, and stacking more SMUN", 
            name: 'Red & Articuno', 
            link: 'https://ng-pomatools.web.app/pairs/3/14400?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFDA8fISIkKCstLi8&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/leaf.png`, 
            text: "Moltres provides tools that help in countering different stages. Sunny weather to enhance fire-type damage and to make the team immune from status conditions and interferences, multiple debuffs on all targets, Potion, on top of Support ex role. When invested you'll gain access to sync acceleration, multi-target confusion, sunny weather extension, and empowering her great sync move. Leaf offers a lot in just one team slot.", 
            name: 'Leaf & Moltres', 
            link: 'https://ng-pomatools.web.app/pairs/1701/14600?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFHSAiIyUpKywtLi8' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/giovanni.png`, 
            text: "Guzzlord's supportive traits focuses on providing stat raises, and sync up next stacks to allies. The playstyle involves using Stockpile to raise defenses, and then spend his defensive stats on either healing all allies or dealing damage and lowering defenses. The pair is actually pretty generically flexible, and only really benefits dark teams with the field ex role. An unexplored facet is how 'Take All' Next will impact gameplay, there maybe new ways to clear thanks to this effect. Just note he'll be expecting his allies to counter stage threats such as status effects, debuffs, or immunities.", 
            name: 'Giovanni & Guzzlord', 
            link: '' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/mela.png`, 
            text: "This pair is a damage dealer who focuses on lowering its own defenses in order to deal high damage with the Buddy Move. It effectively serves as an aoe sync move that can double in power if your at max lowered defense. The issue will mainly be avoiding partnering with allies who grant defense buffs, and timing your mystical fire before eating an enemy’s big move with lowered defenses. She only debuffs -1 each turn at base, so getting the max value out her move isn’t too feasible except in longer content.", 
            name: 'Mela & Armarouge', 
            link: '' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/atticus.png`, 
            text: "This pair is a support who provides both damage reduction and enhancement while its currently exclusive Poison Damage Field is active. It also lowers Poison rebuff for all opponents by -2, making it an excellent boost for poison based teams. Tools like flinch and potion do help for main supportive functions. If you want additional Poison DF, you’ll have to get 3/5.", 
            name: 'Atticus & Revavroom', 
            link: '' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/poppy.png`, 
            text: "Poppy is a field pair that is more so focused on her buffing and debuffing with her Buddy Move then about being a strong sync contender. Taking care of opponent offenses, ally defenses, and both sides speed stats makes her very handy for stat rank checks. With base extension built in, and 3 settings of steel zone she’s a great option as DPS utility option for steel teams.", 
            name: 'Poppy & Steelix', 
            link: '' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/raihan.png`, 
            text: "Raihan is a support pair with a potential to have infinite sandstorm when hit, however the kit is designed around dodging attack moves to buff stats, heal himself, charge gauge, and power allies with move up nexts. The buddy move has impressive range of debuffs and replicable status condition. One glaring issue is that hard encounters often have Piercing Gaze which nullifies Sandaconda’a perks.", 
            name: 'Raihan & Sandaconda', 
            link: '' 
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
                    <div className='darkModeButton'>
                        <DarkModeToggle toggleTheme={toggleTheme} />
                        {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    </div>
                </div>
            </div>


        <div className='disclaimersSection'>
            <h1 onClick={toggleDropdown} className="dropdownToggle">DISCLAIMERS</h1>
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
            <h1 onClick={toggleInfographicDropdown} className="dropdownToggle">RANKINGS</h1>
            <div className={`dropdown ${isInfographicOpen ? 'open' : ''}`}>
                <h3>January 2025</h3>
                <img 
                    src={`${process.env.PUBLIC_URL}/img/rankings.png`} 
                    alt="Chart" 
                    className="chartImage"/>
                <div className='graphicNotes'>
                    <a href="https://i.imgur.com/kCXsKPQ.png" target="_blank" rel="noreferrer"><h3>Download the Full Image</h3></a>
                    <a href="https://www.flickr.com/photos/167060966@N06/sets/72177720317637402" target="_blank" rel="noreferrer"><h3>Album of all previous charts</h3></a>
                </div>
            </div>
        </div>


        <div className='notesSection'>
            <h1 onClick={toggleNotesDropdown} className="dropdownToggle">NOTES</h1>
            <div className={`dropdown ${isNotesOpen ? 'open' : ''}`}>
                <div className='notesContainer'>
                     <p>Click a pair's portrait below for a short summary of what they offer! An example grid can be found by clicking their names.</p>
                </div>
                    <CharacterNotesContainer characters={characters} />

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
