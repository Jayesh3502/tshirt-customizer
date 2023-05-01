import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color : '#FA008A',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './TrendSetter1.png',
    fullDecal: './TrendSetter2.png',

});

export default state;