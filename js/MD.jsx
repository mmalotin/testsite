import React from 'react'
import home from '../markdowns/Home.md'
import Paper from 'material-ui/Paper';
import Remarkable from 'remarkable'
import hljs from 'highlight.js'
var md = new Remarkable('full', {
  langPrefix:   'language-',
  linkify:      true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; // use external default escaping
  }
});

class Md extends React.Component {
  render() {
    return(
      <div dangerouslySetInnerHTML={{__html: md.render(this.props.file)}} />
    );
  }
}

export default Md;
