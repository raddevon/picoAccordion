# picoAccordion

Have you ever wished there was an accordion plugin for jQuery that you could just plug in to any of your projects? Wait, what? You say there are tons of them? Are you **sure** about that? Go look to make sure. I'll wait for you.





Oh, you say there were literally thousands of them? Hmm. OK. Well, did you find one that was absolutely perfect in every way? I thought not. Well, maybe picoAccordion is that plugin. It does have some distinguishing features.

* *Small*- picoAccordion is 826 bytes minified. At that size, you can afford to pack a few more of those 12 megapixel JPEGs onto your page!
* *Opinionated*- picoAccordion believes strongly that the definition list is the most semantic element for an accordion -- so strongly, in fact, that it won't even work if you try to use it with some lesser element. You can call it laziness, but it prefers to think of it as conscientious objection.
* *Umm*- I wanted to include another bullet point, but I would have had to make picoAccordion bigger so that it would have another trait. Then, I would have had to get rid of the *Small* bullet point which means I really would have needed to add *two* traits. I'll just leave this here in the event it develops further in the future.

## Usage
It's really easy. Watch this.

    <dl class="accordion">
        <dt>Heading 1</dt>
        <dd>The first thing I want to say.</dd>
        <dt>Heading 2</dt>
        <dd>Another thing to say.</dd>
        <dt>Heading 3</dt>
        <dd>Still another thing for saying.</dd>
    </dl>

This is a definition list, so I have three different pairs. In this example, my terms (`dt` elements) will be clickable to expand the definitions (`dd` elements). Since picoAccordion already knows how the definition list should be structured, all you have to do is run the init method on the list itself. Here's what that would look like if you wanted to do it inline on the page:

    <script>
        $('.accordion').picoAccordion();
    </script>

Simple, right? Put that script at the bottom of the page just inside the closing `body` tag. This assumes you have already imported jQuery before you run this script. If not, it won't work.

## License
picoAccordion is freely available to use and modify under the MIT license.

## Thanks!
That's about it. If you like and/or use this plugin, I'd love to hear from you [on Twitter](http://twitter.com/raddevon).