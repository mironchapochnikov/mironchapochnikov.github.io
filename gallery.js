// --- GALLERY PAGE SCRIPT ---

document.body.classList.add('gallery-mode-active');

const galleryImages = {
    // CATEGORY: BARCELONA
    'barcelona as an ugly city': [
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
        'barcelona as an ugly city/DSC04344.JPG',
        'barcelona as an ugly city/DSC04382.JPG',
        'barcelona as an ugly city/DSC04404.JPG',
        'barcelona as an ugly city/DSC04413.JPG',
        'barcelona as an ugly city/DSC04420.JPG',
        'barcelona as an ugly city/DSC04425.JPG',
        'barcelona as an ugly city/DSC04431.JPG',
        'barcelona as an ugly city/DSC04434.JPG',
        'barcelona as an ugly city/DSC04438.JPG',
        'barcelona as an ugly city/DSC04450.JPG',
        'barcelona as an ugly city/DSC04452.JPG',
        'barcelona as an ugly city/DSC04482.JPG',
        'barcelona as an ugly city/DSC04489.JPG',
        'barcelona as an ugly city/DSC04506.JPG',
        'barcelona as an ugly city/DSC04515.JPG',
        'barcelona as an ugly city/DSC04520.JPG',
        'barcelona as an ugly city/DSC04524.JPG',
        'barcelona as an ugly city/DSC04583.JPG',
        'barcelona as an ugly city/DSC04619.JPG',
        'barcelona as an ugly city/DSC04634.JPG',
        'barcelona as an ugly city/DSC04648.JPG',
        'barcelona as an ugly city/DSC04666.JPG',
        'barcelona as an ugly city/DSC04804.JPG',
        'barcelona as an ugly city/DSC05421.JPG'
    ],
    
    'celebrations': [
        'celebrations/printy21 (6 of 13).JPG',
        'celebrations/printy21 (9 of 13).JPG',
        'celebrations/printy21 (10 of 13).JPG',
        'celebrations/printy22 (1 of 1).JPG',
        'celebrations/pictureyes.JPG',
        'celebrations/DSC07663.JPG',
        'celebrations/DSC07578.JPG',
        'celebrations/DSC07632.JPG',
        'celebrations/DSC07639.JPG',
        'celebrations/DSC07572.JPG'
    ],

    'Foto1': [],
    'Foto2': [],
    'Foto3': [],
    'Foto4': [],
    'Foto5': [],
    'Foto6': [],
    'Foto7': [],
    'Foto8': [],
    
};

// GLOBAL VARIABLES
let currentCategoryList = []; 
let currentIndex = 0; 
const mainImage = document.getElementById('current-image');
const thumbStrip = document.getElementById('thumbnail-strip');

// FUNCTION: LOAD A SPECIFIC CATEGORY
function loadCategory(categoryName, clickedElement) {
    currentCategoryList = galleryImages[categoryName] || galleryImages['default'];
    
    // Sidebar active state logic
    if (clickedElement) {
        document.querySelectorAll('.nav a').forEach(link => link.classList.remove('active'));
        clickedElement.classList.add('active');
    }

    thumbStrip.innerHTML = '';
    
    currentCategoryList.forEach((filename, index) => {
        const thumb = document.createElement('img');
        thumb.src = `Images/${filename}`; 
        thumb.classList.add('thumb-item');
        thumb.addEventListener('click', () => transitionToImage(index));
        thumbStrip.appendChild(thumb);
    });
    
    if(currentCategoryList.length > 0) {
        updateMainImageSource(0);
    } else {
        mainImage.src = ""; // Clear image if category is empty
        const counter = document.getElementById('image-counter');
        if (counter) counter.textContent = "";
    }
}

// FADE TRANSITION LOGIC
function transitionToImage(index) {
    mainImage.classList.add('fade-out'); 
    setTimeout(() => {
        updateMainImageSource(index); 
        mainImage.classList.remove('fade-out');
    }, 200); 
}

// CORE IMAGE UPDATE
function updateMainImageSource(index) {
    currentIndex = index;
    mainImage.src = `Images/${currentCategoryList[index]}`;
    
    // --- COUNTER LOGIC (With Safety Check) ---
    const imageCounter = document.getElementById('image-counter');
    if (imageCounter && currentCategoryList.length > 0) {
        imageCounter.textContent = `${index + 1}/${currentCategoryList.length}`;
    }
    // -----------------------------------------

    const allThumbs = document.querySelectorAll('.thumb-item');
    allThumbs.forEach(t => t.classList.remove('active'));
    
    if(allThumbs[index]) {
        allThumbs[index].classList.add('active');
    }
}

// KEYBOARD NAVIGATION
function showNext() {
    if (currentCategoryList.length === 0) return;
    let nextIndex = currentIndex + 1;
    if (nextIndex >= currentCategoryList.length) nextIndex = 0; 
    transitionToImage(nextIndex);
}

function showPrev() {
    if (currentCategoryList.length === 0) return;
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = currentCategoryList.length - 1;
    transitionToImage(prevIndex);
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});

// INITIALIZE
// Pass 'null' because no button was clicked on initial load
loadCategory('barcelona as an ugly city', null);


