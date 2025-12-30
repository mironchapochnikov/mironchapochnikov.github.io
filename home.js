window.addEventListener('load', () => {
    console.log("Homepage loaded. Preloading gallery...");
    
    // Create a hidden link to prefetch the gallery page
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.href = 'gallery.html';
    
    // Append to head
    document.head.appendChild(prefetchLink);
});