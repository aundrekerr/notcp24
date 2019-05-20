(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),l=(a(51),a(52),a(53),a(2)),i=a(3),o=a(5),u=a(4),m=a(6),d=a(14),f=a.n(d),h=(a(56),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"app__header"},r.a.createElement("div",{className:"logo__wrapper"},r.a.createElement("img",{src:"/images/cp24-logo_white.png",alt:"CP24 Logo"})),r.a.createElement("aside",{className:"header-aside"},r.a.createElement(f.a,{format:"ddd, MMM DD"},new Date)))}}]),t}(r.a.Component)),p=(a(57),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.template;return"video"===e?r.a.createElement("div",{className:"loading-placeholder__wrapper"},r.a.createElement(g,null)):"forecast-city-select"===e?r.a.createElement("div",{className:"loading-placeholder__wrapper"},r.a.createElement(v,null)):"forecast-list"===e?r.a.createElement("div",{className:"loading-placeholder__wrapper"},r.a.createElement(E,null)):"traffic-intro"===e?r.a.createElement("div",{className:"loading-placeholder__wrapper"},r.a.createElement(w,null)):"camera-jump"===e?r.a.createElement("div",{className:"loading-placeholder__wrapper"},r.a.createElement(b,null)):"newsfeed"===e?r.a.createElement("div",{className:"loading-placeholder__wrapper"},r.a.createElement(N,null)):"yerrrrrrrrrrr"}}]),t}(r.a.Component));function g(){return r.a.createElement("div",{className:"loading__video"},r.a.createElement("span",null,r.a.createElement("img",{src:"/images/loading-icons/streamline-icon-vintage-tv-4@24x24.svg",alt:"Video Icon"})))}function v(){return r.a.createElement("div",{className:"loading__city-select"},r.a.createElement("div",{className:"fake-title-block"}),r.a.createElement("div",{className:"fake-select"}))}function E(){return r.a.createElement("div",{className:"loading__forecast-list"},r.a.createElement("div",{className:"fake-forecast-block"}),r.a.createElement("div",{className:"fake-forecast-block"}),r.a.createElement("div",{className:"fake-forecast-block"}),r.a.createElement("div",{className:"fake-forecast-block"}),r.a.createElement("div",{className:"fake-forecast-block"}),r.a.createElement("span",null,r.a.createElement("img",{src:"/images/loading-icons/streamline-icon-rain-umbrella-sun@24x24.svg",alt:"Weather Icon"})))}function w(){return r.a.createElement("div",{className:"loading__traffic-intro"},r.a.createElement("div",{className:"fake-title-block"}),r.a.createElement("div",{className:"fake-select"}))}function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading__camera-jump"}),r.a.createElement("div",{className:"loading__camera-slider"}),r.a.createElement("span",null,r.a.createElement("img",{src:"/images/loading-icons/streamline-icon-road-traffic-lights@24x24.svg",alt:"Traffic Icon"})))}function N(){return r.a.createElement("div",{className:"loading__newsfeed"},r.a.createElement("span",null,r.a.createElement("img",{src:"/images/loading-icons/streamline-icon-newspaper@24x24.svg",alt:"Newsfeed Icon"})))}a(58);var y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showExtra:"hide"},a.getWindDegrees=function(e){switch(!0){case e>=354.375||e<=5.625:return"N";case e>5.625&&e<=16.875:return"NbE";case e>16.875&&e<=28.125:return"NNE";case e>28.125&&e<=39.375:return"NEbN";case e>39.375&&e<=50.625:return"NE";case e>50.625&&e<=61.875:return"NEbE";case e>61.875&&e<=73.125:return"ENE";case e>73.125&&e<=84.375:return"EbN";case e>84.375&&e<=95.625:return"E";case e>95.625&&e<=106.875:return"EbS";case e>106.875&&e<=118.125:return"ESE";case e>118.125&&e<=129.375:return"SEbE";case e>129.375&&e<=140.625:return"SE";case e>140.625&&e<=151.875:return"SEbS";case e>151.875&&e<=163.125:return"SSE";case e>163.125&&e<=174.375:return"SbE";case e>174.375&&e<=185.625:return"S";case e>185.625&&e<=196.875:return"SbW";case e>196.875&&e<=208.125:return"SSW";case e>208.125&&e<=219.375:return"SWbS";case e>219.375&&e<=230.625:return"S";case e>230.625&&e<=241.875:return"SWbW";case e>241.875&&e<=253.125:return"WSW";case e>253.125&&e<=264.375:return"WbS";case e>264.375&&e<=275.625:return"W";case e>275.625&&e<=286.875:return"WbN";case e>286.875&&e<=298.125:return"WNW";case e>298.125&&e<=309.375:return"NWbN";case e>309.375&&e<=320.625:return"W";case e>320.625&&e<=331.875:return"WbN";case e>331.875&&e<=343.125:return"WNW";case e>343.125&&e<=354.375:return"NWbN";default:return"!"}},a.checkTime=function(e){switch(new Date(1e3*e).getHours()){case 0:case 1:case 2:case 3:case 4:case 5:return"NITE";case 6:case 7:case 8:case 9:case 10:case 11:case 12:return"MORN";case 13:case 14:case 15:case 16:case 17:case 18:case 19:return"AFT";case 20:case 21:case 22:case 23:case 24:case 25:case 26:return"EVE";default:return"YERRRRRR"}},a.toggleExtra=function(){a.setState(function(e){return{showExtra:"hide"===e.showExtra?"show":"hide"}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showExtra,a=this.props,n=a.forecast,c=a.forecastTime;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"forecast ".concat(t),onClick:function(){return e.toggleExtra(t)}},r.a.createElement("span",{className:"forecast-time"},"week"===c?r.a.createElement(f.a,{format:"ddd"},n.dt_txt):this.checkTime(n.dt)),r.a.createElement("div",{className:"forecast-icon"},r.a.createElement("img",{src:"/images/weather-icons/"+n.weather[0].icon+".png",alt:n.weather[0].description})),r.a.createElement("div",{className:"forecast-info"},r.a.createElement("span",{className:"temperature"},Math.round(n.main.temp))),r.a.createElement("div",{className:"forecast-extra"},r.a.createElement("span",{className:"forecast-time"},"week"===c?r.a.createElement(f.a,{format:"dddd"},n.dt_txt):this.checkTime(n.dt)),r.a.createElement("div",{className:"forecast-extra__content"},r.a.createElement("div",{className:"temperature"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"/images/weather-icons/"+n.weather[0].icon+".png",alt:n.weather[0].description})),r.a.createElement("span",null,n.main.temp,r.a.createElement("sup",null,"\u2103"))),r.a.createElement("ul",null,r.a.createElement("li",{className:"description"},n.weather[0].description),r.a.createElement("li",{className:"wind"},r.a.createElement("span",{className:"speed"},Math.round(3.6*n.wind.speed),r.a.createElement("sup",null,"km/h"),r.a.createElement("span",{className:"direction"},this.getWindDegrees(n.wind.deg)))),r.a.createElement("li",{className:"humidity"},r.a.createElement("span",null,n.main.humidity,r.a.createElement("sup",null,"%"))))))))}}]),t}(r.a.Component);a(31);function k(e){var t=e.forecast;e.checkTime,e.toggleForecast,e.forecastExtra,e.toggleForecastExtra;return r.a.createElement("div",{className:"forecast-list"},t.map(function(e){return r.a.createElement(y,{key:e.dt,forecast:e,forecastTime:"day"})}))}function _(e){var t=e.forecast;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"forecast-list"},t.map(function(e){return r.a.createElement(y,{key:e.dt,forecast:e,forecastTime:"week"})})))}a(59);var S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentLocation,a=e.cityList,n=e.changeCity;return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{className:"city-select",onChange:n,value:t},a.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),r.a.createElement("span",{className:"helper"}))}}]),t}(r.a.Component),O=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_WEATHER_API_KEY:"6cb182eedf908415e4466ed00e307b5c",REACT_APP_YOUTUBE_API_KEY:"AIzaSyAoKc4I31dfu5FxVl7DrfSnMJ7e9d1SEx0"}),C=O.REACT_APP_WEATHER_API_KEY,j=O.REACT_APP_YOUTUBE_API_KEY,x=a(60);function I(e){var t="http://api.openweathermap.org/data/2.5/forecast?id=".concat(e,"&APPID=").concat(C,"&units=metric");return fetch(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.warn(e),null})}function T(e){var t="https://www.googleapis.com/youtube/v3/search?key=".concat(j,"&channelId=").concat(e,"&part=snippet,id&order=date&maxResults=12");return fetch(t).then(function(e){return e.json()}).then(function(e){return e.items}).catch(function(e){return console.warn(e),null})}function L(e){return fetch({local:"https://toronto.ctvnews.ca/rss/ctv-news-toronto-1.822319",world:"https://www.ctvnews.ca/rss/ctvnews-ca-world-public-rss-1.822289",entertainment:"https://www.ctvnews.ca/rss/ctvnews-ca-entertainment-public-rss-1.822292",sports:"https://www.ctvnews.ca/rss/sports/ctv-news-sports-1.3407726",lifestyle:"https://www.ctvnews.ca/rss/lifestyle/ctv-news-lifestyle-1.3407722"}[e]).then(function(e){return e.text()}).then(function(e){var t=x.xml2json(e,{compact:!0,spaces:4});return JSON.parse(t).rss.channel.item}).catch(function(e){return console.warn(e),null})}var V=r.a.createContext(),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={forecastToggle:"week",weekForecast:null,dayForecast:null,cityList:null,currentLocationId:6167865},a.toggleForecast=function(){a.setState(function(e){return{forecastToggle:"day"===e.forecastToggle?"week":"day"}})},a.changeCity=function(e){a.setState({currentLocationId:e.target.value}),I(parseInt(e.target.value)).then(function(e){var t=e.list.filter(function(e,t,a){return t%2===0});t.length=5,a.setState({dayForecast:t});var n=new Date(1e3*e.list[0].dt).getHours(),r=e.list.filter(function(e){var t=new Date(1e3*e.dt).getHours();if(n<=5&&n>=19){if(t===n)return e}else if(17===t)return e});a.setState({weekForecast:r})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var e="http://api.openweathermap.org/data/2.5/group?id=6167865,6091104,5950267,6122091,6066513,6087701,6173577,6075357,5907364,5882873,6094578,6104111,6092122,5911592,6074375,5906831,5888377,5913424,6172932,5969782&APPID=".concat(C,"&units=metric");return fetch(e).then(function(e){return e.json()}).then(function(e){var t=[];return e.list.map(function(e){var a=e.id,n=e.name;return t.push({id:a,name:n})}),t}).catch(function(e){return console.warn(e),null})})().then(function(t){e.setState({cityList:t})}),I(this.state.currentLocationId).then(function(t){var a=t.list.filter(function(e,t,a){return t%2===0});a.length=5,e.setState({dayForecast:a});var n=new Date(1e3*t.list[0].dt).getHours(),r=t.list.filter(function(e){var t=new Date(1e3*e.dt).getHours();if(n<=5&&n>=19){if(t===n)return e}else if(17===t)return e});e.setState({weekForecast:r})})}},{key:"render",value:function(){var e=this.state,t=e.forecastToggle,a=e.weekForecast,n=e.dayForecast,c=e.currentLocationId,s=e.cityList;e.checkTime,e.changeCity;return r.a.createElement("div",{className:"forecast__wrapper"},r.a.createElement(V.Provider,{value:this.state.currentLocationId},null===s?r.a.createElement(p,{template:"forecast-city-select"}):r.a.createElement("div",{className:"city-select__wrapper"},"week"===t?r.a.createElement("h5",{className:"title-block light clickable",onClick:this.toggleForecast},r.a.createElement("span",null,"Forecast - Weekly")):r.a.createElement("h5",{className:"title-block light clickable",onClick:this.toggleForecast},r.a.createElement("span",null,"Forecast - Daily")),r.a.createElement(S,{cityList:s,currentLocation:c,changeCity:this.changeCity}))),"day"===t?null===n?r.a.createElement(p,{template:"forecast-list"}):r.a.createElement(k,{forecast:n,checkTime:this.checkTime,toggleForecast:this.toggleForecast}):null===a?r.a.createElement(p,{template:"forecast-list"}):r.a.createElement(_,{forecast:a,checkTime:this.checkTime,toggleForecast:this.toggleForecast}))}}]),t}(r.a.Component),F=a(40);a(91);function A(e){var t=e.videos,a=e.loadNewVideo,n=e.toggleView,c=e.viewStatus;return r.a.createElement("div",{className:"video-list__wrapper ".concat(c)},r.a.createElement("div",{className:"video-list__extra-wrapper"},r.a.createElement("div",{className:"video-list"},t.map(function(e,t){return r.a.createElement("div",{key:e.id.videoId,className:"video-list__item",onClick:function(e){a(e,t),n()}},r.a.createElement("div",{className:"image-wrap"},r.a.createElement("img",{src:e.snippet.thumbnails.high.url,alt:""})),r.a.createElement("h4",null,r.a.createElement("span",{dangerouslySetInnerHTML:{__html:decodeURI(e.snippet.title)}})))}))))}a(92);var W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentChannel,a=e.changeChannel,n=e.channels,c=e.prevVideo,s=e.nextVideo;return r.a.createElement("div",{className:"video-select__wrapper"},r.a.createElement("h5",{className:"title-block light"},r.a.createElement("span",null,"More Videos")),r.a.createElement("select",{className:"video-select",onChange:a,value:t},Object.keys(n).map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)})),r.a.createElement("span",{className:"helper"}),r.a.createElement("div",{onClick:function(){return c()},className:"prev-button"},r.a.createElement("span",null,r.a.createElement("img",{src:"/images/video-icons/streamline-icon-controls-rewind@24x24.svg",alt:"Previous Button"}))),r.a.createElement("div",{onClick:function(){return s()},className:"next-button"},r.a.createElement("span",null,r.a.createElement("img",{src:"/images/video-icons/streamline-icon-controls-forward@24x24.svg",alt:"Next Button"}))))}}]),t}(r.a.Component),D=(a(93),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={playerToggle:"desktop",viewStatus:"hide",videoList:null,videoListIndex:0,currentVideo:null,channels:{CTV:"UCi7Zk9baY1tvdlgxIML8MXg",Global:"UChLtXXpo4Ge1ReTEboVvTDg",CityTV:"UCVKAcQQCO8vv87Gk62SutAg",CBC:"UCuFFtHWoLl5fauMMD5Ww2jA"},currentChannel:"CTV"},a.prevVideo=function(e){a.state.videoListIndex>0&&(console.log("prev"),a.setState({videoListIndex:a.state.videoListIndex-1,currentVideo:a.state.videoList[a.state.videoListIndex-1].id.videoId}))},a.nextVideo=function(e){a.state.videoListIndex<11&&(console.log("next"),a.setState({videoListIndex:a.state.videoListIndex+1,currentVideo:a.state.videoList[a.state.videoListIndex+1].id.videoId}))},a.loadNewVideo=function(e,t){a.setState({videoListIndex:t,currentVideo:a.state.videoList[t].id.videoId})},a.toggleView=function(){a.setState(function(e){return{viewStatus:"hide"===e.viewStatus?"show":"hide"}})},a.changeChannel=function(e){a.setState({currentChannel:e.target.value,videoListIndex:0}),T(a.state.channels[e.target.value]).then(function(e){a.setState({videoList:e,currentVideo:e[0].id.videoId})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;T(this.state.channels[this.state.currentChannel]).then(function(t){e.setState({videoList:t,currentVideo:t[e.state.videoListIndex].id.videoId})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.videoList,n=t.currentVideo,c=t.viewStatus,s=t.currentChannel,l=t.channels;return r.a.createElement("div",{className:"video__wrapper"},null===a?r.a.createElement(p,{template:"video"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"video-list__toggle"},r.a.createElement("img",{onClick:function(){return e.toggleView()},src:"/images/streamline-icon-list-bullets@24x24.svg",alt:""})),r.a.createElement(W,{channels:l,currentChannel:s,changeChannel:this.changeChannel,prevVideo:function(){return e.prevVideo()},nextVideo:function(){return e.nextVideo()}}),r.a.createElement("div",{className:"video-container"},r.a.createElement(F.a,{videoId:n,opts:{height:"390",width:"640",playerVars:{autoplay:1,controls:1,mute:1,modestbranding:1,playsinline:1}},onEnd:this.nextVideo})),r.a.createElement(A,{videos:a,loadNewVideo:this.loadNewVideo,toggleView:this.toggleView,viewStatus:c})))}},{key:"_onReady",value:function(e){}}]),t}(r.a.Component)),M=a(15),P=a(29);function U(e){var t=e.newsfeed;return r.a.createElement("div",{className:"newsfeed-list__wrapper"},r.a.createElement("ul",{className:"newsfeed-list"},t.map(function(e){return r.a.createElement("li",{key:e.guid._text},r.a.createElement("a",{href:e.link._text,target:"_blank",rel:"noopener noreferrer"},e.title._cdata))})))}a(94);var H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:"local",newsfeeds:{local:null,world:null,entertainment:null,sports:null,lifestyle:null}},a.newActiveTab=function(e){a.setState({activeTab:e}),L(e).then(function(e){a.setState(function(t){return{newsfeeds:Object(P.a)({},t.newsfeeds,Object(M.a)({},a.state.activeTab,e))}})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;L(this.state.activeTab).then(function(t){e.setState(function(a){return{activeTab:e.state.activeTab,newsfeeds:Object(P.a)({},a.newsfeeds,Object(M.a)({},e.state.activeTab,t))}})})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeTab,n=t.newsfeeds;t.newActiveTab;return r.a.createElement("div",{className:"news__wrapper"},r.a.createElement("nav",{className:"news-tabs__wrapper"},r.a.createElement("h5",{className:"title-block light"},r.a.createElement("span",null,"Latest News")),r.a.createElement("ul",null,Object.keys(n).map(function(t,a){return r.a.createElement("li",{key:a,className:t===e.state.activeTab?"clickable active":"clickable",onClick:function(){return e.newActiveTab(t)}},r.a.createElement("span",null,t.charAt(0).toUpperCase()+t.slice(1)))}))),null===n[a]?r.a.createElement(p,{template:"newsfeed"}):r.a.createElement(U,{newsfeed:n[a]}))}}]),t}(r.a.Component),Y=a(45),z=a(43),B=a.n(z),q=a(44),K=a.n(q),J=(a(120),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.changeCameraIndex=function(e){e!==a.flkty.selectedIndex&&a.flkty.select(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.flkty.selectedIndex!==this.props.camIndex&&this.flkty.select(this.props.camIndex,null,!0)}},{key:"render",value:function(){var e=this,t=this.props.roads;return r.a.createElement("div",{className:"camera-slider__wrapper"},r.a.createElement(K.a,{flickityRef:function(t){return e.flkty=t},className:"carousel",elementType:"div",reloadOnUpdate:!0,options:{pageDots:!1,prevNextDots:!1,lazyLoad:!0}},t.map(function(e,t){return r.a.createElement("div",{key:e.Id,className:"carousel-cell"},r.a.createElement("img",{src:"/images/cam-placeholder.png",className:"cam-main","data-flickity-lazyload":e.Url,alt:""}),r.a.createElement("img",{src:"/images/cam-placeholder.png",className:"cam-background","data-flickity-lazyload":e.Url,alt:""}),r.a.createElement("div",{className:"cam-title title-block"},e.Name))})))}}]),t}(r.a.Component)),G=(a(121),a(122),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0,cameras:{},camIndex:0,roadways:[],roads:[],currentRoadway:"select",value:"",suggestions:[],suggestionSelected:!1,trafficToggle:"cameras"},a.handleSelectChange=function(e){var t=a.state.cameras.filter(function(t){return t.RoadwayName===e.target.value&&"MTO"===t.Organization});a.setState({roads:t,currentRoadway:e.target.value,value:""})},a.onChange=function(e,t){var n=t.newValue;t.method;a.setState({value:n})},a.onSuggestionsFetchRequested=function(e){var t=e.value,n=a.state.roads.map(function(e){return e.Name});a.setState({suggestions:a.getSuggestions(t,n)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.onSuggestionSelected=function(e,t){var n=t.suggestionValue,r=a.state.roads.findIndex(function(e){return e.Name===n});a.setState({camIndex:r,suggestionSelected:!0,value:""})},a.cameraElement=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://aundrekerr.com/yoink/index.php?url=https://511on.ca/api/v2/get/cameras").then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.warn(e),null}).then(function(t){var a=t.filter(function(e){return"MTO"===e.Organization}),n=Object(Y.a)(new Set(a.map(function(e){return e.RoadwayName}))),r=t.filter(function(e){return"HWY 401"===e.RoadwayName&&"MTO"===e.Organization}),c=r.map(function(e){return e.Name});e.setState({loading:!1,cameras:a,roadways:n,roads:r,currentRoadway:n[1],suggestions:c})})}},{key:"componentDidUpdate",value:function(){this.cameraElement.current.changeCameraIndex(this.state.camIndex)}},{key:"getInitialState",value:function(){return{currentRoadway:"select"}}},{key:"handleSelectChange",value:function(e){var t=this.state.cameras.filter(function(t){return t.RoadwayName===e.target.value&&"MTO"===t.Organization});this.setState({roads:t,currentRoadway:e.target.value,camIndex:0,value:""})}},{key:"getSuggestions",value:function(e,t){var a=e.trim().toLowerCase();return t.filter(function(e){return e.toLowerCase().includes(a.toLowerCase())})}},{key:"getSuggestionValue",value:function(e){return e}},{key:"renderSuggestion",value:function(e){return r.a.createElement("span",null,e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=(e.trafficToggle,e.roads),n=e.roadways,c=e.camIndex,s=(e.currentRoadway,e.suggestions),l={placeholder:"Enter a road...",value:e.value,onChange:this.onChange};return r.a.createElement("div",{className:"traffic__wrapper"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"traffic-intro__wrapper"},!1===!t?r.a.createElement(p,{template:"traffic-intro"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"title-block light clickable"},r.a.createElement("span",null,"Traffic Cameras")),r.a.createElement("div",{className:"camera-select__wrapper"},r.a.createElement("select",{onChange:this.handleSelectChange,value:this.currentRoadway},n.map(function(e,t){return null===e?null:r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("span",{className:"helper"})))),!1===!t?r.a.createElement(p,{template:"camera-jump"}):r.a.createElement("div",{className:"camera-jump__wrapper"},r.a.createElement(B.a,{suggestions:s,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionSelected:this.onSuggestionSelected,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:l,focusInputOnSuggestionClick:!1})),r.a.createElement(J,{roads:a,camIndex:c,ref:this.cameraElement})))}}]),t}(r.a.Component));var X=function(){return r.a.createElement("div",{className:"cp24-app__wrapper"},r.a.createElement(h,null),r.a.createElement(D,null),r.a.createElement(R,null),r.a.createElement(H,null),r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){},46:function(e,t,a){e.exports=a(123)},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t){},67:function(e,t){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.006528bb.chunk.js.map