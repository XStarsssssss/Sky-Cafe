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
  const reviewForm = document.getElementById('review-form');
        const reviewsList = document.getElementById('reviews-list');
        const noReviewsMessage = document.getElementById('no-reviews-message');
        const messageBox = document.getElementById('message-box');

        let reviews = []; 

        function showMessage(message, type = 'success') {
            messageBox.textContent = message;
            messageBox.className = `fixed top-4 left-1/2 transform -translate-x-1/2 bg-${type === 'success' ? 'green' : 'red'}-100 text-${type === 'success' ? 'green' : 'red'}-700 border border-${type === 'success' ? 'green' : 'red'}-400 px-4 py-2 rounded shadow-md`;
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 3000); 
        }

        function displayReviews() {
            if (reviews.length === 0) {
                noReviewsMessage.classList.remove('hidden');
                reviewsList.innerHTML = ''; 
            } else {
                noReviewsMessage.classList.add('hidden');
                reviewsList.innerHTML = reviews.map(review => `
                    <li class="bg-gray-50 p-4 rounded-md shadow-sm">
                        <strong class="font-semibold text-gray-800">${review.name}</strong> - 
                        <span class="text-yellow-500">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                        <p class="text-gray-700 mt-2">${review.comment}</p>
                    </li>
                `).join('');
            }
        }

        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = event.target.name.value.trim();
            const rating = parseInt(event.target.rating.value);
            const comment = event.target.comment.value.trim();

            if (!name || isNaN(rating) || rating < 1 || rating > 5 || !comment) {
                showMessage('Please fill in all fields with valid information.', 'error');
                return;
            }

            const newReview = { name, rating, comment };
            reviews.push(newReview); // Add to in-memory array
            displayReviews(); // Update display
            showMessage('Thank you for your review!');
            reviewForm.reset();
        });

        // Initial display (in case there are any reviews already)
        displayReviews();
