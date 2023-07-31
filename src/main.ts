import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {store} from './store'
import * as ElementPlusIcons from '@element-plus/icons'

const app = createApp(App)
// 注册图标
for (const [key, component] of Object.entries(ElementPlusIcons)) {
    app.component(key, component)
}
app.use(router).use(store).mount('#app')