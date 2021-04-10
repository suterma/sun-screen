import SunScreenState from './sunscreenstate';

/** Sets the selected lamp type
 * @param state - The vuex state
 * @param lampTypeId - The Id of the selected lamp
 */
function SET_SELECTED_LAMP_TYPE(state: SunScreenState, lampTypeId: string) {
    //TODO maybe replace this very simplictic local storage approach with in a more generic way
    localStorage.setItem('selectedLampTypeId', lampTypeId);
    state.selectedLampTypeId = lampTypeId;
}
/** Sets the selected sky type
 * @param state - The vuex state
 * @param lampTypeId - The Id of the selected sky
 */
function SET_SELECTED_SKY_TYPE(state: SunScreenState, skyTypeId: string) {
    //TODO maybe replace this very simplictic local storage approach with in a more generic way
    localStorage.setItem('selectedSkyTypeId', skyTypeId);
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
    //TODO maybe replace this very simplictic local storage approach with in a more generic way
    localStorage.setItem(
        'gradationInflectionPoint',
        gradationInflectionPoint.toString()
    );
    state.gradationInflectionPoint = gradationInflectionPoint;
}

/** Sets whether to show the splash screen ever again
 * @param state - The vuex state
 * @param neverShowSplashAgain - The value for neverShowSplashAgain
 */
function SET_NEVER_SHOW_SPLASH_AGAIN(
    state: SunScreenState,
    neverShowSplashAgain: boolean
) {
    //TODO maybe replace this very simplictic local storage approach with in a more generic way
    localStorage.setItem(
        'neverShowSplashAgain',
        neverShowSplashAgain?.toString()
    );
    state.neverShowSplashAgain = neverShowSplashAgain;
}

/** Initializes the store when the app is created
 * @remarks This provides continuous state over app restarts.
 * @devdoc Maybe later replace this very simplistic approach with a more generic implementation
 */
function initialiseStore(state: SunScreenState) {
    const storedSelectedLampTypeId = localStorage.getItem('selectedLampTypeId');
    if (storedSelectedLampTypeId) {
        state.selectedLampTypeId = storedSelectedLampTypeId;
    }
    const storedSelectedSkyTypeId = localStorage.getItem('selectedSkyTypeId');
    if (storedSelectedSkyTypeId) {
        state.selectedSkyTypeId = storedSelectedSkyTypeId;
    }
    const storedGradationInflectionPoint = localStorage.getItem(
        'gradationInflectionPoint'
    );
    if (storedGradationInflectionPoint) {
        state.gradationInflectionPoint = parseInt(
            storedGradationInflectionPoint
        );
    }
    const storedNeverShowSplashAgain = localStorage.getItem(
        'neverShowSplashAgain'
    );
    if (storedNeverShowSplashAgain) {
        state.neverShowSplashAgain = storedNeverShowSplashAgain == 'true';
    }
}

const mutations = {
    SET_SELECTED_LAMP_TYPE,
    SET_SELECTED_SKY_TYPE,
    SET_GRADATION_INFLECTION_POINT,
    SET_NEVER_SHOW_SPLASH_AGAIN,
    initialiseStore,
};

export default mutations;
