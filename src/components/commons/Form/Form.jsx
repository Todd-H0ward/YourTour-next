'use client';

import { useState } from 'react';

import Button from '@/components/commons/Button';
import Checkbox from '@/components/commons/Checkbox';
import Flex from '@/components/commons/Flex';
import Grid from '@/components/commons/Grid';
import Input from '@/components/commons/Input';
import Link from '@/components/commons/Link';
import Radio from '@/components/commons/Radio';
import Select from '@/components/commons/Select';
import Text from '@/components/commons/Text';
import Textarea from '@/components/commons/Textarea';

import formatPhoneNumber from '@/utils/formatPhoneNumber';

import destinations from '@/constants/destinations';

import styles from './Form.module.scss';

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
      <Flex className={styles.content} vertical align="stretch">
        <Grid
          className={styles.content}
          breakpoints={{ large: 2, big: 2, small: 1 }}
        >
          <Input
            required
            label="Имя"
            placeholder="Введите Ваше имя"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <Select
            required
            label="Направление"
            placeholder="Куда хотите ехать"
            items={destinations}
            value={form.destination}
            onChange={(e) => handleChange('destination', e.target.value)}
          />
          <Input
            required
            label="Email"
            type="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <Input
            required
            label="Телефон"
            type="tel"
            placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            value={form.phone}
            onChange={(e) =>
              handleChange('phone', formatPhoneNumber(e.target.value))
            }
          />
          <Input
            required
            label="Дата от"
            type="date"
            placeholder="ДД.ММ.ГГГГ"
            value={form.dateFrom}
            onChange={(e) => handleChange('dateFrom', e.target.value)}
          />
          <Input
            required
            label="Дата до"
            type="date"
            placeholder="ДД.ММ.ГГГГ"
            min={form.dateFrom}
            value={form.dateTo}
            onChange={(e) => handleChange('dateTo', e.target.value)}
          />
        </Grid>
        <Textarea
          required
          label="Комментарий"
          value={form.comment}
          onChange={(e) => handleChange('comment', e.target.value)}
        />
        <Flex className={styles.radio} vertical>
          <Text>Вам есть 18 лет?</Text>
          <Flex className={styles.group}>
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
              Нажимая кнопку, я принимаю условия&nbsp;
              <Link className={styles.link} href="#">
                Лицензионного договора
              </Link>
            </span>
          }
          checked={form.isAgree}
          onChange={(e) => handleChange('isAgree', e.target.checked)}
        />
        <Flex className={styles.btns}>
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
