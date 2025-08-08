import React from 'react';
import { useForm } from 'react-hook-form';
import FormContainer from './FormContainer';
import Textarea from './Textarea';
import Input from './Input';
import { Button } from '../Button';

export function FormInput() {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      profession: '',
      address: '',
      email: '',
      phoneNumber: '',
      aboutMe: '',
    },
  });

  const [sent, setSent] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  // Обработчик отправки формы
  const onSubmit = (data) => {
    console.log('Переданные данные:', data);
    setFormData(data);
    setSent(true);
  };

  // Обработчик кнопки
  const handleButtonClick = () => {
    if (!sent) {
      // Если форма еще не отправлена, собираем и выводим данные
      handleSubmit((data) => {
        console.log('Переданные данные:', data);
        setFormData(data);
        setSent(true);
      })();
    } else {
      // Если форма уже отправлена, переключаемся в режим редактирования
      console.log('Редактирование данных');
      setSent(false);
      reset(); // Можно оставить текущие значения или сбросить
    }
  };

  return (
    <section className='edit-block'>
      <div>
        <FormContainer>
          <Input
            label='First name:'
            id='cvFirstName'
            type='text'
            placeholder='Francisco'
            disabled={sent}
            required
            {...register('firstName')}
          />
          <Input
            label='Last Name:'
            id='cvLastName'
            type='text'
            placeholder='Rabaneda Cuervo'
            disabled={sent}
            required
            {...register('lastName')}
          />
          <Input
            label='Profession:'
            id='cvProfession'
            type='text'
            placeholder='Fashion designer'
            disabled={sent}
            required
            {...register('profession')}
          />
          <Input
            label='City and Country:'
            id='cvAddress'
            type='text'
            placeholder='Pasaia, Spain'
            disabled={sent}
            required
            {...register('address')}
          />
          <Input
            label='Email:'
            id='cvEmail'
            type='email'
            placeholder='contact@rabanne.com'
            disabled={sent}
            required
            {...register('email')}
          />
          <Input
            label='Phone number:'
            id='cvPhoneNumber'
            type='tel'
            placeholder='+1 (855) 657-2264'
            disabled={sent}
            required
            {...register('phoneNumber')}
          />

          <Textarea
            label='Description (About me):'
            id='cvAboutMe'
            value={watch('aboutMe')}
            onInputChange={(e) => {
              e.target.value && handleChange('aboutMe')(e);
              setFormData((prev) => ({ ...prev, aboutMe: e.target.value }));
              // Обратите внимание, что это не обязательно при использовании react-hook-form,
              // так как register уже управляет значением.
              // Можно убрать onInputChange и оставить только {...register('aboutMe')}
              // если Textarea корректно подключен к react-hook-form.
              // Для простоты оставим так.
            }}
            rows={6}
            placeholder='More info.'
            disabled={sent}
            {...register('aboutMe')}
          />

          {/* Кнопка */}
          <Button
            variant='sec'
            content={sent ? 'Edit' : 'Send'}
            onClick={handleButtonClick}
          />
        </FormContainer>
      </div>
    </section>
  );
}
