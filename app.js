const app = Vue.createApp({
  data: function () {
    return {
      btnText: "",
      isRead: false,
    };
  },
  methods: {
    toggleRead: function () {
      this.isRead = !this.isRead;
    },
  },
});

app.mount("#skills");
