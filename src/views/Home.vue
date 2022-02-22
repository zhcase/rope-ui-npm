<!--
 * @Author: zeHua
 * @Date: 2021-12-09 09:47:36
 * @LastEditors: zeHua
 * @LastEditTime: 2021-12-14 17:08:07
 * @FilePath: /yd-npm-components/rope-ui/examples/views/Home.vue
-->
<template>
  <div class="home">
      <BasicTable
      :registerTable="table1"
      :data="dataList"
      :basicTableOptions="options"
      :basicTableData.sync="getBasicTable"
      title="基础示例"
    >
    </BasicTable>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// import { customTag } from 'rope-ui/dist/index'
export default {
 
  data() {
    return {
      demoStr: '',
      getBasicTable: {},
      dataList:[{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
      options: {
        apiFormat: 'data.items',
        apiParams: { a: 1, b: 2 },
        paginationFormat: 'data.total',
      },
      // table 索引
      table1: [
        {
          label: 'id',
          value: 'date',
          width: 150,
          sortable: true,
        },
        {
          label: '管理员账号',
          value: 'name',
          'show-overflow-tooltip': true,
          width: 200,
         
        },
        {
          label: 'title',
          value: 'address',
          'show-overflow-tooltip': true,
          width: 200,
        },
        {
          label: '用户状态',
          value: 'status',
          options: [
            {
              label: '删除',
              value: 'deleted',
            },
            { label: '发表', value: 'published' },
          ],
        },
      ],
    };
  },
}
</script>
