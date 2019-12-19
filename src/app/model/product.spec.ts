import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product("test",100,"http://test.com")).toBeTruthy();
  });
});
