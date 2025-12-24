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

'people': [
        'people/1-2.JPG',
        'people/17 (1 of 1)-2.JPG',
        'people/30 (1 of 1)-2.JPG',
        'people/55-2.JPG',
        'people/DSC03057.JPG',
        'people/DSC03086.JPG',
        'people/DSC03608-2.JPG',
        'people/DSC05795-2.JPG',
        'people/DSC07278-2.JPG',
        'people/DSC08349-2.JPG',
        'people/DSC08349.JPG',
        'people/DSC08849-2.JPG',
        'people/DSC08850-2.JPG',
        'people/DSC08855-2.JPG',
        'people/DSC08864-2.JPG',
        'people/DSC08992-2.JPG',
        'people/DSC09165-2.JPG',
        'people/introduction-07870-2.JPG',
        'people/not4x53-00330-2.JPG',
        'people/not4x53-00333-2.JPG',
        'people/not4x53-08924-2.JPG',
        'people/printy14 (1 of 1)-2.JPG',
        'people/printy235 (1 of 1)-2.JPG',
        'people/printy235 (1 of 1)-6-2.JPG',
        'people/printy235 (1 of 1)-7-2.JPG',
        'people/printy2391 (1 of 1)-2.JPG',
        'people/printy6 (1 of 1)-2.JPG',
        'people/printy7 (1 of 1)-2.JPG',
        'people/unedited-08519-2.JPG',
        'people/younguligan-08213-2.JPG',
        'people/younguligan-08236-2.JPG',
    ],


    'football celebrations': [
        'celebrations/DSC07572-2.JPG',
        'celebrations/DSC07578-2.JPG',
        'celebrations/DSC07632-2.JPG',
        'celebrations/DSC07633-2.JPG',
        'celebrations/DSC07639-2.JPG',
        'celebrations/DSC07663-2.JPG',
        'celebrations/pictureyes.JPG',
        'celebrations/printy21 (10 of 13)-2.JPG',
        'celebrations/printy21 (6 of 13)-3.JPG',
        'celebrations/printy21 (9 of 13)-2.JPG',
        'celebrations/printy22 (1 of 1)-2.JPG',
    ],

    'how to beach': [
        'how to beach/DSC03369.JPG',
        'how to beach/DSC03374.JPG',
        'how to beach/DSC03384.JPG',
        'how to beach/DSC04130.JPG',
        'how to beach/DSC05061-2.JPG',
        'how to beach/DSC05152-2-2.JPG',
        'how to beach/DSC05350-2.JPG',
        'how to beach/DSC05359-2.JPG',
        'how to beach/DSC07770.JPG',
        'how to beach/DSC07785.JPG',
        'how to beach/DSC07789.JPG',
        'how to beach/DSC07804.JPG',
        'how to beach/DSC07807.JPG',
        'how to beach/DSC07813.JPG',
        'how to beach/DSC07820.JPG',
        'how to beach/DSC07826.JPG',
        'how to beach/DSC07835.JPG',
        'how to beach/DSC07845.JPG',
        'how to beach/DSC07849.JPG',
        'how to beach/DSC07854.JPG',
    ],

      'portraits': [
        'portraits/12 (1 of 1)-2.JPG',
        'portraits/19 (1 of 1)-2.JPG',
        'portraits/22 (1 of 1)-2.JPG',
        'portraits/30 (1 of 1)-2.JPG',
        'portraits/7 (1 of 2)-2-2.JPG',
        'portraits/7 (18 of 19)-2.JPG',
        'portraits/7 (2 of 2)-2-2.JPG',
        'portraits/8 (1 of 1)-2.JPG',
        'portraits/brazy-08854-2.JPG',
        'portraits/brazy-08855-2.JPG',
        'portraits/brazy-08856-2.JPG',
        'portraits/bushi-00207-2.JPG',
        'portraits/DSC04157-2.JPG',
        'portraits/DSC07423-2.JPG',
        'portraits/Emi (1 of 1)-2.JPG',
        'portraits/g (12 of 14)-2.JPG',
        'portraits/olha-00196-2.JPG',
        'portraits/printy11 (2 of 4)-2.JPG',
        'portraits/printy12 (1 of 1)-2.JPG',
        'portraits/Testbackground2-09221-2.JPG',
        'portraits/yes (1 of 1)-2.JPG',
    ],

    'city life catalunya': [
        'city life catalunya/13Artboard 1@4x.png',
        'city life catalunya/13Artboard 2@4x.png',
        'city life catalunya/13Artboard 3@4x.png',
        'city life catalunya/13Artboard 4@4x.png',
        'city life catalunya/13Artboard 5@4x.png',
        'city life catalunya/13Artboard 6@4x.png',
        'city life catalunya/13Artboard 7@4x.png',
        'city life catalunya/DSC03280-2.JPG',
        'city life catalunya/DSC03280-min-2.JPG',
        'city life catalunya/DSC03308-2.JPG',
        'city life catalunya/DSC03320-2.JPG',
        'city life catalunya/DSC03322-2.JPG',
        'city life catalunya/DSC03326-2.JPG',
        'city life catalunya/DSC06768-2.JPG',
        'city life catalunya/DSC06822-3.JPG',
        'city life catalunya/DSC06840.JPG',
        'city life catalunya/DSC07271.JPG',
        'city life catalunya/DSC07452.JPG',
        'city life catalunya/DSC07469.JPG',
        'city life catalunya/DSC07721-2.JPG',
    ],

    'city life spain': [
        'city life spain/15 (3 of 4)-2.JPG',
        'city life spain/DSC05734-2.JPG',
        'city life spain/et-2.JPG',
        'city life spain/not4x532-00026-min-2.JPG',
        'city life spain/not4x532-00454-2.JPG',
        'city life spain/printy234 (1 of 1).JPG',
        'city life spain/printy235 (1 of 1)-4-2.JPG',
        'city life spain/safd-2.JPG',
        'city life spain/Testbackground2-08538-2.JPG',
    ],

    'city life istanbul': [
        'city life istanbul/batch2-09569-2.JPG',
        'city life istanbul/batch2-09574-2.JPG',
        'city life istanbul/Edit2-09521-2.JPG',
        'city life istanbul/Edit2-09522-2.JPG',
        'city life istanbul/Olha (1 of 1)-2.JPG',
        'city life istanbul/Testbackground2-08842-2.JPG',
        'city life istanbul/Testbackground2-08892-2.JPG',
    ],

    'brutalist dream': [
        'brutalist dream/2-2.JPG',
        'brutalist dream/4-2.JPG',
        'brutalist dream/5-2.JPG',
        'brutalist dream/7-2.JPG',
        'brutalist dream/DSC08556-2-2.JPG',
        'brutalist dream/DSC08585-2.JPG',
        'brutalist dream/DSC08600-2-2.JPG',
        'brutalist dream/DSC08600-2.JPG',
        'brutalist dream/DSC08614-2.JPG',
        'brutalist dream/DSC08618-2.JPG',
        'brutalist dream/DSC08625-2.JPG',
        'brutalist dream/DSC08635-2.JPG',
        'brutalist dream/not4x5233-09631-2.JPG',
        'brutalist dream/printy10 (1 of 1)-2.JPG',
    ],

    'valencia': [
        'valencia/sevilla-07966-2.JPG',
        'valencia/sevilla-07968-2.JPG',
        'valencia/sevilla-07973-2.JPG',
        'valencia/sevilla-07977-2.JPG',
        'valencia/sevilla-08022-2.JPG',
        'valencia/sevilla-08042-2.JPG',
        'valencia/sevilla-08098-2.JPG',
        'valencia/sevilla2-07954-2.JPG',
        'valencia/unedited2-08031-2.JPG',
    ],
    'one bike ride': [
        'one bike ride/DSC06497-2.JPG',
        'one bike ride/DSC06500-2.JPG',
        'one bike ride/DSC06502-2.JPG',
        'one bike ride/DSC06524-2.JPG',
        'one bike ride/DSC06525-2.JPG',
        'one bike ride/DSC06534-2.JPG',
        'one bike ride/DSC06537-2.JPG',
        'one bike ride/DSC06538-2.JPG',
        'one bike ride/DSC06539-2.JPG',
        'one bike ride/DSC06545-2.JPG',
        'one bike ride/DSC06546-2.JPG',
        'one bike ride/DSC06550-2.JPG',
        'one bike ride/DSC06551-2.JPG',
        'one bike ride/DSC06552-2.JPG',
        'one bike ride/DSC06554-2.JPG',
        'one bike ride/DSC06558-2.JPG',
        'one bike ride/DSC06571-2.JPG',
        'one bike ride/DSC06580-2.JPG',
    ],
    'club shy': [
        'club shy/DSC07119.JPG',
        'club shy/DSC07144.JPG',
        'club shy/DSC07185.JPG',
        'club shy/DSC07199.JPG',
        'club shy/DSC07204.JPG',
        'club shy/DSC07227.JPG',
        'club shy/DSC07278.JPG',
        'club shy/DSC07303.JPG',
        'club shy/DSC07354.JPG',
        'club shy/DSC07419.JPG',
    ],


    'tuschinski': [
        'tuschinski/1.1-2.JPG',
        'tuschinski/16-2.JPG',
        'tuschinski/2-2.JPG',
        'tuschinski/20-2.JPG',
        'tuschinski/3-2.JPG',
        'tuschinski/33 (1 of 1)-2.JPG',
        'tuschinski/4-2.JPG',
        'tuschinski/5 (1 of 1)-2.JPG',
        'tuschinski/5-2.JPG',
        'tuschinski/6 (1 of 1)-2.JPG',
        'tuschinski/7 (1 of 1)-2.JPG',
        'tuschinski/g (1 of 1)-2.JPG',
        'tuschinski/g2 (1 of 5)-2.JPG',
        'tuschinski/g2 (3 of 5)-2.JPG',
        'tuschinski/g2 (4 of 5)-2.JPG',
    ],

    'city life others': [
        'city life others/13 (1 of 1)-2.JPG',
        'city life others/32 (1 of 1)-2.JPG',
        'city life others/6-2.JPG',
        'city life others/Cars (1 of 1)-2.JPG',
        'city life others/DSC02216-2.JPG',
        'city life others/DSC06017-2-2.JPG',
        'city life others/DSC06020-2-2.JPG',
        'city life others/DSC06024-2-2.JPG',
        'city life others/DSC06029-2-2.JPG',
        'city life others/G4 (1 of 1)-2.JPG',
        'city life others/Post (1 of 9)-2.JPG',
        'city life others/printy235 (1 of 1)-3-2.JPG',
        'city life others/printy235 (1 of 2)-2.JPG',
        'city life others/printy237 (1 of 1)-2.JPG',
        'city life others/printy237 (1 of 1)-7-2.JPG',
        'city life others/printy237 (1 of 1)-8-2.JPG',
        'city life others/Testbackground2-07376-2.JPG',
        'city life others/Testbackground2-07382-2.JPG',
    ],
    'poems': [
        'poems/final2Artboard 1@4x.png',
        'poems/ProposalArtboard 1@4x.png',
        'poems/ProposalArtboard 2@4x.png',
        'poems/ProposalArtboard 3@4x.png',
        'poems/ProposalArtboard 4@4x.png',
        'poems/ProposalArtboard 5@4x.png',
        'poems/stjordi.png',
    ],
    'generation communication': [
        'generation communication/1.png',
        'generation communication/10.png',
        'generation communication/2.JPG',
        'generation communication/3.png',
        'generation communication/4.png',
        'generation communication/5.JPG',
        'generation communication/6.JPG',
        'generation communication/7.png',
        'generation communication/8.png',
        'generation communication/9.png',
        'generation communication/DSC05061.JPG',
        'generation communication/DSC05152-2.JPG',
        'generation communication/DSC05350.JPG',
        'generation communication/DSC05359.JPG',
    ],
    
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


