'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { addSampleAction } from '../actions/add-sample-action';
import { useSampleStore } from '../stores/sample-store';
import { addSampleSchema, type AddSample } from './add-sample-form-schema';

export function AddSampleForm() {
  const { register, handleSubmit, formState } = useForm<AddSample>({
    resolver: zodResolver(addSampleSchema),
  });
  const { data } = useSampleStore();

  // eslint-disable-next-line no-console
  console.log('Sample Store Data: ', data);

  const onSubmit: SubmitHandler<AddSample> = async data => {
    await addSampleAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        aria-label="Email"
        label="Email"
        error={formState.errors.email?.message}
        {...register('email')}
      />
      <Input
        aria-label="Name"
        label="Name"
        error={formState.errors.name?.message}
        {...register('name')}
      />
      <Input
        aria-label="Description"
        label="Description"
        error={formState.errors.description?.message}
        {...register('description')}
      />
      <Button type="submit">Add Sample</Button>
    </form>
  );
}
