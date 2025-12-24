// --- HOMEPAGE SCRIPT ---

// List of images for the 4x4 grid (Needs at least 16 to look right)
// Ensure these exist in your Images folder.
const homeImages = [
    'back_door_481-250x166.jpg', 'informal-seating_01.jpg', 'tc92_72x78-250x166.jpg', 'asoue24-250x166.jpg',
    'msv14-250x166.jpg', '092-250x166.jpg', 'svp05-200x250.jpg', 'start_tcd26-200x250.jpg',
    'portrait_042.jpg', 'crop_lo_DSC1563-copy-250x200.jpg', 'back_door_191-250x166.jpg', '94-250x166.jpg',
    'start_005-250x201.jpg', '5_e-250x166.jpg', 'tc39_70x87.5-250x166.jpg', 'msv12-250x166.jpg'
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