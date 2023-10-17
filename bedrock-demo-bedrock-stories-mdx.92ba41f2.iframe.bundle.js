/*! For license information please see bedrock-demo-bedrock-stories-mdx.92ba41f2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_zendeskgarden_css_components=self.webpackChunk_zendeskgarden_css_components||[]).push([[504],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/bedrock/demo/bedrock.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bedrock:()=>bedrock,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a"},(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Bedrock"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"bedrock",children:"Bedrock"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["In addition to setting up the base font and stripping page margins, Bedrock\nCSS adds the following element resets on top of\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"http://necolas.github.io/normalize.css/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Normalize.css"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Bedrock",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"u-mb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"",children:"<a>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b",{children:"<b>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em",{children:"<em>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ins",{children:"<ins>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{children:"<i>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"<strong>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u",{children:"<u>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"u-mb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{children:"<button>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"<h1>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"<h2>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"<h3>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4",{children:"<h4>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5",{children:"<h5>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6",{children:"<h6>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{class:"u-mb-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<ul>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ol",{class:"u-mb-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<ol>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("dl",{class:"u-mb-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dl>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dl>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("dd",{class:"u-mb-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dd>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dd>"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"<p>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("blockquote",{children:"<blockquote>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre",{children:"<pre>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"<code>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("fieldset",{children:"<fieldset>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figure",{children:"<figure>"})]})]})})]})}const bedrock=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"u-mb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"",children:"<a>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b",{children:"<b>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em",{children:"<em>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ins",{children:"<ins>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{children:"<i>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"<strong>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u",{children:"<u>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"u-mb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{children:"<button>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"<h1>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"<h2>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"<h3>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4",{children:"<h4>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5",{children:"<h5>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6",{children:"<h6>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{class:"u-mb-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<ul>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ol",{class:"u-mb-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<ol>"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("dl",{class:"u-mb-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dl>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dl>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("dd",{class:"u-mb-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dd>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:"<dd>"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{class:"u-mb",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"<p>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("blockquote",{children:"<blockquote>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre",{children:"<pre>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"<code>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("fieldset",{children:"<fieldset>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figure",{children:"<figure>"})]})]});bedrock.storyName="Bedrock",bedrock.parameters={storySource:{source:'<div class="u-mb"><a href="">{"<a>"}</a></div>\n<div class="u-mb"><b>{"<b>"}</b><em>{"<em>"}</em><ins>{"<ins>"}</ins><i>{"<i>"}</i><strong>{"<strong>"}</strong><u>{"<u>"}</u></div>\n<div class="u-mb"><button>{"<button>"}</button></div>\n<div class="u-mb"><h1>{"<h1>"}</h1><h2>{"<h2>"}</h2><h3>{"<h3>"}</h3><h4>{"<h4>"}</h4><h5>{"<h5>"}</h5><h6>{"<h6>"}</h6></div>\n<div class="u-mb"><ul class="u-mb-sm"><li>{"<ul>"}</li></ul><ol class="u-mb-sm"><li>{"<ol>"}</li></ol><dl class="u-mb-sm"><li>{"<dl>"}</li><li>{"<dl>"}</li></dl><dd class="u-mb-sm"><li>{"<dd>"}</li><li>{"<dd>"}</li></dd></div>\n<div class="u-mb"><p>{"<p>"}</p><blockquote>{"<blockquote>"}</blockquote><pre>{"<pre>"}</pre><code>{"<code>"}</code><fieldset>{"<fieldset>"}</fieldset><figure>{"<figure>"}</figure></div>'}};const componentMeta={title:"Components/Bedrock",tags:["stories-mdx"],includeStories:["bedrock"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_circleci_project_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);