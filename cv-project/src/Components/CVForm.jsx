import '../styles/CVForm.css';
import { FormInput } from './CVEditForm/FormInput';
import { useState } from 'react';

function CVForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        address: '',
        email: '',
        phoneNumber: '',
        aboutMe: '',
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className='cv-form-wrapper'>
            <FormInput data={formData} onChange={handleChange} />
        </div>
    );
}

export default CVForm;
