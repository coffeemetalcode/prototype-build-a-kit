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
    let option = $('<div>')
      .addClass('form-check form-check-inline')
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
    let title = $('<h6></h6>').text(requirement.label);
    $('#top-fabrics').append(title);
  }


  /* Populate fabric option select box
  ** from list of available fabrics
  ** --> convert to a reusable function
  */

  // for ()

  for (fabric of fabrics) {
    $('#fab-1')
      .append($('<option></option>')
        .attr('value', dashCase(fabric.name))
        .text(`${fabric.name} - $${fabric.price}`));
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
