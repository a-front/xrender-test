import {Modal} from 'antd';
import FormRender, { useForm } from 'form-render';

import schema from './schema/medicalForm';

export default function MedicalForm({
  visible,
  onCancel,
  onOk,
}) {
  const form = useForm();
  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
    })
  }
  return <Modal title="病历检索"
    visible={visible}  onCancel={onCancel}
    onOk={handleOk}
    width={700}
    >
    <FormRender
      form={form} 
      displayType='inline'
      schema={schema} 
      maxWidth={400}
    />
  </Modal>
}