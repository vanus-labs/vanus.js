# vanus.js
Help users quickly integrate Vanus AI

# Quick Start
There are 2 ways to quick start as follow.

## 1.Use Javascript
```html
// For English Language
<script src="https://www.vanus.ai/js/ai.embed.js"></script>
<script>
const config = {
    id: 'xxxx',
    lang: 'en',
};
setVanusConfig(config);
</script>

// For Chinese Language
<script src="https://www.vanus.cn/js/ai.embed.js"></script>
<script>
const config = {
    id: 'xxxx',
    lang: 'cn',
};
setVanusConfig(config);
</script>
```

## Parameters
| Name        | Description   | Required |  Optional  |
| :--------  | :-----  | :-----  | :----:  |
| id | Vanus AI Application ID | True | |
| lang | Default language | False | `en`,`cn` |


## 2.Use Iframe Tag
```html
// For English Language
<iframe src="https://ai.vanus.ai/app/embed?id={id}"></iframe>

// For Chinese Language
<iframe src="https://ai.vanus.cn/app/embed?id={id}"></iframe>
```

## Parameters
| Name        | Description   | Required |  Optional  |
| :--------  | :-----  | :-----  | :----:  |
| id | Vanus AI Application ID | True | |

## Default Value

```javascript
// Default css of button
const buttonStyles = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    zIndex: 500,
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    border: '0px none',
    color: '#fff',
    fontSize: '24px',
    background: 'linear-gradient(25deg, #086BFF, #A839FF)',
};

// Default css of iframe
const iframeStyles = {
    padding: '8px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    width: '480px',
    height: '800px',
    position: 'fixed',
    right: '20px',
    bottom: '90px',
    zIndex: 500,
    display: 'none',
    border: '0px none',
};
```

## Common Method
Please notice that `styles` will be auto merged to default value.

```javascript
// Set button css
const styles = {
    padding: '8px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
};
setStylesToButton(styles);

// Set iframe css
const styles = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
};
setStylesToIframe(styles);
```