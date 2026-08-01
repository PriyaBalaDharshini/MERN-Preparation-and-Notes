1. Selectors

**Basic selectors**
* { }   /* universal */
p { }    /* element/type */
.class { }          /* class */
#id { }   /* id */

**combinations**
div p       /* descendant - any level deep */
div > p     /* child - direct child only */
div + p     /* adjacent sibling - immediately next */
div ~ p     /* general sibling - any sibling after */

**Attribute selectors**
[type="text"]        /* exact match */
[class^="btn-"]      /* starts with */
[class$="-large"]    /* ends with */
[class*="icon"]      /* contains */

**Pseudo-classes (state-based)**
:hover, :focus, :active, :visited
:first-child, :last-child, :nth-child(2n)
:not(.active)
:checked, :disabled, :required

**Pseudo-elements (part of an element)**
::before, ::after
::first-letter, ::first-line
::placeholder


2. Colors

**Named colors**
color: red;
color: blue;
color: cornflowerblue;

**Hex codes** - Format is #RRGGBB — two hex digits each for Red, Green, Blue. Each pair ranges from 00
color: #ff0000;   /* red */
color: #00ff00;   /* green */
color: #0000ff;   /* blue */
color: #000000;   /* black */
color: #ffffff;   /* white */

**rgb()**  - Same idea as hex but in plain decimal numbers (0–255) instead of hex digits / **rgba()** adds a 4th value — alpha (transparency), from 0 (invisible) to 1
color: rgb(255, 0, 0);        /* pure red — same as #ff0000 */
color: rgb(0, 255, 0);        /* pure green */
color: rgb(255, 255, 255);    /* white */
color: rgb(0, 0, 0);          /* black */

background: rgba(255, 0, 0, 1);     /* fully solid red */
background: rgba(255, 0, 0, 0.5);   /* red, 50% see-through */
background: rgba(255, 0, 0, 0);     /* fully invisible red */


3. Units

- px(pixels) - Absolute unit
- % (percentage) — relative to the parent
- em — relative to the parent's font-size (and it compounds when nested)

    .grandparent { font-size: 16px; }
    .parent { font-size: 2em; }   /* 2 × 16px = 32px */
    .child { font-size: 2em; }    /* 2 × 32px = 64px !! NOT 2 × 16px */
    grandparent: 16px
   └─ parent: 2em → 32px  (2 × 16)
        └─ child: 2em → 64px  (2 × 32, NOT 2 × 16)

    em is also used for padding/margin, where it's relative to that same element's own font-size

- rem — relative to the root (<html>) font-size only, never compounds
    html { font-size: 16px; }   /* the root */

    .grandparent { font-size: 2rem; }  /* 2 × 16 = 32px */
    .parent { font-size: 2rem; }       /* still 2 × 16 = 32px, NOT relative to grandparent */
    .child { font-size: 2rem; }        /* still 32px */

- vw / vh — relative to the viewport (browser window size)
    vw = 1% of viewport width, vh = 1% of viewport height

- vmin / vmax — relative to the smaller/larger of vw or vh

    vw = 10px per unit (1000/100), vh = 6px per unit (600/100)
    vmin picks the smaller one → 6px per unit → 50vmin = 300px
    vmax picks the larger one → 10px per unit → 50vmax = 500px



Use case	Best unit
Font-size, consistent spacing across whole site -	rem
Padding/margin that should scale with its own element's font-size (e.g. button)-em
Width of a child relative to its container -	%
Full-screen sections, hero banners	- vw / vh
Something that must always fit screen in any orientation -	vmin
Fixed, never-changing sizes (icon size, border-width, rarely font) - px

**Margin** = the empty space between one element's border and the next element's border (i.e., the gap between two boxes on the page).

**Padding** = Padding is the space inside an element, between its content and its border
.box {
  width: 200px;
  padding: 20px;
  box-sizing: content-box;  /* default */
} Total rendered width = 200 (content) + 40 (padding both sides) = 240px — padding adds on top of your set width.

.box {
  width: 200px;
  padding: 20px;
  box-sizing: border-box;
} Total rendered width stays 200px — padding eats into the content area instead of adding extra width. This is why border-box is the industry-standard reset.


**Border**: Border is the visible line that wraps around an element, sitting right between padding and margin.

Basic syntax
.box {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
border: 2px solid black; border-style is the only mandatory piece.

**Box Model:**
Every HTML element is treated as a rectangular box. This box is made of 4 layers, from inside to outside: content → padding → border → margin

**display property**: Controls how an element behaves in the **layout flow**.
display: block - Takes up the full width available, stacks vertically (one per line). Respects width, height, margin, padding on all sides

**display: inline** - Only takes up as much width as its content needs. Sits side by side in a line, like words in a sentence. width/height are ignored. margin-top/margin-bottom are ignored too — only left/right margin and padding work visually

**display: inline-block** -sits side by side like inline, but respects width/height/margin/padding like block

**display: none** - Element is completely removed from the page — takes up zero space, as if it doesn't exist

**visibility: hidden** - becomes invisible, but its space is still reserved

**opacity: 0** - But the element is still technically "there" — it's still clickable/interactive, still in the accessibility tree, and can be animated (you can transition opacity smoothly, which you can't do with display or visibility)

**position property:**
Controls how an element is **positioned relative** to normal flow

**position: static** - Normal flow — top/left/right/bottom have no effect. This is what every element does by default unless we change it

**position: relative** - 
<div class="box1">Box 1</div>
<div class="box2">Box 2</div>

.box1 {
  position: relative;
  top: 20px;
  left: 30px;
} Box 1 shifts 20px down and 30px right from where it would normally be/ the space it originally occupied is still reserved — other elements don't move to fill the gap, they act as if Box 1 never moved

**position: absolute** - commonly used with parent postion relative. Removed completely from normal flow. Positioned relative to the nearest ancestor
**position: fixed** - Stays in the same screen position even when you scroll the page
**position: sticky** - Fixed until it reached some point. thenn mved

**z-index** (works with any position except static)
Higher z-index = appears on top when elements overlap. Only works on positioned elements (relative, absolute, fixed, sticky) — has no effect on static elements.

**Flexbox**: 1-dimensional layout system — it arranges items in a single row or single column, and makes distributing space/alignment between them easy

 - Flex container — the parent with display: flex
 - Flex items — the direct children inside it (item 1, 2, 3)

 - disply: flex - all direct children automatically line up side by side in a row
 - flex-direction — controls the main axis
    flex-direction: row → main axis = horizontal, cross axis = vertical
    flex-direction: column → main axis = vertical, cross axis = horizontal
 - justify-content — aligns items along the main axis
    flex-start, flex-end, center, space-between, space-around, space-evenly
    space-between → nothing at the edges, only between items
 - space-around → each item gets equal space around itself (so edges look like "half" gaps)
 - space-evenly → literally every gap, including edges, is mathematically identical
 - align-items — aligns items along the cross axis
    flex-start, flex-end, center, stretch
 - flex-wrap — what happens when items don't fit
 - flex-grow — how much an item grows to fill leftover space:  If there's 400px of leftover space, it's split in the ratio 1:2:1 → item2 gets double the extra space compared to item1 and item3.

 **Grid** is a 2-dimensional layout system — unlike flexbox (1 direction at a time), grid lets you control rows and columns simultaneously. Best for overall page layouts, card grids, dashboards.
 grid-template-columns

- display: grid;   /* Turns element into a grid container */

- grid-template-columns: 1fr 2fr 100px;     /* Defines number and size of columns */
- grid-template-rows: 100px 1fr;            /* Defines number and size of rows */
- grid-template-areas:
  "header header"
  "sidebar main";            /* Names layout regions using strings, mapped grid-area on items */

- gap: 20px;   /* Space between rows and columns (shorthand forrow-gap column-gap) */
- row-gap: 10px;    /* Space between rows only */
- column-gap: 20px;            /* Space between columns only */

- justify-items: center;  /* Aligns all items horizontally within their own cell */
- align-items: center;         /* Aligns all items vertically within their own cell */
- place-items: center center;     /* Shorthand for align-items + justify-items */

- justify-content: space-between;  /* Aligns the whole grid horizontally within the container (when grid is smaller than container) */
- align-content: center;       /* Aligns the whole grid vertically within the container */
- place-content: center center;   /* Shorthand for align-content + justify-content */

- grid-auto-rows: 100px;       /* Size for implicitly created rows (not explicitly defined) */
- grid-auto-columns: 100px;    /* Size for implicitly created columns */
- grid-auto-flow: row;         /* row / column / dense — direction auto-placed items flow in; dense fills gaps in earlier rows/cols */
- grid-template-columns: repeat(3, 1fr);     /* Shorthand to repeat a column pattern N times */
- grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));  /* Fits as many columns as possible, keeps empty ghost tracks */
- grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));   /* Fits as many columns as possible, collapses empty tracks so items stretch */

**Item properties (set on individual grid children)**
- grid-column: 1 / 3;          /* Item starts at column line 1, ends at line 3 (spans 2 columns) */
- grid-column: span 2;         /* Item spans 2 columns from wherever it's auto-placed */
- grid-row: 2 / 4;             /* Item starts at row line 2, ends at line 4 (spans 2 rows) */
- grid-row: span 3;            /* Item spans 3 rows from wherever it's auto-placed */
- grid-area: header;           /* Assigns item to a named area defined in grid-template-areas */
- grid-area: 1 / 1 / 3 / 3;    /* Shorthand for row-start / column-start / row-end / column-end */
- justify-self: end;           /* Overrides horizontal alignment for just this one item */
- align-self: center;          /* Overrides vertical alignment for just this one item */