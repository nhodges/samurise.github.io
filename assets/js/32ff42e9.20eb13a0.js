"use strict";(self.webpackChunksamurise=self.webpackChunksamurise||[]).push([[493],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,p=d["".concat(l,".").concat(f)]||d[f]||m[f]||i;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4933:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"tokenomics",title:"Tokenomics"},l="Tokenomics",c={unversionedId:"washipaper/tokenomics",id:"washipaper/tokenomics",title:"Tokenomics",description:"Tokenomics is an integral aspect of a healthy gameFI protocol. Paying as much attention to the design as to the incentives structure that drive human behaviour, is critical for any economy to thrive. A positive reinforcing system is notable for its self-sustaining market equilibrium that scales well with increasing liquidity and engagement. In other words, can we attract and retain market participants in our gameFI protocol, and reward them with $FUN and $YIELD?",source:"@site/docs/washipaper/tokenomics.md",sourceDirName:"washipaper",slug:"/washipaper/tokenomics",permalink:"/docs/washipaper/tokenomics",editUrl:"https://github.com/nhodges/samurise.github.io/tree/master/docs/washipaper/tokenomics.md",tags:[],version:"current",frontMatter:{id:"tokenomics",title:"Tokenomics"},sidebar:"washipaper",previous:{title:"Game Design",permalink:"/docs/washipaper/game-design"},next:{title:"Game Roles",permalink:"/docs/washipaper/game-roles"}},u=[{value:"Tokens: Genesis Lost SamuRise ERC-721",id:"tokens-genesis-lost-samurise-erc-721",children:[],level:2},{value:"Tokens: Medium of Exchange $BUSHO ERC-20",id:"tokens-medium-of-exchange-busho-erc-20",children:[],level:2},{value:"Tokens: Gameplay $CHIKARA $GOHAN (server tokens/ERC-20)",id:"tokens-gameplay-chikara-gohan-server-tokenserc-20",children:[],level:2},{value:"Tokens: #Materials ERC-1155",id:"tokens-materials-erc-1155",children:[],level:2},{value:"Tokens: Quest Items ERC-1155",id:"tokens-quest-items-erc-1155",children:[],level:2},{value:"Faucets and Sinks: Creating a Circular Economy",id:"faucets-and-sinks-creating-a-circular-economy",children:[],level:2}],m={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokenomics"},"Tokenomics"),(0,i.kt)("p",null,"Tokenomics is an integral aspect of a healthy gameFI protocol. Paying as much attention to the design as to the incentives structure that drive human behaviour, is critical for any economy to thrive. A positive reinforcing system is notable for its self-sustaining market equilibrium that scales well with increasing liquidity and engagement. In other words, can we attract and retain market participants in our gameFI protocol, and reward them with $FUN and $YIELD?"),(0,i.kt)("p",null,"Tokenomics models require 2 essential features from the start. 1) A good startup design crafted from many rounds of modeling to critically assess different types of user behaviour. 2) A model that is flexible and configurable to changes in monetary policy, because we can never truly predict system or user behaviours. In this section we will do a deeper dive into the local tokenomics system of SamuRise and its direct integration with Treasure."),(0,i.kt)("h2",{id:"tokens-genesis-lost-samurise-erc-721"},"Tokens: Genesis Lost SamuRise ERC-721"),(0,i.kt)("p",null,"The Lost SamuRise genesis token is an ERC-721 that is staked to generate various types of tokens by performing functions in game. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Powering on the Purification Process in Tengoku requires a minimum % of SamuRise to be staked (similar to powering mechanics for Treasure\u2019s Atlas mine). This will incentivize collective behaviours to engage in activity that benefits the community.",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"Staking",src:a(9338).Z,width:"504",height:"96"})),(0,i.kt)("li",{parentName:"ol"},"Staking will emit Lost Samurise native token $BUSHO"),(0,i.kt)("li",{parentName:"ol"},"Contribution of additional Treasure resources ($Magic and/or #Treasures) will give each SamuRise boosted veSamuRise that will provide direct benefits to gameplay.")),(0,i.kt)("h2",{id:"tokens-medium-of-exchange-busho-erc-20"},"Tokens: Medium of Exchange $BUSHO ERC-20"),(0,i.kt)("p",null,"The utility of $BUSHO is to provide efficient market functions for all in-game assets. This ERC-20 token will be emitted to wallets according to your veSamuRise score, to the vendor function, and to provide liquidity for a Busho/Magic pool. $BUSHO is a medium of exchange backed by our $MAGIC treasury and subject to monetary policy from the core team to maintain market stability."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"$BUSHO",src:a(8913).Z,width:"1898",height:"818"})),(0,i.kt)("p",null,"*",(0,i.kt)("em",{parentName:"p"},"Values in the diagram represent a theoretical simulation from our model")),(0,i.kt)("p",null,"$BUSHO will launch with an initial supply and features the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The initial supply is tbd, pending additional modeling simulations"),(0,i.kt)("li",{parentName:"ul"},"This is a no cap token with a target deflationary rate of 85% for all emissions (see diagram)"),(0,i.kt)("li",{parentName:"ul"},"$BUSHO is intended to function as a stable coin to facilitate efficient market functions, and we will adjust key tokenomics variables through monetary policy to maintain the circulating supply within a healthy range"),(0,i.kt)("li",{parentName:"ul"},"Daily emissions will be 10k $BUSHO and divided among SamuRise holders according to the Emissions formula above"),(0,i.kt)("li",{parentName:"ul"},"Circulating supply will be spread between holder\u2019s wallets, the in-game vendor, and a $BUSHO/$MAGIC liquidity pool in Treasure\u2019s future AMM")),(0,i.kt)("h2",{id:"tokens-gameplay-chikara-gohan-server-tokenserc-20"},"Tokens: Gameplay $CHIKARA $GOHAN (server tokens/ERC-20)"),(0,i.kt)("p",null,"The worker placement game feature allows SamuRise to choose their yield type depending on their broader factional or solo strategy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Farm")," Action produces $GOHAN and is used in-game to supply warriors and feed peasants"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Train")," Action produces $CHIKARA which is used to level your SamuRise and increase their combat skills"),(0,i.kt)("li",{parentName:"ul"},"In both cases, token yields are modified by their overall boosted veSamuRise value")),(0,i.kt)("h2",{id:"tokens-materials-erc-1155"},"Tokens: #Materials ERC-1155"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Production")," worker placement Action of staked SamuRise will yield ingame #Materials that represent different crafting assets required for the Faction ",(0,i.kt)("strong",{parentName:"p"},"Build")," Order. $BUSHO is necessary for the trading function and allows holders to freely swap between materials. An in-game Vendor will provide a SamuRise only marketplace for these transactions."),(0,i.kt)("p",null,"The known ",(0,i.kt)("em",{parentName:"p"},"#Materials")," are listed here."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Material"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"#wood"),(0,i.kt)("td",{parentName:"tr",align:null},"Used for all building recipes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"#iron"),(0,i.kt)("td",{parentName:"tr",align:null},"Used to boost strength of castles and armour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"#copper"),(0,i.kt)("td",{parentName:"tr",align:null},"Used for temples and theatres")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"#gold"),(0,i.kt)("td",{parentName:"tr",align:null},"Commodity required for temples and threatres and some rare PFP upgrades")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"#silver"),(0,i.kt)("td",{parentName:"tr",align:null},"Commodity required for temples and theatres and some rare PFP upgrades")))),(0,i.kt)("h2",{id:"tokens-quest-items-erc-1155"},"Tokens: Quest Items ERC-1155"),(0,i.kt)("p",null,"Unique items can be found in-game by using the ",(0,i.kt)("strong",{parentName:"p"},"Quest")," Action, and are often required to complete rare crafting recipes for armour, swords and other aesthetic upgrades on your SamuRise. This provides an outlet for solo players to experience and benefit from the SamuRise metaverse. Rumor has it that you may find Bridgeworld #Treasures with the ",(0,i.kt)("strong",{parentName:"p"},"Quest")," or the ",(0,i.kt)("strong",{parentName:"p"},"Production")," Actions as well."),(0,i.kt)("h2",{id:"faucets-and-sinks-creating-a-circular-economy"},"Faucets and Sinks: Creating a Circular Economy"),(0,i.kt)("p",null,"The emission types described above represent the various forms of ",(0,i.kt)("em",{parentName:"p"},"faucets")," we have planned. However, a healthy market requires an equivalent number of ",(0,i.kt)("em",{parentName:"p"},"sinks")," to balance supply and demand forces. Underlying this principle of economics is a deeper need to value the utility that a token offers you. All of our designed ",(0,i.kt)("em",{parentName:"p"},"sinks")," represent in-game actions that must be paid for in order to progress, whether leveling your SamuRise, or paying for actions and crafting recipes."),(0,i.kt)("p",null,"$BUSHO, or $MAGIC at a discounted rate, is required to pay for worker placement actions and duration. It can also be utilized with an in-game vendor to purchase materials that are required for desired building recipes. These examples create a set of dynamic ",(0,i.kt)("em",{parentName:"p"},"sinks")," that will help to avoid excessive inflation or deflation and maintain market equilibrium. We will place heavy emphasis on analytics to monitor and adjust market functions."),(0,i.kt)("p",null,"$CHIKARA, $GOHAN, and #Materials  are intentionally incorporated as ",(0,i.kt)("em",{parentName:"p"},"scarce")," assets to stimulate active game theory optionality and factional coordination. There will never be enough of these resources, and factions will have to make trade-offs through gameplay to manage the consequences. The ",(0,i.kt)("em",{parentName:"p"},"sink")," for $GOHAN is employed to feed your troops and peasants, and successful strategies here will also avoid a Winter revolt, The ",(0,i.kt)("em",{parentName:"p"},"sink")," for $CHIKARA is used to level your SamuRise and their combat skill. Armies with higher boosted $CHIKARA are more effective on the battlefield and will benefit from the Faction\u2019s ",(0,i.kt)("strong",{parentName:"p"},"Attack")," Order."),(0,i.kt)("p",null,"#Materials must be burned for the Faction to successfully ",(0,i.kt)("strong",{parentName:"p"},"Build")," a castle, temple or theatre. Other #treasures or #materials are similarly burned as crafting items for equipment recipes for the SamuRise PFP. Both will have enough scarcity to place a market premium on their acquisition because of the associated awards. Scarcity levels will be monitored closely, because if too rare, key elements of the game will be inaccessible to the small retail holder and we must guard against inadvertantly disincentivizing them."),(0,i.kt)("p",null,"More critical to the general strategy of keeping the market tokenomics in balance is the planned configurability that is a core design feature of our tokenomics approach. All faucets and sinks are configurable and can be changed via smart contract function calls. Micro adjustments will be introduced as Lore elements that impact all game players, and Macro adjustments will be introduced via the Seasonal milestones and the gradual incorporation of new game design elements."))}d.isMDXComponent=!0},9338:function(e,t){t.Z="data:image/png;base64,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"},8913:function(e,t,a){t.Z=a.p+"assets/images/tokenomics-busho-512e039683d7e50f5b6a5c2b600bed72.png"}}]);