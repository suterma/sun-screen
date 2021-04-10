import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

/** The store for the sunscreen application data.
 * @remarks Provides annotated colors for both sky and lamp representations.
 */
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    /** The state, which gets rendered in Vue Components. The state is mutated by Mutations */
    state: state,
    /** Mutations, which mutate the state. Mutations are committed by Actions.
     * @remarks Mutation handlers MUST be synchronous.
     */
    mutations: mutations,
    /** Actions, which commit mutations. Actions are dispatched from Vue Compontens.
     *  @remarks Actions are allowed to be asynchronous.
     */
    actions: actions,
    /** Getters, which provide (guarded) access to the state. */
    getters: getters,
    modules: {},
});
