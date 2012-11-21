Prism.languages.generic = {
  'comment': {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
    lookbehind: true
  },
  'preprocessor': /(#.*?$)/g,
  'deliminator': /(\?>|\?&gt;|&lt;\?php|<\?php)/ig,
  'string': /("|')(\\?.)*?\1/g,
  'entity': /(\b[a-z_]\w*\b(?=\s*\([^\)]*\)))(\b[a-z_]\w+\b\s+(?=\b[a-z_]\w+\b))/,
  'keyword': /\b(enddeclare|endforeach|endswitch|continue|endwhile|foreach|finally|default|elseif|endfor|return|switch|assert|break|catch|endif|throw|while|then|case|else|goto|each|and|for|try|use|xor|and|not|end|as|do|if|or|in|is|to|function|interface|namespace|function|unsigned|boolean|integer|package|double|string|signed|object|class|array|float|short|false|char|long|void|long|byte|bool|null|true|enum|var|int)\b/g,
  'boolean': /\b(true|false)\b/g,
  'number': /\b-?(0x)?\d*\.?\d+\b/g,
  'ignore': /&(lt|gt|amp);/gi, /* ->과 <<에 문제가 있어서 추가. */
  'operator': /[-+]{1,2}|!|=?\<|=?\>;|={1,3}|\>{1,3}|\<{1,3}|(\&amp;|\&){1,2}|\|?\||\?|\*|\/|(\!|\^|\*|\&|\%|\|)=/g,
  'punctuation': /[{}[\];(),.:]/g,
  'modifier': /(protected|abstract|property|private|global|public|static|native|const|final)\b/g,
};
