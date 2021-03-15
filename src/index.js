import './styles.css';
import _debounce from 'lodash';
import createBaseMarkup from '../src/js/markup/createBaseMarkup';
import createMarkup from '../src/js/markup/createMarkup';
import API from './js/api/fetchCountries';
import { pnotifyError, closeNotice } from './js/components/notify';
import refLink from './js/components/refs';
import cauntryCard from './templates/cauntryCard.hbs';
import countriesList from './templates/countriesList.hbs';

createBaseMarkup();

const { boxRef, inputRef } = refLink();

function inputChange({ target }) {
  closeNotice();
  const searchQuery = target.value;
  if (!searchQuery.trim()) return;

  API.fetchCountries(searchQuery)
    .then(response => {
      if (response.length === 1) {
        const resultOneCountry = response.reduce((acc, item) => item);
    
        createMarkup(
          boxRef,
          cauntryCard({...resultOneCountry }),
        );

        console.log(response); //--------
        console.log(resultOneCountry); //----------
      } else if (response.length <= 10) {
        createMarkup(boxRef, countriesList(response));
      } else {
        throw 'Найдено много совпадений!';
      }
    })
    .catch(error => {
      createMarkup(boxRef, '');
      pnotifyError(error);
    });
}
const search = () => inputRef.addEventListener('input', _.debounce(inputChange, 500));

search();