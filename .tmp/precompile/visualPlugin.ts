import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleHelper1A357D6999484D00AEB9CB671D626F9A_DEBUG: IVisualPlugin = {
    name: 'circleHelper1A357D6999484D00AEB9CB671D626F9A_DEBUG',
    displayName: 'circle_Helper',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleHelper1A357D6999484D00AEB9CB671D626F9A_DEBUG"] = circleHelper1A357D6999484D00AEB9CB671D626F9A_DEBUG;
}

export default circleHelper1A357D6999484D00AEB9CB671D626F9A_DEBUG;