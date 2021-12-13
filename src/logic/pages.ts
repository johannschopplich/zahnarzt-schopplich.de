import { computedInPage } from "iles";
import type { PageComponent } from "iles";

export interface Page extends PageComponent {
  filename: string;
  title: string;
  href: string;
}

export function usePages() {
  return computedInPage(
    () =>
      Object.values(
        // @ts-expect-error: `globEagerDefault` is not defined
        import.meta.globEagerDefault("../pages/**/*.{md,mdx}")
      ) as Page[]
  );
}
