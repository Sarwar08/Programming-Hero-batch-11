/**
Data collection system from FORM:

    1. e.target.[name_of_the_input_field].value

    2. use from action and formData in the action handler. 
        formData.get("name_of_the_input_field")

    3. Controlled component. One per each field. Use State on change of the field. Useful to dynamically handle error. 

    4. Handle all controlled field on one state object.

        const [formData, setFormData] = useState({
            name: '',
            password: '',
            phone: '',
        })

    5. Uncontrolled


*/