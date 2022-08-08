const summary = require('./summary');

test('2 + 5 = 7', () =>{
    expect(summary(2, 5)).toBe(7);
});

test('a + 5 = NaN', () =>{
    expect(summary('a', 5)).toBe(NaN);
});