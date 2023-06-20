// Get all the images
image_array = [
    'zh_01.png',
    'zh_02.png',
    'zh_03.png',
    'zh_04.png',
    'zh_05.png',
    'zh_06.png',
    'zh_07.png',
    'zh_08.png',
    'zh_09.png',
    'zh_10.png',
    'zh_11.png',
    'zh_12.png',
    'zh_13.png',
    'zh_14.png',
    'zh_15.png',
    'zh_16.png',
    'zh_17.png',
    'zh_18.png',
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
  }