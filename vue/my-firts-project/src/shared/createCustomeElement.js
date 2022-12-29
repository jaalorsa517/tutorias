import { defineCustomElement, h, createApp, getCurrentInstance } from "vue";

export const vueDefineCustomElement = (component, { plugins = [] } = {}) =>
  defineCustomElement({
    ...component,
    setup(props, { emit }) {
      const app = createApp(component);

      // install plugins
      plugins.forEach(app.use);

      const inst = getCurrentInstance();
      Object.assign(inst.appContext, app._context);
      Object.assign(inst.provides, app._context.provides);

      //translate events
      const toCamelCase = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
      let events = {};
      if (inst.emitsOptions) {
        events = Object.keys(inst.emitsOptions).reduce((acc, key) => {
          acc[`on${toCamelCase(key)}`] = (...args) => emit(key, ...args);
          return acc;
        }, {});
      }

      return () =>
        h(component, {
          ...props,
          ...events,
        });
    },
  });
