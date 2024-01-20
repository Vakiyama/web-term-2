


Your job in this lab is to learn to use EJS templates, with Express, to return complicated dynamic HTML, that depends on both (a) inputs from the front-end, and (b) decisions made by back-end code.

In this case, several things are already done:

1. the front-end code where the user provides the input is done
2. the back-end code that processes the user input is done
3. the back-end code that creates other data is also done
4. there's already some HTML that is sufficient for the `GET /` route (though it is not currently being sent)

Some things are not done:

1. EJS is not correctly configured so that Express will use it
2. Neither of the route handlers is currently reading the relevant EJS file
3. No dynamic EJS has been written for the `GET /numbers` route

You need to do some *configuring* to solve (1) and (2).

And then you need to write a bunch of EJS to solve (3).


## Configuring

According to the Express documentation at https://expressjs.com/en/guide/using-template-engines.html , the views directory can be configured with `app.set('views', './views')`.  That is, set the `views` configuration parameter to be `./views`, which by the way is also the default value if you do not set it.  I don't bother to set it myself, because I'm okay with the default.

According to the same documentation, to specify the view engine, use `app.set('view engine', 'ejs')`.  Note that because we are not using Jade or Pug as our view engine (aka our templating engine), my line looks a little different from the one in the application.

Once you have done those things, do what you need to so that `GET /` is using `index.ejs` as its template, and `GET /numbers` is using `numbers.ejs` as its template.


## Writing EJS step 1

Your first task is to make it so that *some* data is getting passed through to the EJS file, and that data is getting rendered *somehow*.  The file `hints/step1.png` will show you what success in this step would get you; whatever data the users passes from the form (which shows up in the URL at the top) is reflected in the output HTML.

As you'll see in my screenshots from later steps, after this step was done I commented out these temporary results.


## Writing EJS step 2


Your second task is to output all the numbers, without worrying about rows and columns.

Note that you are not required to *generate* the numbers, that is already done for you in `app.js`.

You should put each number in a `<span>`.

Sample results seen in `hints/step2.png`.



## Writing EJS step 3

The form to get numbers asks us how we wish to group the numbers, in columns.  That value has been passed to us from `app.js`.

Your third task is to put the `span`s into `<p>`aragraphs that group them correctly.  Make sure that you close the last paragraph, and make sure that you don't have any stray tags around.  It's a bit tricky, there's some slightly tricky math.  Think it through!

Sample results seen in `hints/step3.png`.

## Writing EJS step 4


Our answers are showing up, but we'd like to jazz up the page a bit.

First of all, if the player asks for results from 1 to 6, that's a standard 6-sided die.  Or if they ask for results from 1 to 12, that's a standard 12-sided die.  The `app.js` file is deciding if it's a standard die, and passing us that information.  So if it *is* a standard die, you need to replace the sentence "You asked for 12 dice from 1 to 6" (or whatever), with "You asked for 12d6.".  Do that.

And then secondly, if you're doing this, you should show multiple pictures of an appropriate die, at the top.  Use the assets in the `public/assets` directory.

You should be able to make your output look *exactly* like mine (except with different random numbers).


Sample results seen in `hints/step4.png` and `hints/step4_b.png`.



## Writing EJS step 5


Usually using partials only makes sense when we already have multiple pages built, especially when we have many many pages built.  I'm not going to make you build many unique pages just to make this part of the lab make sense, so I want you to pretend that, since you did Step 4, you spent a few hours making a bunch of extra pages.

Now you are going to give yourself credit at the top of *every page*.  For example I wrote "randomness by jeremy", you should put your name instead.

You could of course put the header in every EJS file, but imagine that all of the following are true:

* there are 40 or 4000 EJS files
* the header is big and complicated (instead of being roughly a one-liner)
* your boss is probably going to change the header tomorrow and also next week and also next month

How can you push all the ugly complexity of the header into a single file, and then just reference that in each of the main EJS files?

In the screenshot you can't see the difference between doing it right, vs cheating, so you'll just have to think it through what the right and wrong ways are.

Sample results seen in `hints/step5.png`.