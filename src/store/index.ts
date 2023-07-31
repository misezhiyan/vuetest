import { createStore } from 'vuex'
import { Itab } from './type'

interface State {
    tabList: Array<Itab>,
    contextMenuTabId: string
}

export const store = createStore<State>({
    state() {
        return {
            tabList: []
        }
    },

    mutations: {
        // 添加tab
        addTab(state: State, tab: Itab) {
            const isSome = state.tabList.some((item) => item.path == tab.path)
            if (!isSome) {
                state.tabList.push(tab)
            }
        },
        // 删除tab
        closeCurrentTab(state: State, targetName: string) {
            const index = state.tabList.findIndex((item) => item.path == targetName)
            state.tabList.splice(index, 1)
        },
        // 右键打开菜单保存path
        saveCurContextTableId(state: State, curMenuTabId: string) {
            state.contextMenuTabId = curMenuTabId
        },
        // 关闭所有标签
        closeAllTabs(state: State) {
            state.tabList = state.tabList.filter((item) => item.path == '/index')
            sessionStorage.removeItem('TABS_ROUTES')
        },
        // 关闭其它标签(左，右，其它)
        closeOtherTabs(state: State, direction: string) {
            if (direction == 'other') {
                state.tabList = state.tabList.filter((item) => item.path == state.contextMenuTabId || item.path == '/index')
            } else if (direction == 'left') {
                const index = state.tabList.findIndex((item) => item.path == state.contextMenuTabId)
                const homePage = state.tabList.filter((item) => item.path == '/index')[0];
                const leftList = state.tabList.splice(index)

                const homePageIndex = leftList.findIndex((item) => item.path == homePage.path);


                
                console.log(leftList)
                console.log(homePage)
                console.log(homePageIndex)


                if (homePageIndex > 0) {
                    state.tabList = leftList
                } else {
                    state.tabList = state.tabList.filter((item) => item.path == '/index').concat(state.tabList.splice(index -1))
                }
            } else if (direction == 'right') {
                const index = state.tabList.findIndex((item) => item.path == state.contextMenuTabId)
                state.tabList = state.tabList.splice(0, index + 1)
            }
        }
    },

    getters: {
        getAddTab(state: State) {
            return state.tabList
        },
        getCurMenuTabId(state: State) {
            return state.contextMenuTabId
        }
    }
})