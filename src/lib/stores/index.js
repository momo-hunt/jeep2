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
    fetchData: async (old, name, { limit: limitx, page: pagex }) => {
      set({ ...old, [name]: { ...old[name], loading: true } });

      limitx = limitx ? limitx : old[name].limit;
      pagex = pagex ? pagex : old[name].page;

      const res = await fetch(`/${name}?limit=${limitx}&page=${pagex}`);
      const { data, total, sort, limit, page } = await res.json();
      set({
        ...old,
        [name]: {
          ...old[name],
          loading: false,
          data,
          total,
          sort,
          limit,
          page,
          more: total > limit * page,
        },
      });
    },

    fetchMore: async (old, name) => {
      if (old[name].more) {
        set({ ...old, [name]: { ...old[name], loading: true } });
        let limitx = old[name].limit;
        let pagex = old[name].page + 1;

        const res = await fetch(`/${name}?limit=${limitx}&page=${pagex}`);
        const { data, total, sort, limit, page } = await res.json();

        set({
          ...old,
          [name]: {
            ...old[name],
            loading: false,
            data: [...old[name].data, ...data],
            total,
            sort,
            limit,
            page,
            more: total > limit * page,
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
