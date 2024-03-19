import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/page1/index'
import { ConfigProvider } from 'antd'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider componentSize="small" >
      <App />
    </ConfigProvider>
    {/* <ComopnentParser /> */}
  </React.StrictMode>,
)
