(self.webpackChunkmy_react_ui_kit=self.webpackChunkmy_react_ui_kit||[]).push([[672],{"./src/components/Buttons/FilledButton/RoundedButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RoundedButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),RoundedButton_module=__webpack_require__("./src/components/Buttons/FilledButton/RoundedButton.module.scss"),RoundedButton_module_default=__webpack_require__.n(RoundedButton_module);const TAB_reactionOptions={zoom:styled_components_browser_esm.AH`
		outline: none;
		transform: scale(1.1);
	`,none:styled_components_browser_esm.AH`
		outline: none;
	`},hover_reactionOptions={blackout:styled_components_browser_esm.AH`
		// filter: background-color: rgba(0, 0, 0, 0.01);
	`,none:styled_components_browser_esm.AH``},Button=styled_components_browser_esm.Ay.button.withConfig({shouldForwardProp:prop=>"label"!==prop||prop in{}})`
	${props=>`\n\tcursor: pointer;\n\n\n\tcolor: ${props?.textColor??"initial"}\n\tbackground-color: ${props?.backgroundColor??"initial"}\n\n\t&:hover {\n\t\t${hover_reactionOptions[props?.hover_reaction??"none"]}\n\t}\n\t&:focus-visible {\n\t\t${TAB_reactionOptions[props?.TAB_reaction??"none"]}\n\t}`}
`,FilledButton=props=>{const classes=[props?.className??"",props?.kind?RoundedButton_module_default()[props.kind]:""].join(" ");return react.createElement(Button,{...props,className:classes},props.label)},RoundedButton=(0,react.memo)(FilledButton);FilledButton.__docgenInfo={description:"",methods:[],displayName:"FilledButton",props:{hover_reaction:{required:!1,tsType:{name:"I_hover_reactionOptions"},description:""},TAB_reaction:{required:!1,tsType:{name:"I_TAB_reactionOptions"},description:""},label:{required:!0,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"unknown"},description:""}},composes:["ButtonHTMLAttributes"]};const RoundedButton_stories={title:"Buttons/FilledButton",component:RoundedButton,parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{label:{required:!0,description:"Text in button.",defaultValue:"click",control:"text"},hover_reaction:{control:{type:"select"},options:["none","zwed"],description:"Reaction when hovering over the button."}},args:{label:"clicksss",hover_reaction:"none"}},Normal={args:{}},__namedExportsOrder=["Normal"];Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Normal.parameters?.docs?.source}}}},"./src/components/Buttons/FilledButton/RoundedButton.module.scss":()=>{}}]);
//# sourceMappingURL=components-Buttons-FilledButton-RoundedButton-stories.e02add90.iframe.bundle.js.map