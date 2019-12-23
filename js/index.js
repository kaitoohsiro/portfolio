var Vue = new Vue({
    el: "#app",
    data: {
      website: true,
      about: false,
      hobby: false,
      contact: false,
    },
    methods: {
      link: function(one) {
        if (one === "website") {
          this.website = true;
          this.about = false;
          this.hobby = false;
          this.contact = false;
          this.oneX = false;
        }
        if (one === "about") {
          this.website = false;
          this.about = true;
          this.hobby = false;
          this.contact = false;
          this.oneX = false;
        }
        if (one === "hobby") {
          this.website = false;
          this.about = false;
          this.hobby = true;
          this.contact = false;
          this.oneX = false;
        }
        if (one === "contact") {
          this.website = false;
          this.about = false;
          this.hobby = false;
          this.contact = true;
          this.oneX = false;
        }
      }
    }
  });

