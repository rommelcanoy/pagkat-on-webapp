const utterThis = new SpeechSynthesisUtterance()
utterThis.rate = 0.5;
utterThis.lang = "en-UK"
const synth = window.speechSynthesis
function carousel() {
  return {
    active: 0,
    init() {
      var flkty = new Flickity(this.$refs.carousel, {
        wrapAround: false
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
      {'id': 0, 'upper': "A", "lower": "a"},
      {'id': 1, 'upper': "B", "lower": "b"},
      {'id': 2, 'upper': "C", "lower": "c"},
      {'id': 3, 'upper': "D", "lower": "d"},
      {'id': 4, 'upper': "E", "lower": "e"},
      {'id': 5, 'upper': "F", "lower": "f"},
      {'id': 6, 'upper': "G", "lower": "g"},
      {'id': 7, 'upper': "H", "lower": "h"},
      {'id': 8, 'upper': "I", "lower": "i"},
      {'id': 9, 'upper': "J", "lower": "j"},
      {'id': 10, 'upper': "K", "lower": "k"},
      {'id': 11, 'upper': "L", "lower": "l"},
      {'id': 12, 'upper': "M", "lower": "m"},
      {'id': 13, 'upper': "N", "lower": "n"},
      {'id': 14, 'upper': "O", "lower": "o"},
      {'id': 15, 'upper': "P", "lower": "p"},
      {'id': 16, 'upper': "Q", "lower": "q"},
      {'id': 17, 'upper': "R", "lower": "r"},
      {'id': 18, 'upper': "S", "lower": "s"},
      {'id': 19, 'upper': "T", "lower": "t"},
      {'id': 20, 'upper': "U", "lower": "u"},
      {'id': 21, 'upper': "V", "lower": "v"},
      {'id': 22, 'upper': "W", "lower": "w"},
      {'id': 23, 'upper': "X", "lower": "x"},
      {'id': 24, 'upper': "Y", "lower": "y"},
      {'id': 25, 'upper': "Z", "lower": "z"},
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