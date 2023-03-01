let data = {
    photo: 'image/dfr.jpg',
    title: 'Green',
    description: 'I like this picture because the color green calms me down'
  };


  $('#photo').attr('src', data.photo);

  let currentPhoto = 0;
let imagesData = [
    {photo: 'image/dfr.jpg', title: 'Green', description: 'I like this picture because the color green calms me down'},
    {photo: 'image/DSC02470.JPG', title: 'Orange blossom', description: 'Vivid orange color'},
    {photo: 'image/dsc02582.jpg', title: 'Cherry blossom', description: 'Beautiful white cherry blossom'},
    {photo: 'image/dsc02642.jpg', title: 'Violet flower', description: 'Spring is here, and so many flowers everywhere'},
    {photo: 'image/dsc02867.jpg', title: 'Purple tulips', description: 'Summer is coming, I love that much this season in the year'},
    {photo: 'image/abc.jpg', title: 'Strawberries', description: 'I like this photo, because I feel the flowers smell in the air'},
    {photo: 'image/bca.jpg', title: 'Roses', description: 'Roses in black and white'}
];
//console.log(data.photo);


//$.each(imagesData.programs, function(key,val) {             
  //alert(key+val);
//});
$('#photo').attr('src', imagesData[currentPhoto].photo);


let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
}
loadPhoto(currentPhoto);
 


  $('#right-arrow').click(() => {
    if(currentPhoto > -1) {
    currentPhoto++;
    loadPhoto(currentPhoto);
  }
  });
  
  $('#left-arrow').click(() => {
    if(currentPhoto < 7) { 
      currentPhoto--; 
  
        loadPhoto(currentPhoto);
    }  
  });

  loadPhoto(currentPhoto);



// let data = ["first", "second", "third", "fourth", "fifth","sixth", "seventh"];

  data.forEach((item, index) => {
    $('#grey-container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
    $('#photo').click((event) => {
      let indexClicked = $(event.target).attr('data-index');
     
      let numberIndex = parseInt(indexClicked);
      $('#clicked').text(data[indexClicked]);
    });
  });

