 
      function shiftRowLeft(rowId) {
    const row = document.getElementById(rowId);
    if (row && row.children.length > 0) {
        const first = row.children[0];
        row.appendChild(first); 
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
    }
}

// Run animations on all screen sizes
function handleAnimations() {
    setInterval(() => {
        shiftRowLeft('row1');
        shiftRowLeft('row3');
        swapColumnsBetweenRows('row2', 'row3');
    }, 2000);
}


document.addEventListener('DOMContentLoaded', handleAnimations);

        // /=================================///////////////////=========================================


        // Comprehensive IT consulting Section
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            
            function handleTabClick(button) {
                const tabId = button.getAttribute('data-tab');
                const content = document.getElementById(tabId);
                
                if (window.innerWidth > 991) {
                    
                    if (!button.classList.contains('active')) {
                       
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        document.querySelectorAll('.tab-content-box').forEach(box => {
                            box.classList.remove('active');
                        });
                        
                       
                        button.classList.add('active');
                        content.classList.add('active');
                    }
                } else {
                    
                    const isActive = button.classList.contains('active');
                    
                
                    button.classList.toggle('active');
                    content.style.display = isActive ? 'none' : 'block';
                }
            }
            
           
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    handleTabClick(this);
                });
            });
            
           
            if (window.innerWidth > 991) {
                tabButtons[0].classList.add('active');
                document.getElementById('tab1').classList.add('active');
            } else {
               
                document.querySelectorAll('.tab-content-box').forEach(box => {
                    box.style.display = 'none';
                });
            }
            
           
            window.addEventListener('resize', function() {
                if (window.innerWidth > 991) {
                   
                    document.querySelectorAll('.tab-content-box').forEach(box => {
                        box.style.display = '';
                    });
                    
                    
                    const activeTab = document.querySelector('.tab-button.active');
                    if (!activeTab) {
                        tabButtons[0].classList.add('active');
                        document.getElementById('tab1').classList.add('active');
                    }
                } else {
                   
                    tabButtons.forEach(button => {
                        button.classList.remove('active');
                    });
                    document.querySelectorAll('.tab-content-box').forEach(box => {
                        box.style.display = 'none';
                    });
                }
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