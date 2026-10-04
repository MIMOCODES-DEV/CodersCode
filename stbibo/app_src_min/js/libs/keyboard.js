// Define helper functions if they don't exist globally
var root = document.documentElement || document.getElementById('root') || document.body;
var main_keyboard = document.getElementById('main_keyboard');

// If main_keyboard doesn't exist, create it
if (!main_keyboard) {
    main_keyboard = document.createElement('div');
    main_keyboard.id = 'main_keyboard';
    main_keyboard.style.display = 'none';
    main_keyboard.style.position = 'fixed';
    main_keyboard.style.bottom = '-100%';
    main_keyboard.style.left = '0';
    main_keyboard.style.width = '100%';
    main_keyboard.style.zIndex = '999';
    main_keyboard.style.transition = 'bottom 0.3s ease-out';
    document.body.appendChild(main_keyboard);
}

// Helper function to create and add class to elements
function el_tag(tag, className, id) {
    var element = document.createElement(tag || 'div');
    if (className) element.className = className;
    if (id) element.id = id;
    return element;
}

// Helper function to append child elements
function append(parent, child) {
    if (parent && child) {
        parent.appendChild(child);
    }
}

// Add addClass and removeClass functions to Element prototype if they don't exist
if (!Element.prototype.hasOwnProperty('addClass')) {
    Element.prototype.addClass = function(className) {
        if (this.className.indexOf(className) === -1) {
            this.className += ' ' + className;
        }
        return this;
    };
}

if (!Element.prototype.hasOwnProperty('removeClass')) {
    Element.prototype.removeClass = function(className) {
        this.className = this.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
        return this;
    };
}

var KEYBOARD = {
  uppercase: false,
  active_input: null,
  callback: null,
  selectedLetters: 'english',
  selectedNumbers: 'numbers',
  isPin: false,
  pinCallback: null,
  pinHideCallback: null,
  numbers: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      [',', '0', '.'],
  ],
  pin: [
      ['1', '2', '3', '-'],
      ['4', '5', '6', 'backspace'],
      ['7', '8', '9', 'Done'],
      [',', '0', '.', 'Cancel'],
  ],
  arabicNumber: [
      ['١', '٢', '٣'],
      ['٤', '٥', '٧'],
      ['٧', '٨', '٩'],
      [',', '٠', '.'],
  ],
  english: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', 'backspace'],
      ['lang', ':', '/', 'Space', '_', '-', 'Done']
  ],
  arabic: [
      ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح'],
      ['ج', 'د', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن'],
      ['Shift', 'م', 'ك', "ط", 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'backspace'],
      ['lang', 'ى', 'ة', 'Space', 'و', 'ز', 'Done']
  ],
  check_input: function (item) {

      KEYBOARD.active_input = item;

      KEYBOARD.active_input.blur();
      if (KEYBOARD.isPin) {
          KEYBOARD.render_pin_keyboard()
      } else {
          KEYBOARD.render_keyboard()
      }

  },
  render_pin_keyboard: function () {
      main_keyboard.innerHTML = '';

      var keyboard_parent = el_tag('div', 'keyboard_parent');


      var pin = KEYBOARD.pin;


      var pin_content = el_tag('div', '', 'keyboard_pin');
      for (var i = 0; i < pin.length; i++) {
          var pin_row = el_tag('div', 'pin_row');

          pin_row.setAttribute('row', i)
          for (var j = 0; j < pin[i].length; j++) {

              var letter = el_tag('div', 'keyboard-keys pin-control');
              letter.innerHTML = KEYBOARD.uppercase ? pin[i][j].toUpperCase() : pin[i][j]

              letter.setAttribute('index', j);
              letter.setAttribute('type', pin[i][j]);

              if (pin[i][j] == 'backspace') {
                  letter.classList.add('backspace');
                  letter.innerHTML = ''
                  letter.onclick = function () {
                      KEYBOARD.clickItemStyle(this)
                      KEYBOARD.delete_text()
                  };
              } else if (pin[i][j] == 'Done') {
                  letter.classList.add('pin-done');
                  letter.onclick = function () {
                      KEYBOARD.clickItemStyle(this);

                      SETTINGS.Parental.changePinClickDone();
                  };
              } else if (pin[i][j] == 'Cancel') {
                  letter.classList.add('pin-cancel');

                  letter.onclick = function () {
                      KEYBOARD.clickItemStyle(this);
                      SETTINGS.Parental.changePinClickCancle();
                  };
              }

              else {
                  letter.onclick = function () {
                      KEYBOARD.clickItemStyle(this)
                      KEYBOARD.write_text(this);
                  }
              }
              append(pin_row, letter)
          }
          append(pin_content, pin_row)
      }
      append(keyboard_parent, pin_content);
      append(main_keyboard, keyboard_parent);
      main_keyboard.style.bottom = '0%';
  },
  render_keyboard: function () {
    // Update to use document.documentElement instead of "root" directly
    var rootElement = document.getElementById('root') || document.documentElement;
    if (rootElement && rootElement.classList) {
        rootElement.classList.add('keyboard');
    } else if (rootElement) {
        rootElement.className += ' keyboard';
    }
    
    main_keyboard.innerHTML = '';
    var that = this;
    var keyboard_parent = el_tag('div', 'keyboard_parent');

    main_keyboard.innerHTML = '';
    var that = this;
    var keyboard_parent = el_tag('div', 'keyboard_parent');


    var numbers = KEYBOARD[KEYBOARD.selectedNumbers];
    var letters = KEYBOARD[KEYBOARD.selectedLetters];

    var number_content = el_tag('div', '', 'keyboard_numbers');


    var letter_content = el_tag('div', '', 'keyboard_letters');



    if (KEYBOARD.selectedLetters == 'arabic')
        KEYBOARD.active_input.style.direction = 'rtl';
    else
        KEYBOARD.active_input.style.direction = 'ltr';

    for (var i = 0; i < numbers.length; i++) {
        var num_row = el_tag('div', 'numbers_row');

        num_row.setAttribute('row', i)
        for (var j = 0; j < numbers[i].length; j++) {
            var num = el_tag('div', 'keyboard-keys number-control');

            num.setAttribute('index', j);
            num.setAttribute('type', numbers[i][j]);

            num.innerHTML = numbers[i][j];

            num.onclick = function () {
                KEYBOARD.clickItemStyle(this);
                KEYBOARD.write_text(this)
            };

            append(num_row, num)
        }
        append(number_content, num_row)
    }
    for (var i = 0; i < letters.length; i++) {
        var letter_row = el_tag('div', 'letters_row');

        letter_row.setAttribute('row', i)
        for (var j = 0; j < letters[i].length; j++) {

            var letter = el_tag('div', 'keyboard-keys letter-control');
            letter.innerHTML = KEYBOARD.uppercase ? letters[i][j].toUpperCase() : letters[i][j]

            letter.setAttribute('index', j);
            letter.setAttribute('type', letters[i][j]);

            if (letters[i][j] == 'backspace') {
                letter.classList.add('backspace');
                letter.innerHTML = ''
                letter.onclick = function () {
                    KEYBOARD.clickItemStyle(this)
                    KEYBOARD.delete_text()
                };
            } else if (letters[i][j] == 'Shift') {
                var light = el_tag('span', 'shift-light');

                letter.classList.add('shift');

                letter.innerHTML = '';
                append(letter, light)
                light.style.display = KEYBOARD.uppercase ? 'block' : 'none';
                letter.onclick = function () {
                    KEYBOARD.clickItemStyle(this)
                    KEYBOARD.uppercase = !KEYBOARD.uppercase;
                    that.render_keyboard();
                    move()
                }
            } else if (letters[i][j] == 'Space') {
                letter.classList.add('space');
                letter.innerHTML = ' ';

                letter.onclick = function () {
                    KEYBOARD.clickItemStyle(this);
                    KEYBOARD.write_text(this)
                }
            } else if (letters[i][j] == 'Done') {
                letter.classList.add('key-done');
                letter.innerHTML = ''
                letter.onclick = function () {
                    KEYBOARD.clickItemStyle(this);
                    PAGES.keyboard.hide();
                };
            }
            else if (letters[i][j] == 'lang') {
                letter.classList.add('lang');
                letter.innerHTML = ''

                letter.onclick = function () {
                    KEYBOARD.clickItemStyle(this)
                    if (KEYBOARD.selectedLetters == 'english') {
                        KEYBOARD.selectedLetters = 'arabic'
                        KEYBOARD.selectedNumbers = 'arabicNumber'
                    } else {
                        KEYBOARD.selectedLetters = 'english'
                        KEYBOARD.selectedNumbers = 'numbers'
                    }
                    that.render_keyboard();
                    move()
                }
            }
            else {
                letter.onclick = function () {
                    KEYBOARD.clickItemStyle(this)
                    KEYBOARD.write_text(this);
                }
            }




            append(letter_row, letter)
        }
        append(letter_content, letter_row)
    }

    append(keyboard_parent, number_content);
    append(keyboard_parent, letter_content);
    append(main_keyboard, keyboard_parent);
    main_keyboard.style.bottom = '0%';
    },
    write_text: function (el) {
        KEYBOARD.active_input.value += el.innerHTML;
        if (KEYBOARD.callback) {
            KEYBOARD.callback('add')
        }

    },
    delete_text: function () {
        var text = KEYBOARD.active_input.value;
        KEYBOARD.active_input.value = text.substring(0, text.length - 1);
        if (KEYBOARD.callback) {
            KEYBOARD.callback('remove')
        }
    },
    clickItemStyle: function (item) {

        item.addClass('clicked');
        setTimeout(function () {
            item.removeClass('clicked')
        }, 100)
    }
}
/// numeric write 

function numeric (params) {
  var element = document.querySelector('.numeric.active');
  if (!element) return;

  element.value += params;
}

// Add these at the end of the KEYBOARD object
KEYBOARD.initialize = function() {
    // Set initial state
    KEYBOARD.uppercase = false;
    KEYBOARD.active_input = null;
    KEYBOARD.callback = null;
    KEYBOARD.selectedLetters = 'english';
    KEYBOARD.selectedNumbers = 'numbers';
    
    // Make sure main_keyboard exists
    if (!document.getElementById('main_keyboard')) {
        var keyboardElem = document.createElement('div');
        keyboardElem.id = 'main_keyboard';
        keyboardElem.style.display = 'none';
        keyboardElem.style.position = 'fixed';
        keyboardElem.style.bottom = '-100%';
        keyboardElem.style.left = '0';
        keyboardElem.style.width = '100%';
        keyboardElem.style.zIndex = '999';
        keyboardElem.style.transition = 'bottom 0.3s ease-out';
        document.body.appendChild(keyboardElem);
        
        // Update the global reference
        main_keyboard = keyboardElem;
    }

    // Make sure overlay exists
    if (!document.getElementById('keyboard_overlay')) {
        var overlay = document.createElement('div');
        overlay.id = 'keyboard_overlay';
        document.body.appendChild(overlay);
    }
    
    // For LG platform, specifically prevent native keyboard
    if (typeof platform !== 'undefined' && platform === "lg" && typeof USE_CUSTOM_KEYBOARD !== 'undefined' && USE_CUSTOM_KEYBOARD) {
        try {
            // Block native keyboard from appearing
            document.addEventListener("keyboardStateChange", function(e) {
                e.preventDefault();
                return false;
            }, true);
            
            // Try to access WebOSKeyboard API if available
            if (window.WebOSKeyboard) {
                window.WebOSKeyboard.block();
            }
        } catch(e) {
            console.log("Error setting LG keyboard handler", e);
        }
    }
};

KEYBOARD.show = function(inputElement) {
  if (!inputElement) {
    console.error("No input element provided to KEYBOARD.show()");
    return;
  }
  
  KEYBOARD.check_input(inputElement);
  
  // Show the keyboard UI
  var rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.className += ' keyboard';
  }
  
  var keyboard = document.getElementById('main_keyboard');
  keyboard.style.display = 'block';
  
  // Set transition
  setTimeout(function() {
    keyboard.style.bottom = '0%';
  }, 10);
};

KEYBOARD.hide = function() {
  // Hide the keyboard UI
  var rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.className = rootElement.className.replace(/\bkeyboard\b/g, '');
  }
  
  var keyboard = document.getElementById('main_keyboard');
  keyboard.style.bottom = '-50%';
  
  // Hide completely after animation
  setTimeout(function() {
    keyboard.style.display = 'none';
  }, 300);
  
  // Clear active input reference
  if (KEYBOARD.active_input) {
    KEYBOARD.active_input = null;
  }
};