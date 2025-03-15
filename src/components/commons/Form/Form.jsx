'use client';

import Grid from '@/components/commons/Grid/Grid';
import Input from '@/components/commons/Input/Input';
import styles from './Form.module.scss';
import Flex from '@/components/commons/Flex/Flex';
import Button from '@/components/commons/Button/Button';
import Select from '@/components/commons/Select/Select';
import Textarea from '@/components/commons/Textarea/Textarea';
import Text from '@/components/commons/Text/Text';
import Radio from '@/components/commons/Radio/Radio';
import Checkbox from '@/components/commons/Checkbox/Checkbox';
import { destinations } from '@/data/destinations';
import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    destination: '',
    email: '',
    phone: '',
    dateFrom: '',
    dateTo: '',
    comment: '',
    isAdult: true,
    isAgree: false,
  });

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleReset = () => {
    setForm({
      name: '',
      destination: '',
      email: '',
      phone: '',
      dateFrom: '',
      dateTo: '',
      comment: '',
      isAdult: true,
      isAgree: false,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
      <Flex vertical align="stretch" gap={33}>
        <Grid breakpoints={{ large: 2, big: 1, small: 1 }} gap={33}>
          <Input
            label="Имя"
            placeholder="Введите Ваше имя"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <Select
            label="Направление"
            placeholder="Куда хотите ехать"
            items={destinations}
            value={form.destination}
            onChange={(e) => handleChange('destination', e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <Input
            label="Телефон"
            type="tel"
            placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
          <Input
            label="Дата от"
            type="date"
            placeholder="ДД.ММ.ГГГГ"
            value={form.dateFrom}
            onChange={(e) => handleChange('dateFrom', e.target.value)}
          />
          <Input
            label="Дата до"
            type="date"
            placeholder="ДД.ММ.ГГГГ"
            min={form.dateFrom}
            value={form.dateTo}
            onChange={(e) => handleChange('dateTo', e.target.value)}
          />
        </Grid>
        <Textarea
          label="Комментарий"
          value={form.comment}
          onChange={(e) => handleChange('comment', e.target.value)}
        />
        <Flex vertical gap={8}>
          <Text>Вам есть 18 лет?</Text>
          <Flex gap={30}>
            <Radio
              label="Да"
              name="isAdult"
              checked={form.isAdult}
              onChange={() => handleChange('isAdult', true)}
            />
            <Radio
              label="Нет"
              name="isAdult"
              checked={!form.isAdult}
              onChange={() => handleChange('isAdult', false)}
            />
          </Flex>
        </Flex>
        <Checkbox
          label={
            <span className={styles.agreement}>
              Нажимая кнопку, я принимаю условия{' '}
              <a href="#">Лицензионного договора</a>
            </span>
          }
          checked={form.isAgree}
          onChange={(e) => handleChange('isAgree', e.target.checked)}
        />
        <Flex gap={30}>
          <Button type="submit">Найти тур</Button>
          <Button type="reset" variant="filled">
            Сбросить
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
