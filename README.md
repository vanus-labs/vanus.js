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