import _                from 'https://cdn.skypack.dev/lodash'
import { createSignal } from "https://cdn.skypack.dev/solid-js@1.2.6"
import h                from "https://cdn.skypack.dev/solid-js@1.2.6/h"
import { render }       from "https://cdn.skypack.dev/solid-js@1.2.6/web"

range = _.range
log = console.log
div    = (a...) => h "div",a
header = (a...) => h "header",a
svg    = (a...) => h "svg",a
rect   = (a...) => h "rect",a
text   = (a...) => h "text",a
button = (a...) => h "button",a

Counter = ()=>
	[count, setCount] = createSignal 0
	increment = ()=> setCount count() + 1
	button {type:"button", onClick:increment},
		()=> "Klick " + count()

[queen, setQueen] = createSignal {row:4,col:3}

moveQueen = (row,col) => setQueen {row,col} #queen() + 1

color = (row,col) => if (row+col) % 2 == 1 then "lightblue" else "yellow"

Board = () =>
	svg {viewBox:"0 0 320 320", width:320, height:320},
		for row in range 8
			for col in range 8
				do (row,col) => rect {x:row*40, y:col*40, width:40, height:40, fill:color(row,col), onClick:()=> moveQueen row,col}
		text {x:(()=> 20+40*queen().row), y:(()=>25+40*queen().col)},"♛"
		text {x:100, y:105},"♘"

render Board, document.body
