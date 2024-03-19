import TableRender from 'table-render';
import { Button } from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';

import FormRender, { useForm } from 'form-render';


import { useRef, useState } from 'react';

import searchSchema from "./schema/search"
import columnsSchems from "./schema/table"
import MedicalForm from './MedicalForm';
import ConfigEditor from './EditConfig'

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    key: i,
    title: `Edward King ${i}`,
    age: 32,
    hospital: 'a',
    dept: '1',
    address: `London, Park Lane no. ${i}`,
  });
}



const columns = [
  ...columnsSchems,
  {
    title: '操作',
    render: (row, record) => <>
      <a onClick={() => alert(row.title)}>查看</a>|
      <a onClick={() => alert(row.title)}>小结</a>|
      <a onClick={() => alert(row.title)}>其它</a>
    </>
    
  }
];

const Demo = () => {
  const tableRef = useRef();
  const [medicalFormVisible, setMedicalFormVisible] = useState(false);
  const [editorConfigInfo, setEditorConfigInfo] = useState({});
  function handleEditorSearchConfig () {
    setEditorConfigInfo({
      title: '搜索配置',
      onCancel: () => setEditorConfigInfo({}),
      value: JSON.stringify(searchSchema, null, 2),
      onOk: (val) => {
        try {
          const newSchema = JSON.parse(val);
          tableRef.current.form.setSchema(newSchema, true);
          setEditorConfigInfo({})
        } catch (error) {
          console.error(error)
        }
      }
    })
  }

  const searchOnMount = () => { 
    // 根据服务端下发内容，重置下拉选项
    if(tableRef.current && tableRef.current.form) {
      // @ts-ignore
      tableRef.current.form.setSchemaByPath('hospital', {
        props: {
          options: [
            {label: '医院a', value: 'a'},
            {label: '医院b', value: 'b'},
            {label: '医院c', value: 'c'},
            {label: '医院d', value: 'd'}
          ]
        }
      });
    }

  };

  function handleMedicalSearch(val) {
    console.log('病历检索', val)
    setMedicalFormVisible(false);
  }

  const watch = {
    '#': (allValues, changedValues) => { // '#': () => {} 等同于 onValuesChange
      if(changedValues.hospital) {
        tableRef.current.form.setValueByPath('dept', undefined);
      }
    },
    'hospital': (val) => {
      tableRef.current.form.setSchemaByPath('dept', {
        props: {
          options: [
            {label: `${val}-科室-1`, value: '1'},
            {label: `${val}-科室-2`, value: '2'},
            {label: `${val}-科室-3`, value: '3'},
          ]
        }
    })
  }
}
  const api = () => {
    return {
      data: dataSource,
      total: dataSource.length
    };
  };

  return (
    <div>
      <TableRender
        ref={tableRef}
        search={{ schema: searchSchema, onMount:searchOnMount, watch, displayType: 'inline',}}
        request={api}
        columns={columns}
        toolbarRender={
          <>
            <Button onClick={() => setMedicalFormVisible(true)}>病历检索</Button>
   
          </>
        }
      />
      <div>
        <button onClick={handleEditorSearchConfig}>搜索配置</button>
      </div>
      <MedicalForm onCancel={() => setMedicalFormVisible(false)} onOk={handleMedicalSearch} visible={medicalFormVisible} />
      <ConfigEditor info={editorConfigInfo} />
    </div>
    
  );
}

export default Demo;