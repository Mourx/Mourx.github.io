(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(81),i=a.n(o),l=(a(105),a(9)),c=(a(106),a(161)),s=a(151),u=a(149),m=a(163),h=a(164),d=a(159),f=a(156),p=a(165),E=a(147),g=a(166),v=a(150),y=a(167),w=a(168),b=a(44),k=a.n(b),x=a(45),C=a.n(x),S=a(17),T=a(3),L=a(154),A=a(155),O=a(153),G=a(157),R=a(158),D=a(160);function j(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],i=a[1],c=new XMLHttpRequest;return c.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.responseText,t=JSON.parse(e);t.hasOwnProperty("image_uris")?i(t.image_uris.normal):i(t.card_faces[0].image_uris.normal)}},c.open("GET","https://api.scryfall.com/cards/named?fuzzy="+e.previewCard,!0),c.send(),r.a.createElement(G.a,null,r.a.createElement(R.a,null,r.a.createElement(d.a,{variant:"h6",color:"text.secondary",gutterBottom:!0},e.deckname),r.a.createElement(D.a,{component:"img",image:o,alt:e.deckname}),r.a.createElement(d.a,{sx:{textAlign:"center",fontSize:18},component:"div"},e.description),r.a.createElement(O.a,{onClick:function(){e.functions.setDecklist(e.file),e.functions.setOpenDialog(!0)}}," ","View Decklist")))}function M(e){return r.a.createElement(L.a,{container:!0,sx:{overflow:"scroll"}},r.a.createElement(L.a,{item:!0,xs:12,display:"grid",sx:{gridTemplateColumns:{md:"1fr 1fr 1fr 1fr 1fr"}}},r.a.createElement(j,{deckname:"White Hatebears",previewCard:"Thalia Guardian of Thraben",file:"White",functions:e}),r.a.createElement(j,{deckname:"Blue Tappers",previewCard:"Aboshan, Cephalid Emperor",file:"Blue",functions:e}),r.a.createElement(j,{deckname:"Black Instants",previewCard:"Toshiro Umezawa",file:"Black",functions:e}),r.a.createElement(j,{deckname:"Red Devils",previewCard:"Zurzoth",file:"Red",functions:e}),r.a.createElement(j,{deckname:"Green Stompy",previewCard:"Selvala, heart of the wilds",file:"Green",functions:e}),r.a.createElement(j,{deckname:"WU Control",previewCard:"Kwain",file:"Azorius",functions:e}),r.a.createElement(j,{deckname:"UB Mischief",previewCard:"Yuriko",file:"Dimir",functions:e}),r.a.createElement(j,{deckname:"BR Group Slug",previewCard:"Tor Wauki, the younger",file:"Rakdos",functions:e}),r.a.createElement(j,{deckname:"RG Artifacts",previewCard:"Meria, Scholar",file:"Gruul",functions:e}),r.a.createElement(j,{deckname:"GW 1/1s",previewCard:"Bess",file:"Selesnya",functions:e}),r.a.createElement(j,{deckname:"WB Lifegain",previewCard:"Karlov of the ghost",file:"Orzhov",functions:e}),r.a.createElement(j,{deckname:"UR Wizards",previewCard:"Adeliz",file:"Izzet",functions:e}),r.a.createElement(j,{deckname:"BG Squirrels",previewCard:"Chatterfang",file:"Goglari",functions:e}),r.a.createElement(j,{deckname:"RW Gold Golems",previewCard:"General Ferrous",file:"Boros",functions:e}),r.a.createElement(j,{deckname:"GU Frog Self-Mill",previewCard:"Grolnok",file:"Simic",functions:e}),r.a.createElement(j,{deckname:"Bant Flicker",previewCard:"Lagrella",file:"Bant",functions:e}),r.a.createElement(j,{deckname:"Esper Zombies",previewCard:"Varina",file:"Esper",functions:e}),r.a.createElement(j,{deckname:"Grixis 40k Precon",previewCard:"Abbadon the despoiler",file:"Abbaddon",functions:e}),r.a.createElement(j,{deckname:"Jund Value",previewCard:"Slimefoot and squee",file:"Jund",functions:e}),r.a.createElement(j,{deckname:"Naya Go-Wide",previewCard:"Kitt Kanto",file:"Naya",functions:e}),r.a.createElement(j,{deckname:"Mardu Legends",previewCard:"Dihada, Bender of wills",file:"Mardu",functions:e}),r.a.createElement(j,{deckname:"Temur Snakes",previewCard:"Xyris",file:"Temur",functions:e}),r.a.createElement(j,{deckname:"Abzan Keywords",previewCard:"Kathril",file:"Abzan",functions:e}),r.a.createElement(j,{deckname:"Jeskai Voltron",previewCard:"Elsha of the infinite",file:"Jeskai",functions:e}),r.a.createElement(j,{deckname:"Sultai Recursion",previewCard:"Muldrotha the gravetide",file:"Sultai",functions:e}),r.a.createElement(j,{deckname:"5 Colour Legends",previewCard:"Sisay, weatherlight",file:"Sisay",functions:e}),r.a.createElement(j,{deckname:"WUBR Artifacts",previewCard:"Breya, etherium shaper",file:"Breya",functions:e}),r.a.createElement(j,{deckname:"Colourless Kozi",previewCard:"Kozilek the great distortion",file:"Nono",functions:e}),r.a.createElement(j,{deckname:"Black Reanimator",previewCard:"Junji",file:"Junji",functions:e}),r.a.createElement(j,{deckname:"Land Destruction",previewCard:"Hazezon, shaper of sand",file:"Hazezon",functions:e})))}var B=a(19);function F(){F=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),l=new S(r||[]);return n(i,"_invoke",{value:b(e,a,l)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(A){return{type:"throw",arg:A}}}e.wrap=s;var m={};function h(){}function d(){}function f(){}var p={};c(p,o,function(){return this});var E=Object.getPrototypeOf,g=E&&E(E(T([])));g&&g!==t&&a.call(g,o)&&(p=g);var v=f.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(r,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,l)},function(e){n("throw",e,i,l)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,l)})}l(c.arg)}(n,o,r,i)})}return r=r?r.then(i,i):i()}})}function b(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return L()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=k(i,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function k(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=f,n(v,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(w.prototype),c(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new w(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(v),c(v,l,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),C(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;C(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:T(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function H(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(),u=Object(l.a)(s,2),m=u[0],h=u[1],f=Object(n.useState)(""),p=Object(l.a)(f,2),E=p[0],g=p[1];function y(){return(y=Object(B.a)(F().mark(function e(){var t,a,n;return F().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log(m),t=[],a=m.split("\n"),n=0;n<a.length;n++)t=t.concat(a[n]),console.log(a[n]);return console.log(t),i(t),e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e){for(var t=e.split(" "),a="",n=1;n<t.length;n++)a=a.concat(t[n]+" ");var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.responseText,t=JSON.parse(e);t.hasOwnProperty("image_uris")?g(t.image_uris.normal):g(t.card_faces[0].image_uris.normal)}},r.open("GET","https://api.scryfall.com/cards/named?fuzzy="+a,!0),r.send(),console.log(a)}return Object(n.useEffect)(function(){m&&function(){y.apply(this,arguments)}()},[m]),Object(n.useEffect)(function(){fetch("/decklists/"+e.decklist+".txt",{headers:{"Content-Type":"text",Accept:"text"}}).then(function(e){return e.text().then(function(e){h(e)})})}),Object(n.useEffect)(function(){o[0]&&(console.log(o),w(o[0]))},[o]),r.a.createElement(c.a,null,r.a.createElement(L.a,{container:!0,display:"grid",sx:{direction:"column",justifyContent:"center",alignItems:"center",gridTemplateColumns:{md:"1fr 1fr"}}},r.a.createElement(L.a,{item:!0,display:"grid",sx:{height:"fit-content",gridTemplateColumns:{md:"1fr 1fr 1fr"}}},o.map(function(e,t){return r.a.createElement(v.a,{disablePadding:!0,key:t,onMouseEnter:function(){w(e)}},r.a.createElement(d.a,null,e))})),r.a.createElement(L.a,{item:!0},r.a.createElement("img",{src:E,style:{maxWidth:"100%",maxHeight:"100%"}}))))}function W(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1];return Object(n.useEffect)(function(){document.title="Commander Decks"},[]),r.a.createElement(c.a,null,r.a.createElement(L.a,{container:!0},r.a.createElement(M,{setDecklist:m,setOpenDialog:o})),r.a.createElement(A.a,{open:a,fullWidth:!0,maxWidth:"lg"},r.a.createElement(H,{decklist:u}),r.a.createElement(O.a,{onClick:function(){o(!1)}},"Close")))}function I(){return Object(n.useEffect)(function(){document.title="Recipes"},[]),r.a.createElement(c.a,null,"Recipes")}function P(e){return r.a.createElement(L.a,{container:!0,sx:{overflow:"scroll"}},r.a.createElement(L.a,{item:!0,xs:12,display:"grid",sx:{gridTemplateColumns:{md:"1fr 1fr 1fr 1fr"}}},r.a.createElement(j,{deckname:"Goblins",previewCard:"Goblin Bushwacker",description:"Use low cost Goblins to quickly overwhelm your opponent.",file:"Goblins",functions:e}),r.a.createElement(j,{deckname:"Izzet Delver",previewCard:"Delver of Secrets",description:"Flip Delver of Secrets into an early flying threat, then follow up with burn spells.",file:"Delver",functions:e}),r.a.createElement(j,{deckname:"BR Vampires",previewCard:"Stromkirk Captain",description:"Play a steady stream of vampires, that only get stronger in number.",file:"Vampires",functions:e}),r.a.createElement(j,{deckname:"Elfball",previewCard:"Elvish Mystic",description:"Play an elf, make some mana. Play another elf, make some more mana.",file:"Elves",functions:e}),r.a.createElement(j,{deckname:"BG Saprolings",previewCard:"Slimefoot the stowaway",description:"Sticky saprolings are hard to wipe off the board. Follow up with a Mycoloth to end the game.",file:"Saprolings",functions:e}),r.a.createElement(j,{deckname:"UG Frogs",previewCard:"Grolnok",description:"Attack with frogs, and gain massive card advantage from the croak counters.",file:"Frogs",functions:e}),r.a.createElement(j,{deckname:"WG Cats",previewCard:"Kaheera",description:"Cute cats <3",file:"Cats",functions:e}),r.a.createElement(j,{deckname:"Mardu Allies",previewCard:"Kalastria Healer",description:"Rally abilities strengthen your position with each ally played. Play March From the Tomb for up to 16 damage.",file:"Allies",functions:e}),r.a.createElement(j,{deckname:"WU Control",previewCard:"Approach of the second sun",description:"Stall until you can cast Approach twice.",file:"Approach",functions:e}),r.a.createElement(j,{deckname:"B Tron",previewCard:"Urza's Tower",description:"Get those Urza lands out fast, and play a big spell like Torment of Hailfire or Sheoldred.",file:"Tron",functions:e}),r.a.createElement(j,{deckname:"WR Control",previewCard:"Nahiri, harbinger",description:"Kill all their creatures until you can turn a token into Emrakul with Indomitable Creativity.",file:"Emrakul",functions:e}),r.a.createElement(j,{deckname:"Sultai Titan's Nest",previewCard:"Titan's Nest",description:"All your cards effectively gain delve. Cheat mana costs and keep playing more cards than your opponent.",file:"Titan's Nest",functions:e}),r.a.createElement(j,{deckname:"Electrobalance",previewCard:"Restore Balance",description:"Combo into casting Restore Balance and leave your opponent with nothing, and yourself with a 9/7.",file:"Electrobalance",functions:e}),r.a.createElement(j,{deckname:"Aetherflux Storm",previewCard:"Aetherflux Reservoir",description:"Make your artifacts cost nothing, then cast them to draw another one. With Aetherflux out, reach 50 life and blast your opponent.",file:"Aetherflux",functions:e}),r.a.createElement(j,{deckname:"Scapeshift",previewCard:"Valakut, the molten pinnacle",description:"Cast Scapeshift and bring in 6-7 Mountains and Valakut for 18-21 damage. Another Valakut means double damage.",file:"Scapeshift",functions:e}),r.a.createElement(j,{deckname:"Enduring Renewal",previewCard:"Enduring Renewal",description:"With Enduring Renewal out, cast a 0/0 or self-sacrificing goblin for a huge storm count, then Grapeshot to end.",file:"Renewal",functions:e})))}function z(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1];return Object(n.useEffect)(function(){document.title="Modern Decks"},[]),r.a.createElement(c.a,null,r.a.createElement(L.a,{container:!0},r.a.createElement(P,{setDecklist:m,setOpenDialog:o})),r.a.createElement(A.a,{open:a,fullWidth:!0,maxWidth:"lg"},r.a.createElement(H,{decklist:u}),r.a.createElement(O.a,{onClick:function(){o(!1)}},"Close")))}function _(){return r.a.createElement(c.a,null,r.a.createElement(d.a,{variant:"h1"},"Hello welcome to my new website"))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"\u2003\u2003")}function U(){return r.a.createElement(c.a,{sx:{maxWidth:"80vh"}},r.a.createElement(d.a,{variant:"h1"},"History of Santryl")," ",r.a.createElement(d.a,null,"Santryl's history started when the six ancient Gods agreed on a collective experiment. Together, they blew apart the planes of an empty world, and oversaw the resultant patches of life. Together with the Giants, their first creations, they tended the new planes."),r.a.createElement(d.a,{variant:"h2"},"Formation"),r.a.createElement(d.a,null,"One of the earliest continents to emerge after the planar separation, Santryl was the result of the Giants pulling together parts of the broken world and forging them into one landmass. From there they oversaw the gradual introduction of other species by the Gods, and supervised the development of the landscapes, ensuring good conditions for the new cultures to thrive. The Giants were proactive in these cultures for centuries, before leaving them to their own devices. They retreated to High Mount, and took residence deep in the caverns below. They remained available for counsel, and occasionally stirred to quell wars, but their interventions became fewer as the years went by.",r.a.createElement(N,null),"Now they seldom leave their caverns, claiming their role as complete. They entrust the Dwarves with their locations, and whilst they don't encourage visitors, they will still willingly give advice to those that seek it."),r.a.createElement(d.a,null,r.a.createElement(N,null)," The remaining species, most prominently the Dwarves, Elves, Humans, Rana, and various Goblinoids, settled into their respective cultures.",r.a.createElement(N,null),"The Dwarves remained in High Mount, the mountains they claim to be the centre of the world. There they built citadels and towers, halls and towns, mines and excavations. They mostly keep to themselves, and have managed to maintain neutrality through the continent's various wars.",r.a.createElement(N,null)," The Elves split in two; Some wanted to roam free the lands of Santryl, and became renowned wanderers, sharing stories and wisdom from across the continent. The others settled in the south west of Santryl, claiming lands for their own.",r.a.createElement(N,null),"The Humans mostly stuck together, and together with the Halflings, built an industrious empire on the various metals in the north. What metals they didn't have access to they traded from the Dwarves, all to further their crafts and inventions. In the last century they have managed to build ships capable of travelling the great seas, and have been sending expeditionary forces off to seek new riches.",r.a.createElement(N,null),"The Rana found a natural wonder: hot springs in the east, that are looked after by a lone Giant. Keeping their existence a secret, the Rana tend to the alpine forest with great care and caution. They welcome those that are deemed capable of showing restraint and wisdom, and reject those that they suspect would lead to the destruction of the springs.",r.a.createElement(N,null),"The Goblinoids, numerous in their variations, spread out across Santryl. Though diverse in their forms, they remain singular in their roles as menaces to whichever culture happens to reside nearby. The lowly Goblin sticks to their pack, looting and scavenging for anything they can get their hands on. The Rock Goblin, hidden in the mountains, disrupt excavation sites and gnaw on the gemstones that decorate Dwarven architecture. The Hobgoblin fights to lead their warband, warring mostly with other Hobgoblin bands for something they've since forgotten about. The Bugbear, wisest of all Goblinoids, makes themself available for hire, as protection from threats on the road, such as other pesky Goblinoids."),r.a.createElement(d.a,{variant:"h2"},"Today's Nations")," ",r.a.createElement(d.a,null,"In the thousands of years since the formation of Santryl as a continent, various cultures have come and gone, each warring and replacing one another. The spread of each species has stayed mostly consistent, but as time progresses, the more secluded species like the Rana drift into rumour, and the Giants into myth and legend. Now there remains four main nations in Santryl: The Unvariant Empire, The Galls, High Mount, and the Croaking conclave."))}function q(){return r.a.createElement(c.a,{sx:{maxWidth:"50%"}},r.a.createElement(d.a,{variant:"h1"},"Rule Differences"),r.a.createElement(d.a,{variant:"h2"},"Combat Actions"),r.a.createElement(d.a,null,"All characters may take the following Combat Actions. Unless specified, each Combat Action is taken as an Action."),r.a.createElement(d.a,null,r.a.createElement("br",null)),r.a.createElement(c.a,null,r.a.createElement(d.a,{variant:"h4"},"Embolden"),r.a.createElement(d.a,null,"You reassure your allies. Choose up to three creatures that can hear you within 60ft. Those creatures gain 1 level of Resolve until the end of their next turn."),r.a.createElement(d.a,{variant:"h4"},"Feint"),r.a.createElement(d.a,null,"You pretend to attack from a certain angle, confusing the enemy at the cost of damage. Feint is a Special Attack Action that replaces one Melee Attack. When you Feint, make a Sleight of Hand (Dexterity) check with Advantage, with the DC of the check equal to the target's AC.",r.a.createElement(N,null)," If you succeed, choose a weapon you hold with the Light property. You count as having hit the target with an attack with that weapon, but instead of rolling damage, you deal 1 damage.",r.a.createElement(N,null)," If you have any additional damage effects (such as Divine Smite or Sneak Attack), roll their damage as normal."),r.a.createElement(d.a,{variant:"h4"},"Tackle"),r.a.createElement(d.a,null,"You charge head first at an enemy in an attempt to knock them down. Choose target creature within 5ft. You make an Athletics check contested by that creature's Athletics or Acrobatics check (target chooses). If you started your turn in a different location, you gain +1 to your Athletics check for each 5ft moved. If the target is larger than you, it gains Advantage on its check. If the target is smaller than you, you gain Advantage on your check.",r.a.createElement(N,null),"On a success, you and the target are knocked Prone, your speed becomes 0 until your next turn, and the target takes Bludgeoning damage equal to the difference in the contested skill checks, to a maximum of your Athletics Modifier."),r.a.createElement(d.a,{variant:"h4"},"Taunt"),r.a.createElement(d.a,null,"You shout a taunt at an enemy creature within 30ft that can hear you. That creature must make a Charisma Saving Throw. The DC is equal to your Passive Intimidation (10 + Intimidation Modifier). ",r.a.createElement(N,null),"On a failure, on that creature's next turn, if that creature makes any attacks or uses any harmful magical effects, it must target or endeavour to affect you if possible.")),r.a.createElement(d.a,{variant:"h2"},"Combat Skill Checks"),r.a.createElement(d.a,null,"A creature may be able to use their skills to help in combat. As an action, they can attempt to use any skill that will affect a creature, positively or negatively. ",r.a.createElement(N,null),"Alternatively, as a Bonus Action, they can attempt to use any skill in order to gain information.",r.a.createElement(N,null),r.a.createElement(d.a,{sx:{paddingLeft:4}},"\u2022 ",r.a.createElement("em",null,"Example"),": An Action is required for an attempt to intimidate an enemy into being frightened, or to traverse difficult obstacles (not Difficult Terrain) using Acrobatics."),r.a.createElement(d.a,{sx:{paddingLeft:4}},"\u2022",r.a.createElement("em",null,"Example:")," A Bonus Action is required for an attempt to use history knowledge, or perception, to tell what kind of creature and/or weaknesses they are fighting.")),r.a.createElement(d.a,null,r.a.createElement("br",null)),r.a.createElement(d.a,{variant:"h2"},"Constitution"),r.a.createElement(d.a,null,"Do not add your Constitution Modifier to your Hit Points Total. Instead, all characters gain the maximum amount of Hit Points at each level.",r.a.createElement(N,null),"You may use your Constitution Modifier in place of your Dexterity Modifier when determining your Base Armour Class.",r.a.createElement(N,null),"Constitution now also interacts with Exhaustion (see below)."),r.a.createElement(d.a,{variant:"h2"},"Critical Hits"),r.a.createElement(d.a,null,"When you score a critical hit, you roll twice as many damage dice as normal."),r.a.createElement(d.a,{variant:"h2"},"Currency"),r.a.createElement(d.a,null,"In Santryl, currency is more standardised across the continent. Mundane equipment and tools rarely sell above 75g, and magic items generally sit in the 300-500g range for low-medium power items. As such, treasure gained is likely to be lower in coinage than in other areas.",r.a.createElement(N,null)," This will also increase the relative value of gemstones for spell components (notably Revivify), and increase the importance of good currency management. This also allows for the earlier purchasing of non-magical amour such as Platemail. ",r.a.createElement(N,null),"A good value of reward for finishing tasks, missions, and quests is around 10 x Combined Player Level for the whole party."),r.a.createElement(d.a,{variant:"h2"},"Exhaustion and Resolve"),r.a.createElement(d.a,null,"When a creature suffers Exhaustion, it subtracts 1 from any d20 roll made per level of Exhaustion. One level of exhaustion is removed on a Long Rest. ",r.a.createElement(N,null),"When a creature gains Resolve, it adds 1 to any d20 roll made per level of Resolve. All levels of Resolve are lost after any rest. ",r.a.createElement(N,null),"The maximum amount of Exhaustion a creature can have is equal to 5 + 5 times its Constitution Modifier. Should it have suffer more Exhaustion, it immediately drops to 0 Hit Points. Creatures that would make Death Saving Throws as a result of this do so at disadvantage. ",r.a.createElement(N,null),"It is possible to suffer maximum Exhaustion whilst having levels of Resolve. They may mitigate each other, but do not cancel out."),r.a.createElement(d.a,{variant:"h2"},"Flanking"),r.a.createElement(d.a,null,"If a creature is within 5ft of an enemy creature, and has a friendly creature also within 5ft of the enemy creature, if they are not within 5ft of each other, they get +2 to Melee Attacks and Contested Ability Checks against the enemy creature."),r.a.createElement(d.a,{variant:"h2"},"Healing Potions"),r.a.createElement(d.a,null,"Healing Potions may be used as an Action for their full healing. Additionally, as a Bonus Action, a creature may use the potion on themselves. When used this way, only heal for the amount rolled, without any other listed bonuses."),r.a.createElement(d.a,{variant:"h2"},"Spell Scroll Casting"),r.a.createElement(d.a,null,"Any creature may attempt to cast any spell from a scroll. To do this, they must make an Arcana check, the DC of which is 10 + Spell Level.",r.a.createElement(d.a,{sx:{paddingLeft:4}},"\u2022 If the creature has any Spell Slots, they have advantage on this check.",r.a.createElement("br",null)," \u2022 If the creature knows this Spell, they add their Proficiency Bonus. ",r.a.createElement("em",null,"(even if already proficient in Arcana)"),r.a.createElement("br",null)," \u2022 If the creature has this Spell prepared, and it is of 3rd level or lower, they automatically pass the check."),"When casting a spell this way, the creature uses their Intelligence as their Spellcasting Ability. If the result of the Arcana check is 10 higher than the DC, the scroll is preserved. Otherwise, the scroll is consumed upon use. Scrolls are consumed on a failed attempt, as the magic escapes its binding."))}var K=a(85),J=Object(K.a)({palette:{mode:"light"},typography:{fontFamily:"liberation serif",fontSize:14}});var V=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useState(!1),b=Object(l.a)(i,2),x=b[0],L=b[1],A=r.a.useState(!1),O=Object(l.a)(A,2),G=O[0],R=O[1],D=r.a.useState(!1),j=Object(l.a)(D,2),M=j[0],B=j[1],F=r.a.useState(!1),H=Object(l.a)(F,2),P=H[0],N=H[1],K=r.a.useState(!1),V=Object(l.a)(K,2),Y=V[0],X=V[1];return Object(n.useEffect)(function(){document.title="Morx's Stuff :)"},[]),r.a.createElement(S.a,null,r.a.createElement(c.a,{display:"flex"},r.a.createElement(s.a,null),r.a.createElement(u.a,{theme:J},r.a.createElement(m.a,{position:"fixed",sx:{width:"calc(100% - ".concat(20,"vw)"),ml:"".concat(20,"vw")}},r.a.createElement(h.a,null,r.a.createElement(d.a,{variant:"h6",noWrap:!0,component:"div"},"This is always here wow"))),r.a.createElement(f.a,{sx:{width:"20vw",flexShrink:0,"& .MuiDrawer-paper":{width:"20vw",minHeight:"100vh",boxSizing:"border-box"}},variant:"permanent",anchor:"left"},r.a.createElement(h.a,null,r.a.createElement(d.a,{sx:{paddingLeft:"10%"},variant:"h6",noWrap:!0,component:"div"},"What we doin' now?")),r.a.createElement(p.a,{sx:{paddingLeft:"4%"}},r.a.createElement(E.a,{to:"/Recipes",component:S.b},r.a.createElement(d.a,null,"Recipes")),r.a.createElement(E.a,{onClick:function(){o(!a)}},r.a.createElement(d.a,null,"Games"),a?r.a.createElement(k.a,null):r.a.createElement(C.a,null)),r.a.createElement(g.a,{in:a},r.a.createElement(p.a,null,["Forty Frogs","Shapez"].map(function(e,t){return r.a.createElement(v.a,{key:e,disablePadding:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,null),r.a.createElement(w.a,null,r.a.createElement(d.a,null,e))))}))),r.a.createElement(E.a,{onClick:function(){R(!G)}},r.a.createElement(d.a,null,"TTRPG Info "),G?r.a.createElement(k.a,null):r.a.createElement(C.a,null)),r.a.createElement(g.a,{in:G},r.a.createElement(p.a,null,r.a.createElement(v.a,{sx:{paddingLeft:"1vw"}},r.a.createElement(E.a,{onClick:function(){X(!Y)}},r.a.createElement(d.a,null,"Santryl"),Y?r.a.createElement(k.a,null):r.a.createElement(C.a,null))),r.a.createElement(g.a,{in:Y},r.a.createElement(p.a,null,r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/History",component:S.b},r.a.createElement(d.a,null,"History"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/Faith",component:S.b},r.a.createElement(d.a,null," Faith and Religion"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/Gallia",component:S.b},r.a.createElement(d.a,null,"Gallia"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/UnvariantEmpire",component:S.b},r.a.createElement(d.a,null,"Unvariant Empire"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/CroakingConclave",component:S.b},r.a.createElement(d.a,null,"Croaking Conclave"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/HighMount",component:S.b},r.a.createElement(d.a,null,"High Mount"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Santryl/TheGoblins",component:S.b},r.a.createElement(d.a,null,"The Goblins"))))),r.a.createElement(v.a,{sx:{paddingLeft:"1vw"},onClick:function(){B(!M)}},r.a.createElement(E.a,null,r.a.createElement(d.a,null,"D&D 5e Homebrew"),M?r.a.createElement(k.a,null):r.a.createElement(C.a,null))),r.a.createElement(g.a,{in:M},r.a.createElement(p.a,null,r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Rules",component:S.b},r.a.createElement(d.a,null,"Rule Differences"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Backgrounds",component:S.b},r.a.createElement(d.a,null,"Backgrounds"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Race",component:S.b},r.a.createElement(d.a,null,"Race"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Feats",component:S.b},r.a.createElement(d.a,null,"Feats"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Classes",component:S.b},r.a.createElement(d.a,null,"Classes"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Spells",component:S.b},r.a.createElement(d.a,null,"Spells"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Factions",component:S.b},r.a.createElement(d.a,null,"Factions"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Treasure",component:S.b},r.a.createElement(d.a,null,"Treasure"))),r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Dnd/Bestiary",component:S.b},r.a.createElement(d.a,null,"Bestiary"))))),r.a.createElement(v.a,{sx:{paddingLeft:"1vw"},onClick:function(){N(!P)}},r.a.createElement(E.a,null,r.a.createElement(d.a,null,"Beyond The Veil"),P?r.a.createElement(k.a,null):r.a.createElement(C.a,null))),r.a.createElement(g.a,{in:P},r.a.createElement(p.a,null,r.a.createElement(v.a,{sx:{paddingLeft:"2vw"}},r.a.createElement(E.a,{to:"/Btv/Rules",component:S.b},r.a.createElement(d.a,null,"Basic Rules"))))))),r.a.createElement(E.a,{onClick:function(){L(!x)}},r.a.createElement(d.a,null,"Magic Decks"),x?r.a.createElement(k.a,null):r.a.createElement(C.a,null)),r.a.createElement(g.a,{in:x},r.a.createElement(p.a,null,r.a.createElement(v.a,{sx:{paddingLeft:"1vw"}},r.a.createElement(E.a,{to:"/Magic/Commander",component:S.b},r.a.createElement(d.a,null,"Commander"))),r.a.createElement(v.a,{sx:{paddingLeft:"1vw"}},r.a.createElement(E.a,{to:"/Magic/Modern",component:S.b},r.a.createElement(d.a,null,"Modern"))))))),r.a.createElement(c.a,{component:"main",sx:{flexGrow:1,p:3}},r.a.createElement(h.a,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",element:r.a.createElement(_,null)}),r.a.createElement(T.a,{path:"/Magic/Commander",element:r.a.createElement(W,null)}),r.a.createElement(T.a,{path:"/Magic/Modern",element:r.a.createElement(z,null)}),r.a.createElement(T.a,{path:"/Recipes",element:r.a.createElement(I,null)}),r.a.createElement(T.a,{path:"/Santryl/History",element:r.a.createElement(U,null)}),r.a.createElement(T.a,{path:"/Dnd/Rules",element:r.a.createElement(q,null)}))))))},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,169)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null))),Y()},97:function(e,t,a){e.exports=a(110)}},[[97,1,2]]]);
//# sourceMappingURL=main.5b49ae36.chunk.js.map