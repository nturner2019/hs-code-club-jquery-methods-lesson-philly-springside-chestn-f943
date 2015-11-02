# Room Decorator with jQuery Methods

<img src="https://s3.amazonaws.com/after-school-assets/decorate.jpg" width="300px" align="right" hspace="10">

Now that you're a jQuery selector pro, it's time to dive into jQuery methods. Methods are a pre-defined set of instructions defined in jQuery that the browser can understand and follow. Sometimes you might here the word `function` used in place of `method`. They're synonyms and can be used interchangeably. 

You just moved into a brand new place and it's time to decorate!


## Let's Get Started

### Step 1:

Click `Open` at the top of this page to bring this lesson down so you can edit files in Nitrous.

<img src="https://s3.amazonaws.com/after-school-assets/new-open-in-nitrous.png">

### Step 2:

Open `index.html` in the browser by running in terminal `python -m SimpleHTTPServer 3000`. 

Once you have the server running, select `preview` and then `port 3000`.

<img src="https://s3.amazonaws.com/after-school-assets/nitrous-preview.png" alt="nitrous preview">


### Step 3:

You're going to code your solution in `js/decorate.js`. Go ahead and open that file in the Nitrous text editor, as well as `index.html`. You shouldn't need to make any changes to `index.html` in order to code your solution. Don't worry about the code in `css/style.css`. All the styling has be written for you, and will work perfectly if you don't change the HTML.

In `js/decorate.js`, we've set up the jQuery selectors and `click` functions for you, but your job is to fill in the rest.

### Step 4:

Take a look at `index.html` in the browser. You should see something like this:

<img src="https://s3.amazonaws.com/after-school-assets/empty-room.png">

Your job is to write the code that will trigger the actions the buttons take. 

### Step 5:

Let's tackle the `Add Chair` button. When you click this button, we should see the `blue-chair.png` image (located in the images directory) appear on the screen.

If you take a look at `index.html` in the Nitrous text editor, you see a `div` where we'll want the code for the chair to go. 

```html
<div class="blue-chair">
</div>
```

But we're not going to directly edit `index.html` ourselves. Instead, we're going to use the jQuery `append` method. This method does exactly what it seems, it appends, or adds HTML elements to an HTML file. JQuery knows what file to add to based on what HTML file it's linked to. You'll notice that `js/decorate.js` is linked to `index.html` at the bottom of the HTML file.

Because the browser first loads `index.html`, we link our all external files to the HTML file, and not the other way around. At the bottom of `index.html`, you'll see the lines:

```html
<script src="js/decorate.js"></script>
```

The jQuery file (`js/decorate.js`) knows to append any HTML to that particular file. We haven't linked our `js/decorate.js` file to any other HTML files so the jQuery we write will only effect `index.html`.

In this case, were adding an img tag to index.html

The append method needs one piece of information in order to do its job, what HTML you want to add to the file. In this case, because we want to put an image on the page, we want the follow HTML added to the index file:

```html
<img src="images/blue-chair.png">
```

So now to finish out the jQuery, copy the following code and paste it below the comment `//code solution to put the blue chair in index.html`:

```js
$('.blue-chair').append("<img src='images/blue-chair.png'>");
```

What this code is saying is when we click the HTML element with the ID chair (in this case the button that says `Add Chair`), we'll add the HTML image to the HTML with the class `blue-chair`, which in this case is a `div`. 

Save your changes to `js/decorate.js` and refresh the page in the browser. Click the `Add Chair` button and watch the chair appear!

### Step 6:

Now let's tackle the couch! We're going to follow a very similar pattern as the chair.

We want the couch to appear in the HTML where we see:

```html
<div class="couch">
</div>
```

In this case, we want the following HTML added (or appended) to that div:

```html
<img src="images/couch.png">
```

Copy the following jQuery and paste it in `js/decorate.js` below the comment `//code solution here to put the couch in index.html`:

```js
$('.couch').append("<img src='images/couch.png'>");
```
Altogether, this code allows the user to click the button with the ID `couch`. When that happens, we add the `img` tag inside the `div` with the class `couch`. 

Save your changes to `js/decorate.js` and refresh the page in the browser. Click the `Add Couch` button. Note, you won't see the chair until you click the `Add Chair` button too!



