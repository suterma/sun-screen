import { AnnotatedColor } from '@/code/AnnotatedColor';
import Color from 'ts-color-class';
import SunScreenState from './sunscreenstate.js';

const state: SunScreenState = {
    lampTypes: [
        new AnnotatedColor(
            'candle',
            'Candle',
            new Color([255, 147, 41]),
            'cake'
        ),
        new AnnotatedColor(
            'fourtyWattTungsten',
            '40W Incandescent',
            new Color([255, 197, 143]),
            'light'
        ),
        new AnnotatedColor(
            'hundredWattTungsten',
            '100W Incandescent',
            new Color([255, 214, 170]),
            'tungsten'
        ),
        new AnnotatedColor(
            'halogen',
            'Halogen',
            new Color([255, 241, 224]),
            'online_prediction'
        ),
        new AnnotatedColor(
            'warmFluorescent',
            'Warm Fluorescent',
            new Color([255, 244, 229]),
            'wb_iridescent'
        ),
        new AnnotatedColor(
            'standardFluorescent',
            'Standard Fluorescent',
            new Color([244, 255, 250]),
            'wb_iridescent'
        ),
        new AnnotatedColor(
            'coolWhiteFluorescent',
            'Cool White Fluorescent',
            new Color([212, 235, 255]),
            'wb_iridescent'
        ),
        new AnnotatedColor(
            'fullSpectrumFluorescent',
            'Full Spectrum Fluorescent',
            new Color([255, 244, 242]),
            'wb_iridescent'
        ),
    ],
    selectedLampTypeId: 'hundredWattTungsten',

    skyTypes: [
        new AnnotatedColor(
            'highNoonSun',
            'High Noon Sun',
            new Color([255, 255, 251]),
            'light_mode'
        ),
        new AnnotatedColor(
            'overcastSky',
            'Overcast Sky',
            new Color([201, 226, 255]),
            'wb_cloudy'
        ),
        new AnnotatedColor(
            'clearBlueSky',
            'Clear Blue Sky',
            new Color([64, 156, 255]),
            'landscape'
        ),
    ],
    selectedSkyTypeId: 'overcastSky',

    /** The inflecion point of the gradation, in percent */
    gradationInflectionPoint: 50,

    /** The inflecion width of the gradation, in percent */
    gradationInflectionWidth: 3,
};

export default state;
