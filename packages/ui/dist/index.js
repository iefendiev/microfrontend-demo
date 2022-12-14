var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// components/index.jsx
var components_exports = {};
__export(components_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(components_exports);

// components/Button.jsx
var React = __toESM(require("react"));
var Button = ({ children }) => /* @__PURE__ */ React.createElement("button", {
  className: "px-2 py-1 bg-slate-200 rounded-md shadow-md hover:shadow-lg"
}, /* @__PURE__ */ React.createElement("span", null, children));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
