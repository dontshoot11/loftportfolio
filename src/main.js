import "./styles/main.pcss";
import Vue from 'vue';
import "./scripts/skills.js";
import "./scripts/parallax.js";
import "./scripts/popup.js";
import "./scripts/feedback.js";
import "./scripts/works.js";

if (process.env.NODE_ENV === "development") {
    require("file-loader!./index.pug")
}