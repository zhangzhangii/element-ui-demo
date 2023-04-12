<template>
 <div>
  <el-input  v-bind="$attrs" ></el-input>
  <div >
    {{aaa}}
  </div>
  <div>{{aaas}}</div>

 </div>
</template>

<script>
export default {
 name: 'Input',
 data () {
  return {
   aaa:'111'
  };
 },
 methods: {},
 created(){
    console.log(this.$attrs);
 },
 computed:{
    aaas(){
        return 444
    }
 }
}
</script>

<style lang='scss' scoped>

</style>