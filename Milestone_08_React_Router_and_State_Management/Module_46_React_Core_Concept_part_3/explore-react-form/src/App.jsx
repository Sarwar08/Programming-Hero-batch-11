import React from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import FormAction from './components/FormAction/FormAction'
import ControlledField from './components/ControlledField/ControlledField'
import UnControlledField from './components/UnControlledField/UnControlledField'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'

const App = () => {
  return (
    <div>
      <h1>Explore React Form</h1>
      {/* <SimpleForm /> */}
      {/* <FormAction /> */}
      {/* <ControlledField /> */}
      {/* <UnControlledField /> */}
      {/* <HookForm /> */}
      <ProductManagement />
    </div>
  )
}

export default App