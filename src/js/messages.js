$(document).on('click', '#btn-submit', function(event) {
    event.preventDefault()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for your question',
        showConfirmButton: false, 
        timer: 2000 }),
        window.setTimeout(function(){document.location.reload(true)},2000);
 return false;

})