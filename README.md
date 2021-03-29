#ETCH-A-SKETCH

1. Create a webpage with a 16x16 grid of square divs.
    1. Create the divs using JavaScript.
    2. Put grid squares inside another "container" div (can go directly in your html)
    3. There are several different ways to make the divs appear as a grid:
        1. float/clear.
        2. inline-block.
        3. flexbox.
        4. CSS Grid.
    4. Be careful with borders and margins, they can adjust the size of the squares
    5. "OMG, Why isn't my grid being created???"
        1. Did you link your CSS stylesheet?
        2. open your browser's developer tools.
        3. Check if there are any errors in the JavaScript console.
        4. Chekc your "elements" pane to see if the elements have actually shown up but are somehow hidden.
        5. Go willy-nilly and add console.log statements in your JavaScript to see if it's actually being loaded.
 
2. Set up a "hover" effect so that the grid divs change color when the mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    1. Hint: "hovering" is what happens when your mouse enters a div and ends when your mouse leaves it. Set up event listeners for either of those events as a starting point.
    2. There are multiple ways to change the color of the divs, including:
        1. Adding a new class to the div.
        2. Changing the div's background color using JavaScript.

3. Add a button to the to of the screen which will clear the current grid and send the user a popup asking how many squares per side to make a new grid. Once entered the new grid should be generated *in the same total space as before* (e.g 960px wide) and now you've got a new sketch pad. **Tip:** Set the limit for the user inoyt to a maximum of 100. A larger number of squares results in more computer resources being used, resulting in possible delays, freezing or crashing that we want to prevent.
    1. Research >button tags in HTML and how you can make a JavaScript function run when one is clicked.
    2. Also check out >prompts
    3. You should be able to enter 64 and have a brand new 64z64 grid pop up without changing the total amout of pixels used

4. (Optional): Instead of just changing the color of the grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

5. Push your project to GitHub!
