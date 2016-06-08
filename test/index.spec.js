describe('type', function() {
  it('function type', function(){
    expect(true).toBeTruthy();
  })

  it('object', function(){
    expect(type(new Object)).toBe('object');
    expect(type({})).toBe('object');
  })

  it('array', function(){
    expect(type(new Array)).toBe('array')
    expect(type([])).toBe('array')
  })

  it('boolean', function(){
    expect(type(new Boolean)).toBe('boolean')
    expect(type(true)).toBe('boolean')
  })

  it('date', function(){
    expect(type(new Date)).toBe('date')
  })

  it('error', function(){
    expect(type(new Error)).toBe('error')
  })

  it('function', function(){
    expect(type(new Function)).toBe('function')
    expect(type(function(){})).toBe('function')
  })

  it('number', function(){
    expect(type(new Number)).toBe('number')
    expect(type(123)).toBe('number')
  })

  it('string', function(){
    expect(type(new String)).toBe('string')
    expect(type('hello world')).toBe('string')
    expect(type("hello world")).toBe('string')
    expect(type("")).toBe('string')
  })

  
  it('undefined', function(){
    expect(type(undefined)).toBe('undefined')
  })

  it('null', function(){
    expect(type(null)).toBe('null')
  })
});