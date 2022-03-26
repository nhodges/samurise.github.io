"use strict";(self.webpackChunksamurise=self.webpackChunksamurise||[]).push([[446],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6611:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"game-design",title:"Game Design"},l="Game Design",c={unversionedId:"washipaper/game-design",id:"washipaper/game-design",title:"Game Design",description:"The game design modeled here represents the complete Game Loop that takes place over a year in game terms (4 months in IRL terms). The detail here is purposefully lighter because we are targeting the release of these game mechanics across the 2nd and 3rd phases of our Roadmap.",source:"@site/docs/washipaper/game-design.md",sourceDirName:"washipaper",slug:"/washipaper/game-design",permalink:"/docs/washipaper/game-design",editUrl:"https://github.com/nhodges/samurise.github.io/tree/master/docs/washipaper/game-design.md",tags:[],version:"current",frontMatter:{id:"game-design",title:"Game Design"},sidebar:"washipaper",previous:{title:"Ecosystem Integrations",permalink:"/docs/washipaper/ecosystem-integrations"},next:{title:"Tokenomics",permalink:"/docs/washipaper/tokenomics"}},p=[{value:"Game Purpose",id:"game-purpose",children:[],level:2},{value:"Logical Architecture",id:"logical-architecture",children:[],level:2},{value:"The Core Game Loop",id:"the-core-game-loop",children:[{value:"Active Season Loop",id:"active-season-loop",children:[],level:3},{value:"Winter Season Loop",id:"winter-season-loop",children:[],level:3}],level:2},{value:"Episodic and Faction Based Social Coordination",id:"episodic-and-faction-based-social-coordination",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"game-design"},"Game Design"),(0,o.kt)("p",null,"The game design modeled here represents the complete Game Loop that takes place over a year in game terms (4 months in IRL terms). The detail here is purposefully lighter because we are targeting the release of these game mechanics across the 2nd and 3rd phases of our Roadmap."),(0,o.kt)("h2",{id:"game-purpose"},"Game Purpose"),(0,o.kt)("p",null,"The goal of Lost Samurise is to coordinate among your Faction to outwit your enemies and become the first to purify the lands within your Provinces. Significant awards will be given by the Emperor upon the achievement of Seasonal and Lore-based milestones."),(0,o.kt)("h2",{id:"logical-architecture"},"Logical Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Logical Architecture",src:a(2281).Z,width:"1629",height:"854"})),(0,o.kt)("p",null,"The World of Tengoku contains 3 Factions, and each contains 3 Provinces that will exist on a 2D map with borders that place each province adjacent to 2 or more enemy factions. Each Province will have Daimyo Lands (1 per Wallet) assigned to them, and distributed evenly from a snapshot so that exactly 3333 SamuRise are sent to each Faction."),(0,o.kt)("p",null,"The endgame Purification story arc is attainable when all 3 building types are successfully built on each of the 3 provinces (castle, theatre, temple) for a total of 9 buildings."),(0,o.kt)("p",null,"One piece of Land (erc-721) is given to each SamuRise at mint. The logic for distribution of Land includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A few weeks after Mint, a snapshot is taken and only 1 Land is claimable per wallet"),(0,o.kt)("li",{parentName:"ul"},"Land is given a random Faction and Province property to define its location in Tengoku"),(0,o.kt)("li",{parentName:"ul"},"Exactly 3333 SamuRise will be distributed to each of the 3 Factions"),(0,o.kt)("li",{parentName:"ul"},"All SamuRise within a wallet that had a Faction assigned Land air dropped, will also be \u2018assigned\u2019 to that Faction "),(0,o.kt)("li",{parentName:"ul"},"If sold or transferred after the snapshot, displaced SamuRise will retain the Faction originally assigned")),(0,o.kt)("h2",{id:"the-core-game-loop"},"The Core Game Loop"),(0,o.kt)("p",null,"The Lost SamuRise is played over a year in game time, and contains 3 identical seasonal loops (Spring, Summer, Fall), while the final Winter season allocates time for all the end of year revolt calculations and Emperor award actions. Within each non-Winter season there are 4 phases that factional teams and individuals will participate in."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Yearly Game Loop",src:a(4232).Z,width:"1577",height:"875"})),(0,o.kt)("h3",{id:"active-season-loop"},"Active Season Loop"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Worker Placement"),": staking your SamuRise to provide one of several game tokens",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Farm"),": plant the fields on your land and harvest rice ($GOHAN)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Train"),": build up the skill of your SamuRise and contribute towards faction army strength ($CHIKARA)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Production"),": produce necessary materials to construct buildings (#Materials)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Quest"),": go on quests to find rare PFP upgrades and possibly #Treasures for exotic crafting recipes"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select Council"),": nominate and vote for multi-sig participants who are responsible for formally entering game orders"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Faction Orders"),": each faction secretly enters encrypted orders that will be revealed at the end of the season",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Attack"),": attack an adjacent province to steal their materials and rice, or perhaps set back their build plans"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sabotage"),": sabotage the enemy faction\u2019s production/yield rates, undermine their plans to build a castle, and rumor has it that Onna Mushas will play a critical role here"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Build"),": construct buildings in your Province to purify the land (castles, temples, theatres)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Support"),": support neighbouring provinces, whether your own or an ally"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Order Resolution"),": all faction orders are resolved simultaneously and game state will change for all holders, factions, and provinces")),(0,o.kt)("h3",{id:"winter-season-loop"},"Winter Season Loop"),(0,o.kt)("p",null,"The Winter Season is a time to return home, recover from the long campaigns, ensure the rice stores are filled, put down peasant revolts if they are not, and attend to the Emperor for awards and ceremonies. "),(0,o.kt)("p",null,"To incorporate a significant Risk element to gameplay, Onna Mushas may choose to attend court with the Emperor. What devious plans will they hatch through whispered promises into the Emperor\u2019s ear? Will an enemy Onna Musha succumb to the sleeved dagger or an open challenge? Are the awards given to the winning Shogunate truly safe? "),(0,o.kt)("h2",{id:"episodic-and-faction-based-social-coordination"},"Episodic and Faction Based Social Coordination"),(0,o.kt)("p",null,"We have chosen an open gaming system that incentivizes social coordination. We expect that formal and informal communication will be effectively leveraged to engage with enemy factions and to coordinate intra and inter-factional strategies."),(0,o.kt)("p",null,"Due to the openness of the game, outcomes depend more on behavioural emergence than any specific gaming logic. This should help to establish an episodic experience that is created and governed by the storytelling of our community. In this respect, SamuRise is just a narrative protocol with just enough game design to promote an infinite array of possible outcomes. Each season will never play out the same way."))}u.isMDXComponent=!0},4232:function(e,t,a){t.Z=a.p+"assets/images/game-loop-year-3f9ffa08fe0a612e1131da43326bc754.png"},2281:function(e,t,a){t.Z=a.p+"assets/images/logical-architecture-523c9266176b98b0e1c1d8cbe2844f4e.png"}}]);