<!DOCTYPE html>
<html>
<head>
	<title> Изменения - Heroes 3 HotA </title>
	<meta http-equiv="Content Type" content="text/html" charset="UTF-8" />
	<meta name="description" content="Heroes 3 HotA. Описание основных изменений. Изменения игрового процесса, объектов, интерфейса, исправление багов." />
	<meta name="keywords" content="Heroes, III, Horn, of, the, Abyss, HotA, Cove, герои, 3, Рог, Бездны, Причал" />
	<meta name="format-detection" content="telephone=no"/>
	<meta name="format-detection" content="address=no"/>
	<link rel="apple-touch-icon" sizes="76x76" href="image/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="image/favicon-16x16.png">
	
	<link rel="stylesheet" type="text/css" href="h3style.css"/>
	<link rel="stylesheet" type="text/css" media="screen and (min-width: 1600px)" href="h3style1600.css"/>
	<script type="text/javascript" src="h3search.js" charset="utf-8"></script>
	<script type="text/javascript" src="h3changelogs.js" charset="utf-8"></script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-111005721-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		
		gtag('config', 'UA-111005721-1');
	</script>
</head>


<body>
<img src="image/hotabg.jpg" id="backgroung"></img> <a name="top"></a>


	<div class="topdiv"><img src="gif/header_gif2.gif" id="header_gif"></img></div>
	
	<div class="headerdiv">
	<h1>HEROES 3: Horn of the Abyss</h1> 
	</div>
	
	<div class="bigsearchdiv">
	<div class="searchdiv">		
		<form name="searchform" onsubmit="return false;"> 		
		<input type="text" name="searchinput" class="searchinput" value="" placeholder="найти.." size="30" maxlength="30" autocomplete="off"
		onfocus="this.placeholder=''; incorrectinput(); strcmp();"  onblur="deleteList();" oninput="strcmp();" onkeydown="inputevent(event);">
		<a class="clearbutton" onclick="clearinput();"></a>
		</form>
		<button class="searchbutton" onclick="findindex();"><span>поиск</span></button> 	

		<ul id="searchlist" onmouseover="onmouseoverfunc(event);"></ul>		
	</div></div>
	 
	<div class="maindiv">
	<div  class="menu">
	<ul  class="menulist">
	<li class="menuelement" style="margin-top:-65px;"><a href="index.html">Главная</a></li>
	<li class="menuelement"><a href="newsH3hota.html">Новости</a></li>
	<li class="menuelement"><a href="changelogsH3hota.html">Изменения</a></li>
	<li class="menuelement"><a href="coveH3hota.html">Причал</a>
		<ul class="submenu_1">
		<li style="margin-top:-35px;"><a href="covebuildingsH3hota.html">Строения</a></li>
		<li><a href="creaturesH3hota.html#covecreatures">Существа Причала</a></li>
		<li><a href="heroesH3hota.html#coveheroes">Герои Причала</a></li>
		<li><a href="covemageguild.html">Гильдия магов</a></li>
		</ul>
	</li>
	<li class="menuelement"><a href="creaturesH3hota.html">Существа</a>
		<ul class="submenu_2">
		<li style="margin-top:-35px;"><a href="creaturesH3hota.html#covecreatures">Существа Причала</a></li>
		<li><a href="creaturesH3hota.html#neutralcreatures">Нейтральные</a></li>
		</ul>
	</li>
	<li class="menuelement"><a href="heroesH3hota.html">Герои</a>
		<ul class="submenu_3">
		<li style="margin-top:-35px;"><a href="heroesH3hota.html#coveheroes">Герои Причала</a></li>
		<li><a href="heroesH3hota.html#otherheroes">Прочие</a></li>
		</ul>
	</li>
	<li class="menuelement"><a href="objectsH3hota.html">Объекты</a></li>
	<li class="menuelement"><a href="artefactsH3hota.html">Артефакты</a></li>
	</ul>
	</div>
	
	
	<div id="filler">
		<h2 style="margin-top:5px; margin-bottom: 0px;">Изменения</h2><div class="space"></div>
		
		<p> <span class="tabtab"></span>Здесь отображены основные нововведения HotA, касающиеся игрового процесса. Полное описание, включающее 
		в себя всю информацию об изменениях в новом дополнении, можно найти на <a href="http://h3hota.com/ru/documentation" target="_blank">официальном сайте</a> 
		или на <a href="http://forum.df2.ru/index.php?showtopic=27888" target="_blank">форуме</a>.</p>
		
		<div class="mainpageinfo">
		<span style="font-size: 1.1em; font-weight: bold">Изменения (HotA 1.5.1)</span>
		<ul style="margin: 15px 10px 10px -20px; list-style-image: url(image/special/swordicon.png);">
		<li style="margin-bottom: 15px;"><a href="#commonchanges">Общие изменения игрового процесса.</a></li>
		<li style="margin-bottom: 15px;"><a href="#townchanges">Изменения городов, героев и существ.</a></li>
		<li style="margin-bottom: 15px;"><a href="#objchanges">Изменения стандартных объектов.</a></li>
		<li style="margin-bottom: 15px;"><a href="#interfacechanges">Изменения интерфейса.</a></li>
		<li style="margin-bottom: 15px;"><a href="#bagschanges">Исправление багов игрового процесса.</a></li>
		<li style="margin-bottom: 15px;"><a href="#aichanges">Изменения и исправление багов ИИ.</a></li>
		<li style="margin-bottom: 15px;"><a href="#gskchanges">Исправление багов ГСК (генератор случайных карт).</a></li>
		<li style="margin-bottom: 15px;"><a href="#otherchanges">Прочие изменения.</a></li>
		</ul></div>
			
				
		<a name="commonchanges"></a>
		<p><h4 class="changetitle">Общие изменения игрового процесса.</h4></p>		
		<ol class="innlist">
		<li><span class="listmainrow">В городах игрока с фортом по умолчанию всегда построено жилище 2 уровня.</span></li>
		<li><span class="listmainrow">Изменена механика заклинаний Полет, Хождение по воде и Дверь измерений.</span><br>
		Теперь при помощи них невозможно собирать или посещать объекты, рядом с которыми не пробита охрана. 
		Также см. <a href="#bags1">"исправление багов игрового процесса" п.1.</a></li>
		<li><span class="listmainrow">Родная земля в бою в подземном мире зависит от территории, на которой проходит бой.</span><br>
		В оригинале не зависела, всегда была подземельем.</li>
		<li><span class="listmainrow">Внешние жилища, принадлежащие игрокам, копят существ каждую неделю.</span><br>
		Если жилища никому не принадлежат, то еженедельно количество существ в них равняется одному приросту.</li>
		<li><span class="listmainrow">Введена отрицательная удача.</span><br>
		При отрицательной удаче отряд имеет шанс нанести половинный урон. Чем выше степень отрицательной удачи - тем выше шанс 
		<span class="nowrap">(<b>-1</b>: 8.3<span style="font-size:0.9em;">%</span>, <b>-2</b>: 16.7<span style="font-size:0.9em;">%</span>, <b>-3</b>: 25<span style="font-size:0.9em;">%</span>)</span>.
		<a><div class="miniimg"><img id="imgunluck" src="image/changelog/chunluck(150x141).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
		<li><span class="listmainrow">Существа в бою без героя теперь могут подвергаться эффекту удачи и неудачи.</span><br>
		В оригинале удача никогда не срабатывала для существ, на стороне которых в битве нет героя, даже если она была у них положительная или отрицательная.</li>
		<li><span class="listmainrow">Навык Разведка увеличивает радиус обзора героя на 1/3/5 клеток вместо 1/2/3.</span></li>
		<li><span class="listmainrow">Исключены морские элементы со случайных карт без воды.</span><br>
		На картах без воды недоступны герои со специализацией по навигации, заместо них доступны другие герои 
		(<a href="subpage/derek.html">Дерек</a>, <a href="subpage/beatrix.html">Беатрис</a> и <a href="subpage/kinkery.html">Кинкерия</a>).<br>
		При генерации случайной карты без воды следующие элементы полностью исключаются из игры:
			<div class="changelogsdiv" style="margin-top:10px;">
			<div id="id0" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id0span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
			<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>артефакты Шляпа морского капитана, Ожерелье морского пути, Сапоги левитации;</li>
				<li>заклинания Вызвать корабль, Затопить корабль, Хождение по воде;</li>
				<li style="margin:0;">вторичный навык Навигация.</li>
			</ul>
			</div></div>
		На случайных картах без воды стартовое заклинание героя Джем Вызвать корабль было изменено на Благословение.</li>
		<li><span class="listmainrow">На случайных картах отключены недели и месяцы существ и чумы.</span><br></li>
		<li><span class="listmainrow">Стрелковая башня полностью игнорирует защиту цели.</span><br>
		Также см. <a href="#bags4">"исправление багов игрового процесса" п.4.</a></li>
		<li><span class="listmainrow">Оковы войны действуют только когда у обеих сторон в битве есть герои.</span><br>
		Раньше, имея на себе Оковы войны, нельзя было сбежать от нейтрального отряда.</li>
		</ol>
		<b>С версии 1.5.0:</b><br>
		<ol class="innlist" start="12">
		<li><span class="listmainrow">Добавлен механизм исследования заклинаний, позволяющий за плату изменять заклинания в Гильдии магов.</span></li>
		<li><span class="listmainrow">Добавлена возможность отказаться от изучения вторичного навыка, предлагаемого Хижиной ведьмы или Ученым.</span></li>
		<li><span class="listmainrow">Добавлена возможность атаковать стрелками врукопашную, атаковать гарпиями без возврата, атаковать Сказочными драконами вместо колдовства и передвигаться Архангелами и Властителями пропасти вместо воскрешения трупа (переключение по специальной кнопке или клавише Alt).</span></li>
		<li><span class="listmainrow">Добавлена возможность передвигать двухклеточных существ в бою на одну клетку назад.</span></li>
		<li><span class="listmainrow">Сфера запрещения и Плащ отречения теперь запрещены по умолчанию.</span></li>
		<li><span class="listmainrow">Древняя лампа запрещена на случайных картах.</span></li>
		<li><span class="listmainrow">Теперь при повторном колдовстве Полета после улучшения навыка Магии воздуха (и при его колдовстве с надетыми Крыльями ангела) уровень полета улучшается и тратится мана.</span></li>
		<li><span class="listmainrow">При увеличении уровня Мудрости в городе герой автоматически изучает ставшие доступными заклинания города.</span></li>
		<li><span class="listmainrow">На случайных картах неподбираемые объекты больше не могут генерироваться на дорогах.</span></li>
		<li><span class="listmainrow">Добавлена возможность генерации на случайных картах Ящиков пандоры и Хижин провидцев с любыми существами.</span></li>
		</ol>
		<b>С версии 1.5.1:</b><br>
		<ol class="innlist" start="22">
		<li><span class="listmainrow">Монстры нового месяца теперь не появляются ближе, чем на расстоянии двух клеток, к уже стоящим на карте монстрам.</span></li>
		</ol>
		<div class="space"></div>
		
		
		<a name="townchanges"></a>
		<p><h4 class="changetitle">Изменения городов, героев и существ.</h4></p>			
		<div class="changelogsdiv">
			<div id="castle" class="resizebutton" onclick="showdiv(this.id);"></div><span id="castlespan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Замок</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Герои</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Сэр Мюллих запрещен по умолчанию. Вместо него разрешен Лорд Хаарт.</li>
					<li>Сильвия запрещена на картах без воды. Вместо нее доступен новый герой <a href="subpage/beatrix.html">Беатрис</a>.</li>
				</ul>
			</ul>
			</div>
		</div>		
		<div class="changelogsdiv">
			<div id="rampart" class="resizebutton" onclick="showdiv(this.id);"></div><span id="rampartspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Оплот</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Стартовые армии героев</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Количество Эльфов уменьшено с 3-6 до 2-4.</li></ul>
				<li style="margin:0;">Герои</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>На случайных картах без воды стартовое заклинание героя Джем Вызвать корабль было изменено на Благословение.</li></ul>
			</ul>
			</div>
		</div>		
		<div class="changelogsdiv">
			<div id="tower" class="resizebutton" onclick="showdiv(this.id);"></div><span id="towerspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Башня</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Дерево строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Алтарь желаний, Золотой павильон, ул. Золотой павильон, Заоблачный храм и ул. Заоблачный храм 
					не требуют постройки Гильдии магов 1 ур. и Башни магов.</li>
					<li>Золотой павильон и ул. Золотой павильон требуют постройки Алтаря желаний.</li>
					<li>Ул. Алтарь желаний не требует постройки Башни магов (но сохраняет требование постройки Гильдии магов 1 ур.).</li>
				</ul>				
				<li>Цены строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Цена Фабрики големов уменьшена с 2000 до 1500 золота.</li>
					<li>Цена ул. Фабрики големов уменьшена с 2000 до 1500 золота.</li>
					<li>Цена Башни магов уменьшена с 2500 до 2000 золота.</li>
					<li>Цена Алтаря желаний уменьшена с 3000 до 2500 золота.</li>
					<li>Цена ул. Заоблачного храма уменьшена с 25000 до 20000 золота.</li>
				</ul>				
				<li>Стартовые армии героев</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Количество Каменных горгулий увеличено с 3-5 до 5-7.</li>
					<li>Количество Каменных големов увеличено с 2-3 (и 2 во втором отряде Жозефины) до <span class="nowrap">4-5.</span></li>
				</ul>
			</ul>
			</div>
		</div>		
		<div class="changelogsdiv">
			<div id="inferno" class="resizebutton" onclick="showdiv(this.id);"></div><span id="infernospan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Инферно</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Дерево строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Ул. Провал не требует постройки Гильдии магов 2 ур. (но сохраняет требование постройки Гильдии магов 1 ур.).</li></ul>
				<li>Цены строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Цена Серных туч уменьшена с 5 до 4 серы.</li>
					<li>Цена ул. Чертогов пороков уменьшена с 5 до 4 ртути.</li>
					<li>Цена ул. Псарен уменьшена с 5 до 4 серы.</li>
					</ul>
				<li>Существа</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Магоги могут направлять выстрел огненным шаром (подробнее <a href="subpage/special/magogsability.html">здесь</a>).</li>
					<li>Архидьяволы теперь уменьшают удачу противника на 2, а не на 1.</li>
					</ul>
				<li>Стартовые армии героев</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Количество Бесов увеличено с 15-25 до 20-30.</li></ul>
			</ul>
			</div>
		</div>			
		<div class="changelogsdiv">
			<div id="necropolis" class="resizebutton" onclick="showdiv(this.id);"></div><span id="necropolisspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Некрополис</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Количество поднимаемых Некромантией Скелетов снижено вдвое</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Навык Некромантия поднимает 5<span style="font-size:0.9em;">%</span> <b>/</b> 10<span style="font-size:0.9em;">%</span> <b>/</b> 15<span style="font-size:0.9em;">%</span> погибших после боя в виде Скелетов вместо 10<span style="font-size:0.9em;">%</span> <b>/</b> 20<span style="font-size:0.9em;">%</span> <b>/</b> 30<span style="font-size:0.9em;">%</span>.</li>
					<li>Амулет гробовщика добавляет 2.5<span style="font-size:0.9em;">%</span> к навыку Некромантии вместо 5<span style="font-size:0.9em;">%</span>.</li>
					<li>Сутана вампира добавляет 5<span style="font-size:0.9em;">%</span> к навыку Некромантии вместо 10<span style="font-size:0.9em;">%</span>.</li>
					<li>Сапоги мертвеца добавляет 7.5<span style="font-size:0.9em;">%</span> к навыку Некромантии вместо 15<span style="font-size:0.9em;">%</span>.</li>
					<li>Плащ короля нежити добавляет 15<span style="font-size:0.9em;">%</span> к навыку Некромантии вместо 30<span style="font-size:0.9em;">%</span>.</li>
					<li>Усилитель некромантии добавляет 5<span style="font-size:0.9em;">%</span> к навыку Некромантии всем героям вместо 10<span style="font-size:0.9em;">%</span>.</li>
					<li>Количество поднмаемых Некромантией Скелетов теперь считается по всей армии врага в целом, а не по отдельным отрядам.</li>
					</ul>
				<li>Цены строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Цена  Ул. Пристанища душ уменьшена с 5 до 4 ртути.</li>
					<li>Цена Мавзолея уменьшена с 10 до 5 руды и с 10 до 4 серы.</li>
					<li>Цена ул. Мавзолея уменьшена с 5 до 4 серы.</li>
					</ul>
				<li>Существа</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Личи и Могущественные личи могут направлять выстрел облаком смерти 
					(подробнее <a href="subpage/special/lichsability.html">здесь</a>).</li></ul>
				<li>Герои</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Галтран запрещен по умолчанию. Вместо него доступен новый герой <a href="subpage/ranlu.html">Ранлу</a>.</li></ul>
			</ul>
			</div>
		</div>	
		<div class="changelogsdiv">
			<div id="dungeon" class="resizebutton" onclick="showdiv(this.id);"></div><span id="dungeonspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Темница</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Стартовые армии героев</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Количество Троглодитов уменьшено с 30-40 до 20-30.</li>
					<li>Количество Гарпий увеличено с 4–6 до 6–8 <b>(с версии 1.5.0)</b>.</li>
				</ul>
			</ul>
			</div>
		</div>
		<div class="changelogsdiv">
			<div id="citadel" class="resizebutton" onclick="showdiv(this.id);"></div><span id="citadelspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Цитадель</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Цены строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Пещеры циклопов для постройки больше не требуют кристаллы.</li>
					<li>Ул. Пещеры циклопов теперь требуют для постройки 10 кристаллов.</li>
					</ul>
			</ul>
			</div>
		</div>
		<div class="changelogsdiv">
			<div id="fortress" class="resizebutton" onclick="showdiv(this.id);"></div><span id="fortressspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Крепость</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Стартовые армии героев</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Количество Гноллов увеличено с 10-20 до 15-25.</li>
					<li>Количество Змиев увеличено с 2-4 до 3-4.</li>
					</ul>
				<li>Герои</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Вой запрещен на картах без воды. Вместо него доступен новый герой <a href="subpage/kinkery.html">Кинкерия</a>.</li></ul>
			</ul>
			</div>
		</div>
		<div class="changelogsdiv">
			<div id="conflux" class="resizebutton" onclick="showdiv(this.id);"></div><span id="confluxspan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Сопряжение</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Добавлен новый тип родной земли для Сопряжения — высокогорье; штраф на перемещение по высокогорью отсутствует (с версии 1.5.0).</li>
				<li>Прирост Огненных птиц и Фениксов снижен до 1 (2 после постройки Замка).</li>
				<li>Новая постройка: Погребальная урна</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Стоимость: 5000 золота и 5 ртути.</li>
					<li>Требования: Форт, Гильдия магов 1 ур., Волшебный фонарь, Алтарь воздуха, 
					Алтарь воды, Алтарь огня, Алтарь земли, Алтарь мысли, Погребальный костер.</li>
					<li>Увеличивает прирост Огненных птиц и Фениксов на 1.</li>
					</ul>
				<li>Дерево строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Ул. Волшебный фонарь требует постройки Гильдии магов 1 ур. и Университета магии.</li></ul>
				<li>Цены строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Цена Погребального костра увеличена с 10 до 20 ртути и с 10000 до 15000 золота.</li></ul>
				<li>Строения</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Северное сияние позволяет изучать заклинания только тех уровней, для которых в городе с ней построена Гильдия магов.</li>
					<li>Северное сияние больше не дает заклинаний, запрещенных для Сопряжения, кроме случаев, когда они настроены как обязательные для данного города <b>(с версии 1.5.0)</b>.</li>
				</ul>
				<li>Существа</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Иммунитет к огню Огненных птиц заменен игнорированием 50<span style="font-size:0.9em;">%</span> урона заклинаний магии огня.</li></ul>
				<li>Цены существ</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Цена найма Психических элементалей увеличена с 750 до 950 золота.</li>
					<li>Цена найма Элементалей магии увеличена с 800 до 1200 золота.</li>
					<li>Цена найма Огненных птиц увеличена с 1500 до 2000 золота.</li>
					<li>Цена найма Фениксов увеличена с 2000 золота + 1 ртуть до 3000 золота + 1 ртуть.</li>
				</ul>
			</ul>
			</div>
		</div>	
		<div class="changelogsdiv">
			<div id="cove" class="resizebutton" onclick="showdiv(this.id);"></div><span id="covespan" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Причал (с версии 1.5.0)</span>
			<div class="hiddendiv" style="display: none;">
			<ul style="margin: 15px 0 0 -20px; font-weight: bold; list-style-image: url(image/special/swordicon.png);">
				<li>Бонус к приросту Матросов от Кабака уменьшен с 6 до 4.</li>
				<li>Цены строений</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Цена Порохового склада в ртути, сере, кристаллах и драгоценных камнях увеличена с 2 до 5.</li>
				</ul>
				<li>Существа</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>Атака Никса-Воина уменьшена с 15 до 14, защита с 20 до 17.</li>
					<li>Скорость Пиратов/Корсаров/Морских волков изменена с 7/7/7 на 6/7/8, цена увеличена с 225/250/300 до 225/275/375 золота.</li>
					<li>Количество выстрелов Морских волков увеличено с 10 до 12.</li>
					<li>Скорость Жриц моря/Заклинательниц уменьшена с 7/8 до 6/7.</li>
					<li>Урон Пушки уменьшен с 5–8 до 4–7, цена уменьшена с 5000 до 4000 золота.</li>
				</ul>
				<li>Герои</li>
				<ul type="disc" style="margin: 10px 0 0 -20px; font-weight: normal; list-style-image: none;">
					<li>В стартовых навыках Джереми логистика заменена на нападение.</li>
					<li>В стартовых навыках Мириам нападение заменено на логистику.</li>
				</ul>
			</ul>
			</div>
		</div>
		<div class="space"></div>
		
		
		<a name="objchanges"></a>
		<p><h4 class="changetitle">Изменения стандартных объектов.</h4></p>		
		<ol class="innlist">
		<li><span class="listmainrow">Карты Картографов теперь стоят 10000 вместо бывших 1000.</span></li>
		<li><span class="listmainrow">Хижины провидцев не могут требовать артефактов, являющихся частями сборных артефактов.</span></li>
		<li><span class="listmainrow">Сопряжение Стихий (внешнее жилище) дает +1 к приросту всех видов элементалей
		(раньше давало +1 к приросту только воздушных элементалей).</span></li>	
		<li><span class="listmainrow">На случайных картах вместо старых фортов на холме генерируются <a href="objectsH3hota.html#hillfort">новые</a>.</span></li>		
		<li><span class="listmainrow">На случайных картах теперь все монолиты двухсторонние.</span></li>
		<li><span class="listmainrow">На случайных картах больше не генерируются следующие объекты:</span></li>			
			<div class="changelogsdiv">
			<div id="id1" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id1span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
			<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>святилища;</li>
				<li>картографы;</li>
				<li>палатки ключников;</li>
				<li style="margin:0;">старый форт на холме.</li>
			</ul>
			</div></div>
		<li><span class="listmainrow">Добавлены ограничения на максимальное количество некоторых объектов в зоне:</span></li>
			<div class="changelogsdiv">
			<div id="id2" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id2span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
			<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>не более 1 Обелиска;</li>
				<li>не более 1 Убежища воров;</li>
				<li>не более 3 Таверн;</li>
				<li>не более 1 Гильдии наемников;</li>
				<li>не более 1 <a href="objectsH3hota.html#landShrine">Святыни магической тайны</a>;</li>
				<li>не более 1 <a href="objectsH3hota.html#cannonyard">Пушечного двора</a> и <a href="objectsH3hota.html#militaryfabric">Фабрики военной техники</a>;</li>
				<li>не более 1 <a href="objectsH3hota.html#loyaltytemple">Храма лояльности</a>;</li>
				<li>не более 1 <a href="objectsH3hota.html#skelTransformer">Преобразователя скелетов</a>;</li>
				<li>не более 1 <a href="objectsH3hota.html#lamp">Древней лампы</a>;</li>
				<li>не более 1 <a href="objectsH3hota.html#waterplace">Водопоя</a>;</li>
				<li style="margin:0;">не более 1 <a href="objectsH3hota.html#townportal">Городских врат</a>.</li>
			</ul>
			</div></div>
		<li><span class="listmainrow">Добавлены ограничения на максимальное количество свитков заклинаний:</span></li>
			<div class="changelogsdiv">
			<div id="id3" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id3span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
			<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>не более 6 свитков 1 ур.;</li>
				<li>не более 5 свитков 2 ур.;</li>
				<li>не более 4 свитков 3 ур.;</li>
				<li>не более 3 свитков 4 ур. (не касается заклинаний Городской портал и Хождение по воде);</li>
				<li>не более 2 свитков 5 ур. (не касается заклинаний Полет и Дверь измерений);</li>
				<li style="margin:0;">не более 1 свитка заклинаний Городской портал, Хождение по воде, Полет, Дверь измерений.</li>
			</ul>
			</div></div>
		При этом добавлен механизм равномерного распределения заклинаний в свитках: на карте всегда будет примерно 
		одинаковое количество свитков со всеми заклинаниями одного и того же уровня, причем свитки с одинаковыми 
		заклинаниями имеют меньший шанс находиться рядом друг с другом.
		</ol>
		<b>С версии 1.5.0:</b>
		<ol class="innlist" start="9">
		<li><span class="listmainrow">Охрана Опытного цеха уменьшена с 50/100/150/200 до 40/80/120/160 Железных големов.</span></li>
		<li><span class="listmainrow">Изменена награда в <a href="objectsH3hota.html#banks6">Храме моря</a>.</span></li>
		</ol>
		<div class="space"></div>
		
		
		<a name="interfacechanges"></a>
		<p><h4 class="changetitle">Изменения интерфейса.</h4></p>		
		<ol class="innlist">
		<li><span class="listmainrow">Изменения интерфейса боя:</span></li>				
		<div class="changelogsdiv">
		<div id="id4" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id4span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
		<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>количество вариантов выбора скорости в бою расширено до 5;
				<a><div class="miniimg"><img id="img0" src="image/changelog/chspdvar(500x512).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
				<li>исправлены недочеты интерфейса выбора цели заклинания (при колдовстве теперь отображаются доступные цели и тень курсора);
				<a><div class="miniimg"><img id="img1" src="image/changelog/chspells(350x341).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
				<li>кнопка активации колдовства Сказочных драконов изменена с F на G;</li>
				<li>добавлен показ длительности заклинаний в окно просмотра отряда;
				<a><div class="miniimg"><img id="img2" src="image/changelog/chtime(400x76).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
				<li>добавлен показ возможного количества убитых существ при показе возможного урона.
				<a><div class="miniimg"><img id="img3" src="image/changelog/chkill(500x25).jpg" style="width: 300px;" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
			</ul>
		</div></div>
		<li><span class="listmainrow">При посещении банков существ добавлена информация об их охране 
		(также можно посмотреть по клику правой кнопкой мыши или при наведении).</span>
		<a><div class="miniimg"><img style="float: left; clear: right; margin-right: 30px;" id="img4_1" src="image/changelog/chguard_1(400x246).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a>
		<a><div class="miniimg"><img id="img4" src="image/changelog/chguard(400x244).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
		<li><span class="listmainrow">Добавлен показ доступных для найма существ (по клику правой кнопкой мыши или при наведении).</span>
		<a><div class="miniimg"><img id="img5" src="image/changelog/chcr(400x246).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
		<li><span class="listmainrow">Добавлено отображение рассчитываемых параметров в описания некоторых заклинаний:</span></li>			
		<div class="changelogsdiv">
		<div id="id5" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id5span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
		<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>для Видений показывается их радиус действия;</li>
				<li>для Стены огня и Минного поля показывается их урон;</li>
				<li>для Лечения показывается количество исцеляемого здоровья;</li>
				<li>для Воскрешения и Поднятия мертвецов показывается максимальное количество восстанавливаемого здоровья;</li>
				<li>для Жертвы показывается, сколько максимального здоровья за каждое жертвуемое существо будет восстановлено;</li>
				<li>для Гипноза показывается максимальное здоровье подчиняемого стека;</li>
				<li>для заклинаний призыва элементалей показывается количество призываемых элементалей.</li>
			</ul>
		</div></div>
		<li><span class="listmainrow">Добавлены цифровые количества примерных описаний армий.</span>
		<a><div class="miniimg"><img id="img6" src="image/changelog/chcrnum(241x217).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
		<li><span class="listmainrow">Добавлена кнопка обмена между героями в городе.</span>
		<a><div class="miniimg"><img id="img7" src="image/changelog/chchange(500x172).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
		<li><span class="listmainrow">Добавлена возжность отключить в настройках карты приключений фоновые звуки.</span>
		<a><div class="miniimg"><img id="img8" src="image/changelog/chbksnd(500x506).jpg" title="Увеличить изображение" onclick="openImg(this.id, this.src);"/></div></a></li>
		<li><span class="listmainrow">Добавлена поддержка новых размеров карт: H (180x180), <span class="nowrap">XH (216x216)</span>, G (252x252).</span></li>
		<li><span class="listmainrow">В игре и редакторе реализована поддержка новых условий победы: 
		«Победить всех монстров» <img style="height: 20px; margin-top: 5px;" src="image/changelog/chcond1.jpg"/> и 
		«Выжить определенное время» <img style="height: 20px;" src="image/changelog/chcond2.jpg"/> .</span></li>
		</ol>
		<b>С версии 1.5.0:</b>
		<ol class="innlist" start="10">
		<li><span class="listmainrow">На ходу противника в онлайн-игре теперь можно строить предполагаемые маршруты героев на следующий ход.</span></li>
		<li><span class="listmainrow">При удержании Alt и наведении курсора на клетку карты приключений пишется подсказка о длине пути текущего героя до этой клетки.</span></li>
		<li><span class="listmainrow">При удержании Shift можно выбирать героя кликом по нему на карте (даже если уже выбран другой герой).</span></li>
		<li><span class="listmainrow">Исправлены многочисленные недочеты с необновлявшимися максимальными единицами передвижения героев и ряд недочетов расчета длины пути.</span></li>
		<li><span class="listmainrow">Диалог о покупке Книги заклинаний теперь показывается внутри экрана Гильдии магов.</span></li>
		<li><span class="listmainrow">Для кнопки обмена в городе добавлена горячая клавиша E.</span></li>
		<li><span class="listmainrow">Добавлена возможность увольнять героев, находящихся в городе.</span></li>
		<li><span class="listmainrow">Добавлена возможность увольнять героев через экран города и обзора королевства.</span></li>
		</ol>
		<div class="space"></div>
		
		
		<a name="bagschanges"></a>
		<p><h4 class="changetitle">Исправление багов игрового процесса.</h4></p>		
		<ol class="innlist">
		<a name="bags1"></a>
		<li><span class="listmainrow">Исправлены баги с заклинанием Полет.</span></li>
		<div class="changelogsdiv">
			<div id="id6" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id6span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
			<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 10px 0 0 -20px;">
				<li>Теперь невозможно досрочное сражение с охраной при перелете через охраняемую клетку;</li>
				<li style="margin:0;">Нельзя прервать полет на недоступных клетках.</li>
			</ul>
		</div></div>
		<li><span class="listmainrow">Исправлена некорректная работа ограниченного боезапаса.</span></li>
		<div class="changelogsdiv">
			<div id="id7" class="resizebutton" onclick="showdiv(this.id);"></div><span id="id7span" class="listmainrow spshowdiv" onclick="showdiv2(this.id);">Показать</span>
			<div class="hiddendiv" style="display: none;">
			<ul type="disc" style="margin: 15px 0 0 -20px;">
				<li>теперь боевые машины не могут стрелять при нулевом количестве выстрелов (в этом случае она пропускает ход);</li>
				<li>стрелковая башня имеет бесконечный боезапас;</li>
				<li>теперь выстрелы тратятся при стрельбе по стене;</li>
				<li style="margin:0;">при двойном выстреле тратится два выстрела, при этом имея всего один заряд нельзя выстрелить дважды.</li>
			</ul>
		</div></div>
		<li><span class="listmainrow">Исправлен баг "пронос нейтралов".</span><br>
		Теперь при наличии нейтралов, даже только в самых первых слотах армии, герой никогда не может игнорировать штраф местности из-за того, 
		что она является родной землей каких-либо других его существ. Также герой без существ передвигается по любой земле как по родной.</li>
		<a name="bags4"></a>
		<li><span class="listmainrow">Исправлен неверный расчет бонусов урона для Стрелковых башен.</span><br>
		Параметр атаки у Стрелковой башни - 10, также учитывается атака защищающегося героя и его навык Стрельбы. Поэтому урон 
		у Стрелковой башни теперь выше, чем в оригинале, где атака считалась нулевой, а параметры героя не влияли на урон.</li>
		<li><span class="listmainrow">Цена боевых машин больше не включается в стоимость откупа.</span></li>
		<li><span class="listmainrow">Исправлена некорректная работа навыка Разведки и дальности обзора.</span><br>
		Раньше при выкупе героя, получении или продвижении навыка Разведки или надевании артефакта, увеличивающего дальность обзора, 
		новая территория открывалась не сразу, а только после шага героем по карте (теперь всегда открывается сразу).</li>
		<li><span class="listmainrow">Значок смелости больше не дает иммунитета к магии разума.</span></li>
		<li><span class="listmainrow">Исправлен баг, из-за которого Гарпия после атаки Дендроида или Дендроида-солдата и получения 
		ответного удара возвращалась на исходную позицию, несмотря на то, что была привязана.</span></li>
		<li><span class="listmainrow">Исправлен баг, из-за которого Забывчивость колдовалась на всех врагов уже при наличии продвинутой магии воды, а не только экспертной.</span></li>
		<li><span class="listmainrow">Исправлена некорректная работа поднятия нежити при помощи Некромантии.</span><br>
		Теперь нельзя поднимать нежить из призванных и принесенных в жертву существ, а так же из существ, из которых были подняты демоны 
		(из самих поднятых демонов нежить поднимать можно).</li>
		<li><span class="listmainrow">Стартовые навыки Мудрость Уланда и Разведка Димера понижены с продвинутого уровня до базового т.к. у них по 2 стартовых вторичных навыка.</span></li>
		<li><span class="listmainrow">Университет больше не предлагает к изучению Некромантию.</span></li>
		<li><span class="listmainrow">Исправлен баг с возможностью повторного посещения Сирен героем после боя.</span></li>
		<li><span class="listmainrow">Исправлен баг с возможностью получить бесконечные очки передвижения за счет Шляпы адмирала.</span></li>
		<li><span class="listmainrow">Исправлен баг с отсутствием пересчета очков передвижения при побеге героя на воде.</span></li>
		</ol>
		<b>С версии 1.5.0:</b>
		<ol class="innlist" start="16">
		<li><span class="listmainrow">Исправлен критический баг с некорректными монстрами на карте, появляющимися в начале месяца существ.</span></li>
		<li><span class="listmainrow">Исправлен баг: улучшенным существам бонусы специализации рассчитывались относительно параметров не улучшенных.</span></li>
		<li><span class="listmainrow">Исправлен баг с не сбрасывающимся эффектом Водопоя при одновременном ходе.</span></li>
		<li><span class="listmainrow">Исправлен баг с возможностью атаковать монстров с полетом через непроходимую границу входа объекта.</span></li>
		</ol>
		<div class="space"></div>
		
		
		<a name="aichanges"></a>
		<p><h4 class="changetitle">Изменения и исправления багов ИИ.</h4></p>		
		<ol class="innlist">
		<li><span class="listmainrow">Исправлен баг с ИИ, перемещающим в тактической фазе двухгексовые отряды на клетку ближе к противнику, чем позволяет уровень навыка.</span></li>
		</ol>
		<b>С версии 1.5.0:</b>
		<ol class="innlist" start="2">
		<li><span class="listmainrow">Добавлена возможность ИИ обмениваться заклинаниями через Грамотность между героями в городе.</span></li>
		<li><span class="listmainrow">Добавлена возможность ИИ пользоваться Рогом бездны.</span></li>
		<li><span class="listmainrow">Добавлена возможность ИИ колдовать Элементалями шторма, льда, энергии и магмы.</span></li>
		<li><span class="listmainrow">Теперь при расстановке на тактике ИИ корректно учитывает число раундов, за которое он достигает отряды противника.</span></li>
		<li><span class="listmainrow">Исправлен баг с уменьшенной областью доступных позиций на тактике у ИИ.</span></li>
		<li><span class="listmainrow">Исправлен баг с зацикливанием ИИ при передаче армии между героями или между героем и городом.</span></li>
		</ol>
		<div class="space"></div>
		
		<a name="gskchanges"></a>
		<p><h4 class="changetitle">Исправление багов ГСК.</h4></p>		
		<ol class="innlist">
		<li><span class="listmainrow">Улучшено соответствие соотношений размеров зон ГСК с указанными в шаблоне размерами.</span></li>
		<li><span class="listmainrow">Исправлен баг со сдвинутой охраной объектов в ГСК (иногда можно было посещать объекты без боя с охраной).</span></li>
		<li><span class="listmainrow">Дороги на случайных картах теперь не проходят через багнутые проходы и не блокируются тюрьмами.</span></li>
		<li><span class="listmainrow">Города в пределах одной зоны теперь всегда связаны дорожной сетью внутри этой зоны, 
		если главный город зоны имеет форт.</span></li>
		<li><span class="listmainrow">Исправлен баг с генерацией большего количества связей, чем прописано в шаблоне, 
		при наличии нескольких связей между одной и той же парой зон.</span></li>
		<li><span class="listmainrow">Исправлен баг ГСК с расположением части зоны в виде узкой полоски вдоль края карты.</span></li>
		<li><span class="listmainrow">Исправлен баг ГСК с добавлением некорректных проходов между зонами из-за генерации объектов рядом с границей зон (кроме городов).</span></li>
		</ol>
		<b>С версии 1.5.0:</b>
		<ol class="innlist" start="8">
		<li><span class="listmainrow">Исправлена возможность обойти охрану объекта на случайной карте из-за генерации рядом с ней другой охраны.</span></li>
		</ol>
		<div class="space"></div>
		
		
		<a name="otherchanges"></a>
		<p><h4 class="changetitle">Прочие изменения.</h4></p>		
		<b>С версии 1.5.0:</b>
		<ol class="innlist" start="1">
		<li><span class="listmainrow">Добавлен редактор шаблонов случайных карт, позволяющий любому игроку создавать свои шаблоны, используя расширенные возможности их формата.</span></li>
		<li><span class="listmainrow">У героев каждого города теперь есть по четыре изображения на карте и в бою: в зависимости от класса и пола героя.</span></li>
		</ol>
		
		
		
		<p style="text-align:center; clear:left;"><a href="#top">Вернуться в начало <img src="gif/monolit.gif" title="вернуться в начало страницы"></a></p>
				
	</div>
	</div>


	<div class="bottomdiv">
	<div id="footer">
		<span style="top:-8px;"><a href="https://vk.com/h3hota" target="_blank">Heroes 3 HotA Официальное сообщество</a></br>
		<a href="http://forum.df2.ru/index.php?showforum=90" target="_blank">DF2 Официальный форум HotA</a></br></br>
		Автор: aabb</br>
		Моя почта: bukalin_ao@mail.ru</br>
		</span>
		<img src="gif/lamp.gif"></img>
	</div>
	</div>


</body>
</html>
