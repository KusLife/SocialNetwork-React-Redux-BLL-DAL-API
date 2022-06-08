import { render, screen } from '@testing-library/react';
import CrazyHocApp from './App';

// test('renders without crashing', () => {
//   render( <CrazyHocApp />);
//   const linkElement = screen.getByText(/Test App/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <CrazyHocApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
