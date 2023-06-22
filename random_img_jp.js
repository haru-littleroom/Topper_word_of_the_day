// Get all the images
image_array = [
    'jap_01.png',
    'jap_02.png',
    'jap_03.png',
    'jap_04.png',
    'jap_05.png',
    'jap_06.png',
    'jap_07.png',
    'jap_08.png',
    'jap_09.png',
    'jap_10.png',
    'jap_11.png',
    'jap_12.png',
    'jap_13.png',
    'jap_14.png',
    'jap_15.png',
    'jap_16.png',
    'jap_17.png',
    'jap_18.png',
    'jap_19.png',
    'jap_20.png',
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
  }