# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```


```scala
def renderContent(xhtml: NodeSeq): NodeSeq = {

  import org.markdown4j.CodeBlockEmitter
  
  val config = Configuration.builder()
    .forceExtentedProfile()
    .setCodeBlockEmitter(new CodeBlockEmitter())
    .build()

  val markdownAsString = SomeService.load()
  val htmlAsString = Processor.process(markdownAsString, config)
  
  val parser = new XhtmlParser(IOSource.fromString(htmlAsString))
  
  parser.initialize.document()
}
```

```python
def fubn(s):
    return a*b
```

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
