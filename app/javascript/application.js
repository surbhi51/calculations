// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import jquery from 'jquery'
window.jQuery = jquery
window.$ = jquery

import { createPopper } from '@popperjs/core';
window.createPopper = createPopper

import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap