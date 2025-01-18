document.addEventListener('DOMContentLoaded', () => {
    // Theme handling
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.nextElementSibling.querySelector('i');
    const themeText = themeToggle.nextElementSibling.querySelector('span');
    
    // Function to set theme
    const setTheme = (isDark) => {
        console.log('Setting theme:', isDark ? 'dark' : 'light');
        if (!isDark) {
            document.body.classList.add('light-theme');
            themeToggle.checked = true;
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            themeText.textContent = 'Light mode';
        } else {
            document.body.classList.remove('light-theme');
            themeToggle.checked = false;
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            themeText.textContent = 'Dark mode';
        }
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme ? savedTheme === 'dark' : true);

    // Theme toggle handler
    themeToggle.addEventListener('change', () => {
        const isDark = !themeToggle.checked;
        setTheme(isDark);
    });

    // Folder handling
    const folderHeaders = document.querySelectorAll('.folder-header');
    
    folderHeaders.forEach(header => {
        // Set initial state to show content
        const arrow = header.querySelector('.arrow');
        const folderContent = header.nextElementSibling;
        arrow.textContent = '▼';
        folderContent.style.display = 'block';
        
        header.addEventListener('click', () => {
            const arrow = header.querySelector('.arrow');
            const folderContent = header.nextElementSibling;
            const isHidden = folderContent.style.display === 'none';
            
            // Toggle arrow
            arrow.textContent = isHidden ? '▼' : '►';
            
            // Toggle folder content
            folderContent.style.display = isHidden ? 'block' : 'none';
        });
    });

    // Navigation handling
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content');

    // Function to show a specific section
    const showSection = (sectionId) => {
        contentSections.forEach(section => {
            section.style.display = section.id === sectionId ? 'flex' : 'none';
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Get the section ID from the link text
            const targetId = link.textContent.trim().substring(1); // Remove the underscore
            showSection(targetId);

            // If navigating to about-me, show bio by default
            if (targetId === 'about-me') {
                const bioFile = document.querySelector('.file[data-file="bio"]');
                if (bioFile) {
                    bioFile.click();
                }
            }
        });
    });

    // File click handling
    const files = document.querySelectorAll('.file[data-file]');
    const fileContents = document.querySelectorAll('.file-content');
    const tabContent = document.querySelector('.tab-content');
    
    const showFileContent = (fileName) => {
        // Update tab content
        tabContent.innerHTML = `</> ${fileName}`;
        
        // Show corresponding content
        fileContents.forEach(content => {
            const contentId = `${fileName}-content`;
            if (content.id === contentId) {
                content.style.display = 'block';
                // Update line numbers based on content lines
                const lineCount = content.querySelectorAll('p').length;
                updateLineNumbers(lineCount);
            } else {
                content.style.display = 'none';
            }
        });
    };

    const updateLineNumbers = (count) => {
        const numbers = document.querySelector('.numbers');
        // Always show at least 30 lines
        const totalLines = Math.max(30, count);
        numbers.innerHTML = Array.from({ length: totalLines }, (_, i) => i + 1).join('<br>');
    };

    // Add scroll handler to sync line numbers with content scroll
    const editorContent = document.querySelector('.editor-content');
    if (editorContent) {
        editorContent.addEventListener('scroll', (e) => {
            const numbers = document.querySelector('.numbers');
            if (numbers) {
                numbers.scrollTop = e.target.scrollTop;
            }
        });
    }

    // Update line numbers on window resize
    window.addEventListener('resize', () => {
        const activeFile = document.querySelector('.file.active');
        if (activeFile) {
            const fileName = activeFile.getAttribute('data-file');
            showFileContent(fileName);
        }
    });

    files.forEach(file => {
        file.addEventListener('click', () => {
            // Remove active class from all files
            files.forEach(f => f.classList.remove('active'));
            // Add active class to clicked file
            file.classList.add('active');

            const fileName = file.getAttribute('data-file');
            showFileContent(fileName);
        });
    });

    // Set initial states
    showSection('hello');
    
    // If we're in about-me section, show skills by default
    if (window.location.hash === '#about-me') {
        const skillsFile = document.querySelector('.file[data-file="skills"]');
        if (skillsFile) {
            skillsFile.click();
        }
    }

    // Mobile menu handling
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            mainContent.classList.toggle('hide');
        });

        // When a file is clicked on mobile, hide sidebar and show content
        files.forEach(file => {
            const originalClick = file.onclick;
            file.onclick = (e) => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('show');
                    mainContent.classList.remove('hide');
                }
                originalClick && originalClick(e);
            };
        });
    }

    // Show sidebar by default on mobile for about-me section
    const showMobileSidebar = () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('show');
            mainContent.classList.add('hide');
        }
    };

    // Call when navigating to about-me
    navLinks.forEach(link => {
        const originalClick = link.onclick;
        link.onclick = (e) => {
            if (link.textContent.includes('about-me')) {
                showMobileSidebar();
            }
            originalClick && originalClick(e);
        };
    });
}); 