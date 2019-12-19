import { Cart } from './cart';
import {Product} from './product'

describe('Cart', () => {
  it('should create an instance', () => {
    var p=new Product("test",100,"http://test.com")
    expect(new Cart(p)).toBeTruthy();
  });
});
