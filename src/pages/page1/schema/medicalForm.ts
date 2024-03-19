const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    name: {
      span: 8,
      title: '姓名',
      type: 'string',
      placeholder: '请输入',
    },
    input2: {
      title: '性别',
      span: 8,
      type: 'string',
      widget: 'select',
      props: {
        options: [{
          label: '男',
          value: '1',
        }, {
          label: '女',
          value: '0',
        }]
      }
    },
    input3: {
      span: 8,
      type: 'string',
      widget: 'radio',
      props: {
        options: [{
          label: '初诊',
          value: '1',
        }, {
          label: '复诊',
          value: '0',
        }]
      }
    },
    inut4: {
      span: 24,
      title: '是否筛选结核病人',
      type: 'string',
      widget: 'radio',
      props: {
        options: [{
          label: '是',
          value: '1',
        }, {
          label: '否',
          value: '0',
        }]
      }
    },
    inut5: {
      title: '主诉',
      type: 'string',
      widget: 'input',
    },
  },
};

export default schema;