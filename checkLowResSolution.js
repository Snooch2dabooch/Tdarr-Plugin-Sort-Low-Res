"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.details = void 0;
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
var details = function () { return ({
    name: 'Check Video Resolution, Lower End',
    description: 'Check is video is 240p,320p,360p,480p,720p,1080p,4K,Other',
    style: {
        borderColor: 'orange',
    },
    tags: 'video',
    isStartPlugin: false,
    pType: '',
    requiresVersion: '2.11.01',
    sidebarPosition: -1,
    icon: 'faQuestion',
    inputs: [],
    outputs: [
        {
            number: 1,
            tooltip: 'File is 240p',
        },
        {
            number: 2,
            tooltip: 'File is 320p',
        },
        {
            number: 3,
            tooltip: 'File is 360p',
        },
        {
            number: 4,
            tooltip: 'File is 480p',
        },
        {
            number: 5,
            tooltip: 'File is 720p',
        },
        {
            number: 6,
            tooltip: 'File is 1080p',
        },
        {
            number: 7,
            tooltip: 'File is 4KUHD',
        },
        {
            number: 8,
            tooltip: 'File is Other',
        },
    ],
}); };
exports.details = details;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var plugin = function (args) {
    var lib = require('../../../../../methods/lib')();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
    args.inputs = lib.loadDefaultValues(args.inputs, details);
    var outputNumber = 9;
    switch (args.inputFileObj.video_resolution) {
        case '240p':
            outputNumber = 1;
            break;
        case '320p':
            outputNumber = 2;
            break;
        case '360p':
            outputNumber = 3;
            break;
        case '480p':
            outputNumber = 4;
            break;
        case '720p':
            outputNumber = 5;
            break;
        case '1080p':
            outputNumber = 6;
            break;
        case '4KUHD':
            outputNumber = 7;
            break;
        default:
            outputNumber = 8;
    }
    return {
        outputFileObj: args.inputFileObj,
        outputNumber: outputNumber,
        variables: args.variables,
    };
};
exports.plugin = plugin;
