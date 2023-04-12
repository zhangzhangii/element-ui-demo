<!-- eslint-disable -->
<template>
  <div class="hello">
    <el-table v-bind="$attrs" :data="tableData" style="width: 100%"    @selection-change="handleSelectionChange">
      <el-table-column v-if="index" type="index" ></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="60"  @select="change(selection, row)"></el-table-column>
      <template v-for="(item, index) in $attrs.column">
          
        <el-table-column  :key ="index":label="item.label"  :prop="item.prop" >
          <!-- function，数据函数回调-->
          <template slot-scope="scope">
            <component :data="scope.row" :is=" !item.type ? 'com-text': `com-${item.type}` "/>
          </template>
           
          <!-- ！！ -->
        </el-table-column>
    <!-- 插槽  具名插槽，数据传递-->    <!-- ！！ -->
        <!-- <el-table-column  v-if="item.type === 'slot'" :key ="index":label="item.label"  :prop="item.prop" >
          <template slot-scope="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column> -->
        <!-- <el-table-column v-else :label="item.label" :prop="item.prop"></el-table-column> -->
      </template>
    </el-table>
  </div>
</template>

<script>
  //自动化工程，通过type属性，自动读到该组件
  const modules={}
  let files = require.context("../conter",true,/\index.vue$/)
  files.keys().forEach(item => {

    console.log(item);//./function/index.vue   ./text/index.vue
    let name =item.split("/")[1]
    //编译成组件
    let component=files(item).default
      modules[`com-${name}`]=component
   
  });
  console.log(modules); 

export default {
  name: "Table",
  props: {
    // column: {
    //   type: Array,
    //   default: () => [],
    // },
    index: {
      type: Boolean,
      default: false,
    },
    checkbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎66",
          address: "上海市普陀区金沙江路 1888 弄",
          sex: "男",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1508 弄",
          sex: "男",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1918 弄",
          sex: "男",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518666 弄",
          sex: "男",
        },
      ],
    };
  },
  components:{
    ...modules
  },
  created(){
    console.log(this.$attrs);
  },
  methods:{
    handleSelectionChange(val){
      console.log(val);
      this.$emit('checklist',val)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
