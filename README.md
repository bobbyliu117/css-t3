# css-t3

## [DEMO](https://bobbyliu117.github.io/css-t3/)

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

### 选出同时有多个css class的DOM
```css
.form-group.error input {}
```

### small
```html
<small>Error message</small>
```

### visibility
`visible`, `hidden`
```css
visibility: hidden; // similar to `display: none;`
```

### JS Get parent DOM
```js
const parent = input.parentElement;
```

### JS modify css class
```js
dom.className = 'class-a class-b';
```

### `<select>`
<select name="movies" id="movies">
  <option value="10">End Game ($10)</option>
  <option value="12">GOT ($12)</option>
  <option value="5">X-Ray ($5)</option>
</select>

```html
<select name="movies" id="movies">
  <option value="10">End Game ($10)</option>
```
appearance -> 默认样式，需三个厂前后缀同时生效
```css
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}
```
```js
let selectDom = document.getElementById('movie');
selectDom.value; // 10, the selected option value
// event
selectDom.addEventListener('change', e=>{
  // selected index
  e.target.selectedIndex; // 0
  e.target.value; // '10'
});
```

### 透视效果
```css
.container {perspective: 1000px;}
.screen {transform: rotateX(-45deg);}
```

### nth选择器
选中每个div中第二个 `.seat`
```css
.seat:nth-of-type(2) {margin-right: 18px;}
.seat:nth-last-of-type(2) {margin-left: 18px;}
```

### not选择器
选中是`.seat` 但不是`.occupied`
```css
.seat:not(.occupied):hover {}
```

### JS parse string to int
```js
let a = '2';
typeof +a; // number, same as parseInt(a)
```

### NodeList
```js
const nodeList = document.querySelectorAll('.seat');
// convert to iterable
const nodeArray = [...nodeList].map(..);
// indexOf(obj) -> -1 if not found
nodeArray.indexOf(seat);
```

### LocalStorage
Built-in browser
```js
localStorage.setItem('key1', JSON.stringify(array));
const v1 = JSON.parse(localStorage.getItem('key1'));
```