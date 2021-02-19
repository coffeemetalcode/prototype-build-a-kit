/**************
** Mock Data **
**************/

let pattern = {
  name: 'Equal Rights',
  price: 10.00,
  sizes: [
    {
      size: 'lap',
      length: '68\"',
      width: '53\"',
      fabrics: [
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
          
        }
      ]
    }
  ]
};

const fabric = {

};

$(document).ready(() => {
  let fab1, fab2, fab3;
  $('#fab-1').change(() => {
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


  function setImageUrl(id, classname) {
    let url = `./assets/images/${id}-2.00.jpg`;
    let elar = $(classname);
    elar.each((i) => {
      elar[i].src=url;
    });
  }

  let backingOption = $('#backing-binding-option');
  let backingControls = $('#backing-binding');
  let includeBacking = true;

  backingOption.change(() => {
    includeBacking = !includeBacking;
    backingControls.prop('hidden', !includeBacking);
  });
});

console.log('pattern:', pattern.name);

