// --- HOMEPAGE SCRIPT ---

// List of images for the 4x4 grid (Needs at least 16 to look right)
// Ensure these exist in your Images folder.
const homeImages = [
      'barcelona as an ugly city/DSC04709.JPG',
        'barcelona as an ugly city/DSC04075.JPG',
        'barcelona as an ugly city/DSC04116.JPG',
        'barcelona as an ugly city/DSC04128.JPG',
        'barcelona as an ugly city/DSC04130.JPG',
        'barcelona as an ugly city/DSC04223.JPG',
        'barcelona as an ugly city/DSC04250.JPG',
        'barcelona as an ugly city/DSC04259.JPG',
        'barcelona as an ugly city/DSC04274.JPG',
        'barcelona as an ugly city/DSC04277.JPG',
        'barcelona as an ugly city/DSC04307.JPG',
        'barcelona as an ugly city/DSC04318.JPG',
        'barcelona as an ugly city/DSC04325.JPG',
        'barcelona as an ugly city/DSC04328.JPG',
        'barcelona as an ugly city/DSC04331.JPG',
        'barcelona as an ugly city/DSC04341.JPG',
];

const homeGrid = document.getElementById('home-grid');

// Loop through the list and build the grid
homeImages.forEach(filename => {
    // 1. Create the anchor link pointing to the gallery page
    const link = document.createElement('a');
    link.href = "gallery.html"; 
    link.classList.add('home-grid-item');

    // 2. Create the image content
    const img = document.createElement('img');
    img.src = `Images/${filename}`;
    img.alt = "Portfolio Entry";

    // 3. Put image inside link, and link inside grid
    link.appendChild(img);
    homeGrid.appendChild(link);
});