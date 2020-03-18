import collectFormData from '../../utils/collectFormData';

describe('collectFormData', () => {
  it('returns object with names and values from submitted form', () => {
    const form = {
      name: { value: 'name-test' },
      format: { value: 'format-test' },
      email: { value: 'name-test' },
      schedule: { value: 'name-test' }
    };
    expect(collectFormData(form)).toHaveProperty('name', 'name-test');
    expect(collectFormData(form)).not.toHaveProperty('invalidKey');
  });
});
