import Input from './Input';
import Button from './Button';
import ToggleButton from './ToggleButton';

export default function ComponentsOverrides(theme) {
  return Object.assign(Input(theme), Button(theme), ToggleButton(theme));
}
