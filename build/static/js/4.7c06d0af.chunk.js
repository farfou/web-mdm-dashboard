webpackJsonp([4],{162:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=n.n(s),u=n(1),c=n.n(u),l=n(7),p=n(2),f=n(6),d=n(30),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={classInput:"win-textbox",errorMessage:"",isLoading:!1},n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.passwordInput&&this.passwordInput.focus()}},{key:"render",value:function(){var e=this;return this.state.isLoading?i.a.createElement("div",{style:{margin:50,height:"140px"}},i.a.createElement(d.a,{message:p.default.t("commons.loading")+"..."})):i.a.createElement("div",{className:"authentication__password"},i.a.createElement("h2",null,p.default.t("login.enter_password")),i.a.createElement("p",null,p.default.t("login.enter_password_for"),i.a.createElement("br",null),this.props.username,i.a.createElement("br",null),this.state.errorMessage),i.a.createElement("form",{onSubmit:this.props.handleOnSubmit},i.a.createElement("input",{type:"password",name:"password",ref:function(t){e.passwordInput=t},className:this.state.classInput,placeholder:p.default.t("commons.password"),value:this.props.password,onChange:this.props.changeInput,required:!0}),i.a.createElement("button",{className:"btn btn--secondary",type:"button",onClick:function(){return e.props.changePhase(1)}},p.default.t("commons.back")),i.a.createElement("button",{type:"submit",className:"btn btn--primary"},p.default.t("commons.sign_in"))),i.a.createElement("p",null,i.a.createElement(l.a,{to:f.a+"/forgotPassword"},p.default.t("login.forgot_my_password"))))}}]),t}(s.PureComponent);h.propTypes={password:c.a.string.isRequired,changeInput:c.a.func.isRequired,changePhase:c.a.func.isRequired,handleOnSubmit:c.a.func.isRequired,username:c.a.string.isRequired},t.default=h}});
//# sourceMappingURL=4.7c06d0af.chunk.js.map