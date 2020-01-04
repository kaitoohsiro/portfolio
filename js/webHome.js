var Vue = new Vue({
  el: "#app",
  data: {
    list01: false,
    list02: false,
    list03: false,
    list04: false,
    listX: true,
    name: "kaito",
    age: 21,
    jender: "man",
    university: "HOSEI",
    a: "HTML&CSS",
    b: "JavaScript",
    c: "Python",
    d: "PHP",
    e: "SQL,laravel,jupyter notebook,git,jQuery,vue.js",
    f: "react native,wordpress",
    Lv: 10,
    hp: "2",
    mp: "0",
    j: "寝る",
    k: "家に帰る",
    l: "ひきこもる"
  },
  methods: {
    fight: function(list) {
      if (list === "list1") {
        this.list01 = true;
        this.list02 = false;
        this.list03 = false;
        this.list04 = false;
        this.listX = false;
      }
      if (list === "list2") {
        this.list01 = false;
        this.list02 = true;
        this.list03 = false;
        this.list04 = false;
        this.listX = false;
      }
      if (list === "list3") {
        this.list01 = false;
        this.list02 = false;
        this.list03 = true;
        this.list04 = false;
        this.listX = false;
      }
      if (list === "list4") {
        this.list01 = false;
        this.list02 = false;
        this.list03 = false;
        this.list04 = true;
        this.listX = false;
      }
    }
  }
});
