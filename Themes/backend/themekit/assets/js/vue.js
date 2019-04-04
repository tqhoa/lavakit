import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import lavakitLayout from './compoments/layout';
import settingCompoments from './../../../../../modules/setting/resources/assets/js/setting';

settingCompoments.forEach(component => {
    Vue.component(component.name, component);
});

lavakitLayout.forEach(compoment => {
    Vue.component(compoment.name, compoment);
});

Vue.use(ElementUI, { locale });
Vue.use(VueI18n);
Vue.use(VueRouter);

require('./mixins');

const currentLocale = window.Lavakit.currentLocale;
const adminPrefix = window.Lavakit.adminPrefix;

const router = new VueRouter({
    'mode': 'history',
    'base': makeBaseUrl()
});

function makeBaseUrl() {
    if (window.Lavakit.hideDefaultLocale == 1) {
        return adminPrefix;
    }

    return `${currentLocale}/${adminPrefix}`;
};

const messages = {
    [currentLocale]: window.Lavakit.textTranslations,
};

const i18n = new VueI18n({
    locale: currentLocale,
    messages,
});

const app = new Vue({
    el: '#app',
    router,
    i18n,
});

window.axios.interceptors.response.use(null, (error) => {
   if (error.response === undefined) {
        console.log(error);
        return;
   }

   if (error.response.status === 403) {
       app.$notify.error({
           title: 'Unauthorized', //app.$t('text translate'),
           message: 'Unauthorized-access', //app.$t('text translate'),
       });
       
       window.location = route('admin.dashboards.index');
   }

   if (error.response.status === 401) {
       app.$notify.error({
           title: 'Anauthenticated',
           message: 'Unauthenticated-message'
       });

       window.location = route(login);
   }

   return Promise.reject(error);
});