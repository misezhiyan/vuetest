import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [{
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
}, {
    path: '/',
    redirect: '/index',
    name: 'Index',
    component: layout,
    meta: {
        title: '首页',
        affix:true,
        icon: 'house'
    },
    children: [{
        path: 'index',
        name: 'Index',
        component: () => import('../views/index/index.vue'),
        meta: {
            title: '首页',
            icon: 'house',
        }
    }]
}, {
    path: '/user',
    redirect: '/user/student',
    name: 'User',
    component: layout,
    meta: {
        title: '用户管理',
        affix:true,
        icon: 'house'
    },
    children: [{
        path: "student",
        name: "Student",
        component: () => import('../views/user/student/index.vue'),
        meta: {
            title: '生源信息',
            icon: 'UserFilled'
        },
    }, {
        path: "teacher",
        name: "Teacher",
        component: () => import('../views/user/teacher/index.vue'),
        meta: {
            meta: {
                title: '师资信息',
                icon: 'UserFilled'
            },
        }
    }],
},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router