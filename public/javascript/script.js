document.addEventListener('DOMContentLoaded', function() {
    const logoImage = document.getElementById('logo-image');
  
    if (logoImage) {
      logoImage.addEventListener('click', function() {
        window.location.href = '/'; 
      });
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const orderNowButton = document.querySelector('.btn-1');
  
    if (orderNowButton) {
      orderNowButton.addEventListener('click', function() {
        window.location.href = '/menu'; 
      });
    }
  });
