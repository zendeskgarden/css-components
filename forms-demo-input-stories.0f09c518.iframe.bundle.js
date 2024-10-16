"use strict";(self.webpackChunk_zendeskgarden_css_components=self.webpackChunk_zendeskgarden_css_components||[]).push([[699],{"./packages/forms/demo/input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./packages/forms/dist/index.css");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/forms/demo/utils.js"),_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@zendeskgarden/react-grid/dist/esm/elements/Grid.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/Input"},Field=({children,size,validation,id,hasHint,hasMessage})=>{const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)();return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"mb-8 text-sm"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("code",{dir:"ltr"},(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Z)(theme,".c-field",size,validation))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.L)(theme,"c-field",size,validation)},react__WEBPACK_IMPORTED_MODULE_1__.createElement("label",{className:"c-field__label",htmlFor:id},react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{dir:"ltr"},".c-field__label")),!!hasHint&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"c-field__hint"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{dir:"ltr"},".c-field__hint")),children,!!hasMessage&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("small",{className:"c-field__message",role:"alert"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{dir:"ltr"},".c-field__message"))))};Field.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().array,validation:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,hasHint:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,hasMessage:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool};const Default={render:({hasHint,hasMessage,size,validation,readonly,disabled})=>{const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)();return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x,{dir:theme.rtl?"rtl":"ltr"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Row,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:4},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Field,{size,validation,id:"text",hasHint,hasMessage},react__WEBPACK_IMPORTED_MODULE_1__.createElement("input",{className:"c-field__input",disabled,id:"text",placeholder:".c-field__input",readOnly:readonly,type:"text"}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:4},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Field,{size,validation,id:"textarea",hasHint,hasMessage},react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea",{className:"c-field__input c-field__input--area",disabled,id:"textarea",placeholder:".c-field__input.c-field__input--area",readOnly:readonly,rows:"1"}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:4},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Field,{size,validation,id:"select",hasHint,hasMessage},react__WEBPACK_IMPORTED_MODULE_1__.createElement("select",{className:"c-field__input c-field__input--select",disabled,id:"select"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("option",null,".c-field__input.c-field__input--select"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("option",null,"foo"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("option",null,"bar"))))))},name:"Default",argTypes:{hasHint:{name:"hint",control:{type:"boolean"}},hasMessage:{name:"message",control:{type:"boolean"}},size:{control:{type:"inline-check"},options:["c-field--compact"]},validation:{control:{type:"inline-radio"},options:[void 0,"c-field--success","c-field--warning","c-field--error"]},readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{hasHint:!0,hasMessage:!0},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(Story,null)]},Input=({size,validation,type,disabled,readonly})=>{const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)(),id=`type-${type}`;return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.L)(theme,"c-field",size,validation)},react__WEBPACK_IMPORTED_MODULE_1__.createElement("label",{className:"c-field__label",htmlFor:id},type),react__WEBPACK_IMPORTED_MODULE_1__.createElement("input",{className:"c-field__input",disabled,id,placeholder:"color",readOnly:readonly,required:!0,type}))};Input.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().array,validation:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,readonly:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool};const Types={render:({size,validation,readonly,disabled})=>{const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)();return react__WEBPACK_IMPORTED_MODULE_1__.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x,{dir:theme.rtl?"rtl":"ltr"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Row,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"color",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"date",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"datetime-local",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"email",disabled,readonly}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Row,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"file",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"month",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"number",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"password",disabled,readonly}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Row,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"search",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"tel",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"time",disabled,readonly})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"url",disabled,readonly}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Row,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5",sm:3},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{size,validation,type:"week",disabled,readonly}))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Row,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__.x.Col,{className:"mt-5"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{type:"submit"},"Test")))))},name:"Types",argTypes:{size:{control:{type:"inline-check"},options:["c-field--compact"]},validation:{control:{type:"inline-radio"},options:[void 0,"c-field--success","c-field--warning","c-field--error"]},readonly:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(Story,null)]},__namedExportsOrder=["Default","Types"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: ({\n    hasHint,\n    hasMessage,\n    size,\n    validation,\n    readonly,\n    disabled\n  }) => {\n    /* eslint-disable-next-line react-hooks/rules-of-hooks */\n    const theme = useTheme();\n    return <Grid dir={theme.rtl ? \'rtl\' : \'ltr\'}>\n        <Grid.Row>\n          <Grid.Col className="mt-5" sm={4}>\n            <Field size={size} validation={validation} id="text" hasHint={hasHint} hasMessage={hasMessage}>\n              <input className="c-field__input" disabled={disabled} id="text" placeholder=".c-field__input" readOnly={readonly} type="text" />\n            </Field>\n          </Grid.Col>\n          <Grid.Col className="mt-5" sm={4}>\n            <Field size={size} validation={validation} id="textarea" hasHint={hasHint} hasMessage={hasMessage}>\n              <textarea className="c-field__input c-field__input--area" disabled={disabled} id="textarea" placeholder=".c-field__input.c-field__input--area" readOnly={readonly} rows="1" />\n            </Field>\n          </Grid.Col>\n          <Grid.Col className="mt-5" sm={4}>\n            <Field size={size} validation={validation} id="select" hasHint={hasHint} hasMessage={hasMessage}>\n              <select className="c-field__input c-field__input--select" disabled={disabled} id="select">\n                <option>.c-field__input.c-field__input--select</option>\n                <option>foo</option>\n                <option>bar</option>\n              </select>\n            </Field>\n          </Grid.Col>\n        </Grid.Row>\n      </Grid>;\n  },\n  name: \'Default\',\n  argTypes: {\n    hasHint: {\n      name: \'hint\',\n      control: {\n        type: \'boolean\'\n      }\n    },\n    hasMessage: {\n      name: \'message\',\n      control: {\n        type: \'boolean\'\n      }\n    },\n    size: {\n      control: {\n        type: \'inline-check\'\n      },\n      options: [\'c-field--compact\']\n    },\n    validation: {\n      control: {\n        type: \'inline-radio\'\n      },\n      options: [undefined, \'c-field--success\', \'c-field--warning\', \'c-field--error\']\n    },\n    readonly: {\n      control: {\n        type: \'boolean\'\n      }\n    },\n    disabled: {\n      control: {\n        type: \'boolean\'\n      }\n    }\n  },\n  args: {\n    hasHint: true,\n    hasMessage: true\n  },\n  decorators: [Story => <Story />]\n}',...Default.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'{\n  render: ({\n    size,\n    validation,\n    readonly,\n    disabled\n  }) => {\n    /* eslint-disable-next-line react-hooks/rules-of-hooks */\n    const theme = useTheme();\n    return <form>\n        <Grid dir={theme.rtl ? \'rtl\' : \'ltr\'}>\n          <Grid.Row>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="color" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="date" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="datetime-local" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="email" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n          </Grid.Row>\n          <Grid.Row>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="file" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="month" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="number" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="password" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n          </Grid.Row>\n          <Grid.Row>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="search" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="tel" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="time" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n            <Grid.Col className="mt-5">\n              <Input size={size} validation={validation} type="url" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n          </Grid.Row>\n          <Grid.Row>\n            <Grid.Col className="mt-5" sm={3}>\n              <Input size={size} validation={validation} type="week" disabled={disabled} readonly={readonly} />\n            </Grid.Col>\n          </Grid.Row>\n          <Grid.Row>\n            <Grid.Col className="mt-5">\n              <button type="submit">Test</button>\n            </Grid.Col>\n          </Grid.Row>\n        </Grid>\n      </form>;\n  },\n  name: \'Types\',\n  argTypes: {\n    size: {\n      control: {\n        type: \'inline-check\'\n      },\n      options: [\'c-field--compact\']\n    },\n    validation: {\n      control: {\n        type: \'inline-radio\'\n      },\n      options: [undefined, \'c-field--success\', \'c-field--warning\', \'c-field--error\']\n    },\n    readonly: {\n      control: {\n        type: \'boolean\'\n      }\n    },\n    disabled: {\n      control: {\n        type: \'boolean\'\n      }\n    }\n  },\n  decorators: [Story => <Story />]\n}',...Types.parameters?.docs?.source}}}}}]);