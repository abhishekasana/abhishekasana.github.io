(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{1646:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/github-pages-nextjs",function(){return n(1491)}])},1491:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(5893),r=n(7294),o=n(63),s=n(5225),a=n(5711),c=n(6385),u=n(9832),l=n(6741),h=n(8790),p=n(5697),d=n.n(p);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function m(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?f(e):t}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return m(this,n)}}function k(){var e=w(["\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%,-50%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0,0,0,0.7);\n"]);return k=function(){return e},e}function _(){var e=w(["\n  max-width: ",";\n  max-height: ",";;\n  border-radius: 3px;\n  cursor: pointer;\n  z-index: 3;\n"]);return _=function(){return e},e}function O(){var e=w(["\n  max-width: calc(100% - 24px);\n  max-height: calc(100% - 24px);\n"]);return O=function(){return e},e}var N=o.ZP.div(k()),S=o.ZP.img(_(),(function(e){return e.thumbMxWidth?e.thumbMxWidth:"128px"}),(function(e){return e.thumbMxHeight?e.thumbMxHeight:"128px"})),Z=o.ZP.img(O()),G=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(s,e);var t,n,r,o=P(s);function s(){var e;return g(this,s),b(f(e=o.apply(this,arguments)),"state",{isOpen:!1}),b(f(e),"handleShowDialog",(function(){e.setState({isOpen:!e.state.isOpen})})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.imgUrl,n=e.alt,r=e.style,o=(void 0===r?{}:r).thumbnail,s=void 0===o?{}:o,a=s.maxWidth,c=s.maxHeight,u=this.state.isOpen;return(0,i.jsxs)("div",{children:[(0,i.jsx)(S,{src:t,onClick:this.handleShowDialog,alt:n,thumbMxWidth:a,thumbMxHeight:c}),u&&(0,i.jsx)(N,{open:!0,onClick:this.handleShowDialog,children:(0,i.jsx)(Z,{src:t,onClick:function(e){e.stopPropagation()},alt:n})})]})}}])&&x(t.prototype,n),r&&x(t,r),s}(r.Component);G.propTypes={imgUrl:d().string.isRequired,alt:d().string,style:d().shape({})},G.defaultProps={alt:"",style:{}};var H=G,U=n(7354);function C(){var e,t,n=(e=["\n  white-space: pre-wrap;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return C=function(){return n},n}var D=o.ZP.div(C()),I=function(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.PU,{children:(0,i.jsxs)(u.XF,{children:[(0,i.jsx)(l.Z,{title:"Github Pages with Next JS"}),(0,i.jsxs)(D,{children:["Learn how to get up and running with your first GitHub Pages website using Next.js .\xa0 A quick and easy way for creating & publishing a free portfolio, blog or website. By the end of the blog, you will have your own domain and a public place without any hosting cost to post your work.","\n",'We will be using Next.js which is an open-source React front-end framework which supports "static-site generation". It exports our react app to static HTML which can be run standalone without the need of a Node.js server & moreover, this can be processed by GitHub Pages.']}),(0,i.jsx)(u.Z0,{}),(0,i.jsx)(u.U7,{children:"Github Setup"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 1 - "}),"Create a GitHub account","\n","If you don\u2019t have a GitHub account, create one, otherwise go log in.","\n","Note: Your username will eventually be part of your websites URL, so just keep that in mind when picking a username.","\n",(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 2 - "}),"Create a public repo named username.github.io","\n",'Like, if my username is "abhishekasana" then my repo name will be "abhishekasana.github.io".']}),(0,i.jsx)(u.Z0,{height:"1px",bg:h.Z.PINK}),(0,i.jsx)(H,{imgUrl:"/static/images/create_repo.png"}),(0,i.jsx)(u.U7,{children:"App Setup"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 3 - "}),"Create Next.js app using a boilerplate","\n",(0,i.jsx)(U.pP,{children:(0,i.jsxs)(U.kp,{children:[(0,i.jsx)("span",{children:"npx create-next-app --example with-static-export username.github.io"}),"\n",(0,i.jsx)("span",{children:"git add -a"}),"\n",(0,i.jsx)("span",{children:'git commit -m "added my next js project"'}),"\n",(0,i.jsx)("span",{children:"git remote add origin https://github.com/username/username.github.io.git"}),"\n",(0,i.jsx)("span",{children:"git push -u -f origin main"}),"\n"]})}),"Useful Links - [",(0,i.jsx)(U.MZ,{href:"https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github",children:"How to push a project to github"}),"]"]}),(0,i.jsx)(u.U7,{children:"Modding app for github pages"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 4 - "}),'Update the "package.json". Add the following scripts',"\n",(0,i.jsx)(U.pP,{children:(0,i.jsx)("code",{children:'"scripts": {\n        //...other_scripts\n        "nojekyll": "touch docs/.nojekyll",\n        "export": "next build && next export -o docs",\n        "fullexport": "npx export && npx nojekyll"\n}'})}),"Explanation -","\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:['By default, Next.js spits the static export in the "out/" directory. But Github Pages site can be only built from either root i.e "/" or "docs/" directory which we will see later in the repo settings in Github.',"\n",'So we will updating the export script to output in the "docs/" directory.']}),(0,i.jsxs)("li",{children:['By default Github Pages do a Jekyll processing on the site. Jekyll considers files or directories that start with underscores as special resources and does not copy them to the final site. And, Next.js uses "_" underscore in the export files/directories naming convention.',"\n",'So we need to disable this Jekyll processing by creating a ".nojekyll" file in the directory which is set as the source in Github pages.']})]}),(0,i.jsx)("br",{}),(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 6 - "}),"Commit & Push these changes","\n",(0,i.jsx)(U.pP,{children:(0,i.jsxs)(U.kp,{children:[(0,i.jsx)("span",{children:"git add ."}),"\n",(0,i.jsx)("span",{children:'git commit -m "script changes"'}),"\n",(0,i.jsx)("span",{children:"git push -u -f origin main"})]})})]}),(0,i.jsx)(u.U7,{children:"Configuring Github pages through dashboard"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 7 - "}),"Update the following params in the GitHub page Settings,",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:'Map your branch as "main"'}),(0,i.jsx)("li",{children:'Map your source folder as "docs/"'})]}),(0,i.jsx)(u.Z0,{height:"1px",bg:h.Z.PINK}),(0,i.jsx)(H,{imgUrl:"/static/images/configure_branch_gh_pages.png",alt:"configure branch at github dashboard",style:{thumbnail:{maxWidth:"128px",maxHeight:"auto"}}})]}),(0,i.jsx)(u.U7,{children:"All Done!"}),(0,i.jsxs)(D,{children:[(0,i.jsx)(c.Dr,{color:h.Z.PINK,children:"Step 8 - "}),"Open your website url (https://username.github.io) in the browser.","\n","There may be a few minute delay, but eventually GitHub will recognize that you created a GitHub Pages repository, it will automatically pick it up and create your website."]})]})})})}}},function(e){e.O(0,[115,37,774,888,179],(function(){return t=1646,e(e.s=t);var t}));var t=e.O();_N_E=t}]);