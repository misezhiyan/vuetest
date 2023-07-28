<template>
    <div class="layout">
        <el-container>
            <el-aside :style="'width:' + autoWidth">
                <logoBar :collapsed="collapsed" />
                <menuBar :collapsed="collapsed" />
            </el-aside>
            <el-container>
                <el-header>
                    <el-row>
                        <!-- 菜单展开、折叠 -->
                        <el-icon style="font-size: 35px;" @click="() => (collapsed = !collapsed)">
                            <component :is="collapsed ? Expand: Fold" />
                        </el-icon>
                    </el-row>
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import logoBar from "./components/logoBar/index.vue";
import menuBar from "./components/menuBar/index.vue";
import { ref, computed } from 'vue';
import { isMobile } from '../utils/isMobile'


const collapsed = ref<boolean>(false)

const autoWidth = computed(() => {

    if (collapsed.value && isMobile()) {
        return '0px'
    } else if (collapsed.value) {
        return '68px'
    } else {
        return '200px'
    }

    // return ! ? '68px': '200px'

})


console.log(isMobile())

</script>

<style lang="scss">
.layout {
    display: flex;
    width: 100vw;
    height: 100vh;

    .el-header {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: $menuBg;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    // body>.el-container {
    //     margin-bottom: 40px;
    // }

    // .el-container:nth-child(5) .el-aside,
    // .el-container:nth-child(6) .el-aside {
    //     line-height: 260px;
    // }

    // .el-container:nth-child(7) .el-aside {
    //     line-height: 320px;
    // }
}
</style>