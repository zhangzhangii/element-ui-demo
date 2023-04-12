<template>
 <div>
  <div>  <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag></div>
 </div>
</template>

<script>
export default {
 name: 'index',
 props:{
  data:{
    type:Object,
    default: ()=>{}
  }
 },
 data () {
  return {
    name:'ssssw'
  };
 },
 methods: {}
}
</script>

<style lang='scss' scoped>

</style>