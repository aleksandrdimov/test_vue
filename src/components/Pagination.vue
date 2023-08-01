<template>
    <RouterLink :to="`/page${currentPage}`">
        <paginate
            :page-count=Math.ceil(totalItems/pageSize)
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
        >
        </paginate>
    </RouterLink>
   </template>

<script>
import { RouterLink } from "vue-router";
import Paginate from "vuejs-paginate-next";

export default {
    props:['pageSize','totalItems'],
    data(){
        return {
            currentPage:''
        }
    },
    components: { paginate: Paginate, RouterLink },
    methods: {
        clickCallback (pageNum) {
            this.currentPage=pageNum
            this.$emit('changePage',  {paginationNum:pageNum})
        },
    },
};
</script>

<style lang="css">
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

.pagination {
    align-items: center;
    justify-content: center;
}
.page-item{
    cursor: pointer;
}
</style>
