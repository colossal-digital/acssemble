<script>
  import { afterUpdate } from "svelte";
  import { css } from "emotion";
  import { createMediaStyle, combineBoxValues } from "../utils";

  let className = "";
  let styles = css``;
  let type = "";

  export let href = "";
  export let m = undefined;
  export let mb = undefined;
  export let ml = undefined;
  export let mr = undefined;
  export let mt = undefined;
  export let mx = undefined;
  export let my = undefined;

  export let p = undefined;
  export let pb = undefined;
  export let pl = undefined;
  export let pr = undefined;
  export let pt = undefined;
  export let px = undefined;
  export let py = undefined;

  export let height = undefined;
  export let target = "";
  export let width = undefined;

  export { className as class };

  export { m as margin };
  export { mb as marginBottom };
  export { ml as marginLeft };
  export { mr as marginRight };
  export { mt as marginTop };
  export { mx as marginX };
  export { my as marginY };

  export { p as padding };
  export { pb as paddingBottom };
  export { pl as paddingLeft };
  export { pr as paddingRight };
  export { pt as paddingTop };
  export { px as paddingX };
  export { py as paddingY };

  export { type as as };

  afterUpdate(() => {
    styles = css`
      ${createMediaStyle(
        `margin: {0};
         padding: {1};
         height: {2};
         width: {3};`,
        [
          combineBoxValues(mt || my, mr || mx, mb || my, ml || mx, m),
          combineBoxValues(pt || py, pr || px, pb || py, pl || px, p),
          height,
          width
        ]
      )};
      ${className};
    `;
  });
</script>

{#if type === 'a'}
  <a class={styles} {href} {target}>
    <slot />
  </a>
{:else if type === 'article'}
  <article class={styles}>
    <slot />
  </article>
{:else if type === 'aside'}
  <aside class={styles}>
    <slot />
  </aside>
{:else if type === 'blockquote'}
  <blockquote class={styles}>
    <slot />
  </blockquote>
{:else if type === 'code'}
  <code class={styles}>
    <slot />
  </code>
{:else if type === 'dd'}
  <dd class={styles}>
    <slot />
  </dd>
{:else if type === 'dl'}
  <dl class={styles}>
    <slot />
  </dl>
{:else if type === 'dt'}
  <dt class={styles}>
    <slot />
  </dt>
{:else if type === 'footer'}
  <footer class={styles}>
    <slot />
  </footer>
{:else if type === 'h1'}
  <h1 class={styles}>
    <slot />
  </h1>
{:else if type === 'h2'}
  <h2 class={styles}>
    <slot />
  </h2>
{:else if type === 'h3'}
  <h3 class={styles}>
    <slot />
  </h3>
{:else if type === 'h4'}
  <h4 class={styles}>
    <slot />
  </h4>
{:else if type === 'h5'}
  <h5 class={styles}>
    <slot />
  </h5>
{:else if type === 'h6'}
  <h6 class={styles}>
    <slot />
  </h6>
{:else if type === 'header'}
  <header class={styles}>
    <slot />
  </header>
{:else if type === 'hgroup'}
  <hgroup class={styles}>
    <slot />
  </hgroup>
{:else if type === 'hr'}
  <hr class={styles} />
{:else if type === 'li'}
  <li class={styles}>
    <slot />
  </li>
{:else if type === 'main'}
  <main class={styles}>
    <slot />
  </main>
{:else if type === 'ol'}
  <ol class={styles}>
    <slot />
  </ol>
{:else if type === 'p'}
  <p class={styles}>
    <slot />
  </p>
{:else if type === 'pre'}
  <pre class={styles}>
    <slot />
  </pre>
{:else if type === 'nav'}
  <nav class={styles}>
    <slot />
  </nav>
{:else if type === 'section'}
  <section class={styles}>
    <slot />
  </section>
{:else if type === 'span'}
  <span class={styles}>
    <slot />
  </span>
{:else if type === 'ul'}
  <ul class={styles}>
    <slot />
  </ul>
{:else}
  <div class={styles}>
    <slot />
  </div>
{/if}
