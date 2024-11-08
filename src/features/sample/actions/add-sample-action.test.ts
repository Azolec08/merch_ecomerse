import { describe, expect, it, vi } from 'vitest';
import { type AddSample } from '../components/add-sample-form-schema';
import { addSampleAction } from './add-sample-action';

describe('addSampleAction', () => {
  it('should log data', async () => {
    const data = { name: 'test' } as AddSample;
    const mockConsoleLog = vi.spyOn(console, 'log');

    await addSampleAction(data);

    expect(mockConsoleLog).toHaveBeenCalledWith({ data });
  });
});
