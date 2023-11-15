import { defineStore } from "pinia";

export const authStore = defineStore('token_manage', ({
    state: () => ({
        isAuthenticated: false,
        token: '',
    }),
    getters: {
        getTokenRef: (state) => {
            return isAuthenticated;
        }
    },
    actions: {
        setToken(token) {
            if (token)
            {
                this.token = token;
                this.isAuthenticated = true;
            }
        },
        deleteToken()
        {
            this.token = '';
            this.isAuthenticated = false;
        }
    },
    persist: true,
}))