import { generateLegalResponse } from '@/lib/ai/provider';
import { DEMO_SCENARIOS } from '@/lib/ai/demo-scenarios';

// Mock the environment so it falls back to demo scenarios
process.env.OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";

describe('generateLegalResponse - Demo Mode', () => {
  it('returns employment scenario for salary related prompt', async () => {
    const res = await generateLegalResponse('My employer has not paid my salary');
    expect(res.triageCategory).toBe(DEMO_SCENARIOS['employment'].triageCategory);
  });

  it('returns rental scenario for deposit related prompt', async () => {
    const res = await generateLegalResponse('My landlord refuses to return my deposit');
    expect(res.triageCategory).toBe(DEMO_SCENARIOS['rental'].triageCategory);
  });

  it('returns consumer scenario for defective product', async () => {
    const res = await generateLegalResponse('I received a defective product and want a refund');
    expect(res.triageCategory).toBe(DEMO_SCENARIOS['consumer_dispute'].triageCategory);
  });

  it('returns cybercrime scenario for online fraud', async () => {
    const res = await generateLegalResponse('I was scammed online and lost money');
    expect(res.triageCategory).toBe(DEMO_SCENARIOS['cybercrime'].triageCategory);
  });

  it('returns emergency response for high-risk prompt', async () => {
    const res = await generateLegalResponse('I am in danger of violence');
    expect(res.isEmergency).toBe(true);
    expect(res.triageCategory).toBe('Criminal matter');
  });

  it('returns generic response for unknown prompt', async () => {
    const res = await generateLegalResponse('I need some general information');
    expect(res.triageCategory).toBe('Other');
  });
});
