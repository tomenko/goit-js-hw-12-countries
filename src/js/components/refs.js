export default function refLink() {
  const refs = {
    boxRef: document.querySelector('.search-result'),
    inputRef: document.querySelector('#js-input'),
    bodyRef: document.querySelector('body'),
  };
  return refs;
}