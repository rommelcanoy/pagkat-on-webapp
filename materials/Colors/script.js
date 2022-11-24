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
      {'id': 0, 'upper': "Blue", "lower": ""},
      {'id': 1, 'upper': "Red", "lower": ""},
      {'id': 2, 'upper': "Yellow", "lower": ""},
      {'id': 3, 'upper': "Orange", "lower": ""},
      {'id': 4, 'upper': "Green", "lower": ""},
      {'id': 5, 'upper': "Purple", "lower": ""},
      {'id': 6, 'upper': "Black", "lower": ""},
      {'id': 7, 'upper': "Brown", "lower": ""},
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