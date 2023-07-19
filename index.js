(function () {
    window.vanusConfig = {
        id: null,
        lang: 'en',

        buttonAttr: {
            innerHTML: '?',
        },

        iframeStyles: {
            padding: '8px',
            borderRadius: '12px',
            backgroundColor: '#f9f9f9',
            width: '360px',
            height: '640px',
            position: 'fixed',
            right: '20px',
            bottom: '80px',
            zIndex: 500,
            display: 'none',
            border: '0px none',
        },

        buttonStyles: {
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            zIndex: 500,
            width: '50px',
            height: '50px',
            borderRadius: '25px',
            border: '0px none',
            color: '#fff',
            fontSize: '20px',
            background: 'linear-gradient(25deg, #086BFF, #A839FF)',
        },
    };

    window.addEventListener('DOMContentLoaded', init);
})();

function init() {
    const flag = checkVanusConfig();
    if (!flag) {
        console.error('Must set correct config');
        return;
    }

    const config = getVanusConfig();

    const iframe = initFloatIframe(config);
    const button = initFloatButton(config, iframe);

    document.body.appendChild(button);
    document.body.appendChild(iframe);
}

function initFloatButton(config, iframe) {
    let display = false;
    let button = document.createElement("button");
    button.innerHTML = config.buttonAttr.innerHTML;
    deepAssign(button.style, config.buttonStyles);
    button.onclick = function () {
        if (display === false) {
            iframe.style.display = 'block';
            display = true;
        } else {
            iframe.style.display = 'none';
            display = false;
        }
    };
    return button;
}

function initFloatIframe(config) {
    let iframe = document.createElement('iframe');
    deepAssign(iframe.style, config.iframeStyles);
    iframe.setAttribute('src', generateUrl());
    return iframe;
}

function setStylesToIframe(styles = {}) {
    let config = getVanusConfig();
    let iframeStyles = config.iframeStyles;
    let newIframeStyles = {
        ...iframeStyles,
        ...styles,
    };
    config.iframeStyles = newIframeStyles;
    setVanusConfig(config);
}

function setStylesToButton(styles = {}) {
    let config = getVanusConfig();
    let buttonStyles = config.buttonStyles;
    let newButtonStyles = {
        ...buttonStyles,
        ...styles,
    };
    config.buttonStyles = newButtonStyles;
    setVanusConfig(config);
}

function setVanusConfig(config) {
    const oldConfig = getVanusConfig();
    const newConfig = deepAssign({}, oldConfig, config);
    window.vanusConfig = newConfig;
}

function getVanusConfig() {
    return window.vanusConfig;
}

function checkVanusConfig() {
    let res = true;
    const config = getVanusConfig();
    if (!config.id || config.id.length === 0 || config.id.toString() !== config.id) {
        res = false;
    }
    if (!config.lang || config.lang.length === 0 || config.lang.toString() !== config.lang || ['en', 'cn'].indexOf(config.lang) === -1) {
        res = false;
    }
    return res;
}

function generateUrl() {
    const config = getVanusConfig();
    const lang = config.lang;
    const id = config.id;
    if (lang === 'cn') {
        return 'https://ai.vanus.cn/app/embed?id=' + id;
    } else {
        return 'https://ai.vanus.ai/app/embed?id=' + id;
    }
}

function deepAssign() {
    let name = null;
    let options = null;
    let src = null;
    let copy = null;

    let length = arguments.length;
    let i = 1;
    let target = arguments[0] || {}
    if (typeof target !== 'object') {
        target = {};
    }
    for (; i < length; i++) {
        options = arguments[i];
        if (options != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];

                if (copy && typeof copy == 'object') {
                    target[name] = deepAssign(src, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    return target
}