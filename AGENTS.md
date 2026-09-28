<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site pages are the original Bioocus HTML in src/site/pages, served verbatim by server GET handlers in src/routes/index.tsx and src/routes/$.tsx — why: user requires an exact, unchanged rebuild.
- Site images/CSS/JS are Lovable Assets (pointers in src/assets/site); page HTML references their /__l5e URLs directly.
