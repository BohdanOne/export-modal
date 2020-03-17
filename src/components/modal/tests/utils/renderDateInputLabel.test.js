import { renderDateInputLabel } from '../../utils/renderDateInputLabel';

it('returns empty string if input is invalid', () => {
  expect(renderDateInputLabel('invalid input')).toBe('');
})
it('returns Date when input is date', () => {
  expect(renderDateInputLabel('date')).toBe('Date');
})
it('returns Every when input is weekly', () => {
  expect(renderDateInputLabel('weekly')).toBe('Every');
})
it('returns Everyday at when input is daily', () => {
  expect(renderDateInputLabel('daily')).toBe('Everyday at');
})