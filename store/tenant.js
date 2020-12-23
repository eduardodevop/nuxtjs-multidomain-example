export const state = () => ({
  domain: undefined
});

export const mutations = {
  setDomain(state, domain) {
    state.domain = domain;
  }
};
