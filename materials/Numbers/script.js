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
      {'id': 0, 'upper': "1", "lower": "One"},
      {'id': 1, 'upper': "2", "lower": "Two"},
      {'id': 2, 'upper': "3", "lower": "Three"},
      {'id': 3, 'upper': "4", "lower": "Four"},
      {'id': 4, 'upper': "5", "lower": "Five"},
      {'id': 5, 'upper': "6", "lower": "Six"},
      {'id': 6, 'upper': "7", "lower": "Seven"},
      {'id': 7, 'upper': "8", "lower": "Eight"},
      {'id': 8, 'upper': "9", "lower": "Nine"},
      {'id': 9, 'upper': "10", "lower": "Ten"},
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