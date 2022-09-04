<style scoped>
/* <div id="content-list"> */
#content {
    background-color: white;
    margin: 0 0 30px 0;
}

aside {
    background-color: gray;
    margin: 20px;
    width: calc(50% - 40px);
    height: 200px;
    float: left;
}

#content-list {
    background-color: gray;
    margin: 20px;
    width: calc(50% - 40px);
    float: right;
    height: 200px;
}

#content::after {
    clear: both;
    display: block;
    content: '';
}
</style>

<template>
    <div id="content">
        <p>Content Componet</p>

        <!-- component-aside -->
        <Vue31exAside></Vue31exAside>

        <!-- component-content-list -->
        <Vue31exContentList></Vue31exContentList>
    </div>
</template>

<script>
import Vue31exAside from '../components/Vue31exAside.vue';
import Vue31exContentList from '../components/Vue31exContentList.vue';

export default {
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        Vue31exAside: Vue31exAside,
        Vue31exContentList: Vue31exContentList
    }
};
</script>
