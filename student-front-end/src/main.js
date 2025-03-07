import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/global.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import request from "./utils/request";
import axios from "axios";

const app = createApp(App);
// app.config.globalProperties.axios=axios;

// app.prototype.request=request
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// app.prototype.$axios=axios;
app.use(store).use(router).use(ElementPlus).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

