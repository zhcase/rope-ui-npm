<template>
      <basic-form
        :schema="basicForm"
        @handleSubmit="handleSubmit"
        :span="8"
        ref="form"
        :formModel.sync="formModel"
        :schemaAttr.sync="schemaAttr"
      >
      </basic-form>
</template>

<script>
  export default {
  name:'Basic',
   data() {
    return {
      formModel: {
        field6: 2,
        field1: 22,
      },
      schemaAttr: [],
      activeNames: "1",
      formsss: {},
      num: "",
      basicForm: [
        {
          field: "field1",
          colProps: {
            // span: 12,
            // formSpan: 18,
          },

          label: "字段1",
          type: "textarea",
          rows:'1',
          isVisible:false,
          // style: {
          //   width: "100px",
          // },
          componentProps: {
            onChange: (e) => {
              console.log(e);
              // console.log(1232);
              // if (e) {
              //   this.basicForm[4].componentProps.options = [
              //     { pageviews: 1, id: 2 },
              //   ];
              // }
            },
          },
          component: "Input",
          placeholder: "字段1",
        },

        {
          field: "field2",
          label: "带后缀",
          inputRulesType: "number",
          component: "Input",
          placeholder: "字段2",
          suffix: "天",
        },
        {
          field: "field5",
          label: "字段5",
          component: "Select",
          componentProps: {
            options: [
              {
                label: "选项1",
                value: 1,
              },
              {
                label: "选项2",
                value: 2,
              },
            ],
          },
        },
        {
          field: "field8",
          label: "字段8",
          component: "Select",
          componentProps: {
            options: [
              {
                label: "选项1",
                value: 1,
              },
              {
                label: "选项2",
                value: 2,
              },
            ],
          },
        },
        {
          field: "field10",
          label: "字段7",
          component: "Rate",
        },
      
        {
          slot: "tree",
        },
      ],
    };
  },
  methods:{
      handleSubmit(val){
          console.log(val)
      }
  }
  }
</script>