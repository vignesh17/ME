// Import SVG diagrams and project content
import * as SVG from './svg.js';
import { projectContent } from './project_content.js';

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

    // Project file click handler
    document.querySelectorAll('.file[data-file]').forEach(file => {
        file.addEventListener('click', () => {
            const projectId = file.getAttribute('data-file');
            if (projectContent[projectId]) {
                // Update active state
                document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
                file.classList.add('active');
                
                // Hide project cards and show project content
                const projectsGrid = document.querySelector('.projects-grid');
                if (projectsGrid) {
                    projectsGrid.style.display = 'none';
                }
                
                // Show project content in editor style
                const mainContent = document.querySelector('#projects .main-content');
                const project = projectContent[projectId];
                
                // Get existing editor or create new one
                let codeEditor = mainContent.querySelector('.code-editor');
                if (!codeEditor) {
                    codeEditor = document.createElement('div');
                    codeEditor.className = 'code-editor';
                    mainContent.appendChild(codeEditor);
                }

                // Get or create editor header
                let editorHeader = codeEditor.querySelector('.editor-header');
                if (!editorHeader) {
                    editorHeader = document.createElement('div');
                    editorHeader.className = 'editor-header';
                    codeEditor.appendChild(editorHeader);
                }

                // Check if tab already exists
                let existingTab = editorHeader.querySelector(`.tab[data-project="${projectId}"]`);
                if (!existingTab) {
                    // Create new tab
                    const tab = document.createElement('div');
                    tab.className = 'tab';
                    tab.setAttribute('data-project', projectId);
                    tab.innerHTML = `
                        <span class="tab-content">&lt;/&gt; ${projectId.toUpperCase()}</span>
                        <span class="close">×</span>
                    `;
                    editorHeader.appendChild(tab);

                    // Add close handler
                    tab.querySelector('.close').addEventListener('click', (e) => {
                        e.stopPropagation();
                        const editorHeader = tab.parentElement;
                        const remainingTabs = editorHeader.querySelectorAll('.tab').length;
                        
                        // Remove this tab
                        tab.remove();
                        
                        // If this was the last tab
                        if (remainingTabs === 1) {
                            const mainContent = document.querySelector('#projects .main-content');
                            const projectsGrid = document.querySelector('.projects-grid');
                            if (projectsGrid) {
                                mainContent.innerHTML = projectsGrid.outerHTML;
                                const newProjectsGrid = mainContent.querySelector('.projects-grid');
                                newProjectsGrid.style.display = 'grid';

                                // Reattach click handlers to project cards
                                newProjectsGrid.querySelectorAll('.project-card').forEach(card => {
                                    card.addEventListener('click', () => {
                                        const projectLink = card.querySelector('.project-link');
                                        if (projectLink) {
                                            const projectId = projectLink.getAttribute('data-project');
                                            const projectFile = document.querySelector(`.file[data-file="${projectId}"]`);
                                            if (projectFile) {
                                                projectFile.click();
                                            }
                                        }
                                    });
                                });
                            }
                            // Remove active state from file
                            const activeFile = document.querySelector('.file.active');
                            if (activeFile) {
                                activeFile.classList.remove('active');
                            }
                        } else if (tab.classList.contains('active') && remainingTabs > 1) {
                            // If this was the active tab but not the last one, activate another tab
                            const lastTab = editorHeader.querySelector('.tab:last-child');
                            if (lastTab) {
                                lastTab.click();
                            }
                        }
                    });

                    // Add click handler for tab
                    tab.addEventListener('click', () => {
                        // Update active tab
                        editorHeader.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');

                        // Update content
                        const editorContent = codeEditor.querySelector('.editor-content') || document.createElement('div');
                        editorContent.className = 'editor-content';
                        editorContent.innerHTML = `
                            <div class="line-numbers">
                                <div class="numbers"></div>
                            </div>
                            <div class="code-content">
                                ${project.content}
                            </div>
                        `;
                        if (!codeEditor.contains(editorContent)) {
                            codeEditor.appendChild(editorContent);
                        }

                        // Initialize line numbers
                        const content = editorContent.querySelector('.code-content');
                        const lineCount = content.innerHTML.split('\n').length;
                        updateLineNumbers(lineCount);
                    });
                }

                // Activate the tab
                const tab = existingTab || editorHeader.querySelector(`.tab[data-project="${projectId}"]`);
                tab.click();
            }
        });
    });

    // Project card click handler
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectLink = card.querySelector('.project-link');
            if (projectLink) {
                const projectId = projectLink.getAttribute('data-project');
                const projectFile = document.querySelector(`.file[data-file="${projectId}"]`);
                if (projectFile) {
                    projectFile.click();
                }
            }
        });
    });
}); 