const utterThis = new SpeechSynthesisUtterance()
utterThis.rate = 0.5;
utterThis.lang = "en-UK"
const synth = window.speechSynthesis
function carousel() {
  return {
    active: 0,
    init() {
      var flkty = new Flickity(this.$refs.carousel, {
        wrapAround: true
      });

      utterThis.text = this.alphabets[this.active].upper
      synth.speak(utterThis)
      flkty.on('change', i => {
        this.active = i
        utterThis.text = this.alphabets[i].upper
        synth.speak(utterThis)
      });
    },
    alphabets: [
      {'id': 0, 'upper': "Square", "lower": '<i class="fa fa-square"></i>'},
      {'id': 1, 'upper': "Circle", "lower": '<i class="fas fa-circle"></i>'},
      {'id': 2, 'upper': "Diamond", "lower": '<i class="fa fa-diamond"></i>'},
      {'id': 3, 'upper': "Triangle", "lower": '<i class="fa fa-triangle"></i>'},
      {'id': 4, 'upper': "Star", "lower": '<i class="fas fa-star"></i>'},
      {'id': 5, 'upper': "Heart", "lower": '<i class="fas fa-heart"></i>'},
      {'id': 6, 'upper': "Rectangle", "lower": '<i class="fa fa-rectangle-landscape"></i>'},
    ]
  }
}

function carouselFilter() {
  return {
    active: 0,
    changeActive(i) {
      this.active = i;
      
      this.$nextTick(() => {
        let flkty = Flickity.data( this.$el.querySelectorAll('.carousel')[i] );
        flkty.resize();
      });
    }
  }
}