/**
 * User-flow strip. Labels never wrap (white-space: nowrap also stops breaks at
 * the hyphen in "Add-ons"); when the strip is wider than the screen it scrolls horizontally.
 */
export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flow" role="region" aria-label="User flow steps" tabIndex={0}>
      <ol className="flow__list">
        {steps.map((s, i) => (
          <li key={s} className="flow__step">
            <span className="flow__pill">
              <span className="flow__num">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="flow__sep">
                ——
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
