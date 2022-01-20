export default (): HTMLDivElement => {
  const treePageMarkup = `
  <div class="tree-page-container-inner">
    <div class="tree-options">
      <div class="audio-snow">
        <div class="audio"></div>
        <div class="snow"></div>
      </div>
      <p>Выберите ёлку</p>
      <div class="tree-sorts">
        <div class="single-tree">
          <img src="tree/1.png" alt="" data-tree="1">
        </div>
        <div class="single-tree">
          <img src="tree/2.png" alt="" data-tree="2">
        </div>
        <div class="single-tree">
          <img src="tree/3.png" alt="" data-tree="3">
        </div>
        <div class="single-tree">
          <img src="tree/4.png" alt="" data-tree="4">
        </div>
      </div>
      <p>Выберите фон</p>
      <div class="background-sorts">
        <div class="single-bg" data-bg="1"></div>
        <div class="single-bg" data-bg="2"></div>
        <div class="single-bg" data-bg="3"></div>
        <div class="single-bg" data-bg="4"></div>
        <div class="single-bg" data-bg="5"></div>
        <div class="single-bg" data-bg="6"></div>
        <div class="single-bg" data-bg="7"></div>
        <div class="single-bg" data-bg="8"></div>
        <div class="single-bg" data-bg="9"></div>
        <div class="single-bg" data-bg="10"></div>
      </div>
      <p>Гирлянда</p>
      <div class="garland">
        <button class="garland-color multicolor-button"></button>
        <button class="garland-color red-button"></button>
        <button class="garland-color blue-button"></button>
        <button class="garland-color yellow-button"></button>
        <button class="garland-color green-button"></button>
        <button class="garland-switch-button">OFF</button>
      </div>
    </div>
	  <div class="tree-main">
      <div class="snowflakes"></div>
      <div class="garland-container">
      <ul class="garlandString" style="width: 120px; height: 120px;">
      <li class="multicolor" style="transform: rotate(65deg) translate(60px) rotate(-65deg);"></li>
      <li class="multicolor" style="transform: rotate(77deg) translate(60px) rotate(-77deg);"></li>
      <li class="multicolor" style="transform: rotate(89deg) translate(60px) rotate(-89deg);"></li>
      <li class="multicolor" style="transform: rotate(101deg) translate(60px) rotate(-101deg);"></li>
      <li class="multicolor" style="transform: rotate(113deg) translate(60px) rotate(-113deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 170px; height: 170px;">
      <li class="multicolor" style="transform: rotate(60deg) translate(85px) rotate(-60deg);"></li>
      <li class="multicolor" style="transform: rotate(70deg) translate(85px) rotate(-70deg);"></li>
      <li class="multicolor" style="transform: rotate(80deg) translate(85px) rotate(-80deg);"></li>
      <li class="multicolor" style="transform: rotate(90deg) translate(85px) rotate(-90deg);"></li>
      <li class="multicolor" style="transform: rotate(100deg) translate(85px) rotate(-100deg);"></li>
      <li class="multicolor" style="transform: rotate(110deg) translate(85px) rotate(-110deg);"></li>
      <li class="multicolor" style="transform: rotate(120deg) translate(85px) rotate(-120deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 230px; height: 230px;">
      <li class="multicolor" style="transform: rotate(60deg) translate(115px) rotate(-60deg);"></li>
      <li class="multicolor" style="transform: rotate(68deg) translate(115px) rotate(-68deg);"></li>
      <li class="multicolor" style="transform: rotate(76deg) translate(115px) rotate(-76deg);"></li>
      <li class="multicolor" style="transform: rotate(84deg) translate(115px) rotate(-84deg);"></li>
      <li class="multicolor" style="transform: rotate(92deg) translate(115px) rotate(-92deg);"></li>
      <li class="multicolor" style="transform: rotate(100deg) translate(115px) rotate(-100deg);"></li>
      <li class="multicolor" style="transform: rotate(108deg) translate(115px) rotate(-108deg);"></li>
      <li class="multicolor" style="transform: rotate(116deg) translate(115px) rotate(-116deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 300px; height: 300px;">
      <li class="multicolor" style="transform: rotate(60deg) translate(150px) rotate(-60deg);"></li>
      <li class="multicolor" style="transform: rotate(66deg) translate(150px) rotate(-66deg);"></li>
      <li class="multicolor" style="transform: rotate(72deg) translate(150px) rotate(-72deg);"></li>
      <li class="multicolor" style="transform: rotate(78deg) translate(150px) rotate(-78deg);"></li>
      <li class="multicolor" style="transform: rotate(84deg) translate(150px) rotate(-84deg);"></li>
      <li class="multicolor" style="transform: rotate(90deg) translate(150px) rotate(-90deg);"></li>
      <li class="multicolor" style="transform: rotate(96deg) translate(150px) rotate(-96deg);"></li>
      <li class="multicolor" style="transform: rotate(102deg) translate(150px) rotate(-102deg);"></li>
      <li class="multicolor" style="transform: rotate(108deg) translate(150px) rotate(-108deg);"></li>
      <li class="multicolor" style="transform: rotate(114deg) translate(150px) rotate(-114deg);"></li>
      <li class="multicolor" style="transform: rotate(120deg) translate(150px) rotate(-120deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 380px; height: 380px;">
      <li class="multicolor" style="transform: rotate(55deg) translate(190px) rotate(-55deg);"></li>
      <li class="multicolor" style="transform: rotate(59deg) translate(190px) rotate(-59deg);"></li>
      <li class="multicolor" style="transform: rotate(63deg) translate(190px) rotate(-63deg);"></li>
      <li class="multicolor" style="transform: rotate(67deg) translate(190px) rotate(-67deg);"></li>
      <li class="multicolor" style="transform: rotate(71deg) translate(190px) rotate(-71deg);"></li>
      <li class="multicolor" style="transform: rotate(75deg) translate(190px) rotate(-75deg);"></li>
      <li class="multicolor" style="transform: rotate(79deg) translate(190px) rotate(-79deg);"></li>
      <li class="multicolor" style="transform: rotate(83deg) translate(190px) rotate(-83deg);"></li>
      <li class="multicolor" style="transform: rotate(87deg) translate(190px) rotate(-87deg);"></li>
      <li class="multicolor" style="transform: rotate(91deg) translate(190px) rotate(-91deg);"></li>
      <li class="multicolor" style="transform: rotate(95deg) translate(190px) rotate(-95deg);"></li>
      <li class="multicolor" style="transform: rotate(99deg) translate(190px) rotate(-99deg);"></li>
      <li class="multicolor" style="transform: rotate(103deg) translate(190px) rotate(-103deg);"></li>
      <li class="multicolor" style="transform: rotate(107deg) translate(190px) rotate(-107deg);"></li>
      <li class="multicolor" style="transform: rotate(111deg) translate(190px) rotate(-111deg);"></li>
      <li class="multicolor" style="transform: rotate(115deg) translate(190px) rotate(-115deg);"></li>
      <li class="multicolor" style="transform: rotate(119deg) translate(190px) rotate(-119deg);"></li>
      <li class="multicolor" style="transform: rotate(123deg) translate(190px) rotate(-123deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 465px; height: 465px;">
      <li class="multicolor" style="transform: rotate(55deg) translate(232.5px) rotate(-55deg);"></li>
      <li class="multicolor" style="transform: rotate(58.5deg) translate(232.5px) rotate(-58.5deg);"></li>
      <li class="multicolor" style="transform: rotate(62deg) translate(232.5px) rotate(-62deg);"></li>
      <li class="multicolor" style="transform: rotate(65.5deg) translate(232.5px) rotate(-65.5deg);"></li>
      <li class="multicolor" style="transform: rotate(69deg) translate(232.5px) rotate(-69deg);"></li>
      <li class="multicolor" style="transform: rotate(72.5deg) translate(232.5px) rotate(-72.5deg);"></li>
      <li class="multicolor" style="transform: rotate(76deg) translate(232.5px) rotate(-76deg);"></li>
      <li class="multicolor" style="transform: rotate(79.5deg) translate(232.5px) rotate(-79.5deg);"></li>
      <li class="multicolor" style="transform: rotate(83deg) translate(232.5px) rotate(-83deg);"></li>
      <li class="multicolor" style="transform: rotate(86.5deg) translate(232.5px) rotate(-86.5deg);"></li>
      <li class="multicolor" style="transform: rotate(90deg) translate(232.5px) rotate(-90deg);"></li>
      <li class="multicolor" style="transform: rotate(93.5deg) translate(232.5px) rotate(-93.5deg);"></li>
      <li class="multicolor" style="transform: rotate(97deg) translate(232.5px) rotate(-97deg);"></li>
      <li class="multicolor" style="transform: rotate(100.5deg) translate(232.5px) rotate(-100.5deg);"></li>
      <li class="multicolor" style="transform: rotate(104deg) translate(232.5px) rotate(-104deg);"></li>
      <li class="multicolor" style="transform: rotate(107.5deg) translate(232.5px) rotate(-107.5deg);"></li>
      <li class="multicolor" style="transform: rotate(111deg) translate(232.5px) rotate(-111deg);"></li>
      <li class="multicolor" style="transform: rotate(114.5deg) translate(232.5px) rotate(-114.5deg);"></li>
      <li class="multicolor" style="transform: rotate(118deg) translate(232.5px) rotate(-118deg);"></li>
      <li class="multicolor" style="transform: rotate(121.5deg) translate(232.5px) rotate(-121.5deg);"></li>
      <li class="multicolor" style="transform: rotate(125deg) translate(232.5px) rotate(-125deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 555px; height: 555px;">
      <li class="multicolor" style="transform: rotate(55.5deg) translate(277.5px) rotate(-55.5deg);"></li>
      <li class="multicolor" style="transform: rotate(58deg) translate(277.5px) rotate(-58deg);"></li>
      <li class="multicolor" style="transform: rotate(61deg) translate(277.5px) rotate(-61deg);"></li>
      <li class="multicolor" style="transform: rotate(64deg) translate(277.5px) rotate(-64deg);"></li>
      <li class="multicolor" style="transform: rotate(67deg) translate(277.5px) rotate(-67deg);"></li>
      <li class="multicolor" style="transform: rotate(70deg) translate(277.5px) rotate(-70deg);"></li>
      <li class="multicolor" style="transform: rotate(73deg) translate(277.5px) rotate(-73deg);"></li>
      <li class="multicolor" style="transform: rotate(76deg) translate(277.5px) rotate(-76deg);"></li>
      <li class="multicolor" style="transform: rotate(79deg) translate(277.5px) rotate(-79deg);"></li>
      <li class="multicolor" style="transform: rotate(82deg) translate(277.5px) rotate(-82deg);"></li>
      <li class="multicolor" style="transform: rotate(85deg) translate(277.5px) rotate(-85deg);"></li>
      <li class="multicolor" style="transform: rotate(88deg) translate(277.5px) rotate(-88deg);"></li>
      <li class="multicolor" style="transform: rotate(91deg) translate(277.5px) rotate(-91deg);"></li>
      <li class="multicolor" style="transform: rotate(94deg) translate(277.5px) rotate(-94deg);"></li>
      <li class="multicolor" style="transform: rotate(97deg) translate(277.5px) rotate(-97deg);"></li>
      <li class="multicolor" style="transform: rotate(100deg) translate(277.5px) rotate(-100deg);"></li>
      <li class="multicolor" style="transform: rotate(103deg) translate(277.5px) rotate(-103deg);"></li>
      <li class="multicolor" style="transform: rotate(106deg) translate(277.5px) rotate(-106deg);"></li>
      <li class="multicolor" style="transform: rotate(109deg) translate(277.5px) rotate(-109deg);"></li>
      <li class="multicolor" style="transform: rotate(112deg) translate(277.5px) rotate(-112deg);"></li>
      <li class="multicolor" style="transform: rotate(115deg) translate(277.5px) rotate(-115deg);"></li>
      <li class="multicolor" style="transform: rotate(118deg) translate(277.5px) rotate(-118deg);"></li>
      <li class="multicolor" style="transform: rotate(121deg) translate(277.5px) rotate(-121deg);"></li>
      <li class="multicolor" style="transform: rotate(124deg) translate(277.5px) rotate(-124deg);"></li>
      <li class="multicolor" style="transform: rotate(127deg) translate(277.5px) rotate(-127deg);"></li>
    </ul>
    <ul class="garlandString" style="width: 650px; height: 650px;">
      <li class="multicolor" style="transform: rotate(55.5deg) translate(325px) rotate(-55.5deg);"></li>
      <li class="multicolor" style="transform: rotate(58deg) translate(325px) rotate(-58deg);"></li>
      <li class="multicolor" style="transform: rotate(60.5deg) translate(325px) rotate(-60.5deg);"></li>
      <li class="multicolor" style="transform: rotate(63deg) translate(325px) rotate(-63deg);"></li>
      <li class="multicolor" style="transform: rotate(65.5deg) translate(325px) rotate(-65.5deg);"></li>
      <li class="multicolor" style="transform: rotate(68deg) translate(325px) rotate(-68deg);"></li>
      <li class="multicolor" style="transform: rotate(70.5deg) translate(325px) rotate(-70.5deg);"></li>
      <li class="multicolor" style="transform: rotate(73deg) translate(325px) rotate(-73deg);"></li>
      <li class="multicolor" style="transform: rotate(75.5deg) translate(325px) rotate(-75.5deg);"></li>
      <li class="multicolor" style="transform: rotate(78deg) translate(325px) rotate(-78deg);"></li>
      <li class="multicolor" style="transform: rotate(80.5deg) translate(325px) rotate(-80.5deg);"></li>
      <li class="multicolor" style="transform: rotate(83deg) translate(325px) rotate(-83deg);"></li>
      <li class="multicolor" style="transform: rotate(85.5deg) translate(325px) rotate(-85.5deg);"></li>
      <li class="multicolor" style="transform: rotate(88deg) translate(325px) rotate(-88deg);"></li>
      <li class="multicolor" style="transform: rotate(90.5deg) translate(325px) rotate(-90.5deg);"></li>
      <li class="multicolor" style="transform: rotate(93deg) translate(325px) rotate(-93deg);"></li>
      <li class="multicolor" style="transform: rotate(95.5deg) translate(325px) rotate(-95.5deg);"></li>
      <li class="multicolor" style="transform: rotate(98deg) translate(325px) rotate(-98deg);"></li>
      <li class="multicolor" style="transform: rotate(100.5deg) translate(325px) rotate(-100.5deg);"></li>
      <li class="multicolor" style="transform: rotate(103deg) translate(325px) rotate(-103deg);"></li>
      <li class="multicolor" style="transform: rotate(105.5deg) translate(325px) rotate(-105.5deg);"></li>
      <li class="multicolor" style="transform: rotate(108deg) translate(325px) rotate(-108deg);"></li>
      <li class="multicolor" style="transform: rotate(110.5deg) translate(325px) rotate(-110.5deg);"></li>
      <li class="multicolor" style="transform: rotate(113deg) translate(325px) rotate(-113deg);"></li>
      <li class="multicolor" style="transform: rotate(115.5deg) translate(325px) rotate(-115.5deg);"></li>
      <li class="multicolor" style="transform: rotate(118deg) translate(325px) rotate(-118deg);"></li>
      <li class="multicolor" style="transform: rotate(120.5deg) translate(325px) rotate(-120.5deg);"></li>
      <li class="multicolor" style="transform: rotate(123deg) translate(325px) rotate(-123deg);"></li>
      <li class="multicolor" style="transform: rotate(125.5deg) translate(325px) rotate(-125.5deg);"></li>
      <li class="multicolor" style="transform: rotate(128deg) translate(325px) rotate(-128deg);"></li>
    </ul>
      </div>
      <map name="tree-map">
        <area coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" shape="poly" class="treeTargetZone"> 
      </map>
      <img src="tree/3.png" class="main-tree" usemap="#tree-map" alt="">
    </div>
	  <div class="tree-toys">
      <p class="tree-toys-p-topics">Игрушки</p>
      <div class="decor-toys-wrapper"></div>
      <p class="tree-toys-p-topics">Вы нарядили</p>
      <div class="decorated-trees-container">
        <div class="decorated-tree">
          <img src="tree/1.png" class="decorated-tree-img" alt="">
        </div>
        <div class="decorated-tree">
          <img src="tree/2.png" class="decorated-tree-img" alt="">
        </div>
        <div class="decorated-tree">
          <img src="tree/3.png" class="decorated-tree-img" alt="">
        </div>
        <div class="decorated-tree">
          <img src="tree/4.png" class="decorated-tree-img" alt="">
        </div>
        <div class="decorated-tree">
          <img src="tree/5.png" class="decorated-tree-img" alt="">
        </div>
      </div>
    </div> 
  </div
  `;

  const treePageContentDiv: HTMLDivElement = document.createElement('div');
  treePageContentDiv.classList.add('tree-page-container');
  treePageContentDiv.innerHTML = treePageMarkup;
  return treePageContentDiv;
};
