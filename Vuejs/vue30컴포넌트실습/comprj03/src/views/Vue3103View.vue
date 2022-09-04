<template>
    <div id="app">
        <h2>컴포넌트 등록</h2>
        <hr />
        <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
        <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
    </div>
</template>

<script>
import Vue3103Comp from '../components/Vue3103Comp';
export default {
    /* pdtmc^2w */
    props: [],
    data() {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        /* data 프로퍼티 값 변경시 this.set(object, key, value) 을 사용 */
        return {
            localmsg1: '부모에서 파일 컴포넌트로 넘겨진 메세지1',
            localmsg2: '부모에서 파일 컴포넌트로 넘겨진 메세지2'
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        Vue3103Comp: Vue3103Comp
    }
};
</script>
