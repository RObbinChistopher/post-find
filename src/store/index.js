import { createStore, createLogger } from 'vuex'
import home from './modules/home'
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        home
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
