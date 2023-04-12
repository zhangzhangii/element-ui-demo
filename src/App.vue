<template>
  <div id="app">
    <Table ref="Tableref" :column="column" index checkbox @checklist="checklist">
      <template v-slot:operate="slot">
        <el-button size="mini" @click="handleEdit(slot.data)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(slot.data)">删除</el-button>
      </template>
      <template v-slot:operates="slot">
       
        <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      </template>
    </Table>
   <!-- 自定义的 -->
    <Input :v-model="eee" placeholder="请问你要输入的问题"></Input>
    <el-button size="mini" type="danger" @click="handleDelete()">删除</el-button>

  </div>
</template>
<script>
  
import Table from "./components/Table.vue";
import Input from "./components/Input"

export default {


  name: "APP",
  components: { Table,Input },
  data() {
    return {
      column: [
        {type:'function', 
        // callback: (data)=>{
        //   console.log(data);
      
        //     return    `<el-tag type="success">标签二</el-tag>`      //可以用自动化组件工程
        // },
        label: "日期", 
        prop: "date"
       },
        { 
          label: "名称33", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
   
      ],
      eee:''
    };
  },

  methods: {
    handleEdit(e) {
      console.log(e);
    },
    handleDelete(e) {
      console.log(this.eee);
    },
    checklist(val){
      console.log(val);
    }
  },
  computed:{
    dtat(){
      return 2222
  
    }
  }
};
</script>
<style lang="scss"></style>
