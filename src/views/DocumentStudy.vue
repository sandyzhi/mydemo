<template>
    <div class="container">
        <div class="title">文件上传下载</div>
        <el-button>上传</el-button>
        <el-button>下载</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        }
    }
}
</script>
<style lang="scss">
.container{
    text-align: center;
    .title{
        margin-bottom: 30px;
    }
}
</style>