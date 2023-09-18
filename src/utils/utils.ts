// https://gomakethings.com/decoding-html-entities-with-vanilla-javascript/
const decodeHTML = (html: string): string => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    txt.id = 'temporary-textarea';
    var val = txt.value;
    txt.remove();
    return val;
};

const utils = {
    decodeHTML,
};

export default utils;
