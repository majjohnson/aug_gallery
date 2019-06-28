AFRAME.registerComponent('navigate-on-click', {
        schema: {
          url: {default: ''}
        },

        init: function () {
          var data = this.data;
          var el = this.el;

          el.addEventListener('click', function () {
            window.location.href = data.url;
          });
        }
      });    
    /*init: function () {
      var data = this.data;
      var el = this.el;

      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector("#animated-model");

      aEntity.addEventListener('click', function (ev, target) {

            window.location.href = "https://www.google.com/";



      });
    }*/
  });
