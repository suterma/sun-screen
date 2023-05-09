import { AnnotatedColor } from '@/code/AnnotatedColor';
import SunScreenState from './sunscreenstate';

function selectedLampType(state: SunScreenState): AnnotatedColor {
    return state.lampTypes.filter(
        (lampType) => lampType.id === state.selectedLampTypeId,
    )[0];
}

function lampTypes(state: SunScreenState): AnnotatedColor[] {
    return state.lampTypes;
}
function selectedSkyType(state: SunScreenState): AnnotatedColor {
    return state.skyTypes.filter(
        (skyType) => skyType.id === state.selectedSkyTypeId,
    )[0];
}
function skyTypes(state: SunScreenState): AnnotatedColor[] {
    return state.skyTypes;
}
/** Gets the inflecion point of the gradation, in percent */
function gradationInflectionPoint(state: SunScreenState): number {
    return state.gradationInflectionPoint;
}
/** Gets the inflecion width of the gradation, in percent */
function gradationInflectionWidth(state: SunScreenState): number {
    return state.gradationInflectionWidth;
}

function neverShowSplashAgain(state: SunScreenState): boolean {
    return state.neverShowSplashAgain;
}
const getters = {
    selectedLampType,
    lampTypes,
    selectedSkyType,
    skyTypes,
    gradationInflectionPoint,
    gradationInflectionWidth,
    neverShowSplashAgain,
};
export default getters;
