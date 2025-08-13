function shiftRowLeft(rowId) {
    const row = document.getElementById(rowId);
    if (row && row.children.length > 0) {
        const first = row.children[0];
        row.appendChild(first);
        
        // हमेशा नए पहले बॉक्स को special styling दें
        updateBoxStyles(rowId);
    }
}

function swapColumnsBetweenRows(rowId1, rowId2) {
    const row1 = document.getElementById(rowId1);
    const row2 = document.getElementById(rowId2);

    if (row1 && row2 && row1.children.length > 0 && row2.children.length > 0) {
        const temp1 = row1.children[0];
        const temp2 = row2.children[0];

        row1.removeChild(temp1);
        row2.removeChild(temp2);

        row1.insertBefore(temp2, row1.children[0]);
        row2.insertBefore(temp1, row2.children[0]);
        
        // दोनों rows के पहले बॉक्स को update करें
        updateBoxStyles(rowId1);
        updateBoxStyles(rowId2);
    }
}

// Special styling apply करने का function
function updateBoxStyles(rowId) {
    const row = document.getElementById(rowId);
    if (row && row.children.length > 0) {
        // पहले सभी बॉक्स की default styling reset करें
        Array.from(row.children).forEach(box => {
            box.style.borderRadius = '0';
            box.classList.remove('special-box');
        });
        
        // पहले बॉक्स को special styling दें
        const firstBox = row.children[0];
        firstBox.style.borderRadius = '0 0 0 10px';
        firstBox.classList.add('special-box');
    }
}

// Run animations on all screen sizes
function handleAnimations() {
    // पहले initial styling apply करें
    updateBoxStyles('row1');
    updateBoxStyles('row2');
    updateBoxStyles('row3');
    
    setInterval(() => {
        shiftRowLeft('row1');
        shiftRowLeft('row3');
        swapColumnsBetweenRows('row2', 'row3');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', handleAnimations);

        // /=================================///////////////////=========================================


      document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content-box');
    const tabButtonsContainer = document.querySelector('.tab-buttons');
    const tabContentWrapper = document.querySelector('.tab-content-wrapper');
    
    // Function to reorganize DOM for mobile view
    function setupMobileView() {
        // Create tab items container if it doesn't exist
        if (!document.querySelector('.mobile-tabs-container')) {
            const mobileContainer = document.createElement('div');
            mobileContainer.className = 'mobile-tabs-container';
            tabButtonsContainer.parentNode.insertBefore(mobileContainer, tabButtonsContainer);
            mobileContainer.appendChild(tabButtonsContainer);
        }
        
        // Wrap each button and its content in a tab-item div
        tabButtons.forEach(button => {
            const tabId = button.getAttribute('data-tab');
            const content = document.getElementById(tabId);
            
            // Check if already wrapped
            if (!button.closest('.tab-item')) {
                const tabItem = document.createElement('div');
                tabItem.className = 'tab-item';
                
                // Insert the tab item before the button
                button.parentNode.insertBefore(tabItem, button);
                
                // Move button and content into the tab item
                tabItem.appendChild(button);
                tabItem.appendChild(content);
            }
        });
    }
    
    // Function to restore desktop view
    function setupDesktopView() {
        // Remove mobile container if exists
        const mobileContainer = document.querySelector('.mobile-tabs-container');
        if (mobileContainer) {
            mobileContainer.parentNode.insertBefore(tabButtonsContainer, mobileContainer);
            mobileContainer.remove();
        }
        
        // Unwrap tab items
        document.querySelectorAll('.tab-item').forEach(tabItem => {
            const button = tabItem.querySelector('.tab-button');
            const content = tabItem.querySelector('.tab-content-box');
            
            // Move button back to buttons container
            tabButtonsContainer.appendChild(button);
            
            // Move content back to content wrapper
            tabContentWrapper.appendChild(content);
            
            // Remove the tab item wrapper
            tabItem.remove();
        });
    }
    
    // Handle tab click
    function handleTabClick(button) {
        const tabId = button.getAttribute('data-tab');
        const content = document.getElementById(tabId);
        
        if (window.innerWidth <= 1024) {
            // Mobile behavior
            const isActive = button.classList.contains('active');
            
            // Close all other tabs
            tabButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('active');
                }
            });
            
            tabContents.forEach(box => {
                if (box !== content) {
                    box.style.display = 'none';
                }
            });
            
            // Toggle current tab
            button.classList.toggle('active');
            content.style.display = isActive ? 'none' : 'block';
        } else {
            // Desktop behavior
            if (!button.classList.contains('active')) {
                // Close all tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(box => box.classList.remove('active'));
                
                // Open current tab
                button.classList.add('active');
                content.classList.add('active');
            }
        }
    }
    
    // Initialize the view based on screen size
    function initializeView() {
        if (window.innerWidth <= 1024) {
            setupMobileView();
            
            // Close all tabs initially on mobile
            tabContents.forEach(box => {
                box.style.display = 'none';
            });
        } else {
            setupDesktopView();
            
            // Activate first tab on desktop if none active
            if (!document.querySelector('.tab-button.active')) {
                const firstButton = tabButtons[0];
                firstButton.classList.add('active');
                document.getElementById(firstButton.getAttribute('data-tab')).classList.add('active');
            }
        }                          
    }
    
    // Add event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleTabClick(this);
        });
    });
    
    // Initialize on load
    initializeView();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        initializeView();
    });
});


        
    

    // ==========================================================================


     // Show/hide mobile or desktop layout based on screen size
        function toggleLayout() {
            const desktopElements = document.querySelectorAll('.desktop-flex-col');
            const mobileElements = document.querySelectorAll('.mobile-layout, .mobile-first-row, .mobile-second-row');
            
            if (window.innerWidth > 768) {
               
                mobileElements.forEach(el => el.style.display = 'none');
            } else {
               
                desktopElements.forEach(el => el.style.display = 'none');
                mobileElements.forEach(el => el.style.display = 'block');
            }
        }
        
        // Run on load and resize
        window.addEventListener('load', toggleLayout);
        window.addEventListener('resize', toggleLayout);


        //    ============================================================

   document.addEventListener('DOMContentLoaded', function() {
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Open menu
    menuOpen.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    // Close menu
    menuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close menu when clicking on links (optional)
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
                                                                                                                                                                                                                        // 