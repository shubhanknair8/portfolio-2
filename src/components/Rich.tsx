import { isTodo, type Text, type Todo } from "@/content/types";

/** Visible placeholder for missing content. Deliberately loud so it can't ship unnoticed. */
export function TodoMark({ hint }: { hint: string }) {
  return (
    <span className="todo" data-todo>
      [TODO]{hint ? ` ${hint}` : ""}
    </span>
  );
}

export function Rich({ value }: { value: Text }) {
  if (typeof value === "string") return <>{value}</>;
  if (isTodo(value)) return <TodoMark hint={value.hint} />;
  return (
    <>
      {(value as ReadonlyArray<string | Todo>).map((part, i) =>
        typeof part === "string" ? <span key={i}>{part}</span> : <TodoMark key={i} hint={part.hint} />
      )}
    </>
  );
}
