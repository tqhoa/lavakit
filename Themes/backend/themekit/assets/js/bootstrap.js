window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

let userApiToken = document.head.querySelector('meta[name="user-api-token"]');

if (userApiToken) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + userApiToken.content;
} else {
    console.error('User API token not found in a meta tag.');
}

let currentLocal = document.head.querySelector('meta[name="current-locale"]');