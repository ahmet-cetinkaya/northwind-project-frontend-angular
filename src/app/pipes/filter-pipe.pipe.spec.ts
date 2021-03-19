import { filterProductPipe } from './filter-product.pipe';

describe('FilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new filterProductPipe();
    expect(pipe).toBeTruthy();
  });
});
