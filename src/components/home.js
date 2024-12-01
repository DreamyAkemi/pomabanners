import React, { useState } from 'react';
import '../App.css';
import DarkModeToggle from './darklight';
import CharacterNotesContainer from './characterNotes';
import Snow from './snow';

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
            text: "Moltres provides an tools that help in countering different stages. Sunny weather to enhance fire-type damage and to make the team immune from status conditions and interferences, multiple debuffs on all targets, Potion, on top of Support ex role. When invested you'll gain access to sync acceleration, multi-target confusion, sunny weather extension, and empowering her great sync move. Leaf is provides so much in just one team slot.", 
            name: 'Leaf & Moltres', 
            link: 'https://ng-pomatools.web.app/pairs/1701/14600?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFHSAiIyUpKywtLi8' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/leon.png`, 
            text: "Despite having the Tech EX Role, Leon is very much just built more like a strike pair, his focus is on dealing damage. In Fire-type teams he'll provide Fire Rebuff, the Burn Status Condition, and hitting all opponent's with his sync & max move. At higher investment he can lower burned opponent's ATK & SP.DEF and improve his utility in Sunny weather. At max investment he empowers his damage more with Sp. Move ↑ Next and Sync Move ↑ Next. He'll be a great damage dealer to add to your roster.", 
            name: 'Leon & Charizard', 
            link: 'https://ng-pomatools.web.app/pairs/24704/600?s=3&l=140&r=5&p=0&a=0&g=AAECAwQFBgcKFBYaHB4gISInKDAyMw' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/adaman.png`, 
            text: "Currently, he's uncontested in Grass-type sync damage. Applying -2 rebuff can take a couple of turns, but thanks to its 2 uses, you can preserve one in case a stage has status change clearing gimmicks. He's very straightforward with a 1 turn setup, a 100% crit chance and his sync multiplier conditions aren't dependent on external factors like debuffs. Adaman also has the ability to set sun on each sync, which can be combo'd with his sun extension for longer durations.",
            name: 'Adaman & Leafeon', 
            link: 'https://ng-pomatools.web.app/pairs/28400/47000?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFBggLDh0gKSotLg&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/irida.png`, 
            text: "Irida is one of the best partners to have in an Ice-type team compressing Hail & Ice Zone into one button and team slot. She provides AoE debuffs, team damage bonus, and sports a strong 1-use buddy move to burst down or setup a target for a follow-up.", 
            name: 'Irida & Glaceon', 
            link: 'https://ng-pomatools.web.app/pairs/28500/47100?s=3&l=150&r=6&p=0&a=13010602&g=AAECAwQFBggLDhUYKSwtLg&x=true' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/marnie.png`, 
            text: "Marnie's base passives make him an ideal augmenters that doesn't rely on Supports for their offensive stats. She can apply her respective field effect a total of 4 times (if you EX her) and apply a Galar Circle with each one! She uses little gauge and applies Supereffective ↑ Next & Sync Accel to allies. Marnie focuses on Sunny Weather. Burn, and Def & Sp.Def debuffs with Galar Circle (Defensive). She is flexible, as she has both Defense Circle + Def ↓ & Sp. Def ↓ Debuffs.",
            name: 'Marnie & Cinderace', 
            link: 'https://ng-pomatools.web.app/pairs/24500/81500?s=5&l=140&r=5&p=0&a=0&g=AAECAwQFCQsNDxETFhgoKiwt' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/bede.png`, 
            text: "Bede's base passives make him an ideal augmenters that doesn't rely on Supports for their offensive stats. He can apply his respective field effect a total of 4 times (if you EX him) and apply a Galar Circle with each one! He uses little gauge and applies Supereffective ↑ Next & Sync Accel to allies. Bede focuses on Rainy Weather, Sp. Def debuffs, with Galar Circle (Special). He doubles down on Special Damage, the majority of the water-type cast are Special Damage, so he'll fit in nicely with many different pairs.", 
            name: 'Bede & Inteleon', 
            link: 'https://ng-pomatools.web.app/pairs/24600/81800?s=3&l=140&r=5&p=0&a=0&g=AAECAwQFCQoNDxETFhkoKi0' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/hop.png`, 
            text: "Hop's base passives make him an ideal augmenters that doesn't rely on Supports for their offensive stats. He can apply his respective field effect a total of 4 times (if you EX him) and apply a Galar Circle with each one! He uses little gauge and applies Supereffective ↑ Next & Sync Accel to allies. Hop focuses on Grassy Terrain, Speed Debuffs, with Galar Circle (Physical). He works well with physical grass type, he's also handy pairs with Speed ↓ as their multipliers, such as Greta & and most notably, Victor.", 
            name: 'Hop & Rilaboom', 
            link: 'https://ng-pomatools.web.app/pairs/24400/81200?s=3&l=140&r=5&p=0&a=0&g=AAECAwQFCQsNGhseISQoKiw' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/lillie.png`, 
            text: "Shiny Primarina is offering an offensive utility hybrid package. She offers the Sing Status move, an empowered Moonblast and Disarming Voice, sync acceleration and self-sufficiency. Her kit lends itself pretty well to the Damage Challenge mode as she provides sync accel, speed buffs, and Supereffective ↑ Next to her allies on top of having Support EX Role. She lacks the typical team augments (WTZ, Rebuff, Circle) but brings 20% move damage increase to allies when the their speed is raised.", 
            name: 'Lillie & Primarina', 
            link: 'https://ng-pomatools.web.app/pairs/11805/73001?s=3&l=140&r=5&p=0&a=0&g=AAECAwQFCQwOEhUXKSwuLw' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/bugsy.png`, 
            text: "Bugsy sports Johto Circle (Defensive) & Bug Zone for his allies. At base he covers defensive buffs and several categories of debuffs and provides team sustain with B Leech Life. With investment he can buff offenses, and regain MP after syncing. Main concern would be the length animation of his Leech Life without Circle extension.", 
            name: 'Bugsy & Kricketune', 
            link: 'https://ng-pomatools.web.app/pairs/4501/40200?s=3&l=140&r=5&p=0&a=0&g=AAECAwQFBggLDhATFhkaHB8i' 
        },
        { 
            portrait: `${process.env.PUBLIC_URL}/img/pairs/milo.png`, 
            text: "A physical-oriented grass support who has a unique sync acceleration effect that can be utilized by a team of MAX move users. Milo's main appeal is an abundance of Speed Debuffs as the Pokémon is themed around Cotton Spore. At base Milo offers a one-time non-extended Grassy Terrain, offensive buffs, and speed debuffs. At higher investment you'll receive more utility such as Poison/Para on contact, Terrain Extension, and your typical support Utility. For defensive buffing Milo requires 4/5 so keep that in mind.", 
            name: 'Milo & Eldegoss', 
            link: 'https://ng-pomatools.web.app/pairs/24800/83000?s=3&l=140&r=5&p=0&a=0&g=AAECAwQFDA4RFBYfICIsLjAzNQ' 
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
                    <div className='snowButton'>
                        <Snow/>
                        Surprise!
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
                <h3>December 2024</h3>
                <img 
                    src={`${process.env.PUBLIC_URL}/img/rankings.png`} 
                    alt="Chart" 
                    className="chartImage"/>
                <div className='graphicNotes'>
                    <a href="https://i.imgur.com/Ba66b96.png" target="_blank" rel="noreferrer"><h3>Download the Full Image</h3></a>
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
