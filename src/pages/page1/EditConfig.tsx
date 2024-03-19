import {Drawer, Input} from "antd"
import { useState, useEffect } from "react";


export default function DrawerForm({
  info: {onCancel,
    value,
    onOk,
    title }
}) {
  const [formValue, setFormValue] = useState(value);
  useEffect(() => {
    if(value) {
      setFormValue(value)
    }
  }, [value])
  return <Drawer title={title || '配置'}
    visible={!!value}  onClose={onCancel}
    width={700}
    footer={
      <div style={{textAlign: 'right'}}>
        <button onClick={() => {
          try {
            JSON.parse(formValue);
            onOk(formValue)
          } catch (error) {
            alert('json 格式错误, 请使用标准json格式, 请注意双引号和逗号')
          }
        }}>确定</button>
        <button onClick={onCancel}>取消</button>
      </div>
    
    }
    >
    <Input.TextArea style={{height: '100%'}} value={formValue} onChange={val => {
      setFormValue(val.target.value)
    }}  />
  </Drawer>
}