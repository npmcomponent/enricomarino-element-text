module.exports = function (element) {

  element.prototype.text = function (value) {
    var el = this.el;
    
    if (value == null) {
      return el.textContent || el.innerText;
    }
  
    return el.textContent && (el.textContent = value)
      || (el.innerText = value);
  };
  
  return element;
};
