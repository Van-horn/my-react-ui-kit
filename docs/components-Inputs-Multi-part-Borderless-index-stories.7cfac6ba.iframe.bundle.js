"use strict";(self.webpackChunkmy_react_ui_kit=self.webpackChunkmy_react_ui_kit||[]).push([[706],{"./src/components/Inputs/Multi-part/Borderless/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Stylized:()=>Stylized,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src_reset=__webpack_require__("./src/reset.ts");const Div=styled_components_browser_esm.Ay.div.withConfig({shouldForwardProp:prop=>"children"===prop})`
	${props=>`\n\tposition: relative;\n\twidth: ${props.width}em;\n\theight: ${props.height}em; \n`}
`,Input=styled_components_browser_esm.Ay.input.withConfig({shouldForwardProp:prop=>!["width","height","invalidColor","themeColor"].includes(prop)})`
	${props=>`\n\t\tborder: none ;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 0;\n\t\tbackground-color: transparent;\n\t\tborder-bottom: 0.15em solid ${props?.themeColor??"black"};\n\t\tfont-size: ${props?.height?props.height/2.4:1.1}em;\n\t\t&:user-invalid {\n\t\t\tborder-color: ${props?.invalidColor??"red"};\n\t\t}\n\t\t&:not(:placeholder-shown) + label{\n\t\t\tvisibility: visible;\n\t\t\ttop: -0.7em;\n\t\t\tleft: -0.05em;  \n\t\t\ttransform: scale(0.95);\n\t\t\topacity: 1;\n\t\t\ttransition: all 0.23s ease, opacity 0.1s ease;\n\t\t}\n\t\t`}
`,Label=styled_components_browser_esm.Ay.label.withConfig({shouldForwardProp:prop=>"children"===prop})`
	${props=>`\n\t\tposition: absolute;\n\t\tvisibility: hidden;\n\t\tleft : -0.05em;\n\t\ttop: 0.59em;\n\t\ttransform: scale(1);\n\t\topacity: 0;\n\t\tcolor: ${props.themeColor};\n\t\tfont-size: ${props.height}em;\n\t\t`}
`,BorderlessInput=(0,react.memo)((props=>{const classes=[props?.className??""].join(" ");return react.createElement(react.Fragment,null,react.createElement(src_reset.A,null),react.createElement(Div,{width:props?.width??13,height:props?.height??2.5},react.createElement(Input,{...props,className:classes}),react.createElement(Label,{themeColor:props?.themeColor??"black",height:props?.height?props.height/2.3:1.1},props?.placeholder??"")))})),Borderless=BorderlessInput;BorderlessInput.__docgenInfo={description:"",methods:[],displayName:"BorderlessInput",props:{themeColor:{required:!1,tsType:{name:"string"},description:""},invalidColor:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""}},composes:["InputHTMLAttributes"]};const index_stories={title:"Inputs/MultiPartInputs/Borderless",component:props=>{const[value,setValue]=(0,react.useState)(""),handleSetValue=(0,react.useCallback)((e=>setValue((()=>e.target.value))),[]);return react.createElement(Borderless,{required:!0,value,onChange:handleSetValue,...props})},parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{themeColor:{control:"select",options:__webpack_require__("./src/shared-data-for-styles/colors.ts").A,description:"Input color scheme.",defaultValue:"black"},invalidColor:{control:"text",description:"Color, when input is invalid.",defaultValue:"red"},width:{control:"number",description:"Input width.",defaultValue:13},height:{control:"number",description:"Input height.",defaultValue:2.5}},args:{}},Primary={parameters:{docs:{description:{story:"Input without styles."}}}},Stylized={parameters:{docs:{description:{story:"Added some styles."}}},args:{themeColor:"purple",invalidColor:"orange",placeholder:"login",width:13,height:2.5}},__namedExportsOrder=["Primary","Stylized"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Input without styles."\n      }\n    }\n  }\n}',...Primary.parameters?.docs?.source}}},Stylized.parameters={...Stylized.parameters,docs:{...Stylized.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Added some styles."\n      }\n    }\n  },\n  args: {\n    themeColor: "purple",\n    invalidColor: "orange",\n    placeholder: "login",\n    width: 13,\n    height: 2.5\n  }\n}',...Stylized.parameters?.docs?.source}}}},"./src/reset.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").DU`
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
`},"./src/shared-data-for-styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=["purple","orange","green","cornflowerblue","black"]}}]);
//# sourceMappingURL=components-Inputs-Multi-part-Borderless-index-stories.7cfac6ba.iframe.bundle.js.map