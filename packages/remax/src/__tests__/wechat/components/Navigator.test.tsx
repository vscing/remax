import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Navigator from '../../../adapters/wechat/components/Navigator';

describe('Navigator', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Navigator url="url" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
