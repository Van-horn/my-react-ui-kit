"use strict";(self.webpackChunkmy_react_ui_kit=self.webpackChunkmy_react_ui_kit||[]).push([[869],{"./src/components/Buttons/OnePiece/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,Filling:()=>Filling,Ghost:()=>Ghost,GhostFilling:()=>GhostFilling,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src_reset=__webpack_require__("./src/reset.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/OnePiece/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.A,options);const OnePiece_index_module=index_module.A&&index_module.A.locals?index_module.A.locals:void 0,TAB_reactionOptions={zoom:styled_components_browser_esm.AH`
		outline: none;
		transform: scale(1.1);
	`,none:styled_components_browser_esm.AH`
		outline: none;
	`},hover_reactionOptions={blackout:styled_components_browser_esm.AH`
		filter: brightness(0.96);
	`,lightening:styled_components_browser_esm.AH`
		filter: brightness(1.1);
	`,none:styled_components_browser_esm.AH``};var element_rounding=__webpack_require__("./src/shared-data-for-styles/element-rounding.ts"),im=__webpack_require__("./node_modules/react-icons/im/index.mjs"),spinner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/shared-data-for-styles/loading-icons/Spinner/spinner.module.css"),spinner_module_options={};spinner_module_options.styleTagTransform=styleTagTransform_default(),spinner_module_options.setAttributes=setAttributesWithoutAttributes_default(),spinner_module_options.insert=insertBySelector_default().bind(null,"head"),spinner_module_options.domAPI=styleDomAPI_default(),spinner_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spinner_module.A,spinner_module_options);const Spinner_spinner_module=spinner_module.A&&spinner_module.A.locals?spinner_module.A.locals:void 0,StyledSpinner=(0,styled_components_browser_esm.Ay)(im.koQ).withConfig({shouldForwardProp:prop=>!0})`
	${({color})=>`\n\tposition: absolute;\n\tfont-size: inherit;\n\ttop: calc(50% - 0.5em);\n\tcolor: ${color};\n`}
`,Spinner=props=>react.createElement(StyledSpinner,{...props,className:Spinner_spinner_module.rotate}),Spinner_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{required:!0,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const loading_icons={spinner:props=>react.createElement(Spinner_Spinner,props),none:()=>""},Button=styled_components_browser_esm.Ay.button.withConfig({shouldForwardProp:prop=>"children"===prop})`
	${props=>`\n\t\tposition: relative;\n\t\t--theme-color: ${props?.themeColor??"black"};\n\t\twidth: ${props?.width??6.5}em;\n\t\theight: ${props?.height??2.5}em;\n\t\tfont-size: ${props?.height?props.height/2.6:1}em;\n\t\tborder-radius: ${props?.height&&props?.rounding?props.height*element_rounding.d[props.rounding]:0}em;\n\n\t\t&:hover {\n\t\t\t${hover_reactionOptions[props?.hover_reaction??"none"]}\n\t\t}\n\n\t\t&:focus-visible {\n\t\t\t${TAB_reactionOptions[props?.TAB_reaction??"none"]};\n\t\t}`}
`,OnePieceButton=(0,react.memo)((({text,...props})=>{const classes=[props?.className??"",OnePiece_index_module[props?.kind??"none"]].join(" ");return react.createElement(react.Fragment,null,react.createElement(src_reset.A,null),react.createElement(Button,{...props,className:classes},text," ​",props?.isLoading?loading_icons[props?.loadingKind??"none"]({color:props?.loadingIconColor??"black"}):""))})),OnePiece=OnePieceButton;OnePieceButton.__docgenInfo={description:"",methods:[],displayName:"OnePieceButton",props:{themeColor:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"union",raw:'"ghost" | "filled" | "filling" | "ghost-filling" | "none"',elements:[{name:"literal",value:'"ghost"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"filling"'},{name:"literal",value:'"ghost-filling"'},{name:"literal",value:'"none"'}]},description:""},TAB_reaction:{required:!1,tsType:{name:"I_TAB_reactionOptions"},description:""},hover_reaction:{required:!1,tsType:{name:"I_hover_reactionOptions"},description:""},rounding:{required:!1,tsType:{name:"IRoundingOptions"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},loadingKind:{required:!1,tsType:{name:"ILoadingIcons"},description:""},loadingIconColor:{required:!1,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]};const index_stories={title:"Buttons/OnePieceButtons",component:OnePiece,parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{text:{required:!0,control:"text",description:"Text in button.",defaultValue:"click"},themeColor:{control:"select",options:["purple","orange","green","cornflowerblue","black"],description:"Button color scheme.",defaultValue:"black"},kind:{control:"select",options:Object.keys(OnePiece_index_module),description:"Button type.",defaultValue:"none"},rounding:{control:"select",options:Object.keys(element_rounding.d),description:"Rounding an element. It works only, when you indicated button height.",defaultValue:"none"},width:{control:"number",description:"Button width.",defaultValue:6.5},height:{control:"number",description:"Button height.",defaultValue:2.5},TAB_reaction:{control:"select",options:Object.keys(TAB_reactionOptions),description:"Options for styling when focusing with TAB.",defaultValue:"none"},hover_reaction:{control:"select",options:Object.keys(hover_reactionOptions),description:"Options for styling when hovering.",defaultValue:"none"},isLoading:{control:"boolean",description:"Shows when you are expecting a query result.",defaultValue:"false"},loadingKind:{control:"select",options:Object.keys(loading_icons),description:"Loading icon kind.",defaultValue:"none"},loadingIconColor:{control:"select",options:["purple","orange","green","cornflowerblue","black"],description:"Load icon color.",defaultValue:"black"}},args:{text:"click"}},Primary={parameters:{docs:{description:{story:"Button without styles."}}}},Filled={parameters:{docs:{description:{story:"Simple Filled button."}}},args:{themeColor:"purple",rounding:"slight",kind:"filled",width:6.5,height:2.5,TAB_reaction:"zoom",hover_reaction:"lightening"}},Ghost={parameters:{docs:{description:{story:"Button with transparent background."}}},args:{themeColor:"purple",rounding:"medium",kind:"ghost",width:6.5,height:2.5,TAB_reaction:"zoom"}},GhostFilling={parameters:{docs:{description:{story:"Button with initially transparent background, filling on hover."}}},args:{themeColor:"purple",rounding:"medium",kind:"ghost-filling",width:6.5,height:2.5,TAB_reaction:"zoom"}},Filling={parameters:{docs:{description:{story:"Button that fills on hover."}}},args:{themeColor:"purple",rounding:"semicircle",kind:"filling",width:6.5,height:2.5}},__namedExportsOrder=["Primary","Filled","Ghost","GhostFilling","Filling"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button without styles."\n      }\n    }\n  }\n}',...Primary.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Simple Filled button."\n      }\n    }\n  },\n  args: {\n    themeColor: "purple",\n    rounding: "slight",\n    kind: "filled",\n    width: 6.5,\n    height: 2.5,\n    TAB_reaction: "zoom",\n    hover_reaction: "lightening"\n  }\n}',...Filled.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button with transparent background."\n      }\n    }\n  },\n  args: {\n    themeColor: "purple",\n    rounding: "medium",\n    kind: "ghost",\n    width: 6.5,\n    height: 2.5,\n    TAB_reaction: "zoom"\n  }\n}',...Ghost.parameters?.docs?.source}}},GhostFilling.parameters={...GhostFilling.parameters,docs:{...GhostFilling.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button with initially transparent background, filling on hover."\n      }\n    }\n  },\n  args: {\n    themeColor: "purple",\n    rounding: "medium",\n    kind: "ghost-filling",\n    width: 6.5,\n    height: 2.5,\n    TAB_reaction: "zoom"\n  }\n}',...GhostFilling.parameters?.docs?.source}}},Filling.parameters={...Filling.parameters,docs:{...Filling.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button that fills on hover."\n      }\n    }\n  },\n  args: {\n    themeColor: "purple",\n    rounding: "semicircle",\n    kind: "filling",\n    width: 6.5,\n    height: 2.5\n  }\n}',...Filling.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/OnePiece/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FC9NrDFNAQLc6U55fUGX{border:none;color:var(--theme-color)}.nklx1NN80yjw9JNrbTii{color:#fff;background-color:var(--theme-color);border:none}.GGLjz92v9i7MvOtWE6H0{background-clip:content-box;padding:.2em;border:.18em solid var(--theme-color);background-color:var(--theme-color);color:#fff;transition:padding .2s ease}.VQoXyx3zvF2eWzX4hpIm,.w8MTIzcESK1mUfnhN7QA{border:.18em solid var(--theme-color);color:var(--theme-color);background-color:#fff}@media(hover: hover){.GGLjz92v9i7MvOtWE6H0:hover{padding:0;transition:padding .2s ease}.w8MTIzcESK1mUfnhN7QA:hover{color:#fff;background-color:var(--theme-color);transition:background-color .2s ease}}","",{version:3,sources:["webpack://./src/components/Buttons/OnePiece/index.module.scss"],names:[],mappings:"AAAA,sBACI,WAAA,CACA,wBAAA,CAGJ,sBACI,UAAA,CACA,mCAAA,CACA,WAAA,CAGJ,sBACI,2BAAA,CACA,YAAA,CACA,qCAAA,CACA,mCAAA,CACA,UAAA,CACA,2BAAA,CAGJ,4CAEQ,qCAAA,CACA,wBAAA,CACA,qBAAA,CAIR,qBACI,4BACI,SAAA,CACA,2BAAA,CAEH,4BACG,UAAA,CACA,mCAAA,CACA,oCAAA,CAAA",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={none:"FC9NrDFNAQLc6U55fUGX",filled:"nklx1NN80yjw9JNrbTii",filling:"GGLjz92v9i7MvOtWE6H0",ghost:"VQoXyx3zvF2eWzX4hpIm","ghost-filling":"w8MTIzcESK1mUfnhN7QA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/shared-data-for-styles/loading-icons/Spinner/spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@keyframes cMbvYi549nQ0nGOa3aPR {\n    0% {\n        transform: rotate(0deg); \n    }\n    100% {\n        transform: rotate(360deg); \n    }\n}\n\n\n.cMbvYi549nQ0nGOa3aPR{\n    animation: cMbvYi549nQ0nGOa3aPR 1.2s ease-in-out 0s infinite normal none;\n}","",{version:3,sources:["webpack://./src/shared-data-for-styles/loading-icons/Spinner/spinner.module.css"],names:[],mappings:"AAAA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ;;;AAGA;IACI,wEAA0D;AAC9D",sourcesContent:["@keyframes rotate {\r\n    0% {\r\n        transform: rotate(0deg); \r\n    }\r\n    100% {\r\n        transform: rotate(360deg); \r\n    }\r\n}\r\n\r\n\r\n.rotate{\r\n    animation: rotate 1.2s ease-in-out 0s infinite normal none;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={rotate:"cMbvYi549nQ0nGOa3aPR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/reset.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").DU`
  *, *::before, *::after {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
    /* background-clip: content-box; */
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input:focus{
    outline: none;
  }
`},"./src/shared-data-for-styles/element-rounding.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>roundingOptions});const roundingOptions={semicircle:.5,medium:1/3,slight:1/6,none:0}}}]);
//# sourceMappingURL=components-Buttons-OnePiece-index-stories.814dd60b.iframe.bundle.js.map