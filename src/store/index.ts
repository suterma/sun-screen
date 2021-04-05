import { AnnotatedColor } from '@/code/AnnotatedColor';
import Color from 'ts-color-class';
import Vue from 'vue';
import Vuex from 'vuex';
import {
    SET_SELECTED_LAMP_TYPE,
    SET_SELECTED_SKY_TYPE,
    SET_GRADATION_INFLECTION_POINT,
} from './mutation-types';

Vue.use(Vuex);

/** The store for the sunscreen application data.
 * @remarks Provides annotated colors for both sky and lamp representations.
 */
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    /** The state, which gets rendered in Vue Components. The state is mutated by Mutations */
    state: {
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
        selectedSkyTypeId: 'highNoonSun',

        /** The inflecion point of the gradation, in percent */
        gradationInflectionPoint: 50,
    },
    /** Mutations, which mutate the state. Mutations are committed by Actions.
     * @remarks Mutation handlers MUST be synchronous.
     */
    mutations: {
        /** Sets the selected lamp type
         * @param state - The vuex state
         * @param lampTypeId - The Id of the selected Lamp
         */
        [SET_SELECTED_LAMP_TYPE](state, lampTypeId: string) {
            state.selectedLampTypeId = lampTypeId;
        },
        /** Sets the selected sky type
         * @param state - The vuex state
         * @param lampTypeId - The Id of the selected sky
         */
        [SET_SELECTED_SKY_TYPE](state, skyTypeId: string) {
            state.selectedSkyTypeId = skyTypeId;
        },

        /** Sets the gradation inflection point
         * @param state - The vuex state
         * @param gradationInflectionPoint - The value for the position of the inflection point, in percent
         */
        [SET_GRADATION_INFLECTION_POINT](
            state,
            gradationInflectionPoint: number
        ) {
            state.gradationInflectionPoint = gradationInflectionPoint;
        },
    },
    /** Actions, which commit mutations. Actions are dispatched from Vue Compontens.
     *  @remarks Actions are allowed to be asynchronous.
     */
    actions: {
        /** Updates the selected lamp type
         * @param context - The action context
         * @param lampTypeId - The Id of the selected lamp to update to
         */
        updateSelectedLampType(context, lampTypeId: string): void {
            context.commit(SET_SELECTED_LAMP_TYPE, lampTypeId);
        },
        /** Updates the selected sky type
         * @param context - The action context
         * @param lampTypeId - The Id of the selected sky to update to
         */
        updateSelectedSkyType(context, skyTypeId: string): void {
            context.commit(SET_SELECTED_SKY_TYPE, skyTypeId);
        },
        /** Updates the gradation inflection point
         * @param context - The action context
         * @param gradationInflectionPoint - The value for the position of the inflection point, in percent
         */
        updateGradationInflectionPoint(
            context,
            gradationInflectionPoint: string
        ): void {
            context.commit(
                SET_GRADATION_INFLECTION_POINT,
                gradationInflectionPoint
            );
        },
    },
    getters: {
        selectedLampType(state): AnnotatedColor {
            return state.lampTypes.filter(
                (lampType) => lampType.id === state.selectedLampTypeId
            )[0];
        },
        lampTypes(state): AnnotatedColor[] {
            return state.lampTypes;
        },
        selectedSkyType(state): AnnotatedColor {
            return state.skyTypes.filter(
                (skyType) => skyType.id === state.selectedSkyTypeId
            )[0];
        },
        skyTypes(state): AnnotatedColor[] {
            return state.skyTypes;
        },
        gradationInflectionPoint(state): number {
            return state.gradationInflectionPoint;
        },
    },
    //   modules: {},
});
