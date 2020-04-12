# css-t3

## Animation

### Keyframe
`name` -> @keyframe name

`animation-iteration-count` -> infinite | number

`animation-direction` -> alternate 往返

`fill-mode` -> forwards -> 不回到原点
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
animation: xoxo 2s ease-in 0s infinite alternate forwards;
```

`@keyframe` -> from/to

-> or percentage % -> will end at origin by default

```css
@keyframes xoxo {
  from {}
  25% {}
  to { width: 200px; }
}
```

### Transition
Used with event/pseudo selector

transitional properties only
```css
.box {
  // t-property -> all | a,b,c..
  // duration
  // timing
  transition: background, border-radius 2s ease-in-out;
}
.box:hover {
  background:red;
  border-radius: 50%;
}
```

### Transform
```css
transform: rotate(180deg);
// skew(25deg), scale(2)
// translateY(100px), translate(1px,2px), translate3d(1,2,3)
```

## Note

### vscode duplicate line
`Shift Opt ⬇️/⬆️`

### Disable scroll
```css
body { overflow: hidden; }
```