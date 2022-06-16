# Media Query

### media query

- media screen and (조건) {
수행문
}

```html
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

- min-width가 480이 될때까지 background-pink

```html
@media screen and (min-width: 480px) {
  #leftsidebar {width: 200px; float: left;}
  #main {margin-left: 216px;}
   -> 이걸 마진이 아니라 width로 주면 화면을 더 늘려도 문단이 늘어나지 않음 
}
</style>
</head>
<body>

<div class="wrapper">
  <div id="leftsidebar">
    <ul id="menulist">
      <li class="menuitem">Menu-item 1</li>
      <li class="menuitem">Menu-item 2</li>
      <li class="menuitem">Menu-item 3</li>
      <li class="menuitem">Menu-item 4</li>
      <li class="menuitem">Menu-item 5</li>
    </ul>
  </div>
  
  <div id="main">
    <h1>Resize the browser window to see the effect!</h1>
    <p>This example shows a menu that will float to the left of the page if the viewport is 480 pixels wide or wider. If the viewport is less than 480 pixels, the menu will be on top of the content.</p>
  </div>
</div>
```