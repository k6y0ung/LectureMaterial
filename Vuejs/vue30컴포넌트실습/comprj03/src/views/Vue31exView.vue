<style scoped>
#app * {
    text-align: center;
    vertical-align: middle;
    line-height: 2em;
}

p {
    top: 50%;
    text-align: center;
    padding: 10px 0;
}

header {
    background-color: orange;
    margin: 10px 0;
    width: 100%;
    height: 60px;
}

footer {
    margin: 10px 0;
    background-color: lightblue;
    width: 100%;
    height: 50px;
    clear: both;
}
</style>

<template>
    <div id="app">
        <!-- component-header -->
        <Vue31exHeader></Vue31exHeader>

        <!-- component-content -->
        <Vue31exContent></Vue31exContent>

        <!-- component-footer -->
        <Vue31exFooter></Vue31exFooter>
    </div>
</template>

<script>
import Vue31exHeader from '../components/Vue31exHeader.vue';
import Vue31exContent from '../components/Vue31exContent.vue';
import Vue31exFooter from '../components/Vue31exFooter.vue';

export default {
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        Vue31exHeader: Vue31exHeader,
        Vue31exContent: Vue31exContent,
        Vue31exFooter: Vue31exFooter
    }
};
</script>
