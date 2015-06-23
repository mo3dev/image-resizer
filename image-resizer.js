/*
 * A small library that provides capabilities to resize large images by using an HTML canvas resize then convert trick
 */

IR = IR || {};
IR.ImageResizer = (function() {

    /*
     * Uses a canvas to shrink/scale an image
     */
    var resize = function(image, maxWidth, maxHeight) {
        // setup the canvas
        var canvas = document.createElement('canvas');
        canvas.height = image.height;
        canvas.width = image.width;

        // set the correct accepted dimensions on the canvas
        if (image.width > image.height) {
            if (image.width > maxWidth) {
                canvas.height = image.height * maxWidth / image.width;	        // maintain aspect ratio
                canvas.width = maxWidth;
            }
        } else {
            if (image.height > maxHeight) {
                canvas.width = image.width * maxHeight / image.height;
                canvas.height = maxHeight;
            }
        }

        // draw the image
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL();
    };

    /*
     * Converts a data URI object to a Blob object
     */
    var toBlob = function(dataURI) {
        var parts = dataURI.split(',');
        var mimeType = parts[0].substr(5, parts[0].substr(5).length - 7 );		// yields: 'image/png'
        var data = atob(parts[1]);											    // yields the base64 encoded data described by the mime above

        var buffer = [];
        for (var i = 0; i < data.length; i++) {
            buffer.push(data.charCodeAt(i));
        }

        return new Blob([buffer], {type: mimeType});
    }

    // control scope using return, only expose the members returned below
    return {
        resize: resize,
        toBlob: toBlob
    };

})();