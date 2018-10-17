!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(1)},function(e,t,o){"use strict";var n=o(2),r=(o.n(n),o(3)),a=(o.n(r),o(4)),l=wp.i18n.__,c=wp.blocks.registerBlockType,p=wp.editor.InspectorControls,s=wp.components.RangeControl,u=wp.element.Fragment;c("coordinates/mapbox-map",{title:l("Mapbox Map"),icon:"location-alt",category:"embed",keywords:[l("map-block-mapbox"),l("Mapbox Map Block")],supports:{multiple:!1},attributes:{lat:{type:"number",source:"attribute",attribute:"data-lat",selector:"#mapbox-map",default:0},lng:{type:"number",source:"attribute",attribute:"data-lng",selector:"#mapbox-map",default:0},zoom:{type:"number",source:"attribute",attribute:"data-zoom",selector:"#mapbox-map",default:1}},edit:function(e){var t=e.attributes,o=e.setAttributes,n=e.className,r=t.lat,c=t.lng,i=t.zoom;return mapboxBlock.accessToken?mapboxBlock.accessToken?wp.element.createElement(u,null,wp.element.createElement(p,null,wp.element.createElement(s,{label:l("Zoom Level"),value:i,onChange:function(e){return o({zoom:e})},min:1,max:22})),wp.element.createElement("div",{className:n},wp.element.createElement(a.a,{lat:r,lng:c,zoom:i,onChange:function(e){return o({lat:e.lat,lng:e.lng})}}))):void 0:wp.element.createElement("div",{className:"mapbox-block-token"},wp.element.createElement("h2",null,"Block Setup"),wp.element.createElement("p",null,"To use this block, you need to connect it to your Mapbox account. From then on out, you'll be good to go!"),wp.element.createElement("a",{href:mapboxBlock.optionsPage,className:"mapbox-block-token-cta"},"Connect to Mapbox"))},save:function(e){var t=e.attributes,o=t.lat,n=t.lng,r=t.zoom;return wp.element.createElement("div",null,wp.element.createElement("div",{id:"mapbox-map","data-lat":o,"data-lng":n,"data-zoom":r}))}})},function(e,t){},function(e,t){},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return wp.element.createElement("div",{id:"mapbox-map"})}},{key:"componentDidMount",value:function(){mapboxgl.accessToken=mapboxBlock.accessToken;var e=[this.props.lng,this.props.lat];this.map=new mapboxgl.Map({container:"mapbox-map",style:"mapbox://styles/mapbox/streets-v9",center:e,zoom:this.props.zoom});var t=(new mapboxgl.Marker).setLngLat(e).addTo(this.map);this.addControls(t)}},{key:"componentDidUpdate",value:function(e){this.props.zoom!==e.zoom&&this.map.flyTo({zoom:this.props.zoom})}},{key:"addControls",value:function(e){var t=this;this.controls={},this.controls.geocoder=new MapboxGeocoder({accessToken:mapboxgl.accessToken,flyTo:!1}),this.map.addControl(this.controls.geocoder,"top-right"),this.map.on("load",function(){t.controls.geocoder.on("result",function(o){t.map.jumpTo({center:o.result.center}),e.setLngLat(o.result.center),t.props.onChange({lng:o.result.geometry.coordinates[0],lat:o.result.geometry.coordinates[1]})})})}}]),t}(React.Component);t.a=c}]);