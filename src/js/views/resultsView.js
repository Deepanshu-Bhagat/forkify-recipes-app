import View from './view.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try another One :)`;
  _message = '';

  _generateMarkup() {
    // return this._data.map(this._generateMarkupPreview).join('');
    return this._data.map(result => previewView.render(result,false)).join('');
  }
}
export default new ResultsView();
