const LTrim = require('./LeftTrim');

test('Not expecting a string (number)', ()=>{
    expect(()=>{LTrim(423)}).toThrow();
    
});

test('Not expecting a string (object)', ()=>{
    expect(()=>{LTrim({})}).toThrow();
    
});

test('Left Trimming Hello', ()=>{
    expect(LTrim('        Hello')).toBe('Hello');
});

test('Left Trimming without right trimming', ()=>{
    expect(LTrim('        Hello    ')).toBe('Hello    ');
});

test('Left Trimming without replacing middle spaces', ()=>{
    expect(LTrim('        Hello World    ')).toBe('Hello World    ');
});

test('No Right Trimming', ()=>{
    expect(LTrim('Adios    ')).toBe('Adios    ');
});

test('No Right Trimming or replacement of middle spaces', ()=>{
    expect(LTrim('Hello World    ')).toBe('Hello World    ');
});