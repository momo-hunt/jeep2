import { writable } from "svelte/store";

const dataStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    get: async (name, url, id) => {
      set({ [name]: { loading: true } });
      const res = await fetch(url);
      const respon = await res.json();
      set({ [name]: respon });
    },
  };
};
export const data = dataStore();

const listStore = () => {
  const { subscribe, set, update } = writable({
    pemakaian: {
      loading: false,
      data: [],
      page: 1,
      limit: 10,
      total: 0,
    },
  });
  return {
    subscribe,
    fetchData: async (old, name, opt) => {
      set({ ...old, [name]: { ...old[name], loading: true } });

      const params = {
        ...opt,
        collection: name,
      };

      const res = await fetch("/?req=" + JSON.stringify(params));
      const respon = await res.json();
      set({
        ...old,
        [name]: {
          ...old[name],
          loading: false,
          ...respon,
          more: respon.total > respon.limit * respon.page,
        },
      });
    },

    fetchMore: async (old, name) => {
      if (old[name].more) {
        set({ ...old, [name]: { ...old[name], loading: true } });

        const params = {
          ...opt,
          page: old[name].page + 1,
          collection: name,
        };

        const res = await fetch("/?req=" + JSON.stringify(params));
        const respon = await res.json();
        set({
          ...old,
          [name]: {
            ...old[name],
            loading: false,
            ...respon,
            more: respon.total > respon.limit * respon.page,
          },
        });
      }
    },
  };
};
export const list = listStore();

const objStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    get: async (url) => {
      set({ loading: true });
      const res = await fetch(url);
      const respon = await res.json();
      set(respon);
    },
    set: async (data) => {
      set({ loading: true });
      await new Promise((res) => setTimeout(() => res(), 1000));
      set(data);
    },
  };
};
export const obj = objStore();
