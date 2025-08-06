import React, { useState } from 'react';
import { Button } from '../Button';

function FormContainer({ children, extraClasses }) {
    const styles = extraClasses
        ? `edit-block_form ${extraClasses}`
        : 'edit-block_form';
    return <div className={styles}>{children}</div>;
}

function Textarea({
    label,
    id,
    value,
    onInputChange,
    inputClass,
    rows,
    placeholder,
    disabled,
}) {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <textarea
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onInputChange(e)}
                className={inputClass}
                rows={rows}
                disabled={disabled}
            />
        </>
    );
}

function Input({
    label,
    id,
    type,
    value,
    onChange,
    placeholder,
    inputClass,
    disabled,
}) {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
                className={inputClass}
                disabled={disabled}
            />
        </>
    );
}

export function FormInput() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        address: '',
        email: '',
        phoneNumber: '',
        aboutMe: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleClick = () => {
        if (!isSent) {
            console.log('Форма отправлена', formData);
            setIsSent(true);
        } else {
            console.log('Редактирование данных');
            setIsSent(false);
        }
    };

    return (
        <section className='edit-block'>
            <FormContainer>
                <div className='flex-2-rows'>
                    <Input
                        label='First name'
                        id='cvFirstName'
                        type='text'
                        value={formData.firstName}
                        onChange={(e) =>
                            handleChange('firstName', e.target.value)
                        }
                        disabled={isSent}
                    />
                    <Input
                        label='Last Name'
                        id='cvLastName'
                        type='text'
                        value={formData.lastName}
                        onChange={(e) =>
                            handleChange('lastName', e.target.value)
                        }
                        disabled={isSent}
                    />
                </div>

                <Input
                    label='Profession'
                    id='cvProfession'
                    type='text'
                    value={formData.profession}
                    onChange={(e) => handleChange('profession', e.target.value)}
                    placeholder='Web Developer'
                    disabled={isSent}
                />
                <Input
                    label='City and Country'
                    id='cvAddress'
                    type='text'
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    placeholder='RF, Moscow'
                    disabled={isSent}
                />

                <div className='flex-2-rows'>
                    <Input
                        label='Email'
                        id='cvEmail'
                        type='email'
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder='mail@gmail.com'
                        disabled={isSent}
                    />
                    <Input
                        label='Phone number'
                        id='cvPhoneNumber'
                        type='tel'
                        value={formData.phoneNumber}
                        onChange={(e) =>
                            handleChange('phoneNumber', e.target.value)
                        }
                        placeholder='+7 (123) 456-78-90'
                        disabled={isSent}
                    />
                </div>

                <Textarea
                    label='Description (About me)'
                    id='cvAboutMe'
                    value={formData.aboutMe}
                    onInputChange={(e) =>
                        handleChange('aboutMe', e.target.value)
                    }
                    rows={6}
                    placeholder='More info.'
                    disabled={isSent}
                />
                <Button
                    variant='sec'
                    content={isSent ? 'Edit' : 'Send'}
                    onClick={handleClick}
                />
            </FormContainer>
        </section>
    );
}
