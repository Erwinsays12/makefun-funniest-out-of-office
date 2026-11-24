# The Funniest Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Erwinsays12/makefun-funniest-out-of-office/rank.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Erwinsays12/makefun-funniest-out-of-office/reward.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)

An entry for the [The Funniest Out-of-Office](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one line — the funniest one-line out-of-office auto-reply
it could write — to `/output/entry.txt`. The line is fixed and
deterministic: the same reply on every run, no input, no clock, no network.

> I'm out of office. Your email will be answered strictly in the order it was ignored.

The joke is a deadpan reversal: instead of promising your email will be
answered in the order it was received, it promises the order it was
ignored — the bureaucratic voice of a real auto-reply, turned against
itself. One line, 84 characters, nothing that could be cut without losing
the laugh.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later. The program validates its own output before
writing: exactly one line, 1–140 characters, UTF-8 text, no trailing
newline.

## License

MIT
