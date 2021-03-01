/**************
** Mock Data **
**************/

const pattern = {
  name: 'Equal Rights',
  price: 10.00,
  sku: 'SGD014',
  sizes: [
    {
      size: 'Lap',
      length: '68\"',
      width: '53\"',
      fabrics: {
        front: [
          {
            label: 'Print 1',
            yardage: 0.333
          },
          {
            label: 'Print 2',
            yardage: 0.333
          },
          {
            label: 'Print 3',
            yardage: 0.333
          },
          {
            label: 'Print 4',
            yardage: 0.333
          },
          {
            label: 'Print 5',
            yardage: 0.333
          },
          {
            label: 'Print 6',
            yardage: 0.333
          },
          {
            label: 'Print 7',
            yardage: 0.333
          },
          {
            label: 'Print 8',
            yardage: 0.333
          },
          {
            label: 'Accent Fabric',
            yardage: 2
          }
        ],
        back: [
          {
            label: 'Backing',
            yardage: 3.5
          },
          {
            label: 'Binding',
            yardage: 0.625
          }
        ]
      },
    },
    {
      size: 'Twin',
      length: '94\"',
      width: '75\"',
      fabrics: {
        front: [
          {
            label: 'Print 1',
            yardage: 0.5
          },
          {
            label: 'Print 2',
            yardage: 0.5
          },
          {
            label: 'Print 3',
            yardage: 0.5
          },
          {
            label: 'Print 4',
            yardage: 0.5
          },
          {
            label: 'Print 5',
            yardage: 0.5
          },
          {
            label: 'Print 6',
            yardage: 0.5
          },
          {
            label: 'Print 7',
            yardage: 0.5
          },
          {
            label: 'Print 8',
            yardage: 0.5
          },
          {
            label: 'Print 9',
            yardage: 0.5
          },
          {
            label: 'Print 10',
            yardage: 0.5
          },
          {
            label: 'Accent Fabric',
            yardage: 3.625
          }
        ],
        back: [
          {
            label: 'Backing',
            yardage: 5.666
          },
          {
            label: 'Binding',
            yardage: 0.75
          }
        ]
      },
    },
    {
      size: 'Queen',
      length: '87\"',
      width: '106\"',
      fabrics: {
        front: [
          {
            label: 'Print 1',
            yardage: 0.5
          },
          {
            label: 'Print 2',
            yardage: 0.5
          },
          {
            label: 'Print 3',
            yardage: 0.5
          },
          {
            label: 'Print 4',
            yardage: 0.5
          },
          {
            label: 'Print 5',
            yardage: 0.5
          },
          {
            label: 'Print 6',
            yardage: 0.5
          },
          {
            label: 'Print 7',
            yardage: 0.5
          },
          {
            label: 'Print 8',
            yardage: 0.5
          },
          {
            label: 'Print 9',
            yardage: 0.5
          },
          {
            label: 'Print 10',
            yardage: 0.5
          },
          {
            label: 'Accent Fabric',
            yardage: 3.625
          },
          {
            label: 'Border',
            yardage: 2
          }
        ],
        back: [
          {
            label: 'Backing',
            yardage: 5.666
          },
          {
            label: 'Binding',
            yardage: 0.75
          }
        ]
      },
    }
  ]
};

const fabrics = [
  {
    name: 'Batik Sea Turtles Turqoise',
    price: 8.95,
    value: 'batik-sea-turtles-turqoise',
    url: './assets/images/batik-sea-turtles-turqoise.jpg'
  },
  {
    name: 'Bella Batiks 2127',
    price: 10.95,
    value: 'bella-batiks-2127',
    url: './assets/images/bella-batiks-2127.jpg'
  },
  {
    name: 'Flourish Grey White',
    price: 7.95,
    value: 'flourish-grey-white',
    url: './assets/images/flourish-grey-white.jpg'
  },
  {
    name: 'Glow Science Space',
    price: 11.95,
    value: 'glow-science-space',
    url: './assets/images/gitd-science-space.jpg'
  },
  {
    name: 'Hoffman Celery',
    price: 9.95,
    value: 'hoffman-celery',
    url: './assets/images/hoffman-celery.jpg'
  },
  {
    name: 'Hoffman Olivia',
    price: 9.95,
    value: 'hoffman-olivia',
    url: './assets/images/hoffman-olivia.jpg'
  },
  {
    name: 'Kona Cotton Ivory',
    price: 8.95,
    value: 'kona-cotton-ivory',
    url: './assets/images/kona-cotton-ivory.jpg'
  },
  {
    name: 'Kona Cotton Natural',
    price: 8.95,
    value: 'kona-cotton-natural',
    url: './assets/images/kona-cotton-natural.jpg'
  },
  {
    name: 'Kona Cotton Purple',
    price: 8.95,
    value: 'kona-cotton-purple',
    url: './assets/images/kona-cotton-purple.jpg'
  },
  {
    name: 'Linen Blend Black',
    price: 7.95,
    value: 'linen-blend-black',
    url: './assets/images/linen-blend-black.jpg'
  },
  {
    name: 'Millefiore Blue',
    price: 10.95,
    value: 'millefiore-blue',
    url: './assets/images/millefiore-blue.jpg'
  },
  {
    name: 'Minecraft Pixels Green',
    price: 12.95,
    value: 'minecraft-pixels-green',
    url: './assets/images/minecraft-pixels-green.jpg'
  },
  {
    name: 'Minecraft Tools Multi',
    price: 12.95,
    value: 'minecraft-tools-multi',
    url: './assets/images/minecraft-tools-multi.jpg'
  },
  {
    name: 'Row Flowers Blue',
    price: 7.95,
    value: 'row-flowers-blue',
    url: './assets/images/row-flowers-blue.jpg'
  },
  {
    name: 'Tonal Vinyard Pear',
    price: 8.95,
    value: 'tonal-vinyard-pear',
    url: './assets/images/tonal-vinyard-pear.jpg'
  },
  {
    name: 'Tossed Butterflies Purple',
    price: 10.95,
    value: 'tossed-butterflies-purple',
    url: './assets/images/tossed-butterflies-purple.jpg'
  }
];

/**************
** App Logic **
**************/

$(document).ready(() => {
  const topCanvas = document.getElementById('top');
  const topctx = topCanvas.getContext('2d');

  let fab1, fab2, fab3;
  let patternSizeChoice;
  
  $('#pattern-name').text(`Pattern: ${pattern.name}`);

  $('#size-options').change(() => {
    patternSizeChoice = $('input[name="pattern-size"]:checked').val();
    console.log(patternSizeChoice);
    console.log('pattern size changed');
  });

  for (size of pattern.sizes) {
    let string = `${size.size} - ${size.width} × ${size.length}`;
    let option = $('<div class="form-check form-check-inline"></div>')
      // .addClass('form-check form-check-inline')
      .html(`
        <input class="form-check-input" type="radio" name="pattern-size" id="${dashCase(size.size)}" value="${dashCase(size.size)}">
        <label class="form-check-label" for="${dashCase(size.size)}">
          ${string}
        </label>
      `);
    $('#size-options').append(option);
  }

  let checkedOption = pattern.sizes.map((p) => p.size).indexOf('Queen') > -1 ? 'queen' : dashCase(pattern.sizes[0].size);
  $(`#${checkedOption}`).prop('checked', true);
  patternSizeChoice = checkedOption;
  
  let sizeIndex = pattern.sizes.map((p) => p.size).indexOf(titleCase(patternSizeChoice));
  for (requirement of pattern.sizes[sizeIndex].fabrics.front) {
    let title = $('<div></div>').text(requirement.label + ': ' + toMixed(requirement.yardage));
    // let yardage = $('<div></div>').text(requirement.yardage).attr('data-yardage', requirement.yardage);
    // title.append(yardage);
    let fabId = `#${dashCase(requirement.label)}`;
    let select = $(`
      <select id=${dashCase(requirement.label)} class="custom-select custom-select-lg mb-3">
        <option selected>Select... </option>
      </select>
    `);

    select.attr('data-yardage', requirement.yardage)

    /* Make this a reusable function */
    for (fabric of fabrics) {
      select.append($('<option></option>')
      .attr('value', dashCase(fabric.name))
      .attr('data-price', fabric.price)
      .text(`${fabric.name} - $${fabric.price}`));
    }

    $('#top-fabrics')
      .append(title)
      .append(select);

    $(fabId).change(() => {
      console.log(
        fabId,
        $(fabId).val(),
        $(fabId).find(':selected').data('price'),
        $(fabId).find(':selected').data('price') * $(fabId).data('yardage')
      );
    });
  }

  let dummy = 'fab-1';
  $(`#${dummy}`).change(() => {
    fab1 = $('#fab-1').val();
    setImageUrl(fab1, '.fab-1');
  });

  $('#fab-2').change(() => {
    fab2 = $('#fab-2').val();
    setImageUrl(fab2, '.fab-2');
  });

  $('#fab-3').change(() => {
    fab3 = $('#fab-3').val();
    console.log(fab3);
  });

  let backingOption = $('#backing-binding-option');
  let backingControls = $('#backing-binding');
  let includeBacking = true;

  backingOption.change(() => {
    includeBacking = !includeBacking;
    backingControls.prop('hidden', !includeBacking);
  });

  /* Fuck around with Canvas */
  /* topctx.fillRect(10, 10, 150, 100);
  topctx.fillStyle = 'green';
  topctx.fillRect(10, 160, 210, 100); */
});

/* Helper Functions */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(string) {
  let strArr = string.split('-');
  return strArr.map((w) => {
    return capitalize(w);
  }).join(' ');
}

function dashCase(string) {
  let strArr = string.toLowerCase().split(' ');
  return strArr.join('-');
}

function setImageUrl(id, classname) {
  let url = `./assets/images/${id}.jpg`;
  let elar = $(classname);
  elar.each((i) => {
    elar[i].src=url;
  });
}

function toMixed (float) {
  let int = Math.floor(float);
  let frac = toFraction(float % 1);
  let mixed;
  let yard;

  if (int < 2) {
    yard = ' yard';
  } else {
    yard = ' yards';
  }
  
  if (int === 0) {
    mixed = frac;
  } else if (frac === null) {
    mixed = int;
  } else {
    mixed = int + '-' + frac;
  }
  return mixed + yard;
}

function toFraction (dec) {
  const fracStrings = {
    /* halfs */
    '0.5': '1/2',
    /* quarters */
    '0.25': '1/4',
    '0.75': '3/4',
    /* thirds */
    '0.333': '1/3',
    '0.666': '2/3',
    '0.667': '2/3',
    /* eighths */
    '0.125': '1/8',
    '0.375': '3/8',
    '0.625': '5/8',
    '0.875': '7/8'
  };

  return dec !== 0 ? fracStrings[dec] : null;
}
