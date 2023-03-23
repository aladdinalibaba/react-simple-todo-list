import { FilterButtonProps } from './type';

export default function FilterButton({ label, isPressed, setVisibility }: FilterButtonProps) {
  return (
    <button
      className="todo__filter-button"
      type="button"
      aria-pressed={isPressed}
      onClick={() => setVisibility(label)}
    >
      <span>{label}</span>
    </button>
  );
}