export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderedItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
