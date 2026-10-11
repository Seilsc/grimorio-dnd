import { Minus, Plus } from 'lucide-react';

/**
 * Stepper propio: botones − / + con iconos + slider.
 * Sustituye al input number nativo (flechas feas del navegador).
 */
export default function Stepper({ label, value, min, max, onChange, hint, plain = false }) {
  const clamp = (v) => Math.max(min, Math.min(max, v));
  const shown = !plain && value > 0 ? `+${value}` : `${value}`;

  return (
    <div className="stepper">
      <span className="stepper-label">{label}</span>
      <div className="stepper-row">
        <button
          type="button" className="step-btn" aria-label={`Reducir ${label}`}
          disabled={value <= min}
          onClick={() => onChange(clamp(value - 1))}
        >
          <Minus size={16} />
        </button>
        <span className="step-value">{shown}</span>
        <button
          type="button" className="step-btn" aria-label={`Aumentar ${label}`}
          disabled={value >= max}
          onClick={() => onChange(clamp(value + 1))}
        >
          <Plus size={16} />
        </button>
      </div>
      <input
        type="range" min={min} max={max} value={value} aria-label={label}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
      />
      {hint && <span className="field-hint">{hint}</span>}
    </div>
  );
}
