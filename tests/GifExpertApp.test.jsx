import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en el <GifExpertApp />', () => {
  test('Debe hace match con el snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el titulo GifExpertApp', () => {
    render(<GifExpertApp />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'GifExpertApp'
    );
  });

  test('Debe mostrar las categorias', async () => {
    const defaultCategories = ['Dragon Ball', 'One Punch Man'];
    render(<GifExpertApp defaultCategories={defaultCategories} />);
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });
});
