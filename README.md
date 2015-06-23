# Image Resizer (Client-side)

### About

The Image Resizer meteor package contains utility methods to manipulate an image's size on the client (browser).

### Usage
Add to your meteor project: `meteor add mo3dev:image-resizer`

Quick start guide:
```
// get the image from the DOM
var img = document.getElementById('img#largeImage');

// use the library to resize the image passing the minimum and maximum dimension
var resizedImage = IR.ImageResizer.resize(img, 80, 80); // args: image, maxWidth, maxHeight
```
Note: resizedImage will contain a DataURL of the new image, here is what you can do with that:

```
// 1- Set it as the source of an img tag (ie. upload preview?):
document.getElementById('img#largeImage').src = resizedImage;
```
Note: you can also send it (it is a base64 encoded image) via a hidden form input to your server

```
// 2- Convert it to a Blob:
var blob = IR.ImageResizer.toBlob(resizedImage);
```


### Example
```
'change input#photo-upload': function(event) {
    if (event.target.files.length == 1) {
        // get the image
        var image = event.target.files[0];
        if (!!image) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // display a preview while resizing
                var img = document.getElementById('selected-photo');
                img.src = e.target.result;
                
                // resize the image
                var resized = IR.ImageResizer.resize(img, 80, 80); // args: image, maxWidth, maxHeight
                img.src = resized; // update the preview

                // use a hidden file input field to store the newly resized image
                document.getElementById('photoResized').value = resized;
            }
            reader.readAsDataURL(image);
        }
    }
}
```

Copyright 2015 &copy; Mohamed Ibrahim