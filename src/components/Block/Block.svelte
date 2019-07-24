<script>
  import { afterUpdate } from "svelte";
  import { css } from "emotion";
  import { createMediaStyle, concatBoxValues } from "../../utils";

  let className = "";
  let type = "";

  export let href = "";
  export let id = "";

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

  export let h = undefined;
  export let target = "";
  export let w = undefined;

  const props = {
    id,
    class: className
  };

  export { className as class };
  export { type as as };
  afterUpdate(() => {
    props.class = css`
      ${createMediaStyle(
        `margin: {0};
         padding: {1};
         height: {2};
         width: {3};`,
        concatBoxValues(m, mt || my, mr || mx, mb || my, ml || mx),
        concatBoxValues(p, pt || py, pr || px, pb || py, pl || px),
        h,
        w
      )};
      ${className};
    `;
  });
</script>

{#if type === 'a'}
  <a {...props} {href} {target}>
    <slot />
  </a>
{:else if type === 'article'}
  <article {...props}>
    <slot />
  </article>
{:else if type === 'aside'}
  <aside {...props}>
    <slot />
  </aside>
{:else if type === 'blockquote'}
  <blockquote {...props}>
    <slot />
  </blockquote>
{:else if type === 'code'}
  <code {...props}>
    <slot />
  </code>
{:else if type === 'dd'}
  <dd {...props}>
    <slot />
  </dd>
{:else if type === 'dl'}
  <dl {...props}>
    <slot />
  </dl>
{:else if type === 'dt'}
  <dt {...props}>
    <slot />
  </dt>
{:else if type === 'footer'}
  <footer {...props}>
    <slot />
  </footer>
{:else if type === 'h1'}
  <h1 {...props}>
    <slot />
  </h1>
{:else if type === 'h2'}
  <h2 {...props}>
    <slot />
  </h2>
{:else if type === 'h3'}
  <h3 {...props}>
    <slot />
  </h3>
{:else if type === 'h4'}
  <h4 {...props}>
    <slot />
  </h4>
{:else if type === 'h5'}
  <h5 {...props}>
    <slot />
  </h5>
{:else if type === 'h6'}
  <h6 {...props}>
    <slot />
  </h6>
{:else if type === 'header'}
  <header {...props}>
    <slot />
  </header>
{:else if type === 'hgroup'}
  <hgroup {...props}>
    <slot />
  </hgroup>
{:else if type === 'hr'}
  <hr {...props} />
{:else if type === 'li'}
  <li {...props}>
    <slot />
  </li>
{:else if type === 'main'}
  <main {...props}>
    <slot />
  </main>
{:else if type === 'ol'}
  <ol {...props}>
    <slot />
  </ol>
{:else if type === 'p'}
  <p {...props}>
    <slot />
  </p>
{:else if type === 'pre'}
  <pre {...props}>
    <slot />
  </pre>
{:else if type === 'nav'}
  <nav {...props}>
    <slot />
  </nav>
{:else if type === 'section'}
  <section {...props}>
    <slot />
  </section>
{:else if type === 'span'}
  <span {...props}>
    <slot />
  </span>
{:else if type === 'ul'}
  <ul {...props}>
    <slot />
  </ul>
{:else}
  <div {...props}>
    <slot />
  </div>
{/if}
