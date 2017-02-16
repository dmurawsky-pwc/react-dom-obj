# React DOM Object

Pass a JavaScript Object into ReactDOM

## Usage

```sh
npm install react-dom react-dom-obj --save
```

```javascript
import ReactDOM from 'react-dom';
import Redomo from 'react-dom-obj';

const obj = [
  {
    type: 'h1',
    content: 'ToDo List'
  },
  {
    type: 'ul',
    params: {
      style: {
        listStyle: 'none'
      }
    },
    content: [
      {
        type: 'li',
        content: [
          { type: 'input', params: { type: 'checkbox' } },
          { type: 'span', content: 'Create interface for converting YAML to React DOM'}
        ]
      },
      {
        type: 'li',
        content: [
          { type: 'input', params: { type: 'checkbox' } },
          { type: 'span', content: 'Create realtime interface with Firebase'}
        ]
      }
    ]
  }
];

ReactDOM.render(Redomo(obj), document.getElementById('redomo'));
```
