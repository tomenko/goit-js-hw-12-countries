import baseSearchMarkup from '../../templates/searchCauntry.hbs';
import createMarkupFunction from './createMarkup';
import refLink from '../components/refs';

const { bodyRef } = refLink();

export default function createBaseMarkup() {
  createMarkupFunction(bodyRef, baseSearchMarkup());
}