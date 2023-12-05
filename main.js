import 'vite/modulepreload-polyfill';
import './src/scripts/index';
import { PUBLIC_PATH } from './config';
import svgxhr from './src/scripts/helpers/svgxhr';
import.meta.glob('./src/static/images/**/*');
import '@verndale/animation-framework/dist/animation-framework';

svgxhr({ filename: `/${PUBLIC_PATH}images/svgsheet.svg` });
