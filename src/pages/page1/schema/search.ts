const searchSchema = {
  type: 'object',
  labelWidth: 70,
  properties: {
    hospital: {
      title: '医院',
      type: 'string',
      widget: 'select',
      props: {
        placeholder: '请选择医院',
        style: {
          width: '150px'
        }
      }
    },
    dept: {
      title: '科室',
      type: 'string',
      widget: 'select',
      props: {
        placeholder: '请选择科室',
        style: {
          width: '150px',
        }
      }
    },
    isSelf: {
      widget: 'checkboxes',
      props: {
        style: {marginLeft: '30px'},
        options: [
          { label: '本人接诊', value: true }
        ]
      }
    },
    timeRange: {
      title: '就诊时间',
      type: 'range',
      widget: 'dateRange'
    },
    name: {
      title: '姓名',
      type: 'string',
    }
  }
};

export default searchSchema;