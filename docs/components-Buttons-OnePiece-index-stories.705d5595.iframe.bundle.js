"use strict";(self.webpackChunkmy_react_ui_kit=self.webpackChunkmy_react_ui_kit||[]).push([[869],{"./src/components/Buttons/OnePiece/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,Filling:()=>Filling,Ghost:()=>Ghost,GhostFilling:()=>GhostFilling,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src_reset=__webpack_require__("./src/reset.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/OnePiece/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.A,options);const OnePiece_index_module=index_module.A&&index_module.A.locals?index_module.A.locals:void 0,TAB_reactionOptions={zoom:styled_components_browser_esm.AH`
		outline: none;
		transform: scale(1.1);
	`,none:styled_components_browser_esm.AH`
		outline: none;
	`},TAB_reactionOptionsKeys=Object.keys(TAB_reactionOptions),hover_reactionOptions={blackout:styled_components_browser_esm.AH`
		filter: brightness(0.96);
	`,lightening:styled_components_browser_esm.AH`
		filter: brightness(1.1);
	`,none:styled_components_browser_esm.AH``},hover_reactionOptionsKeys=Object.keys(hover_reactionOptions);var element_rounding=__webpack_require__("./src/shared-data-for-styles/element-rounding.ts"),im=__webpack_require__("./node_modules/react-icons/im/index.mjs"),spinner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/shared-data-for-styles/loading-icons/Spinner/spinner.module.css"),spinner_module_options={};spinner_module_options.styleTagTransform=styleTagTransform_default(),spinner_module_options.setAttributes=setAttributesWithoutAttributes_default(),spinner_module_options.insert=insertBySelector_default().bind(null,"head"),spinner_module_options.domAPI=styleDomAPI_default(),spinner_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spinner_module.A,spinner_module_options);const Spinner_spinner_module=spinner_module.A&&spinner_module.A.locals?spinner_module.A.locals:void 0,StyledSpinner=(0,styled_components_browser_esm.Ay)(im.koQ)`
	margin-left: 0.25em;
`,Spinner=()=>react.createElement(StyledSpinner,{className:Spinner_spinner_module.rotate}),loading_icons_Spinner=Spinner;Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner"};const loadingIcons={spinner:react.createElement(loading_icons_Spinner,null),dots:"...",none:""},loading_icons=loadingIcons,loadingIconsKeys=Object.keys(loadingIcons);var overrideObjProps=__webpack_require__("./src/utils/overrideObjProps.ts");const Button=styled_components_browser_esm.Ay.button.withConfig({shouldForwardProp:prop=>"children"===prop})`
   ${({color,initColor,bgcolor,initBgcolor,width,height,rounding,TAB_reaction,hover_reaction})=>`\n\t\t--initColor : ${initColor};\n\t\t--color : ${color};\n\t\t--bgcolor : ${bgcolor};\n\t\t--initBgcolor : ${initBgcolor};\n\t\t\n\t\tdisplay: flex;\n  \t\talign-items: center;\n\t\tjustify-content: center;\n\t\tborder-width: 0.15em; \n\t\twidth: ${width}em;\n\t\theight: ${height}em;\n\t\tfont-size: ${height/2.5}em;\n\t\tborder-radius: ${height*element_rounding.d[rounding]}em;\n\n\t\t&:hover {\n\t\t\t${hover_reactionOptions[hover_reaction]}\n\t\t}\n\n\t\t&:focus-visible {\n\t\t\t${TAB_reactionOptions[TAB_reaction]};\n\t\t}`}
`,initProps={color:"black",initColor:"black",bgcolor:"rgb(235, 235, 235)",initBgcolor:"rgb(235, 235, 235)",width:6.5,height:2.5,kind:"none",loadingKind:"none",rounding:"none",isLoading:!1,loadingIconColor:"black",TAB_reaction:"none",hover_reaction:"none"},OnePieceButton=(0,react.memo)((({text,...props})=>{const classes=[props?.className??"",OnePiece_index_module[props?.kind??initProps.kind]].join(" ");return react.createElement(react.Fragment,null,react.createElement(src_reset.A,null),react.createElement(Button,{...(0,overrideObjProps.A)(initProps,props),className:classes},text,props?.isLoading&&props?.loadingKind?loading_icons[props.loadingKind]:loading_icons[initProps.loadingKind]))})),buttons=Object.keys(OnePiece_index_module),OnePiece=OnePieceButton;OnePieceButton.__docgenInfo={description:"",methods:[],displayName:"OnePieceButton",props:{text:{required:!0,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes","Partial"]};var colors=__webpack_require__("./src/shared-data-for-styles/colors.ts");const index_stories={title:"Buttons/OnePieceButtons",component:OnePiece,parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{text:{required:!0,control:"text",description:"Text in button.",defaultValue:"click"},color:{control:"select",options:colors.A,description:"Button color scheme for transitions.",defaultValue:initProps.color},initColor:{control:"select",options:colors.A,description:"Button color scheme.",defaultValue:initProps.initColor},bgcolor:{control:"select",options:colors.A,description:"Button background-color scheme for transitions.",defaultValue:initProps.bgcolor},initBgcolor:{control:"select",options:colors.A,description:"Button background-color scheme.",defaultValue:initProps.initBgcolor},kind:{control:"select",options:buttons,description:"Button kind.",defaultValue:initProps.kind},rounding:{control:"select",options:element_rounding.N,description:"Rounding an element.",defaultValue:initProps.rounding},width:{control:"number",description:"Button width.",defaultValue:initProps.width},height:{control:"number",description:"Button height.",defaultValue:initProps.height},TAB_reaction:{control:"select",options:TAB_reactionOptionsKeys,description:"Options for styling when focusing with TAB.",defaultValue:initProps.TAB_reaction},hover_reaction:{control:"select",options:hover_reactionOptionsKeys,description:"Options for styling when hovering.",defaultValue:initProps.hover_reaction},isLoading:{control:"boolean",description:"Shows when you are expecting a query result.",defaultValue:initProps.isLoading},loadingKind:{control:"select",options:loadingIconsKeys,description:"Loading icon kind.",defaultValue:initProps.loadingKind},loadingIconColor:{control:"select",options:colors.A,description:"Load icon color.",defaultValue:initProps.loadingIconColor}},args:{text:"click"}},Primary={parameters:{docs:{description:{story:"Button without styles."}}}},Filled={parameters:{docs:{description:{story:"Simple Filled button."}}},args:{kind:"filled",rounding:"semicircle",initColor:"white",initBgcolor:"purple"}},Ghost={parameters:{docs:{description:{story:"Button with initBgcolor background."}}},args:{kind:"ghost",rounding:"slight",initColor:"purple",initBgcolor:"white"}},GhostFilling={parameters:{docs:{description:{story:"Button with initially initBgcolor background, filling with bgcolor on hover."}}},args:{kind:"ghost-filling",initColor:"purple",initBgcolor:"white",color:"white",bgcolor:"purple"}},Filling={parameters:{docs:{description:{story:"Button that fills on hover."}}},args:{kind:"filling",rounding:"semicircle",initColor:"white",initBgcolor:"purple"}},__namedExportsOrder=["Primary","Filled","Ghost","GhostFilling","Filling"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button without styles."\n      }\n    }\n  }\n}',...Primary.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Simple Filled button."\n      }\n    }\n  },\n  args: {\n    kind: "filled",\n    rounding: "semicircle",\n    initColor: "white",\n    initBgcolor: "purple"\n  }\n}',...Filled.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button with initBgcolor background."\n      }\n    }\n  },\n  args: {\n    kind: "ghost",\n    rounding: "slight",\n    initColor: "purple",\n    initBgcolor: "white"\n  }\n}',...Ghost.parameters?.docs?.source}}},GhostFilling.parameters={...GhostFilling.parameters,docs:{...GhostFilling.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button with initially initBgcolor background, filling with bgcolor on hover."\n      }\n    }\n  },\n  args: {\n    kind: "ghost-filling",\n    initColor: "purple",\n    initBgcolor: "white",\n    color: "white",\n    bgcolor: "purple"\n  }\n}',...GhostFilling.parameters?.docs?.source}}},Filling.parameters={...Filling.parameters,docs:{...Filling.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Button that fills on hover."\n      }\n    }\n  },\n  args: {\n    kind: "filling",\n    rounding: "semicircle",\n    initColor: "white",\n    initBgcolor: "purple"\n  }\n}',...Filling.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/OnePiece/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FC9NrDFNAQLc6U55fUGX{border:none;color:var(--initColor);background-color:var(--initBgcolor)}.nklx1NN80yjw9JNrbTii{border:none;color:var(--initColor);background-color:var(--initBgcolor)}.VQoXyx3zvF2eWzX4hpIm{border-style:solid;border-color:var(--initColor);color:var(--initColor);background-color:var(--initBgcolor)}.w8MTIzcESK1mUfnhN7QA{border-style:solid;border-color:var(--initColor);color:var(--initColor);background-color:var(--initBgcolor)}.GGLjz92v9i7MvOtWE6H0{padding:.2em;background-clip:content-box;border-style:solid;border-color:var(--initBgcolor);background-color:var(--initBgcolor);color:var(--initColor);transition:padding .2s ease}@media(hover: hover){.w8MTIzcESK1mUfnhN7QA:hover{color:var(--color);background-color:var(--bgcolor);transition:background-color .2s ease}.GGLjz92v9i7MvOtWE6H0:hover{padding:0;transition:padding .2s ease}}","",{version:3,sources:["webpack://./src/components/Buttons/OnePiece/index.module.scss"],names:[],mappings:"AAAA,sBACI,WAAA,CACA,sBAAA,CACA,mCAAA,CAGJ,sBACI,WAAA,CACA,sBAAA,CACA,mCAAA,CAGJ,sBACI,kBAAA,CACA,6BAAA,CACA,sBAAA,CACA,mCAAA,CAGJ,sBACI,kBAAA,CACA,6BAAA,CACA,sBAAA,CACA,mCAAA,CAGJ,sBACI,YAAA,CACA,2BAAA,CACA,kBAAA,CACA,+BAAA,CACA,mCAAA,CACA,sBAAA,CACA,2BAAA,CAGJ,qBACI,4BACI,kBAAA,CACA,+BAAA,CACA,oCAAA,CAEJ,4BACI,SAAA,CACA,2BAAA,CAAA",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={none:"FC9NrDFNAQLc6U55fUGX",filled:"nklx1NN80yjw9JNrbTii",ghost:"VQoXyx3zvF2eWzX4hpIm","ghost-filling":"w8MTIzcESK1mUfnhN7QA",filling:"GGLjz92v9i7MvOtWE6H0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/shared-data-for-styles/loading-icons/Spinner/spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@keyframes cMbvYi549nQ0nGOa3aPR {\n    0% {\n        transform: rotate(0deg); \n    }\n    100% {\n        transform: rotate(360deg); \n    }\n}\n\n\n.cMbvYi549nQ0nGOa3aPR{\n    animation: cMbvYi549nQ0nGOa3aPR 1.2s ease-in-out 0s infinite normal none;\n}","",{version:3,sources:["webpack://./src/shared-data-for-styles/loading-icons/Spinner/spinner.module.css"],names:[],mappings:"AAAA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ;;;AAGA;IACI,wEAA0D;AAC9D",sourcesContent:["@keyframes rotate {\r\n    0% {\r\n        transform: rotate(0deg); \r\n    }\r\n    100% {\r\n        transform: rotate(360deg); \r\n    }\r\n}\r\n\r\n\r\n.rotate{\r\n    animation: rotate 1.2s ease-in-out 0s infinite normal none;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={rotate:"cMbvYi549nQ0nGOa3aPR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/reset.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").DU`
  *, *::before, *::after {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    appearance: none;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input[type="password"]::-ms-reveal {
    display: none;
  }
  input:focus{
    outline: none;
  }
`},"./src/shared-data-for-styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=["purple","orange","green","cornflowerblue","black"]},"./src/shared-data-for-styles/element-rounding.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>roundingOptionsKeys,d:()=>roundingOptions});const roundingOptions={semicircle:.5,medium:1/3,slight:1/6,none:0},roundingOptionsKeys=Object.keys(roundingOptions)},"./src/utils/overrideObjProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(init,major)=>({...init,...major})}}]);
//# sourceMappingURL=components-Buttons-OnePiece-index-stories.705d5595.iframe.bundle.js.map