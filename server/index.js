"use strict"

require("ignore-styles")

require("@babel/register")({
    ignore: [/(node_modules)/],
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    cache: false,
})

require("./server")