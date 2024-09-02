"use strict";(self.webpackChunkmy_react_ui_kit=self.webpackChunkmy_react_ui_kit||[]).push([[761],{"./src/components/Buttons/FilledButton/FilledButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,Normal2:()=>Normal2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FilledButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TAB_reactionOptions={zoom:styled_components_browser_esm.AH`
		outline: none;
		transform: scale(1.1);
	`,none:styled_components_browser_esm.AH`
		outline: none;
	`},hover_reactionOptions={blackout:styled_components_browser_esm.AH`
		// filter: background-color: rgba(0, 0, 0, 0.01);
	`,none:styled_components_browser_esm.AH``},Button=styled_components_browser_esm.Ay.button.withConfig({shouldForwardProp:prop=>!["styles","label"].includes(prop)})`
	cursor: pointer;
	color: inherit;
	&:hover {
		${props=>hover_reactionOptions[props?.styles?.hover_reaction??"none"]}
	}

	&:focus-visible {
		${props=>TAB_reactionOptions[props?.styles?.TAB_reaction??"none"]}
	}
`,FilledButton=props=>react.createElement(Button,props,props.label),FilledButton_FilledButton=(0,react.memo)(FilledButton);FilledButton.__docgenInfo={description:"",methods:[],displayName:"FilledButton",props:{label:{required:!0,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"IButtonStyles.IStyles"},description:""}},composes:["ButtonHTMLAttributes"]};const FilledButton_stories={title:"Buttons/FilledButton",component:FilledButton_FilledButton,parameters:{layout:"centered"},tags:["autodocs","wip"],argTypes:{label:{required:!0,description:"Text in button.",defaultValue:"click",control:"text"},styles:{control:{type:"object"},description:"Styles for button.",defaultValue:{tabReaction:"none"}}},args:{label:"click",styles:{TAB_reaction:"none",hover_reaction:"none"}}},Normal={args:{}},Normal2={args:{}},__namedExportsOrder=["Normal","Normal2"];Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Normal.parameters?.docs?.source}}},Normal2.parameters={...Normal2.parameters,docs:{...Normal2.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Normal2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Buttons-FilledButton-FilledButton-stories.6b85c4da.iframe.bundle.js.map