import React, { useState } from 'react'

const useInputField = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldValue = (e) => {
        setFieldValue(e.target.value);
    }

  return [fieldValue, handleFieldValue];
}

export default useInputField