const bookPages = [
    "Page 1 content...",
    "Page 2 content...",
    // Add more page content here
];

const bookPagesContainer = document.querySelector('.book-pages');

// Dynamically generate book pages
bookPages.forEach((content, index) => {
    const page = document.createElement('div');
    page.classList.add('book-page');
    page.textContent = content;

    if (index === 0) {
        page.style.display = 'block';
    }

    bookPagesContainer.appendChild(page);
});

let currentPageIndex = 0;

function showPage(index) {
    const pages = document.querySelectorAll('.book-page');
    pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
    currentPageIndex = index;
}

// Implement navigation to flip between pages
// You can use buttons or other UI elements to trigger the navigation
// Example: 
document.addEventListener('DOMContentLoaded', () => {
    const nextPageButton = document.createElement('button');
    nextPageButton.textContent = 'Next Page';
    nextPageButton.addEventListener('click', () => {
        const nextIndex = (currentPageIndex + 1) % bookPages.length;
        showPage(nextIndex);
    });

    const prevPageButton = document.createElement('button');
    prevPageButton.textContent = 'Previous Page';
    prevPageButton.addEventListener('click', () => {
        const prevIndex = (currentPageIndex - 1 + bookPages.length) % bookPages.length;
        showPage(prevIndex);
    });

    document.body.appendChild(prevPageButton);
    document.body.appendChild(nextPageButton);

    showPage(currentPageIndex);
});
