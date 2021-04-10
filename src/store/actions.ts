import {
    SET_SELECTED_LAMP_TYPE,
    SET_SELECTED_SKY_TYPE,
    SET_GRADATION_INFLECTION_POINT,
    SET_NEVER_SHOW_SPLASH_AGAIN,
} from './mutation-types';

/** Updates the selected lamp type
 * @param context - The action context
 * @param lampTypeId - The Id of the selected lamp to update to
 */
function updateSelectedLampType(context: any, lampTypeId: string): void {
    context.commit(SET_SELECTED_LAMP_TYPE, lampTypeId);
}
/** Updates the selected sky type
 * @param context - The action context
 * @param lampTypeId - The Id of the selected sky to update to
 */
function updateSelectedSkyType(context: any, skyTypeId: string): void {
    context.commit(SET_SELECTED_SKY_TYPE, skyTypeId);
}
/** Updates the gradation inflection point
 * @param context - The action context
 * @param gradationInflectionPoint - The value for the position of the inflection point, in percent
 */
function updateGradationInflectionPoint(
    context: any,
    gradationInflectionPoint: string
): void {
    context.commit(SET_GRADATION_INFLECTION_POINT, gradationInflectionPoint);
}

/** Updates whether to show the splash screen again
 * @param context - The action context
 * @param gradationInflectionPoint - The value for display of the splash screen
 */
function updateNeverShowSplashAgain(
    context: any,
    neverShowSplashAgain: boolean
): void {
    context.commit(SET_NEVER_SHOW_SPLASH_AGAIN, neverShowSplashAgain);
}

const actions = {
    updateSelectedLampType,
    updateSelectedSkyType,
    updateGradationInflectionPoint,
    updateNeverShowSplashAgain,
};

export default actions;
