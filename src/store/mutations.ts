import SunScreenState from './sunscreenstate';

/** Sets the selected lamp type
 * @param state - The vuex state
 * @param lampTypeId - The Id of the selected lamp
 */
function SET_SELECTED_LAMP_TYPE(state: SunScreenState, lampTypeId: string) {
    state.selectedLampTypeId = lampTypeId;
}
/** Sets the selected sky type
 * @param state - The vuex state
 * @param lampTypeId - The Id of the selected sky
 */
function SET_SELECTED_SKY_TYPE(state: SunScreenState, skyTypeId: string) {
    state.selectedSkyTypeId = skyTypeId;
}

/** Sets the gradation inflection point
 * @param state - The vuex state
 * @param gradationInflectionPoint - The value for the position of the inflection point, in percent
 */
function SET_GRADATION_INFLECTION_POINT(
    state: SunScreenState,
    gradationInflectionPoint: number
) {
    state.gradationInflectionPoint = gradationInflectionPoint;
}

const mutations = {
    SET_SELECTED_LAMP_TYPE,
    SET_SELECTED_SKY_TYPE,
    SET_GRADATION_INFLECTION_POINT,
};

export default mutations;
