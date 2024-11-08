'use server';

import { type AddSample } from '../components/add-sample-form-schema';

export async function addSampleAction(data: AddSample) {
  // eslint-disable-next-line no-console
  console.log({ data });
}
