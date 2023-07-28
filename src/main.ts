import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {store} from './store'
import * as ElementPlusIcons from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router).use(store).mount('#app')

// 注册图标
for (const [key, component] of Object.entries(ElementPlusIcons)) {
    app.component(key, component)
}