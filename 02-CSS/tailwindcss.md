- **Tailwind** is a utility-first CSS framework — instead of writing custom CSS classes and defining their styles separately, you compose pre-made single-purpose utility classes directly in your HTML/JSX


**Spacing (padding, margin)**
p-4      /* padding: 1rem (all sides) */
px-4     /* padding-left + padding-right: 1rem */
py-4     /* padding-top + padding-bottom: 1rem */
pt-4     /* padding-top only */
pr-4 pb-4 pl-4   /* right, bottom, left individually */

m-4      /* margin: 1rem (all sides) */
mx-auto  /* margin-left/right: auto — classic centering trick */
mt-4 mb-4 ml-4 mr-4

- Tailwind numbers aren't pixels 4 = 1rem = 16px
p-0  = 0px
p-1  = 0.25rem (4px)
p-2  = 0.5rem  (8px)
p-4  = 1rem    (16px)
p-8  = 2rem    (32px)

gap-4    /* gap: 1rem — used with flex/grid */
space-x-4  /* adds horizontal margin between direct children (not gap, uses margin trick) */
space-y-4  /* adds vertical margin between direct children */

**Sizing (width/height)**
w-full    /* width: 100% */
w-screen  /* width: 100vw */
w-1/2     /* width: 50% */
w-64      /* width: 16rem (256px) */
w-fit     /* width: fit-content */
w-auto    /* width: auto */

h-full h-screen h-64 h-fit h-auto   /* same pattern for height */

min-w-0   min-h-screen
max-w-md  /* max-width: 28rem — common for centered content containers */
max-w-screen-lg  /* max-width based on a breakpoint value */

**Colors**
bg-red-500       text-blue-600       border-gray-300
Format is {property}-{color}-{shade}. Shades run 50 (lightest) → 950 (darkest), in steps of 100 (50, 100, 200...900, 950)

text-white/50    /* opacity modifier — 50% opacity white text (modern Tailwind syntax) */
bg-black/70      /* 70% opacity black background */

**Typography**
text-sm      /* font-size: 0.875rem */
text-base    /* font-size: 1rem — default */
text-lg text-xl text-2xl text-3xl ...  /* scale up */

font-normal  font-medium  font-semibold  font-bold   /* font-weight */

text-left  text-center  text-right  text-justify

leading-tight   /* line-height: 1.25 */
leading-normal  /* line-height: 1.5 */
leading-loose   /* line-height: 2 */

tracking-tight  tracking-normal  tracking-wide   /* letter-spacing */

truncate         /* single-line ellipsis overflow (whitespace-nowrap + overflow-hidden + text-ellipsis combined) */
line-clamp-2     /* multi-line ellipsis, clamps to 2 lines */

**Flexbox utilities**
flex             /* display: flex */
flex-col         /* flex-direction: column */
flex-row         /* flex-direction: row (default) */
flex-wrap        /* flex-wrap: wrap */

justify-start justify-center justify-end justify-between justify-around justify-evenly
items-start items-center items-end items-stretch
self-start self-center self-end

flex-1           /* flex: 1 1 0% — grow and shrink equally */
flex-none        /* flex: none — don't grow or shrink */
grow             /* flex-grow: 1 */
shrink-0         /* flex-shrink: 0 */

**Grid utilities**
grid                          /* display: grid */
grid-cols-3                   /* grid-template-columns: repeat(3, minmax(0, 1fr)) */
grid-rows-2
col-span-2                    /* grid-column: span 2 / span 2 */
row-span-2
gap-4                         /* same gap property as before */

grid-cols-[200px_1fr]         /* arbitrary value syntax — custom column sizes */

**Position & display**
relative  absolute  fixed  sticky  static
top-0  right-0  bottom-0  left-0
inset-0   /* shorthand: top-0 right-0 bottom-0 left-0 all at once */
z-10  z-50   /* z-index values */

block  inline  inline-block  hidden   /* display: none */

**Border & Radius**
border           /* border-width: 1px */
border-2          border-4
border-t border-b border-l border-r    /* individual sides */
border-gray-300   /* border-color */

rounded          /* border-radius: 0.25rem */
rounded-md rounded-lg rounded-xl
rounded-full      /* border-radius: 9999px — pill/circle shape */
rounded-t-lg      /* only top corners rounded */

**Shadows & Effects**
shadow-sm  shadow  shadow-md  shadow-lg  shadow-xl   /* box-shadow presets */
opacity-50

**Responsive design — breakpoint prefixes**
Tailwind is mobile-first — unprefixed utilities apply to all screen sizes, prefixed ones kick in at that breakpoint and above.

Breakpoint scale:
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px

**Pseudo-class / state prefixes**
hover:bg-blue-600      /* :hover */
focus:ring-2           /* :focus */
active:scale-95        /* :active */
disabled:opacity-50    /* :disabled */
first:mt-0             /* :first-child */
last:mb-0              /* :last-child */
odd:bg-gray-50         /* :nth-child(odd) */
group-hover:text-white /* parent has class="group", this styles child on parent's hover */

**@apply — extracting repeated utility combos into a custom class css**
/* In your CSS file */
.btn-primary {
  @apply px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700;
}
<button class="btn-primary">Click</button>
