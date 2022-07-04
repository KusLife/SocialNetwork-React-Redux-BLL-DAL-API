import React from 'react';
import { create } from 'react-test-renderer';
import Pagenator from './Pagenator';


describe('Paginator component tests', () => {
  test('pages count is 11 but should be shoerd only 10', () => {
    const compomemt = create(
      <Pagenator totalItemsCount={11} pageSize={1} portionSize={10} />
    );
    const root = component.root;
    let spans = root.findeAllByType('span');
    expect(spans.length).toBe(10);
  });

  test('if pages count is more thrn 10, buttom next should be present', () => {
    const component = create(
      <Pagenator totalItemsCount={11} pageSize={1} portionSize={10} />
    );
    const root = component.root;
    let button = root.findeAllByType('button');
    expect(button.length).toBe(1);
  });
});
