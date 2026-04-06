$(document).ready(function() {
    
    // 1. Thumbnail click hone par Main Image change karna
    $('.thumb').on('click', function() {
        let newImageSrc = $(this).attr('src'); // Clicked thumb ka src nikaalo
        
        // Main image ko fade out karke naya src daalo, fir fade in karo
        $('#mainImage').fadeOut(150, function() {
            $(this).attr('src', newImageSrc).fadeIn(150);
        });

        // Active border shift karna
        $('.thumb').removeClass('active-thumb');
        $(this).addClass('active-thumb');
    });

    // 2. Size select karne ka logic
    $('.size-option').on('click', function() {
        // Baaki sab sizes se 'selected' class hatao, sirf click wale pe lagao
        $('.size-option').removeClass('selected');
        $(this).addClass('selected');
    });

    // 3. Quantity Counter (Plus / Minus)
    $('.qty-btn').on('click', function() {
        let currentQty = parseInt($('#qtyInput').val());

        if ($(this).hasClass('plus')) {
            $('#qtyInput').val(currentQty + 1); // Increase
        } else if ($(this).hasClass('minus') && currentQty > 1) {
            $('#qtyInput').val(currentQty - 1); // Decrease (1 se kam nahi hoga)
        }
    });

    // 4. Add to Cart Button Alert
    $('.add-to-cart-btn').on('click', function() {
        let selectedSize = $('.size-option.selected').text();
        let currentQty = $('#qtyInput').val();

        if (!selectedSize) {
            alert("Bhai, pehle size select karlo!");
        } else {
            alert(`Added ${currentQty} item(s) of Size ${selectedSize} to the cart!`);
        }
    });

});