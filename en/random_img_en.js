// Get all the images
image_array = [
    'en_01.png',
    'en_02.png',
    'en_03.png',
    'en_04.png',
    'en_05.png',
    'en_06.png',
    'en_07.png',
    'en_08.png',
    'en_09.png',
    'en_10.png',
    'en_11.png',
    'en_12.png',
    'en_13.png',
    'en_14.png',
    'en_15.png',
    'en_16.png',
    'en_17.png',
    'en_18.png',
    'en_19.png',
    'en_20.png',
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
  }