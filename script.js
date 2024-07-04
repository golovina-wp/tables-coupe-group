var imgClicks = document.querySelectorAll('.img-click');
var popups = document.querySelectorAll('.popup');

imgClicks.forEach(function(imgClick, index) {
    imgClick.addEventListener('click', function() {
        var popup = popups[index];
        // Show the popup with the clicked image
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Close the popup when clicked outside of the image
        popup.addEventListener('click', function(event) {
            if (event.target === this) {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto'; // Allow scrolling again
            }
        });
    });
});