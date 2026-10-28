import { site } from "@/content/site";
import { Rich, TodoMark } from "../Rich";

/** Portrait + availability + name/role. Used in the home hero and the footer. */
export function Profile() {
  return (
    <div className="profile">
      <div className="slot slot--portrait profile__portrait">
        {site.portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={site.portrait} alt={`Portrait of ${site.name}`} />
        ) : (
          <TodoMark hint="portrait" />
        )}
      </div>
      <div className="profile__meta">
        {site.available ? <p className="available">Available for work</p> : <span />}
        <p className="profile__name t-name">
          {site.name}
          <span className="t-span">
            <Rich value={site.role} />
          </span>
        </p>
      </div>
    </div>
  );
}
