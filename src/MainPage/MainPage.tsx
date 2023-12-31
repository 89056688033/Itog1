/* eslint-disable react/react-in-jsx-scope */
import { useCallback } from 'react';
import Mape from '../Map/Map';
import styles from './MainPage.module.scss'
import { Legenda } from '../Legenda/Legenda';
import { Carusrel1 } from '../Carusel/Carousel';

export function MainPage() {
  return (
    <div>
      <h1 className={styles.title}>Уникальная природа Нижнего Новгорода</h1>
      <p className={styles.text}> Природа нижегородской земли всегда привлекала к себе внимание других народов. Причиной тому были естественные богатства, которыми наполнены окрестности Новгорода.
В Сормовском районе нижнего Новгорода, есть красивые места для отдыха. Их можно посмотреть, пройдя по маршрутам.</p>
<h1 className={styles.title1}>Начало маршрута</h1>
<p className={styles.text}>Маршрут начинается от церкви Михаила Архангела,  (поселок Большое Козино), проходит вдоль лугов, далее маршрут идет вдоль берега реки Пыра до ее впадения в реку Волгу, в месте впадения реки Пыра в Волгу есть пляж для купания и далее вдоль берега Волги и Никольского рукава.
Далее маршрут делится на две ветки: можно поехать вдоль берега реки Волги на остров Ревякинский, можно поехать вдоль Никольского рукава.
</p>
<h1 className={styles.title1}>Маршрут вдоль Никольского рукава</h1>
<p className={styles.text}> Маршрут идет вдоль Никольского рукава, через дубовый лес (в дубовом лесу есть место для купания), далее через луга к озеру Муруново, по берегам которого растут дубы, на озере есть место для купания. Далее маршрут идет через луга, черную речку в поселок Высоково.</p>
<h1 className={styles.title1}>Маршрут через остров Ревякинский</h1>
<p className={styles.text}>Переправу на остров Ревякинский затапливает весной, маршрут проходит вдоль берега волги, красивые виды, корабли, пляжи для купания и рыбалки. Вся северная часть о.Ревякского представляет собой полосу из чистого песка. Далее маршрут делится на две дороги: для автомобиля и для велосипедов и пеших (проезд автомобилям закрыть шлагбаумом).
Дорога для автомобиля проходит через поселение, далее по асфальтовой дороге, далее можно проехать на пляж на Волге.
Дорога для пеших и велосипедов (проезд автомобилям закрыть шлагбаумом) идет через луга до асфальтовой дороги
Маршрут кончается в поселке Кима, есть остановка и дорога городская.</p>
<h1 className={styles.title1}>Копосовская дубрава</h1>
<p className={styles.text}>За поселком Копосово, располагается памятник природы регионального значения Копосовская дубрава находится у посёлка Копосово в Сормовском районе Нижнего Новгорода. Конечно, в первую очередь, дубрава уникальна своими деревьями. Возраст дубов здесь  - не менее 200 - 250 лет. Они достигают высоты 20 - 25 м и диаметра ствола от 40 до 80 см. Не зря их раскидистые ветви в годы Великой Отечественной войны надёжно скрывали танки, сделанные на сормовском заводе для отправки на фронт.
Удивительно, но столь древние деревья до сих пор в хорошем состоянии, и сухих среди них не так уж много. Ещё одна особенность дубравы – в том, что растут здесь именно дубы без примеси взрослых стволов липы, клёна, вяза, ясеня, типичных для других дубрав города и области.
Богата Копосовская дубрава и пойменными лугами с удивительным разнотравьем.</p>
<Carusrel1 />
<h1 className={styles.title1}>Дубрава у озера Лунского</h1>
<p className={styles.text}>Так же у Озера Лунского есть дубрава и место для купания у Озера Лунского и по берегам реки Черной.</p>
 <Legenda />
   <h1 className={styles.title1}>Карта с маршрутами для активного отдыха (можно пройти за один день)</h1><Mape /></div>);
}
