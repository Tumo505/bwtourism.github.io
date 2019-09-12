// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
    ReactInstance,
    Module,
    Surface
} from 'react-360-web';

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [
            new surfaceModule(),
        ],
        ...options,
    });

    introPanel = new Surface(
        500, /* width */
        400, /* height */
        Surface.SurfaceShape.Cylinder /* shape */
    );

    introRoot = r360.renderToSurface(
        r360.createRoot('BW', {
            /* initial props */
        }),
        introPanel
    );

    pridePanel = new Surface(
        100,
        100,
        Surface.SurfaceShape.Flat
    )

    pridePanel.setAngle(
        0.2, /* yaw angle */
        0 /* pitch angle */
    );

    witPanel = new Surface(
        100,
        100,
        Surface.SurfaceShape.Flat
    )

    witPanel.setAngle(
        Math.PI / 2, /* yaw angle */
        0 /* pitch angle */
    );

    schoolPanel = new Surface(
        100,
        100,
        Surface.SurfaceShape.Flat
    )

    schoolPanel.setAngle(
        Math.PI / 1.2, /* yaw angle */
        0 /* pitch angle */
    );

    dinePanel = new Surface(
        100,
        100,
        Surface.SurfaceShape.Flat
    )

    dinePanel.setAngle(-Math.PI / 2, /* yaw angle */
        0 /* pitch angle */
    );

    swampPanel = new Surface(
        100,
        100,
        Surface.SurfaceShape.Flat
    );

    swampPanel.setAngle(
        3.6, /* yaw angle */
        0 /* pitch angle */
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      pridePanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      witPanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      schoolPanel
    );


    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      dinePanel
    );

    r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      swampPanel
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('bots.jpg'));
}

class surfaceModule extends Module {
    constructor() {
        super('surfaceModule');
    }

    resizeSurface(width, height, id) {
        if (id === 'dine') {
            dinePanel.resize(width, height);
        } else if (id === 'swamp') {
            swampPanel.resize(width, height);
        }else if (id === 'pro') {
            schoolPanel.resize(width, height);
        } else if (id === 'WiT') {
            witPanel.resize(width, height);
        } else if (id === 'zebra') {
            pridePanel.resize(width, height);
        }
    }

    start() {
        r360.renderToSurface(
            r360.createRoot('InfoPanel', {
                id: 'zebra',
                text: 'Our Pride!.'
            }),
            pridePanel,
        );

        r360.renderToSurface(
            r360.createRoot('InfoPanel', {
                id: 'WiT',
                text: 'Get to interact and tour with women in the tourism industry!'
            }),
            witPanel,
        );

        r360.renderToSurface(
            r360.createRoot('InfoPanel', {
                id: 'pro',
                text: 'Get to interact and learn more from the professional guides.'
            }),
            schoolPanel,
        );

        r360.renderToSurface(
            r360.createRoot('InfoPanel', {
                id: 'dine',
                text: 'dine and rest in our luxurious lodges.'
            }),
            dinePanel,
        );

        r360.renderToSurface(
            r360.createRoot('InfoPanel', {
                id: 'swamp',
                text: 'Arial view of the beautiful swamps.'
            }),
            swampPanel,
        );

        r360.detachRoot(introRoot);
    }
}
window.React360 = {
    init
};
