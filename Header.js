import React from 'react';
import {useDispatch} from 'react-redux' import {useSelector} from 'react-redux';
import (burgerqtyc,pizzagtyc,maggieqtyc,nachosqtyc,faloodaqtyc,donutqtyc,totalc,qtyc}from./features/Counter/Counterslice' function Header() 1
let Burger_Price-100,Pizza_Price-120,Maggie_Price-60, Falooda_price-90,Nachos_price-150,Donut_price-40;
const qty • useSelector((state)=›state.counter .qty);
const total - useSelector ((state)-›state. counter. total); const burgerqty • useSelector((state)-›state. counter. burgerqty); const pizzaqty = useSelector((state)-›state.counter .pizzaqty); const maggieqty useSelector((state)-›state.counter . maggieqty); const nachosqty - useSelector((state)-›state.counter .nachosqty); const faloodaqty - useSelector((state)-›state.counter . faloodaqty); const donutqty-useSelector((state)-›state.counter . donutty);
const dispatch • useDispatch();
return ( <div className-'main'› «div classilame-'title', I
Products (useState)
</div> ‹div className-'left-side'> ‹div className-'Itemname">
Burger $(Burger _Price} (qty - (burgerqty})
</div> ‹div className-'itemname'>
| Pizza $(Pizza_Price) (qty - (pizzaqty})
</div>
‹div className-' itemname'>
</div>
Maggie $(Maggie _Price} (qty - (maggieqty})
«div className-" Itemname'›
Falooda $(Falooda_price] (qty - (faloodaqty})
</div> <div className-'Itemname'>
Nachos ${Nachos_price} (qty - (nachosqty})
</div> ‹div className-'itemname'>
</div>
Donut $(Donut_price} (qty - {donutqty})
</div>
‹div className-'right-side'> ‹form onSubmit-((e)-›(e.preventDefault();}}>


‹div className-'itemname'>
<button type-'submit' onClick-{(e)-›{dispatch(burgerqtyc(1));dispatch(qtyc (1)); dispatch(totalc(Burger_Price));}]>Add to Cart‹/button> &nbsp; ‹button type-' submit onClick-((e)-›{dispatch(burgerqtyc(-1));dispatch(qtyc(-1));dispatch(totalc(-(Burger_Price)));}}>Remove</button> </div> ‹div className-'itemname'> ‹button type-"submit" onClick-{(e)-›{dispatch(pizzaqtyc(1));dispatch(qtyc(1));dispatch(totalc(Pizza_Price));]]›AddtoCart‹/button> &nbsp; ‹button type-"submit* onClick-{(e)->{dispatch(pizzaqtyc(-1));dispatch(qtyc(-1));dispatch(totalc(-(Pizza_Price)))])›Remove‹/button> </div>
<div className-' itemname">
<button type-'submit' onClick-{(e)-›{dispatch(maggieqtyc(1));dispatch(qtyc(1));dispatch(totalc(Maggie_Price));}}›Add to Cart</button> &nbsp; ‹button type-'submit" onClick-{(e)-›{dispatch(maggieqtyc(-1));dispatch(qtyc(-1));dispatch(totalc(-(Maggie_Price)))}]>Remove‹/button>
</div> ‹div className-'itemname'> ‹button type-'submit' onClick-{(e)->{dispatch(faloodaqtyc(1));dispatch(qtyc(1));dispatch(totalc(Falooda_price));]]>AddtoCart‹/button> &nbsp; ‹button type-'submit' onClick-{(e)-›{dispatch(faloodaqtyc(-1));dispatch(qtyc(-1));dispatch(totalc(-(Falooda_price)))}]>Remove‹/button› </div> ‹div className-'itemname">
<button type-'submit' onClick-((e)I›{dispatch(nachosqtyc(1));dispatch(qtyc(1));dispatch(totalc(Nachos_price));]]>Add to Cart‹/button> &nbsp; «button type-'submit* onClick-{(e)-›{dispatch(nachosqtyc (-1));dispatch(qtyc (-1));dispatch(totalc (- (Nachos_price)))]}›Remove‹/button>
</div> ‹div className-'itemname">
<button type-' submit" onClick-{(e)-›{dispatch(donutqtyc(1));dispatch(qtyc(1));dispatch(totalc(Donut_price));}]>Add to Cart‹/button> 8nbsp; ‹button type-' submit' onClick-{(e)-›{dispatch(donutqtyc(-1));dispatch(qtyc(-1));dispatch(totalc(-(Donut_price)))]}>Remove‹/button>
</div> </form> ‹div className-'emptyline*
</div> ‹div>
<b›QTY : {qtyk</b> </div> <div>
<b>TOTAL : {totalk</b> </div> </div>
</div>
export default Header
