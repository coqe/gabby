import Watson from '../src/watson';
import parseReactRoutes from '../src/parseReactRoutes';

import * as index from '../src';

describe('Index', () => {
  it('should export Watson and parseReactRoutes', () => {
    expect(index).toEqual({
      parseReactRoutes,
      default: Watson,
    });
  });
});