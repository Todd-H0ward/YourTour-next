'use client';

import { Controller, useForm } from 'react-hook-form';

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
import validation from '@/constants/validation';

import styles from './Form.module.scss';

const Form = () => {
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      destination: '',
      email: '',
      phone: '',
      dateFrom: '',
      dateTo: '',
      comment: '',
      isAdult: true,
      isAgree: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      onReset={reset}
    >
      <Flex className={styles.content} vertical align="stretch">
        <Grid
          className={styles.content}
          breakpoints={{ large: 2, big: 2, small: 1 }}
        >
          <Controller
            control={control}
            name="name"
            rules={validation.name}
            render={({ field }) => (
              <Input
                label="Имя"
                placeholder="Введите Ваше имя"
                {...field}
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="destination"
            rules={validation.destination}
            render={({ field }) => (
              <Select
                label="Направление"
                placeholder="Куда хотите ехать"
                items={destinations}
                {...field}
                error={errors.destination?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={validation.email}
            render={({ field }) => (
              <Input
                label="Email"
                type="email"
                placeholder="example@mail.com"
                {...field}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            rules={validation.phone}
            render={({ field }) => (
              <Input
                label="Телефон"
                type="tel"
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                value={field.value}
                onChange={(e) =>
                  field.onChange(formatPhoneNumber(e.target.value))
                }
                error={errors.phone?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="dateFrom"
            rules={validation.dateFrom}
            render={({ field }) => (
              <Input
                label="Дата от"
                type="date"
                placeholder="ДД.ММ.ГГГГ"
                {...field}
                error={errors.dateFrom?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="dateTo"
            rules={{
              ...validation.dateTo,
              validate: (value) =>
                value >= getValues('dateFrom') ||
                'Дата возвращения не может быть раньше даты начала',
            }}
            render={({ field }) => (
              <Input
                label="Дата до"
                type="date"
                min={getValues('dateFrom')}
                placeholder="ДД.ММ.ГГГГ"
                {...field}
                error={errors.dateTo?.message}
              />
            )}
          />
        </Grid>
        <Controller
          control={control}
          name="comment"
          render={({ field }) => (
            <Textarea
              label="Комментарий"
              placeholder="Ваш комментарий"
              {...field}
            />
          )}
        />
        <Flex className={styles.radio} vertical>
          <Text>Вам есть 18 лет?</Text>
          <Controller
            control={control}
            name="isAdult"
            render={({ field }) => (
              <Flex className={styles.group}>
                <Radio
                  label="Да"
                  name="isAdult"
                  checked={field.value}
                  onChange={() => field.onChange(true)}
                />
                <Radio
                  label="Нет"
                  name="isAdult"
                  checked={!field.value}
                  onChange={() => field.onChange(false)}
                />
              </Flex>
            )}
          />
        </Flex>
        <Controller
          control={control}
          name="isAgree"
          rules={validation.isAgree}
          render={({ field }) => (
            <Checkbox
              label={
                <span className={styles.agreement}>
                  Нажимая кнопку, я принимаю условия&nbsp;
                  <Link className={styles.link} href="#" isExternal>
                    Лицензионного договора
                  </Link>
                </span>
              }
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              error={errors.isAgree}
            />
          )}
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
